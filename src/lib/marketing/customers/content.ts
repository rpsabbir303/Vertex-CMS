import { CTAS, ROUTES } from "@/lib/marketing/navigation";



export const customersLandingMeta = {

  title: "Customers | VertexBuild",

  description:

    "Customer success stories, testimonials, and measurable outcomes from construction teams using VertexBuild — projects, financials, field, compliance, and intelligence in one platform.",

  canonical: ROUTES.customers,

};

export const caseStudiesListingMeta = {
  title: "Case Studies | VertexBuild",
  description:
    "Documented customer stories on VertexBuild — project operations, field workflows, financial management, compliance, and connected construction workflows.",
  canonical: ROUTES.customersCaseStudies,
} as const;

export const testimonialsListingMeta = {
  title: "Customer Testimonials | VertexBuild",
  description:
    "Read customer perspectives on how VertexBuild supports construction teams, connected workflows, project operations, and financial visibility.",
  canonical: ROUTES.customersTestimonials,
} as const;



export const CUSTOMERS_SECTIONS = {

  ecosystem: "customer-ecosystem",

  featuredStory: "featured-story",

  caseStudies: "case-studies",

  testimonials: "testimonials",

  results: "results",

} as const;



export type CustomersSectionId = (typeof CUSTOMERS_SECTIONS)[keyof typeof CUSTOMERS_SECTIONS];



export function customersSectionHash(sectionId: CustomersSectionId): string {

  return `#${sectionId}`;

}



/** In-page or cross-page link to a Customers landing section (never a separate listing route). */

export function customersSectionHref(sectionId: CustomersSectionId): string {

  return `${ROUTES.customers}${customersSectionHash(sectionId)}`;

}



export const CUSTOMERS_ROUTES = {

  landing: ROUTES.customers,

  caseStudiesListing: ROUTES.customersCaseStudies,

  testimonialsListing: ROUTES.customersTestimonials,

  caseStudyDetail: (slug: string) => `${ROUTES.customersCaseStudies}/${slug}`,

  ecosystem: customersSectionHref(CUSTOMERS_SECTIONS.ecosystem),

  featuredStory: customersSectionHref(CUSTOMERS_SECTIONS.featuredStory),

  /** In-page anchor on the Customers landing page */
  caseStudies: customersSectionHref(CUSTOMERS_SECTIONS.caseStudies),

  /** In-page anchor on the Customers landing page */
  testimonials: customersSectionHref(CUSTOMERS_SECTIONS.testimonials),

  results: customersSectionHref(CUSTOMERS_SECTIONS.results),

} as const;



export const CUSTOMERS_IN_PAGE_LINKS = {

  viewCaseStudies: {

    label: "View Case Studies",

    href: ROUTES.customersCaseStudies,

  },

  viewAllCaseStudies: {

    label: "View all case studies",

    href: ROUTES.customersCaseStudies,

  },

  viewAllTestimonials: {

    label: "View all testimonials",

    href: ROUTES.customersTestimonials,

  },

  exploreCaseStudies: {

    label: "Explore Case Studies",

    href: customersSectionHref(CUSTOMERS_SECTIONS.caseStudies),

  },

  exploreCustomerStories: {

    label: "Explore Customer Stories",

    href: customersSectionHref(CUSTOMERS_SECTIONS.caseStudies),

  },

} as const;



export const CUSTOMERS_LIMITED_NOTES = {

  logos: "Customer references will appear here as public approvals are completed.",

  featured: "Featured customer stories publish when approved for public reference.",

  caseStudies: "Approved case studies will list here with contractor context and outcomes.",

  testimonials: "Testimonials publish with validated name, role, and company attribution.",

  roi: "Verified metrics display when approved — never invented performance claims.",

  closing:

    "Explore the platform while approved logos, stories, quotes, and outcomes are added to this destination.",

} as const;

