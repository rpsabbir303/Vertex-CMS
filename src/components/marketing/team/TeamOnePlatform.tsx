import { Reveal } from "@/components/Reveal";
import { onePlatformSection, platformDisciplines, resolveDisciplineMembers, type TeamMember } from "@/lib/marketing/team/content";
import type { TeamDirectoryStatus } from "@/lib/marketing/team/useTeamDirectory";
import { DisciplinesConvergeDiagram } from "./TeamSystemDiagrams";

type Props = {
  status: TeamDirectoryStatus;
  members: TeamMember[];
};

export function TeamOnePlatform({ status, members }: Props) {
  if (status !== "loaded") return null;

  const copy = onePlatformSection;

  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-[#FAFCFE]" aria-labelledby="team-one-platform-heading">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <Reveal>
          <h2 id="team-one-platform-heading" className="display-title max-w-xl text-[1.65rem] leading-[1.12] text-[#08233F] sm:text-[2rem]">
            {copy.headline}
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-[1.75] text-[#111827]">{copy.intro}</p>
        </Reveal>

        <Reveal delay={50}>
          <div className="mt-10 flex justify-center border border-brand-navy/10 bg-white px-4 py-8">
            <DisciplinesConvergeDiagram />
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" role="list">
          {platformDisciplines.map((discipline) => {
            const people = resolveDisciplineMembers(members, discipline.id);
            if (people.length === 0) return null;
            return (
              <li key={discipline.id} className="border-t border-brand-navy/10 pt-4">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{discipline.label}</p>
                <ul className="mt-3 space-y-2" role="list">
                  {people.map((person) => (
                    <li key={person.id} className="text-[13px] leading-snug text-[#111827]">
                      <span className="font-semibold text-[#08233F]">{person.name}</span>
                      {person.role ? <span className="mt-0.5 block text-[12px] text-black/60">{person.role}</span> : null}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
