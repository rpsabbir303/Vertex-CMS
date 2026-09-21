import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { MARKETING_PAGES } from "@/lib/marketing/pages";
import { ROUTES } from "@/lib/marketing/navigation";
import { getFeaturedWebinar, getWebinarListingGroups } from "@/lib/marketing/resources/webinar";
import { RESOURCES_HUB } from "@/lib/marketing/resources/content";

import { BlogDetailCtaSection } from "../blog-detail/BlogDetailCtaSection";
import { WebinarAbstractSystem } from "./WebinarAbstractSystem";
import { FeaturedWebinar } from "./FeaturedWebinar";
import { WebinarsExploreSection } from "./WebinarsExploreSection";
import { WebinarsHero } from "./WebinarsHero";
import { WebinarsRelatedConnection } from "./WebinarsRelatedConnection";

/** Single Webinars library — `/resources/webinars` (sections are in-page only). */
export function WebinarsListingPage() {
  const featured = getFeaturedWebinar();
  const groups = getWebinarListingGroups();
  const breadcrumbs = MARKETING_PAGES.resourcesWebinars.breadcrumbs ?? [
    { label: "Home", href: ROUTES.home },
    { label: "Resources", href: ROUTES.resources },
    { label: "Webinars" },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-brand-navy">
      <WebinarAbstractSystem />
      <div className="relative z-[1]">
        <Breadcrumbs items={breadcrumbs} />
        <WebinarsHero />
        {featured ? <FeaturedWebinar webinar={featured} /> : null}
        <WebinarsExploreSection groups={groups} />
        <WebinarsRelatedConnection />
        <BlogDetailCtaSection />
        <p className="sr-only">
          Next steps: {RESOURCES_HUB.cta.primary.label}, {RESOURCES_HUB.cta.secondary.label}.
        </p>
      </div>
    </div>
  );
}
