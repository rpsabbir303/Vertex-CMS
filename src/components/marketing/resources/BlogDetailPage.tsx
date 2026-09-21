import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import {
  blogTopicLabel,
  formatBlogDate,
  getBlogToc,
  getRelatedBlogArticles,
  getRelatedHubResources,
} from "@/lib/marketing/resources/blog";
import { RESOURCE_TYPE_LABELS, RESOURCES_HUB } from "@/lib/marketing/resources/content";
import type { BlogArticleRecord, ResourceRecord } from "@/lib/marketing/resources/types";
import { ROUTES } from "@/lib/marketing/navigation";

import { BlogArticleBody } from "./BlogArticleBody";
import { BlogDetailCtaSection } from "./blog-detail/BlogDetailCtaSection";
import {
  ArticleGutterAbstract,
  AxisContinuationMark,
  HeroWorkflowAbstract,
  HeroWorkflowAbstractMobile,
  MediaContextAbstract,
  RelatedKnowledgeAbstract,
  ResourceAbstractSystem,
  ResourceHeroAmbient,
  ResourceHeroMediaBridge,
  ResourceRailAmbient,
  ResourceRelatedAmbient,
} from "./blog-detail/abstracts";
import {
  relatedTopicsForArticle,
  ResourceDetailContextRail,
} from "./blog-detail/ResourceDetailContextRail";
import { ResourceTypeBadge } from "./ResourceTypeBadge";

type Props = {
  article: BlogArticleRecord;
};

const TOC_MIN_ITEMS = 2;

/**
 * Reusable Resource Detail template (Blog today; Guide / Webinar / Template share this structure).
 */
