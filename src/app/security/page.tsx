import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { SecurityPageContent } from "@/components/marketing/security/SecurityPageContent";
import { ROUTES } from "@/lib/marketing/navigation";
import { securityPageMeta } from "@/lib/marketing/security/content";

export const metadata: Metadata = {
  title: securityPageMeta.title,
  description: securityPageMeta.description,
  alternates: { canonical: securityPageMeta.canonical },
  openGraph: {
    title: securityPageMeta.title,
    description: securityPageMeta.description,
    url: securityPageMeta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function SecurityPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs
            items={[
              { label: "Home", href: ROUTES.home },
              { label: "Security & Trust" },
            ]}
          />
          <SecurityPageContent />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
