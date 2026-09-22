"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  TEAM_PENDING,
  hasDemoTeamContent,
  leadershipSection,
  leadershipTimelineLinks,
  resolveMemberById,
  teamDirectoryCopy,
  type TeamMember,
} from "@/lib/marketing/team/content";
import type { TeamDirectoryStatus } from "@/lib/marketing/team/useTeamDirectory";
import { TeamLoadError } from "./TeamLoadError";
import { TeamLeadershipSkeleton } from "./TeamMemberSkeleton";
import { TeamPendingState } from "./TeamPendingState";
import { TeamPortrait } from "./TeamPortrait";

type Props = {
  status: TeamDirectoryStatus;
  members: TeamMember[];
  errorMessage: string | null;
  retrying: boolean;
  onRetry: () => void;
};

type LeaderEntry = (typeof leadershipTimelineLinks)[number] & { member: TeamMember & { name: string } };

function LeadershipDirectionStack() {
  const steps = leadershipSection.directionStack;
  const navy = "#08233F";
  const orange = "#E85D2C";
  return (
    <svg viewBox="0 0 200 168" className="mt-8 w-full max-w-[200px]" role="img" aria-label="Product direction: product, construction, technology, customer impact">
      {steps.map((label, i) => {
        const y = 16 + i * 40;
        const isLast = i === steps.length - 1;
        return (
          <g key={label}>
            {!isLast ? <line x1="100" y1={y + 14} x2="100" y2={y + 28} stroke="rgba(8,35,63,0.2)" strokeWidth="1" /> : null}
            <circle cx="100" cy={y + 8} r="3" fill={orange} />
            <text x="100" y={y + 4} textAnchor="middle" fill={navy} fontSize="9" fontWeight="600" letterSpacing="0.1em">
              {label.toUpperCase()}
            </text>
            {!isLast ? (
              <text x="100" y={y + 22} textAnchor="middle" fill={orange} fontSize="8" opacity="0.85">
                ↓
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

function FeaturedLeaderPanel({ entry }: { entry: LeaderEntry }) {
  const { index, step, member } = entry;
  const alt = `${member.name}${member.role ? `, ${member.role}` : ""}${member.demoContent ? " (sample profile)" : ""}`;
  return (
    <article className="overflow-hidden border border-brand-navy/10 bg-[#FAFCFE]">
      <div className="relative aspect-[4/5] w-full max-h-[min(420px,52vh)] bg-[#F4F7FA] sm:max-h-[400px]">
        {member.image ? (
          <Image src={member.image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-top" priority />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[11px] uppercase tracking-wider text-brand-muted">{TEAM_PENDING.photo}</div>
        )}
        <span className="pointer-events-none absolute left-0 top-0 z-[1] h-4 w-4 border-l border-t border-brand-orange/50" aria-hidden="true" />
      </div>
      <div className="border-t border-brand-navy/10 bg-white px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold text-brand-orange">{index}</span>
          <span className="h-px flex-1 max-w-[48px] bg-brand-orange/40" aria-hidden="true" />
        </div>
        <p className="mt-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-black/50">{step}</p>
        <h3 className="display-title mt-2 text-[1.35rem] leading-[1.1] text-[#08233F] sm:text-[1.5rem]">{member.name}</h3>
        {member.role ? <p className="mt-1.5 text-[14px] font-medium text-[#111827]">{member.role}</p> : null}
        {member.bio ? <p className="mt-3 line-clamp-4 text-[14px] leading-[1.65] text-[#111827]">{member.bio}</p> : null}
      </div>
    </article>
  );
}

function SecondaryLeaderButton({
  entry,
  active,
  onSelect,
}: {
  entry: LeaderEntry;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  const { index, step, member } = entry;
  return (
    <button
      type="button"
      onClick={() => onSelect(member.id)}
      onMouseEnter={() => onSelect(member.id)}
      onFocus={() => onSelect(member.id)}
      aria-pressed={active}
      className={`group flex w-full min-w-0 gap-3 border px-3 py-3 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:gap-4 sm:px-4 sm:py-4 ${
        active ? "border-brand-navy/25 bg-white" : "border-brand-navy/10 bg-[#FAFCFE]/80 hover:border-brand-navy/20"
      }`}
    >
      <TeamPortrait member={member} size="sm" className="!h-[72px] !w-[58px] shrink-0 sm:!h-[80px] sm:!w-[64px]" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="font-mono text-[10px] font-semibold text-brand-orange">{index}</span>
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-black/45">{step}</span>
        </div>
        <p className="mt-1.5 text-[14px] font-semibold leading-snug text-[#08233F]">{member.name}</p>
        {member.role ? <p className="mt-0.5 text-[12px] font-medium leading-snug text-[#111827]">{member.role}</p> : null}
        {member.bio ? (
          <p className="mt-2 line-clamp-2 text-[12px] leading-[1.5] text-[#111827]/85">{member.bio}</p>
        ) : null}
        <span
          className={`mt-2 block h-0.5 w-0 bg-brand-orange transition-all duration-200 group-hover:w-8 ${active ? "w-8" : ""}`}
          aria-hidden="true"
        />
      </div>
    </button>
  );
}

export function TeamLeadershipDirection({ status, members, errorMessage, retrying, onRetry }: Props) {
  const copy = leadershipSection;
  const links = useMemo(
    () =>
      leadershipTimelineLinks
        .map((link) => {
          const member = resolveMemberById(members, link.memberId);
          return member ? { ...link, member } : null;
        })
        .filter(Boolean) as LeaderEntry[],
    [members],
  );

  const [featuredId, setFeaturedId] = useState("");
  const resolvedFeaturedId = featuredId || links[0]?.member.id || "";

  const featured = links.find((l) => l.member.id === resolvedFeaturedId) ?? links[0];
  const secondary = links.filter((l) => l.member.id !== featured?.member.id);

  const selectFeatured = useCallback((id: string) => setFeaturedId(id), []);

  return (
    <section className="relative z-[2] w-full border-b border-brand-navy/10 bg-white" aria-labelledby="team-leadership-heading">
      <div className="site-shell w-full max-w-[1240px] py-12 sm:py-14 lg:py-16">
        {status === "loading" ? <TeamLeadershipSkeleton /> : null}
        {status === "error" ? <TeamLoadError message={errorMessage} retrying={retrying} onRetry={onRetry} /> : null}
        {status === "loaded" && links.length === 0 ? <TeamPendingState body={TEAM_PENDING.leadership} /> : null}
        {status === "loaded" && featured ? (
          <div className="grid w-full min-w-0 gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start lg:gap-10 xl:gap-12">
            <Reveal>
              <div className="min-w-0 max-w-lg lg:max-w-none">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{copy.label}</p>
                <h2 id="team-leadership-heading" className="display-title mt-3 text-[1.75rem] leading-[1.08] text-[#08233F] sm:text-[2rem] lg:text-[2.15rem]">
                  {copy.headlineLines.map((line, i) => (
                    <span key={line} className={i < copy.headlineLines.length - 1 ? "block" : "block"}>
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="mt-4 text-[14px] leading-[1.7] text-[#111827]">{copy.intro}</p>
                <LeadershipDirectionStack />
                {hasDemoTeamContent(members) ? <p className="sr-only">{teamDirectoryCopy.demoNotice}</p> : null}
              </div>
            </Reveal>

            <Reveal delay={50}>
              <div className="flex min-w-0 flex-col gap-4 lg:gap-5">
                <FeaturedLeaderPanel entry={featured} />
                {secondary.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3 border-t border-brand-navy/10 pt-4 sm:grid-cols-2 sm:gap-4" role="group" aria-label="Supporting leadership">
                    {secondary.map((entry) => (
                      <SecondaryLeaderButton
                        key={entry.member.id}
                        entry={entry}
                        active={resolvedFeaturedId === entry.member.id}
                        onSelect={selectFeatured}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        ) : null}
      </div>
    </section>
  );
}
