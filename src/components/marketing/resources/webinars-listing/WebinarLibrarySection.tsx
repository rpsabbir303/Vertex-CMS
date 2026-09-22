"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ROUTES } from "@/lib/marketing/navigation";
import {
  filterWebinarArticles,
  getWebinarStatusFilters,
  getWebinarTopicFilters,
  WEBINAR_LIBRARY_PAGE_SIZE,
  type WebinarStatusFilterId,
  type WebinarTopicFilterId,
} from "@/lib/marketing/resources/webinar";
import type { WebinarArticleRecord } from "@/lib/marketing/resources/types";

import { ResourceSearchField } from "../ResourceSearchField";
import { WebinarCard } from "./WebinarCard";

type Props = {
  webinars: WebinarArticleRecord[];
  catalogHasWebinars?: boolean;
};

function libraryGridClass(count: number) {
  if (count === 1) {
    return "mt-6 grid w-full grid-cols-1 gap-7 lg:max-w-2xl";
  }
  if (count === 2) {
    return "mt-6 grid w-full grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:gap-9";
  }
  return "mt-6 grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8";
}

export function WebinarLibrarySection({ webinars, catalogHasWebinars = true }: Props) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<WebinarTopicFilterId>("all");
  const [status, setStatus] = useState<WebinarStatusFilterId>("all");
  const [visibleCount, setVisibleCount] = useState(WEBINAR_LIBRARY_PAGE_SIZE);

  const topicFilters = useMemo(() => getWebinarTopicFilters(), []);
  const statusFilters = getWebinarStatusFilters();

  const filtered = useMemo(
    () => filterWebinarArticles(webinars, { query, topic, status }),
    [webinars, query, topic, status],
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const hasActiveFilters = Boolean(query.trim()) || topic !== "all" || status !== "all";

  const resetFilters = () => {
    setQuery("");
    setTopic("all");
    setStatus("all");
    setVisibleCount(WEBINAR_LIBRARY_PAGE_SIZE);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setVisibleCount(WEBINAR_LIBRARY_PAGE_SIZE);
  };

  const handleTopicChange = (id: WebinarTopicFilterId) => {
    setTopic(id);
    setVisibleCount(WEBINAR_LIBRARY_PAGE_SIZE);
  };

  const handleStatusChange = (id: WebinarStatusFilterId) => {
    setStatus(id);
    setVisibleCount(WEBINAR_LIBRARY_PAGE_SIZE);
  };

  return (
    <section className="relative border-b border-brand-line/60 bg-[#F5F8FC]" aria-labelledby="webinar-library-heading">
      <div className="resource-detail-shell relative z-[1] pb-9 pt-7 sm:pb-10 sm:pt-8 lg:pb-11">
        <header className="min-w-0" data-design-layer="content">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">Webinar library</p>
          <h2 id="webinar-library-heading" className="mt-2 font-display text-[1.55rem] font-bold tracking-tight text-brand-navy sm:text-[1.85rem]">
            Explore all webinars
          </h2>
          <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-[#111827] sm:text-[15px]">
            Filter by topic and status, or search by title and description.
          </p>
        </header>

        <div
          className="mt-5 border border-brand-line/80 bg-white px-3 py-3 sm:px-4 sm:py-3"
          data-design-layer="content"
        >
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-8">
            <div className="min-w-0 [&_form]:max-w-none [&_input]:py-3 [&_input]:shadow-none">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#111827]/50">Search</p>
              <div className="mt-1">
                <ResourceSearchField
                  value={query}
                  onChange={handleQueryChange}
                  placeholder="Search webinars…"
                  label="Search webinars"
                />
              </div>
            </div>

            <div className="min-w-0 space-y-2.5 lg:pt-0">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#111827]/50">Category</p>
                <div className="-mx-0.5 mt-1 flex overflow-x-auto pb-0.5" role="group" aria-label="Filter by category">
                  {topicFilters.map((f) => {
                    const active = topic === f.id;
                    return (
                      <button
                        key={f.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => handleTopicChange(f.id)}
                        className={`shrink-0 border-b-2 px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 ${
                          active
                            ? "border-brand-orange text-brand-navy"
                            : "border-transparent text-[#111827]/60 hover:text-[#111827]"
                        }`}
                      >
                        {f.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#111827]/50">Status</p>
                <div className="-mx-0.5 mt-1 flex flex-wrap gap-1.5" role="group" aria-label="Filter by status">
                  {statusFilters.map((f) => {
                    const active = status === f.id;
                    return (
                      <button
                        key={f.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => handleStatusChange(f.id)}
                        className={`shrink-0 border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.04em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 ${
                          active
                            ? "border-brand-orange bg-brand-orange/10 text-brand-navy"
                            : "border-brand-line/70 bg-white text-[#111827]/65 hover:border-brand-orange/35"
                        }`}
                      >
                        {f.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-3 text-[13px] text-[#111827]/75" aria-live="polite" data-design-layer="content">
          {filtered.length} {filtered.length === 1 ? "webinar" : "webinars"}
          {hasActiveFilters ? " matching your filters" : ""}
        </p>

        {!catalogHasWebinars ? (
          <div className="mt-8 border border-brand-line/80 bg-white px-6 py-12 text-center" data-design-layer="content">
            <p className="font-display text-[1.15rem] font-bold text-brand-navy">No webinars are available yet.</p>
            <p className="mt-2 text-[14px] text-[#111827]">Browse other VertexBuild resources while new sessions are prepared.</p>
            <Link href={ROUTES.resources} className="btn-secondary mt-6 inline-flex">
              Back to Resources
            </Link>
          </div>
        ) : webinars.length === 0 && !hasActiveFilters ? (
          <div className="mt-8 border border-brand-line/80 bg-white px-6 py-10 text-center" data-design-layer="content">
            <p className="font-display text-[1.1rem] font-bold text-brand-navy">More sessions in the library soon</p>
            <p className="mt-2 text-[14px] text-[#111827]">
              Additional webinars will appear here as they are published.
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-8 border border-brand-line/80 bg-white px-6 py-10 text-center" data-design-layer="content">
            <p className="font-display text-[1.1rem] font-bold text-brand-navy">No webinars match your search.</p>
            <p className="mt-2 text-[14px] text-[#111827]">Try a different keyword or reset filters to see the full library.</p>
            {hasActiveFilters ? (
              <button type="button" onClick={resetFilters} className="btn-secondary mt-6 inline-flex">
                Clear search
              </button>
            ) : null}
          </div>
        ) : (
          <>
            <ul className={`${libraryGridClass(visible.length)} items-stretch`} role="list">
              {visible.map((webinar) => (
                <li key={webinar.id} className="flex min-w-0">
                  <WebinarCard webinar={webinar} />
                </li>
              ))}
            </ul>
            {hasMore ? (
              <div className="mt-10 flex justify-center" data-design-layer="content">
                <button
                  type="button"
                  onClick={() => setVisibleCount((c) => c + WEBINAR_LIBRARY_PAGE_SIZE)}
                  className="btn-secondary inline-flex min-w-[11rem]"
                >
                  Load more webinars
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
