import type { Metadata } from "next";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { DocumentationDetailPage } from "@/components/marketing/resources/DocumentationDetailPage";
import { HelpDocUnavailablePage } from "@/components/marketing/resources/HelpDocUnavailablePage";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { getHelpCenterStaticParams, getHelpDocBySlug, getHelpDocCategoryByRouteSlug, helpCategoryLandingHref } from "@/lib/marketing/resources/help";
import { ROUTES } from "@/lib/marketing/navigation";

type PageProps = { params: { slug: string } };

export const dynamicParams = true;

export function generateStaticParams() {
  return getHelpCenterStaticParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  const doc = getHelpDocBySlug(params.slug);
  if (!doc) {
    return {
      title: "Documentation unavailable | VertexBuild Help Center",
      description: "This Help Center entry is not available.",
      robots: { index: false, follow: true },
    };
  }
  const title = `${doc.title} | VertexBuild Help Center`;
  const canonical = `https://www.vertexcms.com${ROUTES.resourcesHelpArticle(doc.slug)}`;
  return {
    title,
    description: doc.description,
    alternates: { canonical },
    openGraph: { title, description: doc.description, url: canonical, type: "article" },
    robots: { index: true, follow: true },
  };
}

function HelpDocDetailShell({ children }: { children: ReactNode }) {
  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">{children}</main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}

export default function ResourcesHelpDocPage({ params }: PageProps) {
  const category = getHelpDocCategoryByRouteSlug(params.slug);
  if (category) {
    redirect(helpCategoryLandingHref(category.categoryId));
  }

  const doc = getHelpDocBySlug(params.slug);
  if (!doc) {
    return (
      <HelpDocDetailShell>
        <HelpDocUnavailablePage />
      </HelpDocDetailShell>
    );
  }
  return (
    <HelpDocDetailShell>
      <DocumentationDetailPage document={doc} />
    </HelpDocDetailShell>
  );
}
