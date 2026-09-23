/** Shared comparison framework content — landing + detail pages consume the same source. */

export const COMPARISON_FRAMEWORK_PILLARS = [
  { index: "01", label: "Capabilities" },
  { index: "02", label: "Workflows" },
  { index: "03", label: "Operating model" },
  { index: "04", label: "Team fit" },
] as const;

export const COMPARISON_FRAMEWORK_FLOW = ["Documented evidence", "Structured comparison", "Clearer evaluation"] as const;

export const COMPARISON_CAPABILITY_AREAS = [
  {
    id: "project-operations",
    title: "Project operations",
    body: "Projects, scheduling, documents and connected project workflows.",
  },
  {
    id: "field-operations",
    title: "Field operations",
    body: "Daily logs, drawings, mobile field workflows and field capture.",
  },
  {
    id: "financial-management",
    title: "Financial management",
    body: "Job cost, billing, accounting and financial workflows.",
  },
  {
    id: "documents-workflows",
    title: "Documents & workflows",
    body: "Document control, RFIs, submittals, and connected project information.",
  },
  {
    id: "compliance-workforce",
    title: "Compliance & workforce",
    body: "Subcontractor, compliance, workforce and time workflows.",
  },
  {
    id: "ai-intelligence",
    title: "AI & intelligence",
    body: "AI assistant, document intelligence, predictive insights and automation.",
  },
] as const;

export const COMPARISON_WORKFLOW_DOMAINS = [
  {
    id: "project",
    title: "Project",
    body: "Project delivery, scheduling, and connected project information workflows.",
  },
  {
    id: "field",
    title: "Field",
    body: "Field capture, daily logs, drawings, and mobile execution workflows.",
  },
  {
    id: "financial",
    title: "Financial",
    body: "Job cost, billing, accounting, and financial visibility workflows.",
  },
  {
    id: "compliance",
    title: "Compliance",
    body: "Subcontractor, compliance, workforce, and time-related workflows.",
  },
  {
    id: "intelligence",
    title: "Intelligence",
    body: "Document intelligence, insights, and automation-oriented workflows.",
  },
] as const;

export const COMPARISON_AUDIENCE_CONTEXTS = [
  {
    title: "General contractors",
    body: "Compare how each platform documents project, field, and financial coordination for GC operating models.",
    consideration: "Project delivery · multi-trade coordination",
  },
  {
    title: "Specialty contractors",
    body: "Review documented field, workforce, and project workflows relevant to specialty trade operations.",
    consideration: "Field capture · job-level visibility",
  },
  {
    title: "Operations & project teams",
    body: "Evaluate capability areas and connected workflows that shape day-to-day project execution.",
    consideration: "Workflow continuity · operating record",
  },
  {
    title: "Owners & clients",
    body: "Understand documented visibility, reporting, and collaboration models described in each comparison.",
    consideration: "Stakeholder visibility · project context",
  },
] as const;

export const COMPARISON_RESEARCH_STEPS = [
  {
    index: "01",
    title: "Choose a platform",
    body: "Select the construction-management platform you want to compare.",
  },
  {
    index: "02",
    title: "Review the capabilities",
    body: "Explore capability areas, workflows, operating model, and team-fit considerations.",
  },
  {
    index: "03",
    title: "Evaluate the fit",
    body: "Use the comparison information to understand how the platforms align with different operating needs.",
  },
] as const;

export const COMPARISON_WHY_DIMENSIONS = [
  {
    index: "01",
    title: "Capabilities",
    body: "Understand the major capability areas that shape day-to-day construction operations.",
  },
  {
    index: "02",
    title: "Workflows",
    body: "See how project, field, financial, compliance, and intelligence workflows connect in practice.",
  },
  {
    index: "03",
    title: "Operating model",
    body: "Look beyond isolated features and understand how workflows connect across the operating record.",
  },
  {
    index: "04",
    title: "Team fit",
    body: "Use the comparison to understand which operating needs and team structures each platform is designed to support.",
  },
] as const;

export const COMPARISON_STRATEGIC_DIFFERENCE = {
  eyebrow: "Strategic difference",
  headline: "Compare how the work connects — not just what features exist.",
  supporting:
    "Construction operations span project, field, financial, compliance, and intelligence workflows. A useful comparison should make those connections visible.",
  stages: ["Project", "Field", "Financial", "Compliance", "Intelligence"],
  closingLabel: "One operating record",
} as const;

