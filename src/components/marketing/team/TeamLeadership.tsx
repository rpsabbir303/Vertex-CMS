import { Reveal } from "@/components/Reveal";
import { TEAM_PENDING, hasDemoTeamContent, splitLeadership, teamDirectoryCopy, type TeamMember } from "@/lib/marketing/team/content";
import type { TeamDirectoryStatus } from "@/lib/marketing/team/useTeamDirectory";
import { TeamLoadError } from "./TeamLoadError";
import { TeamLeadershipSkeleton } from "./TeamMemberSkeleton";
import { TeamPendingState } from "./TeamPendingState";
import { TeamPeopleField } from "./TeamPeopleField";
import { TeamProfile } from "./TeamProfile";

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

  return (
    <section className="relative z-[2] overflow-hidden border-b border-brand-navy/[0.1] bg-brand-navy/[0.02]" aria-labelledby="team-leadership-heading">
      <TeamPeopleField />

      <div className="site-shell relative z-[2] py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="careers-safe-zone">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">01</p>
            <h2 id="team-leadership-heading" className="display-title mt-4 text-[1.85rem] leading-[1.1] sm:text-[2.2rem] lg:text-[2.5rem]">
              Leadership
            </h2>
            {showDemoNotice ? (
              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.14em] text-brand-muted/70">{teamDirectoryCopy.demoNotice}</p>
            ) : null}
          </div>
        </Reveal>

        <div className="relative mt-12 lg:mt-14">
          {status === "loading" ? <TeamLeadershipSkeleton /> : null}
          {status === "error" ? <TeamLoadError message={errorMessage} retrying={retrying} onRetry={onRetry} /> : null}
          {status === "loaded" && !featured ? <TeamPendingState body={TEAM_PENDING.leadership} /> : null}
          {status === "loaded" && featured ? (
            <div className="relative">
              <Reveal>
                <TeamProfile member={featured} variant="featured" />
              </Reveal>

              {secondary.length > 0 ? (
                <Reveal delay={60}>
                  <div className="relative mt-12 lg:mt-16">
                    <div className="pointer-events-none absolute -left-4 top-0 hidden h-full w-px bg-brand-navy/10 lg:block" aria-hidden="true" />
                    <ul className="relative z-[1] lg:pl-8" role="list">
                      {secondary.map((member) => (
                        <li key={member.id}>
                          <TeamProfile member={member} variant="leadership-support" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
