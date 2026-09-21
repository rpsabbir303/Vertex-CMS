/**
 * Specialty Contractor solution page content.
 * Source: SOLUTION_DETAILS.specialty-contractors, PLATFORM_CATEGORIES, Feature detail pages
 * (field, T&M, time, workforce, billing, job cost, AI), featuresLandingMobile / HomeFieldSync.
 * Does not invent unsupported product functionality, metrics, or testimonials.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { PLATFORM_CATEGORIES, SOLUTION_DETAILS } from "./data";

const SC = SOLUTION_DETAILS["specialty-contractors"];

export const scPageMeta = {
  title: "Specialty Contractor Software | VertexBuild Solutions",
  description:
    "VertexBuild connects Specialty Contractor field operations, projects, workforce, billing, compliance, and intelligence on one project record.",
  canonical: ROUTES.solutionsSpecialtyContractors,
} as const;

export const scHero = {
  eyebrow: "Solution · Specialty Contractor",
  headline: "Field work, labor, and billing on one record.",
  supporting: SC.body,
  primary: { label: CTAS.trial.label, href: CTAS.trial.href },
  secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  preview: "dailyLogDashboard" as PreviewKey,
  previewLabel: "Field operations",
  overlayPreview: SC.preview,
  overlayLabel: SC.previewLabel,
  chips: [
    { label: "Field", href: `${ROUTES.features}#field-operations` },
    { label: "Projects", href: `${ROUTES.features}/projects` },
    { label: "Workforce", href: `${ROUTES.features}/workforce` },
    { label: "Billing", href: `${ROUTES.features}/billing` },
    { label: "Financial Visibility", href: `${ROUTES.features}#financial-management` },
  ],
} as const;

export const scOperating = {
  eyebrow: "Operating system",
  headline: "The day-to-day work stays connected to the office.",
  supporting:
    "Specialty contractor teams capture field activity, labor, and T&M against the same project the office uses for scheduling, billing, and job cost.",
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
      id: "logs",
      label: "Daily Logs",
      detail: "Work captured on site",
      href: `${ROUTES.features}/daily-logs`,
      preview: "dailyLogDashboard" as PreviewKey,
    },
    {
      id: "drawings",
      label: "Drawings",
      detail: "Current sheets and markups",
      href: `${ROUTES.features}/drawings`,
      preview: "drawingRegister" as PreviewKey,
    },
    {
      id: "tm",
      label: "T&M",
      detail: "Labor, material, equipment",
      href: `${ROUTES.features}/t-and-m`,
      preview: "tmTicket" as PreviewKey,
    },
    {
      id: "safety",
      label: "Safety",
      detail: "Incidents and inspections",
      href: `${ROUTES.features}/safety`,
      preview: "safetyOverview" as PreviewKey,
    },
    {
      id: "time",
      label: "Time",
      detail: "Hours on the work",
      href: `${ROUTES.features}/time`,
      preview: "timeOverview" as PreviewKey,
    },
    {
      id: "billing",
      label: "Billing",
      detail: "Progress and receivables",
      href: `${ROUTES.features}/billing`,
      preview: "billingWorkspace" as PreviewKey,
    },
    {
      id: "job-cost",
      label: "Job Cost",
      detail: "Committed and actual cost",
      href: `${ROUTES.features}/budget-job-cost`,
      preview: "budgetDashboard" as PreviewKey,
      previewDark: true,
    },
    {
      id: "financials",
      label: "Financial Visibility",
      detail: "Accounting and cash",
      href: `${ROUTES.features}#financial-management`,
      preview: "accountingDashboard" as PreviewKey,
      previewDark: true,
    },
  ],
} as const;

export const scField = {
  eyebrow: "Field operations",
  headline: "The jobsite is the system of record for the work.",
  supporting:
    "Capture daily logs, photos, drawings, punch, T&M, safety, and time from the field. Field capture can continue offline, queue work, and sync when connectivity returns — so the office works from current project information.",
  stages: [
    {
      id: "activity",
      label: "Field activity",
      body: "Logs, photos, T&M, punch, and safety happen where the crew is.",
      preview: "dailyLogDashboard" as PreviewKey,
    },
    {
      id: "captured",
      label: "Captured",
      body: "Tickets, hours, and issues are recorded against the project.",
      preview: "tmTicket" as PreviewKey,
    },
    {
      id: "connected",
      label: "Connected",
      body: "Mobile workflows stay tied to the VertexBuild project record.",
      preview: "mobileWorkspace" as PreviewKey,
    },
    {
      id: "office",
      label: "Available to the office",
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
    { label: "Time", href: `${ROUTES.features}/time` },
    { label: "Mobile", href: `${ROUTES.features}/mobile` },
  ],
  sync: ["Offline", "Queued", "Syncing", "Synced"] as const,
} as const;

export const scWorkforce = {
  eyebrow: "Workforce + time",
  headline: "Hours, crews, and payroll readiness stay on the work.",
  supporting:
    "Manage workers, crews, and timesheets in the same environment as project cost and payroll-related review — not a separate people system.",
  views: [
    {
      id: "workforce",
      label: "Workforce",
      body: "Workers, crews, assignments, and certifications on the project.",
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
      id: "payroll",
      label: "Payroll Readiness",
      body: "Approved labor organized for payroll-related handoff.",
      preview: "prOverview" as PreviewKey,
      href: `${ROUTES.features}/payroll-readiness`,
    },
  ],
} as const;

export const scProject = {
  eyebrow: "Project coordination",
  headline: "Project information stays in one workspace.",
  supporting:
    "Keep the specialty job’s schedule, documents, RFIs, submittals, change orders, drawings, and punch connected — so field and office are not maintaining two versions of the work.",
  views: [
    { id: "projects", label: "Projects", href: `${ROUTES.features}/projects`, preview: "projectDashboard" as PreviewKey },
    { id: "schedule", label: "Scheduling", href: `${ROUTES.features}/scheduling`, preview: "scheduleGantt" as PreviewKey },
    { id: "documents", label: "Documents", href: `${ROUTES.features}/documents`, preview: "documentCenter" as PreviewKey },
    { id: "rfis", label: "RFIs", href: `${ROUTES.features}/rfis`, preview: "rfiRegister" as PreviewKey },
    { id: "submittals", label: "Submittals", href: `${ROUTES.features}/submittals`, preview: "submittalRegister" as PreviewKey },
    { id: "changes", label: "Change Orders", href: `${ROUTES.features}/change-orders`, preview: "changeOrderRegister" as PreviewKey },
    { id: "drawings", label: "Drawings", href: `${ROUTES.features}/drawings`, preview: "drawingRegister" as PreviewKey },
    { id: "punch", label: "Punch", href: `${ROUTES.features}/punch`, preview: "punchDashboard" as PreviewKey },
  ],
} as const;

export const scFinancials = {
  eyebrow: "Billing + financial visibility",
  headline: "Work captured in the field should be visible in cost and billing.",
  supporting:
    "Connect project activity to job cost, billing, and native accounting so specialty teams are not reconstructing the same hours and tickets in a separate finance tool.",
  path: [
    { id: "activity", label: "Project activity", preview: "tmTicket" as PreviewKey },
    { id: "cost", label: "Cost", preview: "budgetDashboard" as PreviewKey, previewDark: true },
    { id: "billing", label: "Billing", preview: "billingWorkspace" as PreviewKey },
    { id: "visibility", label: "Financial visibility", preview: "accountingDashboard" as PreviewKey, previewDark: true },
  ],
  contract: ["Contract", "Pay Application", "Billing / AR", "Cash"] as const,
  costFlow: ["PO", "Receipt", "AP", "Job Cost", "GL"] as const,
  modules: [
    { label: "Budget & Job Cost", href: `${ROUTES.features}/budget-job-cost` },
    { label: "Billing", href: `${ROUTES.features}/billing` },
    { label: "AIA Pay Applications", href: `${ROUTES.features}/aia-pay-applications` },
    { label: "Native Accounting", href: `${ROUTES.features}/native-accounting` },
    { label: "WIP", href: `${ROUTES.features}/wip` },
    { label: "Cash Flow", href: `${ROUTES.features}/cash-flow` },
  ],
} as const;

export const scSubs = {
  eyebrow: "Subcontractor + compliance",
  headline: "Trades, documents, and readiness stay on the project.",
  supporting:
    "Keep subcontractor relationships, required documents, and workforce context visible for the work you perform — without treating VertexBuild as legal advice or a guaranteed compliance outcome.",
  preview: "subProfile" as PreviewKey,
  overlayPreview: "compOverview" as PreviewKey,
  overlayLabel: "Compliance readiness",
  points: [
    {
      title: "Subcontractors",
      body: "Profiles and project relationships for the trades you coordinate.",
      href: `${ROUTES.features}/subcontractors`,
    },
    {
      title: "Compliance",
      body: "Requirements, insurance, and lien waivers connected to the record.",
      href: `${ROUTES.features}/compliance`,
    },
    {
      title: "Workforce",
      body: "Crew and time information that sits with the same project work.",
      href: `${ROUTES.features}/workforce`,
    },
  ],
} as const;

export const scAi = {
  eyebrow: "AI + intelligence",
  headline: "Ask the job — then confirm before anything is written.",
  supporting:
    "Use AI Assistant, Project Intelligence, Predictive Insights, Document Intelligence, and Automation on specialty project and field information. Access is permission-aware. Tool calls are logged. Write actions require a plain-English summary and explicit human confirmation.",
  note: "AI assists users and does not replace human review. AI cannot delete records.",
  stages: [
    {
      id: "data",
      label: "Data",
      body: "Grounded in logs, time, T&M, drawings, and project records already in VertexBuild.",
      preview: "aiGrounded" as PreviewKey,
    },
    {
      id: "intelligence",
      label: "Intelligence",
      body: "See status, risk, and document context without leaving the specialty workflow.",
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

const SC_AREA_ORDER = [
  "Field Operations",
  "Project Management",
  "Compliance & Workforce",
  "Financial Management",
  "AI & Intelligence",
] as const;

export const scPlatform = {
  eyebrow: "One connected workflow",
  headline: "Five areas. One specialty operating system.",
  supporting:
    "Field operations, project management, workforce, financials, and intelligence stay in VertexBuild — not five disconnected products.",
  areas: [...PLATFORM_CATEGORIES]
    .filter((cat) => (SC_AREA_ORDER as readonly string[]).includes(cat.title))
    .sort(
      (a, b) =>
        (SC_AREA_ORDER as readonly string[]).indexOf(a.title) - (SC_AREA_ORDER as readonly string[]).indexOf(b.title),
    ),
  previews: {
    "Field Operations": { preview: "dailyLogDashboard" as PreviewKey },
    "Project Management": { preview: "projectDashboard" as PreviewKey },
    "Compliance & Workforce": { preview: "wfOverview" as PreviewKey },
    "Financial Management": { preview: "billingWorkspace" as PreviewKey },
    "AI & Intelligence": { preview: "aiHero" as PreviewKey, dark: true },
  } as Record<string, { preview: PreviewKey; dark?: boolean }>,
} as const;

export const scCta = {
  headline: "See VertexBuild on specialty contractor work.",
  supporting: "Walk through field, workforce, billing, and project workflows — or start a free trial.",
  primary: { label: CTAS.demo.label, href: CTAS.demo.href },
  secondary: { label: CTAS.trial.label, href: CTAS.trial.href },
} as const;
