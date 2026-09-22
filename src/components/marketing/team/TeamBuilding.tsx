import { Reveal } from "@/components/Reveal";
import { buildingSection, teamBuildPrinciples } from "@/lib/marketing/team/content";
import { TeamBuildSystemDiagram } from "./TeamVisuals";

export function TeamBuilding() {
  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-white" aria-labelledby="team-building-heading">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{buildingSection.eyebrow}</p>
              <h2 id="team-building-heading" className="display-title mt-4 max-w-md text-[1.85rem] leading-[1.1] sm:text-[2.1rem] text-[#08233F]">
                {buildingSection.headline}
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <div className="mt-10">
                <TeamBuildSystemDiagram />
              </div>
            </Reveal>
          </div>

          <ol className="divide-y divide-brand-navy/10 border-y border-brand-navy/10">
            {teamBuildPrinciples.map((item) => (
              <li key={item.index} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-6 sm:gap-6">
                <span className="font-mono text-[12px] font-semibold tabular-nums text-brand-orange">{String(item.index).padStart(2, "0")}</span>
                <div>
                  <p className="text-[15px] font-semibold text-[#08233F]">{item.label}</p>
                  {item.body ? <p className="mt-2 text-[14px] leading-[1.75] text-[#111827]">{item.body}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
