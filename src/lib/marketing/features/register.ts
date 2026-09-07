/**
 * Public Features page data — derived from:
 * CMS_Master_Feature_Register.pdf v2.0 (2026-07-21)
 * CMS_BRD_v2.0.pdf (tenant stakeholders / AI rules)
 *
 * Taxonomy (Register §0.1):
 * - Module = navigation + entitlement unit
 * - Feature = capability inside a module
 * - Platform Service = cross-cutting capability (NOT a standalone module)
 *
 * Public Features page covers Tenant (Company) Side B modules only.
 * Super Admin (Side A) and Portal-only (Side C) modules are excluded from the module explorer.
 */

export type PlanTier = "starter" | "pro" | "premium" | "enterprise" | "addon";

export type ModuleGroupId =
  | "core"
  | "preconstruction-financials"
  | "native-accounting"
  | "procurement-compliance"
  | "scheduling-field"
  | "equipment-workforce-closeout";

export type PreviewKey =
  | "project"
  | "finance"
  | "field"
  | "workforce"
  | "ai"
  | "connected"
  | "estimate"
  | "safety"
  | "docs"
  | "schedule"
  | "accounting"
  | "procurement"
  | "collaboration"
  | "reports";

export type TenantModule = {
  code: string;
  id: string;
  name: string;
  group: ModuleGroupId;
  description: string;
  /** Plan availability from Register §0.5 / §0.2 */
  plans: PlanTier[];
  /** F* = basic on Free, full from Pro */
  basicOnStarter?: boolean;
  depends?: string[];
  features: string[];
  preview: PreviewKey;
  dark?: boolean;
};

export type PlatformService = {
  code: string;
  name: string;
  description: string;
  availability: "all" | "pro+" | "addon";
};

export type FeatureRecord = {
  id: string;
  /** Stable URL hash, e.g. project-setup */
  slug: string;
  name: string;
  moduleCode: string;
  moduleName: string;
  moduleDescription: string;
  description: string;
  plans: PlanTier[];
  basicOnStarter?: boolean;
  depends?: string[];
  /** Sibling capabilities in the same module */
  moduleCapabilities: string[];
  /** Only when documentation supports a relationship */
  roles?: string[];
  ai?: boolean;
};

export type AiCapability = {
  id: string;
  name: string;
  description: string;
  plans: PlanTier[];
};

export type RoleProfile = {
  id: string;
  label: string;
  /** BRD §3.2 primary needs */
  needs: string;
  /** BRD §3.2 pain addressed */
  pain: string;
  /** Relevant module codes — workflow relevance, not exclusive permissions */
  relevantModules: string[];
  preview: PreviewKey;
  dark?: boolean;
};

export const MODULE_GROUPS: { id: ModuleGroupId; label: string }[] = [
  { id: "core", label: "Core" },
  { id: "preconstruction-financials", label: "Preconstruction / Contracts / Financials" },
  { id: "native-accounting", label: "Native Accounting" },
  { id: "procurement-compliance", label: "Procurement / Subs / Compliance" },
  { id: "scheduling-field", label: "Scheduling / Field / Quality" },
  { id: "equipment-workforce-closeout", label: "Equipment / Workforce / Closeout / AI / Website" },
];

const S: PlanTier[] = ["starter", "pro", "premium", "enterprise"];
const P: PlanTier[] = ["pro", "premium", "enterprise"];
const Pr: PlanTier[] = ["premium", "enterprise"];
const E: PlanTier[] = ["enterprise"];
const A: PlanTier[] = ["addon", "premium", "enterprise"];

