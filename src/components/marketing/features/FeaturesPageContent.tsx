import { FeaturesCTA } from "./FeaturesCTA";
import { FeaturesConnectedPlatform } from "./FeaturesConnectedPlatform";
import { FeaturesHubHero } from "./FeaturesHubHero";
import { FeaturesHubSections } from "./FeaturesHubSections";
import { FeaturesLibrary } from "./FeaturesLibrary";
import { FeaturesModuleNav } from "./FeaturesModuleNav";
import { FeaturesRoleExperience } from "./FeaturesRoleExperience";

export function FeaturesPageContent() {
  return (
    <>
      <FeaturesHubHero />
      <FeaturesModuleNav />
      <FeaturesHubSections />
      <FeaturesLibrary />
      <FeaturesRoleExperience />
      <FeaturesConnectedPlatform />
      <FeaturesCTA />
    </>
  );
}
