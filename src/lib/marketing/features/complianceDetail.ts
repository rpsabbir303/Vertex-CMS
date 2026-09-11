/**
 * Compliance feature detail — COMPLY (+ INS / LIEN).
 * Source: Register (Compliance Suite, Insurance/COI, Lien Waivers)
 * + featureAreas howItWorks / outcomes under Compliance & Workforce.
 *
 * Positions Vertex CMS as organizing, tracking, and connecting compliance
 * information—not legal advice or guaranteed legal/OSHA/state compliance.
 * WH-347 / certified payroll referenced only as connected payroll readiness.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const CW = `${ROUTES.features}#compliance`;
const CW_LABEL = "Compliance & Workforce";
const PM = "Project Management";

export const complianceFeatureDetail = {
  meta: {
    title: "Compliance | Vertex CMS Features",
    description:
      "Track compliance requirements, insurance certificates, lien waivers, and project readiness in Vertex CMS—so teams see what is complete and what needs attention.",
    canonical: `${ROUTES.features}/compliance`,
  },
  hero: {
    eyebrow: "Compliance & Workforce",
    headline: "Keep Compliance Visible Across Every Project.",
    supporting:
      "Track requirements, insurance, documentation, and approval status in one connected place. Give your teams a clear view of what is complete, what needs attention, and what could affect project readiness.",
    primary: { label: "Explore Compliance", href: "#comp-health" },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "compOverview" as PreviewKey,
  },
  nav: [
    { id: "comp-health", label: "Overview" },
    { id: "comp-requirements", label: "Requirements" },
    { id: "comp-subs", label: "Subcontractors" },
    { id: "comp-insurance", label: "Insurance" },
    { id: "comp-liens", label: "Lien Waivers" },
    { id: "comp-alerts", label: "Alerts" },
    { id: "comp-controls", label: "Readiness" },
    { id: "comp-explore", label: "Explore" },
  ] as const,
  health: {
    eyebrow: "Compliance Control",
    headline: "See What Is Ready. See What Needs Attention.",
    body: "Bring project requirements, subcontractor compliance, insurance records, and documentation into a single view so teams can act before issues create delays.",
    preview: "compHealth" as PreviewKey,
  },
  requirements: {
    headline: "Know Which Requirements Apply.",
    body: "Keep compliance requirements connected to the people, projects, and records that depend on them. Give project teams a clear picture of what has been completed and what still needs attention.",
    preview: "compRequirements" as PreviewKey,
  },
  subs: {
    headline: "Know Which Subcontractors Are Ready to Work.",
    body: "Connect subcontractor compliance information directly to project relationships so teams can understand readiness before assigning work.",
    points: [
      {
        n: "01",
        title: "Prequalification",
        body: "Confirm approval status before project assignment.",
      },
      {
        n: "02",
        title: "Compliance Records",
        body: "Keep required information connected to the subcontractor profile.",
      },
      {
        n: "03",
        title: "Project Readiness",
        body: "See compliance status in the context of active projects.",
      },
    ],
    preview: "compSubReadiness" as PreviewKey,
  },
  insurance: {
    eyebrow: "Insurance Tracking",
    headline: "Stay Ahead of Expiring Insurance.",
    body: "Keep certificates of insurance connected to subcontractor records and surface upcoming expiration dates before they become a project concern.",
    preview: "compInsurance" as PreviewKey,
  },
  liens: {
    headline: "Keep Lien Waivers Connected to the Project.",
    body: "Track required and received lien waivers alongside the project record so your team can quickly see what has been requested, received, or still needs attention.",
    note: "Requirements may vary by project location.",
    preview: "compLien" as PreviewKey,
  },
  alerts: {
    eyebrow: "Compliance Alerts",
    headline: "Catch Missing Requirements Before They Become Problems.",
    body: "Surface missing, incomplete, or expiring compliance requirements so your team knows where action is needed.",
    preview: "compAlerts" as PreviewKey,
  },
  controls: {
    headline: "Make Compliance Part of the Project Decision.",
    body: "Give teams the context they need before assigning work or moving a project workflow forward.",
    preview: "compApprovalFlow" as PreviewKey,
  },
  docs: {
    headline: "Keep the Record Behind Every Compliance Decision.",
    body: "Connect compliance records to the project information your teams already use instead of searching across disconnected folders and spreadsheets.",
    preview: "compDocs" as PreviewKey,
  },
  workflow: {
    headline: "From Requirement to Project Readiness.",
    subtitle: "Keep compliance moving with the work.",
    steps: [
      {
        n: "01",
        title: "Define Requirements",
        body: "Identify the information needed for the project and subcontractor.",
      },
      {
        n: "02",
        title: "Collect & Review",
        body: "Keep compliance records connected to the right project and company.",
      },
      {
        n: "03",
        title: "Monitor Status",
        body: "See current, pending, missing, and expiring requirements.",
      },
      {
        n: "04",
        title: "Act Before Issues Escalate",
        body: "Give teams clear visibility into what needs attention.",
      },
    ],
  },
  outcomes: {
    headline: "Build a More Reliable Compliance Workflow.",
    cards: [
      {
        title: "Fewer Compliance Surprises",
        body: "Surface missing and expiring requirements earlier.",
      },
      {
        title: "Faster Project Readiness",
        body: "Know which subcontractors are ready before work begins.",
      },
      {
        title: "Better Documentation",
        body: "Keep compliance information connected to the project record.",
      },
      {
        title: "Clearer Team Visibility",
        body: "Give project teams one current view of compliance status.",
      },
    ],
  },
  connected: {
    eyebrow: "Connected Workflows",
    headline: "Compliance Connected to the Rest of Vertex CMS.",
    body: "Compliance does not happen in isolation. Keep the information connected to the workflows that depend on it—including workforce, OSHA-related project records, and payroll readiness such as certified payroll / WH-347 preparation where enabled.",
    cards: [
      {
        slug: "subcontractors",
        category: CW_LABEL,
        title: "Subcontractors",
        body: "Manage subcontractor profiles and project relationships.",
      },
      {
        slug: "compliance",
        category: CW_LABEL,
        title: "Insurance",
        body: "Track certificates and expiration dates.",
      },
      {
        slug: "compliance",
        category: CW_LABEL,
        title: "Lien Waivers",
        body: "Track required and received waivers.",
      },
      {
        slug: "projects",
        category: PM,
        title: "Projects",
        body: "Connect compliance status to active project records.",
      },
      {
        slug: "workforce",
        category: CW_LABEL,
        title: "Workforce",
        body: "Keep workforce information connected to project operations.",
      },
      {
        slug: "payroll-readiness",
        category: CW_LABEL,
        title: "Payroll Readiness",
        body: "Support payroll-related preparation and compliance workflows.",
      },
    ],
  },
  explore: {
    eyebrow: "Compliance & Workforce",
    headline: "Explore Compliance & Workforce",
    body: "Keep people, subcontractors, time, and compliance workflows organized across every project.",
    activeSlug: "compliance",
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
        body: "Track requirements, insurance, and project compliance status.",
      },
      {
        slug: "workforce",
        category: CW_LABEL,
        title: "Workforce",
        body: "Connect workforce information to project operations.",
      },
      {
        slug: "time",
        category: CW_LABEL,
        title: "Time",
        body: "Capture project time and labor information.",
      },
      {
        slug: "payroll-readiness",
        category: CW_LABEL,
        title: "Payroll Readiness",
        body: "Prepare workforce information for payroll workflows.",
      },
    ],
  },
  finalCta: {
    headline: "Keep Compliance Connected to the Work.",
    supporting:
      "Bring requirements, insurance, documentation, and project readiness into one connected construction management platform.",
    primary: { label: "Explore Compliance & Workforce", href: CW },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
