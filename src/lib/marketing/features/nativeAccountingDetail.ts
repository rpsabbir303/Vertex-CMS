/**
 * Native Accounting feature detail — GL / AP / BANK + connected AR / project financial visibility.
 * Source: CMS Master Feature Register (GL, AP, BANK) + featureAreas howItWorks / outcomes.
 * AR visibility connects through billing / invoice workflows already shown in platform financials.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

export const nativeAccountingFeatureDetail = {
  meta: {
    title: "Native Accounting | Vertex CMS Features",
    description:
      "Connect construction project operations with native general ledger, accounts payable, bank reconciliation, and project-aware financial visibility in Vertex CMS.",
    canonical: `${ROUTES.features}/native-accounting`,
  },
  hero: {
    eyebrow: "Financial Management",
    headline: "Accounting Built for Construction",
    supporting:
      "Connect project operations and accounting in one system, giving your team a clearer view of financial activity without disconnected workflows.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
    preview: "accountingDashboard" as PreviewKey,
  },
  nav: [
    { id: "na-overview", label: "Overview" },
    { id: "na-dashboard", label: "Financial System" },
    { id: "na-capabilities", label: "Capabilities" },
    { id: "na-workflow", label: "Workflow" },
    { id: "na-ap-ar", label: "AP / AR" },
    { id: "na-project", label: "Project Accounting" },
    { id: "na-reporting", label: "Reporting" },
  ] as const,
  intro: {
    headline: "Keep project and accounting data connected.",
    body: "Construction finance depends on information from every part of the project. Vertex CMS connects accounting activity with the projects, contracts, vendors, costs, and billing workflows that drive it.",
    points: [
      {
        title: "Connected Project Accounting",
        body: "Keep financial activity connected to project information.",
      },
      {
        title: "Clear Financial Activity",
        body: "Give teams a centralized view of transactions and accounting activity.",
      },
      {
        title: "Less Disconnected Work",
        body: "Reduce the need to move information between separate project and accounting workflows.",
      },
    ],
  },
  dashboard: {
    headline: "One financial system for the work behind every project.",
    body: "Bring core accounting activity into the same connected environment as your construction operations.",
    metrics: [
      { label: "Cash Position", value: "$2.84M" },
      { label: "Accounts Receivable", value: "$1.42M" },
      { label: "Accounts Payable", value: "$986K" },
      { label: "Open Transactions", value: "124" },
      { label: "Project Revenue", value: "$4.82M" },
    ] as const,
    preview: "accountingDashboard" as PreviewKey,
  },
  capabilities: {
    headline: "Core accounting, connected to construction.",
    items: [
      {
        title: "General Ledger",
        body: "Keep financial transactions organized within a centralized accounting structure.",
      },
      {
        title: "Accounts Payable",
        body: "Manage vendor obligations and track outstanding payments across projects.",
      },
      {
        title: "Accounts Receivable",
        body: "Track customer receivables and financial activity connected to project billing.",
      },
      {
        title: "Project Accounting",
        body: "Connect financial transactions to the projects and cost structures that drive them.",
      },
      {
        title: "Vendor Financials",
        body: "Maintain visibility into vendor-related financial activity and obligations.",
      },
      {
        title: "Financial Reporting",
        body: "Turn connected accounting data into clearer financial visibility for your team.",
      },
    ],
  },
  workflow: {
    headline: "From project activity to financial visibility.",
    steps: [
      {
        n: "01",
        title: "Capture",
        body: "Bring project and financial activity into the system.",
      },
      {
        n: "02",
        title: "Code",
        body: "Organize transactions against the appropriate accounts, projects, and cost structures.",
      },
      {
        n: "03",
        title: "Review",
        body: "Review accounting activity, outstanding obligations, and financial status.",
      },
      {
        n: "04",
        title: "Report",
        body: "Use connected information to understand financial performance.",
      },
    ],
    preview: "accountingFlow" as PreviewKey,
  },
  ap: {
    headline: "Know what you owe.",
    body: "Keep vendor obligations and outstanding payables visible across your construction operations.",
    preview: "accountingAp" as PreviewKey,
  },
  ar: {
    headline: "Know what you're owed.",
    body: "Keep receivables connected to customer, project, and billing activity.",
    preview: "accountingAr" as PreviewKey,
  },
  project: {
    headline: "Financial context starts with the project.",
    body: "Connect accounting activity back to the projects, contracts, and cost structures behind the numbers.",
    points: [
      "Project-level financial visibility",
      "Connected cost information",
      "Contract-aware financial activity",
      "Centralized transaction history",
    ],
    preview: "accountingProject" as PreviewKey,
  },
  reporting: {
    headline: "Turn transactions into financial visibility.",
    body: "Review revenue, expenses, receivables, payables, and cash position from connected accounting activity—without inventing performance claims.",
    preview: "accountingReport" as PreviewKey,
  },
  benefits: {
    headline: "Why native accounting",
    cards: [
      {
        title: "Connected Data",
        body: "Accounting stays connected to construction operations.",
      },
      {
        title: "Better Visibility",
        body: "See financial activity across projects and business operations.",
      },
      {
        title: "Fewer Handoffs",
        body: "Reduce disconnected workflows between project and finance teams.",
      },
      {
        title: "Built for Construction",
        body: "Financial workflows are presented in the context of construction projects.",
      },
    ],
  },
  related: {
    headline: "Connected to your entire financial workflow.",
    activeSlug: "native-accounting",
    cards: [
      {
        slug: "native-accounting",
        title: "Native Accounting",
        body: "GL, AP, bank reconciliation, and project-aware financial activity.",
      },
      {
        slug: "budget-job-cost",
        title: "Budget & Job Cost",
        body: "Budgets, commitments, actuals, and variance by cost code.",
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
    headline: "Bring accounting and construction together.",
    supporting:
      "Connect financial activity with the projects, costs, contracts, and workflows that keep your business moving.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Financial Management", href: `${ROUTES.features}#financial-management` },
  },
} as const;
