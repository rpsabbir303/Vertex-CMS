import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";
import { getHelpDocsByCategory, type HelpDocCategoryView } from "@/lib/marketing/resources/help";
import { HELP_DOC_CATEGORY_PREVIEWS } from "@/lib/marketing/resources/content";
import { BlogDetailCtaSection } from "../blog-detail/BlogDetailCtaSection";
import { ResourceAbstractSystem, ResourceHeroAmbient } from "../blog-detail/abstracts";
import { HelpCenterSectionAmbient } from "./HelpCenterVisuals";

type Props = { category: HelpDocCategoryView };

export function HelpCenterCategoryPage({ category }: Props) {
  const docs = getHelpDocsByCategory(category.categoryId);
  const categoryIndex = HELP_DOC_CATEGORY_PREVIEWS.findIndex((item) => item.id === category.categoryId);
  const areaNumber = categoryIndex >= 0 ? String(categoryIndex + 1).padStart(2, "0") : null;

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-brand-navy">
      <ResourceAbstractSystem />
      <div className="relative z-[1]">
        <Breadcrumbs
          items={[
            { label: "Home", href: ROUTES.home },
            { label: "Resources", href: ROUTES.resources },
            { label: "Help Center", href: ROUTES.resourcesHelp },
            { label: category.title },
          ]}
        />

        <section className="relative overflow-hidden border-b border-brand-line/60 bg-[#EEF4FA]/50">
          <ResourceHeroAmbient />
          <HelpCenterSectionAmbient />
          <div className="resource-detail-shell relative z-[1] py-9 sm:py-11 lg:py-12">
            <div className="max-w-2xl" data-design-layer="content">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">Help & documentation</p>
              {areaNumber ? (
                <p className="mt-2 text-[11px] font-semibold tabular-nums text-brand-orange">Knowledge area {areaNumber}</p>
              ) : null}
              <h1 className="mt-3 font-display text-[1.85rem] font-bold leading-[1.08] tracking-tight text-brand-navy sm:text-[2.2rem] lg:text-[2.35rem]">
                {category.title}
              </h1>
              <p className="mt-4 text-[15px] leading-[1.65] text-brand-muted">{category.description}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-brand-muted/90">
                Documentation entries in this knowledge area describe how VertexBuild works for this part of the product.
              </p>
              <Link href={ROUTES.resourcesHelp} className="btn-secondary mt-6 inline-flex w-full sm:w-auto">
                Back to Help Center
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-brand-line/60 bg-white" aria-labelledby="help-category-docs-heading">
          <div className="resource-detail-shell py-8 sm:py-9 lg:py-10">
            <h2 id="help-category-docs-heading" className="font-display text-[1.35rem] font-bold text-brand-navy sm:text-[1.45rem]">
              Documentation in this area
            </h2>
            {docs.length ? (
              <ul className="mt-5 divide-y divide-brand-line border border-brand-line bg-[#FAFCFE]">
                {docs.map((doc, index) => (
                  <li key={doc.id}>
                    <Link
                      href={doc.href}
                      className="group flex items-start gap-3 px-4 py-4 transition hover:bg-[#F7FAFD] sm:px-5 sm:py-5"
                    >
                      <span className="shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-[1.02rem] font-bold text-brand-navy group-hover:text-brand-blue sm:text-[1.08rem]">
                          {doc.title}
                        </p>
                        <p className="mt-1 text-[14px] text-brand-muted">{doc.description}</p>
                      </div>
                      <ArrowRight className="mt-1 hidden h-3.5 w-3.5 shrink-0 text-brand-blue sm:block" />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-[14px] text-brand-muted">No documentation preview entries are available in this area yet.</p>
            )}
          </div>
        </section>

        <section className="border-b border-brand-line/60 bg-[#F4F7FB]" aria-labelledby="help-category-areas-heading">
          <div className="resource-detail-shell py-8 sm:py-9">
            <h2 id="help-category-areas-heading" className="font-display text-[1.2rem] font-bold text-brand-navy sm:text-[1.3rem]">
              Other knowledge areas
            </h2>
            <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
              {HELP_DOC_CATEGORY_PREVIEWS.filter((item) => item.id !== category.categoryId).map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 border border-brand-line/80 bg-white px-3 py-2 text-[12px] font-semibold text-brand-navy transition hover:border-brand-blue/30 hover:text-brand-blue"
                  >
                    {item.title}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <BlogDetailCtaSection />
      </div>
    </div>
  );
}
