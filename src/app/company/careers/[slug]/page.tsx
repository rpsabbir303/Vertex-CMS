import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CareerDetailContent } from "@/components/marketing/careers/CareerDetailContent";
import { CookieConsent } from "@/components/marketing/CookieConsent";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { getJobBySlug } from "@/lib/marketing/careers/content";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) {
    return { title: "Role Not Found | Vertex CMS", robots: { index: false, follow: false } };
  }
  return {
    title: `${job.title} | Careers | Vertex CMS`,
    description: job.description ?? `Career opportunity at Vertex CMS — ${job.title}.`,
    robots: { index: false, follow: true },
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <MarketingProviders>
      <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-brand-navy">
        <MarketingHeader />
        <main className="w-full min-w-0 flex-1">
          <Breadcrumbs
            items={[
              { label: "Home", href: ROUTES.home },
              { label: "Company", href: ROUTES.company },
              { label: "Careers", href: ROUTES.careers },
              { label: job.title },
            ]}
          />
          <CareerDetailContent job={job} />
        </main>
        <MarketingFooter />
        <CookieConsent />
      </div>
    </MarketingProviders>
  );
}
