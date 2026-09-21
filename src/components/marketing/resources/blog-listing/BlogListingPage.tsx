import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { MARKETING_PAGES } from "@/lib/marketing/pages";
import { ROUTES } from "@/lib/marketing/navigation";
import { RESOURCES_HUB } from "@/lib/marketing/resources/content";

import { BlogDetailCtaSection } from "../blog-detail/BlogDetailCtaSection";
import { ResourcesBlogPreviewSection } from "../ResourcesHubSections";

/** Blog library — `/resources/blog` (same catalog presentation as the hub blog block). */
export function BlogListingPage() {
  const breadcrumbs = MARKETING_PAGES.resourcesBlog.breadcrumbs ?? [
    { label: "Home", href: ROUTES.home },
    { label: "Resources", href: ROUTES.resources },
    { label: "Blog" },
  ];

  return (
    <div className="relative overflow-x-hidden bg-white font-sans text-brand-navy">
      <Breadcrumbs items={breadcrumbs} />
      <ResourcesBlogPreviewSection />
      <BlogDetailCtaSection />
      <p className="sr-only">
        Next steps: {RESOURCES_HUB.cta.primary.label}, {RESOURCES_HUB.cta.secondary.label}.
      </p>
    </div>
  );
}
