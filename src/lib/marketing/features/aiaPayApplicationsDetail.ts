/**
 * AIA Pay Applications feature detail — PAYAPP + SOV (G702/G703 workflows).
 * Source: Register features (Pay applications, line items, Certify pay app, G702 workflow)
 * + SOV / G703 structure. No attachments listed for PAYAPP — section omitted.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

export const aiaPayApplicationsFeatureDetail = {
  meta: {
    title: "AIA Pay Applications | Vertex CMS Features",
    description:
      "Prepare, review, and certify AIA G702 pay applications connected to Schedule of Values, retainage, and lien workflows in Vertex CMS.",
    canonical: `${ROUTES.features}/aia-pay-applications`,
  },
  hero: {
    eyebrow: "AIA Pay Applications",
    headline: "Make Every Pay Application Easier to Manage",
    supporting:
      "Prepare, review, and track progress payment applications with project, contract, and Schedule of Values information connected in one construction workflow.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
    preview: "payAppDashboard" as PreviewKey,
  },
  nav: [
    { id: "pay-overview", label: "Overview" },
    { id: "pay-workspace", label: "Application" },
    { id: "pay-g702", label: "Payment Summary" },
    { id: "pay-g703", label: "Schedule of Values" },
    { id: "pay-workflow", label: "Workflow" },
    { id: "pay-retainage", label: "Retainage" },
    { id: "pay-history", label: "History" },
    { id: "pay-review", label: "Review" },
  ] as const,
  intro: {
    eyebrow: "Progress Payment Workflow",
    headline: "Turn Project Progress Into a Clear Payment Application.",
    body: "Pay applications bring project progress, contract values, scheduled work, and payment information together. Vertex CMS keeps these details organized so teams can prepare and review applications with greater clarity.",
    points: [
      {
        title: "Connected Project Data",
        body: "Keep application information connected to the project and contract.",
      },
      {
        title: "Clear Billing Progress",
        body: "Understand completed work and current billing against the Schedule of Values.",
      },
      {
        title: "Review With Confidence",
        body: "Give project and finance teams a clear view of the application before it moves forward.",
      },
    ],
  },
  workspace: {
    headline: "Everything needed for the current payment application.",
    body: "Bring contract information, approved changes, progress, retainage, and payment details into one workspace.",
    project: "Riverside Medical Center",
    metrics: [
      { label: "Original Contract", value: "$4.50M" },
      { label: "Approved Changes", value: "+$320K" },
      { label: "Revised Contract", value: "$4.82M" },
      { label: "Completed to Date", value: "$3.42M" },
      { label: "Retainage", value: "$342K" },
      { label: "Current Due", value: "$284K" },
    ] as const,
    meta: [
      { label: "Application", value: "#08" },
      { label: "Status", value: "In Review" },
      { label: "Application Date", value: "09/08/2026" },
      { label: "Billing Period", value: "August 2026" },
      { label: "Reviewer", value: "Project Manager" },
    ] as const,
    preview: "payAppDashboard" as PreviewKey,
  },
  g702: {
    eyebrow: "G702 Payment Application",
    headline: "See the Payment Summary Clearly.",
    body: "Give project teams a clear view of contract value, completed work, retainage, previous applications, and the amount requested in the current application.",
    preview: "payAppG702" as PreviewKey,
  },
  g703: {
    eyebrow: "Schedule of Values",
    headline: "See Billing Progress Line by Line.",
    body: "Track progress against each Schedule of Values line so teams can understand what has been completed, previously billed, currently billed, and what remains.",
    preview: "payAppG703" as PreviewKey,
  },
  workflow: {
    headline: "From Progress to Payment.",
    story: [
      "Contract",
      "Schedule of Values",
      "Project Progress",
      "Current Application",
      "Retainage",
      "Review",
      "Payment",
    ] as const,
    steps: [
      {
        n: "01",
        title: "Prepare",
        body: "Build the current application from project and contract information.",
      },
      {
        n: "02",
        title: "Review",
        body: "Review Schedule of Values, completed work, retainage, and payment details.",
      },
      {
        n: "03",
        title: "Certify",
        body: "Move the application through certification in workflow.",
      },
      {
        n: "04",
        title: "Track",
        body: "Keep the application and payment status visible.",
      },
    ],
    preview: "payAppFlow" as PreviewKey,
  },
  retainage: {
    eyebrow: "Retainage",
    headline: "Keep Retainage Visible Throughout the Application.",
    body: "Make retainage part of the payment picture so teams can clearly understand the amount withheld and how it affects the current payment.",
    preview: "payAppRetainage" as PreviewKey,
  },
  history: {
    headline: "Keep Every Application in Context.",
    body: "Give teams visibility into previous applications and the current application so billing progress can be understood over time.",
    preview: "payAppHistory" as PreviewKey,
  },
  review: {
    headline: "Give Reviewers the Information They Need.",
    body: "Keep the key financial information together so reviewers can understand the current application without switching between disconnected records.",
    cta: { label: "Explore Billing", href: `${ROUTES.features}/billing` },
    preview: "payAppReview" as PreviewKey,
  },
  visibility: {
    headline: "Financial visibility for every application.",
    cards: [
      {
        title: "Contract Value",
        body: "See the current contract value and approved changes.",
      },
      {
        title: "Progress",
        body: "Understand completed work against the Schedule of Values.",
      },
      {
        title: "Retainage",
        body: "Keep withheld amounts visible within the payment application.",
      },
      {
        title: "Current Payment",
        body: "Clearly understand the amount requested in the current application.",
      },
    ],
  },
  related: {
    headline: "Connected to Your Entire Financial Workflow.",
    activeSlug: "aia-pay-applications",
    cards: [
      {
        slug: "aia-pay-applications",
        title: "AIA Pay Applications",
        body: "G702 pay applications connected to Schedule of Values and certification.",
      },
      {
        slug: "billing",
        title: "Billing",
        body: "Progress billing, invoices, and receivables connected to the project.",
      },
      {
        slug: "budget-job-cost",
        title: "Budget & Job Cost",
        body: "Budgets, commitments, actuals, and variance by cost code.",
      },
      {
        slug: "native-accounting",
        title: "Native Accounting",
        body: "GL, AP, bank reconciliation, and project-aware financial activity.",
      },
      {
        slug: "wip",
        title: "WIP",
        body: "Work-in-progress reporting connected to budget and the ledger.",
      },
      {
        slug: "cash-flow",
        title: "Cash Flow",
        body: "Cash flow forecasting connected to invoices and payables.",
      },
    ],
  },
  finalCta: {
    headline: "Make Every Pay Application Easier to Manage.",
    supporting:
      "Connect contract values, progress billing, Schedule of Values, retainage, and payment applications in one construction management platform.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
  },
} as const;
