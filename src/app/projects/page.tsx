import { TenantPageLayout } from "@/components/website/TenantPageLayout";
import { ProjectsPageContent } from "@/components/website/pages/ProjectsPageContent";
import { projectsMetadata } from "@/lib/website/pageMetadata";

export const metadata = projectsMetadata;

export default function ProjectsPage() {
  return (
    <TenantPageLayout>
      <ProjectsPageContent />
    </TenantPageLayout>
  );
}
