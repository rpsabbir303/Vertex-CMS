"use client";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { SolutionStoryPage } from "@/components/marketing/solutions/shared/SolutionStoryPage";
import { ROUTES } from "@/lib/marketing/navigation";
import { SOLUTION_DETAILS } from "@/lib/marketing/solutions/data";
import { commercialStory } from "@/lib/marketing/solutions/stories";

const COMMERCIAL = SOLUTION_DETAILS.commercial;

export function CommercialConstructionPage() {
  return (
    <SolutionStoryPage
      breadcrumbs={
        <Breadcrumbs
          items={[
            { label: "Home", href: ROUTES.home },
            { label: "Solutions", href: ROUTES.solutions },
            { label: COMMERCIAL.label },
          ]}
        />
      }
      story={commercialStory}
    />
  );
}
