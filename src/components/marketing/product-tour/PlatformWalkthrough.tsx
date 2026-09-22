"use client";

import {
  DailyLogDashboardUI,
  DocumentCenterUI,
  FinanceUI,
  PortfolioAnalytics,
  ProjectWorkspace,
} from "@/components/mockups/ProductMockups";
import { PLATFORM_TOUR_STEPS, PRODUCT_TOUR_SECTION_IDS } from "@/lib/marketing/product-tour/content";

import { PlatformConnectedSystem } from "./compositions/PlatformConnectedSystem";
import { PlatformSectionAbstract } from "./ProductTourVisuals";
import { TourNavPlatform } from "./tour-nav/TourNavPlatform";
import { TourRelatedCapabilities } from "./TourRelatedCapabilities";
import { TourSectionHeader } from "./TourSectionHeader";
import { useTourSteps } from "./useTourSteps";

const UI = [ProjectWorkspace, DocumentCenterUI, DailyLogDashboardUI, FinanceUI, PortfolioAnalytics];

const NODE_LABELS = PLATFORM_TOUR_STEPS.map((s, i) => ({
  index: i,
  label: s.title,
  short: s.title.split(" ")[0]?.toUpperCase() ?? s.title,
}));

export function PlatformWalkthrough() {
  const { step, setStep, isFirst, isLast, goNext, goPrev } = useTourSteps("platform", PLATFORM_TOUR_STEPS.length);
  const current = PLATFORM_TOUR_STEPS[step]!;
  const Component = UI[step] ?? ProjectWorkspace;

  return (
    <section
      id={PRODUCT_TOUR_SECTION_IDS.platform}
      className="relative scroll-mt-32 border-b border-brand-line/60 bg-[#FAFCFE]"
      aria-labelledby="platform-heading"
    >
      <PlatformSectionAbstract />
      <div className="site-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <TourSectionHeader
          navIndex={1}
          eyebrow="Connected platform system"
          title="Platform walkthrough"
          intro="Everything connects to one operating record — explore how project, documents, field, financial, and reporting modules relate to the platform core."
          headingId="platform-heading"
        />

        <div className="mt-10 lg:mt-12">
          <PlatformConnectedSystem activeStep={step} onSelect={setStep} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-8">
          <div className="rounded-sm border border-brand-line/80 bg-white p-5" data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">Active module</p>
            <h3 className="mt-2 font-display text-[1.2rem] font-bold text-black">{current.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[#111827]">{current.description}</p>
            <TourNavPlatform
              nodes={NODE_LABELS}
              activeStep={step}
              onSelect={setStep}
              onPrev={goPrev}
              onNext={goNext}
              isFirst={isFirst}
              isLast={isLast}
            />
          </div>
          <div className="overflow-hidden rounded-sm border border-brand-navy/15 bg-white shadow-[0_12px_40px_-24px_rgba(10,39,68,0.35)]">
            <div className="border-b border-brand-line/70 bg-[#F4F8FC] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-black/70">
              {current.title} — representative UI
            </div>
            <div className="max-h-[min(440px,65vh)] overflow-y-auto p-2 sm:p-3">
              <Component />
            </div>
          </div>
        </div>

        <TourRelatedCapabilities workflow="platform" />
      </div>
    </section>
  );
}
