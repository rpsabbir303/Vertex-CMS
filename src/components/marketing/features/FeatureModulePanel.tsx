"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { featureAreaPath, getFeatureAreaByAreaId } from "@/lib/marketing/features/featureAreas";
import type { HubFeatureArea, HubModuleSection } from "@/lib/marketing/features/hub";
import { FeatureProductPreview } from "./FeatureProductPreview";

type Props = {
  module: HubModuleSection;
  surface?: "white" | "soft" | "mist" | "navy";
};

/**
 * Interactive module chapter: clickable feature rows update spotlight + product UI
 * without leaving the Features page. Explore CTA routes to existing detail pages.
 */
export function FeatureModulePanel({ module, surface = "soft" }: Props) {
  const [activeId, setActiveId] = useState(module.areas[0]?.id ?? "");
  const active = module.areas.find((a) => a.id === activeId) ?? module.areas[0];

  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash.replace(/^#/, "");
      const match = module.areas.find((a) => a.id === hash);
      if (match) setActiveId(match.id);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [module.areas]);

  const select = (area: HubFeatureArea) => {
    setActiveId(area.id);
    const url = window.location.pathname + window.location.search + "#" + area.id;
    window.history.replaceState(null, "", url);
  };

  const detail = active ? getFeatureAreaByAreaId(active.id) : undefined;
  const preview = detail?.preview ?? module.preview;
  const dark = detail?.dark ?? module.dark ?? surface === "navy";
  const tagline = detail?.heroTagline ?? active?.description ?? "";
  const capabilities = (detail?.capabilities ?? active?.tags ?? []).slice(0, 4);
  const isNavy = surface === "navy";

  const wrap =
    surface === "navy"
      ? "bg-brand-navy text-white"
      : surface === "mist"
        ? "bg-[#EEF2F7]"
        : surface === "white"
          ? "bg-white"
          : "bg-[#F7F8FA]";

  const stage =
    isNavy
      ? "from-[#061525] via-[#0A1F35] to-[#08233F] border-white/10"
      : "from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4] border-brand-line";

  return (
    <section id={module.id} className={"scroll-mt-36 border-b border-brand-line/60 " + wrap}>
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
            {module.number} · CORE CAPABILITIES
          </p>
          <h2
            className={
              "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl " +
              (isNavy ? "text-white" : "text-brand-navy")
            }
          >
            {module.title}
          </h2>
          <p className={"mt-4 text-[15px] leading-relaxed " + (isNavy ? "text-slate-300" : "text-brand-muted")}>
            {module.description}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] lg:gap-10">
          <ul className="space-y-2" role="listbox" aria-label={`${module.title} features`}>
            {module.areas.map((area) => {
              const selected = area.id === active?.id;
              return (
                <li key={area.id} id={area.id} className="scroll-mt-40" role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => select(area)}
                    className={
                      "group flex w-full items-start justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/35 motion-reduce:transition-none " +
                      (selected
                        ? isNavy
                          ? "border-brand-orange/50 bg-white/10"
                          : "border-brand-orange/40 bg-white shadow-soft ring-1 ring-brand-orange/15"
                        : isNavy
                          ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                          : "border-brand-line/80 bg-white/70 hover:-translate-y-0.5 hover:border-brand-navy/20 hover:bg-white hover:shadow-soft motion-reduce:hover:translate-y-0")
                    }
                  >
                    <span className="min-w-0">
                      <span className={"block text-[14px] font-semibold " + (isNavy ? "text-white" : "text-brand-navy")}>
                        {area.label}
                      </span>
                      <span
                        className={
                          "mt-1 block text-[12px] leading-relaxed line-clamp-2 " +
                          (isNavy ? "text-slate-400" : "text-brand-muted")
                        }
                      >
                        {area.description}
                      </span>
                    </span>
                    <ArrowRight
                      className={
                        "mt-0.5 h-4 w-4 shrink-0 transition duration-200 " +
                        (selected
                          ? "translate-x-0.5 text-brand-orange"
                          : isNavy
                            ? "text-slate-500 group-hover:translate-x-0.5 group-hover:text-brand-orange"
                            : "text-brand-muted/50 group-hover:translate-x-0.5 group-hover:text-brand-orange")
                      }
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="space-y-5">
            <div
              className={
                "rounded-2xl border p-6 sm:p-7 " +
                (isNavy ? "border-white/10 bg-white/[0.04]" : "border-brand-line bg-white shadow-soft")
              }
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                Feature spotlight
              </p>
              <h3
                className={
                  "mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl " +
                  (isNavy ? "text-white" : "text-brand-navy")
                }
              >
                {active?.label}
              </h3>
              <p className={"mt-3 text-[15px] font-medium leading-snug " + (isNavy ? "text-slate-100" : "text-brand-navy/90")}>
                {tagline}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className={
                      "flex items-start gap-2 rounded-lg border px-3 py-2.5 text-[13px] " +
                      (isNavy
                        ? "border-white/10 bg-white/[0.04] text-slate-200"
                        : "border-brand-line/70 bg-[#FAFBFD] text-brand-navy")
                    }
                  >
                    <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-orange" />
                    {cap}
                  </li>
                ))}
              </ul>
              {active ? (
                <div className="mt-6">
                  <Link
                    href={featureAreaPath(active.slug)}
                    className={
                      isNavy
                        ? "inline-flex items-center gap-2 rounded-sm bg-brand-orange px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#e85f00]"
                        : "btn-primary inline-flex"
                    }
                  >
                    Explore {active.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ) : null}
            </div>

            <div className={"relative overflow-hidden rounded-2xl border bg-gradient-to-br p-4 sm:p-5 " + stage}>
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-orange/10 blur-3xl"
                aria-hidden="true"
              />
              <FeatureProductPreview
                preview={preview}
                dark={dark}
                framed
                className="min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
