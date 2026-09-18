import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";

import { showCustomersProofClosingNote } from "@/lib/marketing/customers/landing";

import { ROUTES } from "@/lib/marketing/navigation";

import { CaseStudyLibraryPreview } from "./CaseStudyLibraryPreview";

import { CustomerLogoWall } from "./CustomerLogoWall";

import { CustomerOutcomePreview } from "./CustomerOutcomePreview";

import { CustomerProofPipelineStrip } from "./CustomerProofPipelineStrip";

import { CustomersFinalCta } from "./CustomersFinalCta";

import { CustomersHero } from "./CustomersHero";

import { CustomersProofClosingNote } from "./CustomersProofClosingNote";

import { FeaturedCustomerStory } from "./FeaturedCustomerStory";

import { TestimonialPreview } from "./TestimonialPreview";



export function CustomersLandingPage() {

  return (

    <div className="customers-page-canvas">

      <Breadcrumbs items={[{ label: "Home", href: ROUTES.home }, { label: "Customers" }]} />

      <CustomersHero />

      <CustomerProofPipelineStrip />

      <CustomerLogoWall />

      <FeaturedCustomerStory />

      <CaseStudyLibraryPreview />

      <TestimonialPreview />

      <CustomerOutcomePreview />

      {showCustomersProofClosingNote() ? <CustomersProofClosingNote /> : null}

      <CustomersFinalCta />

    </div>

  );

}


