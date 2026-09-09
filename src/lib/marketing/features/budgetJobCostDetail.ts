/**
 * Budget & Job Cost feature detail — BUDGET module + approved cost model.
 * Core: Original / Approved Changes / Revised / Committed / Actual / Projected / Variance.
 * Committed & Actual are system-calculated.
 * Profit fade / ETC / EAC / margin prediction = advanced AI Intelligence (not core BUDGET).
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

export const budgetJobCostFeatureDetail = {
  meta: {
    title: "Budget & Job Cost | Vertex CMS Features",
    description:
      "Track original budget, approved changes, revised budget, committed cost, actual cost, projected cost, and variance by cost code in Vertex CMS.",
    canonical: `${ROUTES.features}/budget-job-cost`,
  },
  hero: {
    eyebrow: "Financial Management",
    headline: "Keep Every Job Cost Under Control",
    supporting:
      "Track budgets, commitments, actual costs, and projected spend in one connected view—so your team can understand project performance and protect margins.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
    preview: "budgetDashboard" as PreviewKey,
  },
  nav: [
    { id: "bjc-overview", label: "Overview" },
    { id: "bjc-dashboard", label: "Cost View" },
    { id: "bjc-flow", label: "Cost Flow" },
    { id: "bjc-codes", label: "Cost Codes" },
    { id: "bjc-variance", label: "Variance" },
    { id: "bjc-workflow", label: "Workflow" },
    { id: "bjc-intelligence", label: "Intelligence" },
  ] as const,
  intro: {
    headline: "Know where every project dollar stands.",
    body: "Vertex CMS connects project budgets with the costs flowing through your construction operations, giving teams a clearer picture of financial performance from the original budget through projected cost.",
    points: [
      {
        title: "Start with a clear budget",
        body: "Build project budgets around structured cost codes and approved project information.",
      },
      {
        title: "Track committed and actual cost",
        body: "See costs as approved contracts, purchase orders, timesheets, receipts, and pay applications flow through the project.",
      },
      {
        title: "Spot variance early",
        body: "Compare revised, committed, actual, and projected costs to understand where a project is heading.",
      },
    ],
  },
  dashboard: {
    headline: "One view of your project cost.",
    body: "Bring budget, commitments, actual spend, and projected cost together so project teams can make decisions with the financial picture in view.",
    project: "Riverside Medical Center",
    metrics: [
      { label: "Original Budget", value: "$4.82M" },
      { label: "Approved Changes", value: "+$320K" },
      { label: "Revised Budget", value: "$5.14M" },
      { label: "Committed Cost", value: "$3.76M" },
      { label: "Actual Cost", value: "$2.94M" },
      { label: "Projected Cost", value: "$4.98M" },
      { label: "Variance", value: "+$160K" },
    ] as const,
    preview: "budgetDashboard" as PreviewKey,
  },
  flow: {
    headline: "From budget to projected cost.",
    steps: [
      {
        n: "01",
        title: "Original Budget",
        body: "Start with the approved project budget organized by cost code.",
      },
      {
        n: "02",
        title: "Approved Changes",
        body: "Capture approved project changes that affect the budget.",
      },
      {
        n: "03",
        title: "Revised Budget",
        body: "Reflect the current approved financial position of the project.",
      },
      {
        n: "04",
        title: "Committed Cost",
        body: "Automatically reflect executed subcontracts and approved purchase orders.",
        system: true,
      },
      {
        n: "05",
        title: "Actual Cost",
        body: "Automatically reflect approved timesheets, received purchase orders, and certified subcontractor pay applications.",
        system: true,
      },
      {
        n: "06",
        title: "Projected Cost",
        body: "Give teams visibility into where project cost is heading.",
      },
    ],
    preview: "budgetFlow" as PreviewKey,
  },
  costCodes: {
    headline: "See the story behind every cost.",
    sideHeadline: "Built around the way construction teams manage cost.",
    body: "Project financial information can be viewed through structured project and cost-code data—so original, revised, committed, actual, projected, and variance stay aligned on the same job cost record.",
    preview: "budgetCostCodes" as PreviewKey,
  },
  variance: {
    headline: "Understand variance before it becomes a problem.",
    body: "Compare planned, committed, actual, and projected costs to identify where performance is changing and where attention is needed.",
    insights: [
      { title: "Under Budget", body: "Projected cost remains within the revised budget." },
      { title: "On Track", body: "Committed and actual costs align with expected progress." },
      { title: "Watch Variance", body: "Highlight categories where projected cost needs attention." },
    ],
    preview: "budgetVsActual" as PreviewKey,
  },
  workflow: {
    headline: "Connected job costing, without disconnected spreadsheets.",
    steps: [
      {
        n: "01",
        title: "Budget",
        body: "Create the project budget and cost-code structure.",
      },
      {
        n: "02",
        title: "Commit",
        body: "Connect executed subcontracts and approved purchase orders to committed cost.",
      },
      {
        n: "03",
        title: "Capture",
        body: "Bring approved timesheets, received POs, and certified pay applications into actual cost.",
      },
      {
        n: "04",
        title: "Project",
        body: "Compare current performance with projected cost and variance.",
      },
    ],
  },
  intelligence: {
    eyebrow: "Project Intelligence",
    badge: "Advanced · AI",
    headline: "See margin risk before it becomes an overrun.",
    body: "Advanced intelligence can analyze projected cost and help identify potential profit fade, cost-to-complete, and final-margin risk before the project finishes.",
    cards: [
      {
        title: "Profit Fade Early Warning",
        body: "Identify emerging margin pressure.",
      },
      {
        title: "Cost to Complete",
        body: "Understand expected remaining project cost.",
      },
      {
        title: "Final Margin Prediction",
        body: "Use project cost signals to anticipate potential final margin.",
      },
    ],
    preview: "budgetIntelligence" as PreviewKey,
  },
  benefits: {
    headline: "Built to keep projects financially accountable.",
    cards: [
      {
        title: "Clear Cost Visibility",
        body: "Understand where project money is committed and spent.",
      },
      {
        title: "Fewer Manual Updates",
        body: "System-controlled cost data reduces unnecessary manual reconciliation.",
      },
      {
        title: "Earlier Variance Awareness",
        body: "Identify changes between budget, committed, actual, and projected cost.",
      },
      {
        title: "Better Margin Control",
        body: "Give teams the information needed to protect project financial performance.",
      },
    ],
  },
  related: {
    headline: "Connected to your entire financial workflow.",
    activeSlug: "budget-job-cost",
    cards: [
      {
        slug: "budget-job-cost",
        title: "Budget & Job Cost",
        body: "Budgets, commitments, actuals, and variance by cost code.",
      },
      {
        slug: "native-accounting",
        title: "Native Accounting",
        body: "Native double-entry ledger, AP, and accounting periods.",
      },
      {
        slug: "billing",
        title: "Billing",
        body: "Invoices and receivables connected to project financial data.",
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
    headline: "Take control of project cost.",
    supporting:
      "Connect budgets, commitments, actual costs, and projections in one construction management platform.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
  },
} as const;
