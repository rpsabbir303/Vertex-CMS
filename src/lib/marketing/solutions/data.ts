/**
 * Solutions landing + detail content.
 * Source: documented Vertex CMS segments, project types, and role-based solutions.
 * Does not invent unsupported product functionality.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "@/lib/marketing/features/register";

export const SOLUTIONS_GROWTH = `${ROUTES.features}#growth`;

export type SolutionSlug =
  | "general-contractors"
  | "specialty-contractors"
  | "owners"
  | "commercial"
  | "residential"
  | "civil";

export type SolutionKind = "business" | "project-type";

export type SolutionDetail = {
  slug: SolutionSlug;
  kind: SolutionKind;
  label: string;
  eyebrow: string;
  headline: string;
  supporting: string;
  body: string;
  href: string;
  preview: PreviewKey;
  previewDark?: boolean;
  previewLabel: string;
  emphasis: string[];
  modules: { label: string; href: string }[];
  cta: { label: string; href: string };
};

export const solutionsLandingMeta = {
  title: "Construction Software Solutions | Vertex CMS",
  description:
    "Find the Vertex CMS solution that fits your construction business, project type, or role. One connected platform for project, financial, field, workforce, and intelligence workflows.",
  canonical: ROUTES.solutions,
};

export const SOLUTION_DETAILS: Record<SolutionSlug, SolutionDetail> = {
  "general-contractors": {
    slug: "general-contractors",
    kind: "business",
    label: "General Contractors",
    eyebrow: "By Business",
    headline: "Run the whole project from one connected system.",
    supporting: "Connected project, financial, subcontractor, and field management.",
    body: "General contractor teams coordinate many moving parts at once — schedule, cost, subcontractors, documents, and field activity. Vertex CMS keeps those workflows connected around the project so office and field teams work from the same record.",
    href: ROUTES.solutionsGeneralContractors,
    preview: "projectDashboard",
    previewLabel: "General contractor workspace",
    emphasis: [
      "Project overview and status",
      "Budget and cost visibility",
      "Subcontractor coordination",
      "Field activity and daily logs",
      "RFIs, submittals, and documents",
    ],
    modules: [
      { label: "Projects", href: `${ROUTES.features}/projects` },
      { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
      { label: "Scheduling", href: `${ROUTES.features}/scheduling` },
      { label: "Subcontractors", href: `${ROUTES.features}/subcontractors` },
      { label: "RFIs", href: `${ROUTES.features}/rfis` },
      { label: "Daily Logs", href: `${ROUTES.features}/daily-logs` },
      { label: "Documents", href: `${ROUTES.features}/documents` },
    ],
    cta: { label: "Explore General Contractor Solution", href: ROUTES.solutionsGeneralContractors },
  },
  "specialty-contractors": {
    slug: "specialty-contractors",
    kind: "business",
    label: "Specialty Contractors",
    eyebrow: "By Business",
    headline: "Keep field work, billing, and workforce connected.",
    supporting: "Operational, field, billing, and workforce capabilities connected around specialty work.",
    body: "Specialty contractors need field activity, labor, and billing to stay aligned with the project record. Vertex CMS connects those operational workflows without requiring teams to recreate information across disconnected tools.",
    href: ROUTES.solutionsSpecialtyContractors,
    preview: "wfOverview",
    previewLabel: "Specialty contractor workspace",
    emphasis: [
      "Field activity and project records",
      "Workforce and timesheets",
      "Billing and project cost context",
      "Subcontractor and trade coordination",
      "Documents connected to the work",
    ],
    modules: [
      { label: "Daily Logs", href: `${ROUTES.features}/daily-logs` },
      { label: "Time", href: `${ROUTES.features}/time` },
      { label: "Workforce", href: `${ROUTES.features}/workforce` },
      { label: "Billing", href: `${ROUTES.features}/billing` },
      { label: "Subcontractors", href: `${ROUTES.features}/subcontractors` },
      { label: "Projects", href: `${ROUTES.features}/projects` },
      { label: "T&M", href: `${ROUTES.features}/t-and-m` },
    ],
    cta: { label: "Explore Specialty Contractor Solution", href: ROUTES.solutionsSpecialtyContractors },
  },
  owners: {
    slug: "owners",
    kind: "business",
    label: "Owners & Clients",
    eyebrow: "By Business",
    headline: "See the project without managing the project.",
    supporting: "Project visibility, financial oversight, and collaboration in one connected experience.",
    body: "Owners and clients need a professional view of progress, documents, and approved financial information — not internal workspace complexity. Customer Portals keep that visibility connected to the project information already managed in Vertex CMS.",
    href: ROUTES.solutionsOwners,
    preview: "cpShowcase",
    previewLabel: "Owner / client portal",
    emphasis: [
      "Project status and progress",
      "Schedule and milestone visibility",
      "Approved financial information",
      "Shared documents and photos",
      "Client-visible project updates",
    ],
    modules: [
      { label: "Customer Portals", href: `${ROUTES.features}/customer-portals` },
      { label: "Projects", href: `${ROUTES.features}/projects` },
      { label: "Documents", href: `${ROUTES.features}/documents` },
      { label: "AIA Pay Applications", href: `${ROUTES.features}/aia-pay-applications` },
      { label: "Drawings", href: `${ROUTES.features}/drawings` },
    ],
    cta: { label: "Explore Owner / Client Solution", href: ROUTES.solutionsOwners },
  },
  commercial: {
    slug: "commercial",
    kind: "project-type",
    label: "Commercial Construction",
    eyebrow: "By Project Type",
    headline: "Keep commercial project controls connected.",
    supporting:
      "Coordinate scheduling, financial workflows, field activity, documents, and subcontractor work around commercial construction projects.",
    body: "Commercial work depends on coordinated project controls — schedule, cost, documents, and field activity. Vertex CMS brings those workflows together so teams can manage commercial projects from one connected system.",
    href: ROUTES.solutionsCommercial,
    preview: "scheduleGantt",
    previewLabel: "Commercial project controls",
    emphasis: [
      "Project controls and status",
      "Scheduling",
      "Financial workflows",
      "Field coordination",
      "Documents and subcontractor coordination",
    ],
    modules: [
      { label: "Projects", href: `${ROUTES.features}/projects` },
      { label: "Scheduling", href: `${ROUTES.features}/scheduling` },
      { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
      { label: "Documents", href: `${ROUTES.features}/documents` },
      { label: "Subcontractors", href: `${ROUTES.features}/subcontractors` },
      { label: "Daily Logs", href: `${ROUTES.features}/daily-logs` },
    ],
    cta: { label: "Explore Commercial", href: ROUTES.solutionsCommercial },
  },
  residential: {
    slug: "residential",
    kind: "project-type",
    label: "Residential Construction",
    eyebrow: "By Project Type",
    headline: "Keep residential work, cost, and client visibility aligned.",
    supporting:
      "Connect project management, field activity, cost tracking, documents, and client-facing updates for residential construction.",
    body: "Residential teams need a clear project record that field activity, cost, documents, and client visibility can all share. Vertex CMS keeps those workflows connected without treating the public client view as an internal dashboard.",
    href: ROUTES.solutionsResidential,
    preview: "projectDashboard",
    previewLabel: "Residential project workspace",
    emphasis: [
      "Project management",
      "Field activity",
      "Client visibility",
      "Documents",
      "Cost tracking and project updates",
    ],
    modules: [
      { label: "Projects", href: `${ROUTES.features}/projects` },
      { label: "Daily Logs", href: `${ROUTES.features}/daily-logs` },
      { label: "Customer Portals", href: `${ROUTES.features}/customer-portals` },
      { label: "Documents", href: `${ROUTES.features}/documents` },
      { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
      { label: "Photos", href: `${ROUTES.features}#field-operations` },
    ],
    cta: { label: "Explore Residential", href: ROUTES.solutionsResidential },
  },
  civil: {
    slug: "civil",
    kind: "project-type",
    label: "Civil / Infrastructure",
    eyebrow: "By Project Type",
    headline: "Coordinate schedule, workforce, safety, and project control.",
    supporting:
      "Bring scheduling, compliance, workforce, field operations, and safety together for civil and infrastructure work.",
    body: "Civil and infrastructure projects depend on scheduling, workforce, field operations, and compliance staying visible as work moves. Vertex CMS connects those project-control capabilities around the project record — without claiming specialized civil-only systems that are not part of the platform.",
    href: ROUTES.solutionsCivil,
    preview: "scheduleLookahead",
    previewLabel: "Civil / infrastructure controls",
    emphasis: [
      "Scheduling and look-ahead",
      "Compliance visibility",
      "Workforce coordination",
      "Project control",
      "Field operations and safety",
    ],
    modules: [
      { label: "Scheduling", href: `${ROUTES.features}/scheduling` },
      { label: "Compliance", href: `${ROUTES.features}/compliance` },
      { label: "Workforce", href: `${ROUTES.features}/workforce` },
      { label: "Projects", href: `${ROUTES.features}/projects` },
      { label: "Daily Logs", href: `${ROUTES.features}/daily-logs` },
      { label: "Safety", href: `${ROUTES.features}/safety` },
    ],
    cta: { label: "Explore Civil / Infrastructure", href: ROUTES.solutionsCivil },
  },
};

export const SOLUTION_SLUGS = Object.keys(SOLUTION_DETAILS) as SolutionSlug[];

export type FinderTab = "business" | "project-type" | "role";

export const FINDER_TABS: { id: FinderTab; n: string; label: string }[] = [
  { id: "business", n: "01", label: "By Business" },
  { id: "project-type", n: "02", label: "By Project Type" },
  { id: "role", n: "03", label: "By Role" },
];

export const SOLUTION_DISCOVERY_SECTION = {
  eyebrow: "Solutions",
  headline: "See how Vertex CMS fits the way you work.",
  supporting:
    "Explore the platform by business, project type, or role—and discover the workflows connected to your work.",
  contextPrompt: "How you work",
} as const;

export const SOLUTION_BUSINESS_SECTION = {
  eyebrow: "01 · By Business",
  headline: "Built for the way your company operates.",
  supporting:
    "General contractors, specialty contractors, and owners each enter Vertex CMS through a different operational lens — on the same platform.",
} as const;

export const SOLUTION_PROJECT_TYPE_SECTION = {
  eyebrow: "02 · By Project Type",
  headline: "Commercial, residential, or civil — same record, different emphasis.",
  supporting:
    "The project type changes which workflows matter most. See the workspace each delivery model needs.",
} as const;

export const SOLUTION_ROLE_SECTION = {
  eyebrow: "03 · By Role",
  headline: "Every role sees the work they own.",
  supporting:
    "Project managers, estimators, field leaders, and finance teams work from connected views — not disconnected tools.",
} as const;

export const DISCOVERY_BUSINESS_OPTIONS = [
  { id: "general-contractors" as const, label: "General Contractor" },
  { id: "specialty-contractors" as const, label: "Specialty Contractor" },
  { id: "owners" as const, label: "Owner / Client" },
];

export const DISCOVERY_PROJECT_TYPE_OPTIONS = [
  { id: "commercial" as const, label: "Commercial" },
  { id: "residential" as const, label: "Residential" },
  { id: "civil" as const, label: "Civil / Infrastructure" },
];

export type DiscoveryBusinessId = (typeof DISCOVERY_BUSINESS_OPTIONS)[number]["id"];
export type DiscoveryProjectTypeId = (typeof DISCOVERY_PROJECT_TYPE_OPTIONS)[number]["id"];

export const SOLUTIONS_PAGE = {
  heroEyebrow: "Solutions",
  heroHeadline: "One platform. Built around how you work.",
  heroSupporting:
    "Explore the Vertex CMS platform by business, project type, or role—and see the workflows that connect your work.",
  finderHeadline: "Find the Vertex solution that fits your work.",
  finderSupporting:
    "Choose a discovery path. The platform stays the same — the entry point changes with how you operate.",
  previewHeadline: "See the product behind the solution.",
  previewSupporting:
    "Select a business, project type, or role and inspect the Vertex workspace that supports that work.",
  architectureHeadline: "The platform behind the solution.",
  architectureSupporting:
    "Solutions are not separate products. They are different ways of using the same connected platform.",
  matrixHeadline: "See what connects across the platform.",
  matrixNote:
    "Marks show documented relevance — not pricing, entitlements, or unused modules. Hover a row to follow the connection.",
  workflowHeadline: "Different roles. One connected workflow.",
  workflowSupporting:
    "Plan, estimate, build, and control stay on the same project record — with collaboration and intelligence connected to the work.",
  rolesHeadline: "See Vertex through the eyes of your team.",
  rolesSupporting:
    "Each role works through the workflows they own. The project information stays shared.",
  projectTypesHeadline: "Built for the work you actually build.",
  projectTypesSupporting:
    "Commercial, residential, and civil work use the same platform with different operational emphasis.",
  ecosystemHeadline: "Every solution connects back to the same platform.",
  ecosystemSupporting:
    "Project, financial, field, workforce, intelligence, and growth capabilities remain one operating system.",
  startHeadline: "Where do you want to start?",
  decideHeadline: "Start with your context.",
  decidePrompt: "I am a…",
} as const;

export type RoleId =
  | "project-manager"
  | "estimator"
  | "superintendent"
  | "controller"
  | "safety"
  | "executive";

export const SOLUTION_ROLES: {
  id: RoleId;
  label: string;
  hash: string;
  headline: string;
  body: string;
  need: string;
  categories: string[];
  workflows: string[];
  preview: PreviewKey;
  previewDark?: boolean;
  previewLabel: string;
  cta: { label: string; href: string };
}[] = [
  {
    id: "project-manager",
    label: "Project Manager",
    hash: "role-project-manager",
    headline: "Keep project information, teams, issues, and progress connected.",
    body: "Give project managers a connected view of status, schedule, RFIs, submittals, field activity, and documents — so the work of moving the project forward stays in one place.",
    need: "Unified project status, issues, schedule, and documents",
    categories: ["Project Management", "Field Operations"],
    workflows: ["Projects", "Schedule", "RFIs", "Submittals", "Daily Logs", "Documents", "Punch"],
    preview: "projectDashboard",
    previewLabel: "Project dashboard",
    cta: { label: "Explore Projects", href: `${ROUTES.features}/projects` },
  },
  {
    id: "estimator",
    label: "Estimator",
    hash: "role-estimator",
    headline: "Move from estimate to controlled project budget.",
    body: "Keep estimates, bid work, and the path into project budget connected so awarded work does not lose its cost structure when delivery begins.",
    need: "Estimates, bids, and a clean path into project budget",
    categories: ["Preconstruction", "Financial Management"],
    workflows: ["Estimates", "Bid management", "Estimate → Budget"],
    preview: "estimating",
    previewLabel: "Estimating workspace",
    cta: { label: "Explore Estimating", href: `${ROUTES.features}/estimating` },
  },
  {
    id: "superintendent",
    label: "Superintendent",
    hash: "role-superintendent",
    headline: "Keep field information current from the jobsite.",
    body: "Capture daily logs, drawings, safety activity, photos, and punch from the field so office teams work from current project information.",
    need: "Jobsite activity captured and visible to the office",
    categories: ["Field Operations", "Project Management"],
    workflows: ["Daily Logs", "Drawings", "Safety", "Photos", "Punch", "Mobile"],
    preview: "dailyLogDashboard",
    previewLabel: "Field workspace",
    cta: { label: "Explore Field Operations", href: `${ROUTES.features}#field-operations` },
  },
  {
    id: "controller",
    label: "Controller / Accountant",
    hash: "role-controller",
    headline: "Keep project financial information connected to operations.",
    body: "Bring general ledger, AP/AR, pay applications, WIP, and cash flow closer to the project work generating that financial information.",
    need: "Project cost, accounting, billing, and cash visibility",
    categories: ["Financial Management"],
    workflows: ["General Ledger", "AP / AR", "Pay Applications", "WIP", "Cash Flow"],
    preview: "accountingDashboard",
    previewDark: true,
    previewLabel: "Financial workspace",
    cta: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
  },
  {
    id: "safety",
    label: "Safety",
    hash: "role-safety",
    headline: "Turn safety activity into organized project information.",
    body: "Record incidents, inspections, toolbox talks, JHA/JSA, and corrective actions as structured project information — not scattered field notes.",
    need: "Incidents, inspections, and corrective actions on the project record",
    categories: ["Field Operations", "Compliance & Workforce"],
    workflows: ["Safety Dashboard", "Incidents", "Inspections", "Toolbox Talks", "JHA / JSA", "Corrective Actions"],
    preview: "safetyOverview",
    previewLabel: "Safety workspace",
    cta: { label: "Explore Safety", href: `${ROUTES.features}/safety` },
  },
  {
    id: "executive",
    label: "Executive",
    hash: "role-executive",
    headline: "See the health of the business and projects in one place.",
    body: "Review project performance, financial visibility, risk signals, and intelligence grounded in connected project data.",
    need: "Portfolio performance, financial visibility, and grounded intelligence",
    categories: ["AI & Intelligence", "Financial Management"],
    workflows: ["Project performance", "Financial visibility", "Risk", "Predictive insights", "AI intelligence"],
    preview: "predHero",
    previewDark: true,
    previewLabel: "Executive intelligence",
    cta: { label: "Explore AI & Intelligence", href: `${ROUTES.features}#ai` },
  },
];

export const MAP_NODES = [
  {
    id: "general-contractors",
    group: "business" as const,
    label: "General Contractor",
    href: ROUTES.solutionsGeneralContractors,
    preview: "projectDashboard" as PreviewKey,
    capabilities: ["Project + financial + field in one record", "Subcontractor coordination", "RFIs, submittals, change orders"],
  },
  {
    id: "specialty-contractors",
    group: "business" as const,
    label: "Specialty Contractor",
    href: ROUTES.solutionsSpecialtyContractors,
    preview: "wfOverview" as PreviewKey,
    capabilities: ["Field activity and timesheets", "Billing connected to the work", "Workforce and T&M"],
  },
  {
    id: "owners",
    group: "business" as const,
    label: "Owner / Client",
    href: ROUTES.solutionsOwners,
    preview: "cpShowcase" as PreviewKey,
    capabilities: ["Scoped project visibility", "Approved financial oversight", "Documents and progress"],
  },
  {
    id: "commercial",
    group: "project" as const,
    label: "Commercial",
    href: ROUTES.solutionsCommercial,
    preview: "scheduleGantt" as PreviewKey,
    capabilities: ["Project controls and schedule", "Cost and documents", "Subcontractor coordination"],
  },
  {
    id: "residential",
    group: "project" as const,
    label: "Residential",
    href: ROUTES.solutionsResidential,
    preview: "projectDashboard" as PreviewKey,
    capabilities: ["Project + field + cost", "Client-facing updates", "Documents on the project record"],
  },
  {
    id: "civil",
    group: "project" as const,
    label: "Civil / Infrastructure",
    href: ROUTES.solutionsCivil,
    preview: "scheduleLookahead" as PreviewKey,
    capabilities: ["Look-ahead scheduling", "Workforce and compliance", "Field operations and safety"],
  },
  {
    id: "project-manager",
    group: "role" as const,
    label: "Project Manager",
    href: `${ROUTES.solutions}#role-project-manager`,
    preview: "projectDashboard" as PreviewKey,
    capabilities: ["Project status and schedule", "RFIs and submittals", "Documents and punch"],
  },
  {
    id: "estimator",
    group: "role" as const,
    label: "Estimator",
    href: `${ROUTES.solutions}#role-estimator`,
    preview: "estimating" as PreviewKey,
    capabilities: ["Estimates and bid work", "Estimate → budget", "Cost structure into delivery"],
  },
  {
    id: "superintendent",
    group: "role" as const,
    label: "Superintendent",
    href: `${ROUTES.solutions}#role-superintendent`,
    preview: "dailyLogDashboard" as PreviewKey,
    capabilities: ["Daily logs from the field", "Drawings and punch", "Safety activity"],
  },
  {
    id: "controller",
    group: "role" as const,
    label: "Controller",
    href: `${ROUTES.solutions}#role-controller`,
    preview: "accountingDashboard" as PreviewKey,
    capabilities: ["GL, AP / AR", "Pay applications and WIP", "Cash flow tied to the project"],
  },
  {
    id: "safety",
    group: "role" as const,
    label: "Safety",
    href: `${ROUTES.solutions}#role-safety`,
    preview: "safetyOverview" as PreviewKey,
    capabilities: ["Incidents and inspections", "Toolbox talks and JHA / JSA", "Corrective actions"],
  },
  {
    id: "executive",
    group: "role" as const,
    label: "Executive",
    href: `${ROUTES.solutions}#role-executive`,
    preview: "predHero" as PreviewKey,
    capabilities: ["Project performance", "Financial visibility", "Predictive insights"],
  },
] as const;

export const PLATFORM_STACKS = [
  {
    id: "general-contractors",
    label: "General Contractor",
    layers: [
      "Project Management",
      "Financial Management",
      "Field Operations",
      "Compliance & Workforce",
      "AI & Intelligence",
    ],
    capabilities: ["Projects", "Budget & Job Cost", "Scheduling", "Subcontractors", "Daily Logs", "RFIs"],
    href: ROUTES.solutionsGeneralContractors,
  },
  {
    id: "specialty-contractors",
    label: "Specialty Contractor",
    layers: ["Field Operations", "Financial Management", "Compliance & Workforce", "Project Management"],
    capabilities: ["Daily Logs", "Time", "Workforce", "Billing", "T&M", "Subcontractors"],
    href: ROUTES.solutionsSpecialtyContractors,
  },
  {
    id: "owners",
    label: "Owner / Client",
    layers: ["Business Growth", "Project Management", "Financial Management"],
    capabilities: ["Customer Portals", "Projects", "Documents", "AIA Pay Applications", "Drawings"],
    href: ROUTES.solutionsOwners,
  },
] as const;

export const WORKFLOW_STAGES = [
  {
    id: "plan",
    label: "Plan",
    modules: [
      { label: "Projects", href: `${ROUTES.features}/projects` },
      { label: "Scheduling", href: `${ROUTES.features}/scheduling` },
      { label: "Documents", href: `${ROUTES.features}/documents` },
    ],
  },
  {
    id: "estimate",
    label: "Estimate",
    modules: [
      { label: "Estimating", href: `${ROUTES.features}/estimating` },
      { label: "Bid Management", href: `${ROUTES.features}/bid-management` },
      { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
    ],
  },
  {
    id: "build",
    label: "Build",
    modules: [
      { label: "Daily Logs", href: `${ROUTES.features}/daily-logs` },
      { label: "Drawings", href: `${ROUTES.features}/drawings` },
      { label: "Punch", href: `${ROUTES.features}/punch` },
      { label: "T&M", href: `${ROUTES.features}/t-and-m` },
      { label: "Safety", href: `${ROUTES.features}/safety` },
    ],
  },
  {
    id: "control",
    label: "Control",
    modules: [
      { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
      { label: "Accounting", href: `${ROUTES.features}/native-accounting` },
      { label: "Billing", href: `${ROUTES.features}/billing` },
      { label: "WIP", href: `${ROUTES.features}/wip` },
      { label: "Cash Flow", href: `${ROUTES.features}/cash-flow` },
    ],
  },
  {
    id: "connect",
    label: "Connect",
    modules: [
      { label: "Customer Portals", href: `${ROUTES.features}/customer-portals` },
      { label: "RFIs", href: `${ROUTES.features}/rfis` },
      { label: "Submittals", href: `${ROUTES.features}/submittals` },
      { label: "Change Orders", href: `${ROUTES.features}/change-orders` },
    ],
  },
  {
    id: "intelligence",
    label: "Intelligence",
    modules: [
      { label: "AI Assistant", href: `${ROUTES.features}/ai-assistant` },
      { label: "Project Intelligence", href: `${ROUTES.features}/project-intelligence` },
      { label: "Predictive Insights", href: `${ROUTES.features}/predictive-insights` },
      { label: "Document Intelligence", href: `${ROUTES.features}/document-intelligence` },
      { label: "Automation", href: `${ROUTES.features}/automation` },
    ],
  },
] as const;

export type MatrixColumnId =
  | "gc"
  | "specialty"
  | "owner"
  | "pm"
  | "estimator"
  | "superintendent"
  | "controller"
  | "safety"
  | "executive";

export const MATRIX_COLUMNS: { id: MatrixColumnId; label: string }[] = [
  { id: "gc", label: "GC" },
  { id: "specialty", label: "Specialty" },
  { id: "owner", label: "Owner" },
  { id: "pm", label: "PM" },
  { id: "estimator", label: "Estimator" },
  { id: "superintendent", label: "Super" },
  { id: "controller", label: "Controller" },
  { id: "safety", label: "Safety" },
  { id: "executive", label: "Exec" },
];

/** Documented relevance only. true = used in that solution/role context. */
export const CAPABILITY_MATRIX: { label: string; href: string; marks: Record<MatrixColumnId, boolean> }[] = [
  {
    label: "Projects",
    href: `${ROUTES.features}/projects`,
    marks: { gc: true, specialty: true, owner: true, pm: true, estimator: true, superintendent: true, controller: true, safety: false, executive: true },
  },
  {
    label: "Scheduling",
    href: `${ROUTES.features}/scheduling`,
    marks: { gc: true, specialty: true, owner: true, pm: true, estimator: false, superintendent: true, controller: false, safety: false, executive: true },
  },
  {
    label: "Documents",
    href: `${ROUTES.features}/documents`,
    marks: { gc: true, specialty: true, owner: true, pm: true, estimator: true, superintendent: true, controller: false, safety: false, executive: false },
  },
  {
    label: "RFIs",
    href: `${ROUTES.features}/rfis`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: false, superintendent: true, controller: false, safety: false, executive: false },
  },
  {
    label: "Submittals",
    href: `${ROUTES.features}/submittals`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: false, superintendent: false, controller: false, safety: false, executive: false },
  },
  {
    label: "Change Orders",
    href: `${ROUTES.features}/change-orders`,
    marks: { gc: true, specialty: true, owner: true, pm: true, estimator: false, superintendent: false, controller: true, safety: false, executive: false },
  },
  {
    label: "Budget & Job Cost",
    href: `${ROUTES.features}/budget-job-cost`,
    marks: { gc: true, specialty: true, owner: true, pm: true, estimator: true, superintendent: false, controller: true, safety: false, executive: true },
  },
  {
    label: "Accounting",
    href: `${ROUTES.features}/native-accounting`,
    marks: { gc: true, specialty: true, owner: false, pm: false, estimator: false, superintendent: false, controller: true, safety: false, executive: true },
  },
  {
    label: "Billing",
    href: `${ROUTES.features}/billing`,
    marks: { gc: true, specialty: true, owner: false, pm: false, estimator: false, superintendent: false, controller: true, safety: false, executive: false },
  },
  {
    label: "Pay Applications",
    href: `${ROUTES.features}/aia-pay-applications`,
    marks: { gc: true, specialty: true, owner: true, pm: true, estimator: false, superintendent: false, controller: true, safety: false, executive: true },
  },
  {
    label: "WIP",
    href: `${ROUTES.features}/wip`,
    marks: { gc: true, specialty: false, owner: false, pm: false, estimator: false, superintendent: false, controller: true, safety: false, executive: true },
  },
  {
    label: "Cash Flow",
    href: `${ROUTES.features}/cash-flow`,
    marks: { gc: true, specialty: false, owner: false, pm: false, estimator: false, superintendent: false, controller: true, safety: false, executive: true },
  },
  {
    label: "Daily Logs",
    href: `${ROUTES.features}/daily-logs`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: false, superintendent: true, controller: false, safety: true, executive: false },
  },
  {
    label: "Drawings",
    href: `${ROUTES.features}/drawings`,
    marks: { gc: true, specialty: true, owner: true, pm: true, estimator: false, superintendent: true, controller: false, safety: false, executive: false },
  },
  {
    label: "Punch",
    href: `${ROUTES.features}/punch`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: false, superintendent: true, controller: false, safety: false, executive: false },
  },
  {
    label: "T&M",
    href: `${ROUTES.features}/t-and-m`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: false, superintendent: true, controller: true, safety: false, executive: false },
  },
  {
    label: "Safety",
    href: `${ROUTES.features}/safety`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: false, superintendent: true, controller: false, safety: true, executive: true },
  },
  {
    label: "Subcontractors",
    href: `${ROUTES.features}/subcontractors`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: false, superintendent: false, controller: false, safety: false, executive: false },
  },
  {
    label: "Compliance",
    href: `${ROUTES.features}/compliance`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: false, superintendent: false, controller: false, safety: true, executive: false },
  },
  {
    label: "Workforce",
    href: `${ROUTES.features}/workforce`,
    marks: { gc: true, specialty: true, owner: false, pm: false, estimator: false, superintendent: true, controller: false, safety: false, executive: false },
  },
  {
    label: "Time",
    href: `${ROUTES.features}/time`,
    marks: { gc: true, specialty: true, owner: false, pm: false, estimator: false, superintendent: true, controller: true, safety: false, executive: false },
  },
  {
    label: "AI Assistant",
    href: `${ROUTES.features}/ai-assistant`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: true, superintendent: true, controller: true, safety: false, executive: true },
  },
  {
    label: "Project Intelligence",
    href: `${ROUTES.features}/project-intelligence`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: false, superintendent: false, controller: false, safety: false, executive: true },
  },
  {
    label: "Predictive Insights",
    href: `${ROUTES.features}/predictive-insights`,
    marks: { gc: true, specialty: false, owner: false, pm: true, estimator: false, superintendent: false, controller: true, safety: false, executive: true },
  },
  {
    label: "Document Intelligence",
    href: `${ROUTES.features}/document-intelligence`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: true, superintendent: false, controller: false, safety: false, executive: false },
  },
  {
    label: "Automation",
    href: `${ROUTES.features}/automation`,
    marks: { gc: true, specialty: true, owner: false, pm: true, estimator: false, superintendent: false, controller: true, safety: false, executive: true },
  },
  {
    label: "CRM",
    href: `${ROUTES.features}/crm`,
    marks: { gc: true, specialty: true, owner: false, pm: false, estimator: false, superintendent: false, controller: false, safety: false, executive: true },
  },
  {
    label: "Leads",
    href: `${ROUTES.features}/leads`,
    marks: { gc: true, specialty: true, owner: false, pm: false, estimator: false, superintendent: false, controller: false, safety: false, executive: true },
  },
  {
    label: "Website Builder",
    href: `${ROUTES.features}/website-builder`,
    marks: { gc: true, specialty: true, owner: false, pm: false, estimator: false, superintendent: false, controller: false, safety: false, executive: true },
  },
  {
    label: "Customer Portals",
    href: `${ROUTES.features}/customer-portals`,
    marks: { gc: true, specialty: true, owner: true, pm: true, estimator: false, superintendent: false, controller: false, safety: false, executive: true },
  },
];

