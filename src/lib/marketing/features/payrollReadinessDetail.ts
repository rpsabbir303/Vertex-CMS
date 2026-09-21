/**
 * Payroll Readiness feature detail — PAYROLL + TIME.
 * Source: Register (Payroll & Certified Payroll, Workforce & Timesheets)
 * + featureAreas under Compliance & Workforce.
 *
 * Focus: payroll READINESS — organized approved labor for review/handoff.
 * Not full payroll processing, tax filing, or direct deposit.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const CW = `${ROUTES.features}#compliance`;
const CW_LABEL = "Compliance & Workforce";
const PM = "Project Management";
const FM = "Financial Management";

export const payrollReadinessFeatureDetail = {
  meta: {
    title: "Payroll Readiness | VertexBuild Features",
    description:
      "Organize approved timesheets, worker classifications, and labor hours into payroll-ready summaries in VertexBuild—connected to project context.",
    canonical: `${ROUTES.features}/payroll-readiness`,
  },
  hero: {
    eyebrow: "Compliance & Workforce",
    headline: "Get Your Workforce Ready for Payroll.",
    supporting:
      "Bring approved time, worker information, classifications, and labor details together so payroll-related workflows start with organized project data.",
    description:
      "Turn project-level workforce activity into a clear payroll-ready summary without losing the context behind every hour.",
    primary: { label: "Explore Payroll Readiness", href: "#pr-overview" },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "prOverview" as PreviewKey,
  },
  nav: [
    { id: "pr-overview", label: "Overview" },
    { id: "pr-workflow", label: "Workflow" },
    { id: "pr-period", label: "Period" },
    { id: "pr-hours", label: "Hours" },
    { id: "pr-summary", label: "Summary" },
    { id: "pr-review", label: "Review" },
    { id: "pr-explore", label: "Explore" },
  ] as const,
  overview: {
    eyebrow: "Payroll Readiness",
    headline: "Bring Project Time Into a Payroll-Ready View.",
    body: "Keep approved workforce information organized by worker, project, classification, and hours so teams can review the information before the next payroll-related workflow.",
    cards: [
      {
        n: "01",
        title: "Approved Time",
        body: "Start with timesheets that have completed the review and approval workflow.",
      },
      {
        n: "02",
        title: "Worker Information",
        body: "Keep relevant workforce information connected to the labor record.",
      },
      {
        n: "03",
        title: "Work Classification",
        body: "Keep labor associated with the appropriate classification.",
      },
      {
        n: "04",
        title: "Payroll Summary",
        body: "Bring approved workforce information together for review.",
      },
    ],
  },
  workflow: {
    headline: "Turn Approved Timesheets Into Payroll-Ready Information.",
    body: "Keep the path from time entry to payroll readiness visible and structured.",
    preview: "prWorkflow" as PreviewKey,
  },
  period: {
    eyebrow: "Payroll Period",
    headline: "See the Entire Period at a Glance.",
    preview: "prPeriod" as PreviewKey,
  },
  workerPay: {
    headline: "Keep the Workforce Details Behind the Hours.",
    body: "Keep relevant worker and pay-related information connected to the workforce record so teams have the context they need when reviewing payroll-ready information.",
    bullets: [
      "Employee number",
      "Trade",
      "Classification",
      "Pay rate",
      "Pay type",
      "Union affiliation",
      "Work classification",
      "Relevant workforce requirements",
    ],
    preview: "prWorkerPay" as PreviewKey,
  },
  laborBreakdown: {
    eyebrow: "Labor Breakdown",
    headline: "Keep Every Hour in the Right Category.",
    body: "Separate regular, overtime, and double-time hours within the payroll-ready view so teams can review labor information with greater clarity.",
    preview: "prLaborBreakdown" as PreviewKey,
  },
  classification: {
    headline: "Keep Work Classifications Connected to Labor.",
    body: "Associate approved hours with the appropriate work classification so payroll-related review has the context behind the labor being reported.",
    preview: "prClassification" as PreviewKey,
  },
  fringe: {
    eyebrow: "Labor Details",
    headline: "Keep Additional Labor Information Visible.",
    body: "Where applicable, keep fringe-rate information alongside the workforce and time data used during payroll-related review.",
    preview: "prFringe" as PreviewKey,
  },
  summary: {
    headline: "Review Payroll-Ready Information in One Summary.",
    body: "Give project and workforce teams a consolidated view of approved labor information before it moves into the next payroll-related workflow.",
    preview: "prSummary" as PreviewKey,
  },
  review: {
    headline: "Give Teams a Clear Final Review Point.",
    body: "Make pending and approved workforce information visible before it moves into the next payroll-related workflow.",
    preview: "prReview" as PreviewKey,
  },
  projectLabor: {
    eyebrow: "Project Cost Context",
    headline: "Keep Payroll-Ready Time Connected to the Project.",
    body: "Approved labor should still retain the project context behind it. Keep workforce hours connected to projects and cost information.",
    preview: "prProjectLabor" as PreviewKey,
  },
  dataQuality: {
    headline: "Find Missing Information Before Review.",
    body: "Surface incomplete workforce and time information so teams can resolve issues before the payroll-related handoff.",
    preview: "prDataQuality" as PreviewKey,
  },
  process: {
    headline: "From Project Hours to Payroll Readiness.",
    steps: [
      { n: "01", title: "Capture Time", body: "Record hours against the work performed." },
      { n: "02", title: "Connect the Context", body: "Associate time with the worker, project, cost code, and classification." },
      { n: "03", title: "Submit", body: "Move the timesheet into the review workflow." },
      { n: "04", title: "Approve", body: "Confirm the hours before they become part of approved workforce information." },
      { n: "05", title: "Summarize", body: "Organize approved hours and workforce details by payroll period." },
      { n: "06", title: "Review", body: "Give payroll-related workflows a cleaner starting point." },
    ],
  },
  outcomes: {
    headline: "Build a Cleaner Payroll-Readiness Workflow.",
    cards: [
      {
        title: "Less Manual Consolidation",
        body: "Keep approved workforce information connected instead of rebuilding summaries from separate sources.",
      },
      {
        title: "Clearer Hour Review",
        body: "See regular, overtime, and double-time hours together.",
      },
      {
        title: "Better Workforce Context",
        body: "Keep worker and classification information connected to labor records.",
      },
      {
        title: "Cleaner Handoff",
        body: "Start payroll-related workflows with organized, reviewed project information.",
      },
    ],
  },
  connected: {
    headline: "Payroll Readiness Connected Across VertexBuild.",
    body: "Payroll readiness becomes more useful when approved labor stays connected to the workflows around it.",
    cards: [
      {
        slug: "workforce",
        category: CW_LABEL,
        title: "Workforce",
        body: "Keep worker and workforce information connected to labor activity.",
      },
      {
        slug: "time",
        category: CW_LABEL,
        title: "Time",
        body: "Bring regular, overtime, and double-time hours into the payroll-readiness workflow.",
      },
      {
        slug: "compliance",
        category: CW_LABEL,
        title: "Compliance",
        body: "Keep relevant workforce and project requirements visible.",
      },
      {
        slug: "projects",
        category: PM,
        title: "Projects",
        body: "Maintain project context behind approved labor.",
      },
      {
        slug: "budget-job-cost",
        category: FM,
        title: "Budget & Job Cost",
        body: "Connect approved labor to project cost information.",
      },
      {
        slug: "subcontractors",
        category: CW_LABEL,
        title: "Subcontractors",
        body: "Connect relevant subcontractor workforce activity to project workflows.",
      },
    ],
  },
  explore: {
    eyebrow: "Compliance & Workforce",
    headline: "Explore Compliance & Workforce",
    body: "Keep people, subcontractors, time, and compliance workflows organized across every project.",
    activeSlug: "payroll-readiness",
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
        body: "Organize approved labor for payroll-related review.",
      },
    ],
  },
  finalCta: {
    headline: "Make Payroll Readiness Part of the Project Workflow.",
    supporting:
      "Connect approved time, workforce information, classifications, and labor details in one construction management platform.",
    primary: { label: "Explore Payroll Readiness", href: "#pr-overview" },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