export function BlogDetailPage({ article }: Props) {
  const dateLabel = formatBlogDate(article.publishedAt);
  const topicLabel = blogTopicLabel(article.topic);
  const toc = getBlogToc(article);
  const showRail = toc.length >= TOC_MIN_ITEMS;
  const relatedBlogs = getRelatedBlogArticles(article, 3);
  const relatedHub = getRelatedHubResources(article, 1);
  const related: ResourceRecord[] = [...relatedBlogs, ...relatedHub].slice(0, 4);
  const relatedTopics = relatedTopicsForArticle(article.topic);

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FB] font-sans text-brand-navy">
      <ResourceAbstractSystem />

      <div className="relative z-[1]">
        <Breadcrumbs
          items={[
            { label: "Resources", href: ROUTES.resources },
            { label: "Blog", href: ROUTES.resourcesBlog },
            { label: article.title },
          ]}
        />

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-brand-line/60" data-axis-stage="hero">
          <ResourceHeroAmbient />
          <div className="resource-detail-shell relative z-[1] py-6 sm:py-7 lg:py-8">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,19rem)] lg:gap-10 xl:gap-12">
              <div className="min-w-0" data-design-layer="content">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                    {RESOURCE_TYPE_LABELS.blog}
                  </span>
                  <span className="text-brand-line" aria-hidden="true">
                    /
                  </span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{topicLabel}</p>
                </div>
                <h1 className="mt-2.5 max-w-3xl font-display text-[1.75rem] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[2.25rem] lg:text-[2.55rem]">
                  {article.title}
                </h1>
                <p className="mt-3 max-w-2xl text-[15px] leading-[1.65] text-brand-muted sm:text-[15.5px]">
                  {article.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-brand-line/80 pt-3.5 text-[12.5px] text-brand-muted">
                  {dateLabel ? <time dateTime={article.publishedAt}>{dateLabel}</time> : null}
                  {article.author ? (
                    <>
                      {dateLabel ? (
                        <span aria-hidden="true" className="text-brand-line">
                          ·
                        </span>
                      ) : null}
                      <span>By {article.author}</span>
                    </>
                  ) : null}
                  {typeof article.readingMinutes === "number" ? (
                    <>
                      {dateLabel || article.author ? (
                        <span aria-hidden="true" className="text-brand-line">
                          ·
                        </span>
                      ) : null}
                      <span>{article.readingMinutes} min read</span>
                    </>
                  ) : null}
                </div>

                <HeroWorkflowAbstractMobile className="mt-4 sm:hidden" />
              </div>

              <div className="hidden justify-self-end rounded-sm border border-brand-line/70 bg-white/70 px-3 py-3 sm:block lg:px-4 lg:py-4">
                <HeroWorkflowAbstract className="opacity-100" />
              </div>
            </div>
          </div>
          <ResourceHeroMediaBridge className="-mb-1" />
        </section>

        {/* FEATURED MEDIA */}
        {article.image?.src ? (
          <section className="relative border-b border-brand-line/60" aria-label="Article image" data-axis-stage="media">
            <div className="resource-detail-shell relative z-[1] py-5 sm:py-6 lg:py-7">
              <div className="mb-3 flex flex-wrap items-center gap-2" data-design-layer="content">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Featured article</p>
                <span className="text-brand-line" aria-hidden="true">
                  /
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">{topicLabel}</p>
              </div>
              <div className="relative px-0 xl:px-10">
                <MediaContextAbstract mode="rails" className="absolute inset-0" />
                <figure
                  className="relative z-[1] overflow-hidden border border-brand-line bg-[#F4F7FB] shadow-[0_1px_0_rgba(8,35,63,0.04)]"
                  data-design-layer="content"
                >
                  <div className="aspect-[21/9] w-full min-h-[180px] overflow-hidden sm:min-h-[240px] lg:min-h-[300px]">
                    <img
                      src={article.image.src}
                      alt={article.image.alt}
                      className="h-full w-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </figure>
                <MediaContextAbstract mode="strip" className="relative z-[1] hidden opacity-90 sm:block" />
              </div>
            </div>
            <AxisContinuationMark stage="media-exit" className="opacity-60" />
          </section>
        ) : null}

        {/* ARTICLE + RESOURCE RAIL */}
        <section className="relative border-b border-brand-line/60" data-axis-stage="article">
          <div className="resource-detail-shell relative py-7 sm:py-8 lg:py-9">
            <ArticleGutterAbstract />
            <ResourceRailAmbient />

            {showRail ? (
              <nav
                aria-label="Resource map"
                className="mb-5 border border-brand-line bg-white px-4 py-3.5 lg:hidden"
                data-design-layer="content"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Resource map</p>
                <ol className="mt-2.5 space-y-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex gap-2.5 text-[13px] leading-snug text-brand-navy hover:text-brand-blue"
                      >
                        <span className="shrink-0 tabular-nums text-brand-orange">
                          {String(item.index).padStart(2, "0")}
                        </span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <div className="resource-detail-main-grid relative z-[1]">
              <article
                className="resource-detail-article border border-brand-line/50 bg-white/90 px-4 py-4 sm:px-6 sm:py-5"
                data-design-layer="content"
              >
                <BlogArticleBody blocks={article.body} />
                <div className="mt-7 border-t border-brand-line pt-4">
                  <Link
                    href={ROUTES.resourcesBlog}
                    className="inline-flex text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                  >
                    ← Back to Blog
                  </Link>
                </div>
              </article>

              {showRail ? (
                <ResourceDetailContextRail
                  mapItems={toc}
                  relatedTopics={relatedTopics}
                />
              ) : null}
            </div>
          </div>
        </section>

        {/* RELATED RESOURCES */}
        {related.length > 0 ? (
          <section
            className="relative border-b border-brand-line/60"
            aria-labelledby="related-resources-heading"
            data-axis-stage="related"
          >
            <div className="resource-detail-shell relative py-8 sm:py-9 lg:py-10">
              <ResourceRelatedAmbient />
              <div className="relative z-[1] grid gap-6 lg:grid-cols-[minmax(11rem,14rem)_minmax(0,1fr)_minmax(9rem,11rem)] lg:items-start lg:gap-8">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Continue</p>
                  <h2
                    id="related-resources-heading"
                    className="mt-1.5 font-display text-[1.35rem] font-bold tracking-tight text-brand-navy sm:text-[1.55rem]"
                  >
                    Related resources
                  </h2>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-brand-muted">
                    More from the Resource Hub on similar construction workflows.
                  </p>
                </div>

                <ul
                  className="divide-y divide-brand-line border border-brand-line bg-white"
                  data-design-layer="content"
                >
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
                              {blogTopicLabel(item.topic)}
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

                <RelatedKnowledgeAbstract className="mx-auto hidden opacity-95 lg:mx-0 lg:mt-2 lg:block" />
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
