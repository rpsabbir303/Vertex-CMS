import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CareerDetailContent } from "@/components/marketing/careers/CareerDetailContent";
import { careerDetailPath, getJobBySlug, getOpenJobs } from "@/lib/marketing/careers/content";
import { ROUTES } from "@/lib/marketing/navigation";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return getOpenJobs().map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const job = getJobBySlug(params.slug);
  if (!job) {
    return { title: "Position not found | Vertex CMS", robots: { index: false, follow: false } };
  }

  const path = careerDetailPath(job.slug);
  return {
    title: `${job.title} | Careers | Vertex CMS`,
    description: job.description ?? job.title,
    alternates: { canonical: path },
    openGraph: {
      title: `${job.title} | Careers | Vertex CMS`,
      description: job.description ?? job.title,
      url: path,
      type: "website",
    },
    robots: job.demoContent ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export default function CareerDetailPage({ params }: PageProps) {
  const job = getJobBySlug(params.slug) ?? null;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Company", href: ROUTES.company },
          { label: "Careers", href: ROUTES.careers },
          ...(job ? [{ label: job.title }] : []),
        ]}
      />
      <CareerDetailContent job={job} />
    </>
  );
}
