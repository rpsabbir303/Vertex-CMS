import { RESOURCES_HUB } from "@/lib/marketing/resources/content";

import { ResourceHeroAmbient } from "../blog-detail/abstracts";
import { BlogHeroVisual } from "./BlogHeroVisual";

export function BlogsHero() {
  const copy = RESOURCES_HUB.blog;

  return (
    <section className="relative overflow-hidden border-b border-brand-line/60 bg-[#F5F8FC]" data-design-layer="BlogHero">
      <ResourceHeroAmbient />
      <div className="resource-detail-shell relative z-[1] py-9 sm:py-10 lg:py-11">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,18rem)] lg:gap-12">
          <div className="min-w-0" data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Blog</p>
            <h1 className="mt-2.5 max-w-2xl font-display text-[1.85rem] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[2.35rem] lg:text-[2.5rem]">
              {copy.headline}
            </h1>
            <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-[#111827] sm:text-[15.5px]">{copy.supporting}</p>
            <p className="mt-4 text-[13px] font-medium text-[#111827]/75">Read → Apply → Run better jobs on VertexBuild.</p>
          </div>
          <div className="justify-self-center rounded-sm border border-brand-line/70 bg-white/75 px-4 py-5 sm:justify-self-end">
            <BlogHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
