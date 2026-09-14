/**
 * Commercial Construction solution page content.
 * Source: SOLUTION_DETAILS.commercial, PLATFORM_CATEGORIES, Feature detail pages
 * (projects, scheduling, documents, drawings, RFIs, submittals, change orders,
 * field/mobile, financials, subcontractors/compliance, customer portals, AI).
 * Does not invent unsupported product functionality, metrics, or testimonials.
 * No offline drawing or conflict-resolution claims.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { PLATFORM_CATEGORIES, SOLUTION_DETAILS } from "./data";

const COMMERCIAL = SOLUTION_DETAILS.commercial;

export const commercialPageMeta = {
  title: "Commercial Construction Software | Vertex CMS Solutions",
  description:
    "Vertex CMS connects commercial construction project management, field operations, documents, financials, compliance, owner collaboration, and intelligence on one project record.",
  canonical: ROUTES.solutionsCommercial,
} as const;

export const commercialHero = {
  eyebrow: "Solution · Commercial Construction",
  headline: "Keep commercial project controls connected.",
  supporting: COMMERCIAL.body,
  primary: { label: CTAS.trial.label, href: CTAS.trial.href },
  secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  preview: COMMERCIAL.preview,
  previewLabel: COMMERCIAL.previewLabel,
  overlayPreview: "documentCenter" as PreviewKey,
  overlayLabel: "Project documents",
  chips: [
    { label: "Projects", href: `${ROUTES.features}/projects` },
    { label: "Field Operations", href: `${ROUTES.features}#field-operations` },
    { label: "Financials", href: `${ROUTES.features}#financial-management` },
    { label: "Collaboration", href: `${ROUTES.features}/customer-portals` },
    { label: "Intelligence", href: `${ROUTES.features}#ai` },
  ],
} as const;

export const commercialConnected = {
  eyebrow: "The commercial project, connected",
  headline: "Every control still sits on the same record.",
  supporting:
    "Schedule, documents, RFIs, submittals, changes, drawings, field activity, and financials stay connected around the commercial project — not in separate tools.",
  nodes: [
    {
      id: "projects",
      label: "Projects",
      detail: "Status and controls",
      href: `${ROUTES.features}/projects`,
      preview: "projectDashboard" as PreviewKey,
    },
    {
      id: "scheduling",
      label: "Scheduling",
      detail: "Plan and look-ahead",
      href: `${ROUTES.features}/scheduling`,
      preview: "scheduleGantt" as PreviewKey,
    },
    {
      id: "documents",
      label: "Documents",
      detail: "Current files and versions",
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
      id: "field",
      label: "Field Operations",
      detail: "Logs, punch, T&M, safety",
      href: `${ROUTES.features}#field-operations`,
      preview: "dailyLogDashboard" as PreviewKey,
    },
    {
      id: "financials",
      label: "Financials",
      detail: "Cost, billing, accounting",
      href: `${ROUTES.features}#financial-management`,
      preview: "budgetDashboard" as PreviewKey,
      previewDark: true,
    },
  ],
} as const;

export const commercialCoordination = {
  eyebrow: "Project management + coordination",
  headline: "Plan, coordinate, track, and resolve in one workspace.",
  supporting:
    "Keep the commercial job’s schedule, documents, RFIs, submittals, change orders, drawings, and punch connected so office teams are not coordinating from disconnected files.",
  stages: [
    {
      id: "plan",
      label: "Plan",
      body: "Set up the project, schedule, and look-ahead.",
      preview: "scheduleGantt" as PreviewKey,
      href: `${ROUTES.features}/scheduling`,
    },
    {
      id: "coordinate",
      label: "Coordinate",
      body: "Documents, RFIs, submittals, and drawings stay on the record.",
      preview: "documentCenter" as PreviewKey,
      href: `${ROUTES.features}/documents`,
    },
    {
      id: "track",
      label: "Track",
      body: "Change orders and punch keep status visible as the work moves.",
      preview: "changeOrderRegister" as PreviewKey,
      previewDark: true,
      href: `${ROUTES.features}/change-orders`,
    },
    {
      id: "resolve",
      label: "Resolve",
      body: "Close questions and outstanding work against the same project.",
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

export const commercialField = {
  eyebrow: "Field + office",
  headline: "What happens on site should already be on the project.",
  supporting:
    "Capture daily logs, photos, drawings, punch, T&M, safety, and time from the field. Field capture can continue offline, queue work, and sync when connectivity returns — so the office works from current project information.",
  stages: [
    {
      id: "activity",
      label: "Field activity",
      body: "Logs, photos, punch, T&M, and safety happen where the crew is.",
      preview: "dailyLogDashboard" as PreviewKey,
    },
    {
      id: "capture",
      label: "Capture",
      body: "Mobile workflows record the work against the commercial project.",
      preview: "mobileWorkspace" as PreviewKey,
    },
    {
      id: "sync",
      label: "Sync",
      body: "Queued field work syncs when connectivity returns.",
      preview: "dailyLogCapture" as PreviewKey,
    },
    {
      id: "record",
      label: "Project record",
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

export const commercialFinancials = {
  eyebrow: "Financial control",
  headline: "Commercial project activity should be visible in cost and cash.",
  supporting:
    "Connect contract billing and project cost to native accounting so commercial teams are not reconstructing the same work in a separate finance tool.",
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

export const commercialSubs = {
  eyebrow: "Subcontractors + compliance",
  headline: "Trades, readiness, and labor stay on the commercial job.",
  supporting:
    "Keep subcontractor relationships, required documents, workforce, time, and payroll readiness visible for the work — without treating Vertex CMS as legal advice or a guaranteed compliance outcome.",
  preview: "subReadiness" as PreviewKey,
  overlayPreview: "wfOverview" as PreviewKey,
  overlayLabel: "Workforce on the project",
  points: [
    {
      title: "Subcontractors",
      body: "Profiles and project relationships for the trades on the job.",
      href: `${ROUTES.features}/subcontractors`,
    },
    {
      title: "Compliance",
      body: "Requirements, insurance, and lien waivers connected to the record.",
      href: `${ROUTES.features}/compliance`,
    },
    {
      title: "Workforce",
      body: "Crews and assignments that sit with the same project work.",
      href: `${ROUTES.features}/workforce`,
    },
    {
      title: "Time",
      body: "Hours and timesheets against project cost codes.",
      href: `${ROUTES.features}/time`,
    },
    {
      title: "Payroll Readiness",
      body: "Approved labor organized for payroll-related handoff.",
      href: `${ROUTES.features}/payroll-readiness`,
    },
  ],
} as const;

export const commercialDocuments = {
  eyebrow: "Documents, drawings + project information",
  headline: "The commercial information set stays current and findable.",
  supporting:
    "Documents, drawings, RFIs, submittals, revisions, markup, search, transmittals, and as-built sheet tracking stay in one project information environment.",
  views: [
    { id: "documents", label: "Documents", preview: "documentCenter" as PreviewKey, href: `${ROUTES.features}/documents` },
    { id: "search", label: "Search", preview: "documentSearch" as PreviewKey, href: `${ROUTES.features}/documents` },
    { id: "revisions", label: "Revision control", preview: "documentVersions" as PreviewKey, href: `${ROUTES.features}/documents` },
    { id: "drawings", label: "Drawings", preview: "drawingRegister" as PreviewKey, href: `${ROUTES.features}/drawings` },
    { id: "viewer", label: "Drawing viewer", preview: "drawingViewer" as PreviewKey, href: `${ROUTES.features}/drawings` },
    { id: "markup", label: "Markup", preview: "drawingMarkup" as PreviewKey, href: `${ROUTES.features}/drawings` },
    { id: "as-built", label: "As-built tracking", preview: "sheetsAsBuilt" as PreviewKey, href: `${ROUTES.features}/drawings` },
    { id: "transmittals", label: "Transmittals", preview: "transmittal" as PreviewKey, href: `${ROUTES.features}/documents` },
    { id: "rfis", label: "RFIs", preview: "rfiRegister" as PreviewKey, href: `${ROUTES.features}/rfis` },
    { id: "submittals", label: "Submittals", preview: "submittalRegister" as PreviewKey, href: `${ROUTES.features}/submittals` },
  ],
} as const;

export const commercialOwner = {
  eyebrow: "Owner / client collaboration",
  headline: "Share context. Keep the internal workspace internal.",
  supporting:
    "Give owners and clients a controlled portal for dashboard, read-only budget, schedule, photos, invoices, draw requests, pay-app and change-order review, and warranty claims — scoped to assigned project access.",
  stages: [
    {
      id: "team",
      label: "Project team",
      body: "The commercial team manages the project record in Vertex CMS.",
      preview: "projectDashboard" as PreviewKey,
    },
    {
      id: "context",
      label: "Shared context",
      body: "Documents, schedule, and financial information stay connected to that record.",
      preview: "cpDocuments" as PreviewKey,
    },
    {
      id: "owner",
      label: "Owner / Client",
      body: "The portal shows assigned project scope — not tenant-wide access.",
      preview: "cpShowcase" as PreviewKey,
    },
    {
      id: "review",
      label: "Review + approval",
      body: "Pay applications and change orders can be approved or rejected with comments.",
      preview: "cpOwnerPortal" as PreviewKey,
    },
  ],
  href: `${ROUTES.features}/customer-portals`,
} as const;

export const commercialAi = {
  eyebrow: "AI + project intelligence",
  headline: "Intelligence on the commercial project — with people in control.",
  supporting:
    "Use AI Assistant, Project Intelligence, Predictive Insights, Document Intelligence, and Automation on connected commercial project information. Access is permission-aware. Tool calls are logged. Write actions require a plain-English summary and explicit human confirmation.",
  note: "AI assists users and does not replace human review. AI cannot delete records.",
  stages: [
    {
      id: "data",
      label: "Project data",
      body: "Grounded in schedule, documents, drawings, cost, and field activity already in Vertex CMS.",
      preview: "aiGrounded" as PreviewKey,
    },
    {
      id: "intelligence",
      label: "Intelligence",
      body: "See status, risk, and document context without leaving the commercial workflow.",
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

const COMMERCIAL_AREA_ORDER = [
  "Project Management",
  "Field Operations",
  "Financial Management",
  "Compliance & Workforce",
  "AI & Intelligence",
] as const;

export const commercialPlatform = {
  eyebrow: "One commercial construction platform",
  headline: "Five areas. One operating system for the job.",
  supporting:
    "Project management, field operations, financials, workforce, and intelligence stay in Vertex CMS — not five disconnected products.",
  areas: [...PLATFORM_CATEGORIES]
    .filter((cat) => (COMMERCIAL_AREA_ORDER as readonly string[]).includes(cat.title))
    .sort(
      (a, b) =>
        (COMMERCIAL_AREA_ORDER as readonly string[]).indexOf(a.title) -
        (COMMERCIAL_AREA_ORDER as readonly string[]).indexOf(b.title),
    ),
  previews: {
    "Project Management": { preview: "scheduleGantt" as PreviewKey },
    "Field Operations": { preview: "dailyLogDashboard" as PreviewKey },
    "Financial Management": { preview: "accountingDashboard" as PreviewKey, dark: true },
    "Compliance & Workforce": { preview: "subReadiness" as PreviewKey },
    "AI & Intelligence": { preview: "aiHero" as PreviewKey, dark: true },
  } as Record<string, { preview: PreviewKey; dark?: boolean }>,
} as const;

export const commercialCta = {
  headline: "See Vertex CMS on a commercial construction project.",
  supporting: "Walk through project controls, field, documents, and financial workflows — or start a free trial.",
  primary: { label: CTAS.demo.label, href: CTAS.demo.href },
  secondary: { label: CTAS.trial.label, href: CTAS.trial.href },
} as const;
