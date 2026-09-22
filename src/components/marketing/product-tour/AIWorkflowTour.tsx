"use client";

import { AI_WORKFLOW_STAGES, PRODUCT_TOUR_SECTION_IDS } from "@/lib/marketing/product-tour/content";

import { AIStageNavigation } from "./compositions/AIStageNavigation";
import { AIWorkflowExperience } from "./compositions/AIWorkflowExperience";
import { AISectionAbstract } from "./ProductTourVisuals";
import { TourRelatedCapabilities } from "./TourRelatedCapabilities";
import { TourSectionHeader } from "./TourSectionHeader";
import { useTourSteps } from "./useTourSteps";

const STAGE_COUNT = AI_WORKFLOW_STAGES.length;

export function AIWorkflowTour() {
  const { step, setStep, isFirst, isLast, goNext, goPrev } = useTourSteps("ai", STAGE_COUNT);

  return (
    <section
      id={PRODUCT_TOUR_SECTION_IDS.ai}
      className="relative scroll-mt-32 border-b border-brand-line/60 bg-[#EEF4FA]/50"
      aria-labelledby="ai-heading"
    >
      <AISectionAbstract />
      <div className="site-shell relative z-[1] py-10 sm:py-12 lg:py-14">
        <TourSectionHeader
          navIndex={4}
          eyebrow="Intelligence with review"
          title="AI workflow"
          intro="Project context flows through AI-assisted analysis — people remain in control of decisions and any write action."
          headingId="ai-heading"
        />

        <div className="mt-8 lg:mt-10">
          <AIWorkflowExperience stage={step} />
        </div>

        <AIStageNavigation
          activeStage={step}
          completedThrough={step}
          onSelect={setStep}
          onPrev={goPrev}
          onNext={goNext}
          isFirst={isFirst}
          isLast={isLast}
        />

        <TourRelatedCapabilities workflow="ai" />
      </div>
    </section>
  );
}
