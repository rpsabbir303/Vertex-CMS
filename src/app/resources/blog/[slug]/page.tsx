import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { BlogDetailPage } from "@/components/marketing/resources/BlogDetailPage";
import { BlogUnavailablePage } from "@/components/marketing/resources/BlogUnavailablePage";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { getBlogBySlug, getBlogStaticParams } from "@/lib/marketing/resources/blog";
import { ROUTES } from "@/lib/marketing/navigation";

type PageProps = {
  params: { slug: string };
};

/** Unknown slugs render the unavailable state instead of a blank page. */
export const dynamicParams = true;

export function generateStaticParams() {
  return getBlogStaticParams();
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getBlogBySlug(params.slug);
  if (!article) {
    return {
      title: "Article unavailable | VertexBuild Blog",
      description: "This VertexBuild blog article is not available.",
      robots: { index: false, follow: true },
    };
  }

  const title = `${article.title} | VertexBuild Blog`;
  const description = article.description;
  const canonical = `https://www.vertexcms.com${ROUTES.resourcesBlogArticle(article.slug)}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      ...(article.image?.src
        ? { images: [{ url: article.image.src, alt: article.image.alt }] }
        : {}),
    },
    robots: { index: true, follow: true },
  };
}

function BlogDetailShell({ children }: { children: ReactNode }) {
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

export default function ResourcesBlogArticlePage({ params }: PageProps) {
  const article = getBlogBySlug(params.slug);

  if (!article) {
    return (
      <BlogDetailShell>
        <BlogUnavailablePage />
      </BlogDetailShell>
    );
  }

  return (
    <BlogDetailShell>
      <BlogDetailPage article={article} />
    </BlogDetailShell>
  );
}