export const LIVE_PREVIEW_ITEMS: {
  id: string;
  group: "Business" | "Role";
  label: string;
  body: string;
  preview: PreviewKey;
  previewDark?: boolean;
  previewLabel: string;
  href: string;
}[] = [
  {
    id: "general-contractors",
    group: "Business",
    label: "General Contractor",
    body: "Project status, schedule, budget, RFIs, submittals, change orders, and field activity on one record.",
    preview: "projectDashboard",
    previewLabel: "General contractor workspace",
    href: ROUTES.solutionsGeneralContractors,
  },
  {
    id: "specialty-contractors",
    group: "Business",
    label: "Specialty Contractor",
    body: "Field activity, workforce, billing, and T&M connected to the project.",
    preview: "wfOverview",
    previewLabel: "Specialty contractor workspace",
    href: ROUTES.solutionsSpecialtyContractors,
  },
  {
    id: "owners",
    group: "Business",
    label: "Owner / Client",
    body: "Scoped visibility into progress, documents, and approved financial information.",
    preview: "cpShowcase",
    previewLabel: "Owner / client portal",
    href: ROUTES.solutionsOwners,
  },
  {
    id: "project-manager",
    group: "Role",
    label: "Project Manager",
    body: "Status, schedule, issues, and documents in a connected project workspace.",
    preview: "projectDashboard",
    previewLabel: "Project dashboard",
    href: `${ROUTES.solutions}#role-project-manager`,
  },
  {
    id: "estimator",
    group: "Role",
    label: "Estimator",
    body: "Estimating and bid work with a documented path into project budget.",
    preview: "estimating",
    previewLabel: "Estimating workspace",
    href: `${ROUTES.features}/estimating`,
  },
  {
    id: "superintendent",
    group: "Role",
    label: "Superintendent",
    body: "Daily logs, drawings, safety, and punch captured from the jobsite.",
    preview: "dailyLogDashboard",
    previewLabel: "Field workspace",
    href: `${ROUTES.features}#field-operations`,
  },
  {
    id: "controller",
    group: "Role",
    label: "Controller / Accountant",
    body: "Accounting, pay applications, WIP, and cash flow tied to project cost.",
    preview: "accountingDashboard",
    previewDark: true,
    previewLabel: "Financial workspace",
    href: `${ROUTES.features}#financial-management`,
  },
  {
    id: "safety",
    group: "Role",
    label: "Safety",
    body: "Incidents, inspections, toolbox talks, and corrective actions on the project.",
    preview: "safetyOverview",
    previewLabel: "Safety workspace",
    href: `${ROUTES.features}/safety`,
  },
  {
    id: "executive",
    group: "Role",
    label: "Executive",
    body: "Performance, financial visibility, and predictive insights grounded in project data.",
    preview: "predHero",
    previewDark: true,
    previewLabel: "Executive intelligence",
    href: `${ROUTES.features}#ai`,
  },
];

