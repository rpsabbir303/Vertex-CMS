import { Reveal } from "@/components/Reveal";
import { BrowserFrame, ProjectWorkspace } from "@/components/mockups/ProductMockups";
import { productStorySection } from "@/lib/marketing/team/content";
import { ProductStoryFlowVisual } from "./TeamVisuals";

export function TeamProductStory() {
  const copy = productStorySection;
  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-white" aria-labelledby="team-product-story">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{copy.eyebrow}</p>
            <h2 id="team-product-story" className="display-title mt-4 text-[1.65rem] leading-[1.12] sm:text-[2rem] text-[#08233F]">
              {copy.headline}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.8] text-[#111827]">{copy.body}</p>
            <div className="mt-8 lg:hidden">
              <ProductStoryFlowVisual />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-6">
              <div className="hidden lg:block">
                <ProductStoryFlowVisual />
              </div>
              <div className="overflow-hidden border border-brand-navy/10 bg-[#FAFCFE] shadow-[0_12px_40px_-32px_rgba(8,35,63,0.35)]">
                <BrowserFrame url="app.vertexcms.com / project" className="shadow-none">
                  <div className="max-h-[220px] overflow-hidden scale-[0.92] origin-top">
                    <ProjectWorkspace />
                  </div>
                </BrowserFrame>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
