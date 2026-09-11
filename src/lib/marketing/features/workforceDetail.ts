/**
 * Workforce feature detail — TIME (+ connected PAYROLL readiness).
 * Source: Register (Workforce & Timesheets, Payroll & Certified Payroll)
 * + featureAreas capabilities under Compliance & Workforce.
 *
 * Construction workforce operations—not HRIS, recruiting, or legal guarantees.
 * No full SSN exposure; operational fields only.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const CW = `${ROUTES.features}#compliance`;
const CW_LABEL = "Compliance & Workforce";
const PM = "Project Management";
const FM = "Financial Management";

export const workforceFeatureDetail = {
  meta: {
    title: "Workforce | Vertex CMS Features",
    description:
      "Manage workers, crews, project assignments, hours, certifications, and timesheets in Vertex CMS—connected to project operations and payroll readiness.",
    canonical: `${ROUTES.features}/workforce`,
  },
  hero: {
    eyebrow: "Compliance & Workforce",
    headline: "Know Your Workforce. Keep Every Project Moving.",
    supporting:
      "Manage workers, crews, project assignments, hours, certifications, and workforce information from one connected construction management platform.",
    description:
      "Give project teams a clearer view of who is working, where they are assigned, how much time is being recorded, and which workforce requirements need attention.",
    primary: { label: "Explore Workforce", href: "#wf-overview" },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "wfOverview" as PreviewKey,
  },
  nav: [
    { id: "wf-overview", label: "Overview" },
    { id: "wf-directory", label: "Directory" },
    { id: "wf-crews", label: "Crews" },
    { id: "wf-hours", label: "Hours" },
    { id: "wf-timesheets", label: "Timesheets" },
    { id: "wf-certs", label: "Certifications" },
    { id: "wf-payroll", label: "Payroll Ready" },
    { id: "wf-explore", label: "Explore" },
  ] as const,
  overview: {
    eyebrow: "Workforce Visibility",
    headline: "One Clear View of the People Behind the Work.",
    body: "Keep worker information, project assignments, crews, labor hours, and certifications connected so teams can manage the workforce with better visibility.",
    cards: [
      {
        n: "01",
        title: "Workers",
        body: "Maintain a centralized view of construction workers and their project assignments.",
      },
      {
        n: "02",
        title: "Crews",
        body: "Organize workers into project crews and understand who is working together.",
      },
      {
        n: "03",
        title: "Hours",
        body: "Review regular, overtime, and double-time hours across project work.",
      },
      {
        n: "04",
        title: "Certifications",
        body: "Keep certification information visible and identify records approaching expiration.",
      },
    ],
  },
  directory: {
    eyebrow: "Worker Directory",
    headline: "Keep Every Worker Connected to the Work.",
    body: "Give teams a centralized view of workers, trades, classifications, assignments, and workforce information.",
    bullets: [
      "Worker profiles",
      "Trade",
      "Classification",
      "Project assignment",
      "Pay type",
      "Certification status",
      "Workforce status",
    ],
    preview: "wfDirectory" as PreviewKey,
  },
  profile: {
    headline: "See the Workforce Information Behind Every Assignment.",
    preview: "wfProfile" as PreviewKey,
  },
  crews: {
    eyebrow: "Crew Management",
    headline: "Organize People Around the Work.",
    body: "Group workers into project crews so teams can understand who is assigned to each project and how labor is organized.",
    preview: "wfCrew" as PreviewKey,
  },
  assignments: {
    headline: "Connect Workers to the Projects They Support.",
    body: "Give project teams visibility into workforce assignments across active projects.",
    preview: "wfProjectAssign" as PreviewKey,
  },
  hours: {
    eyebrow: "Labor Hours",
    headline: "Understand Labor Before It Becomes a Cost Surprise.",
    body: "Give teams visibility into regular, overtime, and double-time hours recorded against project work.",
    preview: "wfLaborHours" as PreviewKey,
  },
  timesheets: {
    headline: "Capture Project Labor Where It Happens.",
    body: "Give workers and project teams a structured way to enter and review labor hours tied to project work.",
    preview: "wfTimesheet" as PreviewKey,
  },
  approval: {
    headline: "Move Labor From Submitted to Approved.",
    body: "Give project teams a clear review and approval workflow before workforce information moves forward.",
    preview: "wfTimesheetApproval" as PreviewKey,
  },
  certifications: {
    eyebrow: "Certification Tracking",
    headline: "Know When Workforce Certifications Need Attention.",
    body: "Keep certification types and expiration dates visible so teams can identify workforce records that need review.",
    preview: "wfCertifications" as PreviewKey,
  },
  requirements: {
    headline: "Keep Workforce Requirements Visible.",
    body: "Bring workforce records and relevant requirements together so teams can identify issues before assigning work where configured.",
    items: [
      {
        title: "I-9 Verification",
        body: "Track verification status within the worker record.",
      },
      {
        title: "E-Verify",
        body: "Keep case information associated with the worker.",
      },
      {
        title: "OSHA Training",
        body: "Track OSHA 10 / OSHA 30 status.",
      },
      {
        title: "Certifications",
        body: "Monitor certification types and expiry dates.",
      },
    ],
  },
  payroll: {
    eyebrow: "Payroll Readiness",
    headline: "Turn Approved Labor Into Payroll-Ready Information.",
    body: "Keep approved workforce hours and classifications organized so payroll-related workflows have the information they need.",
    preview: "wfPayrollSummary" as PreviewKey,
  },
  costConnection: {
    headline: "Connect Approved Labor to Project Cost.",
    body: "Approved timesheets can feed actual project cost information, keeping workforce activity connected to the financial side of the project.",
    preview: "wfCostFlow" as PreviewKey,
  },
  workflow: {
    headline: "From Worker Assignment to Payroll Readiness.",
    steps: [
      {
        n: "01",
        title: "Add Worker",
        body: "Maintain the worker's operational profile.",
      },
      {
        n: "02",
        title: "Assign to Project",
        body: "Connect the worker to the appropriate project or crew.",
      },
      {
        n: "03",
        title: "Track Certifications",
        body: "Keep relevant certifications and expiration dates visible.",
      },
      {
        n: "04",
        title: "Record Hours",
        body: "Capture regular, overtime, and double-time hours.",
      },
      {
        n: "05",
        title: "Review & Approve",
        body: "Move submitted timesheets through the approval workflow.",
      },
      {
        n: "06",
        title: "Prepare Payroll",
        body: "Organize approved workforce information for payroll-related processing.",
      },
    ],
  },
  outcomes: {
    headline: "Build a More Connected Workforce Workflow.",
    cards: [
      {
        title: "Better Workforce Visibility",
        body: "Know who is working, where they are assigned, and how labor is organized.",
      },
      {
        title: "Clearer Labor Tracking",
        body: "Review regular, overtime, and double-time hours in context.",
      },
      {
        title: "Fewer Certification Surprises",
        body: "Surface certifications approaching expiration.",
      },
      {
        title: "Connected Project Information",
        body: "Keep workforce activity connected to project operations and approved labor costs.",
      },
    ],
  },
  connected: {
    eyebrow: "Connected Workflows",
    headline: "Workforce Connected Across Vertex CMS.",
    body: "Keep workforce information connected to the project, compliance, and financial workflows your team already uses.",
    cards: [
      {
        slug: "subcontractors",
        category: CW_LABEL,
        title: "Subcontractors",
        body: "Connect workforce information with subcontractor relationships.",
      },
      {
        slug: "compliance",
        category: CW_LABEL,
        title: "Compliance",
        body: "Keep workforce requirements and compliance information visible.",
      },
      {
        slug: "time",
        category: CW_LABEL,
        title: "Time",
        body: "Track project labor and workforce hours.",
      },
      {
        slug: "payroll-readiness",
        category: CW_LABEL,
        title: "Payroll Readiness",
        body: "Prepare approved workforce information for payroll workflows.",
      },
      {
        slug: "projects",
        category: PM,
        title: "Projects",
        body: "Connect workers and crews to active project records.",
      },
      {
        slug: "budget-job-cost",
        category: FM,
        title: "Budget & Job Cost",
        body: "Connect approved labor activity to project cost information.",
      },
    ],
  },
  explore: {
    eyebrow: "Compliance & Workforce",
    headline: "Explore Compliance & Workforce",
    body: "Keep people, subcontractors, time, and compliance workflows organized across every project.",
    activeSlug: "workforce",
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
        body: "Manage workers, crews, hours, and certifications.",
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
        body: "Prepare workforce information for payroll-related workflows.",
      },
    ],
  },
  finalCta: {
    headline: "Put Your Workforce in Sync With the Work.",
    supporting:
      "Connect workers, crews, hours, certifications, and project assignments in one construction management platform.",
    primary: { label: "Explore Workforce", href: "#wf-overview" },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
