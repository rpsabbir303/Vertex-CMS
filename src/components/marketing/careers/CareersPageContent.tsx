import { careersJobs } from "@/lib/marketing/careers/content";
import { CareersCTA } from "./CareersCTA";
import { CareersHero } from "./CareersHero";
import { CareersOpenPositions } from "./CareersOpenPositions";
import { CareersStory } from "./CareersStory";
import { CareersWhatWeBuild } from "./CareersWhatWeBuild";

export function CareersPageContent() {
  return (
    <>
      <CareersHero />
      <CareersStory />
      <CareersWhatWeBuild />
      <CareersOpenPositions jobs={careersJobs} />
      <CareersCTA />
    </>
  );
}
