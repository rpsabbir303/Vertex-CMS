/**
 * UI/UX demo sample comparison content — replace with verified data in production.
 * Neutral language only; no rankings, pricing, or performance claims.
 */

import type { ComparisonSlug } from "./catalog";

export type DemoCapabilityRow = {
  id: string;
  title: string;
  frameworkDescription: string;
  vertexBuild: string;
  competitor: string;
  comparisonContext: string;
};

export type DemoWorkflowRow = {
  id: string;
  title: string;
  frameworkDescription: string;
  vertexBuild: string;
  competitor: string;
  comparisonContext: string;
};

export type DemoAudienceRow = {
  title: string;
  body: string;
  consideration: string;
  comparisonContext: string;
};

export type ComparisonDemoContent = {
  directorySummary: string;
  focusTags: readonly string[];
  heroSupporting: string;
  overviewSupporting: string;
  overviewDimensions: Array<{ index: string; title: string; body: string }>;
  capabilitySupporting: string;
  capabilities: DemoCapabilityRow[];
  workflowSupporting: string;
  workflows: DemoWorkflowRow[];
  operatingModel: {
    supporting: string;
    vertexBuild: string;
    competitor: string;
    comparisonContext: string;
  };
  strategicDifference: {
    supporting: string;
    supportingDetail: string;
  };
  audiences: DemoAudienceRow[];
  researchSteps: Array<{ index: string; title: string; body: string }>;
  seoDescription: string;
};

const VERTEX_PROJECT =
  "Projects, scheduling, documents, RFIs, submittals, change orders, and connected project workflows.";
const VERTEX_FIELD = "Daily logs, drawings, mobile field workflows, punch items, and connected field capture.";
const VERTEX_FINANCIAL = "Job cost, billing, accounting integrations, and financial visibility tied to project context.";
const VERTEX_DOCUMENTS = "Document control, RFIs, submittals, transmittals, and version-aware project information.";
const VERTEX_COMPLIANCE = "Subcontractor management, compliance tracking, workforce records, and time workflows.";
const VERTEX_AI =
  "AI assistant, document intelligence, predictive insights, and automation across connected workflows.";

const OVERVIEW_DIMENSIONS = [
  {
    index: "01",
    title: "Capabilities",
    body: "Compare major construction-management capabilities across project, financial, field, compliance, and intelligence workflows.",
  },
  {
    index: "02",
    title: "Workflows",
    body: "Review how project, field, financial, and intelligence workflows connect across the operating model.",
  },
  {
    index: "03",
    title: "Operating model",
    body: "Understand how each platform is positioned around connected construction operations and shared project context.",
  },
  {
    index: "04",
    title: "Team fit",
    body: "Review the types of construction teams and operating structures each platform is designed to support.",
  },
] as const;

const RESEARCH_STEPS = [
  {
    index: "01",
    title: "Choose a platform",
    body: "Select the construction-management platform you want to compare.",
  },
  {
    index: "02",
    title: "Review the capabilities",
    body: "Explore capability areas, workflows, operating model, and team-fit considerations in a consistent structure.",
  },
  {
    index: "03",
    title: "Evaluate the fit",
    body: "Use the comparison information to understand how the platforms align with different operating needs.",
  },
] as const;

function audiencesFor(competitor: string): DemoAudienceRow[] {
  return [
    {
      title: "General contractors",
      body: "Compare how VertexBuild and the other platform support project, field, and financial coordination for GC delivery models.",
      consideration: "Project delivery · multi-trade coordination",
      comparisonContext: `Use this view to see how ${competitor} and VertexBuild describe GC-oriented project and field workflows.`,
    },
    {
      title: "Specialty contractors",
      body: "Review field capture, workforce, and job-level workflows relevant to specialty trade operations.",
      consideration: "Field capture · job-level visibility",
      comparisonContext: `Review field and job-level workflow descriptions for specialty contractors evaluating ${competitor} alongside VertexBuild.`,
    },
    {
      title: "Operations & project teams",
      body: "Evaluate capability areas and connected workflows that shape day-to-day project execution.",
      consideration: "Workflow continuity · operating record",
      comparisonContext: "Focus on how each platform presents connected workflows rather than isolated feature lists.",
    },
    {
      title: "Owners & clients",
      body: "Understand visibility, reporting, and collaboration models as described in each platform comparison.",
      consideration: "Stakeholder visibility · project context",
      comparisonContext: `Compare how owner and client visibility is framed for ${competitor} and VertexBuild.`,
    },
  ];
}

