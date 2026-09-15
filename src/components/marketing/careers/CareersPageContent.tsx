import { CompanyCanvas, CompanyNav } from "@/components/marketing/company/CompanyCanvas";
import { CareersCultureStories } from "./CareersCultureStories";
import { CareersHero } from "./CareersHero";
import { CareersOpenPositions } from "./CareersOpenPositions";

export function CareersPageContent() {
  return (
    <CompanyCanvas>
      <CareersHero />
      <CareersCultureStories />
      <CareersOpenPositions />
      <CompanyNav current="careers" />
    </CompanyCanvas>
  );
}
