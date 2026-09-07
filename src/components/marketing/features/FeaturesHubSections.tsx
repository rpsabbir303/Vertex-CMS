"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneUI } from "@/components/mockups/ProductMockups";
import { Reveal } from "@/components/Reveal";
import { featureAreaPath } from "@/lib/marketing/features/featureAreas";
import { HUB_MODULES, type HubFeatureArea, type HubModuleSection } from "@/lib/marketing/features/hub";
import { FeatureProductPreview } from "./FeatureProductPreview";

function ExploreFeatureCta({
  area,
  dark,
  className = "",
}: {
  area: HubFeatureArea;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={featureAreaPath(area.slug)}
      className={
        "inline-flex items-center gap-1.5 text-[13px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 " +
        (dark
          ? "text-brand-orange hover:text-orange-300"
          : "text-brand-orange hover:text-brand-navy") +
        (className ? " " + className : "")
      }
    >
      Explore {area.label}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

function ModuleSection({ section }: { section: HubModuleSection }) {
  const [activeId, setActiveId] = useState(section.areas[0]?.id ?? "");
  const active = section.areas.find((a) => a.id === activeId) ?? section.areas[0];

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      const match = section.areas.find((a) => a.id === hash);
      if (match) setActiveId(match.id);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [section.areas]);

  const selectArea = (area: HubFeatureArea) => {
    setActiveId(area.id);
    const url = window.location.pathname + window.location.search + "#" + area.id;
    window.history.replaceState(null, "", url);
  };

  const isDark = section.layout === "dark-ai";
  const sectionBg = isDark
    ? "bg-brand-navy text-white"
    : section.layout === "growth"
      ? "bg-[#F7F9FC]"
      : section.layout === "field-split"
        ? "bg-[#F4F7FA]"
        : section.id === "financial-management"
          ? "bg-[#FAFBFD]"
          : section.id === "compliance"
            ? "bg-[#F8FAFC]"
            : "bg-white";
  const sectionClass = "scroll-mt-36 border-b border-brand-line " + sectionBg;

  return (
    <section id={section.id} className={sectionClass}>
      <div className="site-shell section-spacing">
        <Reveal>
          <p
            className={
              "font-mono text-[11px] font-semibold " + (isDark ? "text-brand-orange" : "text-brand-orange")
            }
          >
            {section.number}
          </p>
          <h2
            className={
              "mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl " +
              (isDark ? "text-white" : "text-brand-navy")
            }
          >
            {section.title}
          </h2>
          <p
            className={
              "mt-4 max-w-2xl text-[15px] leading-relaxed " + (isDark ? "text-slate-300" : "text-brand-muted")
            }
          >
            {section.description}
          </p>
        </Reveal>

        {section.layout === "field-split" ? (
          <FieldLayout section={section} active={active} onSelect={selectArea} />
        ) : section.layout === "dark-ai" ? (
          <AiLayout section={section} active={active} onSelect={selectArea} />
        ) : section.layout === "growth" ? (
          <GrowthLayout section={section} active={active} onSelect={selectArea} />
        ) : section.layout === "list-right" ? (
          <SplitLayout section={section} active={active} onSelect={selectArea} reverse />
        ) : (
          <SplitLayout section={section} active={active} onSelect={selectArea} />
        )}
      </div>
    </section>
  );
}

function AreaList({
  section,
  active,
  onSelect,
  dark,
}: {
  section: HubModuleSection;
  active: HubFeatureArea;
  onSelect: (area: HubFeatureArea) => void;
  dark?: boolean;
}) {
  return (
    <ul className="space-y-2">
      {section.areas.map((area) => {
        const selected = area.id === active.id;
        return (
          <li key={area.id} id={area.id} className="scroll-mt-40">
            <button
              type="button"
              onClick={() => onSelect(area)}
              className={
                "w-full rounded-lg border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 " +
                (selected
                  ? dark
                    ? "border-brand-orange/50 bg-white/10"
                    : "border-brand-orange/40 bg-brand-orange/5"
                  : dark
                    ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                    : "border-brand-line bg-[#FAFBFD] hover:bg-white")
              }
              aria-pressed={selected}
            >
              <p className={"text-[14px] font-semibold " + (dark ? "text-white" : "text-brand-navy")}>
                {area.label}
              </p>
              {selected ? (
                <div className="mt-2">
                  <p className={"text-[13px] leading-relaxed " + (dark ? "text-slate-300" : "text-brand-muted")}>
                    {area.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {area.tags.map((tag) => (
                      <li
                        key={tag}
                        className={
                          "rounded-md border px-2 py-0.5 text-[11px] " +
                          (dark
                            ? "border-white/15 text-slate-300"
                            : "border-brand-line bg-white text-brand-muted")
                        }
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </button>
            {selected ? (
              <div className="mt-2 px-1">
                <ExploreFeatureCta area={area} dark={dark} />
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function SplitLayout({
  section,
  active,
  onSelect,
  reverse,
}: {
  section: HubModuleSection;
  active: HubFeatureArea;
  onSelect: (area: HubFeatureArea) => void;
  reverse?: boolean;
}) {
  return (
    <div
      className={
        "mt-10 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12 " +
        (reverse ? "lg:[&>*:first-child]:order-2" : "")
      }
    >
      <AreaList section={section} active={active} onSelect={onSelect} />
      <div className="lg:sticky lg:top-36">
        <FeatureProductPreview
          preview={section.preview}
          dark={section.dark}
          className="min-h-[280px] sm:min-h-[340px]"
        />
        <p className="mt-3 text-[13px] font-medium text-brand-navy">{active.label}</p>
        <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{active.description}</p>
        <div className="mt-3">
          <ExploreFeatureCta area={active} />
        </div>
      </div>
    </div>
  );
}

function FieldLayout({
  section,
  active,
  onSelect,
}: {
  section: HubModuleSection;
  active: HubFeatureArea;
  onSelect: (area: HubFeatureArea) => void;
}) {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      <AreaList section={section} active={active} onSelect={onSelect} />
      <div className="relative">
        <FeatureProductPreview preview="docs" className="min-h-[260px]" />
        <div className="mt-4 w-full max-w-[220px] sm:absolute sm:bottom-4 sm:right-4 sm:mt-0 sm:w-[200px]">
          <div className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-soft" aria-hidden="true">
            <PhoneUI variant="home" raised />
          </div>
        </div>
        <p className="mt-4 text-[13px] font-medium text-brand-navy sm:mt-6">{active.label}</p>
        <p className="mt-1 text-[13px] text-brand-muted">{active.description}</p>
        <div className="mt-3">
          <ExploreFeatureCta area={active} />
        </div>
      </div>
    </div>
  );
}

function AiLayout({
  section,
  active,
  onSelect,
}: {
  section: HubModuleSection;
  active: HubFeatureArea;
  onSelect: (area: HubFeatureArea) => void;
}) {
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
      <AreaList section={section} active={active} onSelect={onSelect} dark />
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#061525]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div>
            <p className="text-[12px] font-semibold text-white">Vertex AI · {active.label}</p>
            <p className="text-[11px] text-slate-500">Grounded in live project data</p>
          </div>
          <span className="rounded-sm border border-brand-orange/30 bg-brand-orange/10 px-2 py-1 text-[10px] font-semibold text-brand-orange">
            Confirmation required
          </span>
        </div>
        <div className="space-y-3 border-b border-white/10 p-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[13px] text-slate-200">
            {active.description}
          </div>
          <ul className="flex flex-wrap gap-2">
            {active.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-300"
              >
                {tag}
              </li>
            ))}
          </ul>
          <ExploreFeatureCta area={active} dark />
        </div>
        <div className="p-3">
          <FeatureProductPreview preview="ai" dark className="min-h-[220px] border-white/10 bg-transparent" />
        </div>
      </div>
    </div>
  );
}

function GrowthLayout({
  section,
  active,
  onSelect,
}: {
  section: HubModuleSection;
  active: HubFeatureArea;
  onSelect: (area: HubFeatureArea) => void;
}) {
  return (
    <div className="mt-10">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {section.areas.map((area) => {
          const selected = area.id === active.id;
          return (
            <div key={area.id} id={area.id} className="scroll-mt-40">
              <button
                type="button"
                onClick={() => onSelect(area)}
                className={
                  "w-full rounded-xl border px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 " +
                  (selected
                    ? "border-brand-orange/40 bg-white shadow-soft"
                    : "border-brand-line bg-white/70 hover:bg-white")
                }
                aria-pressed={selected}
              >
                <p className="text-[14px] font-semibold text-brand-navy">{area.label}</p>
                <p className="mt-2 text-[12px] leading-relaxed text-brand-muted">{area.description}</p>
              </button>
              {selected ? (
                <div className="mt-2 px-1">
                  <ExploreFeatureCta area={area} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <FeatureProductPreview preview={section.preview} className="min-h-[280px] sm:min-h-[320px]" />
        <div className="mt-3">
          <ExploreFeatureCta area={active} />
        </div>
      </div>
    </div>
  );
}

export function FeaturesHubSections() {
  return (
    <>
      {HUB_MODULES.map((section) => (
        <ModuleSection key={section.id} section={section} />
      ))}
    </>
  );
}