export const PROJECT_TYPE_PROFILES = [
  {
    slug: "commercial" as const,
    kicker: "Complex controls",
    characteristics: ["Multiple trades", "Document-heavy coordination", "Schedule and cost control"],
  },
  {
    slug: "residential" as const,
    kicker: "Delivery + client view",
    characteristics: ["Lot / unit progress", "Field activity close to the office", "Client-facing updates"],
  },
  {
    slug: "civil" as const,
    kicker: "Schedule + workforce",
    characteristics: ["Look-ahead planning", "Crew and compliance visibility", "Safety on the project record"],
  },
] as const;

export const JOURNEY_PATHS = [
  {
    n: "01",
    title: "Run the project",
    body: "For teams focused on project delivery — status, schedule, documents, field activity, and issues.",
    href: `${ROUTES.features}/projects`,
    cta: "Start with Projects",
    modules: ["Projects", "Scheduling", "Documents", "RFIs", "Daily Logs"],
  },
  {
    n: "02",
    title: "Control the business",
    body: "For teams focused on financial and operational control — cost, accounting, billing, WIP, and cash.",
    href: `${ROUTES.features}#financial-management`,
    cta: "Start with Financials",
    modules: ["Budget & Job Cost", "Accounting", "Billing", "WIP", "Cash Flow"],
  },
  {
    n: "03",
    title: "Grow the business",
    body: "For teams focused on relationships, pipeline, public presence, and client experience.",
    href: SOLUTIONS_GROWTH,
    cta: "Start with Business Growth",
    modules: ["CRM", "Leads", "Website Builder", "Customer Portals"],
  },
] as const;

