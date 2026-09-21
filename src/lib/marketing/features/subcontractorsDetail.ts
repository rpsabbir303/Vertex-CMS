/**
 * Subcontractors feature detail — SUB (+ linked LIEN / INS readiness).
 * Source: Register (Subcontractor Management, Lien Waivers & Notices, Insurance/COI)
 * + featureAreas howItWorks / outcomes under Compliance & Workforce.
 *
 * No automated legal advice, AI contract approval, insurance purchasing,
 * payment processing, or legal compliance guarantees.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const CW = `${ROUTES.features}#compliance`;
const CW_LABEL = "Compliance & Workforce";
const PM = "Project Management";

export const subcontractorsFeatureDetail = {
  meta: {
    title: "Subcontractors | VertexBuild Features",
    description:
      "Manage subcontractor profiles, project relationships, insurance certificates, lien waivers, and compliance readiness in VertexBuild.",
    canonical: `${ROUTES.features}/subcontractors`,
  },
  hero: {
    eyebrow: "Compliance & Workforce",
    headline: "Keep Every Subcontractor Ready to Work.",
    supporting:
      "Manage subcontractor relationships, compliance requirements, insurance documents, and project status from one connected platform. Keep the right information visible before work starts and throughout the project.",
    primary: { label: "Explore Compliance & Workforce", href: CW },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "subProfile" as PreviewKey,
  },
  nav: [
    { id: "sub-directory", label: "Directory" },
    { id: "sub-profile", label: "Profile" },
    { id: "sub-readiness", label: "Readiness" },
    { id: "sub-insurance", label: "Insurance" },
    { id: "sub-liens", label: "Lien Waivers" },
    { id: "sub-alerts", label: "Alerts" },
    { id: "sub-controls", label: "Controls" },
    { id: "sub-explore", label: "Explore" },
  ] as const,
  directory: {
    headline: "Know Who Is Working on Every Project.",
    body: "Keep subcontractor profiles connected to the projects, contracts, compliance requirements, and performance information your team relies on.",
    preview: "subDirectory" as PreviewKey,
  },
  profile: {
    headline: "See the Full Subcontractor Relationship.",
    body: "Bring contracts, projects, compliance records, and performance into one profile so project teams can quickly understand the status of every subcontractor.",
    preview: "subProfile" as PreviewKey,
  },
  readiness: {
    eyebrow: "Compliance Control",
    headline: "Know When a Subcontractor Is Ready to Work.",
    body: "Track the requirements that need to be complete before a subcontractor is assigned to a project. Give project teams a clear view of what is approved, missing, or approaching expiration.",
    cards: [
      {
        n: "01",
        title: "Prequalification",
        body: "Confirm subcontractors meet project requirements before they are approved for work.",
      },
      {
        n: "02",
        title: "Required Documents",
        body: "Keep compliance information connected to the subcontractor and project record.",
      },
      {
        n: "03",
        title: "Project Readiness",
        body: "See whether required requirements are complete before work begins.",
      },
    ],
    preview: "subReadiness" as PreviewKey,
  },
  insurance: {
    headline: "Never Miss an Insurance Expiration.",
    body: "Keep certificates of insurance connected to subcontractor records and surface upcoming expirations before they become a project problem.",
    preview: "subInsurance" as PreviewKey,
  },
  liens: {
    headline: "Keep Payment Documentation Moving.",
    body: "Track required and received lien waivers alongside the project record so your team can see what has been requested, received, or still needs attention.",
    note: "Lien waivers and notices are state-specific according to project location.",
    preview: "subLien" as PreviewKey,
  },
  alerts: {
    headline: "See Compliance Issues Before They Become Delays.",
    body: "Surface missing and expiring requirements early, giving your team time to resolve issues before they affect project work or payment.",
    preview: "subAlerts" as PreviewKey,
  },
  controls: {
    headline: "Protect the Project Before Work Starts.",
    body: "Keep approval and compliance requirements connected to project decisions, helping teams prevent avoidable compliance and payment issues.",
    preview: "subApprovalFlow" as PreviewKey,
  },
  connected: {
    headline: "Subcontractors Connected to the Work.",
    body: "Keep subcontractor information connected across the workflows your project team already uses.",
    cards: [
      {
        slug: "projects",
        category: PM,
        title: "Projects",
        body: "Connect subcontractors to active project records.",
      },
      {
        slug: "subcontractors",
        category: CW_LABEL,
        title: "Contracts",
        body: "Keep contract information connected to the relationship.",
      },
      {
        slug: "compliance",
        category: CW_LABEL,
        title: "Compliance",
        body: "Track requirements and readiness.",
      },
      {
        slug: "compliance",
        category: CW_LABEL,
        title: "Insurance",
        body: "Monitor certificates and expiration dates.",
      },
      {
        slug: "subcontractors",
        category: CW_LABEL,
        title: "Lien Waivers",
        body: "Track required and received documentation.",
      },
      {
        slug: "subcontractors",
        category: CW_LABEL,
        title: "Performance",
        body: "Give teams visibility into subcontractor performance.",
      },
    ],
  },
  outcomes: {
    headline: "Build a More Reliable Subcontractor Workflow.",
    cards: [
      {
        title: "Fewer compliance surprises",
        body: "Identify missing or expiring requirements earlier.",
      },
      {
        title: "Faster project readiness",
        body: "Know which subcontractors are ready before assignment.",
      },
      {
        title: "Better documentation control",
        body: "Keep contracts, insurance, compliance, and waiver information connected.",
      },
      {
        title: "Stronger project visibility",
        body: "Give project teams one current view of every subcontractor relationship.",
      },
    ],
  },
  explore: {
    eyebrow: "Compliance & Workforce",
    headline: "Explore Compliance & Workforce",
    body: "Keep people, subcontractors, time, and compliance workflows organized across every project.",
    activeSlug: "subcontractors",
    cards: [
      {
        slug: "subcontractors",
        category: CW_LABEL,
        title: "Subcontractors",
        body: "Manage subcontractor profiles, relationships, and readiness.",
      },
      {
        slug: "compliance",
        category: CW_LABEL,
        title: "Compliance",
        body: "Manage project compliance requirements.",
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
        body: "Capture and manage project time.",
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
    headline: "Keep Every Subcontractor Project-Ready.",
    supporting:
      "Connect subcontractor relationships, compliance, insurance, and project requirements in one construction management platform.",
    primary: { label: "Explore Compliance & Workforce", href: CW },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
