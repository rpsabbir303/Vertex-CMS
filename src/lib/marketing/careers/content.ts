/**
 * Vertex CMS SaaS Careers page content.
 *
 * RULES:
 * - Do NOT invent job openings, salaries, benefits, locations, or culture claims.
 * - jobs[] is empty until Vertex publishes real openings.
 * - Populate CareerJob objects to render the job board without redesigning the page.
 */

export type CareerJobStatus = "open" | "closed" | "draft";

export type CareerJob = {
  id: string;
  title: string;
  department?: string;
  location?: string;
  employmentType?: string;
  description?: string;
  requirements?: string[];
  applicationUrl?: string;
  status: CareerJobStatus;
};

export const careersPageMeta = {
  title: "Careers | Vertex CMS",
  description: "Careers at Vertex CMS — join the team building construction management software.",
  canonical: "/company/careers",
};

export const careersHero = {
  eyebrow: "Careers",
  headline: "Build what comes next.",
  supporting: null as string | null,
  supportingPlaceholder: "[Approved Careers introduction copy]",
};

/** No approved culture/mission copy in project docs — show placeholder story. */
export const careersStory = {
  enabled: true,
  statement: null as string | null,
  statementPlaceholder: "[Approved career/company story content]",
  supporting: null as string | null,
  supportingPlaceholder: "[Approved supporting careers copy]",
};

/**
 * Product areas the company builds — from documented marketing product surface.
 * Framed as product domains, not as employee responsibilities.
 */
export const whatWeBuild = {
  enabled: true,
  eyebrow: "What we build",
  headline: "Software for how construction businesses run.",
  supporting:
    "Vertex CMS is construction management software connecting projects, financials, field operations, compliance, workforce, and intelligence.",
  flow: [
    { id: "product", label: "Product", detail: "Construction management SaaS" },
    { id: "technology", label: "Technology", detail: "Platform & interfaces" },
    { id: "workflows", label: "Construction workflows", detail: "Projects · financials · field · CRM" },
    { id: "value", label: "Customer value", detail: "Connected operations" },
  ],
  domains: [
    { label: "Project management", source: "documented product capability" },
    { label: "Financial workflows", source: "documented product capability" },
    { label: "CRM & growth", source: "documented product capability" },
    { label: "AI & intelligence", source: "documented product capability" },
    { label: "Integrations", source: "documented product capability" },
    { label: "Mobile field workflows", source: "documented product capability" },
  ],
};

/**
 * Published open roles. Keep empty until real jobs are provided.
 * Example entry shape (do not uncomment fake data):
 * {
 *   id: "example",
 *   title: "…",
 *   department: "…",
 *   location: "…",
 *   employmentType: "…",
 *   description: "…",
 *   applicationUrl: "https://…",
 *   status: "open",
 * }
 */
export const careersJobs: CareerJob[] = [];

export const careersEmptyState = {
  title: "No open positions at the moment.",
  body: "When roles are published, they will appear here. Check back, or explore the product while you wait.",
  placeholderNote: "[Open positions content to be provided]",
};

export const careersCtaSection = {
  eyebrow: "Interested in joining?",
  /** Design-copy suggestion — replace when Vertex provides approved copy */
  headline: "Let's build the future together.",
  supporting: null as string | null,
  supportingPlaceholder: "[Approved careers CTA copy]",
  /** Scrolls / focuses open positions on this page */
  primaryLabel: "View Open Roles",
  primaryHref: "#open-positions",
  secondaryLabel: "Meet the team",
  secondaryHref: "/company/team",
};

export function getOpenJobs(jobs: CareerJob[] = careersJobs): CareerJob[] {
  return jobs.filter((job) => job.status === "open");
}
