import { TenantPageLayout } from "@/components/website/TenantPageLayout";
import { CertificationsPageContent } from "@/components/website/pages/CertificationsPageContent";
import { certificationsMetadata } from "@/lib/website/pageMetadata";

export const metadata = certificationsMetadata;

export default function CertificationsPage() {
  return (
    <TenantPageLayout>
      <CertificationsPageContent />
    </TenantPageLayout>
  );
}
