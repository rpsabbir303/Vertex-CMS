/**
 * Billing feature detail — INV (Invoices & AR) connected to Contracts, SOV, and Pay Applications.
 * Source: Register INV + CONTR/SOV/PAYAPP connected workflows in financial management.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

export const billingFeatureDetail = {
  meta: {
    title: "Billing | VertexBuild Features",
    description:
      "Manage construction progress billing, schedule of values, pay applications, invoices, and receivables with project and contract information connected in VertexBuild.",
    canonical: `${ROUTES.features}/billing`,
  },
  hero: {
    eyebrow: "Financial Management",
    headline: "Billing That Stays Connected to the Project",
    supporting:
      "Manage progress billing, applications, and receivables with project and contract information connected in one workflow.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
    preview: "billingWorkspace" as PreviewKey,
  },
  nav: [
    { id: "bill-overview", label: "Overview" },
    { id: "bill-workspace", label: "Workspace" },
    { id: "bill-sov", label: "Schedule of Values" },
    { id: "bill-workflow", label: "Workflow" },
    { id: "bill-progress", label: "Progress Billing" },
    { id: "bill-payapp", label: "Pay Applications" },
    { id: "bill-ar", label: "Receivables" },
  ] as const,
  intro: {
    headline: "Turn project progress into clear, trackable billing.",
    body: "Billing depends on more than an invoice. VertexBuild connects project progress, contract values, scheduled values, applications, and payments so your team can manage the complete billing workflow.",
    points: [
      {
        title: "Bill From Project Data",
        body: "Keep billing connected to contract and project information.",
      },
      {
        title: "Track Progress Clearly",
        body: "Understand billing progress against scheduled values.",
      },
      {
        title: "Know What's Outstanding",
        body: "Keep billed, paid, and outstanding amounts visible.",
      },
    ],
  },
  workspace: {
    headline: "One workspace for project billing.",
    body: "Bring scheduled values, billing progress, applications, and payment status together in one connected view.",
    project: "Riverside Medical Center",
    metrics: [
      { label: "Contract Value", value: "$4.82M" },
      { label: "Original Contract", value: "$4.50M" },
      { label: "Approved Changes", value: "+$320K" },
      { label: "Billed", value: "$3.21M" },
      { label: "Paid", value: "$2.84M" },
      { label: "Outstanding", value: "$370K" },
    ] as const,
    preview: "billingWorkspace" as PreviewKey,
  },
  sov: {
    headline: "See billing progress line by line.",
    body: "Keep scheduled values and billing progress organized at the line-item level so teams can understand exactly what has been billed and what remains.",
    preview: "billingSov" as PreviewKey,
  },
  workflow: {
    headline: "From progress to payment.",
    steps: [
      { n: "01", title: "Build", body: "Set up contract and scheduled values." },
      { n: "02", title: "Progress", body: "Capture current project billing progress." },
      { n: "03", title: "Apply", body: "Prepare and review the current payment application." },
      { n: "04", title: "Track", body: "Monitor billed, paid, and outstanding amounts." },
    ],
    preview: "billingFlow" as PreviewKey,
  },
  progress: {
    headline: "Billing that reflects project progress.",
    body: "Connect billing progress to the work happening across the project and keep the financial position visible throughout the billing cycle.",
    preview: "billingProgress" as PreviewKey,
  },
  payApp: {
    headline: "Move from billing preparation to payment application.",
    body: "Keep project billing information connected to the pay application workflow so teams can prepare, review, and track applications without rebuilding project data.",
    steps: ["Schedule of Values", "Progress Billing", "Pay Application", "Approval", "Payment"] as const,
    cta: { label: "Explore AIA Pay Applications", href: `${ROUTES.features}/aia-pay-applications` },
    preview: "billingPayApp" as PreviewKey,
  },
  ar: {
    billedHeading: "Know what has been billed.",
    billedBody: "Track invoices and billing activity across customers and projects.",
    outstandingHeading: "Know what is still outstanding.",
    outstandingBody: "Keep payment status visible so your team can follow receivables through completion.",
    preview: "billingAr" as PreviewKey,
  },
  visibility: {
    headline: "See the complete billing picture.",
    cards: [
      { title: "Contract Value", body: "Understand the current value of the project contract." },
      { title: "Billed to Date", body: "See cumulative billing progress." },
      { title: "Paid to Date", body: "Track payments received." },
      { title: "Outstanding", body: "Identify the remaining receivable balance." },
    ],
  },
  controls: {
    headline: "Keep every billing cycle accountable.",
    body: "Give project and finance teams a shared view of billing information, applications, and payment status.",
    points: [
      {
        title: "Contract Connected",
        body: "Billing stays tied to project contract information.",
      },
      {
        title: "Line-Level Visibility",
        body: "Track billing progress through scheduled values.",
      },
      {
        title: "Application Tracking",
        body: "Keep payment applications organized throughout the workflow.",
      },
      {
        title: "Payment Visibility",
        body: "See billed, paid, and outstanding amounts together.",
      },
    ],
  },
  benefits: {
    headline: "Built for the way construction gets billed.",
    cards: [
      {
        title: "Less Manual Rework",
        body: "Keep project information connected throughout billing.",
      },
      {
        title: "Clearer Progress",
        body: "Understand billing status at the line-item level.",
      },
      {
        title: "Faster Review",
        body: "Give teams one place to review billing information.",
      },
      {
        title: "Better Cash Visibility",
        body: "Know what has been billed, paid, and remains outstanding.",
      },
    ],
  },
  related: {
    headline: "Connected to your entire financial workflow.",
    activeSlug: "billing",
    exploreAll: {
      label: "Explore All Financial Management",
      href: `${ROUTES.features}#financial-management`,
    },
    cards: [
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
        slug: "aia-pay-applications",
        title: "AIA Pay Applications",
        body: "AIA G702 pay applications connected to schedule of values.",
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
    headline: "Make every billing cycle easier to manage.",
    supporting:
      "Connect contracts, scheduled values, progress billing, applications, and payments in one construction management platform.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
  },
} as const;
