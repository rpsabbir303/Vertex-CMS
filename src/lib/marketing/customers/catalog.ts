import { CUSTOMERS_DEMO_DATA } from "./customersDemoData";

import { CUSTOMERS_PROOF_STATE, isCustomersDemoMode, isCustomersEmptyMode } from "./proofState";

import type {
  CaseStudyRecord,
  CustomerLogo,
  CustomerTestimonialRecord,
  HeroEcosystemCustomer,
  RoiMetricRecord,
} from "./types";



/** Approved production customer logos — empty until partnerships clear public reference. */

export const CUSTOMER_LOGOS: CustomerLogo[] = [];



/** Approved production case studies. */

export const CASE_STUDIES: CaseStudyRecord[] = [];



/** Approved production testimonials. */

export const CUSTOMER_TESTIMONIALS: CustomerTestimonialRecord[] = [];



/** Verified production ROI metrics. */

export const ROI_METRICS: RoiMetricRecord[] = [];



function resolveLogos(): CustomerLogo[] {

  if (isCustomersDemoMode()) return [...CUSTOMERS_DEMO_DATA.logos];

  if (isCustomersEmptyMode()) return [];

  return CUSTOMER_LOGOS.filter((logo) => Boolean(logo.src || logo.wordmarkLines) && !logo.isDemo);

}



function resolveCaseStudies(): CaseStudyRecord[] {

  if (isCustomersDemoMode()) return [...CUSTOMERS_DEMO_DATA.caseStudies];

  if (isCustomersEmptyMode()) return [];

  return CASE_STUDIES;

}



function resolveTestimonials(): CustomerTestimonialRecord[] {

  if (isCustomersDemoMode()) return [...CUSTOMERS_DEMO_DATA.testimonials];

  if (isCustomersEmptyMode()) return [];

  return CUSTOMER_TESTIMONIALS;

}



function resolveMetrics(): RoiMetricRecord[] {

  if (isCustomersDemoMode()) return [...CUSTOMERS_DEMO_DATA.metrics];

  if (isCustomersEmptyMode()) return [];

  return ROI_METRICS;

}



export function getCustomerLogoWall(): CustomerLogo[] {

  return resolveLogos();

}



export function getHeroEcosystemCustomers(): HeroEcosystemCustomer[] {

  if (isCustomersDemoMode()) return [...CUSTOMERS_DEMO_DATA.heroEcosystemCustomers];

  return [];

}



export function hasApprovedLogos(): boolean {

  return getCustomerLogoWall().length > 0;

}



export function hasCaseStudies(): boolean {

  return resolveCaseStudies().length > 0;

}



export function hasTestimonials(): boolean {

  return resolveTestimonials().length > 0;

}



export function hasRoiMetrics(): boolean {

  return resolveMetrics().length > 0;

}



export function getCaseStudiesCatalog(): CaseStudyRecord[] {

  return resolveCaseStudies();

}



export function getTestimonialsCatalog(): CustomerTestimonialRecord[] {

  return resolveTestimonials();

}



export function getRoiMetricsCatalog(): RoiMetricRecord[] {

  return resolveMetrics();

}



export function getFeaturedCaseStudy(): CaseStudyRecord | undefined {

  const studies = resolveCaseStudies();

  return studies.find((s) => s.featured) ?? studies[0];

}



export function getCaseStudyPreviews(limit = 6): CaseStudyRecord[] {

  const featured = getFeaturedCaseStudy();

  return resolveCaseStudies()

    .filter((s) => s.slug !== featured?.slug)

    .slice(0, limit);

}



export function getCaseStudyBySlug(slug: string): CaseStudyRecord | undefined {

  return resolveCaseStudies().find((s) => s.slug === slug);

}

export function getCaseStudyByCustomerName(customerName: string): CaseStudyRecord | undefined {
  return resolveCaseStudies().find((s) => s.customerName === customerName);
}

export type CaseStudyLibraryFilters = {
  contractorType?: string;
  projectType?: string;
  capability?: string;
  query?: string;
};

export function getCaseStudyCapabilityFilters(): string[] {
  const names = new Set<string>();
  for (const study of resolveCaseStudies()) {
    study.capabilities?.forEach((cap) => names.add(cap.name));
  }
  return Array.from(names).sort();
}

