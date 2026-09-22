"use client";

import {
  BudgetCostCodeTableUI,
  BudgetFlowUI,
  BudgetJobCostDashboardUI,
  BudgetVsActualUI,
  FinanceUI,
} from "@/components/mockups/ProductMockups";
import { FINANCIAL_TOUR_STEPS, PRODUCT_TOUR_SECTION_IDS } from "@/lib/marketing/product-tour/content";

import { FinancialFlowTimeline } from "./compositions/FinancialFlowTimeline";
import { FinancialSectionAbstract } from "./ProductTourVisuals";
import { TourNavInline } from "./tour-nav/TourNavInline";
import { TourRelatedCapabilities } from "./TourRelatedCapabilities";
import { TourSectionHeader } from "./TourSectionHeader";
import { useTourSteps } from "./useTourSteps";

const UI = [BudgetJobCostDashboardUI, BudgetFlowUI, FinanceUI, BudgetCostCodeTableUI, BudgetVsActualUI];

const SHORT = ["Budget", "Contract", "Billing", "AP / GL", "WIP"];

export function FinancialWorkflowTour() {
  const { step, setStep, isFirst, isLast, goNext, goPrev } = useTourSteps("financial", FINANCIAL_TOUR_STEPS.length);
  const current = FINANCIAL_TOUR_STEPS[step]!;
  const Component = UI[step] ?? BudgetJobCostDashboardUI;
  const stages = FINANCIAL_TOUR_STEPS.map((s, i) => ({ index: i, short: SHORT[i] ?? s.title.split(" ")[0]! }));

  return (
    <section
      id={PRODUCT_TOUR_SECTION_IDS.financial}
      className="relative scroll-mt-32 border-b border-brand-line/60 bg-[#F7F5F2]/30"
      aria-labelledby="financial-heading"
    >
      <FinancialSectionAbstract />
      <div className="site-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <TourSectionHeader
          navIndex={2}
          eyebrow="Financial flow"
          title="Financial workflow"
          intro="Follow budget, contracts, billing, AP/GL, and WIP as data moves through one connected financial path on the project record."
          headingId="financial-heading"
        />

        <div className="mt-10 rounded-sm border border-brand-line/80 bg-white/90 p-4 sm:p-6">
          <FinancialFlowTimeline stages={stages} activeStep={step} onSelect={setStep} />
          <div className="mt-6 border-t border-brand-line/60 pt-5">
            <TourNavInline step={step} total={FINANCIAL_TOUR_STEPS.length} onPrev={goPrev} onNext={goNext} isFirst={isFirst} isLast={isLast} />
          </div>
        </div>

        <div className="mt-8" data-design-layer="content">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">{current.title}</p>
          <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-[#111827]">{current.description}</p>
        </div>

        <div className="mt-6 overflow-hidden rounded-sm border border-brand-navy/10 bg-brand-navy/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
          <div className="border-b border-brand-line/70 bg-[#EEF4FA] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-black">
            Financial stage — {current.title}
          </div>
          <div className="max-h-[min(480px,70vh)] overflow-y-auto bg-white p-2 sm:p-4">
            <Component />
          </div>
        </div>

        <TourRelatedCapabilities workflow="financial" />
      </div>
    </section>
  );
}
