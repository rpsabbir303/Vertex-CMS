/**
 * WIP feature detail — WIP snapshots & reporting connected to GL and budget.
 * Source: CMS Master Feature Register (WIP) + featureAreas howItWorks / outcomes.
 *
 * Supported: WIP snapshots, WIP reporting, GL + budget connection,
 * project-level and across-project financial visibility.
 *
 * Not claimed (not in register): earned value / earned revenue formulas,
 * over/under billing calculations, gross profit / margin as WIP metrics,
 * cost-to-complete / EAC within WIP (those live in Budget & Job Cost).
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

export const wipFeatureDetail = {
  meta: {
    title: "WIP Reporting | VertexBuild Features",
    description:
      "Work-in-progress reporting snapshots connected to GL and budget so construction teams can see project financial position across active work.",
    canonical: `${ROUTES.features}/wip`,
  },
  hero: {
    eyebrow: "Financial Management",
    headline: "Understand the Financial Health of Every Active Project",
    supporting:
      "Get a clearer view of work in progress with connected project contract, budget, cost, billing, and ledger information.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
    preview: "wipDashboard" as PreviewKey,
  },
  nav: [
    { id: "wip-overview", label: "Overview" },
    { id: "wip-workspace", label: "WIP View" },
    { id: "wip-project", label: "Project" },
    { id: "wip-context", label: "Position" },
    { id: "wip-table", label: "Report" },
    { id: "wip-performance", label: "Performance" },
    { id: "wip-workflow", label: "Workflow" },
    { id: "wip-portfolio", label: "Portfolio" },
  ] as const,
  intro: {
    eyebrow: "Work In Progress",
    headline: "See What Your Projects Are Really Doing.",
    body: "WIP gives project and finance teams a clearer picture of active project performance by bringing financial and project information together in one reporting view.",
    points: [
      {
        title: "Project-Level Visibility",
        body: "Understand the financial position of individual active projects.",
      },
      {
        title: "Connected Financial Context",
        body: "Compare budget, cost, and billing information connected to the ledger.",
      },
      {
        title: "Portfolio Awareness",
        body: "See where active projects stand and where financial attention may be needed.",
      },
    ],
  },
  showcase: {
    headline: "One View of Work in Progress.",
    body: "Bring the financial information behind active projects into one clear WIP workspace.",
    project: "Riverside Medical Center",
    metrics: [
      { label: "Contract Value", value: "$4.82M" },
      { label: "Budget", value: "$5.14M" },
      { label: "Actual Cost", value: "$2.94M" },
      { label: "Billed", value: "$3.21M" },
      { label: "Snapshot", value: "Sep 2026" },
      { label: "Sources", value: "GL · Budget" },
    ] as const,
    preview: "wipDashboard" as PreviewKey,
    tablePreview: "wipTable" as PreviewKey,
  },
  projectView: {
    headline: "Understand Each Project in Context.",
    body: "Open a project-level WIP view to understand the financial position behind active work.",
    fields: [
      { label: "Project Name", value: "Riverside Medical Center" },
      { label: "Project Manager", value: "A. Chen" },
      { label: "Contract Value", value: "$4.82M" },
      { label: "Budget", value: "$5.14M" },
      { label: "Actual Cost", value: "$2.94M" },
      { label: "Billed", value: "$3.21M" },
    ] as const,
    comparisonNote: "Simple comparison of budget, actual cost, and billed amounts for the active project.",
    preview: "wipProject" as PreviewKey,
  },
  position: {
    eyebrow: "Project Financial Position",
    headline: "See Budget, Cost, and Billing Side by Side.",
    body: "Make differences between budget context, incurred cost, and billed amounts easier to identify so teams can understand where project financial attention may be needed. Interpretation stays with your project and finance teams.",
    examples: [
      {
        title: "Example A · Riverside Medical Center",
        rows: [
          { label: "Budget", value: "$5.14M" },
          { label: "Actual Cost", value: "$2.94M" },
          { label: "Billed", value: "$3.21M" },
        ],
        note: "Illustrative snapshot values for marketing — not presented as company performance.",
      },
      {
        title: "Example B · Downtown Office",
        rows: [
          { label: "Budget", value: "$3.80M" },
          { label: "Actual Cost", value: "$2.22M" },
          { label: "Billed", value: "$2.71M" },
        ],
        note: "Connected GL and budget context help teams review position by period.",
      },
    ] as const,
    preview: "wipSnapshot" as PreviewKey,
  },
  table: {
    headline: "Turn Project Data Into a Clear WIP View.",
    body: "Use WIP reporting to organize connected contract, budget, cost, and billing information across active projects.",
    columns: ["Project", "Contract", "Budget", "Actual Cost", "Billed", "Snapshot"] as const,
    rows: [
      {
        project: "Riverside Medical Center",
        contract: "$4.82M",
        budget: "$5.14M",
        cost: "$2.94M",
        billed: "$3.21M",
        snapshot: "Sep 2026",
      },
      {
        project: "Downtown Office",
        contract: "$3.64M",
        budget: "$3.80M",
        cost: "$2.22M",
        billed: "$2.71M",
        snapshot: "Sep 2026",
      },
      {
        project: "Harbor Expansion",
        contract: "$6.12M",
        budget: "$6.40M",
        cost: "$2.68M",
        billed: "$3.08M",
        snapshot: "Sep 2026",
      },
    ] as const,
    disclaimer: "Example projects and figures are illustrative for marketing.",
    preview: "wipTable" as PreviewKey,
  },
  performance: {
    headline: "See the Financial Story Behind Active Work.",
    body: "WIP reporting keeps the core financial signals behind active work visible in one place.",
    items: [
      {
        title: "Contract Value",
        body: "What the project is contracted to deliver.",
      },
      {
        title: "Budget",
        body: "Budget context connected from job cost.",
      },
      {
        title: "Actual Cost",
        body: "What has been incurred against the work.",
      },
      {
        title: "Billed",
        body: "What has been billed to date.",
      },
    ] as const,
    preview: "wipProject" as PreviewKey,
  },
  workflow: {
    headline: "From Project Activity to Financial Insight.",
    story: [
      "Active Project",
      "Contract",
      "Budget",
      "Cost",
      "Billed",
      "WIP Snapshot",
      "Portfolio View",
    ] as const,
    steps: [
      {
        n: "01",
        title: "Collect",
        body: "Bring the relevant project financial information together.",
      },
      {
        n: "02",
        title: "Snapshot",
        body: "Capture a WIP reporting snapshot connected to GL and budget.",
      },
      {
        n: "03",
        title: "Review",
        body: "Understand contract, budget, cost, billing, and project position.",
      },
      {
        n: "04",
        title: "Act",
        body: "Use the information to guide project and financial decisions.",
      },
    ],
    preview: "wipFlow" as PreviewKey,
  },
  portfolio: {
    headline: "See WIP Across Your Project Portfolio.",
    body: "Use WIP reporting for financial visibility across projects so leadership can identify where attention may be needed.",
    preview: "wipPortfolio" as PreviewKey,
  },
  benefits: {
    headline: "Built for Better Project Financial Visibility.",
    cards: [
      {
        title: "Clear Project Position",
        body: "Understand the financial position of active work.",
      },
      {
        title: "Billing Visibility",
        body: "Compare project cost and billing information in context.",
      },
      {
        title: "Earlier Awareness",
        body: "Identify financial differences that may require attention.",
      },
      {
        title: "Better Decisions",
        body: "Give project and finance teams a clearer basis for action.",
      },
    ],
  },
  related: {
    headline: "Connected to Your Entire Financial Workflow.",
    activeSlug: "wip",
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
  finalCta: {
    headline: "Get a Clearer View of Work in Progress.",
    supporting:
      "Connect project contract, budget, cost, billing, and financial information in one construction management platform.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
  },
} as const;
