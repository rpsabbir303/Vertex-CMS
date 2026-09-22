"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  TEAM_DEPARTMENT_FILTERS,
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

function pickFeatured(members: Array<TeamMember & { name: string }>) {
  if (members.length === 0) return { primary: null, secondary: [] as typeof members, rest: members };
  const primary = members[0]!;
  const secondary = members.slice(1, 4);
  const rest = members.slice(4);
  return { primary, secondary, rest };
}

const TEAM_DEPT_QUERY = "dept";

function filterIdFromSearchParams(raw: string | null): (typeof TEAM_DEPARTMENT_FILTERS)[number]["id"] {
  if (!raw) return "all";
  return TEAM_DEPARTMENT_FILTERS.some((f) => f.id === raw) ? (raw as (typeof TEAM_DEPARTMENT_FILTERS)[number]["id"]) : "all";
}

export function TeamDirectory({ status, members }: Props) {
  const directory = getDirectoryMembers(members);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [filterId, setFilterId] = useState<(typeof TEAM_DEPARTMENT_FILTERS)[number]["id"]>(() =>
    filterIdFromSearchParams(searchParams.get(TEAM_DEPT_QUERY)),
  );

  useEffect(() => {
    setFilterId(filterIdFromSearchParams(searchParams.get(TEAM_DEPT_QUERY)));
  }, [searchParams]);

  const applyFilter = useCallback(
    (id: (typeof TEAM_DEPARTMENT_FILTERS)[number]["id"]) => {
      setFilterId(id);
      const params = new URLSearchParams(searchParams.toString());
      if (id === "all") params.delete(TEAM_DEPT_QUERY);
      else params.set(TEAM_DEPT_QUERY, id);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const activeFilter = TEAM_DEPARTMENT_FILTERS.find((f) => f.id === filterId) ?? TEAM_DEPARTMENT_FILTERS[0]!;
  const filtered = useMemo(() => {
    if (!activeFilter.department) return directory;
    return directory.filter((m) => m.department === activeFilter.department);
  }, [directory, activeFilter.department]);

  const showDemoNotice = hasDemoTeamContent(directory);
  const { primary, secondary, rest } = pickFeatured(filtered);
  const showFeatured = filterId === "all" && directory.length > 0;

  if (status !== "loaded" || directory.length === 0) return null;

  return (
    <section className="relative z-[2] overflow-hidden border-b border-brand-navy/10 bg-[#FAFCFE]" aria-labelledby="team-directory-heading">
      <div className="site-shell relative z-[2] py-14 sm:py-16 lg:py-20">
        <Reveal>
          <div className="careers-safe-zone max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{teamDirectoryCopy.eyebrow}</p>
            <h2 id="team-directory-heading" className="display-title mt-4 text-[1.85rem] leading-[1.1] sm:text-[2.2rem] text-[#08233F]">
              {teamDirectoryCopy.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-[#111827]">{teamDirectoryCopy.intro}</p>
            {showDemoNotice ? (
              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.14em] text-brand-muted/70">{teamDirectoryCopy.demoNotice}</p>
            ) : null}
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={teamDirectoryCopy.filterAriaLabel}>
          {TEAM_DEPARTMENT_FILTERS.map((f) => {
            const active = f.id === filterId;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => applyFilter(f.id)}
                className={`rounded-sm border px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.04em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 ${
                  active ? "border-brand-navy bg-brand-navy text-white" : "border-brand-navy/15 bg-white text-[#08233F] hover:border-brand-navy/30"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {showFeatured && primary ? (
          <Reveal delay={40}>
            <div className="mt-10 border-t border-brand-navy/10 pt-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-black/55">{teamDirectoryCopy.featuredLabel}</p>
              <div className="mt-6">
                <TeamProfile member={primary} variant="featured-primary" />
              </div>
              {secondary.length > 0 ? (
                <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4" role="list">
                  {secondary.map((member) => (
                    <li key={member.id}>
                      <TeamProfile member={member} variant="featured-secondary" />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Reveal>
        ) : null}

        <div className="mt-10 max-w-3xl">
          <ul role="list">
            {(showFeatured ? rest : filtered).map((member, i) => (
              <li key={member.id}>
                <TeamProfile member={member} variant="index" index={i} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
