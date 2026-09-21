import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { TemplateDetailPage } from "@/components/marketing/resources/TemplateDetailPage";
import { TemplateUnavailablePage } from "@/components/marketing/resources/TemplateUnavailablePage";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { getTemplateBySlug, getTemplateStaticParams } from "@/lib/marketing/resources/template";
import { ROUTES } from "@/lib/marketing/navigation";

type PageProps = { params: { slug: string } };

export const dynamicParams = true;

export function generateStaticParams() {
  return getTemplateStaticParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  const template = getTemplateBySlug(params.slug);
  if (!template) {
    return {
      title: "Template unavailable | VertexBuild",
      description: "This VertexBuild template is not available.",
      robots: { index: false, follow: true },
    };
  }
  const title = `${template.title} | VertexBuild Templates`;
  const canonical = `https://www.vertexcms.com${ROUTES.resourcesTemplateArticle(template.slug)}`;
  return {
    title,
    description: template.description,
    alternates: { canonical },
    openGraph: { title, description: template.description, url: canonical, type: "article" },
    robots: { index: true, follow: true },
  };
}

function TemplateDetailShell({ children }: { children: ReactNode }) {
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

export default function ResourcesTemplateArticlePage({ params }: PageProps) {
  const template = getTemplateBySlug(params.slug);
  if (!template) {
    return (
      <TemplateDetailShell>
        <TemplateUnavailablePage />
      </TemplateDetailShell>
    );
  }
  return (
    <TemplateDetailShell>
      <TemplateDetailPage template={template} />
    </TemplateDetailShell>
  );
}
