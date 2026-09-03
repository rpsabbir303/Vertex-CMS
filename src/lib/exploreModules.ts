import type { ReactNode } from "react";

export type ModuleGroup =
  | "plan"
  | "control"
  | "build"
  | "protect"
  | "connect"
  | "intelligence";

export type ExploreModule = {
  id: string;
  number: string;
  title: string;
  group: ModuleGroup;
  href: string;
  description: string;
  capabilities: string[];
  previewStats?: { label: string; value: string }[];
  previewType:
    | "project"
    | "estimate"
    | "finance"
    | "accounting"
    | "field"
    | "schedule"
    | "safety"
    | "procurement"
    | "docs"
    | "workforce"
    | "ai"
    | "reports"
    | "collaboration"
    | "connected";
};

export const GROUPS: { id: ModuleGroup; label: string }[] = [
  { id: "plan", label: "Plan" },
  { id: "control", label: "Control" },
  { id: "build", label: "Build" },
  { id: "protect", label: "Protect" },
  { id: "connect", label: "Connect" },
  { id: "intelligence", label: "Intelligence" },
];

export const EXPLORE_MODULES: ExploreModule[] = [
  {
    id: "project-management",
    number: "01",
    title: "Project Management",
    group: "plan",
    href: "/features/project-management",
    description:
      "Manage projects, teams, tasks and project visibility from one connected workspace.",
    capabilities: ["Projects", "Clients & Directory", "Project Dashboard", "Tasks", "Cost Codes"],
    previewStats: [
      { label: "Active Projects", value: "18" },
      { label: "Schedule Health", value: "92%" },
      { label: "Contract Value", value: "$24.8M" },
    ],
    previewType: "project",
  },
  {
    id: "preconstruction",
    number: "02",
    title: "Preconstruction",
    group: "plan",
    href: "/features/preconstruction",
    description:
      "Move from estimate to bid packages, leveling and award with CSI cost structure and margin visibility.",
    capabilities: ["Estimating", "Bid Management", "Quantity Takeoff", "Bid Leveling", "Precon CRM"],
    previewStats: [
      { label: "Estimate", value: "$2.48M" },
      { label: "Margin", value: "11.2%" },
      { label: "Bid Packages", value: "6" },
    ],
    previewType: "estimate",
  },
  {
    id: "contracts-financials",
    number: "03",
    title: "Contracts & Financials",
    group: "control",
    href: "/features/contracts-financials",
    description:
      "Control contracts, change orders, pay applications, budgets and job costs in one connected workflow.",
    capabilities: [
      "Contracts",
      "Schedule of Values",
      "Change Orders",
      "Pay Applications",
      "Budget & Job Cost",
    ],
    previewStats: [
      { label: "Contract", value: "$4.82M" },
      { label: "Approved COs", value: "+$320K" },
      { label: "Billed", value: "$3.21M" },
    ],
    previewType: "finance",
  },
  {
    id: "construction-accounting",
    number: "04",
    title: "Construction Accounting",
    group: "control",
    href: "/features/construction-accounting",
    description:
      "Native double-entry General Ledger, AP/AR, WIP and cash visibility tied to project activity.",
    capabilities: ["General Ledger", "Accounts Payable", "Accounts Receivable", "WIP", "Cash Flow"],
    previewStats: [
      { label: "GL Posts", value: "Balanced" },
      { label: "AP Open", value: "Tracked" },
      { label: "WIP", value: "Live" },
    ],
    previewType: "accounting",
  },
  {
    id: "field-operations",
    number: "05",
    title: "Field Operations",
    group: "build",
    href: "/features/field-operations",
    description:
      "Capture daily logs, photos, RFIs and punch where work happens — then sync to the project record.",
    capabilities: ["Daily Logs", "RFIs", "Punch Lists", "Photos", "T&M / Field Tickets"],
    previewStats: [
      { label: "Crew", value: "18" },
      { label: "Photos", value: "12" },
      { label: "Weather", value: "82°F" },
    ],
    previewType: "field",
  },
  {
    id: "scheduling-project-controls",
    number: "06",
    title: "Scheduling & Project Controls",
    group: "plan",
    href: "/features/scheduling-project-controls",
    description:
      "See CPM schedules, look-ahead plans and critical-path risk before delays compound.",
    capabilities: ["CPM Scheduling", "Look-Ahead", "Critical Path", "Schedule Risk", "Gantt"],
    previewStats: [
      { label: "Critical Path", value: "Active" },
      { label: "Variance", value: "-3d" },
      { label: "Look-Ahead", value: "2 wk" },
    ],
    previewType: "schedule",
  },
  {
    id: "safety-compliance",
    number: "07",
    title: "Safety & Compliance",
    group: "protect",
    href: "/features/safety-compliance",
    description:
      "Keep safety, inspections, COI and lien indicators visible throughout every project.",
    capabilities: [
      "Safety Incidents",
      "Inspections",
      "Toolbox Talks",
      "JHA / JSA",
      "Insurance / COI",
    ],
    previewStats: [
      { label: "Safety Score", value: "92%" },
      { label: "Incidents", value: "2" },
      { label: "COI Expiring", value: "3" },
    ],
    previewType: "safety",
  },
  {
    id: "procurement-resources",
    number: "08",
    title: "Procurement & Resources",
    group: "build",
    href: "/features/procurement-resources",
    description:
      "Manage purchase orders, receipts and material flow against project cost codes.",
    capabilities: ["Purchase Orders", "Receipts", "Vendors", "Disbursements", "Inventory"],
    previewStats: [
      { label: "Open POs", value: "14" },
      { label: "Receipts", value: "Due" },
      { label: "Vendors", value: "Active" },
    ],
    previewType: "procurement",
  },
  {
    id: "documents-project-information",
    number: "09",
    title: "Documents & Project Information",
    group: "protect",
    href: "/features/documents-project-information",
    description:
      "Version-controlled drawings, specs and project files — so the field works from the current set.",
    capabilities: ["Documents", "Drawings & Markup", "Specifications", "Submittals", "Transmittals"],
    previewStats: [
      { label: "Current Rev", value: "05" },
      { label: "Drawings", value: "Live" },
      { label: "Search", value: "Indexed" },
    ],
    previewType: "docs",
  },
  {
    id: "workforce-equipment",
    number: "10",
    title: "Workforce & Equipment",
    group: "build",
    href: "/features/workforce-equipment",
    description:
      "Track crew hours, timesheets and equipment utilization alongside project activity.",
    capabilities: ["Workforce", "Timesheets", "Equipment", "Geofenced Clock", "Crew Hours"],
    previewStats: [
      { label: "Crew", value: "48" },
      { label: "Clocked In", value: "42" },
      { label: "Utilization", value: "87%" },
    ],
    previewType: "workforce",
  },
  {
    id: "ai-intelligence",
    number: "11",
    title: "AI & Intelligence",
    group: "intelligence",
    href: "/features/ai-intelligence",
    description:
      "Ask project questions, process documents and surface risk — with human confirmation before writes.",
    capabilities: [
      "AI Assistant",
      "Project Analyst",
      "Document Intelligence",
      "Proactive Risk Alerts",
      "Confirmed Writes",
    ],
    previewStats: [
      { label: "Risk Areas", value: "3" },
      { label: "Overdue RFIs", value: "4" },
      { label: "Writes", value: "Confirmed" },
    ],
    previewType: "ai",
  },
  {
    id: "reports-analytics",
    number: "12",
    title: "Reports & Analytics",
    group: "control",
    href: "/features/reports-analytics",
    description:
      "Portfolio health, budget, schedule, safety and risk ranking without spreadsheet assembly.",
    capabilities: [
      "Portfolio Command Center",
      "Custom Reports",
      "Budget Analytics",
      "Schedule Analytics",
      "Risk Ranking",
    ],
    previewStats: [
      { label: "Portfolio", value: "Strong" },
      { label: "At Risk", value: "1" },
      { label: "Cash", value: "Stable" },
    ],
    previewType: "reports",
  },
  {
    id: "collaboration-closeout",
    number: "13",
    title: "Collaboration & Closeout",
    group: "connect",
    href: "/features/collaboration-closeout",
    description:
      "Keep project communication, meetings, warranties and closeout checklists in the same system.",
    capabilities: ["Communications", "Meetings", "Warranties", "Closeout", "Punch"],
    previewStats: [
      { label: "Meetings", value: "Logged" },
      { label: "Closeout", value: "Checklist" },
      { label: "Warranties", value: "Tracked" },
    ],
    previewType: "collaboration",
  },
  {
    id: "connected-experience",
    number: "14",
    title: "Connected Experience",
    group: "connect",
    href: "/features/connected-experience",
    description:
      "Owner, sub, vendor and architect portals — plus a field-first offline-capable mobile app.",
    capabilities: ["Owner Portal", "Subcontractor Portal", "Vendor Portal", "Architect Portal", "Mobile App"],
    previewStats: [
      { label: "Portals", value: "4" },
      { label: "Mobile", value: "Offline" },
      { label: "Sync", value: "Queued" },
    ],
    previewType: "connected",
  },
];

export const WORKFLOW_STAGES: {
  id: string;
  title: string;
  moduleIds: string[];
}[] = [
  { id: "precon", title: "Preconstruction", moduleIds: ["preconstruction"] },
  { id: "planning", title: "Project Planning", moduleIds: ["project-management", "scheduling-project-controls"] },
  { id: "contract", title: "Contract", moduleIds: ["contracts-financials"] },
  { id: "financial", title: "Financial Control", moduleIds: ["contracts-financials", "construction-accounting"] },
  { id: "field", title: "Field Execution", moduleIds: ["field-operations", "procurement-resources", "workforce-equipment"] },
  { id: "safety", title: "Safety & Compliance", moduleIds: ["safety-compliance"] },
  { id: "docs", title: "Documentation", moduleIds: ["documents-project-information"] },
  { id: "reporting", title: "Reporting", moduleIds: ["reports-analytics", "ai-intelligence"] },
  { id: "closeout", title: "Closeout", moduleIds: ["collaboration-closeout", "connected-experience"] },
];

export type PreviewRenderMap = Record<ExploreModule["previewType"], ReactNode>;
