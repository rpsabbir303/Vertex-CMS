"use client";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { SolutionStoryPage } from "@/components/marketing/solutions/shared/SolutionStoryPage";
import { ROUTES } from "@/lib/marketing/navigation";
import { SOLUTION_DETAILS } from "@/lib/marketing/solutions/data";
import { residentialStory } from "@/lib/marketing/solutions/stories";

const RESIDENTIAL = SOLUTION_DETAILS.residential;

export function ResidentialConstructionPage() {
  return (
    <SolutionStoryPage
      breadcrumbs={
        <Breadcrumbs
          items={[
            { label: "Home", href: ROUTES.home },
            { label: "Solutions", href: ROUTES.solutions },
            { label: RESIDENTIAL.label },
          ]}
        />
      }
      story={residentialStory}
    />
  );
}
