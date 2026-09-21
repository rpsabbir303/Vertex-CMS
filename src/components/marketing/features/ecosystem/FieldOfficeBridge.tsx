"use client";

import {
  MobileDailyLogUI,
  MobileDrawingUI,
  MobileHomeUI,
  MobilePunchUI,
  MobileSafetyUI,
  MobileTmUI,
} from "@/components/mockups/ProductMockups";
import { featureAreaPath } from "@/lib/marketing/features/featureAreas";
import type { HubFeatureArea, HubModuleSection } from "@/lib/marketing/features/hub";
import Link from "next/link";
import {
  ECOSYSTEM_BAND,
  ExploreFeature,
  FeatureCopy,
  GridWash,
  LiveRegion,
  ProductCanvas,
  SectionIntro,
  useHubSelection,
} from "./FeaturesEcosystemShared";

const BRIDGE = [
  { label: "Field", slug: undefined },
  { label: "Mobile", slug: "mobile" },
  { label: "VertexBuild", slug: undefined },
  { label: "Office", slug: "projects" },
] as const;

function FieldPhone({ area }: { area: HubFeatureArea }) {
  switch (area.slug) {
    case "daily-logs":
      return <MobileDailyLogUI />;
    case "drawings":
      return <MobileDrawingUI />;
    case "punch":
      return <MobilePunchUI />;
    case "t-and-m":
      return <MobileTmUI />;
    case "safety":
      return <MobileSafetyUI />;
    default:
      return <MobileHomeUI />;
  }
}

export function FieldOfficeBridge({ section }: { section: HubModuleSection }) {
  const { active, select } = useHubSelection(section);

  return (
    <section
      id={section.id}
      className="relative scroll-mt-36 overflow-hidden border-b border-brand-line/80 bg-white"
      aria-labelledby={`${section.id}-heading`}
      data-design-layer="FieldOfficeBridge"
    >
      <GridWash variant="field" />
      <div className={"feat-shell relative " + ECOSYSTEM_BAND}>
        <SectionIntro section={section} />

        <div className="mt-10 flex flex-col gap-5 xl:grid xl:grid-cols-[280px_minmax(88px,112px)_minmax(0,1fr)] xl:items-center">
          <div className="border border-brand-line/80 bg-[#F7F9FC] px-4 py-5 sm:px-6">
            <p className="mb-3 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
              Field · {active.label}
            </p>
            <div className="feat-phone">
              <FieldPhone area={active} />
            </div>
          </div>

          <ol
            className="flex flex-row flex-wrap justify-center gap-2 xl:flex-col xl:items-stretch"
            aria-label="Field to office connection"
          >
            {BRIDGE.map((step, index) => (
              <li key={step.label} className="flex items-center gap-2 xl:flex-col">
                {step.slug ? (
                  <Link
                    href={featureAreaPath(step.slug)}
                    className="min-w-[4.75rem] border border-brand-orange/40 bg-white px-2 py-2 text-center font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                  >
                    {step.label}
                  </Link>
                ) : (
                  <span className="min-w-[4.75rem] border border-brand-line bg-white px-2 py-2 text-center font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-brand-muted">
                    {step.label}
                  </span>
                )}
                {index < BRIDGE.length - 1 ? (
                  <>
                    <svg width="12" height="16" viewBox="0 0 12 16" className="hidden text-brand-blue/45 xl:block" aria-hidden="true">
                      <path d="M6 1v10M3 8l3 4 3-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    <svg width="16" height="12" viewBox="0 0 16 12" className="text-brand-blue/45 xl:hidden" aria-hidden="true">
                      <path d="M1 6h10M8 3l4 3-4 3" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="min-w-0 border border-brand-line/80 bg-white">
            <div className="border-b border-brand-line/80 px-3 py-2">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">Office record</p>
              <p className="font-sans text-[12px] font-semibold text-brand-navy">{active.label}</p>
            </div>
            <ProductCanvas
              area={active}
              section={section}
              ratio="wide"
              className="rounded-none border-0"
              previewOverride={active.slug === "mobile" ? "mobileFlow" : undefined}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {section.areas.map((area) => {
            const selected = area.id === active.id;
            return (
              <div key={area.id} className="flex items-center gap-1">
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => select(area)}
                  className={
                    "border px-3 py-2 font-sans text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
                    (selected ? "border-brand-orange bg-brand-orange/5 text-brand-navy" : "border-brand-line bg-white text-brand-muted hover:text-brand-navy")
                  }
                >
                  {area.label}
                </button>
                <Link
                  href={featureAreaPath(area.slug)}
                  className="px-1 font-sans text-[11px] font-semibold text-brand-orange hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                >
                  Open
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-5 max-w-xl">
          <FeatureCopy area={active} />
          <div className="mt-4">
            <ExploreFeature area={active} tone="ghost" />
          </div>
        </div>
        <LiveRegion id={`${section.id}-live`} label={active.label} />
      </div>
    </section>
  );
}
