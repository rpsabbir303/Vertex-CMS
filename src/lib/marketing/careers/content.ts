/**
 * Vertex CMS SaaS Careers listing — job data layer.
 *
 * RULES:
 * - Do NOT invent real vacancies, benefits, offices, or culture claims.
 * - Set `useDemoJobs: false` and populate `careersJobs` when approved openings exist.
 */

export type CareerJobStatus = "open" | "closed" | "draft";

export type CareerJob = {
  id: string;
  slug: string;
  title: string;
  team?: string;
  location?: string;
  workArrangement?: string;
  employmentType?: string;
  description?: string;
  requirements?: string[];
  applicationUrl?: string;
  status: CareerJobStatus;
  /** Sample listing for UI review — not a real opening */
  demoContent?: boolean;
};

/** Set demo flags to false when Vertex publishes approved careers content. */
export const careersConfig = {
  /** Sample listings for UI review — not real openings. */
  useDemoJobs: true,
  /** Employer/culture copy for UI review — not approved company policy. */
  useDemoCultureContent: true,
};

export const careersPageMeta = {
  title: "Careers | Vertex CMS",
  description:
    "Join Vertex CMS — build construction management software that connects projects, financials, field operations, and intelligence.",
  canonical: "/company/careers",
};

/** Approved open roles — empty until Vertex publishes real listings. */
export const careersJobs: CareerJob[] = [];

/** Demo listings for UI review only — not real hiring opportunities. */
export const careersDemoJobs: CareerJob[] = [
  {
    id: "demo-product-designer",
    slug: "senior-product-designer",
    title: "Senior Product Designer",
    team: "Product",
    employmentType: "Full-time",
    description: "Shape product experiences across the Vertex CMS platform.",
    status: "open",
    demoContent: true,
  },
  {
    id: "demo-platform-engineer",
    slug: "platform-engineer",
    title: "Platform Engineer",
    team: "Engineering",
    employmentType: "Full-time",
    description: "Build and scale platform services that support the connected product.",
    status: "open",
    demoContent: true,
  },
  {
    id: "demo-customer-success",
    slug: "customer-success-manager",
    title: "Customer Success Manager",
    team: "Customer Experience",
    employmentType: "Full-time",
    status: "open",
    demoContent: true,
  },
  /** Limited-content demo — title and team only; no location or employment type. */
  {
    id: "demo-implementation-specialist",
    slug: "implementation-specialist",
    title: "Implementation Specialist",
    team: "Customer Experience",
    status: "open",
    demoContent: true,
  },
];

export function getPublishedJobs(): CareerJob[] {
  return careersConfig.useDemoJobs ? careersDemoJobs : careersJobs;
}

export function getOpenJobs(jobs: CareerJob[] = getPublishedJobs()): CareerJob[] {
  return jobs.filter((job) => job.status === "open");
}

export function getJobBySlug(slug: string, jobs: CareerJob[] = getPublishedJobs()): CareerJob | undefined {
  return jobs.find((job) => job.slug === slug && job.status === "open");
}

export function careerDetailPath(slug: string): string {
  return `/company/careers/${slug}`;
}
