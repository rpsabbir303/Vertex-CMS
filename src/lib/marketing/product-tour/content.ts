/** Product Tour (CMS-1310–1317) — approved workflow copy only; no invented metrics or capabilities. */

import { ROUTES } from "@/lib/marketing/navigation";

export const PRODUCT_TOUR_SECTION_IDS = {
  platform: "tour-platform",
  financial: "tour-financial",
  field: "tour-field",
  ai: "tour-ai",
  demo: "tour-demo",
} as const;

export type ProductTourSectionId = keyof typeof PRODUCT_TOUR_SECTION_IDS;

export const TOUR_NAV_ITEMS: { id: ProductTourSectionId; index: number; label: string; short: string }[] = [
  { id: "platform", index: 1, label: "Platform", short: "Platform" },
  { id: "financial", index: 2, label: "Financial", short: "Financial" },
  { id: "field", index: 3, label: "Field", short: "Field" },
  { id: "ai", index: 4, label: "AI", short: "AI" },
];

export const PRODUCT_TOUR_HERO = {
  eyebrow: "Product tour",
  headline: "See how VertexBuild connects project, field, financial, and intelligence workflows.",
  supporting:
    "Explore representative product experiences for platform setup, job cost and billing, field capture, and AI-assisted project context — inside one connected construction record.",
  primaryCta: { label: "Explore the tour", href: `#${PRODUCT_TOUR_SECTION_IDS.platform}` },
  secondaryCta: { label: "Start free trial", href: ROUTES.signup },
} as const;

export type TourStepContent = {
  id: string;
  title: string;
  description: string;
};

export const PLATFORM_TOUR_STEPS: TourStepContent[] = [
  {
    id: "project-info",
    title: "Project information",
    description:
      "Project teams work from a shared record — scope, team, schedule context, and status visible in one workspace.",
  },
  {
    id: "documents",
    title: "Documents",
    description:
      "Drawings, submittals, and project files stay tied to the active project so office and field reference the same document set.",
  },
  {
    id: "field-activity",
    title: "Field activity",
    description:
      "Daily logs, photos, and field updates feed the project record so supers and PMs see what happened on site.",
  },
  {
    id: "financial-visibility",
    title: "Financial visibility",
    description:
      "Job cost and billing context connect to project activity so finance and operations align on the same numbers.",
  },
  {
    id: "reporting",
    title: "Reporting",
    description:
      "Portfolio and project reporting draw from connected project, field, and financial data — not disconnected spreadsheets.",
  },
];

export const FINANCIAL_TOUR_STEPS: TourStepContent[] = [
  {
    id: "budget",
    title: "Budget / cost",
    description: "Budget and cost structures anchor job cost tracking against the project record.",
  },
  {
    id: "contracts",
    title: "Contracts / change orders",
    description: "Contract values and change orders roll into cost and billing context as work evolves.",
  },
  {
    id: "billing",
    title: "Billing",
    description: "Billing workflows connect field and cost activity to invoicing and owner-facing packages.",
  },
  {
    id: "ap-gl",
    title: "AP / native GL",
    description: "Accounts payable and general ledger views align with job cost for finance teams.",
  },
  {
    id: "wip",
    title: "WIP / financial visibility",
    description: "Work-in-progress and financial visibility reports summarize where projects stand financially.",
  },
];

export const FIELD_TOUR_STEPS: TourStepContent[] = [
  { id: "daily-logs", title: "Daily logs", description: "Capture work completed, crew, and conditions from the field." },
  { id: "photos", title: "Photos / capture", description: "Attach photos and GPS-tagged capture to the daily record." },
  { id: "rfis", title: "RFIs", description: "Raise and track RFIs with project context on mobile or desktop." },
  { id: "drawings", title: "Drawings", description: "Access sheets and markups tied to the active project." },
  { id: "punch", title: "Punch", description: "Track punch items from discovery through closeout." },
  { id: "safety", title: "Safety", description: "Log inspections, incidents, and compliance activity in the field." },
  { id: "time", title: "Time", description: "Time capture connects workforce activity back to the project record." },
];

