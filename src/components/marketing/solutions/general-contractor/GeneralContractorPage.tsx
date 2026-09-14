"use client";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";
import { SOLUTION_DETAILS } from "@/lib/marketing/solutions/data";
import {
  GcCtaSection,
  GcExperienceSection,
  GcFieldOfficeSection,
  GcFinancialsSection,
  GcHeroSection,
  GcOperatingModelSection,
  GcProjectsSection,
  GcSubsSection,
  GcWorkflowSection,
} from "./GeneralContractorSections";

const GC = SOLUTION_DETAILS["general-contractors"];

export function GeneralContractorPage() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Solutions", href: ROUTES.solutions },
          { label: GC.label },
        ]}
      />
      <GcHeroSection />
      <GcOperatingModelSection />
      <GcProjectsSection />
      <GcFinancialsSection />
      <GcSubsSection />
      <GcFieldOfficeSection />
      <GcWorkflowSection />
      <GcExperienceSection />
      <GcCtaSection />
    </div>
  );
}
