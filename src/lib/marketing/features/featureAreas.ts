/**
 * Major feature areas exposed as detail pages (/features/[slug]).
 * Content is derived from the Master Feature Register — not inventing capabilities.
 */

import { ROUTES } from "@/lib/marketing/navigation";
import {
  TENANT_MODULES,
  type PreviewKey,
  type TenantModule,
} from "./register";
import { HUB_MODULES, type HubFeatureArea, type HubModuleSection } from "./hub";

export type FeatureAreaDetail = {
  slug: string;
  areaId: string;
  label: string;
  moduleSectionId: string;
  moduleTitle: string;
  description: string;
  heroTagline: string;
  preview: PreviewKey;
  dark?: boolean;
  /** Key capabilities — from register module features / documented AI caps */
  capabilities: string[];
  howItWorks: string[];
  outcomes: string[];
  relatedSlugs: string[];
  /** Register module codes used to deep-link from Feature Library rows */
  moduleCodes: string[];
};

function mod(code: string): TenantModule | undefined {
  return TENANT_MODULES.find((m) => m.code === code);
}

function caps(...codes: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const code of codes) {
    const m = mod(code);
    if (!m) continue;
    for (const f of m.features) {
      if (!seen.has(f)) {
        seen.add(f);
        out.push(f);
      }
    }
  }
  return out;
}

type AreaSeed = {
  slug: string;
  areaId: string;
  heroTagline: string;
  preview: PreviewKey;
  dark?: boolean;
  moduleCodes: string[];
  capabilities?: string[];
  howItWorks: string[];
  outcomes: string[];
  relatedSlugs: string[];
  /** When the area is not part of HUB_MODULES (category-page-only capabilities) */
  categoryMeta?: {
    sectionId: string;
    sectionTitle: string;
    label: string;
    description: string;
  };
};

