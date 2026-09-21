import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import {
  formatGuideDate,
  getContinueReadingForGuide,
  getGuideToc,
  getRelatedGuides,
  guideTopicLabel,
  relatedTopicsForGuide,
} from "@/lib/marketing/resources/guide";
import { RESOURCE_TYPE_LABELS, RESOURCES_HUB } from "@/lib/marketing/resources/content";
import type { GuideArticleRecord } from "@/lib/marketing/resources/types";
import { ROUTES } from "@/lib/marketing/navigation";

import { GuideArticleBody } from "./GuideArticleBody";
import { BlogDetailCtaSection } from "./blog-detail/BlogDetailCtaSection";
import {
  AxisContinuationMark,
  ResourceAbstractSystem,
  ResourceHeroAmbient,
  ResourceHeroMediaBridge,
  ResourceRailAmbient,
  ResourceRelatedAmbient,
} from "./blog-detail/abstracts";
import { ResourceDetailContextRail } from "./blog-detail/ResourceDetailContextRail";
import {
  GuideGutterAbstract,
  GuideHeroWorkflowAbstract,
  GuideRelatedAbstract,
  GuideStageWorkflowVisual,
} from "./guide-detail/GuideWorkflowVisuals";
import { ResourceMapNav } from "./resource-detail/ResourceMapNav";
import { ResourceTypeBadge } from "./ResourceTypeBadge";

type Props = {
  guide: GuideArticleRecord;
};

const TOC_MIN_ITEMS = 2;