export const CASE_STUDY_LIMITED_NOTES = {
  unavailable:
    "This case study is not available for public reference. Approved customer stories publish on the Customers page when cleared for the marketing site.",
  outcomes: "Validated outcomes will appear here as customer evidence is approved for public reference.",
  quote: "Approved customer quotes publish when cleared for the marketing site with full attribution.",
  capabilities: "Approved capabilities used in this story will list here when documented.",
} as const;

export const CUSTOMERS_PAGE = {

  hero: {

    eyebrow: "Customer ecosystem",

    headline: "Trusted by construction teams",

    supporting:

      "Explore customer stories, experiences, and validated outcomes as they become available for public reference.",

    primaryCta: CUSTOMERS_IN_PAGE_LINKS.viewCaseStudies,

    secondaryCta: { label: CTAS.trial.label, href: CTAS.trial.href },

  },

  logos: {

    eyebrow: "Customer ecosystem",

    headline: "Trusted by construction teams",

    supporting:

      "Customer teams use VertexBuild to connect project operations, financial workflows, field activity, and business growth.",

  },

  featuredStory: {

    eyebrow: "Customer story",

    headline: "A closer look at how teams use VertexBuild",

    supporting: "Featured customer stories highlight contractor context, workflow challenges, and outcomes.",

    emptyStateCta: CUSTOMERS_IN_PAGE_LINKS.exploreCaseStudies,

  },

  caseStudies: {

    eyebrow: "Case studies",

    headline: "Explore how teams run on VertexBuild",

    supporting: "Browse customer stories by contractor and project context.",

  },

  roi: {

    eyebrow: "Measurable results",

    headline: "Documented outcomes",

    supporting: "Customer-specific results with context — not universal guarantees.",

  },

  testimonials: {

    eyebrow: "Testimonials",

    headline: "What teams share about connected workflows",

    supporting: "Quotes from customer roles publish when cleared for the marketing site with full attribution.",

  },

  finalCta: {

    headline: "See VertexBuild in action",

    supporting: "Explore the platform, talk with our team, or start a trial.",

    primary: { label: CTAS.demo.label, href: CTAS.demo.href },

    secondary: { label: CTAS.trial.label, href: CTAS.trial.href },

    tertiary: { label: "Explore Features", href: ROUTES.features },

  },

} as const;

export const CUSTOMERS_CASE_STUDIES_LISTING_PAGE = {
  hero: {
    eyebrow: "Case studies",
    headline: "See how construction teams put VertexBuild to work.",
    supporting:
      "These stories document how teams use VertexBuild across project operations, field workflows, financial management, compliance, and connected workflows — as approved for public reference.",
  },
  featured: {
    eyebrow: "Featured case study",
  },
  library: {
    headline: "All case studies",
    supporting:
      "Explore customer stories organized around documented workflows, capabilities, and outcomes.",
  },
} as const;

export const CUSTOMERS_TESTIMONIALS_LISTING_PAGE = {
  hero: {
    eyebrow: "Testimonials",
    headline: "What construction teams say about VertexBuild.",
    supporting:
      "Explore customer perspectives on how VertexBuild supports project operations, connected workflows, financial visibility, field execution, and day-to-day construction management.",
  },
  featured: {
    eyebrow: "Featured perspective",
  },
  library: {
    headline: "Customer perspectives",
    supporting:
      "Browse perspectives from construction teams across roles, workflows, and operating contexts.",
  },
  context: {
    headline: "Perspectives from the work.",
    supporting:
      "See how construction teams describe the workflows, coordination, visibility, and operational needs that matter in their day-to-day work.",
  },
} as const;



export const CUSTOMERS_PROOF_NAV = [

  { label: "Customer Ecosystem", sectionId: CUSTOMERS_SECTIONS.ecosystem },

  { label: "Featured Story", sectionId: CUSTOMERS_SECTIONS.featuredStory },

  { label: "Case Studies", sectionId: CUSTOMERS_SECTIONS.caseStudies },

  { label: "Testimonials", sectionId: CUSTOMERS_SECTIONS.testimonials },

  { label: "Results", sectionId: CUSTOMERS_SECTIONS.results },

] as const;


