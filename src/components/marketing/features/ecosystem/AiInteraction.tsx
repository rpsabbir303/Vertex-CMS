"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { featureAreaPath } from "@/lib/marketing/features/featureAreas";
import type { HubFeatureArea, HubModuleSection } from "@/lib/marketing/features/hub";
import { ROUTES } from "@/lib/marketing/navigation";
import {
  ECOSYSTEM_BAND,
  ExploreFeature,
  GridWash,
  LiveRegion,
  SectionIntro,
  useHubSelection,
} from "./FeaturesEcosystemShared";
import { VertexIntelligenceWorkspace } from "./VertexIntelligenceWorkspace";

function CapabilityPill({
  area,
  selected,
  onSelect,
}: {
  area: HubFeatureArea;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <div className="flex shrink-0 flex-col gap-1">
      <button
        type="button"
        aria-pressed={selected}
        onClick={onSelect}
        className={
          "rounded-full border px-4 py-2 font-sans text-[12px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
          (selected
            ? "border-brand-navy bg-brand-navy text-white"
            : "border-brand-line/90 bg-white text-brand-navy hover:border-brand-blue/40")
        }
      >
        {area.label}
      </button>
      <Link
        href={featureAreaPath(area.slug)}
        className="text-center font-sans text-[10px] font-semibold text-brand-blue hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
      >
        Explore →
      </Link>
    </div>
  );
}

export function AiInteraction({ section }: { section: HubModuleSection }) {
  const { active, select } = useHubSelection(section);

  return (
    <section
      id={section.id}
      className="relative scroll-mt-36 overflow-hidden border-b border-brand-line/80 bg-[#F8FAFC]"
      aria-labelledby={`${section.id}-heading`}
      data-design-layer="AiInteraction"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,35,63,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(8,35,63,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <GridWash variant="intel" />

      <div className={"feat-shell relative " + ECOSYSTEM_BAND}>
        <SectionIntro section={section} />

        <div className="relative mt-6 flex flex-wrap items-end justify-between gap-4">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            Vertex Intelligence
          </p>
          <div
            className="flex max-w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]"
            role="tablist"
            aria-label="Intelligence capabilities"
          >
            {section.areas.map((cap) => (
              <CapabilityPill
                key={cap.id}
                area={cap}
                selected={cap.id === active.id}
                onSelect={() => select(cap)}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-4 min-w-0">
          <VertexIntelligenceWorkspace area={active} />
        </div>

        <div className="relative mt-6 flex flex-col gap-3 border-t border-brand-line/80 pt-6 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={`${ROUTES.features}/ai-assistant`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-orange px-5 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:w-auto"
          >
            Explore AI & Intelligence
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <ExploreFeature area={active} tone="ghost" />
        </div>

        <LiveRegion id={`${section.id}-live`} label={active.label} />
      </div>
    </section>
  );
}
