import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CookieConsent } from "@/components/marketing/CookieConsent";
import { ComparisonDetailPage } from "@/components/marketing/comparisons/ComparisonDetailPage";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { COMPARISON_SLUGS, getComparisonRecord } from "@/lib/marketing/comparisons/catalog";

import "../comparisons-page.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return COMPARISON_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = getComparisonRecord(slug);
  if (!record) {
    return { title: "Comparison not found | VertexBuild" };
  }

  return {
    title: record.seo.title,
    description: record.seo.description,
  };
}

export default async function ComparisonDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const record = getComparisonRecord(slug);
  if (!record) notFound();

  return (
    <MarketingProviders>
      <div className="comparisons-page-scope flex min-h-screen flex-col overflow-x-hidden bg-white text-[#000000]">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <ComparisonDetailPage record={record} />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
