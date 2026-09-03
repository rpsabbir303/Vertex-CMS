import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import {
  HomeHero,
  HomeProblem,
  HomeEcosystem,
  CapabilitiesSection,
  HomeProjectControl,
  HomeAI,
  HomeFinancial,
  HomeFieldSync,
  HomeLifecycle,
  HomeImpact,
  HomeProductTour,
  HomeSolutions,
  HomeSocialProof,
  HomeFAQ,
  HomeFinalCTA,
} from "@/components/marketing/home";
import { marketingContent } from "@/lib/marketing/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: marketingContent.en.meta.title,
  description: marketingContent.en.meta.description,
  openGraph: {
    title: marketingContent.en.meta.title,
    description: marketingContent.en.meta.description,
    type: "website",
  },
};

export default function SaaSHomePage() {
  return (
    <MarketingProviders>
      <div className="home-os min-h-screen w-full overflow-x-hidden">
        <MarketingHeader variant="dark" />
        <main className="w-full">
          <HomeHero />
          <HomeProblem />
          <HomeEcosystem />
          <CapabilitiesSection />
          <HomeProjectControl />
          <HomeAI />
          <HomeFinancial />
          <HomeFieldSync />
          <HomeLifecycle />
          <HomeImpact />
          <HomeProductTour />
          <HomeSolutions />
          <HomeSocialProof />
          <HomeFAQ />
          <HomeFinalCTA />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
