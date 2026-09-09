import { FeatureCategoryNav } from "./FeatureCategoryNav";
import { ProjectManagementFinalCTA } from "./ProjectManagementFinalCTA";
import { ProjectManagementHero } from "./ProjectManagementHero";
import { ProjectManagementOverview } from "./ProjectManagementOverview";
import { ProjectManagementPlanTeaser } from "./ProjectManagementPlanTeaser";
import { ProjectManagementRelated } from "./ProjectManagementRelated";
import { ProjectManagementWorkflow } from "./ProjectManagementWorkflow";

/**
 * Project Management Feature Category — concise exploration step in the Features journey.
 * Category intro → interactive capability explorer → connected workflow → related → plan → CTA.
 * Capability detail pages remain separate destinations via Explore links.
 */
export function ProjectManagementCategoryPage() {
  return (
    <>
      <ProjectManagementHero />
      <FeatureCategoryNav activeCategoryId="project-management" />
      <ProjectManagementOverview />
      <ProjectManagementWorkflow />
      <ProjectManagementRelated />
      <ProjectManagementPlanTeaser />
      <ProjectManagementFinalCTA />
    </>
  );
}
