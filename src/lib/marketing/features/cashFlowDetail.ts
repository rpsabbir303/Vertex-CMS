/**
 * Cash Flow feature detail — Cash Flow Forecast connected to invoices and payables.
 * Source: CMS Master Feature Register (CASH) + INV/AP dependencies + featureAreas howItWorks.
 *
 * Supported: Cash flow forecasts, forecast visibility, connection to invoices (AR) and payables (AP),
 * project financial context alongside forecast views.
 *
 * Not claimed: bank cash balance as a CASH module metric, invented project cash-position formulas,
 * automated alerts / cash-gap predictions, forecast accuracy guarantees, AI cash forecasting.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

export const cashFlowFeatureDetail = {
  meta: {
    title: "Cash Flow Forecast | VertexBuild Features",
    description:
      "Cash flow forecasting connected to invoices and payables so construction teams can see expected inflows, outflows, and upcoming financial movement in VertexBuild.",
    canonical: `${ROUTES.features}/cash-flow`,
  },
  hero: {
    eyebrow: "Financial Management",
    headline: "See Your Cash Flow Before It Becomes a Problem",
    supporting:
      "Understand expected inflows and outflows across your construction operations so your team can plan ahead, manage commitments, and make informed financial decisions.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
    preview: "cashDashboard" as PreviewKey,
  },
  nav: [
    { id: "cash-overview", label: "Overview" },
    { id: "cash-workspace", label: "Forecast" },
    { id: "cash-timeline", label: "Timeline" },
    { id: "cash-inflows", label: "Inflows" },
    { id: "cash-outflows", label: "Outflows" },
    { id: "cash-arap", label: "AR / AP" },
    { id: "cash-project", label: "Project" },
    { id: "cash-workflow", label: "Workflow" },
  ] as const,
  intro: {
    eyebrow: "Cash Flow Visibility",
    headline: "Know What Is Coming In. Know What Is Going Out.",
    body: "Construction cash flow depends on timing. VertexBuild brings receivables, payables, project activity, and upcoming financial obligations into a clearer forecast view so teams can plan with better context.",
    points: [
      {
        title: "See Expected Inflows",
        body: "Understand money expected from customers and projects.",
      },
      {
        title: "Track Upcoming Outflows",
        body: "Keep upcoming vendor, subcontractor, and business obligations visible.",
      },
      {
        title: "Plan With Better Visibility",
        body: "Use connected financial information to understand the cash outlook ahead.",
      },
    ],
  },
  showcase: {
    headline: "One View of Your Cash Position.",
    body: "Bring expected inflows, outflows, receivables, and payables together in one financial workspace.",
    disclaimer: "Sample figures are illustrative for marketing — not company results.",
    metrics: [
      { label: "Expected Inflows", value: "$1.42M" },
      { label: "Expected Outflows", value: "$986K" },
      { label: "Receivables", value: "$1.18M" },
      { label: "Payables", value: "$742K" },
      { label: "Upcoming Payments", value: "$384K" },
      { label: "Net Expected Movement", value: "+$434K" },
    ] as const,
    preview: "cashDashboard" as PreviewKey,
  },
  timeline: {
    headline: "See Cash Flow Over Time.",
    body: "Review expected inflows, outflows, and net movement across a simple forecast timeline. Visibility for planning — not a guarantee of forecast accuracy.",
    preview: "cashChart" as PreviewKey,
  },
  inflows: {
    eyebrow: "Expected Inflows",
    headline: "Know Where Your Next Cash Is Coming From.",
    body: "Keep expected customer and project receipts visible so teams can better understand incoming cash from invoices and receivables.",
    columns: ["Customer", "Project", "Invoice", "Expected Date", "Amount", "Status"] as const,
    rows: [
      {
        customer: "Northline Development",
        project: "Riverside Medical Center",
        invoice: "INV-1048",
        date: "Sep 18",
        amount: "$284K",
        status: "Expected",
      },
      {
        customer: "Harbor Properties",
        project: "Harbor Expansion",
        invoice: "INV-1092",
        date: "Sep 24",
        amount: "$196K",
        status: "Pending",
      },
      {
        customer: "Downtown Holdings",
        project: "Downtown Office",
        invoice: "INV-1120",
        date: "Oct 03",
        amount: "$142K",
        status: "Expected",
      },
    ] as const,
    preview: "cashInflows" as PreviewKey,
  },
  outflows: {
    eyebrow: "Expected Outflows",
    headline: "Stay Ahead of Upcoming Commitments.",
    body: "Understand upcoming payments and obligations so your team can plan cash requirements before they become urgent.",
    columns: ["Vendor", "Project", "Type", "Due Date", "Amount", "Status"] as const,
    rows: [
      {
        vendor: "ABC Concrete",
        project: "Riverside Medical Center",
        type: "Subcontract",
        date: "Sep 15",
        amount: "$84K",
        status: "Scheduled",
      },
      {
        vendor: "Metro Electrical",
        project: "Downtown Office",
        type: "Purchase Order",
        date: "Sep 20",
        amount: "$42K",
        status: "Pending",
      },
      {
        vendor: "SteelWorks",
        project: "Harbor Expansion",
        type: "Subcontract",
        date: "Sep 28",
        amount: "$126K",
        status: "Scheduled",
      },
    ] as const,
    preview: "cashOutflows" as PreviewKey,
  },
  arap: {
    left: {
      headline: "Receivables You Can See.",
      totalLabel: "Accounts Receivable",
      totalValue: "$1.18M",
      items: [
        { label: "Open", value: "$742K" },
        { label: "Due Soon", value: "$284K" },
        { label: "Overdue", value: "$154K" },
      ] as const,
    },
    right: {
      headline: "Payables You Can Plan For.",
      totalLabel: "Accounts Payable",
      totalValue: "$742K",
      items: [
        { label: "Due This Week", value: "$184K" },
        { label: "Due This Month", value: "$384K" },
        { label: "Scheduled", value: "$174K" },
      ] as const,
    },
    preview: "cashArAp" as PreviewKey,
  },
  project: {
    headline: "Understand Cash at the Project Level.",
    body: "See how project billing, receivables, commitments, and payments contribute to the financial picture of active work — connected to the cash forecast.",
    projectName: "Riverside Medical Center",
    metrics: [
      { label: "Contract Value", value: "$4.82M" },
      { label: "Billed", value: "$3.21M" },
      { label: "Collected", value: "$2.84M" },
      { label: "Outstanding AR", value: "$370K" },
      { label: "Upcoming Payables", value: "$420K" },
    ] as const,
    note: "Project financial summary for forecast context — not an automated project cash-position calculation.",
    preview: "cashProject" as PreviewKey,
  },
  workflow: {
    headline: "From Financial Activity to Cash Visibility.",
    story: [
      "Expected Inflows",
      "Expected Outflows",
      "Receivables",
      "Payables",
      "Upcoming Movement",
      "Better Planning",
    ] as const,
    steps: [
      {
        n: "01",
        title: "Collect",
        body: "Bring receivables, payables, billing, and financial activity together.",
      },
      {
        n: "02",
        title: "Organize",
        body: "Structure expected inflows and outflows.",
      },
      {
        n: "03",
        title: "Review",
        body: "Understand upcoming cash movement.",
      },
      {
        n: "04",
        title: "Plan",
        body: "Use the available information to make informed financial decisions.",
      },
    ],
    preview: "cashFlow" as PreviewKey,
  },
  benefits: {
    headline: "Built for Better Cash Visibility.",
    cards: [
      {
        title: "Clearer Cash Position",
        body: "Understand current financial activity in one place.",
      },
      {
        title: "Better Planning",
        body: "See expected inflows and upcoming outflows.",
      },
      {
        title: "Project Context",
        body: "Connect financial visibility to active construction work.",
      },
      {
        title: "Fewer Surprises",
        body: "Identify upcoming financial obligations and receivables earlier.",
      },
    ],
  },
  related: {
    headline: "Connected to Your Entire Financial Workflow.",
    activeSlug: "cash-flow",
    cards: [
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
        slug: "billing",
        title: "Billing",
        body: "Progress billing, invoices, and receivables connected to the project.",
      },
      {
        slug: "aia-pay-applications",
        title: "AIA Pay Applications",
        body: "G702 pay applications connected to Schedule of Values and certification.",
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
  fmOverview: {
    eyebrow: "Financial Management",
    headline: "Every Financial Workflow. Connected.",
    supporting:
      "From budgeting and job cost to billing, pay applications, WIP, and cash flow, VertexBuild brings the financial side of construction into one connected platform.",
    primary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
  finalCta: {
    headline: "Plan Ahead With Better Cash Visibility.",
    supporting:
      "Connect financial activity, receivables, payables, and project information in one construction management platform.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: CTAS.exploreFeatures.label, href: CTAS.exploreFeatures.href },
  },
} as const;
