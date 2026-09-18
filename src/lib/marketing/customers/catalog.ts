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


