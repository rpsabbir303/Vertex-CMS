import { ResourceHeroAmbient } from "../blog-detail/abstracts";

import { WebinarHeroLiveSessionVisual } from "./WebinarHeroLiveSessionVisual";

export function WebinarsHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/60 bg-[#F5F8FC]" data-design-layer="WebinarsHero">
      <ResourceHeroAmbient />
      <div className="resource-detail-shell relative z-[1] py-8 sm:py-9 lg:py-10">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(17rem,22rem)] lg:gap-10 xl:gap-12">
          <div className="min-w-0" data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Webinars</p>
            <h1 className="mt-2 max-w-2xl font-display text-[1.85rem] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[2.35rem] lg:text-[2.5rem]">
              Learn how construction teams work smarter with VertexBuild.
            </h1>
            <p className="mt-2.5 max-w-xl text-[15px] leading-[1.65] text-[#111827] sm:text-[15.5px]">
              Explore live and on-demand sessions covering workflows, product capabilities, and practical
              construction-management topics — so teams can learn, watch, and apply ideas on the platform.
            </p>
          </div>
          <div className="min-w-0 justify-self-center sm:justify-self-end lg:justify-self-end">
            <WebinarHeroLiveSessionVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
