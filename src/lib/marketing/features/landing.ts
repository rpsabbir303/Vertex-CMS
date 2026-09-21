/**
 * Features Landing page content — maps approved CMS feature tasks to existing product data.
 * Categories come from HUB_MODULES. Roles/AI/plans come from the feature register & pricing catalog.
 */

import { HUB_MODULES, type HubModuleSection } from "./hub";
import { AI_CAPABILITIES, FEATURE_ROLES } from "./register";
import { getActivePlans, getPricingCatalog } from "@/lib/marketing/pricing";
import { CTAS, ROUTES } from "@/lib/marketing/navigation";

export const featuresLandingHero = {
  eyebrow: "VertexBuild Platform",
  headline: "One connected construction management platform.",
  supporting:
    "Explore the six operating areas of VertexBuild. Each area opens the documented features behind it—with product UI, connected workflows, and a path into the full feature detail.",
  primary: { label: "Explore the platform", href: "#feature-categories" },
  secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
} as const;

/** Approved hub categories for category navigation + interactive showcase */
export const FEATURE_LANDING_CATEGORIES: HubModuleSection[] = HUB_MODULES;

export const featuresLandingWorkflows = [
  {
    id: "wf-project-flow",
    label: "Project Management",
    headline: "Keep every project workflow moving",
    body: "Connect schedules, documents, RFIs, submittals, and change orders so teams can work from the same project information.",
    points: [
      "Projects and portfolio visibility in one workspace",
      "Schedules tied to live project delivery",
      "Documents, RFIs, and submittals on the project record",
      "Change orders connected to cost impact",
    ],
    preview: "project" as const,
    href: `${ROUTES.features}/project-management`,
    ctaLabel: "Explore Project Management",
    reverse: false,
    surface: "white" as const,
  },
  {
    id: "wf-financial",
    label: "Financial Management",
    headline: "Connect project cost to financial control",
    body: "Budget, billing, pay applications, and accounting stay linked to project activity—so financial visibility is grounded in live work.",
    points: [
      "Budget and job cost against cost codes",
      "Billing and AIA pay applications",
      "Native accounting and WIP reporting",
      "Cash flow connected to invoices and payables",
    ],
    preview: "finance" as const,
    dark: true,
    href: `${ROUTES.features}/budget-job-cost`,
    ctaLabel: "Explore Budget & Job Cost",
    reverse: true,
    surface: "soft" as const,
  },
  {
    id: "wf-field",
    label: "Field Operations",
    headline: "Bring the jobsite into the project record",
    body: "Daily logs, drawings, punch, T&M, and safety workflows keep field activity connected to office visibility.",
    points: [
      "Daily logs synced to the project",
      "Drawings and current revision for the field",
      "Punch lists and T&M tickets",
      "Safety documentation on the project",
    ],
    preview: "field" as const,
    href: `${ROUTES.features}/daily-logs`,
    ctaLabel: "Explore Daily Logs",
    reverse: false,
    surface: "mist" as const,
  },
  {
    id: "wf-ai",
    label: "AI & Intelligence",
    headline: "Turn project data into clearer answers",
    body: "Ask questions grounded in live project information—with human confirmation before AI write actions.",
    points: [
      "AI Assistant grounded in live project data",
      "Predictive insights from operating data",
      "Document-aware intelligence",
      "Confirmed writes and tool logging",
    ],
    preview: "ai" as const,
    dark: true,
    href: `${ROUTES.features}/ai-assistant`,
    ctaLabel: "Explore AI Assistant",
    reverse: true,
    surface: "navy" as const,
  },
] as const;

export const featuresLandingRoles = {
  eyebrow: "Features by role",
  headline: "Built around the people who build.",
  supporting: "Give every construction role the workflows and information they need to keep work moving.",
  cta: { label: "Explore by Role", href: "#features-roles" },
  roles: FEATURE_ROLES,
} as const;

export function getFeaturesLandingPlans() {
  const plans = getActivePlans(getPricingCatalog());
  return {
    eyebrow: "Features by plan",
    headline: "Choose the capabilities that fit your business.",
    supporting:
      "Explore feature availability across plans. Exact packaging is shown on Pricing—this section is for capability discovery.",
    cta: { label: "Compare Plans", href: ROUTES.pricing },
    plans: plans.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      highlights: p.highlights,
      ctaLabel: p.cta.label,
      href:
        p.cta.action === "quote"
          ? `${ROUTES.requestQuote}?plan=${p.id}`
          : p.cta.action === "demo"
            ? CTAS.demo.href
            : `${ROUTES.signup}?plan=${p.id}`,
    })),
  };
}

export const featuresLandingAI = {
  id: "features-ai",
  eyebrow: "AI Capabilities",
  headline: "Turn project data into better decisions.",
  supporting:
    "VertexBuild brings intelligence into construction workflows so teams can understand project information, surface risks, and work faster—with human confirmation before AI-assisted write actions.",
  capabilities: AI_CAPABILITIES,
  cta: { label: "Explore AI Capabilities", href: `${ROUTES.features}/ai-assistant` },
  note: "AI assists users and does not replace human review. Write actions require confirmation. AI cannot delete records.",
} as const;

export const featuresLandingMobile = {
  id: "features-mobile",
  eyebrow: "Mobile Capabilities",
  headline: "Keep the jobsite connected.",
  supporting:
    "Give field teams the tools they need to capture information, update workflows, and stay connected—even when work takes them offline.",
  workflows: [
    { label: "Daily Logs", href: `${ROUTES.features}/daily-logs` },
    { label: "Drawings", href: `${ROUTES.features}/drawings` },
    { label: "RFIs", href: `${ROUTES.features}/rfis` },
    { label: "Punch", href: `${ROUTES.features}/punch` },
    { label: "Submittals", href: `${ROUTES.features}/submittals` },
    { label: "Safety", href: `${ROUTES.features}/safety` },
    { label: "Time Capture", href: `${ROUTES.features}/time` },
    { label: "Mobile", href: `${ROUTES.features}/mobile` },
  ],
  points: [
    "Daily logs and photos captured where work happens",
    "Drawings, RFIs, punch, and submittals on mobile",
    "Safety workflows connected to the project record",
    "Time capture and offline-capable field operation",
  ],
  cta: { label: "Explore Mobile Capabilities", href: `${ROUTES.features}/mobile` },
} as const;

export const featuresLandingCta = {
  headline: "See VertexBuild in your operation.",
  supporting:
    "Start a free trial or book a demo to walk through the documented platform workflows with your team.",
  primary: { label: CTAS.trial.label, href: CTAS.trial.href },
  secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
} as const;
