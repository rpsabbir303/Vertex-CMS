import { buildCatalogAddOns } from "./addons";
import type { AddOn, FeatureGroup, Plan, PricingCatalog, PricingFAQ } from "./types";

/**
 * PLACEHOLDER pricing catalog.
 *
 * Rules:
 * - Do NOT invent dollar amounts that could contradict live plan configuration.
 * - monthlyPrice / yearlyPrice stay null until synchronized from the plan API.
 * - Entitlement matrix reflects documented capability groups (included / excluded / add-on),
 *   not commercial price points.
 * - Replace this module with an API-backed loader when plan sync is available.
 */

const PLAN_IDS = {
  starter: "starter",
  pro: "pro",
  premium: "premium",
  enterprise: "enterprise",
} as const;

function row(
  id: string,
  name: string,
  starter: "included" | "excluded" | "addon",
  pro: "included" | "excluded" | "addon",
  premium: "included" | "excluded" | "addon",
  enterprise: "included" | "excluded" | "addon"
) {
  return {
    id,
    name,
    entitlements: {
      [PLAN_IDS.starter]: starter,
      [PLAN_IDS.pro]: pro,
      [PLAN_IDS.premium]: premium,
      [PLAN_IDS.enterprise]: enterprise,
    },
  };
}

export const PLACEHOLDER_PLANS: Plan[] = [
  {
    id: PLAN_IDS.starter,
    name: "Starter",
    description: "Core project workflows for smaller construction teams getting started on one platform.",
    monthlyPrice: null,
    yearlyPrice: null,
    currency: "USD",
    active: true,
    sort: 1,
    trialDays: null,
    highlights: [
      "Projects & scheduling",
      "Documents, RFIs & submittals",
      "Mobile field capture",
      "Essential reporting",
    ],
    cta: { label: "Start Free Trial", action: "trial" },
  },
  {
    id: PLAN_IDS.pro,
    name: "Pro",
    description: "Connected project and financial control for growing general contractors and subcontractors.",
    monthlyPrice: null,
    yearlyPrice: null,
    currency: "USD",
    active: true,
    sort: 2,
    popular: true,
    trialDays: null,
    highlights: [
      "Everything in Starter",
      "Budget, job cost & billing",
      "Field operations & punch",
      "Safety & compliance tools",
    ],
    cta: { label: "Start Free Trial", action: "trial" },
  },
  {
    id: PLAN_IDS.premium,
    name: "Premium",
    description: "Full operational depth with workforce, AI intelligence, and growth tools for multi-project teams.",
    monthlyPrice: null,
    yearlyPrice: null,
    currency: "USD",
    active: true,
    sort: 3,
    trialDays: null,
    highlights: [
      "Everything in Pro",
      "Native accounting & WIP",
      "AI assistant & insights",
      "CRM & customer portals",
    ],
    cta: { label: "Start Free Trial", action: "trial" },
  },
  {
    id: PLAN_IDS.enterprise,
    name: "Enterprise",
    description: "Custom packaging, advanced controls, and dedicated support for larger construction organizations.",
    monthlyPrice: null,
    yearlyPrice: null,
    currency: "USD",
    active: true,
    sort: 4,
    trialDays: null,
    highlights: [
      "Everything in Premium",
      "Custom entitlements",
      "Advanced admin & security",
      "Dedicated onboarding support",
    ],
    cta: { label: "Request a Quote", action: "quote" },
  },
];

