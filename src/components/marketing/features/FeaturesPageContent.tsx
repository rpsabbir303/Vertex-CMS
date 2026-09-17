import "@/app/features/features-landing.css";
import { FeaturesHubSections } from "./FeaturesHubSections";
import { FeaturesLandingCTA } from "./FeaturesLandingCTA";
import { FeaturesLandingHero } from "./FeaturesLandingHero";
import { FeaturesStickyNav } from "./FeaturesStickyNav";

/**
 * Main Features page — hero, six category sections (HUB_MODULES), final CTA.
 */
export function FeaturesPageContent() {
  return (
    <div className="feat-landing">
      <FeaturesLandingHero />
      <FeaturesStickyNav />
      <FeaturesHubSections />
      <FeaturesLandingCTA />
    </div>
  );
}
