import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { MARKETING_PAGES } from "@/lib/marketing/pages";
import { ROUTES } from "@/lib/marketing/navigation";
import { getFeaturedGuide, getGuideListingSections } from "@/lib/marketing/resources/guide";
import { RESOURCES_HUB } from "@/lib/marketing/resources/content";

import { BlogDetailCtaSection } from "../blog-detail/BlogDetailCtaSection";
import { GuideAbstractSystem } from "./GuideAbstractSystem";
import { GuideCategorySection } from "./GuideCategorySection";
import { FeaturedGuide } from "./FeaturedGuide";
import { GuidesHero } from "./GuidesHero";
import { GuidesRelatedConnection } from "./GuidesRelatedConnection";

/** Single Guides library page — `/resources/guides` (sections are in-page only, not routes). */
export function GuidesListingPage() {
  const featured = getFeaturedGuide();
  const sections = getGuideListingSections();
  const breadcrumbs = MARKETING_PAGES.resourcesGuides.breadcrumbs ?? [
    { label: "Home", href: ROUTES.home },
    { label: "Resources", href: ROUTES.resources },
    { label: "Guides" },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-brand-navy">
      <GuideAbstractSystem />

      <div className="relative z-[1]">
        <Breadcrumbs items={breadcrumbs} />
        <GuidesHero />
        {featured ? <FeaturedGuide guide={featured} /> : null}
        {sections.map((section) => (
          <GuideCategorySection key={section.id} section={section} />
        ))}
        <GuidesRelatedConnection />
        <BlogDetailCtaSection />
        <p className="sr-only">
          Next steps: {RESOURCES_HUB.cta.primary.label}, {RESOURCES_HUB.cta.secondary.label}.
        </p>
      </div>
    </div>
  );
}
