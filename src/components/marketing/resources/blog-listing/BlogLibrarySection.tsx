"use client";

import { useMemo, useState } from "react";

import {
  BLOG_LISTING_PAGE_ANCHORS,
  BLOG_PAGE_SIZE,
  filterBlogArticles,
  getBlogTopicFilters,
  type BlogTopicFilterId,
} from "@/lib/marketing/resources/blog";
import type { BlogArticleRecord } from "@/lib/marketing/resources/types";

import { ResourceSearchField } from "../ResourceSearchField";
import { BlogCard } from "./BlogCard";

type Props = {
  articles: BlogArticleRecord[];
  /** True when the catalog has blog entries (library may still be empty if only one featured article). */
  catalogHasArticles?: boolean;
};

export function BlogLibrarySection({ articles, catalogHasArticles = true }: Props) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<BlogTopicFilterId>("all");
  const [visibleCount, setVisibleCount] = useState(BLOG_PAGE_SIZE);

  const topicFilters = useMemo(() => getBlogTopicFilters(), []);

  const filtered = useMemo(
    () => filterBlogArticles(articles, { query, topic }),
    [articles, query, topic],
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const hasActiveFilters = Boolean(query.trim()) || topic !== "all";

  const resetFilters = () => {
    setQuery("");
    setTopic("all");
    setVisibleCount(BLOG_PAGE_SIZE);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setVisibleCount(BLOG_PAGE_SIZE);
  };

  const handleTopicChange = (id: BlogTopicFilterId) => {
    setTopic(id);
    setVisibleCount(BLOG_PAGE_SIZE);
  };

  return (
    <section
      id={BLOG_LISTING_PAGE_ANCHORS.library}
      className="relative scroll-mt-28 border-b border-brand-line/60 bg-[#F5F8FC]/80"
      aria-labelledby="blog-library-heading"
    >
      <div className="resource-detail-shell relative z-[1] py-10 sm:py-11 lg:py-12">
        <header className="min-w-0" data-design-layer="content">
          <h2 id="blog-library-heading" className="font-display text-[1.5rem] font-bold tracking-tight text-brand-navy sm:text-[1.7rem]">
            All articles
          </h2>
          <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-[#111827] sm:text-[15px]">
            Latest construction operations insights from the VertexBuild editorial library.
          </p>
        </header>

        <div className="mt-8 space-y-6" data-design-layer="content">
          <ResourceSearchField
            value={query}
            onChange={handleQueryChange}
            placeholder="Search articles…"
            label="Search blog articles"
          />

          <div
            className="-mx-1 flex gap-1 overflow-x-auto pb-1 scrollbar-thin"
            role="group"
            aria-label="Filter by category"
          >
            {topicFilters.map((f) => {
              const active = topic === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => handleTopicChange(f.id)}
                  className={`shrink-0 border-b-2 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:text-[11px] ${
                    active ? "border-brand-orange text-brand-navy" : "border-transparent text-[#111827]/65 hover:text-brand-navy"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <p className="text-[13px] text-[#111827]/75" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
            {hasActiveFilters ? " matching your filters" : ""}
          </p>
        </div>

        {articles.length === 0 && !hasActiveFilters ? (
          <div className="mt-10 border border-brand-line/80 bg-white px-6 py-10 text-center" data-design-layer="content">
            {catalogHasArticles ? (
              <>
                <p className="font-display text-[1.1rem] font-bold text-brand-navy">More articles on the way</p>
                <p className="mt-2 text-[14px] text-[#111827]">
                  The featured article above is the latest in the library. Additional posts will appear here as they are published.
                </p>
              </>
            ) : (
              <>
                <p className="font-display text-[1.1rem] font-bold text-brand-navy">Articles coming soon</p>
                <p className="mt-2 text-[14px] text-[#111827]">Check back for construction operations insights from VertexBuild.</p>
              </>
            )}
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-10 border border-brand-line/80 bg-white px-6 py-10 text-center" data-design-layer="content">
            <p className="font-display text-[1.1rem] font-bold text-brand-navy">No articles match your search.</p>
            <p className="mt-2 text-[14px] text-[#111827]">Try a different keyword or reset filters to see the full library.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {hasActiveFilters ? (
                <button type="button" onClick={resetFilters} className="btn-secondary inline-flex">
                  Clear filters
                </button>
              ) : null}
              <button type="button" onClick={resetFilters} className="text-[13px] font-semibold text-brand-navy hover:text-brand-orange">
                View all articles
              </button>
            </div>
          </div>
        ) : (
          <>
            <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" role="list">
              {visible.map((article, index) => (
                <li key={article.id} className="min-w-0">
                  <BlogCard article={article} priority={index < 3} />
                </li>
              ))}
            </ul>
            {hasMore ? (
              <div className="mt-10 flex justify-center" data-design-layer="content">
                <button
                  type="button"
                  onClick={() => setVisibleCount((c) => c + BLOG_PAGE_SIZE)}
                  className="btn-secondary inline-flex min-w-[10rem]"
                >
                  Load more articles
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
