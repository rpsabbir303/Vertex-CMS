import { Reveal } from "@/components/Reveal";
import { TEAM_PENDING, hasDemoTeamContent, leadershipSection, splitLeadership, teamDirectoryCopy, type TeamMember } from "@/lib/marketing/team/content";
import type { TeamDirectoryStatus } from "@/lib/marketing/team/useTeamDirectory";
import { TeamLoadError } from "./TeamLoadError";
import { TeamLeadershipSkeleton } from "./TeamMemberSkeleton";
import { TeamPendingState } from "./TeamPendingState";
import { TeamProfile } from "./TeamProfile";
import { LeadershipProductRail } from "./TeamVisuals";

type Props = {
  status: TeamDirectoryStatus;
  members: TeamMember[];
  errorMessage: string | null;
  retrying: boolean;
  onRetry: () => void;
};

export function TeamLeadership({ status, members, errorMessage, retrying, onRetry }: Props) {
  const { featured, secondary } = splitLeadership(members);
  const showDemoNotice = hasDemoTeamContent(members);
  const copy = leadershipSection;

  return (
    <section className="relative z-[2] overflow-hidden border-b border-brand-navy/10 bg-white" aria-labelledby="team-leadership-heading">
      <div className="site-shell relative z-[2] py-14 sm:py-16 lg:py-20">
        <Reveal>
          <div className="careers-safe-zone max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{copy.label}</p>
            <h2 id="team-leadership-heading" className="display-title mt-4 text-[1.85rem] leading-[1.1] sm:text-[2.2rem] lg:text-[2.35rem] text-[#08233F]">
              {copy.headlineLines.join(" ")}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-[#111827]">{copy.intro}</p>
            {showDemoNotice ? (
              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.14em] text-brand-muted/70">{teamDirectoryCopy.demoNotice}</p>
            ) : null}
          </div>
        </Reveal>

        <div className="relative mt-10 lg:mt-12">
          {status === "loading" ? <TeamLeadershipSkeleton /> : null}
          {status === "error" ? <TeamLoadError message={errorMessage} retrying={retrying} onRetry={onRetry} /> : null}
          {status === "loaded" && !featured ? <TeamPendingState body={TEAM_PENDING.leadership} /> : null}
          {status === "loaded" && featured ? (
            <div className="relative">
              <Reveal>
                <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-6 xl:gap-8">
                  <div className="lg:col-span-5 lg:col-start-1">
                    <TeamProfile member={featured} variant="leadership-portrait" />
                  </div>
                  <div className="lg:col-span-5 lg:col-start-7 xl:col-span-4 xl:col-start-8">
                    <TeamProfile member={featured} variant="leadership-copy" />
                  </div>
                  <div className="hidden lg:col-span-2 lg:col-start-11 lg:block">
                    <LeadershipProductRail />
                  </div>
                </div>
              </Reveal>

              {secondary.length > 0 ? (
                <Reveal delay={60}>
                  <ul className="mt-12 max-w-3xl border-t border-brand-navy/10 lg:mt-14" role="list">
                    {secondary.map((member) => (
                      <li key={member.id}>
                        <TeamProfile member={member} variant="leadership-row" />
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
