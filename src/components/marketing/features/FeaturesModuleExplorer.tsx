"use client";

import { useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import {
  MODULE_GROUPS,
  TENANT_MODULES,
  planLabel,
  type TenantModule,
} from "@/lib/marketing/features/content";
import { FeatureProductPreview } from "./FeatureProductPreview";

export function FeaturesModuleExplorer() {
  const [activeId, setActiveId] = useState(TENANT_MODULES[0].id);
  const active = useMemo(
    () => TENANT_MODULES.find((m) => m.id === activeId) ?? TENANT_MODULES[0],
    [activeId]
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    // Warm first paint only — selection is click-driven for 50 modules
  }, []);

  const select = (mod: TenantModule) => {
    setActiveId(mod.id);
  };

  return (
    <section id="features-modules" className="scroll-mt-28 border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Features by module</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">Explore every product module</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
            {TENANT_MODULES.length} tenant modules from the Vertex CMS Master Feature Register — navigate by
            group, then inspect capabilities. Platform services are listed separately and are not sellable
            modules.
          </p>
        </Reveal>

        {/* Mobile module select */}
        <div className="mt-8 lg:hidden">
          <label htmlFor="module-select" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
            Module
          </label>
          <select
            id="module-select"
            className="w-full rounded-lg border border-brand-line bg-white px-3.5 py-3 text-[14px] text-brand-navy outline-none focus-visible:border-brand-orange focus-visible:ring-2 focus-visible:ring-brand-orange/25"
            value={active.id}
            onChange={(e) => {
              const mod = TENANT_MODULES.find((m) => m.id === e.target.value);
              if (mod) select(mod);
            }}
          >
            {MODULE_GROUPS.map((group) => (
              <optgroup key={group.id} label={group.label}>
                {TENANT_MODULES.filter((m) => m.group === group.id).map((mod) => (
                  <option key={mod.id} value={mod.id}>
                    {mod.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1.15fr)_220px] lg:gap-10">
          {/* Desktop sticky index */}
          <aside className="hidden max-h-[70vh] overflow-y-auto lg:sticky lg:top-36 lg:block lg:self-start [scrollbar-width:thin]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Modules</p>
            <nav aria-label="Module index" className="mt-4 space-y-5">
              {MODULE_GROUPS.map((group) => {
                const items = TENANT_MODULES.filter((m) => m.group === group.id);
                return (
                  <div key={group.id}>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange/90">
                      {group.label}
                    </p>
                    <ul className="space-y-0.5 border-l border-brand-line">
                      {items.map((mod) => {
                        const selected = mod.id === active.id;
                        return (
                          <li key={mod.id}>
                            <button
                              type="button"
                              className={`-ml-px block w-full border-l-2 py-1.5 pl-3 text-left text-[12px] leading-snug transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 ${
                                selected
                                  ? "border-brand-orange font-semibold text-brand-navy"
                                  : "border-transparent text-brand-muted hover:text-brand-navy"
                              }`}
                              aria-current={selected ? "true" : undefined}
                              onClick={() => select(mod)}
                            >
                              {mod.name}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* Product view */}
          <div className="min-w-0">
            <div className="rounded-xl border border-brand-line bg-[#FAFBFD] p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] font-semibold text-brand-orange">{active.code}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-brand-navy">
                    {active.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-brand-muted">
                    {active.description}
                  </p>
                </div>
                <span className="rounded-sm border border-brand-line bg-white px-2.5 py-1 text-[11px] font-semibold text-brand-navy">
                  {planLabel(active.plans, active.basicOnStarter)}
                </span>
              </div>
              {active.depends?.length ? (
                <p className="mt-3 text-[12px] text-brand-muted">
                  Depends on: {active.depends.join(", ")}
                </p>
              ) : null}
              <div className="mt-5">
                <FeatureProductPreview
                  preview={active.preview}
                  dark={active.dark}
                  className="min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]"
                />
              </div>
            </div>

            {/* Mobile capabilities */}
            <div className="mt-6 xl:hidden">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                Capabilities
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {active.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-md border border-brand-line bg-white px-3 py-1.5 text-[12px] font-medium text-brand-navy"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Capability rail */}
          <aside className="hidden xl:sticky xl:top-36 xl:block xl:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Capabilities
            </p>
            <ul className="mt-4 max-h-[60vh] space-y-2 overflow-y-auto [scrollbar-width:thin]">
              {active.features.map((f) => (
                <li
                  key={f}
                  className="rounded-lg border border-brand-line bg-[#FAFBFD] px-3 py-2.5 text-[13px] font-medium text-brand-navy"
                >
                  {f}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
