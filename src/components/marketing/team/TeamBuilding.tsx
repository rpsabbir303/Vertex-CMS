import { Reveal } from "@/components/Reveal";
import { AboutConvergeVisual } from "@/components/marketing/company/CompanyVisuals";
import { buildingSection, TEAM_PENDING } from "@/lib/marketing/team/content";
import { TeamPendingState } from "./TeamPendingState";

export function TeamBuilding() {
  return (
    <section className="relative z-[2] border-b border-brand-navy/[0.1] bg-[#146EF5]/[0.025]" aria-labelledby="team-building-heading">
      <div className="site-shell relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <div className="careers-safe-zone">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                  {buildingSection.eyebrow}
                </p>
                <h2
                  id="team-building-heading"
                  className="display-title mt-4 max-w-md text-[1.85rem] leading-[1.1] sm:text-[2.2rem] lg:text-[2.5rem]"
                >
                  {buildingSection.headline}
                </h2>
              </div>
            </Reveal>
            <div className="relative z-[1] mt-10 min-w-0">
              <AboutConvergeVisual labels={["Projects", "Financials", "Field", "Intelligence"]} />
            </div>
          </div>

          <ul>
            {buildingSection.pillars.map((pillar) => (
              <li key={pillar.id} className="border-b border-brand-navy/10 py-7 first:pt-0 last:border-b-0">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{pillar.label}</p>
                {pillar.body ? (
                  <p className="mt-3 max-w-xl text-[15px] leading-[1.8] text-brand-navy/85 sm:text-base">{pillar.body}</p>
                ) : (
                  <div className="mt-3">
                    <TeamPendingState compact body={TEAM_PENDING.pillar} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
