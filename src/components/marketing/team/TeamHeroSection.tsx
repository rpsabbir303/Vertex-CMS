import { Reveal } from "@/components/Reveal";
import { TEAM_PENDING, teamHero, type TeamMember } from "@/lib/marketing/team/content";
import { TeamHeroNetwork } from "./TeamHeroNetwork";
import { TeamPendingState } from "./TeamPendingState";

type Props = {
  showCopy: boolean;
  members: TeamMember[];
};

export function TeamHeroSection({ showCopy, members }: Props) {
  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-white" aria-labelledby="team-hero-heading">
      <div className="site-shell w-full max-w-[1240px] py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 xl:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{teamHero.label}</p>
            <h1 id="team-hero-heading" className="display-title mt-4 text-[2rem] leading-[1.06] text-[#08233F] sm:text-[2.45rem] lg:text-[2.65rem]">
              {teamHero.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            {showCopy ? (
              <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-[#111827]">{teamHero.supporting}</p>
            ) : (
              <div className="mt-5 max-w-xl">
                <TeamPendingState compact body={TEAM_PENDING.hero} />
              </div>
            )}
          </Reveal>
          <Reveal delay={60}>
            <div className="border border-brand-navy/10 bg-[#FAFCFE] px-4 py-8 sm:px-6 sm:py-10">
              <TeamHeroNetwork members={members} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
