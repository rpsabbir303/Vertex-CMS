import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { GuideDetailPage } from "@/components/marketing/resources/GuideDetailPage";
import { GuideUnavailablePage } from "@/components/marketing/resources/GuideUnavailablePage";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { getGuideBySlug, getGuideStaticParams } from "@/lib/marketing/resources/guide";
import { ROUTES } from "@/lib/marketing/navigation";

type PageProps = {
  params: { slug: string };
};

export const dynamicParams = true;

export function generateStaticParams() {
  return getGuideStaticParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    return {
      title: "Guide unavailable | VertexBuild",
      description: "This VertexBuild guide is not available.",
      robots: { index: false, follow: true },
    };
  }

  const title = `${guide.title} | VertexBuild Guides`;
  const description = guide.description;
  const canonical = `https://www.vertexcms.com${ROUTES.resourcesGuideArticle(guide.slug)}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      ...(guide.image?.src ? { images: [{ url: guide.image.src, alt: guide.image.alt }] } : {}),
    },
    robots: { index: true, follow: true },
  };
}

function GuideDetailShell({ children }: { children: ReactNode }) {
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

export default function ResourcesGuideArticlePage({ params }: PageProps) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return (
      <GuideDetailShell>
        <GuideUnavailablePage />
      </GuideDetailShell>
    );
  }

  return (
    <GuideDetailShell>
      <GuideDetailPage guide={guide} />
    </GuideDetailShell>
  );
}
