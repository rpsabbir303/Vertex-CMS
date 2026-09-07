import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { TeamPageContent } from "@/components/marketing/team/TeamPageContent";
import { ROUTES } from "@/lib/marketing/navigation";
import { teamPageMeta } from "@/lib/marketing/team/content";

export const metadata: Metadata = {
  title: teamPageMeta.title,
  description: teamPageMeta.description,
  alternates: { canonical: teamPageMeta.canonical },
  openGraph: {
    title: teamPageMeta.title,
    description: teamPageMeta.description,
    url: teamPageMeta.canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function CompanyTeamPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs
            items={[
              { label: "Home", href: ROUTES.home },
              { label: "Company", href: ROUTES.company },
              { label: "Team" },
            ]}
          />
          <TeamPageContent />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
