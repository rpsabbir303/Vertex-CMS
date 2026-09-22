import { Reveal } from "@/components/Reveal";
import {
  TEAM_DEPARTMENT_BANDS,
  getMembersByDepartment,
  hasDemoTeamContent,
  resolveMemberById,
  teamDirectoryCopy,
  teamEditorialMoments,
  teamIndexSection,
  type TeamMember,
} from "@/lib/marketing/team/content";
import type { TeamDirectoryStatus } from "@/lib/marketing/team/useTeamDirectory";
import { TeamPortrait } from "./TeamPortrait";

type Props = {
  status: TeamDirectoryStatus;
  members: TeamMember[];
};

function EditorialMoment({ member }: { member: TeamMember & { name: string } }) {
  return (
    <div className="grid gap-8 border-y border-brand-navy/10 py-12 md:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] md:items-center md:gap-12">
      <TeamPortrait member={member} size="md" className="mx-auto md:mx-0" />
      <div>
        {member.bio ? (
          <p className="display-title text-[1.25rem] leading-[1.35] text-[#08233F] sm:text-[1.45rem]">{member.bio}</p>
        ) : null}
        <p className="mt-6 text-[14px] font-medium text-[#111827]">
          <span className="text-brand-orange">—</span> {member.name}
          {member.role ? <span className="mt-1 block text-[13px] font-normal text-black/65">{member.role}</span> : null}
        </p>
      </div>
    </div>
  );
}

export function TeamDepartmentIndex({ status, members }: Props) {
  if (status !== "loaded") return null;

  const bands = TEAM_DEPARTMENT_BANDS.map((band) => ({
    ...band,
    people: getMembersByDepartment(members, band.department),
  })).filter((b) => b.people.length > 0);

  if (bands.length === 0) return null;

  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-white" aria-labelledby="team-index-heading">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <Reveal>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{teamIndexSection.label}</p>
          <h2 id="team-index-heading" className="display-title mt-4 text-[1.75rem] leading-[1.1] text-[#08233F] sm:text-[2rem]">
            {teamIndexSection.headline}
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.75] text-[#111827]">{teamIndexSection.intro}</p>
          {hasDemoTeamContent(members) ? (
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.14em] text-brand-muted/70">{teamDirectoryCopy.demoNotice}</p>
          ) : null}
        </Reveal>

        <div className="mt-12 space-y-0">
          {bands.map((band) => {
            const moment = teamEditorialMoments.find((m) => m.afterDepartment === band.department);
            const momentMember = moment ? resolveMemberById(members, moment.memberId) : null;

            return (
              <div key={band.department}>
                <Reveal>
                  <div className="border-t border-brand-navy/10 pt-10">
                    <div className="flex flex-wrap items-baseline gap-3 gap-y-1">
                      <span className="font-mono text-[12px] font-semibold text-brand-orange">{band.index}</span>
                      <h3 className="font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-[#08233F]">{band.title}</h3>
                    </div>
                    <div className="mt-3 h-px w-full bg-brand-navy/10" aria-hidden="true" />
                    <ul className="mt-6 space-y-0" role="list">
                      {band.people.map((person) => (
                        <li
                          key={person.id}
                          className="grid grid-cols-[auto_1fr] gap-4 border-b border-brand-navy/[0.06] py-4 last:border-b-0 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6"
                        >
                          <TeamPortrait member={person} size="sm" />
                          <div className="min-w-0">
                            <p className="text-[15px] font-semibold text-[#08233F]">{person.name}</p>
                            {person.role ? <p className="mt-0.5 text-[13px] text-[#111827]">{person.role}</p> : null}
                          </div>
                          {person.bio ? (
                            <p className="hidden text-[13px] leading-[1.65] text-[#111827]/85 sm:col-span-1 sm:block sm:max-w-md sm:text-right">{person.bio}</p>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                {momentMember ? (
                  <Reveal delay={40}>
                    <EditorialMoment member={momentMember} />
                  </Reveal>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
