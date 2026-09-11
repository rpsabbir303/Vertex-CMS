/**
 * Time feature detail — TIME module (timesheets & labor hours).
 * Source: Register (Workforce & Timesheets) + featureAreas under Compliance & Workforce.
 *
 * Focus: project time capture, cost codes, reg/OT/DT, approval, project cost connection.
 * Not a Workforce/HR page. No GPS, biometrics, or automated payroll claims.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const CW = `${ROUTES.features}#compliance`;
const CW_LABEL = "Compliance & Workforce";
const PM = "Project Management";
const FM = "Financial Management";

export const timeFeatureDetail = {
  meta: {
    title: "Time | Vertex CMS Features",
    description:
      "Capture project labor time, track regular and overtime hours, review timesheets, and connect approved labor to project cost in Vertex CMS.",
    canonical: `${ROUTES.features}/time`,
  },
  hero: {
    eyebrow: "Compliance & Workforce",
    headline: "Track Every Hour Against the Work.",
    supporting:
      "Capture project labor time, organize regular and overtime hours, and connect approved timesheets to the work and costs they belong to.",
    description:
      "Give project teams a clearer view of labor activity from time entry through approval.",
    primary: { label: "Explore Time", href: "#time-overview" },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "timeOverview" as PreviewKey,
  },
  nav: [
    { id: "time-overview", label: "Overview" },
    { id: "time-weekly", label: "Weekly" },
    { id: "time-breakdown", label: "Hours" },
    { id: "time-projects", label: "Projects" },
    { id: "time-costcodes", label: "Cost Codes" },
    { id: "time-workflow", label: "Approval" },
    { id: "time-summary", label: "Summary" },
    { id: "time-explore", label: "Explore" },
  ] as const,
  overview: {
    eyebrow: "Time Visibility",
    headline: "See Where Project Hours Are Going.",
    body: "Bring workforce time into the context of projects, cost codes, work dates, and labor classifications.",
    cards: [
      {
        n: "01",
        title: "Regular Hours",
        body: "Track standard labor hours recorded against project work.",
      },
      {
        n: "02",
        title: "Overtime",
        body: "Identify overtime hours without separating them from the underlying project activity.",
      },
      {
        n: "03",
        title: "Double-Time",
        body: "Keep double-time hours visible when applicable.",
      },
      {
        n: "04",
        title: "Cost Codes",
        body: "Connect recorded time to the work and cost category it belongs to.",
      },
    ],
  },
  weekly: {
    headline: "Review the Week in One Place.",
    body: "Give project teams a simple weekly view of submitted and recorded labor time.",
    preview: "timeWeekly" as PreviewKey,
  },
  entry: {
    headline: "Every Hour Should Have Context.",
    body: "Connect each time entry to the information project teams need to understand where labor was performed.",
    preview: "timeEntry" as PreviewKey,
  },
  breakdown: {
    eyebrow: "Labor Breakdown",
    headline: "Understand the Difference Between Regular and Overtime Hours.",
    body: "Keep regular, overtime, and double-time hours visible in one labor view so project teams can understand the full time picture.",
    preview: "timeLaborBreakdown" as PreviewKey,
  },
  projectLabor: {
    headline: "See Labor by Project.",
    body: "Connect recorded hours to active construction projects so teams can understand how labor is distributed across the work.",
    preview: "timeProjectLabor" as PreviewKey,
  },
  costCode: {
    eyebrow: "Cost Code Tracking",
    headline: "Connect Time to the Work Being Performed.",
    body: "Associate time entries with project cost codes so labor can be reviewed in the same context as the work.",
    preview: "timeCostCode" as PreviewKey,
  },
  workflow: {
    headline: "Move Time From Entry to Approval.",
    body: "Keep timesheet progress visible from the first draft through approval.",
    preview: "timeWorkflow" as PreviewKey,
  },
  approval: {
    headline: "Give Teams a Clear Approval Workflow.",
    body: "Make submitted labor easy to review before it moves into approved workforce and project cost information.",
    preview: "timeApprovalQueue" as PreviewKey,
  },
  costConnection: {
    eyebrow: "Connected Project Cost",
    headline: "Turn Approved Hours Into Project Insight.",
    body: "Approved timesheets can feed actual labor cost information, helping teams connect workforce activity to project cost.",
    preview: "timeCostConnection" as PreviewKey,
  },
  payroll: {
    headline: "Keep Approved Time Ready for the Next Workflow.",
    body: "Organize approved workforce hours and classifications so payroll-related workflows have the information they need.",
    preview: "timePayrollSummary" as PreviewKey,
  },
  mobile: {
    headline: "Keep Time Capture Close to the Work.",
    body: "Give project teams a clear way to record and review labor time without losing the project context behind each entry.",
    preview: "timeMobileEntry" as PreviewKey,
  },
  summary: {
    headline: "Understand Labor at a Glance.",
    preview: "timeSummary" as PreviewKey,
  },
  process: {
    headline: "From Time Entry to Project Cost.",
    body: "Keep labor information connected from the moment time is entered through approval and project cost reporting.",
    steps: [
      { n: "01", title: "Enter Time", body: "Record labor hours for the work performed." },
      { n: "02", title: "Add Context", body: "Connect the entry to the project, cost code, date, and classification." },
      { n: "03", title: "Submit", body: "Send the timesheet for review." },
      { n: "04", title: "Review", body: "Project teams review the submitted hours." },
      { n: "05", title: "Approve", body: "Approved hours become part of the project's labor record." },
      { n: "06", title: "Connect", body: "Approved labor can feed actual project cost information and payroll-related workflows." },
    ],
  },
  outcomes: {
    headline: "Build a More Reliable Time Workflow.",
    cards: [
      {
        title: "Better Labor Visibility",
        body: "See regular, overtime, and double-time hours in context.",
      },
      {
        title: "Cleaner Project Tracking",
        body: "Connect time to projects and cost codes.",
      },
      {
        title: "Faster Review",
        body: "Give teams a clear timesheet approval workflow.",
      },
      {
        title: "Connected Cost Insight",
        body: "Connect approved labor activity to actual project cost information.",
      },
    ],
  },
  connected: {
    headline: "Time Connected Across Vertex CMS.",
    body: "Time becomes more valuable when it stays connected to the workflows around it.",
    cards: [
      {
        slug: "workforce",
        category: CW_LABEL,
        title: "Workforce",
        body: "Connect hours to workers and workforce records.",
      },
      {
        slug: "projects",
        category: PM,
        title: "Projects",
        body: "Connect time to active project work.",
      },
      {
        slug: "budget-job-cost",
        category: FM,
        title: "Budget & Job Cost",
        body: "Connect approved labor to actual project cost.",
      },
      {
        slug: "payroll-readiness",
        category: CW_LABEL,
        title: "Payroll Readiness",
        body: "Prepare approved workforce time for payroll-related workflows.",
      },
      {
        slug: "compliance",
        category: CW_LABEL,
        title: "Compliance",
        body: "Keep relevant workforce requirements visible alongside project operations.",
      },
      {
        slug: "subcontractors",
        category: CW_LABEL,
        title: "Subcontractors",
        body: "Connect labor activity where subcontractor workforce workflows require it.",
      },
    ],
  },
  explore: {
    eyebrow: "Compliance & Workforce",
    headline: "Explore Compliance & Workforce",
    body: "Keep people, subcontractors, time, and compliance workflows organized across every project.",
    activeSlug: "time",
    cards: [
      {
        slug: "subcontractors",
        category: CW_LABEL,
        title: "Subcontractors",
        body: "Manage subcontractor relationships and project readiness.",
      },
      {
        slug: "compliance",
        category: CW_LABEL,
        title: "Compliance",
        body: "Track project and workforce compliance information.",
      },
      {
        slug: "workforce",
        category: CW_LABEL,
        title: "Workforce",
        body: "Manage workers, crews, assignments, and workforce visibility.",
      },
      {
        slug: "time",
        category: CW_LABEL,
        title: "Time",
        body: "Capture and review project labor time.",
      },
      {
        slug: "payroll-readiness",
        category: CW_LABEL,
        title: "Payroll Readiness",
        body: "Prepare approved workforce information for payroll-related workflows.",
      },
    ],
  },
  finalCta: {
    headline: "Put Every Hour in the Right Context.",
    supporting:
      "Track project labor, review timesheets, and connect approved hours to the work and costs behind every project.",
    primary: { label: "Explore Time", href: "#time-overview" },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