export const DECISION_GROUPS = [
  {
    id: "business",
    label: "Business",
    prompt: "the type of company I operate",
    options: [
      { label: "General Contractor", href: ROUTES.solutionsGeneralContractors },
      { label: "Specialty Contractor", href: ROUTES.solutionsSpecialtyContractors },
      { label: "Owner / Client", href: ROUTES.solutionsOwners },
    ],
  },
  {
    id: "project-type",
    label: "Project type",
    prompt: "the kind of work we build",
    options: [
      { label: "Commercial", href: ROUTES.solutionsCommercial },
      { label: "Residential", href: ROUTES.solutionsResidential },
      { label: "Civil / Infrastructure", href: ROUTES.solutionsCivil },
    ],
  },
  {
    id: "role",
    label: "Role",
    prompt: "the work I am responsible for",
    options: [
      { label: "Project Manager", href: `${ROUTES.solutions}#role-project-manager` },
      { label: "Estimator", href: `${ROUTES.solutions}#role-estimator` },
      { label: "Superintendent", href: `${ROUTES.solutions}#role-superintendent` },
      { label: "Controller / Accountant", href: `${ROUTES.solutions}#role-controller` },
      { label: "Safety", href: `${ROUTES.solutions}#role-safety` },
      { label: "Executive", href: `${ROUTES.solutions}#role-executive` },
    ],
  },
] as const;