export const PLACEHOLDER_FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "project-management",
    name: "Project Management",
    defaultOpen: true,
    features: [
      row("projects", "Projects", "included", "included", "included", "included"),
      row("scheduling", "Scheduling", "included", "included", "included", "included"),
      row("documents", "Documents", "included", "included", "included", "included"),
      row("rfis", "RFIs", "included", "included", "included", "included"),
      row("submittals", "Submittals", "included", "included", "included", "included"),
      row("change-orders", "Change Orders", "included", "included", "included", "included"),
    ],
  },
  {
    id: "financial-management",
    name: "Financial Management",
    defaultOpen: true,
    features: [
      row("budget-job-cost", "Budget & Job Cost", "excluded", "included", "included", "included"),
      row("billing", "Billing", "excluded", "included", "included", "included"),
      row("aia", "AIA Pay Applications", "excluded", "included", "included", "included"),
      row("native-accounting", "Native Accounting", "excluded", "excluded", "included", "included"),
      row("wip", "WIP", "excluded", "excluded", "included", "included"),
      row("cash-flow", "Cash Flow", "excluded", "excluded", "included", "included"),
    ],
  },
  {
    id: "field-mobile",
    name: "Field & Mobile",
    features: [
      row("daily-logs", "Daily Logs", "included", "included", "included", "included"),
      row("drawings", "Drawings", "excluded", "included", "included", "included"),
      row("punch", "Punch", "excluded", "included", "included", "included"),
      row("tm", "T&M", "excluded", "included", "included", "included"),
      row("safety", "Safety", "excluded", "included", "included", "included"),
      row("mobile-offline", "Mobile & Offline Sync", "included", "included", "included", "included"),
    ],
  },
  {
    id: "documents-collaboration",
    name: "Documents & Collaboration",
    features: [
      row("doc-control", "Document Control", "included", "included", "included", "included"),
      row("meetings", "Meetings", "excluded", "included", "included", "included"),
      row("closeout", "Closeout", "excluded", "included", "included", "included"),
      row("portals", "Customer Portals", "excluded", "excluded", "included", "included"),
    ],
  },
  {
    id: "safety-compliance",
    name: "Safety & Compliance",
    features: [
      row("compliance", "Compliance", "excluded", "included", "included", "included"),
      row("subcontractors", "Subcontractors", "excluded", "included", "included", "included"),
      row("permits", "Permits", "excluded", "included", "included", "included"),
      row("inspections", "Inspections", "excluded", "included", "included", "included"),
    ],
  },
  {
    id: "workforce",
    name: "Workforce",
    features: [
      row("workforce", "Workforce", "excluded", "included", "included", "included"),
      row("time", "Time & Timesheets", "excluded", "included", "included", "included"),
      row("payroll-readiness", "Payroll Readiness", "excluded", "addon", "addon", "included"),
    ],
  },
  {
    id: "ai-intelligence",
    name: "AI & Intelligence",
    features: [
      row("ai-assistant", "AI Assistant", "excluded", "addon", "included", "included"),
      row("project-intelligence", "Project Intelligence", "excluded", "addon", "included", "included"),
      row("predictive", "Predictive Insights", "excluded", "excluded", "included", "included"),
      row("doc-intelligence", "Document Intelligence", "excluded", "addon", "included", "included"),
      row("automation", "Automation", "excluded", "excluded", "included", "included"),
    ],
  },
  {
    id: "crm-growth",
    name: "CRM & Growth",
    features: [
      row("crm", "CRM", "excluded", "excluded", "included", "included"),
      row("leads", "Leads", "excluded", "excluded", "included", "included"),
      row("website-builder", "Website Builder", "addon", "addon", "addon", "included"),
    ],
  },
  {
    id: "reporting",
    name: "Reporting & Analytics",
    features: [
      row("reports", "Reports", "included", "included", "included", "included"),
      row("analytics", "Analytics", "excluded", "included", "included", "included"),
      row("executive", "Executive Dashboards", "excluded", "excluded", "included", "included"),
    ],
  },
  {
    id: "integrations",
    name: "Integrations",
    features: [
      row("integrations", "Platform Integrations", "excluded", "included", "included", "included"),
      row("custom-integrations", "Custom Integrations", "excluded", "excluded", "addon", "included"),
    ],
  },
];

/** Complete configured add-on ecosystem — not a hard-coded five-item list. */
export const PLACEHOLDER_ADDONS: AddOn[] = buildCatalogAddOns();

export const PLACEHOLDER_FAQS: PricingFAQ[] = [
  {
    id: "trial",
    question: "How does the VertexBuild free trial work?",
    answer:
      "You can start a free trial from the website. After signup and email verification, your tenant is created and onboarding begins so your team can explore the platform.",
    order: 1,
    active: true,
  },
  {
    id: "change-plans",
    question: "Can I change plans later?",
    answer:
      "Yes. Plan selection can be adjusted as your construction business grows. Talk with our team if you need help matching capabilities to your workflow.",
    order: 2,
    active: true,
  },
  {
    id: "billing-options",
    question: "Is there a monthly and yearly billing option?",
    answer:
      "VertexBuild supports monthly and yearly billing periods in plan configuration. Displayed amounts on this page will reflect live plan data once synchronized.",
    order: 3,
    active: true,
  },
  {
    id: "trial-ends",
    question: "What happens when my trial ends?",
    answer:
      "When your trial ends, you can continue on a paid plan or speak with our team about the right package. Exact trial terms follow your account configuration.",
    order: 4,
    active: true,
  },
  {
    id: "seats",
    question: "Can I add seats later?",
    answer:
      "Yes. Additional seats are available as an add-on so you can expand access for project, field, and office teams.",
    order: 5,
    active: true,
  },
  {
    id: "ai-plans",
    question: "Are AI capabilities available on every plan?",
    answer:
      "AI capabilities depend on plan entitlements. Some plans include AI intelligence; others can extend AI through add-on packs.",
    order: 6,
    active: true,
  },
  {
    id: "storage",
    question: "Can I purchase additional storage?",
    answer:
      "Yes. Storage is available as an add-on so document and media capacity can grow with your portfolio.",
    order: 7,
    active: true,
  },
  {
    id: "website-builder",
    question: "Is the Website Builder available as an add-on?",
    answer:
      "Yes. Website Builder can be added to extend CRM and lead capture with a connected construction company website.",
    order: 8,
    active: true,
  },
  {
    id: "talk",
    question: "Can I talk to someone before choosing a plan?",
    answer:
      "Absolutely. Book a demo or contact sales and we will help you map VertexBuild capabilities to your team.",
    order: 9,
    active: true,
  },
];

/** Placeholder catalog — replace loader when live plan API is available. */
export const PLACEHOLDER_CATALOG: PricingCatalog = {
  source: "placeholder",
  plans: PLACEHOLDER_PLANS,
  featureGroups: PLACEHOLDER_FEATURE_GROUPS,
  addOns: PLACEHOLDER_ADDONS,
  faqs: PLACEHOLDER_FAQS,
};
