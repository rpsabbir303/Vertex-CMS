/**
 * Features hub sections — six mega-menu capability groups on the single /features page.
 * Feature areas match FEATURES_MEGA_MENU labels. Detail pages live at /features/[slug].
 */

import type { PreviewKey } from "./register";
import { FEATURE_LIBRARY } from "./register";

export type HubFeatureArea = {
  id: string;
  /** URL slug for the reusable feature detail page */
  slug: string;
  label: string;
  description: string;
  tags: string[];
};

export type HubWorkflowStep = {
  label: string;
  /** When set, the step is a real feature detail route. */
  slug?: string;
};

export type HubModuleSection = {
  id: string;
  number: string;
  title: string;
  description: string;
  preview: PreviewKey;
  dark?: boolean;
  layout: "list-left" | "list-right" | "field-split" | "dark-ai" | "growth";
  workflowLabel: string;
  workflow: HubWorkflowStep[];
  areas: HubFeatureArea[];
};

export const HUB_MODULES: HubModuleSection[] = [
  {
    id: "project-management",
    number: "01",
    title: "Project Management",
    description:
      "Bring project information, schedules, documents, RFIs, submittals, and change orders into one connected construction management workflow.",
    preview: "project",
    layout: "list-left",
    workflowLabel: "Connected project workflow",
    workflow: [
      { label: "Projects", slug: "projects" },
      { label: "Scheduling", slug: "scheduling" },
      { label: "Documents", slug: "documents" },
      { label: "RFIs", slug: "rfis" },
      { label: "Submittals", slug: "submittals" },
      { label: "Change Orders", slug: "change-orders" },
    ],
    areas: [
      {
        id: "pm-projects",
        slug: "projects",
        label: "Projects",
        description:
          "Create and manage construction projects from a centralized workspace, with project information, phases, members, status, and financial visibility connected in one place.",
        tags: ["Workspace", "Phases", "Members"],
      },
      {
        id: "pm-scheduling",
        slug: "scheduling",
        label: "Scheduling",
        description:
          "Plan and coordinate project work with schedules, activities, dependencies, milestones, critical path visibility, look-ahead planning, and schedule variance.",
        tags: ["Gantt", "Critical path", "Look-ahead"],
      },
      {
        id: "pm-documents",
        slug: "documents",
        label: "Documents",
        description:
          "Centralize project documents and keep project information organized, accessible, and connected to the workflows that depend on it.",
        tags: ["Document Center", "Versions", "Access"],
      },
      {
        id: "pm-rfis",
        slug: "rfis",
        label: "RFIs",
        description:
          "Create, track, review, and manage requests for information while keeping questions, responses, attachments, and project context connected.",
        tags: ["Status", "Responses", "Attachments"],
      },
      {
        id: "pm-submittals",
        slug: "submittals",
        label: "Submittals",
        description:
          "Manage submittals through review and approval while keeping requirements, status, deadlines, and project teams aligned.",
        tags: ["Review", "Deadlines", "Status"],
      },
      {
        id: "pm-change-orders",
        slug: "change-orders",
        label: "Change Orders",
        description:
          "Track change order requests and approvals with visibility into contract impact, cost changes, and project decisions.",
        tags: ["Approvals", "Cost impact", "Contracts"],
      },
    ],
  },
  {
    id: "financial-management",
    number: "02",
    title: "Financial Management",
    description: "Connect project costs, accounting, billing, and financial visibility in one platform.",
    preview: "finance",
    dark: true,
    layout: "list-right",
    workflowLabel: "Connected financial workflow",
    workflow: [
      { label: "Budget & Job Cost", slug: "budget-job-cost" },
      { label: "AIA Pay Applications", slug: "aia-pay-applications" },
      { label: "Billing", slug: "billing" },
      { label: "Native Accounting", slug: "native-accounting" },
      { label: "WIP", slug: "wip" },
      { label: "Cash Flow", slug: "cash-flow" },
    ],
    areas: [
      {
        id: "fm-budget",
        slug: "budget-job-cost",
        label: "Budget & Job Cost",
        description: "Project budgets and job cost visibility tied to cost codes.",
        tags: ["Budget", "Job cost", "Cost codes"],
      },
      {
        id: "fm-accounting",
        slug: "native-accounting",
        label: "Native Accounting",
        description: "Native double-entry ledger, AP/AR, and accounting periods.",
        tags: ["GL", "AP", "AR"],
      },
      {
        id: "fm-billing",
        slug: "billing",
        label: "Billing",
        description: "Invoices and receivables connected to project financial data.",
        tags: ["Invoices", "Payments", "AR"],
      },
      {
        id: "fm-payapps",
        slug: "aia-pay-applications",
        label: "AIA Pay Applications",
        description: "AIA G702 pay applications connected to schedule of values.",
        tags: ["G702", "SOV", "Certify"],
      },
      {
        id: "fm-wip",
        slug: "wip",
        label: "WIP",
        description: "Work-in-progress reporting connected to budget and the ledger.",
        tags: ["WIP snapshots", "Reporting"],
      },
      {
        id: "fm-cash",
        slug: "cash-flow",
        label: "Cash Flow",
        description: "Cash flow forecasting connected to invoices and payables.",
        tags: ["Forecast", "Visibility"],
      },
    ],
  },
  {
    id: "field-operations",
    number: "03",
    title: "Field Operations",
    description: "Keep field teams connected with real-time project information, documentation, and daily workflows.",
    preview: "field",
    layout: "field-split",
    workflowLabel: "Field to office continuity",
    workflow: [
      { label: "Field" },
      { label: "Mobile", slug: "mobile" },
      { label: "Project", slug: "projects" },
      { label: "Office" },
    ],
    areas: [
      {
        id: "fo-daily-logs",
        slug: "daily-logs",
        label: "Daily Logs",
        description: "Daily field logs captured where work happens and synced to the project.",
        tags: ["Daily logs", "Sync", "Field record"],
      },
      {
        id: "fo-drawings",
        slug: "drawings",
        label: "Drawings",
        description: "Drawings and markup so the field works from the current revision.",
        tags: ["Markup", "Current revision"],
      },
      {
        id: "fo-punch",
        slug: "punch",
        label: "Punch",
        description: "Punch lists and items for quality completion and closeout.",
        tags: ["Punch lists", "Status"],
      },
      {
        id: "fo-tm",
        slug: "t-and-m",
        label: "T&M",
        description: "Time & material field tickets and line items.",
        tags: ["Field tickets", "Lines"],
      },
      {
        id: "fo-safety",
        slug: "safety",
        label: "Safety",
        description: "Safety incidents, inspections, toolbox talks, and JHA/JSA.",
        tags: ["Incidents", "Inspections"],
      },
      {
        id: "fo-mobile",
        slug: "mobile",
        label: "Mobile",
        description: "Mobile-first field workflows connected to the project record.",
        tags: ["Mobile", "Offline-capable"],
      },
    ],
  },
  {
    id: "compliance",
    number: "04",
    title: "Compliance & Workforce",
    description: "Keep people, subcontractors, and compliance workflows organized across every project.",
    preview: "workforce",
    layout: "list-right",
    workflowLabel: "Workforce and compliance record",
    workflow: [
      { label: "Subcontractors", slug: "subcontractors" },
      { label: "Compliance", slug: "compliance" },
      { label: "Workforce", slug: "workforce" },
      { label: "Payroll Readiness", slug: "payroll-readiness" },
    ],
    areas: [
      {
        id: "cw-subs",
        slug: "subcontractors",
        label: "Subcontractors",
        description: "Subcontractor profiles, insurance, lien waivers, and readiness.",
        tags: ["Directory", "Insurance", "Compliance"],
      },
      {
        id: "cw-compliance",
        slug: "compliance",
        label: "Compliance",
        description: "Requirements, COI, lien waivers, and compliance readiness.",
        tags: ["COI", "Radar", "Alerts"],
      },
      {
        id: "cw-workforce",
        slug: "workforce",
        label: "Workforce",
        description: "Workers, crews, hours, certifications, and timesheets.",
        tags: ["Workers", "Crews", "Timesheets"],
      },
      /** Kept for /features/time detail seed — not shown in Compliance & Workforce hub UI */
      {
        id: "cw-time",
        slug: "time",
        label: "Time",
        description: "Timesheets, labor hours, and cost code time capture.",
        tags: ["Timesheets", "Cost Codes", "Approval"],
      },
      {
        id: "cw-payroll",
        slug: "payroll-readiness",
        label: "Payroll Readiness",
        description: "Organize approved labor for payroll-related review.",
        tags: ["Payroll Summary", "Approved Time", "Classifications"],
      },
    ],
  },
  {
    id: "ai",
    number: "05",
    title: "AI & Intelligence",
    description: "Turn project data and documents into faster answers, deeper insights, and smarter decisions.",
    preview: "ai",
    dark: true,
    layout: "dark-ai",
    workflowLabel: "Intelligence on live project data",
    workflow: [
      { label: "AI Assistant", slug: "ai-assistant" },
      { label: "Project Intelligence", slug: "project-intelligence" },
      { label: "Predictive Insights", slug: "predictive-insights" },
      { label: "Document Intelligence", slug: "document-intelligence" },
      { label: "Automation", slug: "automation" },
    ],
    areas: [
      {
        id: "ai-assistant",
        slug: "ai-assistant",
        label: "AI Assistant",
        description: "Ask project questions grounded in live data — with human confirmation before writes.",
        tags: ["Q&A", "Confirmed writes"],
      },
      {
        id: "ai-project-intel",
        slug: "project-intelligence",
        label: "Project Intelligence",
        description: "Surface project insights from live operating data.",
        tags: ["Insights", "Live data"],
      },
      {
        id: "ai-predictive",
        slug: "predictive-insights",
        label: "Predictive Insights",
        description: "Predictive intelligence layered on AI Assistant and project data.",
        tags: ["Predictive", "Risk signals"],
      },
      {
        id: "ai-documents",
        slug: "document-intelligence",
        label: "Document Intelligence",
        description: "Summarize and work with project documents through AI.",
        tags: ["Summaries", "Documents"],
      },
      {
        id: "ai-automation",
        slug: "automation",
        label: "Automation",
        description: "AI tool actions with logging and confirmation before execution.",
        tags: ["Tools", "Audit"],
      },
    ],
  },
  {
    id: "growth",
    number: "06",
    title: "Business Growth",
    description: "Connect your construction business with the tools you need to win work, engage customers, and grow.",
    preview: "connected",
    layout: "growth",
    workflowLabel: "Growth workflow",
    workflow: [
      { label: "Website Builder", slug: "website-builder" },
      { label: "Leads", slug: "leads" },
      { label: "CRM", slug: "crm" },
      { label: "Customer Portals", slug: "customer-portals" },
    ],
    areas: [
      {
        id: "bg-crm",
        slug: "crm",
        label: "CRM",
        description: "Preconstruction CRM and opportunity pipeline.",
        tags: ["Pipeline", "Opportunities"],
      },
      {
        id: "bg-leads",
        slug: "leads",
        label: "Leads",
        description: "Lead capture connected to growth and project delivery.",
        tags: ["Leads", "Capture"],
      },
      {
        id: "bg-website",
        slug: "website-builder",
        label: "Website Builder",
        description: "Tenant public website pages and custom domains.",
        tags: ["Website", "Domains"],
      },
      {
        id: "bg-portals",
        slug: "customer-portals",
        label: "Customer Portals",
        description: "Owner, sub, vendor, and architect portal access to scoped project information.",
        tags: ["Owner", "Sub", "Vendor", "Architect"],
      },
    ],
  },
];

export const featuresHubHero = {
  eyebrow: "Complete Feature Library",
  headline: "Everything your construction business needs to work smarter.",
  supporting:
    "Explore the connected capabilities behind Vertex CMS—from project management and financial control to field operations, workforce, AI, and business growth.",
  capabilityCount: FEATURE_LIBRARY.length,
  browse: [
    { label: "Search features", href: "#features-library" },
    { label: "Browse by Module", href: "#features-module-nav" },
    { label: "Browse by Role", href: "#features-roles" },
    { label: "Browse by AI", href: "#ai" },
    { label: "Browse by Plan", href: "#features-library" },
  ] as const,
};

export const featuresHubCta = {
  headline: "See the platform in action.",
  supporting:
    "Explore how Vertex CMS connects projects, people, finances, field operations, and growth in one platform.",
  primaryLabel: "View Features",
  primaryHref: "#features-library",
  secondaryLabel: "Book a Demo",
};
