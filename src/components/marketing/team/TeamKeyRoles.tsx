import { Reveal } from "@/components/Reveal";
import { TEAM_PENDING, getPublishedRoles, type KeyRole } from "@/lib/marketing/team/content";
import type { TeamDirectoryStatus } from "@/lib/marketing/team/useTeamDirectory";
import { TeamRolesSkeleton } from "./TeamMemberSkeleton";
import { TeamPendingState } from "./TeamPendingState";

type Props = {
  status: TeamDirectoryStatus;
  roles: KeyRole[];
};

export function TeamKeyRoles({ status, roles }: Props) {
  const published = getPublishedRoles(roles);

  return (
    <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-labelledby="team-key-roles-heading">
      <div className="site-shell relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="careers-safe-zone">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">02</p>
            <h2 id="team-key-roles-heading" className="display-title mt-4 text-[1.85rem] leading-[1.1] sm:text-[2.2rem] lg:text-[2.5rem]">
              Key roles
            </h2>
            {published.length > 0 ? (
              <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-brand-muted">{TEAM_PENDING.keyRolesNote}</p>
            ) : null}
          </div>
        </Reveal>

        {status === "loading" ? <TeamRolesSkeleton /> : null}

        {status === "loaded" && published.length === 0 ? (
          <div className="mt-12">
            <TeamPendingState body={TEAM_PENDING.keyRoles} />
          </div>
        ) : null}

        {status === "loaded" && published.length > 0 ? (
          <ol className="mt-12 divide-y divide-brand-navy/10 border-y border-brand-navy/10">
            {published.map((role, index) => (
              <li key={role.id} className="grid gap-4 py-6 sm:grid-cols-[72px_1fr] sm:items-start sm:gap-8 sm:py-8">
                <span className="font-mono text-[12px] font-semibold tracking-[0.14em] text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] font-semibold tracking-tight text-brand-navy">{role.title}</h3>
                  {role.description ? (
                    <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-brand-muted">{role.description}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </section>
  );
}
