import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import {
  blogTopicLabel,
  BLOG_LISTING_PAGE_ANCHORS,
  formatBlogDate,
  getBlogReadingMinutes,
} from "@/lib/marketing/resources/blog";
import type { BlogArticleRecord } from "@/lib/marketing/resources/types";

import { BlogEditorialVisual } from "../BlogEditorialVisual";

type Props = {
  article: BlogArticleRecord;
};

export function FeaturedBlogArticle({ article }: Props) {
  const topicLabel = blogTopicLabel(article.topic);
  const date = formatBlogDate(article.publishedAt);
  const reading = getBlogReadingMinutes(article);

  return (
    <section
      id={BLOG_LISTING_PAGE_ANCHORS.featured}
      className="relative scroll-mt-28 border-b border-brand-line/60 bg-white"
      aria-labelledby="featured-blog-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:gap-12 xl:gap-14">
          <div className="flex min-w-0 flex-col justify-center" data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Featured article</p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111827]/65">{topicLabel}</p>
            <h2
              id="featured-blog-heading"
              className="mt-2 font-display text-[1.55rem] font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-[1.95rem] lg:text-[2.15rem]"
            >
              {article.title}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-[#111827] sm:text-[15.5px]">{article.description}</p>
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-brand-line/80 pt-5 text-[12.5px] text-[#111827]">
              {date ? (
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Published</dt>
                  <dd className="mt-0.5 font-medium">
                    <time dateTime={article.publishedAt}>{date}</time>
                  </dd>
                </div>
              ) : null}
              {reading ? (
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Reading time</dt>
                  <dd className="mt-0.5 font-medium">{reading} min read</dd>
                </div>
              ) : null}
              {article.author ? (
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Author</dt>
                  <dd className="mt-0.5 font-medium">{article.author}</dd>
                </div>
              ) : null}
            </dl>
            <Link
              href={article.href}
              className="mt-7 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-navy transition hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/45"
            >
              Read article
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="relative min-w-0 border border-brand-line/80 bg-[#FAFBFD]" data-design-layer="content">
            {article.image ? (
              <BlogEditorialVisual resource={article} variant="integrated" priority />
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center bg-[#EEF4FA] text-[13px] text-[#111827]/60">
                Article preview
              </div>
            )}
            <div className="border-t border-brand-line/80 px-4 py-3 sm:px-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#111827]/55">Editorial focus</p>
              <p className="mt-1 text-[11px] leading-snug text-[#111827]">{topicLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
