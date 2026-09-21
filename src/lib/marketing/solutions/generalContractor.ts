/**
 * General Contractor solution page content.
 * Source: SOLUTION_DETAILS.general-contractors, PLATFORM_CATEGORIES, Feature pages.
 * This is a solution narrative (connected GC operating system) — not a feature catalog.
 * Does not invent unsupported product functionality, metrics, or testimonials.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "@/lib/marketing/features/register";
import { PLATFORM_CATEGORIES, SOLUTION_DETAILS } from "./data";

const GC = SOLUTION_DETAILS["general-contractors"];

export const gcPageMeta = {
  title: "General Contractor Software | VertexBuild Solutions",
  description:
    "VertexBuild connects General Contractor project, financial, subcontractor, and field management around one project record — a connected operating system for the GC operation.",
  canonical: ROUTES.solutionsGeneralContractors,
} as const;

export const gcHero = {
  eyebrow: "Solution · General Contractor",
  headline: "Connect the GC operation in one system.",
  supporting: GC.body,
  answer:
    "VertexBuild helps a General Contractor manage project, financial, subcontractor, and field work from the same connected record.",
  primary: { label: CTAS.trial.label, href: CTAS.trial.href },
  secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  preview: GC.preview,
  previewLabel: GC.previewLabel,
  overlayPreview: "projectFinancial" as PreviewKey,
  overlayLabel: "Project financials on the same record",
  manages: [
    { label: "Project management", href: `${ROUTES.features}/project-management` },
    { label: "Financial management", href: `${ROUTES.features}#financial-management` },
    { label: "Subcontractor management", href: `${ROUTES.features}/subcontractors` },
    { label: "Field operations", href: `${ROUTES.features}#field-operations` },
  ],
} as const;

export const gcOperating = {
  eyebrow: "The GC operating model",
  headline: "Four parts of the operation. One project record.",
  supporting:
    "VertexBuild does not run project, cost, trades, and the field as separate products. They stay connected around the job so the GC team works from current information.",
  flow: [
    "one project",
    "connected field activity",
    "subcontractor coordination",
    "financial visibility",
    "better decisions",
  ] as const,
  areas: [
    {
      id: "project",
      label: "Project Management",
      story: "Establish the job and keep project information in one workspace.",
      preview: "projectDashboard" as PreviewKey,
      href: `${ROUTES.features}/project-management`,
    },
    {
      id: "field",
      label: "Field Operations",
      story: "Site activity writes back to the same project — not a side record.",
      preview: "dailyLogDashboard" as PreviewKey,
      href: `${ROUTES.features}#field-operations`,
    },
    {
      id: "subs",
      label: "Subcontractor Management",
      story: "Trades participate in the project workflow, not a disconnected list.",
      preview: "subDirectory" as PreviewKey,
      href: `${ROUTES.features}/subcontractors`,
    },
    {
      id: "financials",
      label: "Financial Management",
      story: "Cost and billing stay visible against the work already happening.",
      preview: "projectFinancial" as PreviewKey,
      href: `${ROUTES.features}#financial-management`,
    },
  ],
} as const;

export const gcProjects = {
  eyebrow: "Connected project management",
  headline: "Run the job from one project environment.",
  supporting:
    "A General Contractor keeps project information, communication, documentation, schedules, and workflows on the same record — so the team is not reconstructing the job across tools.",
  href: `${ROUTES.features}/project-management`,
  moments: [
    {
      id: "see",
      label: "See the job",
      body: "Status and activity stay visible in one GC workspace so the project has a single place to start.",
      preview: "projectDashboard" as PreviewKey,
    },
    {
      id: "move",
      label: "Keep information moving",
      body: "Documentation and project communication stay attached to the work instead of living in a parallel folder.",
      preview: "documentCenter" as PreviewKey,
    },
    {
      id: "align",
      label: "Stay aligned",
      body: "The plan stays connected to how the project is actually running — office and field share the same context.",
      preview: "scheduleGantt" as PreviewKey,
    },
  ],
} as const;

export const gcFinancials = {
  eyebrow: "Connected financial management",
  headline: "Project activity should already be visible in the numbers.",
  supporting:
    "General Contractors can manage project financial information in the same platform that runs the job — without recreating operations in a separate finance tool.",
  href: `${ROUTES.features}#financial-management`,
  activity: {
    label: "Project activity",
    body: "The work, changes, and status already live on the project record.",
    preview: "projectDashboard" as PreviewKey,
  },
  visibility: {
    label: "Financial visibility",
    body: "Cost context stays attached to that same project — not a second system of record.",
    preview: "projectFinancial" as PreviewKey,
  },
} as const;

export const gcSubs = {
  eyebrow: "Subcontractor operations",
  headline: "Trades sit on the project — not beside it.",
  supporting:
    "Coordinate subcontractors as part of the GC workflow: the project, the people on it, and whether they are ready to work.",
  href: `${ROUTES.features}/subcontractors`,
  flow: [
    {
      id: "gc",
      label: "GC",
      body: "The General Contractor runs the operation in VertexBuild.",
      preview: "projectDashboard" as PreviewKey,
    },
    {
      id: "project",
      label: "Project",
      body: "Subcontractor work is scoped to the job, not a tenant-wide list.",
      preview: "projectPhases" as PreviewKey,
    },
    {
      id: "subs",
      label: "Subcontractors",
      body: "Directory and project relationships stay on the same record.",
      preview: "subDirectory" as PreviewKey,
    },
    {
      id: "workflow",
      label: "Connected workflow",
      body: "Readiness stays visible as part of coordinating the job.",
      preview: "subReadiness" as PreviewKey,
    },
  ],
} as const;

export const gcFieldOffice = {
  eyebrow: "Field → office",
  headline: "What happens on site should already be in the office.",
  supporting:
    "Field activity becomes project information. The office works from that record. Financial and operational visibility stay current without re-entering the same work.",
  stages: [
    {
      id: "field",
      label: "Field",
      body: "Capture site activity where the work is happening.",
      preview: "dailyLogDashboard" as PreviewKey,
      phone: true,
    },
    {
      id: "information",
      label: "Project information",
      body: "Field capture writes to the project record the office already uses.",
      preview: "projectDashboard" as PreviewKey,
      phone: false,
    },
    {
      id: "office",
      label: "Office",
      body: "Project teams review the same information — not a weekly reconstruction.",
      preview: "documentCenter" as PreviewKey,
      phone: false,
    },
    {
      id: "visibility",
      label: "Financial / operational visibility",
      body: "Cost and operations stay connected to activity already on the job.",
      preview: "projectFinancial" as PreviewKey,
      phone: false,
    },
  ],
} as const;

export const gcWorkflow = {
  eyebrow: "One connected GC workflow",
  headline: "Follow the operation through VertexBuild.",
  supporting:
    "A General Contractor does not hand the job between disconnected tools. Project, field, subcontractors, and financials stay in one product experience.",
  steps: [
    {
      id: "project",
      label: "Project",
      body: "Open the job. Status, information, and activity share one workspace.",
      preview: "projectDashboard" as PreviewKey,
    },
    {
      id: "field",
      label: "Field",
      body: "Site activity is captured against that project — then available to the office.",
      preview: "dailyLogDashboard" as PreviewKey,
    },
    {
      id: "subs",
      label: "Subcontractors",
      body: "Trades are coordinated as part of the same job, not a parallel process.",
      preview: "subDirectory" as PreviewKey,
    },
    {
      id: "financials",
      label: "Financials",
      body: "Cost context stays attached to the work already underway.",
      preview: "projectFinancial" as PreviewKey,
    },
    {
      id: "decisions",
      label: "Decisions",
      body: "The next step is based on connected project, field, subcontractor, and financial information.",
      preview: "projectDashboard" as PreviewKey,
    },
  ],
} as const;

export const gcExperience = {
  eyebrow: "Product experience",
  headline: "This is the GC workspace.",
  supporting:
    "VertexBuild brings the operation together around the project record — so the previous sections are one product, not four destinations.",
  preview: "projectDashboard" as PreviewKey,
  previewLabel: "General contractor workspace",
  satellites: [
    { label: "Field activity", preview: "dailyLogDashboard" as PreviewKey },
    { label: "Subcontractors", preview: "subDirectory" as PreviewKey },
    { label: "Financial context", preview: "projectFinancial" as PreviewKey },
  ],
} as const;

export const gcCta = {
  headline: "Connect the GC operation in VertexBuild.",
  supporting:
    "VertexBuild helps General Contractors connect their projects, field operations, subcontractors, and financial management in one platform.",
  primary: { label: CTAS.trial.label, href: CTAS.trial.href },
  secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
} as const;

/** Minerva-style layout content — architecture, dual columns, workflow cards, FAQ */
export const gcArchitecture = {
  eyebrow: "How the platform works",
  headline: "One project record connects the GC operation.",
  supporting:
    "Field activity, subcontractor coordination, and project information flow into the same VertexBuild record — so financial and operational visibility stay current.",
  inputs: [
    { label: "Field activity", preview: "dailyLogDashboard" as PreviewKey },
    { label: "Subcontractors", preview: "subDirectory" as PreviewKey },
    { label: "Documents", preview: "documentCenter" as PreviewKey },
    { label: "Schedule", preview: "scheduleGantt" as PreviewKey },
  ],
  core: {
    label: "VertexBuild · Project record",
    preview: "projectDashboard" as PreviewKey,
  },
  outputs: [
    { label: "Project control", preview: "projectDashboard" as PreviewKey },
    { label: "Financial visibility", preview: "projectFinancial" as PreviewKey },
    { label: "Office coordination", preview: "documentCenter" as PreviewKey },
    { label: "Operational decisions", preview: "projectDashboard" as PreviewKey },
  ],
} as const;

