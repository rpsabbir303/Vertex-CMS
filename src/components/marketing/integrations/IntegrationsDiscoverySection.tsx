"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { IntegrationsSection } from "./IntegrationsSection";
import { CTAS } from "@/lib/marketing/navigation";
import { INTEGRATION_CATEGORIES } from "@/lib/marketing/integrations/categories";
import { INTEGRATIONS_PAGE } from "@/lib/marketing/integrations/data";
import type { IntegrationCategoryId, IntegrationRecord } from "@/lib/marketing/integrations/types";
import { IntegrationsSectionBackdrop } from "./backgrounds/IntegrationsSectionBackdrop";
import { IntegrationCard } from "./IntegrationCard";
import { IntegrationCategoryNavigation } from "./IntegrationCategoryNavigation";
import { filterIntegrations } from "./integrationFilters";

type Props = {
  items: IntegrationRecord[];
  id?: string;
};

function categoryCounts(items: IntegrationRecord[]): Partial<Record<IntegrationCategoryId | "all", number>> {
  const counts: Partial<Record<IntegrationCategoryId | "all", number>> = { all: items.length };
  for (const cat of INTEGRATION_CATEGORIES) {
    if (cat.id === "all") continue;
    const n = items.filter((i) => i.categoryId === cat.id).length;
    if (n > 0) counts[cat.id] = n;
  }
  return counts;
}

export function IntegrationsDiscoverySection({ items, id = "discover" }: Props) {
  const { discovery } = INTEGRATIONS_PAGE;
  const [category, setCategory] = useState<IntegrationCategoryId | "all">("all");
  const [query, setQuery] = useState("");
  const searchId = useId();
  const listId = useId();

  const filtered = useMemo(() => filterIntegrations(items, category, query), [items, category, query]);
  const counts = useMemo(() => categoryCounts(items), [items]);

  return (
    <section id={id} className="int-section-shell int-bg-discovery scroll-mt-24 border-b border-brand-line">
      <IntegrationsSectionBackdrop variant="discovery" />
      <div className="int-section-content site-shell section-spacing">
        <IntegrationsSection>
          <p className="int-eyebrow text-brand-orange">{discovery.eyebrow}</p>
          <h2 className="int-display-title mt-3 text-3xl text-brand-navy sm:text-4xl">{discovery.headline}</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-brand-muted">{discovery.supporting}</p>
        </IntegrationsSection>

        <div className="mt-12 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <IntegrationCategoryNavigation selected={category} onSelect={setCategory} counts={counts} />

          <div className="min-w-0">
            <div className="flex flex-col gap-4 border-b border-brand-line pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="relative min-w-0 flex-1">
                <label htmlFor={searchId} className="sr-only">
                  Search integrations
                </label>
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted/70" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.25" />
                    <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  id={searchId}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={discovery.searchPlaceholder}
                  className="w-full max-w-md rounded-sm border border-brand-line bg-white py-2.5 pl-10 pr-10 text-[14px] text-brand-navy placeholder:text-brand-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                  autoComplete="off"
                />
                {query.trim() !== "" && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm px-2 py-1 text-[12px] font-semibold text-brand-orange hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                  >
                    {discovery.clearSearch}
                  </button>
                )}
              </div>
              {filtered.length > 0 && (
                <p className="font-sans text-[11px] font-medium uppercase tracking-wide text-brand-muted" aria-live="polite">
                  {filtered.length === 1 ? "1 result" : `${filtered.length} results`}
                </p>
              )}
            </div>

            {filtered.length === 0 && (
              <div className="py-12">
                <p className="text-[15px] font-semibold text-brand-navy">
                  {query.trim()
                    ? discovery.emptySearch
                    : items.length === 0
                      ? discovery.emptyLimited
                      : discovery.emptyCategory}
                </p>
                {query.trim() ? (
                  <button type="button" onClick={() => setQuery("")} className="btn-secondary mt-6">
                    {discovery.clearSearch}
                  </button>
                ) : (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={CTAS.demo.href} className="btn-primary">
                      Book a Demo
                    </Link>
                    <Link href={CTAS.quote.href} className="btn-secondary">
                      Request Quote
                    </Link>
                  </div>
                )}
              </div>
            )}

            {filtered.length > 0 && (
              <div id={listId}>
                {filtered.map((item) => (
                  <IntegrationCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
