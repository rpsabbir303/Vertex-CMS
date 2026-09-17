"use client";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ROUTES } from "@/lib/marketing/navigation";
import type { IntegrationRecord } from "@/lib/marketing/integrations/types";
import { IntegrationsComingSoonSection } from "./IntegrationsComingSoonSection";
import { IntegrationsDiscoverySection } from "./IntegrationsDiscoverySection";
import { IntegrationsEcosystemSection } from "./IntegrationsEcosystemSection";
import { IntegrationsFeaturedSection } from "./IntegrationsFeaturedSection";
import { IntegrationsFinalCtaSection } from "./IntegrationsFinalCtaSection";
import { IntegrationsHeroSection } from "./IntegrationsHeroSection";
import { IntegrationsHowItWorksSection } from "./IntegrationsHowItWorksSection";
import { IntegrationsLibrarySection } from "./IntegrationsLibrarySection";

type Props = {
  items: IntegrationRecord[];
};

export function IntegrationsLandingPage({ items }: Props) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: ROUTES.home }, { label: "Integrations" }]} />

      <IntegrationsHeroSection />
      <IntegrationsEcosystemSection />

      <IntegrationsDiscoverySection items={items} />

      <IntegrationsFeaturedSection items={items} />

      <IntegrationsLibrarySection items={items} />

      <IntegrationsHowItWorksSection />

      <IntegrationsComingSoonSection items={items} />

      <IntegrationsFinalCtaSection />
    </>
  );
}