export const PLATFORM_CATEGORIES = [
  {
    title: "Project Management",
    href: `${ROUTES.features}/project-management`,
    items: [
      { label: "Projects", href: `${ROUTES.features}/projects` },
      { label: "Documents", href: `${ROUTES.features}/documents` },
      { label: "RFIs", href: `${ROUTES.features}/rfis` },
      { label: "Submittals", href: `${ROUTES.features}/submittals` },
      { label: "Change Orders", href: `${ROUTES.features}/change-orders` },
    ],
  },
  {
    title: "Financial Management",
    href: `${ROUTES.features}#financial-management`,
    items: [
      { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
      { label: "Native Accounting", href: `${ROUTES.features}/native-accounting` },
      { label: "Billing", href: `${ROUTES.features}/billing` },
      { label: "AIA Pay Applications", href: `${ROUTES.features}/aia-pay-applications` },
      { label: "WIP", href: `${ROUTES.features}/wip` },
      { label: "Cash Flow", href: `${ROUTES.features}/cash-flow` },
    ],
  },
  {
    title: "Field Operations",
    href: `${ROUTES.features}#field-operations`,
    items: [
      { label: "Daily Logs", href: `${ROUTES.features}/daily-logs` },
      { label: "Drawings", href: `${ROUTES.features}/drawings` },
      { label: "Punch", href: `${ROUTES.features}/punch` },
      { label: "T&M", href: `${ROUTES.features}/t-and-m` },
      { label: "Safety", href: `${ROUTES.features}/safety` },
      { label: "Mobile", href: `${ROUTES.features}/mobile` },
    ],
  },
  {
    title: "Compliance & Workforce",
    href: `${ROUTES.features}#compliance`,
    items: [
      { label: "Subcontractors", href: `${ROUTES.features}/subcontractors` },
      { label: "Compliance", href: `${ROUTES.features}/compliance` },
      { label: "Workforce", href: `${ROUTES.features}/workforce` },
      { label: "Time", href: `${ROUTES.features}/time` },
      { label: "Payroll Readiness", href: `${ROUTES.features}/payroll-readiness` },
    ],
  },
  {
    title: "AI & Intelligence",
    href: `${ROUTES.features}#ai`,
    items: [
      { label: "AI Assistant", href: `${ROUTES.features}/ai-assistant` },
      { label: "Project Intelligence", href: `${ROUTES.features}/project-intelligence` },
      { label: "Predictive Insights", href: `${ROUTES.features}/predictive-insights` },
      { label: "Document Intelligence", href: `${ROUTES.features}/document-intelligence` },
      { label: "Automation", href: `${ROUTES.features}/automation` },
    ],
  },
  {
    title: "Business Growth",
    href: SOLUTIONS_GROWTH,
    items: [
      { label: "CRM", href: `${ROUTES.features}/crm` },
      { label: "Leads", href: `${ROUTES.features}/leads` },
      { label: "Website Builder", href: `${ROUTES.features}/website-builder` },
      { label: "Customer Portals", href: `${ROUTES.features}/customer-portals` },
    ],
  },
] as const;

export const TRUST_AUDIENCE = [
  "General Contractors",
  "Specialty Contractors",
  "Project Owners",
  "Project Managers",
  "Estimators",
  "Superintendents",
  "Controllers",
  "Safety Teams",
] as const;

export const STARTING_POINTS = JOURNEY_PATHS;

export const FINAL_CTA = {
  headline: "See how Vertex fits the way you work.",
  supporting:
    "Explore the platform by business, project type, or role and find the workflows that matter most to your team.",
  primary: { label: "Explore Solutions", href: `${ROUTES.solutions}#finder` },
  secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  trial: { label: CTAS.trial.label, href: CTAS.trial.href },
} as const;

export function getSolutionBySlug(slug: string): SolutionDetail | undefined {
  if (slug in SOLUTION_DETAILS) return SOLUTION_DETAILS[slug as SolutionSlug];
  return undefined;
}