const AREA_SEEDS: AreaSeed[] = [
  // Project Management
  {
    slug: "projects",
    areaId: "pm-projects",
    heroTagline: "Manage projects, phases, and portfolio visibility from one workspace.",
    preview: "project",
    moduleCodes: ["PROJ"],
    howItWorks: [
      "Set up projects with phases and members.",
      "Track status lifecycle across the portfolio.",
      "Keep financial summary visibility tied to the project record.",
    ],
    outcomes: [
      "One connected project workspace instead of scattered trackers.",
      "Clear portfolio visibility for active work.",
      "Members and phases stay aligned to the same project record.",
    ],
    relatedSlugs: ["scheduling", "documents", "rfis", "submittals", "change-orders"],
  },
  // Preconstruction (category-page capabilities — register EST / BID / TAKEOFF)
  {
    slug: "estimating",
    areaId: "pc-estimating",
    heroTagline: "Build versioned estimates with cost structure, markup, and estimate-to-budget conversion.",
    preview: "estimating",
    moduleCodes: ["EST"],
    howItWorks: [
      "Create versioned estimates with line items and cost codes.",
      "Calculate subtotal, overhead, profit, contingency, tax, and total.",
      "Convert approved estimate values into project budget and SOV workflows.",
    ],
    outcomes: [
      "Estimate history stays intact across versions.",
      "Pricing structure stays connected to CSI cost codes.",
      "Approved estimates can feed project budget and Schedule of Values.",
    ],
    relatedSlugs: ["bid-management", "quantity-takeoff", "crm", "budget-job-cost"],
    categoryMeta: {
      sectionId: "preconstruction",
      sectionTitle: "Preconstruction",
      label: "Estimating",
      description:
        "Digital estimates with CSI cost structure, markup, and estimate→budget conversion.",
    },
  },
  {
    slug: "bid-management",
    areaId: "pc-bid-management",
    heroTagline: "Create bid packages, compare subcontractor bids, and award with clear visibility.",
    preview: "bid",
    moduleCodes: ["BID"],
    howItWorks: [
      "Create bid packages and invite subcontractors from approved lists.",
      "Track bid responses and submission status against due dates.",
      "Compare submitted bids side by side before awarding.",
    ],
    outcomes: [
      "Bid packages stay organized by trade.",
      "Submission status is visible without chasing email threads.",
      "Award decisions are grounded in a consistent comparison view.",
    ],
    relatedSlugs: ["estimating", "quantity-takeoff", "crm", "subcontractors"],
    categoryMeta: {
      sectionId: "preconstruction",
      sectionTitle: "Preconstruction",
      label: "Bid Management",
      description:
        "Bid packages, invitations, subcontractor bids, leveling, and award.",
    },
  },
  {
    slug: "quantity-takeoff",
    areaId: "pc-quantity-takeoff",
    heroTagline: "Measure project quantities from digital plans to support estimating decisions.",
    preview: "takeoff",
    moduleCodes: ["TAKEOFF"],
    howItWorks: [
      "Measure quantities from digital plan takeoff workflows.",
      "Keep takeoff totals connected to estimating context.",
      "Support informed pricing decisions with measurable quantities.",
    ],
    outcomes: [
      "Quantities are easier to review against plan context.",
      "Takeoff stays linked to estimating workflows.",
      "Estimators work from measured project quantities.",
    ],
    relatedSlugs: ["estimating", "bid-management", "documents", "drawings"],
    categoryMeta: {
      sectionId: "preconstruction",
      sectionTitle: "Preconstruction",
      label: "Quantity Takeoff",
      description: "Quantity takeoff connected to estimating workflows.",
    },
  },
  {
    slug: "scheduling",
    areaId: "pm-scheduling",
    heroTagline: "Keep CPM schedules and look-ahead plans tied to project delivery.",
    preview: "scheduleGantt",
    moduleCodes: ["SCHED"],
    howItWorks: [
      "Build CPM schedules with tasks, dates, and dependencies.",
      "Track current progress against the approved baseline.",
      "Generate 3-week look-ahead and surface schedule risk signals.",
    ],
    outcomes: [
      "Schedules stay connected to the project workspace.",
      "Look-ahead work is grounded in the same CPM plan.",
      "Critical path and variance stay visible as work progresses.",
    ],
    relatedSlugs: ["projects", "daily-logs", "punch", "documents"],
  },
  {
    slug: "documents",
    areaId: "pm-documents",
    heroTagline: "Keep teams working from the current document set.",
    preview: "documentCenter",
    moduleCodes: ["DOC"],
    howItWorks: [
      "Organize project files in document folders.",
      "Track document versions on the project record.",
      "Control the current revision teams use in the field and office.",
    ],
    outcomes: [
      "Fewer outdated files circulating between teams.",
      "Version history stays with the project.",
      "Field and office reference the same current set.",
    ],
    relatedSlugs: ["projects", "drawings", "rfis", "submittals"],
  },
  {
    slug: "rfis",
    areaId: "pm-rfis",
    heroTagline: "Keep every request, response, and decision connected.",
    preview: "rfi",
    moduleCodes: ["RFI"],
    howItWorks: [
      "Create and track RFIs on the project.",
      "Move items through status workflows.",
      "Capture responses and keep open RFI visibility.",
    ],
    outcomes: [
      "RFI status is visible without chasing email threads.",
      "Responses stay attached to the project record.",
      "Open RFIs are easier to prioritize and close.",
    ],
    relatedSlugs: ["projects", "documents", "submittals", "change-orders"],
  },
  {
    slug: "submittals",
    areaId: "pm-submittals",
    heroTagline: "Connect submittal review to the project record.",
    preview: "submittal",
    moduleCodes: ["SUBM"],
    howItWorks: [
      "Create submittals against the project.",
      "Track submittal status through review.",
      "Keep submittal history with project documentation.",
    ],
    outcomes: [
      "Submittal status stays visible to the team.",
      "Review history remains part of the project record.",
      "Documentation workflows stay connected.",
    ],
    relatedSlugs: ["projects", "documents", "rfis", "change-orders"],
  },
  {
    slug: "change-orders",
    areaId: "pm-change-orders",
    heroTagline: "Tie change requests and orders to contracts and cost impact.",
    preview: "changeOrder",
    dark: true,
    moduleCodes: ["CO"],
    howItWorks: [
      "Capture change order requests on the project.",
      "Convert approved changes into change orders.",
      "Reflect contract revision impact in financial workflows.",
    ],
    outcomes: [
      "Change history stays connected to contracts.",
      "Cost impact is visible alongside project delivery.",
      "Fewer disconnected spreadsheet change logs.",
    ],
    relatedSlugs: ["projects", "budget-job-cost", "aia-pay-applications", "rfis"],
  },

  // Financial Management
  {
    slug: "budget-job-cost",
    areaId: "fm-budget",
    heroTagline: "Connect project budgets and job cost to cost codes and performance.",
    preview: "finance",
    dark: true,
    moduleCodes: ["BUDGET"],
    howItWorks: [
      "Build project budgets and budget line items.",
      "Tie lines to cost codes used across the platform.",
      "Compare budget vs actual for job cost visibility.",
    ],
    outcomes: [
      "Budget and job cost stay on the same project record.",
      "Cost codes connect estimating, field, and financials.",
      "Performance visibility without disconnected cost trackers.",
    ],
    relatedSlugs: ["native-accounting", "billing", "wip", "cash-flow"],
  },
  {
    slug: "native-accounting",
    areaId: "fm-accounting",
    heroTagline: "Run GL, AP, and accounting periods inside the construction platform.",
    preview: "accounting",
    dark: true,
    moduleCodes: ["GL", "AP", "BANK"],
    howItWorks: [
      "Maintain a native double-entry general ledger.",
      "Post AP bills and bill lines to the ledger.",
      "Reconcile bank activity against accounting periods.",
    ],
    outcomes: [
      "Project financials and accounting stay connected.",
      "Fewer double-entry gaps between job cost and the books.",
      "Period close stays grounded in live project data.",
    ],
    relatedSlugs: ["budget-job-cost", "billing", "wip", "cash-flow"],
  },
  {
    slug: "billing",
    areaId: "fm-billing",
    heroTagline: "Connect invoices and receivables to project financial data.",
    preview: "finance",
    dark: true,
    moduleCodes: ["INV"],
    howItWorks: [
      "Create invoices against project financial workflows.",
      "Record payments and AR activity.",
      "Keep receivables visibility connected to the project.",
    ],
    outcomes: [
      "Billing status is visible with project financials.",
      "AR does not wait for disconnected month-end spreadsheets.",
      "Payments stay tied to the operating record.",
    ],
    relatedSlugs: ["aia-pay-applications", "budget-job-cost", "cash-flow", "native-accounting"],
  },
  {
    slug: "aia-pay-applications",
    areaId: "fm-payapps",
    heroTagline: "Produce AIA G702 pay applications connected to SOV and lien workflows.",
    preview: "finance",
    dark: true,
    moduleCodes: ["PAYAPP", "SOV"],
    howItWorks: [
      "Build pay applications and line items from schedule of values.",
      "Certify pay applications in workflow.",
      "Keep G702 activity connected to lien requirements.",
    ],
    outcomes: [
      "Pay apps stay aligned to SOV structure.",
      "Certification and line detail remain auditable.",
      "Billing and compliance stay on the same project path.",
    ],
    relatedSlugs: ["billing", "budget-job-cost", "change-orders", "wip"],
  },
  {
    slug: "wip",
    areaId: "fm-wip",
    heroTagline: "Track work-in-progress reporting connected to budget and the ledger.",
    preview: "wipDashboard",
    dark: true,
    moduleCodes: ["WIP"],
    howItWorks: [
      "Capture WIP reporting snapshots.",
      "Connect WIP views to GL and budget data.",
      "Use WIP reporting for financial visibility across projects.",
    ],
    outcomes: [
      "WIP reporting stays grounded in live financial data.",
      "Budget and ledger context stay connected.",
      "Fewer standalone WIP spreadsheets.",
    ],
    relatedSlugs: ["budget-job-cost", "native-accounting", "billing", "cash-flow"],
  },
  {
    slug: "cash-flow",
    areaId: "fm-cash",
    heroTagline: "Forecast cash flow from invoices and payables already in the platform.",
    preview: "cashDashboard",
    dark: true,
    moduleCodes: ["CASH"],
    howItWorks: [
      "Generate cash flow forecasts from operating data.",
      "Connect forecast views to invoices and payables.",
      "Keep cash visibility alongside project financial workflows.",
    ],
    outcomes: [
      "Cash outlook reflects live AR and AP activity.",
      "Forecasting stays connected to project financials.",
      "Leadership can see cash risk earlier.",
    ],
    relatedSlugs: ["billing", "native-accounting", "budget-job-cost", "wip"],
  },

  // Field Operations
  {
    slug: "daily-logs",
    areaId: "fo-daily-logs",
    heroTagline: "Capture daily field activity where work happens and sync it to the project.",
    preview: "dailyLogDashboard",
    moduleCodes: ["LOG"],
    howItWorks: [
      "Create daily logs from the field.",
      "Record weather, manpower, and related entries.",
      "Attach supporting files to the project log record.",
    ],
    outcomes: [
      "Field activity becomes part of the project record the same day.",
      "Office teams see logs without chasing paper or photos.",
      "Daily documentation stays searchable on the project.",
    ],
    relatedSlugs: ["drawings", "punch", "safety", "mobile"],
  },
  {
    slug: "drawings",
    areaId: "fo-drawings",
    heroTagline: "Give the field the current drawing set with markup support.",
    preview: "drawingWorkspace",
    moduleCodes: ["DWG"],
    howItWorks: [
      "Publish drawings to the project.",
      "Capture drawing markups.",
      "Keep the field on the current revision.",
    ],
    outcomes: [
      "Fewer calls to the office for the right sheet.",
      "Markup stays with the drawing record.",
      "Current revision control reduces rework risk.",
    ],
    relatedSlugs: ["documents", "daily-logs", "rfis", "punch"],
  },
  {
    slug: "punch",
    areaId: "fo-punch",
    heroTagline: "Drive quality completion with punch lists and item status.",
    preview: "punchDashboard",
    moduleCodes: ["PUNCH"],
    howItWorks: [
      "Create punch lists on the project.",
      "Track punch list items through completion.",
      "Keep status visibility for closeout.",
    ],
    outcomes: [
      "Punch work is visible to office and field.",
      "Closeout progress is easier to measure.",
      "Quality items stay connected to the project record.",
    ],
    relatedSlugs: ["daily-logs", "drawings", "safety", "projects"],
  },
  {
    slug: "t-and-m",
    areaId: "fo-tm",
    heroTagline: "Capture time & material field tickets with line-level detail.",
    preview: "tmTicket",
    moduleCodes: ["TM"],
    howItWorks: [
      "Create T&M field tickets on the project.",
      "Record ticket line items for labor, material, and related work.",
      "Keep T&M documentation connected to project cost structure.",
    ],
    outcomes: [
      "Field tickets are not trapped in paper or email.",
      "Line detail supports billing and cost review.",
      "T&M activity stays tied to the project.",
    ],
    relatedSlugs: ["daily-logs", "billing", "budget-job-cost", "time"],
  },
  {
    slug: "safety",
    areaId: "fo-safety",
    heroTagline: "Document incidents, inspections, toolbox talks, and JHA/JSA on the project.",
    preview: "safetyOverview",
    moduleCodes: ["SAFETY"],
    howItWorks: [
      "Log safety incidents against the project.",
      "Run inspections and toolbox talks.",
      "Capture JHA / JSA workflows with the field record.",
    ],
    outcomes: [
      "Safety documentation stays with the project.",
      "Inspections and talks are easier to prove later.",
      "Field and office share the same safety record.",
    ],
    relatedSlugs: ["daily-logs", "mobile", "compliance", "punch"],
  },
  {
    slug: "mobile",
    areaId: "fo-mobile",
    heroTagline: "Keep field workflows connected to the project record from mobile devices.",
    preview: "mobileHome",
    moduleCodes: ["LOG", "DWG", "SAFETY", "TM", "PUNCH"],
    capabilities: [
      "Mobile daily logs",
      "Drawing access in the field",
      "Safety forms on mobile",
      "Field tickets and punch from the jobsite",
      "Project-synced field documentation",
    ],
    howItWorks: [
      "Use mobile-first field workflows for daily logs, drawings, safety, T&M, and punch.",
      "Sync captured field information to the project record.",
      "Keep office visibility connected to what happens on site.",
    ],
    outcomes: [
      "Field teams work without waiting on the office for forms or drawings.",
      "Jobsite activity becomes part of the live project record.",
      "Mobile capture reduces paper handoffs.",
    ],
    relatedSlugs: ["daily-logs", "drawings", "safety", "punch", "t-and-m"],
  },

  // Compliance & Workforce
  {
    slug: "subcontractors",
    areaId: "cw-subs",
    heroTagline: "Keep subcontractor records, compliance, and insurance tracking organized.",
    preview: "subDirectory",
    moduleCodes: ["SUB", "LIEN", "INS"],
    howItWorks: [
      "Maintain subcontractor records and project relationships.",
      "Track insurance, COI, lien waivers, and compliance readiness.",
      "Surface missing or expiring requirements before assignment and payment.",
    ],
    outcomes: [
      "Subcontractor information stays centralized.",
      "Insurance and compliance status is visible before work proceeds.",
      "Downstream compliance and disbursement workflows share the same records.",
    ],
    relatedSlugs: ["compliance", "workforce", "time", "payroll-readiness"],
  },
  {
    slug: "compliance",
    areaId: "cw-compliance",
    heroTagline: "Track requirements, COI, lien waivers, and compliance readiness across projects.",
    preview: "compOverview",
    moduleCodes: ["COMPLY", "INS", "LIEN"],
    howItWorks: [
      "Track subcontractor insurance and COI compliance.",
      "Use compliance radar and calendar views.",
      "Surface missing or expiring requirements before project decisions.",
    ],
    outcomes: [
      "Compliance status is visible before issues escalate.",
      "Insurance and COI tracking stay connected to subs.",
      "Calendar and radar views reduce manual follow-up.",
    ],
    relatedSlugs: ["subcontractors", "workforce", "safety", "payroll-readiness"],
  },
  {
    slug: "workforce",
    areaId: "cw-workforce",
    heroTagline: "Manage workers, crews, hours, certifications, and project assignments.",
    preview: "wfOverview",
    moduleCodes: ["TIME"],
    capabilities: ["Workers", "Crew visibility", "Timesheets", "Timesheet entries"],
    howItWorks: [
      "Maintain worker records connected to projects and crews.",
      "Capture and approve timesheets tied to project cost structure.",
      "Keep certifications and workforce requirements visible before assignment.",
    ],
    outcomes: [
      "People data stays connected to project delivery.",
      "Crew visibility supports field and office coordination.",
      "Workforce records support time and payroll readiness.",
    ],
    relatedSlugs: ["time", "payroll-readiness", "subcontractors", "daily-logs"],
  },
  {
    slug: "time",
    areaId: "cw-time",
    heroTagline: "Capture timesheets and labor hours tied to projects and cost codes.",
    preview: "timeOverview",
    moduleCodes: ["TIME"],
    howItWorks: [
      "Create timesheets for project work.",
      "Record regular, overtime, and double-time hours against cost codes.",
      "Move submitted timesheets through approval to project cost and payroll readiness.",
    ],
    outcomes: [
      "Time is not trapped in disconnected spreadsheets.",
      "Entries stay linked to projects and cost codes.",
      "Payroll readiness starts from structured time data.",
    ],
    relatedSlugs: ["workforce", "payroll-readiness", "budget-job-cost", "t-and-m"],
  },
  {
    slug: "payroll-readiness",
    areaId: "cw-payroll",
    heroTagline: "Organize approved time and workforce data for payroll-related review.",
    preview: "prOverview",
    moduleCodes: ["PAYROLL", "TIME"],
    howItWorks: [
      "Start with approved timesheets and connected workforce information.",
      "Organize labor by payroll period, classification, and hours.",
      "Surface payroll-ready summaries for review before the next workflow.",
    ],
    outcomes: [
      "Payroll inputs come from the same operating system.",
      "Approved labor stays connected to project context.",
      "Fewer handoffs between field time and payroll prep.",
    ],
    relatedSlugs: ["time", "workforce", "compliance", "subcontractors"],
  },

  // AI & Intelligence
  {
    slug: "ai-assistant",
    areaId: "ai-assistant",
    heroTagline: "Ask project questions grounded in live data — with confirmation before writes.",
    preview: "aiHero",
    dark: true,
    moduleCodes: ["AI"],
    howItWorks: [
      "Ask questions scoped to live project data.",
      "Get answers grounded in connected project records.",
      "Confirm write actions in plain English before execution.",
    ],
    outcomes: [
      "Faster answers without leaving the project context.",
      "Write actions remain human-confirmed.",
      "AI activity stays logged for accountability.",
    ],
    relatedSlugs: ["project-intelligence", "document-intelligence", "automation", "predictive-insights"],
  },
  {
    slug: "project-intelligence",
    areaId: "ai-project-intel",
    heroTagline: "Surface project insights from live operating data.",
    preview: "piHero",
    dark: true,
    moduleCodes: ["AI", "AI_INTEL"],
    capabilities: [
      "Insights from live project data",
      "Portfolio intelligence signals",
      "Permission-scoped AI answers",
      "Human-confirmed write actions",
    ],
    howItWorks: [
      "Ground intelligence in the live project record.",
      "Surface insights across connected project workflows.",
      "Keep AI reads within the user's permission scope.",
    ],
    outcomes: [
      "Project status questions get faster, grounded answers.",
      "Insights stay connected to operating data.",
      "Teams spend less time assembling status manually.",
    ],
    relatedSlugs: ["ai-assistant", "predictive-insights", "document-intelligence", "automation"],
  },
  {
    slug: "predictive-insights",
    areaId: "ai-predictive",
    heroTagline: "Layer predictive intelligence on AI Assistant and live project data.",
    preview: "predHero",
    dark: true,
    moduleCodes: ["AI_INTEL"],
    howItWorks: [
      "Use predictive intelligence on existing project data.",
      "Surface risk signals from live operations.",
      "Keep predictive views connected to AI Assistant workflows.",
    ],
    outcomes: [
      "Risk signals appear earlier from live data.",
      "Predictive views stay grounded in the project record.",
      "Leaders can act before issues become surprises.",
    ],
    relatedSlugs: ["ai-assistant", "project-intelligence", "automation", "document-intelligence"],
  },
  {
    slug: "document-intelligence",
    areaId: "ai-documents",
    heroTagline: "Work with project documents through AI grounded in the document record.",
    preview: "diHero",
    dark: true,
    moduleCodes: ["AI", "DOC"],
    capabilities: [
      "Document-aware AI answers",
      "Summaries grounded in project documents",
      "Permission-scoped document context",
      "Confirmed writes before changes",
    ],
    howItWorks: [
      "Ask questions against project document context.",
      "Summarize and work with documents through AI Assistant workflows.",
      "Keep document intelligence inside permission and confirmation controls.",
    ],
    outcomes: [
      "Document answers stay tied to the project record.",
      "Teams spend less time hunting across folders.",
      "AI document work follows the same confirmation rules.",
    ],
    relatedSlugs: ["documents", "ai-assistant", "project-intelligence", "drawings"],
  },
  {
    slug: "automation",
    areaId: "ai-automation",
    heroTagline: "Run AI tool actions with logging and confirmation before execution.",
    preview: "ai",
    dark: true,
    moduleCodes: ["AI"],
    capabilities: [
      "AI tool calls",
      "Tool call logging",
      "Confirmed writes",
      "Permission-scoped execution",
      "No AI deletes",
    ],
    howItWorks: [
      "Invoke AI tools against project workflows.",
      "Log every tool call for accountability.",
      "Require confirmation before write execution — AI cannot delete records.",
    ],
    outcomes: [
      "Automation stays auditable.",
      "Write actions remain human-controlled.",
      "Teams gain speed without losing governance.",
    ],
    relatedSlugs: ["ai-assistant", "project-intelligence", "predictive-insights", "document-intelligence"],
  },

  // Business Growth
  {
    slug: "crm",
    areaId: "bg-crm",
    heroTagline: "Manage opportunities and pipeline from lead through bidding and win/loss.",
    preview: "crm",
    moduleCodes: ["CRM"],
    howItWorks: [
      "Track opportunities through pipeline stages.",
      "Support go/no-go scoring on pursuits.",
      "Keep preconstruction CRM connected to delivery workflows.",
    ],
    outcomes: [
      "Pipeline visibility stays in the same platform as delivery.",
      "Win/loss history is easier to review.",
      "Growth activity connects to project setup downstream.",
    ],
    relatedSlugs: ["estimating", "bid-management", "leads", "projects"],
  },
  {
    slug: "leads",
    areaId: "bg-leads",
    heroTagline: "Capture leads into the opportunity pipeline that feeds project delivery.",
    preview: "connected",
    moduleCodes: ["CRM"],
    capabilities: ["Lead capture into opportunities", "Pipeline stages", "Go/no-go scoring", "Win/loss tracking"],
    howItWorks: [
      "Capture leads into preconstruction CRM opportunities.",
      "Move pursuits through pipeline stages.",
      "Connect growth intake to later project delivery.",
    ],
    outcomes: [
      "Leads do not live in a disconnected spreadsheet.",
      "Pipeline stages stay visible to the team.",
      "Won work transitions into the operating system.",
    ],
    relatedSlugs: ["crm", "website-builder", "customer-portals", "projects"],
  },
  {
    slug: "website-builder",
    areaId: "bg-website",
    heroTagline: "Publish tenant website pages and custom domains connected to CMS data.",
    preview: "connected",
    moduleCodes: ["WEBSITE"],
    howItWorks: [
      "Manage tenant websites and pages.",
      "Connect custom domains to the public site.",
      "Keep website content connected to CMS data.",
    ],
    outcomes: [
      "Public web presence stays tied to the business platform.",
      "Domain and page management stay centralized.",
      "Growth channels connect back to Vertex CMS data.",
    ],
    relatedSlugs: ["crm", "leads", "customer-portals"],
  },
  {
    slug: "customer-portals",
    areaId: "bg-portals",
    heroTagline: "Give owners, subs, vendors, and architects scoped access to project information.",
    preview: "connected",
    moduleCodes: [],
    capabilities: [
      "Owner portal access",
      "Subcontractor portal access",
      "Vendor portal access",
      "Architect portal access",
      "Scoped project information sharing",
    ],
    howItWorks: [
      "Provide portal access for external project participants.",
      "Scope shared information to the right audience.",
      "Keep portal collaboration connected to the project record.",
    ],
    outcomes: [
      "External stakeholders get project visibility without full tenant access.",
      "Shared information stays permission-scoped.",
      "Customer and partner collaboration stays inside the platform.",
    ],
    relatedSlugs: ["crm", "projects", "documents", "website-builder"],
  },
];

