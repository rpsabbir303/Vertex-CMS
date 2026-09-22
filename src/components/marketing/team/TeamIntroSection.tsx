import { Reveal } from "@/components/Reveal";
import { buildingSection, teamIntroSection } from "@/lib/marketing/team/content";

export function TeamIntroSection() {
  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-[#FAFCFE]" aria-labelledby="team-intro-heading">
      <div className="site-shell py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <hr className="mx-auto mb-10 w-16 border-brand-navy/15" />
            <h2 id="team-intro-heading" className="display-title text-[1.55rem] leading-[1.18] text-[#08233F] sm:text-[1.85rem] lg:text-[2.1rem]">
              {teamIntroSection.statementLine1}
              <span className="mt-3 block">{teamIntroSection.statementLine2}</span>
            </h2>
            <hr className="mx-auto mt-10 w-16 border-brand-navy/15" />
            <p className="mx-auto mt-10 max-w-2xl text-left text-[15px] leading-[1.85] text-[#111827] sm:text-center">
              {buildingSection.pillars[0]!.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
