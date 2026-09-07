"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  CURATED_FEATURE_IDS,
  FEATURE_LIBRARY,
  FEATURE_ROLES,
  MODULE_GROUPS,
  TENANT_MODULES,
  getFeatureBySlug,
  planLabel,
  type FeatureRecord,
  type PlanTier,
} from "@/lib/marketing/features/content";
import {
  featureAreaPath,
  getFeatureAreaForLibraryFeature,
} from "@/lib/marketing/features/featureAreas";

type FilterMode = "all" | "module" | "role" | "ai" | "plan";

function roleLabels(roleIds: string[] | undefined): string[] {
  if (!roleIds?.length) return [];
  return roleIds
    .map((id) => FEATURE_ROLES.find((r) => r.id === id)?.label)
    .filter((label): label is string => !!label);
}

function searchHaystack(f: FeatureRecord): string {
  const roles = roleLabels(f.roles).join(" ");
  const plans = f.plans.join(" ");
  const planText = planLabel(f.plans, f.basicOnStarter);
  const ai = f.ai ? "ai intelligence assistant predictive" : "";
  return [
    f.name,
    f.moduleName,
    f.moduleCode,
    f.moduleDescription,
    f.description,
    roles,
    plans,
    planText,
    ai,
    ...(f.moduleCapabilities ?? []),
  ]
    .join(" ")
    .toLowerCase();
}

