import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";
import {
  formatTemplateDate,
  getRelatedResourcesForTemplate,
  getTemplateDetailMeta,
  templateListingCategoryLabel,
} from "@/lib/marketing/resources/template";
import { RESOURCE_TYPE_LABELS } from "@/lib/marketing/resources/content";
import type { TemplateArticleRecord } from "@/lib/marketing/resources/types";

import { BlogDetailCtaSection } from "./blog-detail/BlogDetailCtaSection";
import {
  AxisContinuationMark,
  ResourceAbstractSystem,
  ResourceHeroAmbient,
  ResourceRelatedAmbient,
} from "./blog-detail/abstracts";
import { GuideRelatedAbstract } from "./guide-detail/GuideWorkflowVisuals";
import { ResourceTypeBadge } from "./ResourceTypeBadge";
import {
  TemplateCoversWorkflowAbstract,
  TemplateDetailGutterAbstract,
  TemplateHeroMiniPreview,
  TemplateVertexBuildFlowAbstract,
  TemplateWorksheetPreview,
} from "./template-detail/TemplateDetailVisuals";

type Props = { template: TemplateArticleRecord };

/** Reusable Template Detail — `/resources/templates/[slug]` */
export function TemplateDetailPage({ template }: Props) {
  const meta = getTemplateDetailMeta(template.id);
  const categoryLabel = templateListingCategoryLabel(template.topic);
  const updated = formatTemplateDate(template.publishedAt);
  const related = getRelatedResourcesForTemplate(template, 4);

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-brand-navy">
      <ResourceAbstractSystem />

      <div className="relative z-[1]">
        <Breadcrumbs
          items={[
            { label: "Home", href: ROUTES.home },
            { label: "Resources", href: ROUTES.resources },
            { label: "Templates", href: ROUTES.resourcesTemplates },
            { label: template.title },
          ]}
        />

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-brand-line/60 bg-[#EEF4FA]/40" data-axis-stage="hero">
          <ResourceHeroAmbient />
          <div className="resource-detail-shell relative z-[1] py-7 sm:py-8 lg:py-9">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,22rem)] lg:gap-10 xl:gap-12">
              <div className="min-w-0" data-design-layer="content">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Template</p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                  {categoryLabel} · {template.templateFormat}
                </p>
                <h1 className="mt-2 max-w-2xl font-display text-[1.75rem] font-bold leading-[1.1] tracking-tight text-brand-navy sm:text-[2.25rem] lg:text-[2.45rem]">
                  {template.title}
                </h1>
                <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-brand-muted">{template.description}</p>
                {updated ? (
                  <p className="mt-3 text-[12.5px] text-brand-muted">
                    Updated <time dateTime={template.publishedAt}>{updated}</time>
                  </p>
                ) : null}
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="#template-full-preview" className="btn-primary inline-flex w-full sm:w-auto">
                    View worksheet structure
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href={ROUTES.productTour} className="btn-secondary inline-flex w-full sm:w-auto">
                    Product Tour
                  </Link>
                </div>
              </div>
              {meta ? (
                <TemplateHeroMiniPreview variant={meta.previewVariant} className="justify-self-center lg:justify-self-end" />
              ) : null}
            </div>
          </div>
        </section>

        {meta ? (
          <>
            <section id="template-full-preview" className="scroll-mt-28 border-b border-brand-line/60 bg-white">
              <div className="resource-detail-shell py-7 sm:py-8 lg:py-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-blue">Template preview</p>
                <h2 className="mt-1.5 font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]">
                  Structured worksheet layout
                </h2>
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-brand-muted">
                  Visual reference for how teams organize this workflow before aligning fields with the project record in
                  VertexBuild.
                </p>
                <div className="relative mt-6">
                  <TemplateDetailGutterAbstract />
                  <div className="relative z-[1] max-w-4xl">
                    <TemplateWorksheetPreview variant={meta.previewVariant} />
                  </div>
                </div>
              </div>
            </section>

            <section className="relative border-b border-brand-line/60 bg-[#F5F8FC]" aria-labelledby="template-covers-heading">
              <div className="resource-detail-shell relative py-7 sm:py-8 lg:py-9">
                <div className="resource-detail-main-grid relative z-[1]">
                  <div data-design-layer="content">
                    <h2
                      id="template-covers-heading"
                      className="font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
                    >
                      What this template covers
                    </h2>
                    <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-brand-navy/90">{meta.coversSummary}</p>
                  </div>
                  <div className="hidden lg:flex lg:justify-end lg:pt-2">
                    <TemplateCoversWorkflowAbstract labels={meta.coversFlow} />
                  </div>
                </div>
                <div className="mt-6 lg:hidden">
                  <TemplateCoversWorkflowAbstract labels={meta.coversFlow} className="mx-auto" />
                </div>
              </div>
            </section>

            <section className="border-b border-brand-line/60 bg-white/80" aria-labelledby="template-included-heading">
              <div className="resource-detail-shell py-7 sm:py-8 lg:py-9">
                <h2
                  id="template-included-heading"
                  className="font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
                >
                  Recommended sections
                </h2>
                <p className="mt-2 text-[14px] text-brand-muted">
                  Fields and sections teams standardize before using the worksheet on active jobs.
                </p>
                <ol className="mt-6 divide-y divide-brand-line border border-brand-line bg-white" data-design-layer="content">
                  {meta.includedSections.map((section, index) => (
                    <li key={section.title} className="flex gap-4 px-4 py-4 sm:gap-5 sm:px-5 sm:py-4.5">
                      <span className="shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-display text-[1.02rem] font-bold text-brand-navy sm:text-[1.08rem]">{section.title}</p>
                        <p className="mt-1 text-[14px] leading-relaxed text-brand-muted">{section.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="border-b border-brand-line/60 bg-[#EEF4FA]/35" aria-labelledby="template-howto-heading">
              <div className="resource-detail-shell py-7 sm:py-8 lg:py-9">
                <h2
                  id="template-howto-heading"
                  className="font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
                >
                  How to use this template
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                  {meta.howToUse.map((step, index) => (
                    <div
                      key={step.title}
                      className="relative border border-brand-line/80 bg-white px-4 py-4 sm:px-5"
                      data-design-layer="content"
                    >
                      <span className="text-[11px] font-semibold tabular-nums text-brand-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-2 font-display text-[1rem] font-bold text-brand-navy">{step.title}</p>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-brand-muted">{step.description}</p>
                      {index < meta.howToUse.length - 1 ? (
                        <span
                          className="absolute -right-2 top-1/2 hidden h-px w-4 bg-brand-blue/30 lg:block"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="border-b border-brand-line/60 bg-white" aria-labelledby="template-vb-heading">
              <div className="resource-detail-shell py-7 sm:py-8 lg:py-9">
                <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.38fr)] lg:gap-12">
                  <div data-design-layer="content">
                    <h2
                      id="template-vb-heading"
                      className="font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.5rem]"
                    >
                      How it fits into VertexBuild
                    </h2>
                    <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-brand-navy/90">{meta.vertexBuildSummary}</p>
                    <Link
                      href={ROUTES.resourcesTemplates}
                      className="mt-5 inline-flex text-[13px] font-semibold text-brand-blue hover:underline"
                    >
                      ← Back to Templates
                    </Link>
                  </div>
                  <TemplateVertexBuildFlowAbstract className="mx-auto lg:mx-0" />
                </div>
              </div>
            </section>
          </>
        ) : null}

        {/* RELATED */}
        {related.length > 0 ? (
          <section className="relative border-b border-brand-line/60 bg-[#F5F8FC]" aria-labelledby="template-related-heading">
            <div className="resource-detail-shell relative py-7 sm:py-8 lg:py-9">
              <ResourceRelatedAmbient />
              <div className="relative z-[1] grid gap-6 lg:grid-cols-[minmax(11rem,14rem)_minmax(0,1fr)_minmax(9rem,11rem)] lg:items-start lg:gap-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Continue</p>
                  <h2 id="template-related-heading" className="mt-1.5 font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]">
                    Related resources
                  </h2>
                </div>
                <ul className="divide-y divide-brand-line border border-brand-line bg-white" data-design-layer="content">
                  {related.map((item, index) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-3 px-3.5 py-3 transition hover:bg-[#F7FAFD] sm:px-4 sm:py-3.5"
                      >
                        <span className="mt-0.5 shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <ResourceTypeBadge type={item.type} />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted">
                              {RESOURCE_TYPE_LABELS[item.type]}
                            </span>
                          </div>
                          <p className="mt-1 font-display text-[0.98rem] font-bold leading-snug text-brand-navy group-hover:text-brand-blue sm:text-[1.05rem]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 line-clamp-2 text-[13px] text-brand-muted">{item.description}</p>
                        </div>
                        <ArrowRight className="hidden h-3 w-3 shrink-0 text-brand-blue sm:block" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <GuideRelatedAbstract className="mx-auto hidden lg:mx-0 lg:mt-2 lg:block" />
              </div>
            </div>
            <AxisContinuationMark stage="related-exit" className="opacity-60" />
          </section>
        ) : null}

        <BlogDetailCtaSection />
      </div>
    </div>
  );
}
