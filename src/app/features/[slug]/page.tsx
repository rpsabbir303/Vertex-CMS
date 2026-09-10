import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { FeatureDetailContent } from "@/components/marketing/features/FeatureDetailContent";
import {
  FEATURE_AREA_DETAILS,
  LEGACY_FEATURE_SLUG_REDIRECTS,
  getFeatureAreaBySlug,
} from "@/lib/marketing/features/featureAreas";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return FEATURE_AREA_DETAILS.filter(
    (feature) =>
      feature.slug !== "projects" &&
      feature.slug !== "scheduling" &&
      feature.slug !== "rfis" &&
      feature.slug !== "submittals" &&
      feature.slug !== "change-orders" &&
      feature.slug !== "budget-job-cost" &&
      feature.slug !== "native-accounting" &&
      feature.slug !== "billing" &&
      feature.slug !== "aia-pay-applications" &&
      feature.slug !== "wip" &&
      feature.slug !== "cash-flow" &&
      feature.slug !== "documents" &&
      feature.slug !== "daily-logs" &&
      feature.slug !== "drawings" &&
      feature.slug !== "punch" &&
      feature.slug !== "t-and-m" &&
      feature.slug !== "safety" &&
      feature.slug !== "mobile"
  ).map((feature) => ({
    slug: feature.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const legacy = LEGACY_FEATURE_SLUG_REDIRECTS[params.slug];
  if (legacy) {
    return { title: "Features | Vertex CMS" };
  }

  const feature = getFeatureAreaBySlug(params.slug);
  if (!feature) return { title: "Feature | Vertex CMS" };

  return {
    title: `${feature.label} | Vertex CMS Features`,
    description: feature.description,
    alternates: { canonical: `/features/${feature.slug}` },
    openGraph: {
      title: `${feature.label} | Vertex CMS Features`,
      description: feature.description,
      url: `/features/${feature.slug}`,
      type: "website",
    },
  };
}

export default function FeatureDetailPage({ params }: PageProps) {
  const legacy = LEGACY_FEATURE_SLUG_REDIRECTS[params.slug];
  if (legacy) {
    redirect(legacy);
  }

  const feature = getFeatureAreaBySlug(params.slug);
  if (!feature) notFound();

  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <FeatureDetailContent feature={feature} />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
