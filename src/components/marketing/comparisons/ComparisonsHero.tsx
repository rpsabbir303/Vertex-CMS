import { COMPARISONS_LANDING } from "@/lib/marketing/comparisons/landing";

import { ResourceHeroAmbient } from "../resources/blog-detail/abstracts";
import { HelpCenterSectionAmbient } from "../resources/help-center/HelpCenterVisuals";

import { ComparisonHeroVisual } from "./ComparisonHeroVisual";

export function ComparisonsHero() {
  const { hero } = COMPARISONS_LANDING;

  return (
    <section className="relative overflow-hidden border-b border-brand-line/60 bg-[#F5F8FC]" data-design-layer="ComparisonsHero">
      <ResourceHeroAmbient />
      <HelpCenterSectionAmbient />
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-11 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,24rem)] lg:gap-12 xl:gap-14">
          <div className="min-w-0" data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{hero.eyebrow}</p>
            <h1 className="mt-3 max-w-2xl font-display text-[1.9rem] font-bold leading-[1.1] tracking-tight text-[#000000] sm:text-[2.4rem] lg:text-[2.65rem]">
              Compare construction management platforms
              <span className="block">with clarity.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.68] text-[#111827] sm:text-[15.5px] lg:max-w-2xl">{hero.supporting}</p>
          </div>
          <div className="min-w-0 justify-self-center lg:justify-self-end">
            <ComparisonHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