/** Tenant modules from Master Feature Register §0.2 */
export const TENANT_MODULES: TenantModule[] = [
  // Core (Free)
  {
    code: "PROJ",
    id: "projects",
    name: "Projects & Portfolio",
    group: "core",
    description: "Projects, phases, members, and portfolio visibility from one connected workspace.",
    plans: S,
    features: ["Project setup", "Portfolio", "Phases", "Members", "Project status lifecycle", "Financial summary"],
    preview: "project",
  },
  {
    code: "DIR",
    id: "directory",
    name: "Clients & Directory",
    group: "core",
    description: "Clients, contacts, and vendors in a shared company directory.",
    plans: S,
    features: ["Clients", "Client contacts", "Vendors", "Directory search"],
    preview: "project",
  },
  {
    code: "DOC",
    id: "documents",
    name: "Documents",
    group: "core",
    description: "Version-controlled document folders and files for the project record.",
    plans: S,
    features: ["Document folders", "Documents", "Document versions", "Current revision control"],
    preview: "docs",
  },
  {
    code: "PHOTO",
    id: "photos",
    name: "Photos",
    group: "core",
    description: "Project photo capture and organization tied to the project record.",
    plans: S,
    features: ["Photo capture", "Photo gallery", "Project photo record"],
    preview: "field",
  },
  {
    code: "LOG",
    id: "daily-logs",
    name: "Daily Field Logs",
    group: "core",
    description: "Daily field logs captured where work happens and synced to the project.",
    plans: S,
    features: ["Daily logs", "Weather & manpower entries", "Log attachments"],
    preview: "field",
  },
  {
    code: "RFI",
    id: "rfis",
    name: "RFIs",
    group: "core",
    description: "Request for Information workflows with status and response tracking.",
    plans: S,
    features: ["RFI create & track", "Status workflow", "Responses", "Open RFI visibility"],
    preview: "field",
  },
  {
    code: "PUNCH",
    id: "punch-lists",
    name: "Punch Lists",
    group: "core",
    description: "Punch lists and punch list items for closeout and quality completion.",
    plans: S,
    features: ["Punch lists", "Punch list items", "Status tracking"],
    preview: "field",
  },
  {
    code: "COMM",
    id: "communications",
    name: "Communications",
    group: "core",
    description: "Project conversations and messages inside the operating system.",
    plans: S,
    features: ["Conversations", "Messages", "Project communication threads"],
    preview: "collaboration",
  },
  {
    code: "CSI",
    id: "cost-codes",
    name: "CSI Cost Codes",
    group: "core",
    description: "Cost code divisions and codes used across estimating, budget, and field cost capture.",
    plans: S,
    features: ["Cost code divisions", "Cost codes", "CSI structure"],
    preview: "project",
  },
  {
    code: "SAFETY",
    id: "safety",
    name: "Safety (OSHA)",
    group: "core",
    description: "Safety incidents, inspections, toolbox talks, and JHA/JSA workflows.",
    plans: S,
    basicOnStarter: true,
    features: ["Safety incidents", "Inspections", "Toolbox talks", "JHA / JSA"],
    preview: "safety",
  },
  {
    code: "AI",
    id: "ai-assistant",
    name: "AI Assistant",
    group: "core",
    description: "Project Q&A and AI tools grounded in live data — with human confirmation before writes.",
    plans: S,
    basicOnStarter: true,
    features: ["AI conversations", "AI messages", "Tool calls", "Confirmed writes", "Permission-scoped answers"],
    preview: "ai",
    dark: true,
  },

  // Preconstruction / Contracts / Financials
  {
    code: "EST",
    id: "estimating",
    name: "Estimating",
    group: "preconstruction-financials",
    description: "Digital estimates with CSI cost structure, markup, and estimate→budget conversion.",
    plans: P,
    depends: ["CSI"],
    features: ["Estimates", "Estimate line items", "Overhead / profit / contingency", "Estimate→budget conversion"],
    preview: "estimate",
  },
  {
    code: "BID",
    id: "bid-management",
    name: "Bid Management",
    group: "preconstruction-financials",
    description: "Bid packages, invitations, subcontractor bids, leveling, and award.",
    plans: P,
    depends: ["EST", "SUB"],
    features: ["Bid packages", "Bid invitations", "Subcontractor bids", "Award workflow"],
    preview: "estimate",
  },
  {
    code: "TAKEOFF",
    id: "quantity-takeoff",
    name: "Quantity Takeoff",
    group: "preconstruction-financials",
    description: "Quantity takeoff connected to estimating workflows.",
    plans: A,
    depends: ["EST"],
    features: ["Takeoff quantities", "Estimate-linked takeoff"],
    preview: "estimate",
  },
  {
    code: "CRM",
    id: "precon-crm",
    name: "Precon CRM / Pipeline",
    group: "preconstruction-financials",
    description: "Opportunities and pipeline stages from lead through bidding and win/loss.",
    plans: Pr,
    features: ["Opportunities", "Pipeline stages", "Go/no-go scoring"],
    preview: "connected",
  },
  {
    code: "CONTR",
    id: "contracts",
    name: "Contracts",
    group: "preconstruction-financials",
    description: "Project contracts connected to financial and change workflows.",
    plans: P,
    depends: ["PROJ"],
    features: ["Contracts", "Contract amounts", "Project contract record"],
    preview: "finance",
    dark: true,
  },
  {
    code: "SOV",
    id: "schedule-of-values",
    name: "Schedule of Values (G703)",
    group: "preconstruction-financials",
    description: "Schedule of Values line items supporting pay application workflows.",
    plans: P,
    depends: ["CONTR"],
    features: ["SOV", "SOV line items", "G703 structure"],
    preview: "finance",
    dark: true,
  },
  {
    code: "CO",
    id: "change-orders",
    name: "Change Orders",
    group: "preconstruction-financials",
    description: "Change order requests and change orders tied to contracts.",
    plans: P,
    depends: ["CONTR"],
    features: ["Change order requests", "Change orders", "Contract revision impact"],
    preview: "finance",
    dark: true,
  },
  {
    code: "PAYAPP",
    id: "pay-applications",
    name: "Pay Applications (G702)",
    group: "preconstruction-financials",
    description: "AIA G702 pay applications and line items connected to SOV and lien workflows.",
    plans: P,
    depends: ["SOV", "LIEN"],
    features: ["Pay applications", "Pay application line items", "Certify pay app", "G702 workflow"],
    preview: "finance",
    dark: true,
  },
  {
    code: "INV",
    id: "invoices-ar",
    name: "Invoices & AR",
    group: "preconstruction-financials",
    description: "Invoices and payments for accounts receivable.",
    plans: P,
    features: ["Invoices", "Payments", "AR visibility"],
    preview: "finance",
    dark: true,
  },
  {
    code: "BUDGET",
    id: "budget-job-cost",
    name: "Budget & Job Cost",
    group: "preconstruction-financials",
    description: "Project budgets and budget line items tied to cost codes and project performance.",
    plans: P,
    depends: ["PROJ", "CSI"],
    features: ["Project budgets", "Budget line items", "Budget vs actual / job cost"],
    preview: "finance",
    dark: true,
  },
  {
    code: "CASH",
    id: "cash-flow-forecast",
    name: "Cash Flow Forecast",
    group: "preconstruction-financials",
    description: "Cash flow forecasting connected to invoices and payables.",
    plans: Pr,
    depends: ["INV", "AP"],
    features: ["Cash flow forecasts", "Forecast visibility"],
    preview: "finance",
    dark: true,
  },

  // Native Accounting
  {
    code: "GL",
    id: "general-ledger",
    name: "General Ledger",
    group: "native-accounting",
    description: "Native double-entry general ledger, journal entries, and accounting periods.",
    plans: P,
    features: ["GL accounts", "Journal entries", "Journal lines", "Accounting periods"],
    preview: "accounting",
    dark: true,
  },
  {
    code: "AP",
    id: "accounts-payable",
    name: "Accounts Payable",
    group: "native-accounting",
    description: "AP bills and bill lines connected to the native ledger.",
    plans: P,
    depends: ["GL"],
    features: ["AP bills", "AP bill lines", "Payable workflows"],
    preview: "accounting",
    dark: true,
  },
  {
    code: "BANK",
    id: "bank-reconciliation",
    name: "Bank Reconciliation",
    group: "native-accounting",
    description: "Bank accounts and reconciliations tied to the general ledger.",
    plans: P,
    depends: ["GL"],
    features: ["Bank accounts", "Bank reconciliations"],
    preview: "accounting",
    dark: true,
  },
  {
    code: "WIP",
    id: "wip-reporting",
    name: "WIP Reporting",
    group: "native-accounting",
    description: "Work-in-progress reporting snapshots connected to GL and budget.",
    plans: P,
    depends: ["GL", "BUDGET"],
    features: ["WIP snapshots", "WIP reporting"],
    preview: "accounting",
    dark: true,
  },
  {
    code: "TAX",
    id: "sales-use-tax",
    name: "Sales/Use Tax",
    group: "native-accounting",
    description: "Tax rules and exemptions for invoice workflows.",
    plans: P,
    depends: ["INV"],
    features: ["Tax rules", "Tax exemptions"],
    preview: "accounting",
    dark: true,
  },
  {
    code: "EXP",
    id: "expense-management",
    name: "Expense Management",
    group: "native-accounting",
    description: "Expense management connected to the native ledger.",
    plans: P,
    depends: ["GL"],
    features: ["Expenses", "Expense workflows"],
    preview: "accounting",
    dark: true,
  },

  // Procurement / Subs / Compliance
  {
    code: "PO",
    id: "purchase-orders",
    name: "Purchase Orders",
    group: "procurement-compliance",
    description: "Purchase orders, line items, and receipts against project cost structure.",
    plans: P,
    depends: ["DIR"],
    features: ["Purchase orders", "PO line items", "Receipts"],
    preview: "procurement",
  },
  {
    code: "INVENTORY",
    id: "inventory-tools",
    name: "Inventory & Tools",
    group: "procurement-compliance",
    description: "Inventory items, transactions, and tool checkouts.",
    plans: A,
    features: ["Inventory items", "Inventory transactions", "Tool checkouts"],
    preview: "procurement",
  },
  {
    code: "SUB",
    id: "subcontractor-management",
    name: "Subcontractor Management",
    group: "procurement-compliance",
    description: "Subcontractor records and insurance tracking.",
    plans: P,
    features: ["Subcontractors", "Sub insurance records"],
    preview: "workforce",
  },
  {
    code: "LIEN",
    id: "lien-waivers",
    name: "Lien Waivers & Notices",
    group: "procurement-compliance",
    description: "Lien waivers and preliminary notices connected to subcontractor workflows.",
    plans: P,
    depends: ["SUB"],
    features: ["Lien waivers", "Preliminary notices"],
    preview: "workforce",
  },
  {
    code: "DISB",
    id: "payment-disbursement",
    name: "Payment Disbursement",
    group: "procurement-compliance",
    description: "Payment disbursements connected to AP and lien requirements.",
    plans: P,
    depends: ["AP", "LIEN"],
    features: ["Disbursements", "Disbursement lines"],
    preview: "finance",
    dark: true,
  },
  {
    code: "BOND",
    id: "surety-bonds",
    name: "Surety Bonds",
    group: "procurement-compliance",
    description: "Surety bond tracking for enterprise compliance workflows.",
    plans: ["addon", "enterprise"],
    features: ["Bonds", "Bond tracking"],
    preview: "workforce",
  },
  {
    code: "INS",
    id: "insurance-coi",
    name: "Insurance/COI Compliance",
    group: "procurement-compliance",
    description: "Subcontractor insurance and wrap insurance compliance tracking.",
    plans: P,
    depends: ["SUB"],
    features: ["Sub insurance", "Wrap insurance", "COI compliance"],
    preview: "safety",
  },
  {
    code: "COMPLY",
    id: "compliance-suite",
    name: "Compliance Suite",
    group: "procurement-compliance",
    description: "Compliance radar, calendar, and DBE participation workflows.",
    plans: Pr,
    depends: ["LIEN", "INS"],
    features: ["Compliance radar", "Compliance calendar", "DBE participation"],
    preview: "safety",
  },

  // Scheduling / Field / Quality
  {
    code: "SCHED",
    id: "scheduling",
    name: "Scheduling (CPM + look-ahead)",
    group: "scheduling-field",
    description: "CPM schedules, look-ahead plans, tasks, and dependencies.",
    plans: P,
    depends: ["PROJ"],
    features: ["Schedules", "Schedule tasks", "Task dependencies", "Look-ahead", "Critical path"],
    preview: "schedule",
  },
  {
    code: "SUBM",
    id: "submittals",
    name: "Submittals",
    group: "scheduling-field",
    description: "Submittal workflows connected to the project record.",
    plans: P,
    depends: ["PROJ"],
    features: ["Submittals", "Submittal status workflow"],
    preview: "docs",
  },
  {
    code: "SPEC",
    id: "specifications",
    name: "Specifications",
    group: "scheduling-field",
    description: "Specifications connected to submittal workflows.",
    plans: P,
    depends: ["SUBM"],
    features: ["Specifications", "Spec-linked submittals"],
    preview: "docs",
  },
  {
    code: "TRANS",
    id: "transmittals",
    name: "Transmittals",
    group: "scheduling-field",
    description: "Transmittals and transmittal items for controlled document exchange.",
    plans: P,
    depends: ["DOC"],
    features: ["Transmittals", "Transmittal items"],
    preview: "docs",
  },
  {
    code: "TM",
    id: "tm-field-tickets",
    name: "T&M / Field Tickets",
    group: "scheduling-field",
    description: "Time & material field tickets and line items.",
    plans: P,
    depends: ["PROJ"],
    features: ["T&M tickets", "T&M ticket lines"],
    preview: "field",
  },
  {
    code: "OBS",
    id: "quality-observations",
    name: "Quality / QA-QC & Observations",
    group: "scheduling-field",
    description: "Quality observations and QA/QC workflows separate from safety.",
    plans: Pr,
    depends: ["PROJ"],
    features: ["Observations", "QA/QC checklists"],
    preview: "field",
  },
  {
    code: "DWG",
    id: "drawings-markup",
    name: "Drawings & Markup",
    group: "scheduling-field",
    description: "Drawings and markup so the field works from the current set.",
    plans: P,
    depends: ["DOC"],
    features: ["Drawings", "Drawing markups", "Current revision for field"],
    preview: "docs",
  },
  {
    code: "BIM",
    id: "bim-viewer",
    name: "BIM Model Viewer",
    group: "scheduling-field",
    description: "BIM model viewing connected to drawing workflows.",
    plans: ["addon", "enterprise"],
    depends: ["DWG"],
    features: ["BIM model viewer"],
    preview: "docs",
  },

  // Equipment / Workforce / Closeout / AI / Website
  {
    code: "EQUIP",
    id: "equipment",
    name: "Equipment",
    group: "equipment-workforce-closeout",
    description: "Equipment records and usage tracking.",
    plans: P,
    features: ["Equipment", "Equipment usage"],
    preview: "workforce",
  },
  {
    code: "TIME",
    id: "workforce-timesheets",
    name: "Workforce & Timesheets",
    group: "equipment-workforce-closeout",
    description: "Workers, timesheets, and timesheet entries alongside project activity.",
    plans: P,
    depends: ["PROJ", "CSI"],
    features: ["Workers", "Timesheets", "Timesheet entries"],
    preview: "workforce",
  },
  {
    code: "PAYROLL",
    id: "payroll",
    name: "Payroll & Certified Payroll",
    group: "equipment-workforce-closeout",
    description: "Payroll runs, entries, and certified payroll reporting.",
    plans: ["addon", "enterprise"],
    depends: ["TIME"],
    features: ["Payroll runs", "Payroll entries", "Certified payroll reports"],
    preview: "workforce",
  },
  {
    code: "PERMIT",
    id: "permits",
    name: "Permits",
    group: "equipment-workforce-closeout",
    description: "Permits and permit inspections connected to projects.",
    plans: P,
    depends: ["PROJ"],
    features: ["Permits", "Permit inspections"],
    preview: "project",
  },
  {
    code: "MEET",
    id: "meetings",
    name: "Meetings",
    group: "equipment-workforce-closeout",
    description: "Meetings, attendees, and action items with closeout tracking.",
    plans: P,
    depends: ["PROJ"],
    features: ["Meetings", "Attendees", "Action items"],
    preview: "collaboration",
  },
  {
    code: "WARR",
    id: "warranties-closeout",
    name: "Warranties & Closeout",
    group: "equipment-workforce-closeout",
    description: "Warranties, closeout checklists, and substantial completion workflows.",
    plans: P,
    depends: ["PROJ"],
    features: ["Warranties", "Project closeouts", "Substantial completion (G704)", "Closeout checklists"],
    preview: "collaboration",
  },
  {
    code: "REPORT",
    id: "reports-analytics",
    name: "Reports & Analytics",
    group: "equipment-workforce-closeout",
    description: "Report definitions, filters, columns, and scheduled reporting.",
    plans: P,
    features: ["Report definitions", "Filters & columns", "Scheduled reports"],
    preview: "reports",
  },
  {
    code: "AI_INTEL",
    id: "ai-intelligence",
    name: "AI Intelligence (predictive)",
    group: "equipment-workforce-closeout",
    description: "Predictive intelligence layered on AI Assistant and live project data.",
    plans: Pr,
    depends: ["AI"],
    features: ["Predictive insights", "Risk signals from live data", "Portfolio intelligence"],
    preview: "ai",
    dark: true,
  },
  {
    code: "WEBSITE",
    id: "website-builder",
    name: "Website Builder",
    group: "equipment-workforce-closeout",
    description: "Tenant public website pages and custom domains connected to CMS data.",
    plans: A,
    features: ["Websites", "Website pages", "Custom domains"],
    preview: "connected",
  },
  {
    code: "ENTITY",
    id: "multi-entity",
    name: "Multi-Entity / Divisions",
    group: "equipment-workforce-closeout",
    description: "Legal entities and divisions for multi-entity tenants.",
    plans: E,
    features: ["Entities", "Parent/child entity structure"],
    preview: "project",
  },
];

