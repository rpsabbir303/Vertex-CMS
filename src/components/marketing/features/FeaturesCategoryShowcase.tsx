"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { FEATURE_CATEGORY_PAGES, categoryNavHref } from "@/lib/marketing/features/categories";
import { featureAreaPath, getFeatureAreaBySlug } from "@/lib/marketing/features/featureAreas";
import { FEATURE_LANDING_CATEGORIES } from "@/lib/marketing/features/landing";
import type { HubFeatureArea, HubModuleSection } from "@/lib/marketing/features/hub";
import { FeatureProductPreview } from "./FeatureProductPreview";

function resolveCategoryFromHash(): string | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return null;
  if (FEATURE_LANDING_CATEGORIES.some((c) => c.id === hash)) return hash;
  for (const cat of FEATURE_LANDING_CATEGORIES) {
    if (cat.areas.some((a) => a.id === hash)) return cat.id;
  }
  return null;
}

export function FeaturesCategoryShowcase() {
  const [categoryId, setCategoryId] = useState(FEATURE_LANDING_CATEGORIES[0].id);
  const [areaId, setAreaId] = useState(FEATURE_LANDING_CATEGORIES[0].areas[0]?.id ?? "");

  const category = useMemo(
    () => FEATURE_LANDING_CATEGORIES.find((c) => c.id === categoryId) ?? FEATURE_LANDING_CATEGORIES[0],
    [categoryId]
  );
  const activeArea = useMemo(
    () => category.areas.find((a) => a.id === areaId) ?? category.areas[0],
    [category, areaId]
  );
  const activeDetail = activeArea ? getFeatureAreaBySlug(activeArea.slug) : undefined;
  const preview = activeDetail?.preview ?? category.preview;
  const previewDark = Boolean(activeDetail?.dark ?? category.dark) || category.id === "ai";

  useEffect(() => {
    const sync = () => {
      const next = resolveCategoryFromHash();
      if (!next) return;
      const cat = FEATURE_LANDING_CATEGORIES.find((c) => c.id === next);
      if (!cat) return;
      setCategoryId(cat.id);
      const hash = window.location.hash.replace(/^#/, "");
      const area = cat.areas.find((a) => a.id === hash);
      setAreaId(area?.id ?? cat.areas[0]?.id ?? "");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const selectCategory = (cat: HubModuleSection) => {
    setCategoryId(cat.id);
    setAreaId(cat.areas[0]?.id ?? "");
    window.history.replaceState(null, "", `#${cat.id}`);
  };

  const selectArea = (area: HubFeatureArea) => {
    setAreaId(area.id);
    window.history.replaceState(null, "", `#${area.id}`);
  };

  return (
    <section id="feature-categories" className="scroll-mt-28 border-b border-brand-line bg-white">
      {/* Category navigation */}
      <div className="sticky top-[4.5rem] z-30 border-b border-brand-line/80 bg-white/95 backdrop-blur-md">
        <div className="site-shell">
          <nav aria-label="Feature categories" className="-mx-1 overflow-x-auto py-3 [scrollbar-width:thin]">
            <ul className="flex min-w-max gap-1.5">
              {FEATURE_LANDING_CATEGORIES.map((cat) => {
                const selected = cat.id === category.id;
                const className =
                  "inline-flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 " +
                  (selected
                    ? "border-brand-orange/45 bg-brand-orange/5 text-brand-navy shadow-soft"
                    : "border-transparent text-brand-muted hover:border-brand-line hover:bg-[#FAFBFD] hover:text-brand-navy");
                const label = (
                  <>
                    <span className={"font-mono text-[10px] font-bold " + (selected ? "text-brand-orange" : "text-brand-muted/70")}>
                      {cat.number}
                    </span>
                    <span className="whitespace-nowrap">{cat.title}</span>
                  </>
                );

                if (FEATURE_CATEGORY_PAGES.has(cat.id)) {
                  return (
                    <li key={cat.id}>
                      <Link href={categoryNavHref(cat.id)} className={className} aria-current={selected ? "page" : undefined}>
                        {label}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={cat.id}>
                    <button
                      type="button"
                      onClick={() => selectCategory(cat)}
                      aria-pressed={selected}
                      className={className}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="site-shell section-spacing">
        <Reveal>
          <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
            {category.number} · Feature category
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {category.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-brand-muted">{category.description}</p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12">
          <ul className="space-y-2" role="listbox" aria-label={`${category.title} capabilities`}>
            {category.areas.map((area) => {
              const selected = area.id === activeArea?.id;
              return (
                <li key={area.id} id={area.id} className="scroll-mt-40" role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => selectArea(area)}
                    className={
                      "group flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 " +
                      (selected
                        ? "border-brand-orange/40 bg-brand-orange/5 shadow-soft"
                        : "border-brand-line bg-[#FAFBFD] hover:border-brand-navy/20 hover:bg-white")
                    }
                    aria-pressed={selected}
                  >
                    <span className="min-w-0">
                      <span className="block text-[14px] font-semibold text-brand-navy">{area.label}</span>
                      {selected ? (
                        <span className="mt-1.5 block text-[13px] leading-relaxed text-brand-muted">
                          {area.description}
                        </span>
                      ) : (
                        <span className="mt-1 block text-[12px] text-brand-muted line-clamp-1">{area.description}</span>
                      )}
                      {selected ? (
                        <ul className="mt-2 flex flex-wrap gap-1.5">
                          {area.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-md border border-brand-line bg-white px-2 py-0.5 text-[11px] text-brand-muted"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </span>
                    <ArrowRight
                      className={
                        "mt-0.5 h-4 w-4 shrink-0 transition " +
                        (selected ? "translate-x-0.5 text-brand-orange" : "text-brand-muted/40 group-hover:text-brand-orange")
                      }
                    />
                  </button>
                  {selected ? (
                    <div className="mt-2 px-1">
                      <Link
                        href={featureAreaPath(area.slug)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-orange transition hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                      >
                        Explore {area.label}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="lg:sticky lg:top-36">
            <div
              className={
                "relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br p-4 sm:p-5 " +
                (category.dark || category.id === "ai"
                  ? "from-[#061525] via-[#0A1F35] to-[#08233F]"
                  : "from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4]")
              }
            >
              <div className="mb-3 flex items-center justify-between gap-2">
                <p
                  className={
                    "text-[11px] font-semibold uppercase tracking-[0.14em] " +
                    (category.id === "ai" ? "text-slate-400" : "text-brand-muted")
                  }
                >
                  VertexBuild · {activeArea?.label}
                </p>
              </div>
              <FeatureProductPreview
                key={activeArea?.id}
                preview={preview}
                dark={previewDark}
                framed
                className="min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]"
              />
            </div>
            {activeArea ? (
              <p className="mt-3 text-[13px] text-brand-muted">
                <span className="font-semibold text-brand-navy">{activeArea.label}.</span> {activeArea.description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