export const FIELD_SYNC_FLOW = ["Capture", "Sync", "Project record", "Office review"] as const;

export const AI_TOUR_STEPS: TourStepContent[] = [
  {
    id: "project-qa",
    title: "Project Q&A",
    description: "Ask questions in the context of an active project — answers reference project data you already maintain.",
  },
  {
    id: "document-qa",
    title: "Document Q&A / processing",
    description: "Surface answers from project documents with processing that stays tied to your files and permissions.",
  },
  {
    id: "risk-insight",
    title: "Proactive risk insight",
    description:
      "Insights highlight patterns worth review — predictive capabilities may expand over time; teams confirm actions before anything is committed.",
  },
];

export const AI_ACTION_FLOW = [
  { label: "AI proposes", detail: "Draft or suggestion generated from project context" },
  { label: "Human reviews", detail: "Your team validates content before use" },
  { label: "Human confirms", detail: "Explicit approval required" },
  { label: "System commits", detail: "Recorded only after confirmation" },
] as const;

/** Interactive AI Product Tour stages (5-step narrative). */
export const AI_WORKFLOW_STAGES = [
  { id: "context", index: 0, label: "Context", short: "Context" },
  { id: "analysis", index: 1, label: "Analysis", short: "Analysis" },
  { id: "insight", index: 2, label: "Insight", short: "Insight" },
  { id: "review", index: 3, label: "Review", short: "Review" },
  { id: "confirm", index: 4, label: "Confirm", short: "Confirm" },
] as const;

export const AI_CONTEXT_SOURCES = [
  { id: "project", label: "Project" },
  { id: "documents", label: "Documents" },
  { id: "daily-logs", label: "Daily logs" },
  { id: "financial", label: "Financial data" },
  { id: "rfis", label: "RFIs" },
] as const;

/** Insight rows aligned with representative AI assistant preview (no new claims). */
export const AI_INSIGHT_ROWS = [
  { category: "Budget", insight: "Potential variance", context: "Job cost · commitments" },
  { category: "Schedule", insight: "Critical activity delayed", context: "Schedule · field logs" },
  { category: "RFI", insight: "Response overdue", context: "RFI register" },
] as const;

export const AI_REVIEW_PROPOSAL = {
  title: "Flag budget variance for project review",
  supports: ["Budget", "Commitments", "Change orders"],
} as const;

export const DEMO_PLAYER_COPY = {
  eyebrow: "Product tour / video",
  headline: "See VertexBuild in action.",
  videoLabel: "Product tour overview",
  description:
    "Take a guided look at how project, financial, field, and intelligence workflows connect inside one construction management platform.",
  durationLabel: "6:40",
  unavailableTitle: "Video preview",
  unavailableMessage: "Video unavailable in this environment.",
  exploreTourHref: `#${PRODUCT_TOUR_SECTION_IDS.platform}`,
  exploreTourLabel: "Explore the interactive tour",
} as const;

export const DEMO_VIDEO_TIMELINE = [
  {
    index: 1,
    label: "Project",
    description: "Project setup, documents, and connected project information.",
    href: `#${PRODUCT_TOUR_SECTION_IDS.platform}`,
  },
  {
    index: 2,
    label: "Field",
    description: "Daily logs, photos, drawings, RFIs, and field activity.",
    href: `#${PRODUCT_TOUR_SECTION_IDS.field}`,
  },
  {
    index: 3,
    label: "Financial",
    description: "Budget, cost, billing, and financial visibility.",
    href: `#${PRODUCT_TOUR_SECTION_IDS.financial}`,
  },
  {
    index: 4,
    label: "Intelligence",
    description: "AI-assisted project context, insights, and human review.",
    href: `#${PRODUCT_TOUR_SECTION_IDS.ai}`,
  },
] as const;

export const TOUR_FINAL_CTA = {
  headline: "Put connected project intelligence into practice.",
  supporting:
    "You have seen how project, field, financial, and AI workflows connect in VertexBuild. Start a trial or book a demo to continue with your team.",
  primary: { label: "Start free trial", href: ROUTES.signup },
  secondary: { label: "Book a demo", href: ROUTES.demo },
} as const;
