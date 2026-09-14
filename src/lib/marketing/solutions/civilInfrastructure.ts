/**
 * Civil / Infrastructure solution page content.
 * Source: SOLUTION_DETAILS.civil, PLATFORM_CATEGORIES, Feature detail pages.
 * Civil is a project-type solution — does not invent a dedicated infrastructure module.
 * No offline drawing or conflict-resolution claims.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { PLATFORM_CATEGORIES, SOLUTION_DETAILS } from "./data";

const CIVIL = SOLUTION_DETAILS.civil;

export const civilPageMeta = {
  title: "Civil / Infrastructure Software | Vertex CMS Solutions",
  description:
    "Vertex CMS connects Civil / Infrastructure project control, field operations, documents, financials, workforce, collaboration, and intelligence on one project record — without a separate infrastructure module.",
  canonical: ROUTES.solutionsCivil,
} as const;

export const civilHero = {
  eyebrow: "Solution · Civil / Infrastructure",
  headline: "Complex project control on one connected record.",
  supporting: CIVIL.body,
  primary: { label: CTAS.trial.label, href: CTAS.trial.href },
  secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  preview: CIVIL.preview,
  previewLabel: CIVIL.previewLabel,
  overlayPreview: "safetyOverview" as PreviewKey,
  overlayLabel: "Safety on the project",
  chips: [
    { label: "Project Control", href: `${ROUTES.features}/projects` },
    { label: "Field Operations", href: `${ROUTES.features}#field-operations` },
    { label: "Documents", href: `${ROUTES.features}/documents` },
    { label: "Financials", href: `${ROUTES.features}#financial-management` },
    { label: "Intelligence", href: `${ROUTES.features}#ai` },
  ],
} as const;

export const civilConnected = {
  eyebrow: "The project, connected",
  headline: "Complex project information stays on one record.",
  supporting:
    "Vertex CMS does not add a separate infrastructure module. Scheduling, documents, RFIs, submittals, changes, drawings, field activity, and financials stay connected around the project.",
  nodes: [
    {
      id: "projects",
      label: "Projects",
      detail: "Project control and status",
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

export const civilPlan = {
  eyebrow: "Plan + coordinate",
  headline: "Planning, coordination, and resolution share the same context.",
  supporting:
    "Keep the civil job’s schedule, documents, RFIs, submittals, change orders, drawings, and punch connected so project control is not split across disconnected files.",
  stages: [
    {
      id: "plan",
      label: "Plan",
      body: "Set up the project and look-ahead.",
      preview: "scheduleLookahead" as PreviewKey,
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
      body: "Change orders keep status visible as the work moves.",
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

export const civilField = {
  eyebrow: "Field operations",
  headline: "What happens in the field should already be on the project.",
  supporting:
    "Capture daily logs, photos, drawings, punch, T&M, and safety from the field. Field capture can continue offline, queue work, and sync when connectivity returns — so the office works from current project information.",
  stages: [
    {
      id: "field",
      label: "Field",
      body: "Logs, photos, punch, T&M, and safety happen where the crew is.",
      preview: "dailyLogDashboard" as PreviewKey,
    },
    {
      id: "capture",
      label: "Capture",
      body: "Mobile workflows record the work against the project.",
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

export const civilDocuments = {
  eyebrow: "Documents + drawings",
  headline: "Find the current sheet. Keep the history.",
  supporting:
    "Documents, search, drawing viewer, markup, sheet management, revision control, as-built tracking, and transmittals stay in one project information environment.",
  stages: [
    {
      id: "document",
      label: "Document",
      body: "Keep project files organized in one workspace.",
      preview: "documentCenter" as PreviewKey,
      href: `${ROUTES.features}/documents`,
    },
    {
      id: "find",
      label: "Find",
      body: "Search across project information and drawing titles.",
      preview: "documentSearch" as PreviewKey,
      href: `${ROUTES.features}/documents`,
    },
    {
      id: "review",
      label: "Review",
      body: "Open the current drawing set in the viewer.",
      preview: "drawingViewer" as PreviewKey,
      href: `${ROUTES.features}/drawings`,
    },
    {
      id: "revise",
      label: "Revise",
      body: "Track versions and capture markups without changing the original file.",
      preview: "drawingMarkup" as PreviewKey,
      href: `${ROUTES.features}/drawings`,
    },
    {
      id: "track",
      label: "Track",
      body: "Current revisions, as-built sheet tracking, and transmittals stay on the record.",
      preview: "sheetsAsBuilt" as PreviewKey,
      href: `${ROUTES.features}/drawings`,
    },
  ],
} as const;

export const civilChange = {
  eyebrow: "Change + project control",
  headline: "Issues and changes should stay connected to the record.",
  supporting:
    "RFIs, submittals, change orders, and job cost stay on the same project so civil teams can see information and changes in context — without inventing infrastructure-only approval processes.",
  stages: [
    {
      id: "issue",
      label: "Issue",
      body: "RFIs capture questions against the work.",
      preview: "rfiRegister" as PreviewKey,
    },
    {
      id: "information",
      label: "Information",
      body: "Submittals keep review status on the project.",
      preview: "submittalRegister" as PreviewKey,
    },
    {
      id: "change",
      label: "Change",
      body: "Change orders keep description, status, and cost impact together.",
      preview: "changeOrderDetail" as PreviewKey,
      previewDark: true,
    },
    {
      id: "context",
      label: "Project context",
      body: "Budget and job cost stay connected to the change.",
      preview: "budgetDashboard" as PreviewKey,
      previewDark: true,
    },
  ],
  modules: [
    { label: "RFIs", href: `${ROUTES.features}/rfis` },
    { label: "Submittals", href: `${ROUTES.features}/submittals` },
    { label: "Change Orders", href: `${ROUTES.features}/change-orders` },
    { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
  ],
} as const;

export const civilFinancials = {
  eyebrow: "Financial control",
  headline: "Project activity should be visible in cost and cash.",
  supporting:
    "Connect contract billing and project cost to native accounting so civil project teams are not reconstructing the same work in a separate finance tool.",
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

export const civilWorkforce = {
  eyebrow: "Workforce + compliance",
  headline: "Crews, time, safety, and readiness stay on the job.",
  supporting:
    "Keep subcontractors, compliance, workforce, time, payroll readiness, and safety visible for the work — without treating Vertex CMS as legal advice or a guaranteed compliance outcome.",
  preview: "safetyOverview" as PreviewKey,
  overlayPreview: "subReadiness" as PreviewKey,
  overlayLabel: "Subcontractor readiness",
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
    {
      title: "Safety",
      body: "Incidents and inspections connected to the project.",
      href: `${ROUTES.features}/safety`,
    },
  ],
} as const;

export const civilOwner = {
  eyebrow: "Owner / client collaboration",
  headline: "Share project context. Keep internal controls in place.",
  supporting:
    "Customer Portals keep dashboard, read-only budget, schedule, photos, invoices, draw requests, pay-app and change-order review, and warranty claims connected to the project — scoped to assigned access.",
  stages: [
    {
      id: "team",
      label: "Project team",
      body: "The project team manages the record in Vertex CMS.",
      preview: "projectDashboard" as PreviewKey,
    },
    {
      id: "information",
      label: "Project information",
      body: "Documents, schedule, and photos stay connected to that record.",
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
      label: "Review",
      body: "Pay applications and change orders can be reviewed with comments.",
      preview: "cpApprovals" as PreviewKey,
    },
    {
      id: "decision",
      label: "Decision",
      body: "Approve or reject in the portal — actions update workflow status.",
      preview: "cpOwnerPortal" as PreviewKey,
    },
  ],
  warranty: {
    label: "Warranty claim",
    body: "Owners can submit a claim with a description and photos against the assigned project.",
    preview: "cpOwnerWarranty" as PreviewKey,
  },
  href: `${ROUTES.features}/customer-portals`,
} as const;

export const civilAi = {
  eyebrow: "AI + intelligence",
  headline: "Intelligence on the project record — with people in control.",
  supporting:
    "Use AI Assistant, Project Intelligence, Predictive Insights, Document Intelligence, and Automation on connected project information. Access is permission-aware. Tool calls are logged. Write actions require a plain-English summary and explicit human confirmation.",
  note: "AI assists users and does not replace human review. AI cannot delete records.",
  stages: [
    {
      id: "data",
      label: "Project data",
      body: "Grounded in schedule, documents, drawings, field activity, and cost already in Vertex CMS.",
      preview: "aiGrounded" as PreviewKey,
    },
    {
      id: "intelligence",
      label: "Intelligence",
      body: "See status, risk, and document context without leaving the project.",
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

const CIVIL_AREA_ORDER = [
  "Project Management",
  "Financial Management",
  "Field Operations",
  "Compliance & Workforce",
  "AI & Intelligence",
] as const;

export const civilPlatform = {
  eyebrow: "One connected platform",
  headline: "Five areas. One operating system for the project.",
  supporting:
    "Project management, financials, field operations, workforce, and intelligence stay in Vertex CMS — not five disconnected products, and not a separate civil module.",
  areas: [...PLATFORM_CATEGORIES]
    .filter((cat) => (CIVIL_AREA_ORDER as readonly string[]).includes(cat.title))
    .sort(
      (a, b) =>
        (CIVIL_AREA_ORDER as readonly string[]).indexOf(a.title) - (CIVIL_AREA_ORDER as readonly string[]).indexOf(b.title),
    ),
  previews: {
    "Project Management": { preview: "scheduleLookahead" as PreviewKey },
    "Financial Management": { preview: "accountingDashboard" as PreviewKey, dark: true },
    "Field Operations": { preview: "dailyLogDashboard" as PreviewKey },
    "Compliance & Workforce": { preview: "safetyOverview" as PreviewKey },
    "AI & Intelligence": { preview: "aiHero" as PreviewKey, dark: true },
  } as Record<string, { preview: PreviewKey; dark?: boolean }>,
} as const;

export const civilCta = {
  headline: "See Vertex CMS on a Civil / Infrastructure project.",
  supporting: "Walk through project control, field, documents, and financial workflows — or start a free trial.",
  primary: { label: CTAS.demo.label, href: CTAS.demo.href },
  secondary: { label: CTAS.trial.label, href: CTAS.trial.href },
} as const;
