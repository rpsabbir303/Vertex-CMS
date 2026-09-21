import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { ProjectManagementCategoryPage } from "@/components/marketing/features/ProjectManagementCategoryPage";
import { featureCategoryPath } from "@/lib/marketing/features/categories";
import { ROUTES } from "@/lib/marketing/navigation";

const title = "Project Management | VertexBuild Features";
const description =
  "Plan, coordinate, and control construction projects with connected workflows for projects, scheduling, documents, RFIs, submittals, and change orders in VertexBuild.";
const canonical = featureCategoryPath("project-management");

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

export default function ProjectManagementPage() {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs
            items={[
              { label: "Home", href: ROUTES.home },
              { label: "Features", href: ROUTES.features },
              { label: "Project Management" },
            ]}
          />
          <ProjectManagementCategoryPage />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
