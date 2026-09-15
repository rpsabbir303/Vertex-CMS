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
import { TeamPeopleField } from "./TeamPeopleField";
import { TeamProfile } from "./TeamProfile";

type Props = {
  status: TeamDirectoryStatus;
  members: TeamMember[];
};

function gridPlacement(index: number, total: number, filtered: boolean) {
  if (filtered || total === 0) {
    return { spotlight: false, compact: false, className: "" };
  }

  if (index === 0) {
    return { spotlight: true, compact: false, className: "col-span-1 md:col-span-12" };
  }

  if (index === 1 || index === 2) {
    return { spotlight: false, compact: false, className: "col-span-1 md:col-span-6" };
  }

  return {
    spotlight: false,
    compact: index >= 5,
    className: "col-span-1 md:col-span-4",
  };
}

export function TeamDirectory({ status, members }: Props) {
  const directory = getDirectoryMembers(members);
  const departments = useMemo(
    () => Array.from(new Set(directory.map((member) => member.department).filter((value): value is string => Boolean(value)))),
    [directory],
  );
  const [filter, setFilter] = useState("All");
  const filtered = filter !== "All";
  const visible = filtered ? directory.filter((member) => member.department === filter) : directory;
  const showDemoNotice = hasDemoTeamContent(directory);

  if (status !== "loaded" || directory.length === 0) return null;

  return (
    <section className="relative z-[2] overflow-hidden border-b border-brand-navy/[0.1]" aria-labelledby="team-directory-heading">
      <TeamPeopleField />

      <div className="site-shell relative z-[2] py-16 sm:py-20 lg:py-24">
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
          <div className="relative z-[2] mt-8 flex flex-wrap gap-2" role="group" aria-label={teamDirectoryCopy.filterAriaLabel}>
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

        <ul
          className={`relative z-[2] mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 ${
            filtered ? "lg:grid-cols-3" : "md:grid-cols-12 lg:gap-x-8 lg:gap-y-14"
          }`}
          role="list"
        >
          {visible.map((member, index) => {
            const placement = gridPlacement(index, visible.length, filtered);
            const variant = placement.spotlight ? "spotlight" : placement.compact ? "compact" : "secondary";

            return (
              <li key={member.id} className={`min-w-0 ${placement.className}`}>
                <TeamProfile member={member} variant={variant} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
