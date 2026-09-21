"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { AddOn, AddOnUiKind, BillingSetupCatalog } from "@/lib/marketing/pricing";
import {
  addonPriceCopy,
  getAddOnCategoryLabel,
  getBillingSetupCatalog,
  planQuoteHref,
  resolveAddOnUiKind,
} from "@/lib/marketing/pricing";

const SEARCH_MIN_COUNT = 6;

type Props = {
  catalog?: BillingSetupCatalog;
  selectedIds: string[];
  planId?: string;
  planName?: string;
  billingPeriod?: "monthly" | "yearly";
  disabled?: boolean;
  onToggle: (id: string) => void;
};

function matchesQuery(addon: AddOn, q: string): boolean {
  if (!q) return true;
  const label = getAddOnCategoryLabel(addon);
  return (
    addon.name.toLowerCase().includes(q) ||
    addon.description.toLowerCase().includes(q) ||
    addon.category.toLowerCase().includes(q) ||
    label.toLowerCase().includes(q)
  );
}

function AddOnActionButton({
  kind,
  addonName,
  disabled,
  locked,
  onClick,
}: {
  kind: AddOnUiKind;
  addonName: string;
  disabled?: boolean;
  locked: boolean;
  onClick?: () => void;
}) {
  const base =
    "shrink-0 rounded-md border px-3 py-1.5 text-[12px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:cursor-not-allowed ";

  if (kind === "included") {
    return (
      <button type="button" disabled aria-disabled="true" className={base + "border-brand-line bg-white text-brand-muted"}>
        Included
      </button>
    );
  }
  if (kind === "selected") {
    return (
      <button
        type="button"
        aria-pressed="true"
        disabled={disabled}
        onClick={onClick}
        aria-label={`Remove ${addonName}`}
        className={base + "border-brand-orange/40 bg-white text-brand-navy disabled:opacity-60"}
      >
        ✓ Added
      </button>
    );
  }
  if (kind === "enterprise") {
    return (
      <span className={base + "border-brand-line bg-[#FAFBFD] text-brand-navy"} aria-disabled="true">
        Enterprise
      </span>
    );
  }
  if (kind === "coming_soon") {
    return (
      <span className={base + "border-brand-line bg-[#FAFBFD] text-brand-muted"} aria-disabled="true">
        Coming Soon
      </span>
    );
  }
  if (kind === "inactive") {
    return (
      <button type="button" disabled className={base + "border-brand-line bg-white text-brand-muted opacity-60"}>
        + Add
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-pressed="false"
      disabled={locked || disabled}
      onClick={onClick}
      aria-label={`Add ${addonName}`}
      className={
        base +
        (locked
          ? "border-brand-line bg-white text-brand-muted opacity-60"
          : "border-brand-line bg-[#FAFBFD] text-brand-navy hover:border-brand-orange/40 hover:bg-white")
      }
    >
      + Add
    </button>
  );
}

function CapabilityCard({
  addon,
  kind,
  planName,
  disabled,
  onToggle,
}: {
  addon: AddOn;
  kind: AddOnUiKind;
  planName?: string;
  disabled?: boolean;
  onToggle: (id: string) => void;
}) {
  const selected = kind === "selected";
  const included = kind === "included";
  const locked = disabled || included || kind === "enterprise" || kind === "coming_soon" || kind === "inactive";

  return (
    <article
      className={
        "flex h-full min-w-0 flex-col rounded-lg border px-4 py-3.5 transition " +
        (included
          ? "border-brand-line bg-[#F4F7FA]"
          : selected
            ? "border-brand-orange/50 bg-brand-orange/[0.03] ring-1 ring-brand-orange/20"
            : kind === "coming_soon" || kind === "enterprise"
              ? "border-brand-line/80 bg-[#FAFBFD]"
              : "border-brand-line bg-white hover:border-brand-navy/25 hover:shadow-[0_2px_8px_rgba(8,35,63,0.06)]")
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-[14px] font-semibold leading-snug text-brand-navy">{addon.name}</h3>
          {included ? (
            <span className="mt-1 inline-block rounded border border-brand-line bg-white px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-muted">
              {planName ? `Included with ${planName}` : "Included with plan"}
            </span>
          ) : null}
        </div>
        <AddOnActionButton
          kind={kind}
          addonName={addon.name}
          disabled={disabled}
          locked={locked}
          onClick={() => onToggle(addon.id)}
        />
      </div>
      <p className="mt-2 line-clamp-3 text-[12px] leading-relaxed text-brand-muted">{addon.description}</p>
      {addon.listing === "purchasable" ? (
        <p className="mt-auto pt-2 text-[11px] font-medium text-brand-navy/75">{addonPriceCopy(addon)}</p>
      ) : kind === "enterprise" ? (
        <p className="mt-auto pt-2 text-[11px] font-medium text-brand-muted">Available with Enterprise — contact sales for configuration.</p>
      ) : null}
    </article>
  );
}

export function BillingAddOnsPicker({
  catalog: catalogProp,
  selectedIds,
  planId,
  planName,
  billingPeriod = "monthly",
  disabled,
  onToggle,
}: Props) {
  const catalog = useMemo(() => catalogProp ?? getBillingSetupCatalog(), [catalogProp]);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const allDiscoverable = useMemo(
    () => [...catalog.purchasable, ...catalog.enterprise, ...catalog.roadmap],
    [catalog]
  );

  const categories = useMemo(() => {
    const keys = new Set(allDiscoverable.map((a) => a.category));
    return Array.from(keys).sort((a, b) => {
      const itemA = allDiscoverable.find((x) => x.category === a)!;
      const itemB = allDiscoverable.find((x) => x.category === b)!;
      return getAddOnCategoryLabel(itemA).localeCompare(getAddOnCategoryLabel(itemB));
    });
  }, [allDiscoverable]);

  const showDiscovery = allDiscoverable.length >= SEARCH_MIN_COUNT || categories.length > 1;

  const q = query.trim().toLowerCase();

  const filterList = (items: AddOn[]) =>
    items.filter((addon) => {
      if (categoryFilter !== "all" && addon.category !== categoryFilter) return false;
      return matchesQuery(addon, q);
    });

  const filteredPurchasable = useMemo(() => filterList(catalog.purchasable), [catalog.purchasable, categoryFilter, q]);
  const filteredEnterprise = useMemo(() => filterList(catalog.enterprise), [catalog.enterprise, categoryFilter, q]);
  const filteredRoadmap = useMemo(() => filterList(catalog.roadmap), [catalog.roadmap, categoryFilter, q]);

  const nothingVisible =
    filteredPurchasable.length === 0 && filteredEnterprise.length === 0 && filteredRoadmap.length === 0;

  return (
    <section className="min-w-0" aria-labelledby="optional-addons-heading">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Optional capabilities</p>
      <h2 id="optional-addons-heading" className="mt-1 text-[17px] font-semibold text-brand-navy">
        Extend your workspace
      </h2>
      <p className="mt-1 text-[13px] text-brand-muted">
        Billing add-ons from your VertexBuild configuration. Plan-included features are shown as included — you are not
        charged twice. You can continue without selecting any add-ons.
      </p>

      {showDiscovery ? (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
              {categories.map((cat) => {
                const sample = allDiscoverable.find((a) => a.category === cat);
                const label = sample ? getAddOnCategoryLabel(sample) : cat;
                return (
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
                    {label}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      ) : null}

      {nothingVisible ? (
        <p className="mt-6 text-[13px] text-brand-muted">No capabilities match your search.</p>
      ) : (
        <div className="mt-5 space-y-8">
          {filteredPurchasable.length > 0 ? (
            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Billing add-ons</h3>
              <ul className="mt-3 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                {filteredPurchasable.map((addon) => (
                  <li key={addon.id}>
                    <CapabilityCard
                      addon={addon}
                      kind={resolveAddOnUiKind(addon, planId, selectedIds)}
                      planName={planName}
                      disabled={disabled}
                      onToggle={onToggle}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {filteredEnterprise.length > 0 ? (
            <div>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                  Enterprise capabilities
                </h3>
                {planId !== "enterprise" ? (
                  <Link
                    href={planQuoteHref("enterprise", { period: billingPeriod })}
                    className="text-[12px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                  >
                    Request Quote
                  </Link>
                ) : null}
              </div>
              <p className="mt-1 text-[12px] text-brand-muted">
                Identity and integration capabilities configured for Enterprise — not sold as standard checkout add-ons.
              </p>
              <ul className="mt-3 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                {filteredEnterprise.map((addon) => (
                  <li key={addon.id}>
                    <CapabilityCard
                      addon={addon}
                      kind={resolveAddOnUiKind(addon, planId, selectedIds)}
                      planName={planName}
                      disabled
                      onToggle={onToggle}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {filteredRoadmap.length > 0 ? (
            <div>
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Planned capabilities</h3>
              <p className="mt-1 text-[12px] text-brand-muted">Roadmap items are not available for purchase during billing setup.</p>
              <ul className="mt-3 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                {filteredRoadmap.map((addon) => (
                  <li key={addon.id}>
                    <CapabilityCard addon={addon} kind="coming_soon" disabled onToggle={onToggle} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}
