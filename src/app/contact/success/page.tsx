import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { ContactSuccessView } from "@/components/marketing/contact/ContactSuccessView";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { MARKETING_PAGES } from "@/lib/marketing/pages";

const config = MARKETING_PAGES.contactSuccess;

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: { canonical: "/contact/success" },
  robots: { index: false, follow: true },
};

export default function ContactSuccessPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs items={config.breadcrumbs ?? []} />
          <div className="site-shell">
            <ContactSuccessView />
          </div>
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