/** Platform services — Register §0.3 — NOT standalone modules */
export const PLATFORM_SERVICES: PlatformService[] = [
  { code: "RBAC", name: "Users, Roles & Permissions", description: "Users, roles, permissions, and scoped access across the tenant.", availability: "all" },
  { code: "SEARCH", name: "Global Search", description: "Cmd-K search across projects, RFIs, subs, docs, and contacts — permission and tenant scoped.", availability: "all" },
  { code: "NOTIFY", name: "Notifications & Alerts", description: "Event-driven notifications across in-app, email, SMS, and push with user preferences.", availability: "all" },
  { code: "TASKS", name: "Tasks & To-Do", description: "Cross-module tasks and to-do tracking.", availability: "all" },
  { code: "CALENDAR", name: "Unified Calendar", description: "Aggregated calendar across modules.", availability: "all" },
  { code: "ACTIVITY", name: "Activity Feed & Comments", description: "Comments and activity across project records.", availability: "all" },
  { code: "AUDIT", name: "Audit Log", description: "Immutable activity logging across the platform.", availability: "all" },
  { code: "IMPORT", name: "Data Import & Bulk Ops", description: "Import jobs and bulk operations.", availability: "all" },
  { code: "CUSTOMFIELDS", name: "Custom Fields & Forms", description: "Custom fields rendered on forms, exports, and search.", availability: "pro+" },
  { code: "APPROVALS", name: "Approval Workflow Engine", description: "Configurable approval workflows, steps, and instances.", availability: "pro+" },
  { code: "TEMPLATES", name: "Templates Library", description: "Document and workflow templates.", availability: "pro+" },
  { code: "ESIGN", name: "E-Signature", description: "E-signature requests for documents and approvals.", availability: "addon" },
];