/** Guide Detail — product-led resource template (distinct from Blog Detail). */
export function GuideDetailPage({ guide }: Props) {
  const updatedLabel = formatGuideDate(guide.publishedAt);
  const topicLabel = guideTopicLabel(guide.topic);
  const formatLabel = guide.guideFormat ?? "In-depth guide";
  const toc = getGuideToc(guide);
  const showRail = toc.length >= TOC_MIN_ITEMS;
  const libraryGuides = getRelatedGuides(guide, 4);
  const related = getContinueReadingForGuide(guide, 4);
  const relatedTopics = relatedTopicsForGuide(guide.topic);

  const libraryItems = libraryGuides.map((item, index) => ({
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
            { label: "Guides", href: ROUTES.resourcesGuides },
            { label: guide.title },
          ]}
        />

        {/* GUIDE HERO */}
        <section className="relative overflow-hidden border-b border-brand-line/60" data-axis-stage="hero">
          <ResourceHeroAmbient />
          <div className="resource-detail-shell relative z-[1] py-6 sm:py-7 lg:py-8">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,19rem)] lg:gap-10 xl:gap-12">
              <div className="min-w-0" data-design-layer="content">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                  VertexBuild <span className="text-brand-line">/</span>{" "}
                  <span className="text-brand-orange">{RESOURCE_TYPE_LABELS.guide}</span>
                </p>
                <h1 className="mt-2.5 max-w-3xl font-display text-[1.75rem] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[2.25rem] lg:text-[2.55rem]">
                  {guide.title}
                </h1>
                <p className="mt-3 max-w-2xl text-[15px] leading-[1.65] text-brand-muted sm:text-[15.5px]">
                  {guide.description}
                </p>

                <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-brand-line/80 pt-3.5 text-[12.5px] text-brand-muted">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted/90">Topic</dt>
                    <dd className="mt-0.5 font-medium text-brand-navy">{topicLabel}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted/90">Format</dt>
                    <dd className="mt-0.5 font-medium text-brand-navy">{formatLabel}</dd>
                  </div>
                  {updatedLabel ? (
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted/90">Updated</dt>
                      <dd className="mt-0.5 font-medium text-brand-navy">
                        <time dateTime={guide.publishedAt}>{updatedLabel}</time>
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <div className="mt-4 rounded-sm border border-brand-line/70 bg-white/70 px-3 py-3 sm:hidden">
                  <GuideHeroWorkflowAbstract />
                </div>
              </div>

              <div className="hidden justify-self-end rounded-sm border border-brand-line/70 bg-white/70 px-3 py-3 sm:block lg:px-4 lg:py-4">
                <GuideHeroWorkflowAbstract className="opacity-100" />
              </div>
            </div>
          </div>
          <ResourceHeroMediaBridge className="-mb-1" />
        </section>

        {/* GUIDE STAGE VISUAL */}
        <section className="relative border-b border-brand-line/60" aria-label="Guide workflow overview" data-axis-stage="stage">
          <div className="resource-detail-shell relative z-[1] py-5 sm:py-6 lg:py-7">
            <div className="mb-3 flex flex-wrap items-center gap-2" data-design-layer="content">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Featured guide</p>
              <span className="text-brand-line" aria-hidden="true">
                /
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{topicLabel}</p>
            </div>
            <div className="relative" data-design-layer="content">
              <GuideStageWorkflowVisual />
              {guide.image?.src ? (
                <figure className="mt-4 overflow-hidden border border-brand-line bg-[#F4F7FB]">
                  <div className="aspect-[21/9] w-full min-h-[140px] overflow-hidden sm:min-h-[180px]">
                    <img
                      src={guide.image.src}
                      alt={guide.image.alt}
                      className="h-full w-full object-cover opacity-95"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </figure>
              ) : null}
            </div>
          </div>
          <AxisContinuationMark stage="media-exit" className="opacity-60" />
        </section>

        {/* GUIDE CONTENT + NAV */}
        <section className="relative border-b border-brand-line/60" data-axis-stage="article">
          <div className="resource-detail-shell relative py-7 sm:py-8 lg:py-9">
            <GuideGutterAbstract />
            <ResourceRailAmbient />

            {showRail ? (
              <details className="group mb-5 border border-brand-line bg-white lg:hidden" data-design-layer="content">
                <summary className="cursor-pointer list-none px-4 py-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted marker:content-none [&::-webkit-details-marker]:hidden">
                  On this guide
                  <span className="float-right text-brand-blue group-open:hidden">Show</span>
                  <span className="float-right hidden text-brand-blue group-open:inline">Hide</span>
                </summary>
                <div className="border-t border-brand-line px-2 pb-3">
                  <ResourceMapNav
                    mapItems={toc}
                    mapTitle="On this guide"
                    mapAriaLabel="On this guide"
                    variant="guide"
                    scrollSpy={false}
                    libraryTitle={libraryItems.length ? "In this library" : undefined}
                    libraryItems={libraryItems.length ? libraryItems : undefined}
                  />
                </div>
              </details>
            ) : null}

            <div className="resource-detail-main-grid relative z-[1]">
              <article
                className="resource-detail-article border border-brand-line/50 bg-white/90 px-4 py-4 sm:px-6 sm:py-5"
                data-design-layer="content"
              >
                <GuideArticleBody blocks={guide.body} guideId={guide.id} />
                <div className="mt-7 border-t border-brand-line pt-4">
                  <Link
                    href={ROUTES.resourcesGuides}
                    className="inline-flex text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                  >
                    ← Back to Guides
                  </Link>
                </div>
              </article>

              {showRail ? (
                <ResourceDetailContextRail
                  mapItems={toc}
                  relatedTopics={relatedTopics}
                  mapTitle="On this guide"
                  mapAriaLabel="On this guide"
                  mapVariant="guide"
                  scrollSpy
                  libraryTitle={libraryItems.length ? "In this library" : undefined}
                  libraryItems={libraryItems.length ? libraryItems : undefined}
                />
              ) : null}
            </div>
          </div>
        </section>

        {/* CONTINUE READING */}
        {related.length > 0 ? (
          <section
            className="relative border-b border-brand-line/60"
            aria-labelledby="guide-related-resources-heading"
            data-axis-stage="related"
          >
            <div className="resource-detail-shell relative py-8 sm:py-9 lg:py-10">
              <ResourceRelatedAmbient />
              <div className="relative z-[1] grid gap-6 lg:grid-cols-[minmax(11rem,14rem)_minmax(0,1fr)_minmax(9rem,11rem)] lg:items-start lg:gap-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Continue reading</p>
                  <h2
                    id="guide-related-resources-heading"
                    className="mt-1.5 font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]"
                  >
                    Related resources
                  </h2>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-brand-muted">
                    Guides, templates, webinars, and articles connected to this workflow.
                  </p>
                </div>

                <ul className="divide-y divide-brand-line border border-brand-line bg-white" data-design-layer="content">
                  {related.map((item, index) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-3 px-3.5 py-3 transition hover:bg-[#F7F9FC] sm:gap-4 sm:px-4 sm:py-3.5"
                      >
                        <span className="mt-0.5 shrink-0 text-[11px] font-semibold tabular-nums text-brand-orange">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <ResourceTypeBadge type={item.type} />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand-muted">
                              {guideTopicLabel(item.topic)}
                            </span>
                          </div>
                          <p className="mt-1 font-display text-[0.98rem] font-bold leading-snug text-brand-navy transition group-hover:text-brand-blue sm:text-[1.05rem]">
                            {item.title}
                          </p>
                          <p className="mt-0.5 line-clamp-2 text-[13px] leading-relaxed text-brand-muted">
                            {item.description}
                          </p>
                        </div>
                        <span className="hidden shrink-0 pt-1 text-[11px] font-semibold text-brand-blue sm:inline-flex sm:items-center sm:gap-1">
                          {RESOURCE_TYPE_LABELS[item.type]}
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <GuideRelatedAbstract className="mx-auto hidden opacity-95 lg:mx-0 lg:mt-2 lg:block" />
              </div>
            </div>
            <AxisContinuationMark stage="related-exit" className="opacity-60" />
          </section>
        ) : null}

        <BlogDetailCtaSection />

        <p className="sr-only">
          Next steps: {RESOURCES_HUB.cta.primary.label}, {RESOURCES_HUB.cta.secondary.label}, or{" "}
          {RESOURCES_HUB.cta.tertiary.label}.
        </p>
      </div>
    </div>
  );
}
