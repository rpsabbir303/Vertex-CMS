import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { JobApplicationConfirmationView } from "@/components/marketing/careers/application/JobApplicationConfirmationView";
import {
  careerApplicationConfirmationPath,
  careerDetailPath,
  getOpenJobs,
  getPublishedJobBySlug,
} from "@/lib/marketing/careers/content";
import { ROUTES } from "@/lib/marketing/navigation";

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return getOpenJobs().map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const job = getPublishedJobBySlug(params.slug);
  if (!job) {
    return { title: "Application confirmation | VertexBuild", robots: { index: false, follow: false } };
  }
  return {
    title: `Application received — ${job.title} | VertexBuild`,
    alternates: { canonical: careerApplicationConfirmationPath(job.slug) },
    robots: { index: false, follow: true },
  };
}

export default function CareerApplyConfirmationPage({ params }: PageProps) {
  const job = getPublishedJobBySlug(params.slug);
  if (!job) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: ROUTES.home },
          { label: "Company", href: ROUTES.company },
          { label: "Careers", href: ROUTES.careers },
          { label: job.title, href: careerDetailPath(job.slug) },
          { label: "Confirmation" },
        ]}
      />
      <JobApplicationConfirmationView jobSlug={job.slug} />
    </>
  );
}
