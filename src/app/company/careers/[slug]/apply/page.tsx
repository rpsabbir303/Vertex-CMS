import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { JobApplicationView } from "@/components/marketing/careers/application/JobApplicationView";
import {
  careerApplicationPath,
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
    return { title: "Apply | Careers | VertexBuild", robots: { index: false, follow: false } };
  }
  const path = careerApplicationPath(job.slug);
  return {
    title: `Apply — ${job.title} | Careers | VertexBuild`,
    description: `Apply for ${job.title} at VertexBuild.`,
    alternates: { canonical: path },
    robots: { index: false, follow: true },
  };
}

export default function CareerApplyPage({ params }: PageProps) {
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
          { label: "Apply" },
        ]}
      />
      <JobApplicationView job={job} />
    </>
  );
}
