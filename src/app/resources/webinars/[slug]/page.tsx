import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { WebinarDetailPage } from "@/components/marketing/resources/WebinarDetailPage";
import { WebinarUnavailablePage } from "@/components/marketing/resources/WebinarUnavailablePage";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { getWebinarBySlug, getWebinarStaticParams } from "@/lib/marketing/resources/webinar";
import { ROUTES } from "@/lib/marketing/navigation";

type PageProps = { params: { slug: string } };

export const dynamicParams = true;

export function generateStaticParams() {
  return getWebinarStaticParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  const webinar = getWebinarBySlug(params.slug);
  if (!webinar) {
    return {
      title: "Webinar unavailable | VertexBuild",
      description: "This VertexBuild webinar is not available.",
      robots: { index: false, follow: true },
    };
  }
  const title = `${webinar.title} | VertexBuild Webinars`;
  const canonical = `https://www.vertexcms.com${ROUTES.resourcesWebinarArticle(webinar.slug)}`;
  return {
    title,
    description: webinar.description,
    alternates: { canonical },
    openGraph: { title, description: webinar.description, url: canonical, type: "article" },
    robots: { index: true, follow: true },
  };
}

function WebinarDetailShell({ children }: { children: ReactNode }) {
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

export default function ResourcesWebinarArticlePage({ params }: PageProps) {
  const webinar = getWebinarBySlug(params.slug);
  if (!webinar) {
    return (
      <WebinarDetailShell>
        <WebinarUnavailablePage />
      </WebinarDetailShell>
    );
  }
  return (
    <WebinarDetailShell>
      <WebinarDetailPage webinar={webinar} />
    </WebinarDetailShell>
  );
}
