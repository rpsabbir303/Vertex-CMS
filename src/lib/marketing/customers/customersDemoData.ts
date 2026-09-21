/**

 * PROTOTYPE / DEMO customer proof — fictional companies only.

 * Not verified VertexBuild customers. Set CUSTOMERS_PROOF_STATE to `published` for production.

 */

import { photos } from "@/lib/images";
import { ROUTES } from "@/lib/marketing/navigation";
import type {
  CaseStudyNarrativeStage,
  CaseStudyRecord,
  CustomerLogo,
  CustomerTestimonialRecord,
  HeroEcosystemCustomer,
  RoiMetricRecord,
} from "./types";

function demoNarrative(challenge: string, approach: string, outcome: string): CaseStudyNarrativeStage[] {
  return [
    { step: "01", title: "Challenge", description: challenge },
    { step: "02", title: "Connect", description: "Workflows connected on VertexBuild across teams and systems of record." },
    { step: "03", title: "Operate", description: approach },
    { step: "04", title: "Measure", description: outcome },
  ];
}



export const CUSTOMERS_DEMO_SECTION_DISCLAIMER =

  "Illustrative demo results shown for design purposes. Customer-specific outcomes will be published only when validated and approved.";



export const CUSTOMERS_DEMO_DATA = {

  logos: [

    {

      id: "demo-northline",

      name: "Northline Construction",

      alt: "Northline Construction",

      isDemo: true,

      featured: true,

      wordmarkLines: ["NORTHLINE", "CONSTRUCTION"],

    },

    {

      id: "demo-summit",

      name: "Summit Build Group",

      alt: "Summit Build Group",

      isDemo: true,

      wordmarkLines: ["SUMMIT", "BUILD GROUP"],

    },

    {

      id: "demo-cedar",

      name: "Cedar Ridge Projects",

      alt: "Cedar Ridge Projects",

      isDemo: true,

      wordmarkLines: ["CEDAR RIDGE", "PROJECTS"],

    },

    {

      id: "demo-apex",

      name: "Apex Civil Works",

      alt: "Apex Civil Works",

      isDemo: true,

      wordmarkLines: ["APEX", "CIVIL WORKS"],

    },

    {

      id: "demo-ironwood",

      name: "Ironwood Construction",

      alt: "Ironwood Construction",

      isDemo: true,

      wordmarkLines: ["IRONWOOD", "CONSTRUCTION"],

    },

    {

      id: "demo-stonebridge",

      name: "Stonebridge Projects",

      alt: "Stonebridge Projects",

      isDemo: true,

      wordmarkLines: ["STONEBRIDGE", "PROJECTS"],

    },

  ] satisfies CustomerLogo[],



  caseStudies: [

    {

      slug: "northline-construction",

      customerName: "Northline Construction",

      contractorType: "Commercial General Contractor",

      projectType: "Commercial Construction",

      headline: "Connecting project operations from planning through financial closeout",

      summary:

        "Northline Construction sought a single operating view across project teams, field updates, and financial workflows.",

      challenge:

        "Project information, field updates, and financial visibility were managed across disconnected workflows.",

      approach: "Connected project, field, and financial workflows in one operating environment on VertexBuild.",

      outcome: "Improved visibility across project operations (illustrative demo outcome).",

      featured: true,

      isDemo: true,

      imageSrc: photos.aerial,

      imageAlt: "Commercial building construction project",

      customerContext:
        "Northline Construction is a commercial general contractor running multi-phase projects that require coordinated project, field, and financial workflows.",

      workflowSteps: [
        { label: "Project teams" },
        { label: "VertexBuild" },
        { label: "Field & financial workflows" },
        { label: "Operational visibility" },
      ],

      capabilities: [
        {
          name: "Projects",
          context: "Single project context for schedules, documents, and team activity.",
          href: `${ROUTES.features}/projects`,
        },
        {
          name: "Documents",
          context: "Controlled document flow tied to project milestones.",
          href: `${ROUTES.features}/documents`,
        },
        {
          name: "Job Cost",
          context: "Job cost visibility aligned with field and project updates.",
          href: `${ROUTES.features}/budget-job-cost`,
        },
        {
          name: "Billing",
          context: "Billing workflows connected to project and cost status.",
          href: `${ROUTES.features}/billing`,
        },
      ],

      exploreLinks: [
        { label: "Project management capabilities", href: `${ROUTES.features}/projects` },
        { label: "Commercial construction solutions", href: ROUTES.solutionsCommercial },
      ],

      narrativeStages: demoNarrative(
        "Project information, field updates, and financial visibility were managed across disconnected workflows.",
        "Connected project, field, and financial workflows in one operating environment on VertexBuild.",
        "Improved visibility across project operations (illustrative demo outcome).",
      ),

    },

    {

      slug: "summit-build-group",

      customerName: "Summit Build Group",

      contractorType: "Specialty Contractor",

      projectType: "Commercial Interiors",

      headline: "Clearer coordination between field crews and office teams",

      summary: "Summit Build Group needed tighter handoffs between daily field activity and project controls.",

      challenge: "Field updates and project documentation lived in separate tools with delayed reconciliation.",

      approach: "Connected field logs, documents, and project schedules on VertexBuild.",

      outcome: "More consistent project activity visibility across teams (illustrative demo outcome).",

      isDemo: true,

      imageSrc: photos.commercialInterior,

      imageAlt: "Commercial construction project",

      customerContext:
        "Summit Build Group is a specialty contractor focused on commercial interiors where field crews and office teams must stay aligned on daily activity.",

      workflowSteps: [
        { label: "Field activity" },
        { label: "VertexBuild" },
        { label: "Project controls" },
        { label: "Financial visibility" },
      ],

      capabilities: [
        {
          name: "Daily Logs",
          context: "Field activity captured in workflows shared with project controls.",
          href: `${ROUTES.features}/daily-logs`,
        },
        {
          name: "Documents",
          context: "Project documentation connected to daily field updates.",
          href: `${ROUTES.features}/documents`,
        },
        {
          name: "Scheduling",
          context: "Schedules aligned with field reporting and office coordination.",
          href: `${ROUTES.features}/scheduling`,
        },
      ],

      exploreLinks: [
        { label: "Field operations capabilities", href: `${ROUTES.features}/daily-logs` },
        { label: "Specialty contractor solutions", href: ROUTES.solutionsSpecialtyContractors },
      ],

      narrativeStages: demoNarrative(
        "Field updates and project documentation lived in separate tools with delayed reconciliation.",
        "Connected field logs, documents, and project schedules on VertexBuild.",
        "More consistent project activity visibility across teams (illustrative demo outcome).",
      ),

    },

    {

      slug: "cedar-ridge-projects",

      customerName: "Cedar Ridge Projects",

      contractorType: "Residential Construction",

      projectType: "Production Home Building",

      headline: "Standardizing delivery workflows across active communities",

      summary: "Cedar Ridge Projects runs multiple residential communities with shared operational patterns.",

      challenge: "Scheduling, selections, and job-cost visibility were difficult to compare across projects.",

      approach: "Unified project and financial workflows with shared templates on VertexBuild.",

      outcome: "Stronger cross-project operational consistency (illustrative demo outcome).",

      isDemo: true,

      imageSrc: photos.residentialDevelopment,

      imageAlt: "Residential construction project",

      customerContext:
        "Cedar Ridge Projects builds production home communities and needs repeatable operational patterns across active projects.",

      workflowSteps: [
        { label: "Community projects" },
        { label: "VertexBuild" },
        { label: "Shared templates" },
        { label: "Cross-project consistency" },
      ],

      capabilities: [
        {
          name: "Projects",
          context: "Standard project templates across residential communities.",
          href: `${ROUTES.features}/projects`,
        },
        {
          name: "Scheduling",
          context: "Production schedules compared across active communities.",
          href: `${ROUTES.features}/scheduling`,
        },
        {
          name: "Job Cost",
          context: "Job-cost patterns visible across projects for leadership reviews.",
          href: `${ROUTES.features}/budget-job-cost`,
        },
      ],

      exploreLinks: [
        { label: "Residential construction solutions", href: ROUTES.solutionsResidential },
        { label: "Explore project management", href: `${ROUTES.features}/projects` },
      ],

      narrativeStages: demoNarrative(
        "Scheduling, selections, and job-cost visibility were difficult to compare across projects.",
        "Unified project and financial workflows with shared templates on VertexBuild.",
        "Stronger cross-project operational consistency (illustrative demo outcome).",
      ),

    },

    {

      slug: "apex-civil-works",

      customerName: "Apex Civil Works",

      contractorType: "Civil / Infrastructure",

      projectType: "Infrastructure",

      headline: "Aligning field production with cost and billing controls",

      summary: "Apex Civil Works needed field production data to inform job cost and billing workflows.",

      challenge: "Production reporting and financial controls were updated on different cycles.",

      approach: "Linked field production, job cost, and billing workflows in VertexBuild.",

      outcome: "Tighter alignment between field activity and financial status (illustrative demo outcome).",

      isDemo: true,

      imageSrc: photos.civilInfrastructure,

      imageAlt: "Civil infrastructure construction project",

      customerContext:
        "Apex Civil Works delivers civil and infrastructure projects where field production must inform job cost and billing cycles.",

      workflowSteps: [
        { label: "Field production" },
        { label: "VertexBuild" },
        { label: "Job cost & billing" },
        { label: "Financial alignment" },
      ],

      capabilities: [
        {
          name: "Daily Logs",
          context: "Production reporting connected to cost and billing workflows.",
          href: `${ROUTES.features}/daily-logs`,
        },
        {
          name: "Job Cost",
          context: "Job cost updated in rhythm with field production data.",
          href: `${ROUTES.features}/budget-job-cost`,
        },
        {
          name: "Billing",
          context: "Billing controls aligned with production and cost status.",
          href: `${ROUTES.features}/billing`,
        },
      ],

      exploreLinks: [
        { label: "Civil / infrastructure solutions", href: ROUTES.solutionsCivil },
        { label: "Financial management capabilities", href: `${ROUTES.features}/budget-job-cost` },
      ],

      narrativeStages: demoNarrative(
        "Production reporting and financial controls were updated on different cycles.",
        "Linked field production, job cost, and billing workflows in VertexBuild.",
        "Tighter alignment between field activity and financial status (illustrative demo outcome).",
      ),

    },

  ] satisfies CaseStudyRecord[],



  testimonials: [

    {

      id: "demo-t-1",

      quote:

        "VertexBuild gives our teams one connected place to manage the work that used to live across multiple systems.",

      name: "Jordan Reed",

      role: "Operations Director",

      company: "Northline Construction",

      isDemo: true,

    },

    {

      id: "demo-t-2",

      quote: "We have a much clearer view of project activity and financial status across the business.",

      name: "Morgan Ellis",

      role: "Project Controller",

      company: "Summit Build Group",

      isDemo: true,

    },

    {

      id: "demo-t-3",

      quote: "Connected workflows help our teams stay aligned from the field to financial closeout.",

      name: "Alex Chen",

      role: "Director of Operations",

      company: "Cedar Ridge Projects",

      isDemo: true,

    },

  ] satisfies CustomerTestimonialRecord[],



  metrics: [

    {

      id: "demo-m-1",

      value: "32%",

      label: "Administrative effort",

      context: "Illustrative reduction in administrative effort across connected workflows.",

      customerName: "Northline Construction",

      isDemo: true,

    },

    {

      id: "demo-m-2",

      value: "24%",

      label: "Workflow turnaround",

      context: "Illustrative improvement in workflow turnaround for cross-team handoffs.",

      customerName: "Summit Build Group",

      isDemo: true,

    },

    {

      id: "demo-m-3",

      value: "18%",

      label: "Project visibility",

      context: "Illustrative improvement in project visibility for leadership reviews.",

      customerName: "Cedar Ridge Projects",

      isDemo: true,

    },

    {

      id: "demo-m-4",

      value: "3.2 hrs",

      label: "Weekly time saved per workflow",

      context: "Illustrative weekly time saved per workflow for design demonstration purposes.",

      customerName: "Apex Civil Works",

      isDemo: true,

    },

  ] satisfies RoiMetricRecord[],



  heroEcosystemCustomers: [
    {
      id: "demo-northline",
      line1: "NORTHLINE",
      line2: "CONSTRUCTION",
      segment: "Commercial general contractor",
      isDemo: true,
    },
    {
      id: "demo-summit",
      line1: "SUMMIT",
      line2: "BUILD GROUP",
      segment: "Specialty contractor",
      isDemo: true,
    },
    {
      id: "demo-cedar",
      line1: "CEDAR RIDGE",
      line2: "PROJECTS",
      segment: "Residential construction",
      isDemo: true,
    },
    {
      id: "demo-apex",
      line1: "APEX",
      line2: "CIVIL WORKS",
      segment: "Civil / infrastructure",
      isDemo: true,
    },
    {
      id: "demo-ironwood",
      line1: "IRONWOOD",
      line2: "CONSTRUCTION",
      segment: "Commercial construction",
      isDemo: true,
    },
    {
      id: "demo-stonebridge",
      line1: "STONEBRIDGE",
      line2: "PROJECTS",
      segment: "Production home building",
      isDemo: true,
    },
  ] satisfies HeroEcosystemCustomer[],

} as const;


