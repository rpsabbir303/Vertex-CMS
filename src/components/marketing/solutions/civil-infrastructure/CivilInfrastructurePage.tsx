"use client";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { SolutionStoryPage } from "@/components/marketing/solutions/shared/SolutionStoryPage";
import { ROUTES } from "@/lib/marketing/navigation";
import { SOLUTION_DETAILS } from "@/lib/marketing/solutions/data";
import { civilInfrastructureStory } from "@/lib/marketing/solutions/stories";

const CIVIL = SOLUTION_DETAILS.civil;

export function CivilInfrastructurePage() {
  return (
    <SolutionStoryPage
      breadcrumbs={
        <Breadcrumbs
          items={[
            { label: "Home", href: ROUTES.home },
            { label: "Solutions", href: ROUTES.solutions },
            { label: CIVIL.label },
          ]}
        />
      }
      story={civilInfrastructureStory}
    />
  );
}
