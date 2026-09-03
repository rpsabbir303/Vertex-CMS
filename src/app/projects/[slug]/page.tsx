import { notFound } from "next/navigation";
import { TenantPageLayout } from "@/components/website/TenantPageLayout";
import { ProjectDetailContent } from "@/components/website/pages/ProjectDetailContent";
import { projectMetadata } from "@/lib/website/pageMetadata";
import { getProjectBySlug, projects } from "@/lib/website/tenantData";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return projectMetadata(project.name);
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <TenantPageLayout>
      <ProjectDetailContent project={project} />
    </TenantPageLayout>
  );
}
