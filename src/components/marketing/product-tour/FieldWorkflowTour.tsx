"use client";

import { PhoneUI, ProjectWorkspace } from "@/components/mockups/ProductMockups";
import { FIELD_TOUR_STEPS, PRODUCT_TOUR_SECTION_IDS } from "@/lib/marketing/product-tour/content";

import { FieldActivityStream } from "./compositions/FieldActivityStream";
import { FieldSectionAbstract } from "./ProductTourVisuals";
import { TourNavInline } from "./tour-nav/TourNavInline";
import { TourRelatedCapabilities } from "./TourRelatedCapabilities";
import { TourSectionHeader } from "./TourSectionHeader";
import { useTourSteps } from "./useTourSteps";

const PHONE_VARIANTS: ("home" | "log" | "capture")[] = ["log", "capture", "home", "home", "home", "home", "log"];

export function FieldWorkflowTour() {
  const { step, setStep, isFirst, isLast, goNext, goPrev } = useTourSteps("field", FIELD_TOUR_STEPS.length);
  const current = FIELD_TOUR_STEPS[step]!;

  return (
    <section
      id={PRODUCT_TOUR_SECTION_IDS.field}
      className="relative scroll-mt-32 border-b border-brand-line/60 bg-white"
      aria-labelledby="field-heading"
    >
      <FieldSectionAbstract />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#3B6F9A 1px, transparent 1px), linear-gradient(90deg, #3B6F9A 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="site-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <TourSectionHeader
          navIndex={3}
          eyebrow="Field activity"
          title="Field workflow"
          intro="Capture on site, sync to the project record, and review from the office — mobile-first field operations connected to the same data model."
          headingId="field-heading"
        />

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,0.28fr)_auto_minmax(0,0.32fr)] lg:gap-6 xl:gap-10">
          <FieldActivityStream
            activeStep={step}
            stepTitle={current.title}
            stepDescription={current.description}
            onStepSelect={setStep}
            streamLabels={FIELD_TOUR_STEPS.map((s) => s.title)}
          />

          <div className="flex flex-col items-center justify-center py-4 lg:py-0" data-design-layer="field-device">
            <div className="relative">
              <svg className="pointer-events-none absolute -left-8 top-1/2 hidden h-24 w-16 -translate-y-1/2 opacity-30 lg:block" viewBox="0 0 64 96" aria-hidden="true">
                <path d="M60 48 H8 M8 48 V24" stroke="#3B6F9A" strokeWidth="1" fill="none" />
                <circle cx="8" cy="24" r="3" fill="#FF6A00" />
              </svg>
              <svg className="pointer-events-none absolute -right-8 top-1/2 hidden h-24 w-16 -translate-y-1/2 opacity-30 lg:block" viewBox="0 0 64 96" aria-hidden="true">
                <path d="M4 48 H56 M56 48 V72" stroke="#3B6F9A" strokeWidth="1" fill="none" />
                <circle cx="56" cy="72" r="3" fill="#FF6A00" />
              </svg>
              <PhoneUI variant={PHONE_VARIANTS[step] ?? "home"} raised />
            </div>
            <p className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.1em] text-black/70">Field capture</p>
          </div>

          <div className="min-w-0 overflow-hidden rounded-sm border border-brand-line/80 bg-[#FAFCFE]">
            <div className="border-b border-brand-line/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-black">
              Project record · office context
            </div>
            <div className="max-h-[min(380px,55vh)] overflow-y-auto p-2 scale-[0.98] origin-top">
              <ProjectWorkspace />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <TourNavInline
            step={step}
            total={FIELD_TOUR_STEPS.length}
            onPrev={goPrev}
            onNext={goNext}
            isFirst={isFirst}
            isLast={isLast}
            align="center"
          />
        </div>

        <TourRelatedCapabilities workflow="field" />
      </div>
    </section>
  );
}
