/**
 * Vertex CMS SaaS Careers listing — job data layer.
 *
 * RULES:
 * - Do NOT invent real vacancies, benefits, offices, or culture claims.
 * - Set `useDemoJobs: false` and populate `careersJobs` when approved openings exist.
 * - Demo detail fields are for UI review only (`demoContent: true`).
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
  /** Short summary — used on the Careers listing card. */
  description?: string;
  /** Long-form “About the role” copy. */
  about?: string;
  responsibilities?: string[];
  qualifications?: string[];
  whyThisRole?: string;
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

const DEMO_ARRANGEMENT = "Remote / Hybrid — Demo";
const DEMO_LOCATION = "Demo Location";

/** Demo listings for UI review only — not real hiring opportunities. */
export const careersDemoJobs: CareerJob[] = [
  {
    id: "demo-product-designer",
    slug: "senior-product-designer",
    title: "Senior Product Designer",
    team: "Product",
    employmentType: "Full-time",
    workArrangement: DEMO_ARRANGEMENT,
    location: DEMO_LOCATION,
    description: "Shape product experiences across the Vertex CMS platform.",
    about:
      "This sample role focuses on the product surfaces construction teams use to plan, coordinate, and operate work. You would help turn complex project, financial, and field workflows into clear, usable product experiences — without treating each capability as a separate tool.",
    responsibilities: [
      "Design product experiences for connected project, financial, and field workflows.",
      "Work with product and engineering to keep the interface aligned with how construction teams actually operate.",
      "Translate operational problems into structured design proposals and product patterns.",
      "Refine flows across office and field use so information stays readable and consistent.",
      "Contribute to a coherent system language across the Vertex CMS product.",
    ],
    qualifications: [
      "Experience designing software used in complex operational workflows.",
      "Ability to turn ambiguous problems into clear product structure.",
      "Comfort collaborating with product, engineering, and customer-facing teams.",
      "Strong visual and interaction craft with a bias for clarity.",
      "Ability to work from real workflow constraints rather than generic UI patterns.",
    ],
    whyThisRole:
      "This sample role matters because the product has to reflect connected construction operations — projects, people, financials, and field work interacting in one system — not a collection of disconnected screens.",
    status: "open",
    demoContent: true,
  },
  {
    id: "demo-platform-engineer",
    slug: "platform-engineer",
    title: "Platform Engineer",
    team: "Engineering",
    employmentType: "Full-time",
    workArrangement: DEMO_ARRANGEMENT,
    location: DEMO_LOCATION,
    description: "Build and scale platform services that support the connected product.",
    about:
      "This sample role focuses on the services that keep project, financial, and operational data on the same record. You would help build and maintain the platform layer that supports a connected construction-management product under tenant-scoped isolation.",
    responsibilities: [
      "Build and maintain platform services that support connected product workflows.",
      "Keep project, financial, and operational data available to the teams that depend on it.",
      "Work with product and engineering peers on reliable, tenant-scoped system behavior.",
      "Improve the foundations that field, office, and financial workflows share.",
      "Help the product stay one connected system rather than separate services that drift apart.",
    ],
    qualifications: [
      "Experience building backend or platform services for product teams.",
      "Ability to reason about data, isolation, and operational reliability.",
      "Comfort collaborating across product and engineering.",
      "Strong debugging and problem-solving habits.",
      "Interest in systems that connect multiple operational workflows.",
    ],
    whyThisRole:
      "This sample role matters because Vertex CMS is designed as one connected operating platform. Platform work is what keeps those workflows sharing the same underlying record.",
    status: "open",
    demoContent: true,
  },
  {
    id: "demo-customer-success",
    slug: "customer-success-manager",
    title: "Customer Success Manager",
    team: "Customer Experience",
    employmentType: "Full-time",
    workArrangement: DEMO_ARRANGEMENT,
    location: DEMO_LOCATION,
    description: "Help teams adopt Vertex CMS and stay oriented to the operational problems the product is meant to solve.",
    about:
      "This sample role focuses on helping construction teams adopt a connected operating platform. You would stay close to how customers actually work — where friction appears, which workflows matter, and how office, field, and financial teams stay aligned.",
    responsibilities: [
      "Guide customers through adoption of connected project and operational workflows.",
      "Stay close to customer problems so product feedback stays grounded in real work.",
      "Help teams understand how project, financial, and field information can live in one system.",
      "Coordinate with product and implementation peers when workflow challenges appear.",
      "Support customers after rollout so the platform stays useful in day-to-day operations.",
    ],
    qualifications: [
      "Strong communication and customer-facing skills.",
      "Experience supporting software adoption or customer success.",
      "Ability to understand complex operational workflows.",
      "Comfort collaborating across product and customer teams.",
      "Clear written and spoken communication.",
    ],
    whyThisRole:
      "This sample role matters because a connected construction platform only helps if teams can adopt it in real operations — not just evaluate it as a list of features.",
    status: "open",
    demoContent: true,
  },
  {
    id: "demo-implementation-specialist",
    slug: "implementation-specialist",
    title: "Implementation Specialist",
    team: "Customer Experience",
    employmentType: "Full-time",
    workArrangement: DEMO_ARRANGEMENT,
    location: DEMO_LOCATION,
    description:
      "Help teams successfully adopt and operate Vertex CMS across their construction workflows.",
    about:
      "This sample role focuses on helping customers adopt Vertex CMS across their construction workflows. You would support implementation, understand how teams currently work, and collaborate with product and customer teams so the platform can be used in day-to-day project, financial, and field operations.",
    responsibilities: [
      "Guide customers through Vertex CMS implementation and adoption.",
      "Translate customer workflows into clear implementation requirements.",
      "Collaborate with product and customer teams to resolve workflow challenges.",
      "Help customers understand connected project and operational workflows.",
      "Support successful rollout and ongoing platform adoption.",
    ],
    qualifications: [
      "Strong communication and customer-facing skills.",
      "Experience working with software implementation or onboarding.",
      "Ability to understand complex workflows.",
      "Strong organization and problem-solving skills.",
      "Comfortable collaborating across product and customer teams.",
    ],
    whyThisRole:
      "This sample role matters because implementation is where a connected construction-management platform becomes usable in real operations — helping teams move from disconnected tools to one shared system of work.",
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

export function getAdjacentJobs(slug: string, jobs: CareerJob[] = getOpenJobs()) {
  const index = jobs.findIndex((job) => job.slug === slug);
  if (index < 0) return { previous: null, next: null };
  return {
    previous: index > 0 ? jobs[index - 1] : null,
    next: index < jobs.length - 1 ? jobs[index + 1] : null,
  };
}