export function FeaturesLibrary() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<FilterMode>("all");
  const [moduleFilter, setModuleFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [planFilter, setPlanFilter] = useState("");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FEATURE_LIBRARY.filter((f) => {
      if (q && !searchHaystack(f).includes(q)) return false;
      if (filter === "ai" && !f.ai) return false;
      if (moduleFilter && f.moduleCode !== moduleFilter) return false;
      if (roleFilter && !(f.roles ?? []).includes(roleFilter)) return false;
      if (planFilter && !f.plans.includes(planFilter as PlanTier)) return false;
      return true;
    });
  }, [query, filter, moduleFilter, roleFilter, planFilter]);

  const hasActiveQueryOrFilter =
    !!query || filter !== "all" || !!moduleFilter || !!roleFilter || !!planFilter;

  const displayList = useMemo(() => {
    if (showAll || hasActiveQueryOrFilter) return filtered;
    const curated = filtered.filter((f) => CURATED_FEATURE_IDS.includes(f.id));
    if (curated.length >= 12) return curated.slice(0, 12);
    const rest = filtered.filter((f) => !CURATED_FEATURE_IDS.includes(f.id));
    return [...curated, ...rest].slice(0, 12);
  }, [filtered, showAll, hasActiveQueryOrFilter]);

  const openFeature = useCallback((feature: FeatureRecord, updateHash = true) => {
    setExpandedSlug(feature.slug);
    setShowAll(true);
    if (updateHash && typeof window !== "undefined") {
      const url = window.location.pathname + window.location.search + "#" + feature.slug;
      window.history.replaceState(null, "", url);
    }
    requestAnimationFrame(() => {
      document.getElementById(feature.slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const closeFeature = useCallback((updateHash = true) => {
    setExpandedSlug(null);
    if (updateHash && typeof window !== "undefined") {
      const url = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", url);
    }
  }, []);

  const toggleFeature = useCallback(
    (feature: FeatureRecord) => {
      if (expandedSlug === feature.slug) closeFeature();
      else openFeature(feature);
    },
    [expandedSlug, openFeature, closeFeature]
  );

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      const feature = getFeatureBySlug(hash);
      if (!feature) return;
      setShowAll(true);
      setExpandedSlug(feature.slug);
      requestAnimationFrame(() => {
        document.getElementById(feature.slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <section id="features-library" className="scroll-mt-28 border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Complete feature library</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">Explore every capability</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
            Search the documented feature set across {TENANT_MODULES.length} modules. Start with a curated
            subset, then reveal the full library.
          </p>
        </Reveal>

        <Reveal delay={60} className="mt-10">
          <div className="rounded-xl border border-brand-line bg-[#FAFBFD] p-4 sm:p-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <label className="sr-only" htmlFor="feature-search">
                Search features
              </label>
              <input
                id="feature-search"
                type="search"
                placeholder="Search features..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowAll(true);
                }}
                className="w-full flex-1 rounded-lg border border-brand-line bg-white px-3.5 py-3 text-[14px] text-brand-navy outline-none focus-visible:border-brand-orange focus-visible:ring-2 focus-visible:ring-brand-orange/25"
              />
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filters">
                {(
                  [
                    ["all", "All"],
                    ["module", "Module"],
                    ["role", "Role"],
                    ["ai", "AI"],
                    ["plan", "Plan"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    className={
                      "rounded-md border px-3 py-2 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 " +
                      (filter === id
                        ? "border-brand-navy bg-brand-navy text-white"
                        : "border-brand-line bg-white text-brand-muted")
                    }
                    aria-pressed={filter === id}
                    onClick={() => {
                      setFilter(id);
                      setShowAll(true);
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {(filter === "module" || filter === "role" || filter === "plan") && (
              <div className="mt-3">
                {filter === "module" && (
                  <select
                    className="w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-[13px] text-brand-navy"
                    value={moduleFilter}
                    onChange={(e) => {
                      setModuleFilter(e.target.value);
                      setShowAll(true);
                    }}
                    aria-label="Filter by module"
                  >
                    <option value="">All modules</option>
                    {MODULE_GROUPS.map((g) => (
                      <optgroup key={g.id} label={g.label}>
                        {TENANT_MODULES.filter((m) => m.group === g.id).map((m) => (
                          <option key={m.code} value={m.code}>
                            {m.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                )}
                {filter === "role" && (
                  <select
                    className="w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-[13px] text-brand-navy"
                    value={roleFilter}
                    onChange={(e) => {
                      setRoleFilter(e.target.value);
                      setShowAll(true);
                    }}
                    aria-label="Filter by role"
                  >
                    <option value="">All roles</option>
                    {FEATURE_ROLES.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                )}
                {filter === "plan" && (
                  <select
                    className="w-full rounded-lg border border-brand-line bg-white px-3 py-2.5 text-[13px] text-brand-navy"
                    value={planFilter}
                    onChange={(e) => {
                      setPlanFilter(e.target.value);
                      setShowAll(true);
                    }}
                    aria-label="Filter by plan"
                  >
                    <option value="">All plans</option>
                    <option value="starter">Starter</option>
                    <option value="pro">Pro</option>
                    <option value="premium">Premium</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="addon">Add-on</option>
                  </select>
                )}
              </div>
            )}
          </div>

          <p className="mt-4 text-[12px] text-brand-muted" aria-live="polite">
            Showing {displayList.length} of {filtered.length} capabilities
            {filtered.length !== FEATURE_LIBRARY.length
              ? " (filtered from " + FEATURE_LIBRARY.length + ")"
              : ""}
          </p>

          {displayList.length === 0 ? (
            <div className="mt-4 rounded-lg border border-dashed border-brand-line bg-[#FAFBFD] px-5 py-10 text-center">
              <p className="font-display text-[16px] font-bold text-brand-navy">No capabilities found</p>
              <p className="mt-2 text-[13px] text-brand-muted">
                Try a different search term or clear the active filters.
              </p>
            </div>
          ) : (
            <ul className="mt-4 divide-y divide-brand-line border-t border-brand-line">
              {displayList.map((f) => {
                const expanded = expandedSlug === f.slug;
                const roles = roleLabels(f.roles);
                const related = f.moduleCapabilities.filter((cap) => cap !== f.name);
                const rowClass =
                  "flex w-full flex-col gap-1 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 sm:flex-row sm:items-start sm:justify-between sm:gap-8 " +
                  (expanded ? "bg-[#FAFBFD]" : "hover:bg-[#F7F9FC]");
                const chevronClass =
                  "text-[12px] font-semibold text-brand-muted transition " +
                  (expanded ? "rotate-180" : "");
                const panelClass =
                  "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none " +
                  (expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]");

                return (
                  <li key={f.id} id={f.slug} className="scroll-mt-36">
                    <button
                      type="button"
                      className={rowClass}
                      aria-expanded={expanded}
                      aria-controls={"feature-detail-" + f.slug}
                      onClick={() => toggleFeature(f)}
                    >
                      <div className="min-w-0">
                        <p className="flex items-center gap-2 font-display text-[16px] font-bold text-brand-navy">
                          <span>{f.name}</span>
                          <span className={chevronClass} aria-hidden="true">
                            ▾
                          </span>
                        </p>
                        <p className="mt-1 text-[12px] text-brand-muted">
                          {f.moduleName}
                          <span className="mx-1.5 text-brand-line">·</span>
                          <span className="font-mono">{f.moduleCode}</span>
                        </p>
                        <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-brand-navy/80">
                          {f.description}
                        </p>
                      </div>
                      <span className="mt-2 shrink-0 rounded-sm border border-brand-line bg-[#FAFBFD] px-2 py-1 text-[11px] font-semibold text-brand-navy sm:mt-0">
                        {planLabel(f.plans, f.basicOnStarter)}
                      </span>
                    </button>

                    <div
                      id={"feature-detail-" + f.slug}
                      role="region"
                      aria-label={f.name + " details"}
                      className={panelClass}
                    >
                      <div className="overflow-hidden">
                        {expanded ? (
                          <div className="mb-4 rounded-lg border border-brand-line bg-[#FAFBFD] px-4 py-4 sm:px-5">
                            <dl className="grid gap-3 text-[13px] sm:grid-cols-2">
                              <div>
                                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                                  Feature
                                </dt>
                                <dd className="mt-1 font-medium text-brand-navy">{f.name}</dd>
                              </div>
                              <div>
                                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                                  Module
                                </dt>
                                <dd className="mt-1 font-medium text-brand-navy">
                                  {f.moduleName}{" "}
                                  <span className="font-mono text-[12px] text-brand-muted">
                                    ({f.moduleCode})
                                  </span>
                                </dd>
                              </div>
                              <div>
                                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                                  Plan availability
                                </dt>
                                <dd className="mt-1 font-medium text-brand-navy">
                                  {planLabel(f.plans, f.basicOnStarter)}
                                </dd>
                              </div>
                              {roles.length > 0 ? (
                                <div>
                                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                                    Relevant roles
                                  </dt>
                                  <dd className="mt-1 font-medium text-brand-navy">{roles.join(", ")}</dd>
                                </div>
                              ) : null}
                            </dl>

                            <p className="mt-4 text-[13px] leading-relaxed text-brand-navy/85">
                              {f.moduleDescription}
                            </p>

                            {f.depends?.length ? (
                              <p className="mt-3 text-[12px] text-brand-muted">
                                Depends on: {f.depends.join(", ")}
                              </p>
                            ) : null}

                            {f.ai ? (
                              <p className="mt-3 text-[12px] text-brand-muted">
                                AI capability — write actions require human confirmation.
                              </p>
                            ) : null}

                            {related.length > 0 ? (
                              <div className="mt-4 border-t border-brand-line pt-3">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                                  Related capabilities in this module
                                </p>
                                <ul className="mt-2 flex flex-wrap gap-2">
                                  {related.map((cap) => (
                                    <li
                                      key={cap}
                                      className="rounded-md border border-brand-line bg-white px-2.5 py-1 text-[12px] text-brand-navy"
                                    >
                                      {cap}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            {(() => {
                              const area = getFeatureAreaForLibraryFeature({
                                moduleCode: f.moduleCode,
                                slug: f.slug,
                                name: f.name,
                              });
                              if (!area) return null;
                              return (
                                <div className="mt-4 border-t border-brand-line pt-3">
                                  <Link
                                    href={featureAreaPath(area.slug)}
                                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange transition hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    Explore {area.label}
                                    <span aria-hidden="true">→</span>
                                  </Link>
                                </div>
                              );
                            })()}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {!showAll && !hasActiveQueryOrFilter ? (
            <div className="mt-8 text-center">
              <button
                type="button"
                className="btn-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                onClick={() => setShowAll(true)}
              >
                View all features ({FEATURE_LIBRARY.length})
              </button>
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