/** Enterprise entitlements listed in §0.5 that are not separate §0.2 sellable modules */
export const ENTERPRISE_CAPABILITIES = [
  { code: "SSO_SCIM", name: "SSO / SCIM", description: "Enterprise identity entry (SSO/SAML) where enabled for the tenant." },
  { code: "PUBLIC_API", name: "Public API", description: "Public API access for enterprise integrations." },
] as const;

export const AI_CAPABILITIES: AiCapability[] = [
  {
    id: "ai-assistant",
    name: "AI Assistant",
    description: "Ask project questions and use AI tools grounded in live project data. Write actions require human confirmation.",
    plans: S,
  },
  {
    id: "ai-intelligence",
    name: "AI Intelligence (predictive)",
    description: "Predictive intelligence using existing project data — layered on AI Assistant.",
    plans: Pr,
  },
  {
    id: "confirmed-writes",
    name: "Confirmed Writes",
    description: "AI write actions show a plain-English summary and require explicit confirmation before execution. AI cannot delete records.",
    plans: S,
  },
  {
    id: "tool-logging",
    name: "AI Tool Logging",
    description: "Every AI tool call is logged for accountability.",
    plans: S,
  },
  {
    id: "permission-scope",
    name: "Permission-Scoped AI",
    description: "AI reads only within the user's permission scope.",
    plans: S,
  },
];

