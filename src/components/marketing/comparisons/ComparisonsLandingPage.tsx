import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";

import { ROUTES } from "@/lib/marketing/navigation";

import { MARKETING_PAGES } from "@/lib/marketing/pages";



import { ComparisonsResourcePageBackground } from "./ComparisonsResourcePageBackground";

import { ComparisonsCapabilitySection } from "./ComparisonsCapabilitySection";

import { ComparisonsDirectorySection } from "./ComparisonsDirectorySection";

import { ComparisonsFrameworkSection } from "./ComparisonsFrameworkSection";

import { ComparisonsHero } from "./ComparisonsHero";

import { ComparisonsHowSection } from "./ComparisonsHowSection";

import { ComparisonsLandingCtaSection } from "./ComparisonsLandingCtaSection";

import { ComparisonsOperatingModelSection } from "./ComparisonsOperatingModelSection";

import { ComparisonsWhoSection } from "./ComparisonsWhoSection";

import { ComparisonsWhySection } from "./ComparisonsWhySection";



/** Comparison hub — `/comparisons` (CMS-1342). */

export function ComparisonsLandingPage() {

  const breadcrumbs = MARKETING_PAGES.comparisons.breadcrumbs ?? [

    { label: "Home", href: ROUTES.home },

    { label: "Comparisons" },

  ];



  return (
    <div className="comparisons-landing relative overflow-x-hidden bg-[#F5F8FC] font-sans text-[#000000]">
      <ComparisonsResourcePageBackground />

      <div className="comparisons-landing-content relative z-[1]">

        <Breadcrumbs items={breadcrumbs} />

        <ComparisonsHero />

        <ComparisonsWhySection />

        <ComparisonsDirectorySection />

        <ComparisonsFrameworkSection />

        <ComparisonsCapabilitySection />

        <ComparisonsOperatingModelSection />

        <ComparisonsWhoSection />

        <ComparisonsHowSection />

        <ComparisonsLandingCtaSection />

      </div>

    </div>

  );

}


