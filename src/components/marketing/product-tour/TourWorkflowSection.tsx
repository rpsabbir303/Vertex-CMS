"use client";

import type { ReactNode } from "react";

import type { ProductTourSectionId, TourStepContent } from "@/lib/marketing/product-tour/content";
import { PRODUCT_TOUR_SECTION_IDS } from "@/lib/marketing/product-tour/content";

import { TourSectionAbstract } from "./ProductTourVisuals";
import { TourStepControls } from "./TourStepControls";
import { useTourSteps } from "./useTourSteps";

type Props = {
  sectionId: ProductTourSectionId;
  navIndex: number;
  navLabel: string;
  eyebrow: string;
  intro: string;
  steps: TourStepContent[];
  abstract: "platform" | "financial" | "field" | "ai";
  renderVisual: (stepIndex: number) => ReactNode;
  layoutFlip?: boolean;
  aside?: ReactNode;
};

export function TourWorkflowSection({
  sectionId,
  navIndex,
  navLabel,
  eyebrow,
  intro,
  steps,
  abstract,
  renderVisual,
  layoutFlip = false,
  aside,
}: Props) {
  const { step, isFirst, isLast, goNext, goPrev } = useTourSteps(sectionId, steps.length);
  const current = steps[step]!;

  return (
    <section
      id={PRODUCT_TOUR_SECTION_IDS[sectionId]}
      className="relative scroll-mt-32 border-b border-brand-line/60 bg-white"
      aria-labelledby={`${sectionId}-heading`}
    >
      <TourSectionAbstract variant={abstract} />
      <div className="site-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <header className="max-w-2xl" data-design-layer="content">
          <p className="text-[11px] font-semibold tabular-nums text-brand-orange">{String(navIndex).padStart(2, "0")}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/70">{eyebrow}</p>
          <h2 id={`${sectionId}-heading`} className="mt-2 font-display text-[1.55rem] font-bold text-black sm:text-[1.75rem]">
            {navLabel}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#111827]">{intro}</p>
        </header>

        <div className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-12">
          <div className={`min-w-0 ${layoutFlip ? "lg:order-2" : ""}`} data-design-layer="content">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-orange">
              Step {String(step + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-[1.25rem] font-bold text-black sm:text-[1.35rem]">{current.title}</h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-[#111827]">{current.description}</p>
            {aside}
            <TourStepControls step={step} total={steps.length} onPrev={goPrev} onNext={goNext} isFirst={isFirst} isLast={isLast} />
          </div>
          <div
            className={`min-w-0 overflow-hidden rounded-sm border border-brand-line/80 bg-[#FAFCFE] shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-opacity motion-reduce:transition-none ${layoutFlip ? "lg:order-1" : ""}`}
            key={step}
          >
            <div className="border-b border-brand-line/70 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-black/70">
              Representative product UI
            </div>
            <div className="p-2 sm:p-3 [&_.overflow-hidden]:max-h-[min(420px,70vh)] [&_.overflow-hidden]:overflow-y-auto">
              {renderVisual(step)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