/** BRD §3.2 documented roles required on the Features page */
export const FEATURE_ROLES: RoleProfile[] = [
  {
    id: "project-manager",
    label: "Project Manager",
    needs: "Unified dashboard, automated reporting, RFI/submittal status",
    pain: "4+ hrs/week manual reporting",
    relevantModules: ["PROJ", "RFI", "SUBM", "DOC", "SCHED", "PUNCH", "REPORT", "AI"],
    preview: "project",
  },
  {
    id: "estimator",
    label: "Estimator",
    needs: "Digital estimates, bid management, estimate→budget",
    pain: "Excel estimates disconnected",
    relevantModules: ["EST", "BID", "TAKEOFF", "CRM", "CSI", "BUDGET"],
    preview: "estimate",
  },
  {
    id: "superintendent",
    label: "Superintendent",
    needs: "Mobile daily logs, drawing access, safety forms",
    pain: "Paper logs, calling office for drawings",
    relevantModules: ["LOG", "DWG", "PHOTO", "SAFETY", "TM", "PUNCH", "SCHED"],
    preview: "field",
  },
  {
    id: "accountant",
    label: "Accountant",
    needs: "Native GL, AP/AR, pay apps, WIP, 1099",
    pain: "Manual AIA, double entry, AR unknown until month-end",
    relevantModules: ["GL", "AP", "INV", "PAYAPP", "WIP", "BUDGET", "BANK", "TAX", "EXP"],
    preview: "accounting",
    dark: true,
  },
];

