"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  TEAM_DEPARTMENT_FILTERS,
  getDirectoryMembers,
  hasDemoTeamContent,
  teamDirectoryCopy,
  type TeamMember,
} from "@/lib/marketing/team/content";
import type { TeamDirectoryStatus } from "@/lib/marketing/team/useTeamDirectory";
import { TeamGalleryMember } from "./TeamGalleryMember";

type Props = {
  status: TeamDirectoryStatus;
  members: TeamMember[];
};

export function TeamEditorialGallery({ status, members }: Props) {
  const directory = getDirectoryMembers(members);
  const [filterId, setFilterId] = useState<(typeof TEAM_DEPARTMENT_FILTERS)[number]["id"]>("all");
  const activeFilter = TEAM_DEPARTMENT_FILTERS.find((f) => f.id === filterId) ?? TEAM_DEPARTMENT_FILTERS[0]!;

  const filtered = useMemo(() => {
    if (!activeFilter.department) return directory;
    return directory.filter((m) => m.department === activeFilter.department);
  }, [directory, activeFilter.department]);

  if (status !== "loaded" || directory.length === 0) return null;

  return (
    <section className="relative z-[2] overflow-hidden border-b border-brand-navy/10 bg-[#FAFCFE]" aria-labelledby="team-gallery-heading">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,35,63,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="site-shell relative z-[2] w-full max-w-[1240px] py-10 sm:py-12 lg:py-14">
        <Reveal>
          <h2 id="team-gallery-heading" className="display-title text-[1.75rem] leading-[1.1] text-[#08233F] sm:text-[2rem]">
            {teamDirectoryCopy.headline}
          </h2>
          <p className="mt-2 max-w-2xl text-[15px] leading-[1.7] text-[#111827]">{teamDirectoryCopy.intro}</p>
          {hasDemoTeamContent(members) ? <p className="sr-only">{teamDirectoryCopy.demoNotice}</p> : null}
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-b border-brand-navy/10" role="group" aria-label={teamDirectoryCopy.filterAriaLabel}>
          {TEAM_DEPARTMENT_FILTERS.map((f) => {
            const active = f.id === filterId;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilterId(f.id)}
                className={`relative mb-[-1px] border-b-2 px-1 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:text-[11px] ${
                  active ? "border-brand-orange text-[#08233F]" : "border-transparent text-[#08233F]/60 hover:text-[#08233F]"
                }`}
              >
                {f.id === "all" ? teamDirectoryCopy.filterAll : f.label}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-8 text-[14px] text-[#111827]">No profiles in this discipline yet.</p>
        ) : (
          <Reveal delay={30}>
            <ul
              className="mt-8 grid grid-cols-1 gap-x-7 gap-y-8 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10"
              role="list"
            >
              {filtered.map((member) => (
                <li key={member.id} className="min-w-0">
                  <TeamGalleryMember member={member} />
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
