import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { IntegrationDetailContent } from "@/components/marketing/integrations/IntegrationDetailContent";
import { IntegrationsExperienceFrame } from "@/components/marketing/integrations/IntegrationsExperienceFrame";
import { IntegrationsTypographyRoot } from "@/components/marketing/integrations/IntegrationsTypographyRoot";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { getAllCatalogSlugs, getIntegrationBySlug } from "@/lib/marketing/integrations/catalog";
import { ROUTES } from "@/lib/marketing/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCatalogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getIntegrationBySlug(slug);
  if (!item) {
    return { title: "Integration | Vertex CMS", robots: { index: false, follow: false } };
  }
  const suffix = item.kind === "capability" ? "Capability" : "Integration";
  const canonical = `${ROUTES.integrations}/${slug}`;
  return {
    title: `${item.name} ${suffix} | Vertex CMS`,
    description: item.shortDescription,
    alternates: { canonical },
    openGraph: {
      title: `${item.name} ${suffix} | Vertex CMS`,
      description: item.shortDescription,
      url: canonical,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function IntegrationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getIntegrationBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <IntegrationsTypographyRoot>
      <MarketingProviders>
        <IntegrationsExperienceFrame>
          <MarketingHeader />
          <main className="w-full min-w-0 flex-1">
            <IntegrationDetailContent item={item} />
          </main>
          <MarketingFooter />
          <CookieConsent />
        </IntegrationsExperienceFrame>
      </MarketingProviders>
    </IntegrationsTypographyRoot>
  );
}
