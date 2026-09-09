import { FeatureCategoryNav } from "./FeatureCategoryNav";
import { PreconstructionCapabilityBlocks } from "./PreconstructionCapabilityBlocks";
import { PreconstructionFinalCTA } from "./PreconstructionFinalCTA";
import { PreconstructionHero } from "./PreconstructionHero";
import { PreconstructionIntro } from "./PreconstructionIntro";
import { PreconstructionOutcomes } from "./PreconstructionOutcomes";
import { PreconstructionRelated } from "./PreconstructionRelated";
import { PreconstructionWorkflow } from "./PreconstructionWorkflow";

export function PreconstructionCategoryPage() {
  return (
    <>
      <PreconstructionHero />
      <FeatureCategoryNav activeCategoryId="preconstruction" />
      <PreconstructionIntro />
      <PreconstructionCapabilityBlocks />
      <PreconstructionWorkflow />
      <PreconstructionOutcomes />
      <PreconstructionRelated />
      <PreconstructionFinalCTA />
    </>
  );
}
