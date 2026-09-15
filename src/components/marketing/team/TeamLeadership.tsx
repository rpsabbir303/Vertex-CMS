import { Reveal } from "@/components/Reveal";
import { TEAM_PENDING, hasDemoTeamContent, splitLeadership, teamDirectoryCopy, type TeamMember } from "@/lib/marketing/team/content";
import type { TeamDirectoryStatus } from "@/lib/marketing/team/useTeamDirectory";
import { TeamLoadError } from "./TeamLoadError";
import { TeamLeadershipSkeleton } from "./TeamMemberSkeleton";
import { TeamPendingState } from "./TeamPendingState";
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
    <section className="relative z-[2] border-b border-brand-navy/[0.1] bg-brand-navy/[0.02]" aria-labelledby="team-leadership-heading">
      <div className="site-shell relative py-16 sm:py-20 lg:py-24">
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

        <div className="mt-12">
          {status === "loading" ? <TeamLeadershipSkeleton /> : null}
          {status === "error" ? <TeamLoadError message={errorMessage} retrying={retrying} onRetry={onRetry} /> : null}
          {status === "loaded" && !featured ? <TeamPendingState body={TEAM_PENDING.leadership} /> : null}
          {status === "loaded" && featured ? (
            <div className="relative">
              <TeamProfile member={featured} variant="featured" />
              {secondary.length > 0 ? (
                <>
                  <div className="pointer-events-none absolute left-[20%] top-[42%] hidden h-[28%] w-[60%] lg:block" aria-hidden="true">
                    <svg viewBox="0 0 640 180" className="h-full w-full" fill="none">
                      <path
                        d="M 40 8 C 120 120, 240 40, 320 90 S 500 160, 600 70"
                        stroke="#146EF5"
                        strokeOpacity="0.16"
                        strokeWidth="1"
                        strokeDasharray="5 8"
                      />
                      <circle cx="40" cy="8" r="3" fill="#146EF5" fillOpacity="0.3" />
                      <circle cx="600" cy="70" r="3" fill="#FF6A00" fillOpacity="0.4" />
                    </svg>
                  </div>
                  <ul className="relative z-[1] mt-10 grid gap-6 border-t border-brand-navy/10 pt-10 sm:grid-cols-2 sm:gap-8" role="list">
                    {secondary.map((member) => (
                      <li key={member.id}>
                        <TeamProfile member={member} variant="secondary" />
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