function findHubArea(areaId: string): { section: HubModuleSection; area: HubFeatureArea } | null {
  for (const section of HUB_MODULES) {
    const area = section.areas.find((a) => a.id === areaId);
    if (area) return { section, area };
  }
  return null;
}

export const FEATURE_AREA_DETAILS: FeatureAreaDetail[] = AREA_SEEDS.map((seed) => {
  const hub = findHubArea(seed.areaId);
  if (!hub && !seed.categoryMeta) {
    throw new Error(`Hub area missing for feature detail seed: ${seed.areaId}`);
  }
  return {
    slug: seed.slug,
    areaId: seed.areaId,
    label: hub?.area.label ?? seed.categoryMeta!.label,
    moduleSectionId: hub?.section.id ?? seed.categoryMeta!.sectionId,
    moduleTitle: hub?.section.title ?? seed.categoryMeta!.sectionTitle,
    description: hub?.area.description ?? seed.categoryMeta!.description,
    heroTagline: seed.heroTagline,
    preview: seed.preview,
    dark: seed.dark,
    capabilities: seed.capabilities ?? caps(...seed.moduleCodes),
    howItWorks: seed.howItWorks,
    outcomes: seed.outcomes,
    relatedSlugs: seed.relatedSlugs,
    moduleCodes: seed.moduleCodes,
  };
});