export const gcDualColumns = {
  eyebrow: "Connected capabilities",
  headline: "Project and financial work share the same context.",
  left: {
    title: "Project management",
    items: [
      "Project information stays in one workspace.",
      "Documentation and communication attach to the job.",
      "Schedule and status stay visible to the team.",
    ],
    preview: "projectDashboard" as PreviewKey,
    href: `${ROUTES.features}/project-management`,
  },
  right: {
    title: "Financial + subcontractor management",
    items: [
      "Cost context stays on the project record.",
      "Subcontractors participate in the project workflow.",
      "Readiness and coordination stay visible on the job.",
    ],
    preview: "subReadiness" as PreviewKey,
    href: `${ROUTES.features}/subcontractors`,
  },
  banner: {
    text: "Explore how VertexBuild connects project, field, subcontractor, and financial workflows for General Contractors.",
    cta: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;

export const gcWorkflowCards = [
  {
    id: "project",
    accent: "#C4A035",
    eyebrow: "Connected project management",
    headline: gcProjects.headline,
    supporting: gcProjects.supporting,
    preview: "scheduleGantt" as PreviewKey,
    href: gcProjects.href,
  },
  {
    id: "field",
    accent: "#1E4F8A",
    eyebrow: gcFieldOffice.eyebrow,
    headline: gcFieldOffice.headline,
    supporting: gcFieldOffice.supporting,
    preview: "dailyLogDashboard" as PreviewKey,
    phone: true,
    href: `${ROUTES.features}#field-operations`,
  },
  {
    id: "subs",
    accent: "#2F6B4F",
    eyebrow: gcSubs.eyebrow,
    headline: gcSubs.headline,
    supporting: gcSubs.supporting,
    preview: "subDirectory" as PreviewKey,
    href: gcSubs.href,
  },
] as const;

export const gcSpotlight = {
  eyebrow: "One connected GC workflow",
  headline: gcWorkflow.headline,
  supporting: gcWorkflow.supporting,
  preview: "projectDashboard" as PreviewKey,
  steps: gcWorkflow.steps.map((s) => s.label),
} as const;

export const gcFaq = {
  eyebrow: "FAQ",
  headline: "Common questions about VertexBuild for General Contractors.",
  items: [
    {
      q: "Is VertexBuild a separate product for General Contractors?",
      a: "No. General Contractors use the same VertexBuild platform — project management, financial management, field operations, subcontractors, compliance, and intelligence stay connected around the project record.",
    },
    {
      q: "What does a General Contractor run in VertexBuild?",
      a: "Connected project, financial, subcontractor, and field management — so office and field teams work from the same record instead of reconstructing the job across tools.",
    },
    {
      q: "Does field activity connect back to the office?",
      a: "Yes. Field capture can continue offline, queue work, and sync when connectivity returns — so project teams review current field information on the same project record.",
    },
    {
      q: "How does AI work in VertexBuild?",
      a: "AI Assistant, Project Intelligence, Predictive Insights, Document Intelligence, and Automation operate on connected project information. Access is permission-aware. Tool calls are logged. Write actions require a plain-English summary and explicit human confirmation.",
    },
  ],
} as const;

export const gcFinalCta = {
  headline: "The connected operating system for General Contractors.",
  supporting: gcCta.supporting,
  primary: gcCta.primary,
  secondary: gcCta.secondary,
} as const;

/** Planhat / Intercom-style page layout content */
export const gcTrustBar = {
  label: "Connected operating areas for General Contractors",
  items: gcHero.manages.map((m) => m.label),
} as const;

export const gcIntelligence = {
  headline: "Add connected control to the GC operation you already run.",
  supporting:
    "Project information, field activity, subcontractor coordination, and financial visibility stay on one record — so the team is not reconstructing the job across tools.",
  mainPreview: GC.preview,
  mainLabel: GC.previewLabel,
  columns: gcProjects.moments.map((m) => ({
    title: m.label,
    body: m.body,
    preview: m.preview,
  })),
} as const;

export const gcFeatureSplit = {
  headline: "The visibility you need — on the project record you already use.",
  supporting: gcFinancials.supporting,
  callouts: GC.emphasis.slice(0, 3),
  preview: gcFinancials.visibility.preview,
  previewLabel: gcFinancials.visibility.label,
  href: gcFinancials.href,
} as const;

export const gcConnectedHub = {
  headline: "Deploy the GC operation on one connected platform.",
  supporting: gcArchitecture.supporting,
  callout: {
    title: "One project record",
    body: "Field, office, subcontractors, and financials stay connected around the job.",
  },
  nodes: [
    { label: "Field", preview: "dailyLogDashboard" as PreviewKey },
    { label: "Documents", preview: "documentCenter" as PreviewKey },
    { label: "Subcontractors", preview: "subDirectory" as PreviewKey },
    { label: "Financials", preview: "projectFinancial" as PreviewKey },
    { label: "Schedule", preview: "scheduleGantt" as PreviewKey },
    { label: "Office", preview: "projectDashboard" as PreviewKey },
  ],
  centerPreview: "projectDashboard" as PreviewKey,
} as const;

export const gcWorkspace = {
  headline: "Give GC teams tools they will actually use on the job.",
  supporting: gcExperience.supporting,
  preview: gcExperience.preview,
  previewLabel: gcExperience.previewLabel,
  pillars: gcOperating.areas.map((a) => ({
    title: a.label,
    body: a.story,
  })),
} as const;

export const gcOperationalProof = {
  headline: "See how the operation stays connected.",
  supporting: "Four operational areas. One VertexBuild project record.",
  pillars: gcOperating.areas.map((a) => ({
    label: a.label.replace(" Management", "").replace(" Operations", ""),
    detail: a.story,
  })),
  quotes: [
    {
      body: gcFieldOffice.supporting,
      label: "Field → office",
    },
    {
      body: gcSubs.supporting,
      label: "Subcontractor workflow",
    },
  ],
} as const;

export const gcProofSection = {
  headline: "Understand the GC solution before you start.",
  supporting: "Common questions about how VertexBuild supports General Contractor operations.",
  preview: "projectDashboard" as PreviewKey,
  faq: gcFaq.items.slice(0, 3),
} as const;

export const gcPlatformGrid = {
  headline: "Build on the platform.",
  supporting: "Explore documented VertexBuild capabilities connected to the GC operation.",
  modules: PLATFORM_CATEGORIES.flatMap((cat) =>
    cat.items.slice(0, 3).map((item) => ({ ...item, category: cat.title })),
  ),
} as const;

export const gcClosingStatement = {
  line1: "Run the whole project.",
  line2: "From one record.",
  cta: gcCta,
} as const;
