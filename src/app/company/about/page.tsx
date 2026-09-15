import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { AboutPageContent } from "@/components/marketing/about/AboutPageContent";
import { MARKETING_PAGES } from "@/lib/marketing/pages";

const config = MARKETING_PAGES.about;

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "/company/about" },
  openGraph: {
    title: config.title,
    description: config.description,
    url: "/company/about",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function CompanyAboutPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs items={config.breadcrumbs ?? []} />
          <AboutPageContent />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