export function featureAreaPath(slug: string): string {
  return `${ROUTES.features}/${slug}`;
}

export function getFeatureAreaBySlug(slug: string): FeatureAreaDetail | undefined {
  return FEATURE_AREA_DETAILS.find((f) => f.slug === slug);
}

export function getFeatureAreaByAreaId(areaId: string): FeatureAreaDetail | undefined {
  return FEATURE_AREA_DETAILS.find((f) => f.areaId === areaId);
}

/** Map Feature Library rows to a major feature-area detail page when applicable. */
const PRIMARY_MODULE_CODE_TO_SLUG: Record<string, string> = {
  PROJ: "projects",
  SCHED: "scheduling",
  DOC: "documents",
  RFI: "rfis",
  SUBM: "submittals",
  CO: "change-orders",
  EST: "estimating",
  BID: "bid-management",
  TAKEOFF: "quantity-takeoff",
  BUDGET: "budget-job-cost",
  GL: "native-accounting",
  AP: "native-accounting",
  BANK: "native-accounting",
  INV: "billing",
  PAYAPP: "aia-pay-applications",
  SOV: "aia-pay-applications",
  WIP: "wip",
  CASH: "cash-flow",
  LOG: "daily-logs",
  DWG: "drawings",
  PUNCH: "punch",
  TM: "t-and-m",
  SAFETY: "safety",
  SUB: "subcontractors",
  COMPLY: "compliance",
  INS: "compliance",
  TIME: "time",
  PAYROLL: "payroll-readiness",
  AI: "ai-assistant",
  AI_INTEL: "predictive-insights",
  CRM: "crm",
  WEBSITE: "website-builder",
};

