import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";
import {
  getHelpDocNeighbors,
  getHelpDocToc,
  getRelatedHelpDocs,
  helpCategoryLandingHref,
} from "@/lib/marketing/resources/help";
import type { HelpDocArticleRecord } from "@/lib/marketing/resources/types";

import { BlogDetailCtaSection } from "./blog-detail/BlogDetailCtaSection";
import {
  ResourceAbstractSystem,
  ResourceHeroAmbient,
  ResourceRelatedAmbient,
} from "./blog-detail/abstracts";
import { ResourceDetailContextRail } from "./blog-detail/ResourceDetailContextRail";
import { DocumentationArticleBody } from "./help-detail/DocumentationArticleBody";
import {
  HelpDocHeroKnowledgeAbstract,
  HelpDocRelatedNetworkAbstract,
  HelpDocSectionWorkflowAbstract,
} from "./help-detail/HelpDetailVisuals";
import { ResourceMapNav } from "./resource-detail/ResourceMapNav";

type Props = { document: HelpDocArticleRecord };

const TOC_MIN = 2;

/** Reusable Documentation Detail — `/resources/help-center/[slug]` */
export function DocumentationDetailPage({ document: doc }: Props) {
  const toc = getHelpDocToc(doc);
  const showRail = toc.length >= TOC_MIN;
  const related = getRelatedHelpDocs(doc, 4);
  const { previous, next } = getHelpDocNeighbors(doc);
  const categoryHref = helpCategoryLandingHref(doc.categoryId);

  const libraryItems = getRelatedHelpDocs(doc, 3).map((item, index) => ({
    href: item.href,
    index: index + 1,
    label: item.title,
  }));

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-brand-navy">
      <ResourceAbstractSystem />

      <div className="relative z-[1]">
        <Breadcrumbs
          items={[
            { label: "Home", href: ROUTES.home },
            { label: "Resources", href: ROUTES.resources },
            { label: "Help Center", href: ROUTES.resourcesHelp },
            { label: doc.title },
          ]}
        />

        <section className="relative overflow-hidden border-b border-brand-line/60 bg-[#EEF4FA]/45" data-resource-visual="doc-hero">
          <ResourceHeroAmbient />
          <div className="resource-detail-shell relative z-[1] py-7 sm:py-8 lg:py-9">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,19rem)] lg:gap-10">
              <div className="min-w-0" data-design-layer="content">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue">Help & documentation</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                  <Link href={categoryHref} className="hover:text-brand-blue">
                    {doc.categoryTitle}
                  </Link>
                </p>
                <h1 className="mt-3 max-w-2xl font-display text-[1.75rem] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-[2.2rem] lg:text-[2.4rem]">
                  {doc.title}
                </h1>
                <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-brand-muted">{doc.description}</p>
                <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[12.5px]">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted">Knowledge area</dt>
                    <dd className="mt-0.5 font-medium text-brand-navy">{doc.categoryTitle}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted">Documentation</dt>
                    <dd className="mt-0.5 font-medium text-brand-navy">Product knowledge preview</dd>
                  </div>
                </dl>
                <Link
                  href={ROUTES.resourcesHelp}
                  className="btn-secondary mt-5 inline-flex w-full sm:w-auto"
                >
                  Back to Help Center
                </Link>
              </div>
              <HelpDocHeroKnowledgeAbstract className="justify-self-center lg:justify-self-end" />
            </div>
          </div>
        </section>

        <section className="relative border-b border-brand-line/60 bg-white" data-resource-visual="doc-content">
          <div className="resource-detail-shell relative py-7 sm:py-8 lg:py-9">
            {showRail ? (
              <details className="group mb-5 border border-brand-line bg-[#FAFCFE] lg:hidden" data-design-layer="content">
                <summary className="cursor-pointer list-none px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted [&::-webkit-details-marker]:hidden">
                  On this page
                  <span className="float-right text-brand-blue group-open:hidden">Show</span>
                  <span className="float-right hidden text-brand-blue group-open:inline">Hide</span>
                </summary>
                <div className="border-t border-brand-line px-2 pb-3">
                  <ResourceMapNav
                    mapItems={toc}
                    mapTitle="On this page"
                    mapAriaLabel="On this page"
                    variant="guide"
                  />
                </div>
              </details>
            ) : null}

            <div className="resource-detail-main-grid relative z-[1] items-start">
              <article
                className="resource-detail-article min-w-0 border border-brand-line/55 bg-white/95 px-4 py-5 sm:max-w-[820px] sm:px-6 sm:py-6"
                data-design-layer="content"
              >
                <div className="mb-6 hidden sm:block">
                  <HelpDocSectionWorkflowAbstract categoryId={doc.categoryId} className="opacity-80" />
                </div>
                <DocumentationArticleBody blocks={doc.body} />
              </article>

              {showRail ? (
                <ResourceDetailContextRail
                  mapItems={toc}
                  relatedTopics={[doc.categoryTitle]}
                  mapTitle="On this page"
                  mapAriaLabel="On this page"
                  mapVariant="guide"
                  scrollSpy
                  libraryTitle="In this knowledge area"
                  libraryItems={libraryItems}
                />
              ) : null}
            </div>
          </div>
        </section>

        {(previous || next) && (
          <section className="border-b border-brand-line/60 bg-[#F5F8FC]" aria-label="Documentation navigation">
            <div className="resource-detail-shell flex flex-col gap-3 py-6 sm:flex-row sm:justify-between sm:py-7">
              {previous ? (
                <Link
                  href={previous.href}
                  className="group flex min-h-[48px] flex-col justify-center border border-brand-line/80 bg-white px-4 py-3 sm:max-w-[48%]"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Previous</span>
                  <span className="mt-1 font-display text-[0.98rem] font-bold text-brand-navy group-hover:text-brand-blue">
                    ← {previous.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={next.href}
                  className="group flex min-h-[48px] flex-col justify-center border border-brand-line/80 bg-white px-4 py-3 text-right sm:max-w-[48%]"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Next</span>
                  <span className="mt-1 font-display text-[0.98rem] font-bold text-brand-navy group-hover:text-brand-blue">
                    {next.title} →
                  </span>
                </Link>
              ) : null}
            </div>
          </section>
        )}

        {related.length > 0 ? (
          <section className="relative border-b border-brand-line/60 bg-white" aria-labelledby="help-related-docs-heading">
            <div className="resource-detail-shell relative py-7 sm:py-8 lg:py-9">
              <ResourceRelatedAmbient />
              <div className="relative z-[1] grid gap-6 lg:grid-cols-[minmax(11rem,14rem)_minmax(0,1fr)_minmax(8rem,10rem)] lg:gap-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Continue</p>
                  <h2
                    id="help-related-docs-heading"
                    className="mt-1.5 font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
                  >
                    Related documentation
                  </h2>
                </div>
                <ul className="divide-y divide-brand-line border border-brand-line bg-[#FAFCFE]" data-design-layer="content">
                  {related.map((item, index) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-3 px-3.5 py-3.5 transition hover:bg-[#F7FAFD] sm:px-4 sm:py-4"
                      >
                        <span className="mt-0.5 shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted">
                            {item.categoryTitle}
                          </p>
                          <p className="mt-1 font-display text-[0.98rem] font-bold leading-snug text-brand-navy group-hover:text-brand-blue">
                            {item.title}
                          </p>
                          <p className="mt-0.5 line-clamp-2 text-[13px] text-brand-muted">{item.description}</p>
                        </div>
                        <ArrowRight className="hidden h-3 w-3 shrink-0 text-brand-blue sm:block" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <HelpDocRelatedNetworkAbstract className="mx-auto hidden lg:block" />
              </div>
            </div>
          </section>
        ) : null}

        <section className="border-b border-brand-line/60 bg-[#EEF4FA]/50" aria-labelledby="help-center-cta-heading">
          <div className="resource-detail-shell py-8 sm:py-9">
            <div className="max-w-2xl" data-design-layer="content">
              <h2 id="help-center-cta-heading" className="font-display text-[1.35rem] font-bold text-brand-navy sm:text-[1.5rem]">
                Need more product help?
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-brand-muted">
                Explore the VertexBuild Help Center and product documentation knowledge areas.
              </p>
              <Link href={ROUTES.resourcesHelp} className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-blue hover:underline">
                Visit Help Center
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <BlogDetailCtaSection />
      </div>
    </div>
  );
}
