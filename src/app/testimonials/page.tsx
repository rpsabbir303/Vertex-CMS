import { TenantPageLayout } from "@/components/website/TenantPageLayout";
import { TestimonialsPageContent } from "@/components/website/pages/TestimonialsPageContent";
import { testimonialsMetadata } from "@/lib/website/pageMetadata";

export const metadata = testimonialsMetadata;

export default function TestimonialsPage() {
  return (
    <TenantPageLayout>
      <TestimonialsPageContent />
    </TenantPageLayout>
  );
}
