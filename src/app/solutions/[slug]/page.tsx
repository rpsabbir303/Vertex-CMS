import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { SolutionDetailPage } from "@/components/marketing/solutions/SolutionDetailPage";
import { getSolutionBySlug, SOLUTION_SLUGS, type SolutionSlug } from "@/lib/marketing/solutions/data";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) return { title: "Solution | Vertex CMS" };

  return {
    title: `${solution.label} | Vertex CMS Solutions`,
    description: solution.supporting,
    alternates: { canonical: solution.href },
    openGraph: {
      title: `${solution.label} | Vertex CMS Solutions`,
      description: solution.supporting,
      url: solution.href,
      type: "website",
    },
  };
}

export default function SolutionSlugPage({ params }: PageProps) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();

  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <SolutionDetailPage slug={params.slug as SolutionSlug} />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
