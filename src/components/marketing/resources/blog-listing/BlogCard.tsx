import Link from "next/link";

import { ArrowRight } from "@/components/Icons";
import { blogTopicLabel, formatBlogDate, getBlogReadingMinutes } from "@/lib/marketing/resources/blog";
import type { BlogArticleRecord } from "@/lib/marketing/resources/types";

import { BlogEditorialVisual } from "../BlogEditorialVisual";

type Props = {
  article: BlogArticleRecord;
  /** Eager-load image for above-the-fold cards. */
  priority?: boolean;
};

export function BlogCard({ article, priority = false }: Props) {
  const topicLabel = blogTopicLabel(article.topic);
  const date = formatBlogDate(article.publishedAt);
  const reading = getBlogReadingMinutes(article);

  return (
    <Link
      href={article.href}
      className="group flex h-full min-w-0 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/45"
      data-design-layer="content"
    >
      <div className="overflow-hidden border border-brand-line/80 bg-white transition duration-200 group-hover:border-brand-navy/25">
        {article.image ? (
          <BlogEditorialVisual resource={article} variant="integrated" priority={priority} />
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center bg-[#EEF4FA] text-[11px] text-[#111827]/55">
            Article
          </div>
        )}
      </div>
      <div className="mt-4 min-w-0 border-t border-transparent pt-1 transition group-hover:border-brand-orange/40">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{topicLabel}</p>
        <h3 className="mt-1.5 font-display text-[1.05rem] font-bold leading-snug text-brand-navy transition group-hover:text-brand-navy sm:text-[1.12rem]">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-[#111827]">{article.description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#111827]/70">
          {date ? <time dateTime={article.publishedAt}>{date}</time> : null}
          {reading ? <span>{reading} min read</span> : null}
          {article.author ? <span>{article.author}</span> : null}
        </div>
        <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-navy group-hover:text-brand-orange">
          Read article
          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
