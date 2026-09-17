import type { Metadata } from "next";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { IntegrationsExperienceFrame } from "@/components/marketing/integrations/IntegrationsExperienceFrame";
import { IntegrationsLandingPage } from "@/components/marketing/integrations/IntegrationsLandingPage";
import { IntegrationsTypographyRoot } from "@/components/marketing/integrations/IntegrationsTypographyRoot";
import { INTEGRATIONS_CATALOG } from "@/lib/marketing/integrations/catalog";
import { integrationsLandingMeta } from "@/lib/marketing/integrations/data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: integrationsLandingMeta.title,
  description: integrationsLandingMeta.description,
  alternates: { canonical: integrationsLandingMeta.canonical },
  openGraph: {
    title: integrationsLandingMeta.title,
    description: integrationsLandingMeta.description,
    url: integrationsLandingMeta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IntegrationsPage() {
  const items = [...INTEGRATIONS_CATALOG];

  return (
    <IntegrationsTypographyRoot>
      <MarketingProviders>
        <IntegrationsExperienceFrame>
          <MarketingHeader />
          <main className="w-full min-w-0 flex-1">
            <IntegrationsLandingPage items={items} />
          </main>
          <MarketingFooter />
          <CookieConsent />
        </IntegrationsExperienceFrame>
      </MarketingProviders>
    </IntegrationsTypographyRoot>
  );
}