export const WORKFLOW_MAP = [
  { label: "Project", detail: "Projects & Portfolio", codes: ["PROJ"] },
  { label: "Documents", detail: "Documents · Drawings", codes: ["DOC", "DWG"] },
  { label: "Field", detail: "Logs · RFIs · Punch", codes: ["LOG", "RFI", "PUNCH"] },
  { label: "Financials", detail: "Budget · Pay Apps · GL", codes: ["BUDGET", "PAYAPP", "GL"] },
  { label: "AI", detail: "Assistant · Intelligence", codes: ["AI", "AI_INTEL"] },
  { label: "Reporting", detail: "Reports & Analytics", codes: ["REPORT"] },
] as const;

/** Build flat feature library from modules — single source for search */
export function featureSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildFeatureLibrary(modules: TenantModule[] = TENANT_MODULES): FeatureRecord[] {
  return modules.flatMap((mod) =>
    mod.features.map((name, index) => ({
      id: `${mod.code}-${index}`,
      slug: featureSlug(name),
      name,
      moduleCode: mod.code,
      moduleName: mod.name,
      moduleDescription: mod.description,
      description: `${name} within ${mod.name}.`,
      plans: mod.plans,
      basicOnStarter: mod.basicOnStarter,
      depends: mod.depends,
      moduleCapabilities: mod.features,
      roles: FEATURE_ROLES.filter((r) => r.relevantModules.includes(mod.code)).map((r) => r.id),
      ai: mod.code === "AI" || mod.code === "AI_INTEL",
    }))
  );
}