export function getFeatureAreaForLibraryFeature(input: {
  moduleCode: string;
  slug: string;
  name: string;
}): FeatureAreaDetail | undefined {
  const nameLower = input.name.toLowerCase();

  // Prefer explicit name matches for composite / overlapping areas
  if (nameLower.includes("mobile")) return getFeatureAreaBySlug("mobile");
  if (nameLower.includes("lead")) return getFeatureAreaBySlug("leads");
  if (nameLower.includes("portal")) return getFeatureAreaBySlug("customer-portals");
  if (nameLower === "workers" || nameLower.includes("crew")) return getFeatureAreaBySlug("workforce");
  if (nameLower.includes("document intelligence") || nameLower.includes("summar")) {
    return getFeatureAreaBySlug("document-intelligence");
  }
  if (nameLower.includes("project intelligence") || nameLower.includes("portfolio intelligence")) {
    return getFeatureAreaBySlug("project-intelligence");
  }
  if (nameLower.includes("automation") || nameLower.includes("tool call") || nameLower.includes("tool logging")) {
    return getFeatureAreaBySlug("automation");
  }
  if (nameLower.includes("predictive")) return getFeatureAreaBySlug("predictive-insights");

  const primarySlug = PRIMARY_MODULE_CODE_TO_SLUG[input.moduleCode];
  if (primarySlug) return getFeatureAreaBySlug(primarySlug);

  return FEATURE_AREA_DETAILS.find(
    (a) => a.slug === input.slug || nameLower.includes(a.label.toLowerCase())
  );
}

/** Legacy explore-module detail URLs → Features hub section anchors / category pages */
export const LEGACY_FEATURE_SLUG_REDIRECTS: Record<string, string> = {
  "contracts-financials": `${ROUTES.features}#financial-management`,
  "construction-accounting": `${ROUTES.features}#financial-management`,
  "field-operations": `${ROUTES.features}#field-operations`,
  "scheduling-project-controls": `${ROUTES.features}/project-management`,
  "safety-compliance": `${ROUTES.features}#compliance`,
  "procurement-resources": `${ROUTES.features}#compliance`,
  "workforce-equipment": `${ROUTES.features}#compliance`,
  "ai-intelligence": `${ROUTES.features}#ai`,
  "reports-analytics": `${ROUTES.features}#features-library`,
  "collaboration-closeout": `${ROUTES.features}/project-management`,
  "connected-experience": `${ROUTES.features}#growth`,
};
