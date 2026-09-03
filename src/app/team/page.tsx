import { TenantPageLayout } from "@/components/website/TenantPageLayout";
import { TeamPageContent } from "@/components/website/pages/TeamPageContent";
import { teamMetadata } from "@/lib/website/pageMetadata";

export const metadata = teamMetadata;

export default function TeamPage() {
  return (
    <TenantPageLayout>
      <TeamPageContent />
    </TenantPageLayout>
  );
}
