import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { MARKETING_PAGES } from "@/lib/marketing/pages";
import { ROUTES } from "@/lib/marketing/navigation";
import { HELP_DOC_CATEGORY_PREVIEWS, RESOURCES_HUB } from "@/lib/marketing/resources/content";
import { getHelpDocsByCategory, helpDocCategoryAnchor } from "@/lib/marketing/resources/help";
import type { HelpDocCategoryId } from "@/lib/marketing/resources/types";

import { BlogDetailCtaSection } from "../blog-detail/BlogDetailCtaSection";
import { ResourceAbstractSystem, ResourceHeroAmbient } from "../blog-detail/abstracts";
import { HelpCenterKnowledgeSection } from "./HelpCenterKnowledgeSection";
import { HelpCenterRelatedStrip } from "./HelpCenterRelatedStrip";
import { HelpCenterSearch } from "./HelpCenterSearch";
import { HelpCenterHeroDocumentationVisual, HelpCenterSectionAmbient } from "./HelpCenterVisuals";

const CATEGORY_ORDER: HelpDocCategoryId[] = [
  "getting-started",
  "projects",
  "financials",
  "field-operations",
  "account",
];

export function HelpCenterListingPage() {
  const hubCopy = RESOURCES_HUB.help;
  const breadcrumbs = MARKETING_PAGES.resourcesHelp.breadcrumbs ?? [
    { label: "Home", href: ROUTES.home },
    { label: "Resources", href: ROUTES.resources },
    { label: "Help Center" },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-brand-navy">
      <ResourceAbstractSystem />
      <div className="relative z-[1]">
        <Breadcrumbs items={breadcrumbs} />

        <section className="relative overflow-hidden border-b border-brand-line/60 bg-[#EEF4FA]/50" data-resource-visual="help-hero">
          <ResourceHeroAmbient />
          <HelpCenterSectionAmbient />
          <div className="resource-detail-shell relative z-[1] py-9 sm:py-11 lg:py-12">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(14rem,20rem)] lg:gap-12 xl:gap-14">
              <div className="min-w-0" data-design-layer="content">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{hubCopy.eyebrow}</p>
                <h1 className="mt-3 max-w-2xl font-display text-[1.85rem] font-bold leading-[1.08] tracking-tight text-brand-navy sm:text-[2.35rem] lg:text-[2.5rem]">
                  {hubCopy.headline}
                </h1>
                <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-brand-muted sm:text-[15.5px]">{hubCopy.supporting}</p>
                <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-brand-muted/90">{hubCopy.supportingNote}</p>
              </div>
              <HelpCenterHeroDocumentationVisual className="justify-self-center lg:mt-4 lg:justify-self-end" />
            </div>
          </div>
        </section>

        <section className="border-b border-brand-line/60 bg-white">
          <div className="resource-detail-shell py-8 sm:py-9">
            <HelpCenterSearch />
          </div>
        </section>

        <section className="border-b border-brand-line/60 bg-white" aria-labelledby="help-overview-heading">
          <div className="resource-detail-shell py-9 sm:py-10 lg:py-11">
            <header className="max-w-2xl" data-design-layer="content">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Documentation overview</p>
              <h2 id="help-overview-heading" className="mt-2 font-display text-[1.45rem] font-bold text-brand-navy sm:text-[1.6rem]">
                Product guidance by knowledge area
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-muted">
                Find product guidance organized around the core areas of VertexBuild — workspace setup, projects, financials, field
                operations, and account security. Each section below includes available documentation previews for that area.
              </p>
            </header>
            <dl className="mt-8 divide-y divide-brand-line border-y border-brand-line/80" data-design-layer="content">
              {HELP_DOC_CATEGORY_PREVIEWS.map((category, index) => {
                const anchor = helpDocCategoryAnchor(category.id as HelpDocCategoryId);
                return (
                  <div
                    key={category.id}
                    className="grid gap-2 py-4 sm:grid-cols-[3.25rem_minmax(0,10.5rem)_minmax(0,1fr)] sm:items-baseline sm:gap-x-6 sm:py-5"
                  >
                    <dt className="text-[11px] font-semibold tabular-nums text-brand-orange">{String(index + 1).padStart(2, "0")}</dt>
                    <dt>
                      <a href={`#${anchor}`} className="font-display text-[1rem] font-bold text-brand-navy hover:text-brand-blue">
                        {category.title}
                      </a>
                    </dt>
                    <dd className="text-[13.5px] leading-relaxed text-brand-muted">{category.description}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </section>

        {CATEGORY_ORDER.map((categoryId, index) => {
          const preview = HELP_DOC_CATEGORY_PREVIEWS.find((c) => c.id === categoryId);
          if (!preview) return null;
          const docs = getHelpDocsByCategory(categoryId);
          return (
            <HelpCenterKnowledgeSection
              key={categoryId}
              index={index + 1}
              categoryId={categoryId}
              title={preview.title}
              description={preview.description}
              docs={docs}
              tone={index % 2 === 0 ? "light" : "cool"}
            />
          );
        })}

        <HelpCenterRelatedStrip />
        <BlogDetailCtaSection />
      </div>
    </div>
  );
}
