"use client";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";
import {
  SolutionsByBusinessSection,
  SolutionsByProjectTypeSection,
  SolutionsByRoleSection,
} from "./SolutionsDiscoverySection";
import { SolutionsHeroSection } from "./SolutionsHeroSection";
import {
  SolutionsBentoSection,
  SolutionsFinalCtaSection,
  SolutionsTrustStripSection,
} from "./SolutionsLandingSections";

export function SolutionsLandingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: ROUTES.home }, { label: "Solutions" }]} />

      <SolutionsHeroSection />

      <SolutionsByBusinessSection />
      <SolutionsByProjectTypeSection />
      <SolutionsByRoleSection />

      <SolutionsTrustStripSection />
      <SolutionsBentoSection />
      <SolutionsFinalCtaSection />
    </>
  );
}
