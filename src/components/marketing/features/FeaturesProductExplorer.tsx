"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import {
  featureAreaPath,
  getFeatureAreaByAreaId,
} from "@/lib/marketing/features/featureAreas";
import {
  HUB_MODULES,
  type HubFeatureArea,
  type HubModuleSection,
} from "@/lib/marketing/features/hub";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { FeatureProductPreview } from "./FeatureProductPreview";

function resolveFromHash(): { moduleId: string; areaId: string } | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return null;

  const byModule = HUB_MODULES.find((m) => m.id === hash);
  if (byModule) {
    return { moduleId: byModule.id, areaId: byModule.areas[0]?.id ?? "" };
  }

  for (const mod of HUB_MODULES) {
    const area = mod.areas.find((a) => a.id === hash);
    if (area) return { moduleId: mod.id, areaId: area.id };
  }
  return null;
}

function setHash(id: string) {
  const url = window.location.pathname + window.location.search + "#" + id;
  window.history.replaceState(null, "", url);
}

export function FeaturesProductExplorer() {
  const [moduleId, setModuleId] = useState(HUB_MODULES[0].id);
  const [areaId, setAreaId] = useState(HUB_MODULES[0].areas[0]?.id ?? "");
  const [transitionKey, setTransitionKey] = useState(0);

  const featureModule = useMemo(
    () => HUB_MODULES.find((m) => m.id === moduleId) ?? HUB_MODULES[0],
    [moduleId]
  );
  const area = useMemo(
    () => featureModule.areas.find((a) => a.id === areaId) ?? featureModule.areas[0],
    [featureModule, areaId]
  );
  const detail = area ? getFeatureAreaByAreaId(area.id) : undefined;
  const preview: PreviewKey = detail?.preview ?? featureModule.preview;
  const previewDark = detail?.dark ?? featureModule.dark;
  const capabilities = (detail?.capabilities ?? area?.tags ?? []).slice(0, 5);
  const tagline = detail?.heroTagline ?? area?.description ?? "";
  const moduleIndex = HUB_MODULES.findIndex((m) => m.id === featureModule.id);

  const applySelection = useCallback((nextModule: HubModuleSection, nextArea: HubFeatureArea, hashTarget?: string) => {
    setModuleId(nextModule.id);
    setAreaId(nextArea.id);
    setTransitionKey((k) => k + 1);
    setHash(hashTarget ?? nextArea.id);
  }, []);

  useEffect(() => {
    const sync = () => {
      const resolved = resolveFromHash();
      if (!resolved) return;
      setModuleId(resolved.moduleId);
      setAreaId(resolved.areaId);
      setTransitionKey((k) => k + 1);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const selectModule = (next: HubModuleSection) => {
    const first = next.areas[0];
    if (!first) return;
    applySelection(next, first, next.id);
  };

  const selectArea = (next: HubFeatureArea) => {
    applySelection(featureModule, next, next.id);
  };

  const goModule = (delta: number) => {
    const idx = (moduleIndex + delta + HUB_MODULES.length) % HUB_MODULES.length;
    selectModule(HUB_MODULES[idx]);
  };

  const stageTone =
    featureModule.id === "ai"
      ? "from-[#061525] via-[#0A1F35] to-[#08233F]"
      : featureModule.id === "financial-management"
        ? "from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4]"
        : featureModule.id === "field-operations"
          ? "from-[#EAF0F6] via-[#F3F6FA] to-[#E7EDF4]"
          : featureModule.id === "growth"
            ? "from-[#F3F1EE] via-[#F7F5F2] to-[#EEEBE7]"
            : "from-[#EEF2F7] via-[#F5F7FA] to-[#E8EEF5]";

  return (
    <section
      id="features-explorer"
      className="relative scroll-mt-28 border-b border-brand-line bg-[#F7F8FA]"
    >
      {/* Hidden anchors for mega-menu / deep links to module sections */}
      {HUB_MODULES.map((m) => (
        <span key={m.id} id={m.id} className="sr-only" aria-hidden="true" />
      ))}
      {HUB_MODULES.flatMap((m) =>
        m.areas.map((a) => <span key={a.id} id={a.id} className="sr-only" aria-hidden="true" />)
      )}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,35,63,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Category navigation */}
      <div
        id="features-module-nav"
        className="sticky top-[4.5rem] z-30 border-b border-brand-line/80 bg-[#F7F8FA]/95 backdrop-blur-md"
      >
        <div className="site-shell">
          <nav aria-label="Feature categories" className="-mx-1 overflow-x-auto py-3 [scrollbar-width:thin]">
            <ul className="flex min-w-max gap-1.5">
              {HUB_MODULES.map((mod) => {
                const active = mod.id === featureModule.id;
                return (
                  <li key={mod.id}>
                    <button
                      type="button"
                      onClick={() => selectModule(mod)}
                      aria-pressed={active}
                      className={
                        "inline-flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 motion-reduce:transition-none " +
                        (active
                          ? "border-brand-orange/45 bg-white text-brand-navy shadow-soft"
                          : "border-transparent bg-transparent text-brand-muted hover:border-brand-line hover:bg-white/70 hover:text-brand-navy")
                      }
                    >
                      <span
                        className={
                          "font-mono text-[10px] font-bold " +
                          (active ? "text-brand-orange" : "text-brand-muted/70")
                        }
                      >
                        {mod.number}
                      </span>
                      <span className="text-[12px] font-semibold whitespace-nowrap">{mod.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="site-shell relative py-12 sm:py-16 lg:py-20">
        {/* Category intro */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {featureModule.number} · CORE CAPABILITIES
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]">
              {featureModule.title}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-muted sm:text-base">
              {featureModule.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-mono text-[12px] font-semibold text-brand-muted">
              {featureModule.number} / {String(HUB_MODULES.length).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goModule(-1)}
                aria-label="Previous category"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-line bg-white text-brand-navy transition hover:border-brand-navy/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  ←
                </span>
              </button>
              <button
                type="button"
                onClick={() => goModule(1)}
                aria-label="Next category"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-line bg-white text-brand-navy transition hover:border-brand-navy/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Explorer body: nav → story → product */}
        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[minmax(240px,300px)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
          {/* Feature list */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Feature areas
            </p>
            <ul className="space-y-2" role="listbox" aria-label={`${featureModule.title} features`}>
              {featureModule.areas.map((item) => {
                const selected = item.id === area?.id;
                return (
                  <li key={item.id} role="option" aria-selected={selected}>
                    <button
                      type="button"
                      onClick={() => selectArea(item)}
                      className={
                        "group flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 motion-reduce:transition-none " +
                        (selected
                          ? "border-brand-orange/40 bg-white shadow-soft ring-1 ring-brand-orange/15"
                          : "border-brand-line/80 bg-white/70 hover:-translate-y-0.5 hover:border-brand-navy/20 hover:bg-white hover:shadow-soft motion-reduce:hover:translate-y-0")
                      }
                    >
                      <span className="min-w-0">
                        <span className="block text-[14px] font-semibold text-brand-navy">{item.label}</span>
                        <span className="mt-1 block text-[12px] leading-relaxed text-brand-muted line-clamp-2">
                          {item.description}
                        </span>
                      </span>
                      <ArrowRight
                        className={
                          "mt-0.5 h-4 w-4 shrink-0 transition duration-200 motion-reduce:transition-none " +
                          (selected
                            ? "translate-x-0.5 text-brand-orange"
                            : "text-brand-muted/50 group-hover:translate-x-0.5 group-hover:text-brand-orange")
                        }
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Spotlight + product stage */}
          <div
            key={"panel-" + transitionKey}
            className="space-y-5 transition-opacity duration-300 motion-reduce:transition-none"
          >
            <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-7">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                    Feature spotlight
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
                    {area?.label}
                  </h3>
                  <p className="mt-3 text-[15px] font-medium leading-snug text-brand-navy/90">{tagline}</p>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-brand-muted">
                    {area?.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                  {area ? (
                    <Link
                      href={featureAreaPath(area.slug)}
                      className="btn-primary inline-flex justify-center whitespace-nowrap"
                    >
                      Explore {area.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                  <Link
                    href="#features-library"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-line bg-[#FAFBFD] px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/20"
                  >
                    Full library
                  </Link>
                </div>
              </div>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2.5 rounded-lg border border-brand-line/70 bg-[#FAFBFD] px-3.5 py-2.5 text-[13px] text-brand-navy"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={
                "relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br p-4 sm:p-6 " +
                stageTone
              }
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/10 blur-3xl"
                aria-hidden="true"
              />
              <div
                className={
                  "pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full blur-3xl " +
                  (featureModule.id === "ai" ? "bg-brand-orange/20" : "bg-brand-navy/10")
                }
                aria-hidden="true"
              />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p
                    className={
                      "text-[11px] font-semibold uppercase tracking-[0.14em] " +
                      (featureModule.id === "ai" ? "text-slate-400" : "text-brand-muted")
                    }
                  >
                    Vertex CMS · {area?.label}
                  </p>
                  <span
                    className={
                      "rounded-full border px-2.5 py-1 text-[10px] font-semibold " +
                      (featureModule.id === "ai"
                        ? "border-white/15 text-slate-300"
                        : "border-brand-line/80 bg-white/70 text-brand-muted")
                    }
                  >
                    Live product UI
                  </span>
                </div>
                <FeatureProductPreview
                  preview={preview}
                  dark={previewDark}
                  framed
                  className="min-h-[280px] sm:min-h-[340px] lg:min-h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Capability strip */}
        {area?.tags?.length ? (
          <ul className="mt-8 flex flex-wrap gap-2 border-t border-brand-line/70 pt-8">
            {area.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-brand-line bg-white px-3.5 py-1.5 text-[12px] font-medium text-brand-navy"
              >
                {tag}
              </li>
            ))}
            {capabilities
              .filter((c) => !area.tags.includes(c))
              .slice(0, 2)
              .map((cap) => (
                <li
                  key={cap}
                  className="rounded-full border border-brand-line bg-white px-3.5 py-1.5 text-[12px] font-medium text-brand-navy"
                >
                  {cap}
                </li>
              ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
