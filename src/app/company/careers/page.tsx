import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { CareersPageContent } from "@/components/marketing/careers/CareersPageContent";
import { ROUTES } from "@/lib/marketing/navigation";
import { careersPageMeta } from "@/lib/marketing/careers/content";

export const metadata: Metadata = {
  title: careersPageMeta.title,
  description: careersPageMeta.description,
  alternates: { canonical: careersPageMeta.canonical },
  openGraph: {
    title: careersPageMeta.title,
    description: careersPageMeta.description,
    url: careersPageMeta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function CompanyCareersPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs
            items={[
              { label: "Home", href: ROUTES.home },
              { label: "Company", href: ROUTES.company },
              { label: "Careers" },
            ]}
          />
          <CareersPageContent />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
