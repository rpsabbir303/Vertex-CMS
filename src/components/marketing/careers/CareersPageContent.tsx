import { CareersCanvas } from "./CareersCanvas";
import { CareersCompanyNav } from "./CareersCompanyNav";
import { CareersCultureStories } from "./CareersCultureStories";
import { CareersHero } from "./CareersHero";
import { CareersOpenPositions } from "./CareersOpenPositions";

export function CareersPageContent() {
  return (
    <CareersCanvas>
      <CareersHero />
      <CareersCultureStories />
      <CareersOpenPositions />
      <CareersCompanyNav current="careers" />
    </CareersCanvas>
  );
}
