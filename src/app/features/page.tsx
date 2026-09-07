import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { FeaturesPageContent } from "@/components/marketing/features/FeaturesPageContent";
import { featuresPageMeta } from "@/lib/marketing/features/content";
import { ROUTES } from "@/lib/marketing/navigation";

export const metadata: Metadata = {
  title: featuresPageMeta.title,
  description: featuresPageMeta.description,
  alternates: { canonical: featuresPageMeta.canonical },
  openGraph: {
    title: featuresPageMeta.title,
    description: featuresPageMeta.description,
    url: featuresPageMeta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function FeaturesPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs items={[{ label: "Home", href: ROUTES.home }, { label: "Features" }]} />
          <FeaturesPageContent />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
