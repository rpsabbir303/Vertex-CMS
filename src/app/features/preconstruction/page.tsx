import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { PreconstructionCategoryPage } from "@/components/marketing/features/PreconstructionCategoryPage";
import { featureCategoryPath } from "@/lib/marketing/features/categories";
import { ROUTES } from "@/lib/marketing/navigation";

const title = "Preconstruction | VertexBuild Features";
const description =
  "Win the right work at the right price with VertexBuild estimating, bid management, quantity takeoff, and opportunity pipeline workflows.";
const canonical = featureCategoryPath("preconstruction");

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PreconstructionPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs
            items={[
              { label: "Home", href: ROUTES.home },
              { label: "Features", href: ROUTES.features },
              { label: "Preconstruction" },
            ]}
          />
          <PreconstructionCategoryPage />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
