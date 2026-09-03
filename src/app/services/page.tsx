import { TenantPageLayout } from "@/components/website/TenantPageLayout";
import { ServicesPageContent } from "@/components/website/pages/ServicesPageContent";
import { servicesMetadata } from "@/lib/website/pageMetadata";

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <TenantPageLayout>
      <ServicesPageContent />
    </TenantPageLayout>
  );
}
