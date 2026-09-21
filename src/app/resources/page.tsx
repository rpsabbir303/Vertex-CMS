import type { Metadata } from "next";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { ResourcesHubLandingPage } from "@/components/marketing/resources/ResourcesHubLandingPage";
import { resourcesLandingMeta } from "@/lib/marketing/resources/content";

export const metadata: Metadata = {
  title: resourcesLandingMeta.title,
  description: resourcesLandingMeta.description,
  alternates: { canonical: resourcesLandingMeta.canonical },
  openGraph: {
    title: resourcesLandingMeta.title,
    description: resourcesLandingMeta.description,
    url: resourcesLandingMeta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ResourcesPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <ResourcesHubLandingPage />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