function matchesCaseStudyQuery(study: CaseStudyRecord, rawQuery: string): boolean {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return true;
  const haystack = [
    study.customerName,
    study.contractorType,
    study.projectType ?? "",
    study.headline,
    study.summary,
    study.outcome ?? "",
    ...(study.capabilities?.map((c) => c.name) ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

export function filterCaseStudies(
  studies: CaseStudyRecord[],
  filters: CaseStudyLibraryFilters,
): CaseStudyRecord[] {
  return studies.filter((study) => {
    if (filters.contractorType && filters.contractorType !== "all" && study.contractorType !== filters.contractorType) {
      return false;
    }
    if (filters.projectType && filters.projectType !== "all" && study.projectType !== filters.projectType) {
      return false;
    }
    if (filters.capability && filters.capability !== "all") {
      const hasCap = study.capabilities?.some((c) => c.name === filters.capability);
      if (!hasCap) return false;
    }
    if (!matchesCaseStudyQuery(study, filters.query ?? "")) {
      return false;
    }
    return true;
  });
}

/** Full catalog in default order — listing UI filters client-side and may badge the featured slug in-grid. */
export function getCaseStudiesListingGrid(): CaseStudyRecord[] {
  return resolveCaseStudies();
}



export function getRelatedCaseStudies(slug: string, limit = 3): CaseStudyRecord[] {

  return resolveCaseStudies().filter((s) => s.slug !== slug).slice(0, limit);

}



export function getTestimonialForCustomer(companyName: string): CustomerTestimonialRecord | undefined {

  return resolveTestimonials().find((t) => t.company === companyName);

}



export function getMetricsForCustomer(companyName: string): RoiMetricRecord[] {

  return resolveMetrics().filter((m) => m.customerName === companyName);

}



export function getFeaturedTestimonial(): CustomerTestimonialRecord | undefined {

  return resolveTestimonials()[0];

}

const DEMO_TESTIMONIAL_AVATARS = [
  "/marketing/team/demo/team-demo-nathan-brooks.png",
  "/marketing/team/demo/team-demo-priya-raman.png",
  "/marketing/team/demo/team-demo-amara-bennett.png",
];

/** Hero image for featured testimonial — record override, then linked case study. */
export function getTestimonialHeroImage(
  testimonial: CustomerTestimonialRecord,
): { src: string; alt: string } | null {
  const direct = testimonial.imageSrc?.trim();
  if (direct) {
    return {
      src: direct,
      alt: testimonial.imageAlt?.trim() || `${testimonial.company} project`,
    };
  }
  const study = getCaseStudyByCustomerName(testimonial.company);
  const studySrc = study?.imageSrc?.trim();
  if (study && studySrc) {
    return {
      src: studySrc,
      alt: study.imageAlt?.trim() || `${testimonial.company} project context`,
    };
  }
  return null;
}

/** Demo portrait pool when no approved avatar is configured on the record. */
export function getTestimonialAvatarSrc(testimonial: CustomerTestimonialRecord, index: number): string {
  const configured = testimonial.avatarSrc?.trim();
  if (configured) return configured;
  return DEMO_TESTIMONIAL_AVATARS[index % DEMO_TESTIMONIAL_AVATARS.length];
}

/** Optional context from an existing case study record — never invented. */
export function getTestimonialContextMetadata(
  testimonial: CustomerTestimonialRecord,
): { contractorType?: string; projectType?: string } {
  const study = getCaseStudyByCustomerName(testimonial.company);
  if (!study) return {};
  return {
    contractorType: study.contractorType,
    projectType: study.projectType,
  };
}



export function getContractorTypes(): string[] {

  const types = new Set(resolveCaseStudies().map((s) => s.contractorType).filter(Boolean));

  return Array.from(types).sort();

}



export function getProjectTypes(): string[] {

  const types = new Set(resolveCaseStudies().map((s) => s.projectType).filter(Boolean) as string[]);

  return Array.from(types).sort();

}



export function customersInPreLaunchMode(): boolean {

  if (isCustomersDemoMode()) return false;

  return !hasCaseStudies() && !hasApprovedLogos() && !hasTestimonials() && !hasRoiMetrics();

}



export function getCustomersProofStateLabel(): string {

  return CUSTOMERS_PROOF_STATE;

}


