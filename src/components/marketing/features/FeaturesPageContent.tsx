import { FeaturesAISection } from "./FeaturesAISection";
import { FeaturesByPlan } from "./FeaturesByPlan";
import { FeaturesByRole } from "./FeaturesByRole";
import { FeaturesCategoryShowcase } from "./FeaturesCategoryShowcase";
import { FeaturesDetailPattern } from "./FeaturesDetailPattern";
import { FeaturesLandingCTA } from "./FeaturesLandingCTA";
import { FeaturesLandingHero } from "./FeaturesLandingHero";
import { FeaturesLibrary } from "./FeaturesLibrary";
import { FeaturesMobileSection } from "./FeaturesMobileSection";

/**
 * Features Landing Page — approved CMS feature tasks:
 * Landing → Category Nav/Showcase → Detail Pattern → Role → Plan → AI → Mobile → CTA
 * Feature Library retained as the searchable capability catalog.
 */
export function FeaturesPageContent() {
  return (
    <>
      <FeaturesLandingHero />
      <FeaturesCategoryShowcase />
      <FeaturesDetailPattern />
      <FeaturesByRole />
      <FeaturesByPlan />
      <FeaturesAISection />
      <FeaturesMobileSection />
      <FeaturesLibrary />
      <FeaturesLandingCTA />
    </>
  );
}
