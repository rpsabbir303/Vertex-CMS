"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import type { HubModuleSection } from "@/lib/marketing/features/hub";
import { ROUTES } from "@/lib/marketing/navigation";
import {
  ECOSYSTEM_BAND,
  ExploreFeature,
  GridWash,
  LiveRegion,
  SectionIntro,
  useHubSelection,
} from "./FeaturesEcosystemShared";
import { GrowthControlWorkspace } from "./GrowthControlWorkspace";

export function GrowthPipeline({ section }: { section: HubModuleSection }) {
  const { active, select } = useHubSelection(section);

  return (
    <section
      id={section.id}
      className="relative scroll-mt-36 overflow-hidden border-b border-brand-line/80 bg-white"
      aria-labelledby={`${section.id}-heading`}
      data-design-layer="GrowthPipeline"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,35,63,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(8,35,63,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <GridWash variant="growth" />

      <div className={"feat-shell relative " + ECOSYSTEM_BAND}>
        <SectionIntro section={section} />

        <div className="relative mt-8 min-w-0">
          <GrowthControlWorkspace area={active} section={section} onSelect={select} />
        </div>

        <div className="relative mt-6 flex flex-col gap-3 border-t border-brand-line/80 pt-6 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={`${ROUTES.features}#growth`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-brand-orange px-5 py-3 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 sm:w-auto"
          >
            Explore Business Growth
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <ExploreFeature area={active} tone="ghost" />
        </div>

        <LiveRegion id={`${section.id}-live`} label={active.label} />
      </div>
    </section>
  );
}
