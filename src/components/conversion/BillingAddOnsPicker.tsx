"use client";

import { useMemo, useState } from "react";
import type { AddOn } from "@/lib/marketing/pricing";
import { addonPriceCopy, isAddonIncludedInPlan } from "@/lib/marketing/pricing";

const SEARCH_MIN_COUNT = 8;

function formatCategoryLabel(category: string): string {
  return category
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

type Props = {
  addOns: AddOn[];
  selectedIds: string[];
  planId?: string;
  planName?: string;
  disabled?: boolean;
  onToggle: (id: string) => void;
};

export function BillingAddOnsPicker({ addOns, selectedIds, planId, planName, disabled, onToggle }: Props) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = useMemo(() => {
    const keys = new Set(addOns.map((a) => a.category));
    return Array.from(keys).sort((a, b) => formatCategoryLabel(a).localeCompare(formatCategoryLabel(b)));
  }, [addOns]);

  const showDiscovery = addOns.length >= SEARCH_MIN_COUNT || categories.length > 1;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return addOns.filter((addon) => {
      if (categoryFilter !== "all" && addon.category !== categoryFilter) return false;
      if (!q) return true;
      return (
        addon.name.toLowerCase().includes(q) ||
        addon.description.toLowerCase().includes(q) ||
        addon.category.toLowerCase().includes(q)
      );
    });
  }, [addOns, query, categoryFilter]);

  return (
    <section className="min-w-0" aria-labelledby="optional-addons-heading">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Optional capabilities</p>
      <h2 id="optional-addons-heading" className="mt-1 text-[17px] font-semibold text-brand-navy">
        Extend your workspace
      </h2>
      <p className="mt-1 text-[13px] text-brand-muted">
        Choose additional capabilities for your workspace. You can continue without selecting any add-ons.
      </p>

      {showDiscovery ? (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {addOns.length >= SEARCH_MIN_COUNT ? (
            <label className="min-w-0 flex-1 sm:max-w-xs">
              <span className="sr-only">Search add-ons</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search add-ons…"
                disabled={disabled}
                className="w-full rounded-lg border border-brand-line bg-white px-3 py-2 text-[13px] text-brand-navy placeholder:text-brand-muted/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-orange disabled:opacity-60"
              />
            </label>
          ) : null}
          {categories.length > 1 ? (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              <button
                type="button"
                aria-pressed={categoryFilter === "all"}
                onClick={() => setCategoryFilter("all")}
                disabled={disabled}
                className={
                  "rounded-full border px-3 py-1.5 text-[12px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:opacity-60 " +
                  (categoryFilter === "all"
                    ? "border-brand-orange/40 bg-brand-orange/10 text-brand-navy"
                    : "border-brand-line bg-white text-brand-muted hover:text-brand-navy")
                }
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={categoryFilter === cat}
                  onClick={() => setCategoryFilter(cat)}
                  disabled={disabled}
                  className={
                    "rounded-full border px-3 py-1.5 text-[12px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:opacity-60 " +
                    (categoryFilter === cat
                      ? "border-brand-orange/40 bg-brand-orange/10 text-brand-navy"
                      : "border-brand-line bg-white text-brand-muted hover:text-brand-navy")
                  }
                >
                  {formatCategoryLabel(cat)}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className="mt-6 text-[13px] text-brand-muted">No add-ons match your search.</p>
      ) : (
        <ul className="mt-5 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
          {filtered.map((addon) => {
            const included = isAddonIncludedInPlan(addon, planId);
            const selected = !included && selectedIds.includes(addon.id);
            const unavailable = !addon.active;
            const locked = disabled || included || unavailable;

            return (
              <li key={addon.id}>
                <article
                  className={
                    "flex h-full min-w-0 flex-col rounded-lg border px-4 py-3.5 transition " +
                    (included
                      ? "border-brand-line bg-[#F4F7FA]"
                      : selected
                        ? "border-brand-orange/50 bg-brand-orange/[0.03] ring-1 ring-brand-orange/20"
                        : unavailable
                          ? "border-brand-line/70 bg-[#FAFBFD] opacity-70"
                          : "border-brand-line bg-white hover:border-brand-navy/25 hover:shadow-[0_2px_8px_rgba(8,35,63,0.06)]")
                  }
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[14px] font-semibold leading-snug text-brand-navy">{addon.name}</h3>
                      {included ? (
                        <span className="mt-1 inline-block rounded border border-brand-line bg-white px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
                          Included{planName ? ` · ${planName}` : ""}
                        </span>
                      ) : null}
                      {unavailable && !included ? (
                        <span className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
                          Unavailable
                        </span>
                      ) : null}
                    </div>
                    <button
                      type="button"
                      aria-pressed={selected}
                      aria-disabled={locked}
                      aria-label={
                        included
                          ? `${addon.name} included in plan`
                          : selected
                            ? `Remove ${addon.name}`
                            : `Add ${addon.name}`
                      }
                      disabled={locked}
                      onClick={() => onToggle(addon.id)}
                      className={
                        "shrink-0 rounded-md border px-3 py-1.5 text-[12px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:cursor-not-allowed " +
                        (included
                          ? "border-brand-line bg-white text-brand-muted"
                          : selected
                            ? "border-brand-orange/40 bg-white text-brand-navy"
                            : unavailable
                              ? "border-brand-line bg-white text-brand-muted opacity-60"
                              : "border-brand-line bg-[#FAFBFD] text-brand-navy hover:border-brand-orange/40 hover:bg-white disabled:opacity-60")
                      }
                    >
                      {included ? "Included" : selected ? "✓ Added" : "+ Add"}
                    </button>
                  </div>
                  <p className="mt-2 line-clamp-3 text-[12px] leading-relaxed text-brand-muted">{addon.description}</p>
                  <p className="mt-auto pt-2 text-[11px] font-medium text-brand-navy/75">{addonPriceCopy(addon)}</p>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
