/**
 * Residential Construction solution page content.
 * Source: SOLUTION_DETAILS.residential, PLATFORM_CATEGORIES, Feature detail pages
 * (projects, field/mobile, change orders, budget/job cost, billing, workforce,
 * safety, payroll readiness, customer portals, AI).
 * Does not invent unsupported product functionality, metrics, or testimonials.
 * No offline drawing or conflict-resolution claims.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { PLATFORM_CATEGORIES, SOLUTION_DETAILS } from "./data";

const RESIDENTIAL = SOLUTION_DETAILS.residential;

export const residentialPageMeta = {
  title: "Residential Construction Software | Vertex CMS Solutions",
  description:
    "Vertex CMS connects residential construction project control, field execution, financial visibility, owner collaboration, and intelligence on one project record.",
  canonical: ROUTES.solutionsResidential,
} as const;

export const residentialHero = {
  eyebrow: "Solution · Residential Construction",
  headline: "Keep residential work, cost, and client visibility aligned.",
  supporting: RESIDENTIAL.body,
  primary: { label: CTAS.trial.label, href: CTAS.trial.href },
  secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  preview: RESIDENTIAL.preview,
  previewLabel: RESIDENTIAL.previewLabel,
  overlayPreview: "cpShowcase" as PreviewKey,
  overlayLabel: "Owner / client view",
  chips: [
    { label: "Projects", href: `${ROUTES.features}/projects` },
    { label: "Field", href: `${ROUTES.features}#field-operations` },
    { label: "Financials", href: `${ROUTES.features}#financial-management` },
    { label: "Collaboration", href: `${ROUTES.features}/customer-portals` },
    { label: "Intelligence", href: `${ROUTES.features}#ai` },
  ],
} as const;

export const residentialConnected = {
  eyebrow: "The residential project, connected",
  headline: "Planning and execution stay on one record.",
  supporting:
    "Projects, schedule, documents, RFIs, submittals, changes, drawings, daily logs, and punch stay connected from the plan through the work.",
  nodes: [
    {
      id: "projects",
      label: "Projects",
      detail: "Job record and status",
      href: `${ROUTES.features}/projects`,
      preview: "projectDashboard" as PreviewKey,
    },
    {
      id: "scheduling",
      label: "Scheduling",
      detail: "Plan and look-ahead",
      href: `${ROUTES.features}/scheduling`,
      preview: "scheduleLookahead" as PreviewKey,
    },
    {
      id: "documents",
      label: "Documents",
      detail: "Current project files",
      href: `${ROUTES.features}/documents`,
      preview: "documentCenter" as PreviewKey,
    },
    {
      id: "rfis",
      label: "RFIs",
      detail: "Questions on the work",
      href: `${ROUTES.features}/rfis`,
      preview: "rfiRegister" as PreviewKey,
    },
    {
      id: "submittals",
      label: "Submittals",
      detail: "Review and status",
      href: `${ROUTES.features}/submittals`,
      preview: "submittalRegister" as PreviewKey,
    },
    {
      id: "changes",
      label: "Change Orders",
      detail: "Approved project changes",
      href: `${ROUTES.features}/change-orders`,
      preview: "changeOrderRegister" as PreviewKey,
      previewDark: true,
    },
    {
      id: "drawings",
      label: "Drawings",
      detail: "Current sheets and markups",
      href: `${ROUTES.features}/drawings`,
      preview: "drawingRegister" as PreviewKey,
    },
    {
      id: "logs",
      label: "Daily Logs",
      detail: "Work captured on site",
      href: `${ROUTES.features}/daily-logs`,
      preview: "dailyLogDashboard" as PreviewKey,
    },
    {
      id: "punch",
      label: "Punch",
      detail: "Outstanding work",
      href: `${ROUTES.features}/punch`,
      preview: "punchDashboard" as PreviewKey,
    },
  ],
} as const;

export const residentialPlan = {
  eyebrow: "Plan + coordinate",
  headline: "The residential workspace holds the moving parts.",
  supporting:
    "Schedules, documents, drawings, RFIs, submittals, and changes sit in the same project context — so residential teams are not coordinating from disconnected files.",
  stages: [
    {
      id: "plan",
      label: "Plan",
      body: "Set up the project and schedule the work.",
      preview: "projectDashboard" as PreviewKey,
      href: `${ROUTES.features}/projects`,
    },
    {
      id: "coordinate",
      label: "Coordinate",
      body: "Documents, drawings, RFIs, and submittals stay on the record.",
      preview: "documentCenter" as PreviewKey,
      href: `${ROUTES.features}/documents`,
    },
    {
      id: "track",
      label: "Track",
      body: "Change orders keep status and cost impact visible.",
      preview: "changeOrderRegister" as PreviewKey,
      previewDark: true,
      href: `${ROUTES.features}/change-orders`,
    },
    {
      id: "resolve",
      label: "Resolve",
      body: "Punch and open items close against the same project.",
      preview: "punchDashboard" as PreviewKey,
      href: `${ROUTES.features}/punch`,
    },
  ],
  modules: [
    { label: "Projects", href: `${ROUTES.features}/projects` },
    { label: "Scheduling", href: `${ROUTES.features}/scheduling` },
    { label: "Documents", href: `${ROUTES.features}/documents` },
    { label: "RFIs", href: `${ROUTES.features}/rfis` },
    { label: "Submittals", href: `${ROUTES.features}/submittals` },
    { label: "Change Orders", href: `${ROUTES.features}/change-orders` },
    { label: "Drawings", href: `${ROUTES.features}/drawings` },
    { label: "Punch", href: `${ROUTES.features}/punch` },
  ],
} as const;

export const residentialField = {
  eyebrow: "Field execution",
  headline: "What the crew captures should already be on the job.",
  supporting:
    "Capture daily logs, photos, drawings, punch, T&M, and safety from the field. Field capture can continue offline, queue work, and sync when connectivity returns — so the office works from current project information.",
  stages: [
    {
      id: "field",
      label: "Field",
      body: "Logs, photos, punch, T&M, and safety happen on site.",
      preview: "dailyLogDashboard" as PreviewKey,
    },
    {
      id: "capture",
      label: "Capture",
      body: "Mobile workflows record the work against the residential project.",
      preview: "mobileWorkspace" as PreviewKey,
    },
    {
      id: "sync",
      label: "Sync",
      body: "Queued field work syncs when connectivity returns.",
      preview: "dailyLogCapture" as PreviewKey,
    },
    {
      id: "project",
      label: "Project",
      body: "Office teams review the same field information without re-entry.",
      preview: "projectDashboard" as PreviewKey,
    },
  ],
  workflows: [
    { label: "Daily Logs", href: `${ROUTES.features}/daily-logs` },
    { label: "Photos", href: `${ROUTES.features}/daily-logs` },
    { label: "Drawings", href: `${ROUTES.features}/drawings` },
    { label: "Punch", href: `${ROUTES.features}/punch` },
    { label: "T&M", href: `${ROUTES.features}/t-and-m` },
    { label: "Safety", href: `${ROUTES.features}/safety` },
    { label: "Mobile", href: `${ROUTES.features}/mobile` },
  ],
  sync: ["Offline", "Queued", "Syncing", "Synced"] as const,
} as const;

export const residentialFinancials = {
  eyebrow: "Financial visibility",
  headline: "Residential project activity should be visible in cost and cash.",
  supporting:
    "Connect contract billing and project cost to native accounting so residential teams are not reconstructing the same work in a separate finance tool.",
  picture: {
    label: "One financial picture",
    preview: "accountingDashboard" as PreviewKey,
    previewDark: true,
  },
  revenue: {
    label: "Contract path",
    steps: [
      { id: "contract", label: "Contract", preview: "billingWorkspace" as PreviewKey },
      { id: "pay-app", label: "Pay Application", preview: "payAppDashboard" as PreviewKey },
      { id: "billing", label: "Billing / AR", preview: "billingAr" as PreviewKey },
      { id: "cash", label: "Cash", preview: "cashDashboard" as PreviewKey },
    ],
  },
  cost: {
    label: "Cost path",
    steps: [
      { id: "po", label: "PO", preview: "budgetDashboard" as PreviewKey, previewDark: true },
      { id: "receipt", label: "Receipt", preview: "budgetFlow" as PreviewKey },
      { id: "ap", label: "AP", preview: "accountingAp" as PreviewKey, previewDark: true },
      { id: "job-cost", label: "Job Cost", preview: "budgetDashboard" as PreviewKey, previewDark: true },
      { id: "gl", label: "GL", preview: "accountingDashboard" as PreviewKey, previewDark: true },
    ],
  },
  modules: [
    { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
    { label: "Native Accounting", href: `${ROUTES.features}/native-accounting` },
    { label: "Billing", href: `${ROUTES.features}/billing` },
    { label: "AIA Pay Applications", href: `${ROUTES.features}/aia-pay-applications` },
    { label: "WIP", href: `${ROUTES.features}/wip` },
    { label: "Cash Flow", href: `${ROUTES.features}/cash-flow` },
  ],
} as const;

export const residentialChange = {
  eyebrow: "Change + cost visibility",
  headline: "A change should be visible in cost — not only in a conversation.",
  supporting:
    "Keep change order requests and change orders connected to budget, billing, and the project record so residential teams can see cost impact in context.",
  stages: [
    {
      id: "change",
      label: "Change",
      body: "Capture the change order request on the project.",
      preview: "changeOrderRegister" as PreviewKey,
      previewDark: true,
    },
    {
      id: "review",
      label: "Review",
      body: "See description, status, and contract context together.",
      preview: "changeOrderDetail" as PreviewKey,
      previewDark: true,
    },
    {
      id: "financial",
      label: "Financial context",
      body: "Cost impact stays connected to budget and billing workflows.",
      preview: "budgetVsActual" as PreviewKey,
      previewDark: true,
    },
    {
      id: "record",
      label: "Project record",
      body: "The change remains part of the same residential project record.",
      preview: "changeOrderContext" as PreviewKey,
      previewDark: true,
    },
  ],
  modules: [
    { label: "Change Orders", href: `${ROUTES.features}/change-orders` },
    { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
    { label: "Billing", href: `${ROUTES.features}/billing` },
    { label: "AIA Pay Applications", href: `${ROUTES.features}/aia-pay-applications` },
  ],
} as const;

export const residentialWorkforce = {
  eyebrow: "Field + workforce",
  headline: "Hours, crews, and safety stay with the work.",
  supporting:
    "Workforce, time, safety, and payroll readiness sit in the same environment as field activity — not a separate people system.",
  views: [
    {
      id: "workforce",
      label: "Workforce",
      body: "Workers, crews, and assignments on the project.",
      preview: "wfOverview" as PreviewKey,
      href: `${ROUTES.features}/workforce`,
    },
    {
      id: "time",
      label: "Time",
      body: "Project labor hours, cost codes, and timesheet approval.",
      preview: "timeWeekly" as PreviewKey,
      href: `${ROUTES.features}/time`,
    },
    {
      id: "safety",
      label: "Safety",
      body: "Incidents and inspections connected to the job.",
      preview: "safetyOverview" as PreviewKey,
      href: `${ROUTES.features}/safety`,
    },
    {
      id: "payroll",
      label: "Payroll Readiness",
      body: "Approved labor organized for payroll-related handoff.",
      preview: "prOverview" as PreviewKey,
      href: `${ROUTES.features}/payroll-readiness`,
    },
  ],
} as const;

export const residentialOwner = {
  eyebrow: "Owner / client connection",
  headline: "Give the client a controlled view — not the internal workspace.",
  supporting:
    "Customer Portals keep dashboard, read-only budget, schedule, photos, invoices, draw requests, pay-app and change-order review, and warranty claims connected to the residential project — scoped to assigned access.",
  teamPreview: "projectDashboard" as PreviewKey,
  portalPreview: "cpShowcase" as PreviewKey,
  stages: [
    {
      id: "team",
      label: "Project team",
      body: "The residential team manages the project record in Vertex CMS.",
    },
    {
      id: "information",
      label: "Project information",
      body: "Documents, schedule, photos, and financial context stay on that record.",
    },
    {
      id: "owner",
      label: "Owner / Client",
      body: "The portal shows assigned project scope — not tenant-wide access.",
    },
    {
      id: "review",
      label: "Review + approval",
      body: "Pay applications and change orders can be approved or rejected with comments.",
    },
  ],
  href: `${ROUTES.features}/customer-portals`,
} as const;

export const residentialAi = {
  eyebrow: "AI + intelligence",
  headline: "Ask the residential job — then confirm before anything is written.",
  supporting:
    "Use AI Assistant, Project Intelligence, Predictive Insights, Document Intelligence, and Automation on connected residential project information. Access is permission-aware. Tool calls are logged. Write actions require a plain-English summary and explicit human confirmation.",
  note: "AI assists users and does not replace human review. AI cannot delete records.",
  stages: [
    {
      id: "data",
      label: "Project data",
      body: "Grounded in logs, cost, documents, and project records already in Vertex CMS.",
      preview: "aiGrounded" as PreviewKey,
    },
    {
      id: "intelligence",
      label: "Intelligence",
      body: "See status, risk, and document context without leaving the residential workflow.",
      preview: "piWorkspace" as PreviewKey,
    },
    {
      id: "action",
      label: "Action",
      body: "Automation can prepare the next step — with logging and confirmation before execution.",
      preview: "autoApproval" as PreviewKey,
    },
  ],
  modules: [
    { label: "AI Assistant", href: `${ROUTES.features}/ai-assistant` },
    { label: "Project Intelligence", href: `${ROUTES.features}/project-intelligence` },
    { label: "Predictive Insights", href: `${ROUTES.features}/predictive-insights` },
    { label: "Document Intelligence", href: `${ROUTES.features}/document-intelligence` },
    { label: "Automation", href: `${ROUTES.features}/automation` },
  ],
} as const;

const RESIDENTIAL_AREA_ORDER = [
  "Project Management",
  "Field Operations",
  "Financial Management",
  "Compliance & Workforce",
  "AI & Intelligence",
] as const;

export const residentialPlatform = {
  eyebrow: "One residential construction platform",
  headline: "Five areas. One operating system for the job.",
  supporting:
    "Project management, field operations, financials, workforce, and intelligence stay in Vertex CMS — not five disconnected products.",
  areas: [...PLATFORM_CATEGORIES]
    .filter((cat) => (RESIDENTIAL_AREA_ORDER as readonly string[]).includes(cat.title))
    .sort(
      (a, b) =>
        (RESIDENTIAL_AREA_ORDER as readonly string[]).indexOf(a.title) -
        (RESIDENTIAL_AREA_ORDER as readonly string[]).indexOf(b.title),
    ),
  previews: {
    "Project Management": { preview: "projectDashboard" as PreviewKey },
    "Field Operations": { preview: "dailyLogDashboard" as PreviewKey },
    "Financial Management": { preview: "budgetDashboard" as PreviewKey, dark: true },
    "Compliance & Workforce": { preview: "wfOverview" as PreviewKey },
    "AI & Intelligence": { preview: "aiHero" as PreviewKey, dark: true },
  } as Record<string, { preview: PreviewKey; dark?: boolean }>,
} as const;

export const residentialCta = {
  headline: "See Vertex CMS on residential construction work.",
  supporting: "Walk through project control, field, cost, and client visibility — or start a free trial.",
  primary: { label: CTAS.demo.label, href: CTAS.demo.href },
  secondary: { label: CTAS.trial.label, href: CTAS.trial.href },
} as const;
