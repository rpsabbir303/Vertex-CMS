import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { MARKETING_PAGES } from "@/lib/marketing/pages";
import { ROUTES } from "@/lib/marketing/navigation";
import { getWebinarArticles } from "@/lib/marketing/resources/webinar";
import { RESOURCES_HUB } from "@/lib/marketing/resources/content";

import { WebinarAbstractSystem } from "./WebinarAbstractSystem";
import { WebinarLibrarySection } from "./WebinarLibrarySection";
import { WebinarsHero } from "./WebinarsHero";
import { WebinarsListingCtaSection } from "./WebinarsListingCtaSection";
import { WebinarsRelatedConnection } from "./WebinarsRelatedConnection";

/** Single Webinars library — `/resources/webinars` (sections are in-page only). */
export function WebinarsListingPage() {
  const allWebinars = getWebinarArticles();

  const breadcrumbs = MARKETING_PAGES.resourcesWebinars.breadcrumbs ?? [
    { label: "Home", href: ROUTES.home },
    { label: "Resources", href: ROUTES.resources },
    { label: "Webinars" },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-[#000000]">
      <WebinarAbstractSystem />
      <div className="relative z-[1]">
        <Breadcrumbs items={breadcrumbs} />
        <WebinarsHero />
        <WebinarLibrarySection webinars={allWebinars} catalogHasWebinars={allWebinars.length > 0} />
        <WebinarsRelatedConnection />
        <WebinarsListingCtaSection />
        <p className="sr-only">
          Next steps: {RESOURCES_HUB.cta.primary.label}, {RESOURCES_HUB.cta.secondary.label}.
        </p>
      </div>
    </div>
  );
}
