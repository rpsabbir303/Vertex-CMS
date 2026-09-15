"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  getDirectoryMembers,
  hasDemoTeamContent,
  teamDirectoryCopy,
  type TeamMember,
} from "@/lib/marketing/team/content";
import type { TeamDirectoryStatus } from "@/lib/marketing/team/useTeamDirectory";
import { TeamProfile } from "./TeamProfile";

type Props = {
  status: TeamDirectoryStatus;
  members: TeamMember[];
};

export function TeamDirectory({ status, members }: Props) {
  const directory = getDirectoryMembers(members);
  const departments = useMemo(
    () => Array.from(new Set(directory.map((member) => member.department).filter((value): value is string => Boolean(value)))),
    [directory]
  );
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? directory : directory.filter((member) => member.department === filter);
  const showDemoNotice = hasDemoTeamContent(directory);

  if (status !== "loaded" || directory.length === 0) return null;

  return (
    <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-labelledby="team-directory-heading">
      <div className="site-shell relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="careers-safe-zone">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{teamDirectoryCopy.eyebrow}</p>
            <h2 id="team-directory-heading" className="display-title mt-4 text-[1.85rem] leading-[1.1] sm:text-[2.2rem] lg:text-[2.5rem]">
              {teamDirectoryCopy.headline}
            </h2>
            {showDemoNotice ? (
              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.14em] text-brand-muted/70">{teamDirectoryCopy.demoNotice}</p>
            ) : null}
          </div>
        </Reveal>

        {departments.length > 1 ? (
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={teamDirectoryCopy.filterAriaLabel}>
            {[teamDirectoryCopy.filterAll, ...departments].map((label) => {
              const active = filter === label;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(label)}
                  className={`rounded-full border px-3 py-1.5 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 ${
                    active
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-brand-navy/12 bg-white text-brand-navy/80 hover:border-brand-navy/25"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        ) : null}

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" role="list">
          {visible.map((member, index) => {
            const spotlight = filter === "All" && index === 0;
            const compact = filter === "All" && index >= 4;
            return (
              <li key={member.id} className={spotlight ? "sm:col-span-2 lg:col-span-2 lg:row-span-1" : ""}>
                <TeamProfile member={member} variant={spotlight ? "spotlight" : compact ? "compact" : "secondary"} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