export const FEATURE_LIBRARY = buildFeatureLibrary();

export function getFeatureBySlug(slug: string): FeatureRecord | undefined {
  const normalized = slug.replace(/^#/, "").toLowerCase();
  return FEATURE_LIBRARY.find((f) => f.slug === normalized);
}

export const CURATED_FEATURE_IDS = [
  "PROJ-0",
  "DOC-0",
  "RFI-0",
  "PAYAPP-0",
  "GL-0",
  "BUDGET-0",
  "SCHED-0",
  "LOG-0",
  "EST-0",
  "AI-0",
  "AI_INTEL-0",
  "SAFETY-0",
];

export function planLabel(plans: PlanTier[], basicOnStarter?: boolean): string {
  if (plans.includes("addon") && !plans.includes("starter") && !plans.includes("pro")) {
    if (plans.includes("enterprise") && plans.includes("premium")) return "Add-on / Premium+";
    if (plans.includes("enterprise")) return "Add-on / Enterprise";
    return "Add-on";
  }
  if (basicOnStarter) return "Starter (basic) · full from Pro";
  if (plans.includes("starter")) return "Starter+";
  if (plans[0] === "pro") return "Pro+";
  if (plans[0] === "premium") return "Premium+";
  if (plans[0] === "enterprise") return "Enterprise";
  return plans[0] ?? "";
}

export function getModuleById(id: string): TenantModule | undefined {
  return TENANT_MODULES.find((m) => m.id === id);
}

export function getModulesByGroup(group: ModuleGroupId): TenantModule[] {
  return TENANT_MODULES.filter((m) => m.group === group);
}
