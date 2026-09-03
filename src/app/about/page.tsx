import { TenantPageLayout } from "@/components/website/TenantPageLayout";
import { AboutPageContent } from "@/components/website/pages/AboutPageContent";
import { aboutMetadata } from "@/lib/website/pageMetadata";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <TenantPageLayout>
      <AboutPageContent />
    </TenantPageLayout>
  );
}
