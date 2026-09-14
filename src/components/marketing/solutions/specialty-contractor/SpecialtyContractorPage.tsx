"use client";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { SolutionStoryPage } from "@/components/marketing/solutions/shared/SolutionStoryPage";
import { ROUTES } from "@/lib/marketing/navigation";
import { SOLUTION_DETAILS } from "@/lib/marketing/solutions/data";
import { specialtyContractorStory } from "@/lib/marketing/solutions/stories";

const SC = SOLUTION_DETAILS["specialty-contractors"];

export function SpecialtyContractorPage() {
  return (
    <SolutionStoryPage
      breadcrumbs={
        <Breadcrumbs
          items={[
            { label: "Home", href: ROUTES.home },
            { label: "Solutions", href: ROUTES.solutions },
            { label: SC.label },
          ]}
        />
      }
      story={specialtyContractorStory}
    />
  );
}