export const COMPARISON_DEMO_DATA: Record<ComparisonSlug, ComparisonDemoContent> = {
  procore: {
    directorySummary:
      "Structured comparison of VertexBuild and Procore across capabilities, workflows, operating model, and team fit.",
    focusTags: ["Capabilities", "Workflows", "Operating model", "Team fit"],
    heroSupporting:
      "Review a structured comparison of VertexBuild and Procore across capabilities, workflows, operating model, and intended fit.",
    overviewSupporting:
      "This comparison uses a consistent framework so teams can review capabilities, workflows, operating model, and team fit in one place.",
    overviewDimensions: [...OVERVIEW_DIMENSIONS],
    capabilitySupporting:
      "Neutral descriptions of how each platform organizes major construction-management capability areas.",
    capabilities: [
      {
        id: "project-operations",
        title: "Project operations",
        frameworkDescription: "Core project delivery, scheduling, and connected project information.",
        vertexBuild: VERTEX_PROJECT,
        competitor: "Project management, scheduling, documents, RFIs, submittals, and construction workflows.",
        comparisonContext:
          "Both platforms support core project-management workflows, with differences in product structure and workflow organization.",
      },
      {
        id: "field-operations",
        title: "Field operations",
        frameworkDescription: "Field execution, daily reporting, and mobile job-site workflows.",
        vertexBuild: VERTEX_FIELD,
        competitor: "Mobile field tools, daily logs, drawings, photos, and punch-list workflows on site.",
        comparisonContext:
          "Field teams should compare how each platform connects site capture back to project records and schedules.",
      },
      {
        id: "financial-management",
        title: "Financial management",
        frameworkDescription: "Job cost, billing, and accounting-connected financial workflows.",
        vertexBuild: VERTEX_FINANCIAL,
        competitor: "Budget tracking, commitments, change events, and financial reporting tied to projects.",
        comparisonContext:
          "Financial comparison should examine how cost data links to project context, not just standalone accounting features.",
      },
      {
        id: "documents-workflows",
        title: "Documents & workflows",
        frameworkDescription: "Controlled documents and collaborative project information flows.",
        vertexBuild: VERTEX_DOCUMENTS,
        competitor: "Drawings, specifications, RFIs, submittals, and document collaboration for project teams.",
        comparisonContext:
          "Document workflows differ in how revisions, approvals, and project roles are organized across teams.",
      },
      {
        id: "compliance-workforce",
        title: "Compliance & workforce",
        frameworkDescription: "Workforce, subcontractor, and compliance-oriented operations.",
        vertexBuild: VERTEX_COMPLIANCE,
        competitor: "Directory, permissions, safety, and workforce coordination within the construction suite.",
        comparisonContext:
          "Compare how each platform presents compliance and workforce data relative to active projects and trades.",
      },
      {
        id: "ai-intelligence",
        title: "AI & intelligence",
        frameworkDescription: "Intelligence and automation layered on operational data.",
        vertexBuild: VERTEX_AI,
        competitor: "Analytics, dashboards, and platform intelligence features for project and company insights.",
        comparisonContext:
          "Intelligence features should be evaluated in context of which operational data each platform connects.",
      },
    ],
    workflowSupporting:
      "Compare how VertexBuild and Procore describe connected project, field, financial, compliance, and intelligence workflows.",
    workflows: [
      {
        id: "project",
        title: "Project",
        frameworkDescription: "Project delivery and connected project records.",
        vertexBuild: "Project setup, scheduling, documents, RFIs, submittals, and connected project records.",
        competitor: "Project planning, document management, RFIs, submittals, and project collaboration.",
        comparisonContext:
          "Both address core project workflows, with different approaches to organizing connected project information.",
      },
      {
        id: "field",
        title: "Field",
        frameworkDescription: "Site execution and field-to-office continuity.",
        vertexBuild: "Daily logs, drawings, mobile capture, and field updates linked to schedule and cost context.",
        competitor: "Field logs, mobile drawings, photos, and punch workflows synchronized with project data.",
        comparisonContext: "Compare how field events flow into the broader project record on each platform.",
      },
      {
        id: "financial",
        title: "Financial",
        frameworkDescription: "Cost, billing, and financial visibility.",
        vertexBuild: "Job cost, billing progress, and accounting handoffs tied to active projects.",
        competitor: "Budgets, commitments, change management, and project financial reporting.",
        comparisonContext: "Financial domains highlight how each platform ties cost activity to project delivery.",
      },
      {
        id: "compliance",
        title: "Compliance",
        frameworkDescription: "Compliance, workforce, and subcontractor coordination.",
        vertexBuild: "Workforce records, subcontractor coordination, and compliance checkpoints on projects.",
        competitor: "Safety, permissions, and workforce coordination within the construction environment.",
        comparisonContext: "Review how compliance data is associated with projects and roles in each platform description.",
      },
      {
        id: "intelligence",
        title: "Intelligence",
        frameworkDescription: "Insights and automation across operational data.",
        vertexBuild: "Document intelligence, assistant workflows, and insight surfaces on connected data.",
        competitor: "Reporting, analytics, and insight tools across project and company datasets.",
        comparisonContext: "Intelligence comparison depends on which workflows each platform connects upstream.",
      },
    ],
    operatingModel: {
      supporting:
        "Operating-model context describing how VertexBuild and Procore frame connected construction operations.",
      vertexBuild:
        "A connected construction-management platform organized around project, field, financial, compliance, and intelligence workflows.",
      competitor:
        "A construction-management platform supporting project teams through connected project and operational workflows.",
      comparisonContext:
        "The comparison considers how each platform structures information, workflows, and team responsibilities.",
    },
    strategicDifference: {
      supporting:
        "A useful construction-platform comparison should look beyond individual features and examine how project, field, financial, compliance, and intelligence workflows connect across the operating model.",
      supportingDetail:
        "This section illustrates workflow relationships for VertexBuild and Procore. It does not rank platforms or declare a winner.",
    },
    audiences: audiencesFor("Procore"),
    researchSteps: [...RESEARCH_STEPS],
    seoDescription:
      "Compare VertexBuild and Procore for construction management capabilities, workflows, and operating model context.",
  },

  buildertrend: {
    directorySummary:
      "Comparison of VertexBuild and Buildertrend for residential and remodel-oriented construction operations.",
    focusTags: ["Capabilities", "Workflows", "Client experience", "Team fit"],
    heroSupporting:
      "Review a structured comparison of VertexBuild and Buildertrend across capabilities, workflows, operating model, and intended fit.",
    overviewSupporting:
      "The same comparison framework applies to Buildertrend alongside VertexBuild for a consistent evaluation path.",
    overviewDimensions: [...OVERVIEW_DIMENSIONS],
    capabilitySupporting:
      "Capability areas focused on project delivery, client communication, and trade coordination common in residential construction.",
    capabilities: [
      {
        id: "project-operations",
        title: "Project operations",
        frameworkDescription: "Project scheduling, selections, and client-visible project progress.",
        vertexBuild: VERTEX_PROJECT,
        competitor:
          "Scheduling, selections, client portal updates, and project coordination for residential builders and remodelers.",
        comparisonContext:
          "Residential-oriented teams often weigh client-facing project tools alongside internal scheduling and document flows.",
      },
      {
        id: "field-operations",
        title: "Field operations",
        frameworkDescription: "Field updates, daily progress, and job-site communication.",
        vertexBuild: VERTEX_FIELD,
        competitor: "Daily logs, photos, to-do lists, and field updates shared with office and client stakeholders.",
        comparisonContext: "Compare how field activity is reflected in project schedules and client communications.",
      },
      {
        id: "financial-management",
        title: "Financial management",
        frameworkDescription: "Estimates, budgets, and billing connected to project stages.",
        vertexBuild: VERTEX_FINANCIAL,
        competitor: "Estimating, change orders, purchase orders, and payment workflows for builder operations.",
        comparisonContext:
          "Financial comparison should include how each platform ties buyer-facing changes to internal job cost views.",
      },
      {
        id: "documents-workflows",
        title: "Documents & workflows",
        frameworkDescription: "Plans, specifications, and shared project files.",
        vertexBuild: VERTEX_DOCUMENTS,
        competitor: "Plan storage, file sharing, selections documentation, and client-facing document workflows.",
        comparisonContext: "Document flows often differ between commercial-grade and residential client experiences.",
      },
      {
        id: "compliance-workforce",
        title: "Compliance & workforce",
        frameworkDescription: "Subs, vendors, and workforce coordination.",
        vertexBuild: VERTEX_COMPLIANCE,
        competitor: "Subcontractor scheduling, vendor communication, and workforce coordination for builder teams.",
        comparisonContext: "Review how each platform supports trade partner coordination without implying one is universally stronger.",
      },
      {
        id: "ai-intelligence",
        title: "AI & intelligence",
        frameworkDescription: "Insights and automation on operational project data.",
        vertexBuild: VERTEX_AI,
        competitor: "Reporting, dashboards, and business insights for builder sales and production pipelines.",
        comparisonContext: "Intelligence features should be evaluated against the workflows each platform already connects.",
      },
    ],
    workflowSupporting:
      "Workflow domains for Buildertrend emphasizing production, client communication, and financial handoffs.",
    workflows: [
      {
        id: "project",
        title: "Project",
        frameworkDescription: "Project lifecycle from preconstruction through closeout.",
        vertexBuild: "Project setup, scheduling, documents, RFIs, submittals, and connected project records.",
        competitor: "Lead-to-close project tracking, schedules, selections, and client portal milestones.",
        comparisonContext: "Project workflows differ in how client-visible progress maps to internal schedules.",
      },
      {
        id: "field",
        title: "Field",
        frameworkDescription: "Site execution and daily production updates.",
        vertexBuild: "Daily logs, drawings, mobile capture, and field updates linked to schedule and cost context.",
        competitor: "Daily logs, photos, checklists, and field tasks tied to builder schedules.",
        comparisonContext: "Field comparison should note how updates reach office staff and client channels.",
      },
      {
        id: "financial",
        title: "Financial",
        frameworkDescription: "Estimating, billing, and change management.",
        vertexBuild: "Job cost, billing progress, and accounting handoffs tied to active projects.",
        competitor: "Estimates, change orders, invoices, and payment tracking for residential projects.",
        comparisonContext: "Compare how financial events stay aligned with project stage and client approvals.",
      },
      {
        id: "compliance",
        title: "Compliance",
        frameworkDescription: "Vendor, subcontractor, and workforce coordination.",
        vertexBuild: "Workforce records, subcontractor coordination, and compliance checkpoints on projects.",
        competitor: "Sub and vendor scheduling, communication, and job-site coordination tools.",
        comparisonContext: "Compliance here focuses on coordination mechanics rather than regulatory certification claims.",
      },
      {
        id: "intelligence",
        title: "Intelligence",
        frameworkDescription: "Reporting and insight across projects.",
        vertexBuild: "Document intelligence, assistant workflows, and insight surfaces on connected data.",
        competitor: "Builder analytics on sales funnel, production pace, and project profitability views.",
        comparisonContext: "Intelligence features should be evaluated against connected operational data on each platform.",
      },
    ],
    operatingModel: {
      supporting: "How VertexBuild and Buildertrend describe operating models for construction teams.",
      vertexBuild:
        "A connected construction-management platform spanning project, field, financial, compliance, and intelligence workflows.",
      competitor:
        "A builder-focused platform connecting sales, project management, client communication, and financial workflows.",
      comparisonContext:
        "Teams should compare which operating model aligns with commercial, residential, or mixed construction structures.",
    },
    strategicDifference: {
      supporting:
        "A useful construction-platform comparison should look beyond individual features and examine how project, field, financial, compliance, and intelligence workflows connect across the operating model.",
      supportingDetail:
        "This section highlights workflow connectivity for VertexBuild and Buildertrend without ranking either platform.",
    },
    audiences: audiencesFor("Buildertrend"),
    researchSteps: [...RESEARCH_STEPS],
    seoDescription:
      "Compare VertexBuild and Buildertrend for construction management workflows and team-fit context.",
  },

  cmic: {
    directorySummary:
      "Comparison of VertexBuild and CMiC for enterprise construction and capital project operations.",
    focusTags: ["Capabilities", "Workflows", "Enterprise fit", "Team fit"],
    heroSupporting:
      "Review a structured comparison of VertexBuild and CMiC across capabilities, workflows, operating model, and intended fit.",
    overviewSupporting:
      "Enterprise-oriented comparison using the same four-dimension framework as other supported platforms.",
    overviewDimensions: [...OVERVIEW_DIMENSIONS],
    capabilitySupporting:
      "Enterprise capability areas for CMiC — project controls, financial depth, and multi-entity operations.",
    capabilities: [
      {
        id: "project-operations",
        title: "Project operations",
        frameworkDescription: "Project controls, scheduling, and capital project delivery.",
        vertexBuild: VERTEX_PROJECT,
        competitor:
          "Enterprise project management, controls, document management, and capital project workflows for large programs.",
        comparisonContext:
          "Enterprise buyers often compare project control depth alongside usability for field and financial teams.",
      },
      {
        id: "field-operations",
        title: "Field operations",
        frameworkDescription: "Field reporting and site-to-office continuity.",
        vertexBuild: VERTEX_FIELD,
        competitor: "Field reporting, mobile access, and site data capture integrated with enterprise project records.",
        comparisonContext: "Field comparison should consider how site data reaches financial and controls workflows.",
      },
      {
        id: "financial-management",
        title: "Financial management",
        frameworkDescription: "Job cost, ERP-style financials, and project accounting.",
        vertexBuild: VERTEX_FINANCIAL,
        competitor: "Enterprise job cost, accounting, payroll interfaces, and project financial controls.",
        comparisonContext:
          "Financial modules are often evaluated for ERP alignment as well as project-level visibility.",
      },
      {
        id: "documents-workflows",
        title: "Documents & workflows",
        frameworkDescription: "Controlled documents across large project portfolios.",
        vertexBuild: VERTEX_DOCUMENTS,
        competitor: "Enterprise document management, transmittals, and workflow routing for capital projects.",
        comparisonContext: "Compare document governance models rather than assuming equivalent approval paths.",
      },
      {
        id: "compliance-workforce",
        title: "Compliance & workforce",
        frameworkDescription: "Workforce, safety, and compliance at program scale.",
        vertexBuild: VERTEX_COMPLIANCE,
        competitor: "Workforce, safety, and compliance tracking integrated with enterprise HR and project structures.",
        comparisonContext: "Compare how compliance and workforce data relate to enterprise project hierarchies on each platform.",
      },
      {
        id: "ai-intelligence",
        title: "AI & intelligence",
        frameworkDescription: "Analytics and intelligence across portfolio data.",
        vertexBuild: VERTEX_AI,
        competitor: "Enterprise analytics, dashboards, and portfolio reporting across projects and entities.",
        comparisonContext: "Intelligence comparison should reflect which data domains each platform connects in practice.",
      },
    ],
    workflowSupporting:
      "Enterprise workflow domains for CMiC covering project controls, financial depth, and portfolio reporting.",
    workflows: [
      {
        id: "project",
        title: "Project",
        frameworkDescription: "Capital project and program delivery workflows.",
        vertexBuild: "Project setup, scheduling, documents, RFIs, submittals, and connected project records.",
        competitor: "Capital project controls, scheduling, documents, and enterprise project collaboration.",
        comparisonContext: "Project workflows may differ in controls rigor versus field-team accessibility.",
      },
      {
        id: "field",
        title: "Field",
        frameworkDescription: "Field data feeding enterprise project records.",
        vertexBuild: "Daily logs, drawings, mobile capture, and field updates linked to schedule and cost context.",
        competitor: "Field reporting and mobile workflows synchronized with enterprise project and cost structures.",
        comparisonContext: "Compare how quickly field events appear in financial and controls views.",
      },
      {
        id: "financial",
        title: "Financial",
        frameworkDescription: "Project accounting and enterprise financial integration.",
        vertexBuild: "Job cost, billing progress, and accounting handoffs tied to active projects.",
        competitor: "Enterprise job cost, payroll interfaces, and project financial reporting across entities.",
        comparisonContext: "Financial comparison emphasizes ERP alignment and project-level traceability.",
      },
      {
        id: "compliance",
        title: "Compliance",
        frameworkDescription: "Program-scale compliance and workforce processes.",
        vertexBuild: "Workforce records, subcontractor coordination, and compliance checkpoints on projects.",
        competitor: "Safety, workforce, and compliance processes tied to enterprise project hierarchies.",
        comparisonContext: "Compliance workflows should be evaluated against your program requirements on each platform.",
      },
      {
        id: "intelligence",
        title: "Intelligence",
        frameworkDescription: "Portfolio analytics and insight.",
        vertexBuild: "Document intelligence, assistant workflows, and insight surfaces on connected data.",
        competitor: "Portfolio dashboards, KPI reporting, and analytics across programs and business units.",
        comparisonContext: "Evaluate which operational domains feed each platform’s analytics in your environment.",
      },
    ],
    operatingModel: {
      supporting: "Enterprise operating-model framing for VertexBuild and CMiC.",
      vertexBuild:
        "A connected construction-management platform organizing project, field, financial, compliance, and intelligence workflows.",
      competitor:
        "An enterprise construction and capital projects platform connecting financial, project, and workforce operations.",
      comparisonContext:
        "Compare how each platform models entities, projects, and financial structures for large organizations.",
    },
    strategicDifference: {
      supporting:
        "A useful construction-platform comparison should look beyond individual features and examine how project, field, financial, compliance, and intelligence workflows connect across the operating model.",
      supportingDetail:
        "Workflow-relationship view for VertexBuild and CMiC — neutral, non-ranking comparison language.",
    },
    audiences: audiencesFor("CMiC"),
    researchSteps: [...RESEARCH_STEPS],
    seoDescription:
      "Compare VertexBuild and CMiC for enterprise construction management capabilities and workflows.",
  },
};
