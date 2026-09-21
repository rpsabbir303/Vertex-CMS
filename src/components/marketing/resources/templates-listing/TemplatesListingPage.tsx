import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { MARKETING_PAGES } from "@/lib/marketing/pages";
import { ROUTES } from "@/lib/marketing/navigation";
import { getFeaturedTemplate, getTemplateListingSections } from "@/lib/marketing/resources/template";
import { RESOURCES_HUB } from "@/lib/marketing/resources/content";

import { BlogDetailCtaSection } from "../blog-detail/BlogDetailCtaSection";
import { TemplateAbstractSystem } from "./TemplateAbstractSystem";
import { FeaturedTemplate } from "./FeaturedTemplate";
import { TemplatesExploreSection } from "./TemplatesExploreSection";
import { TemplatesHero } from "./TemplatesHero";
import { TemplatesRelatedConnection } from "./TemplatesRelatedConnection";

/** Single Templates library — `/resources/templates` (sections are in-page only). */
export function TemplatesListingPage() {
  const featured = getFeaturedTemplate();
  const sections = getTemplateListingSections();
  const breadcrumbs = MARKETING_PAGES.resourcesTemplates.breadcrumbs ?? [
    { label: "Home", href: ROUTES.home },
    { label: "Resources", href: ROUTES.resources },
    { label: "Templates" },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-brand-navy">
      <TemplateAbstractSystem />
      <div className="relative z-[1]">
        <Breadcrumbs items={breadcrumbs} />
        <TemplatesHero />
        {featured ? <FeaturedTemplate template={featured} /> : null}
        <TemplatesExploreSection sections={sections} />
        <TemplatesRelatedConnection />
        <BlogDetailCtaSection />
        <p className="sr-only">
          Next steps: {RESOURCES_HUB.cta.primary.label}, {RESOURCES_HUB.cta.secondary.label}.
        </p>
      </div>
    </div>
  );
}
