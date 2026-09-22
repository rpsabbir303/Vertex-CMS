"use client";

import { MARKETING_PAGES } from "@/lib/marketing/pages";

import { AIWorkflowTour } from "./AIWorkflowTour";
import { DemoPlayer } from "./DemoPlayer";
import { FieldWorkflowTour } from "./FieldWorkflowTour";
import { FinancialWorkflowTour } from "./FinancialWorkflowTour";
import { PlatformWalkthrough } from "./PlatformWalkthrough";
import { ProductTourHero } from "./ProductTourHero";
import { ProductTourProvider } from "./ProductTourContext";
import { TourCTA } from "./TourCTA";
import { TourNavigation } from "./TourNavigation";

export function ProductTourPage() {
  const breadcrumbs = MARKETING_PAGES.productTour.breadcrumbs ?? [{ label: "Home", href: "/" }, { label: "Product Tour" }];

  return (
    <ProductTourProvider>
      <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-black">
        <ProductTourHero breadcrumbs={breadcrumbs} />
        <TourNavigation />
        <PlatformWalkthrough />
        <FinancialWorkflowTour />
        <FieldWorkflowTour />
        <AIWorkflowTour />
        <DemoPlayer />
        <TourCTA />
      </div>
    </ProductTourProvider>
  );
}
