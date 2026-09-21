import type { TemplateListingSection } from "@/lib/marketing/resources/template";
import { TEMPLATE_LISTING_PAGE_ANCHORS } from "@/lib/marketing/resources/template";

import { TemplateCategorySection } from "./TemplateCategorySection";
import { TemplateSystemHubAbstract } from "./TemplateSectionAbstracts";

type Props = { sections: TemplateListingSection[] };

export function TemplatesExploreSection({ sections }: Props) {
  if (sections.length === 0) return null;

  return (
    <section
      id={TEMPLATE_LISTING_PAGE_ANCHORS.explore}
      className="relative scroll-mt-28 border-b border-brand-line/60 bg-[#F5F8FC]/80"
      aria-labelledby="templates-explore-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-11 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(8rem,10rem)] lg:items-start">
          <header className="min-w-0" data-design-layer="content">
            <h2 id="templates-explore-heading" className="font-display text-[1.5rem] font-bold tracking-tight text-brand-navy sm:text-[1.7rem]">
              Explore Templates
            </h2>
            <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-brand-muted sm:text-[15px]">
              Practical templates designed around recurring construction workflows.
            </p>
          </header>
          <TemplateSystemHubAbstract className="mx-auto hidden opacity-90 lg:mx-0 lg:mt-1 lg:block" />
        </div>

        <div className="mt-8 sm:mt-10">
          {sections.map((section) => (
            <TemplateCategorySection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
