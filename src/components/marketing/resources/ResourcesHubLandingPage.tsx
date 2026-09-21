"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";
import {
  ResourcesBlogPreviewSection,
  ResourcesGuidesPreviewSection,
  ResourcesHelpPreviewSection,
  ResourcesHubCtaSection,
  ResourcesHubHero,
  ResourcesTemplatesPreviewSection,
  ResourcesWebinarsPreviewSection,
} from "./ResourcesHubSections";

export function ResourcesHubLandingPage() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: ROUTES.home }, { label: "Resources" }]} />
      <ResourcesHubHero query={query} onQueryChange={setQuery} />
      <ResourcesBlogPreviewSection />
      <ResourcesGuidesPreviewSection />
      <ResourcesTemplatesPreviewSection />
      <ResourcesWebinarsPreviewSection />
      <ResourcesHelpPreviewSection />
      <ResourcesHubCtaSection />
    </>
  );
}
