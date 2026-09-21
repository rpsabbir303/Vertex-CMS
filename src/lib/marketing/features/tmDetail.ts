/**
 * T&M feature detail — TM module.
 * Source: Register (T&M tickets, T&M ticket lines) + featureAreas howItWorks.
 * Line items cover labor, material, and related work.
 * No GPS/fleet/telematics, payroll, auto-billing, or auto Change Order creation.
 * Sample costs in mockups are illustrative only.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const FIELD_OPS = `${ROUTES.features}#field-operations`;
const FO = "Field Operations";
const PM = "Project Management";

export const tmFeatureDetail = {
  meta: {
    title: "T&M — Time & Materials | VertexBuild Features",
    description:
      "Capture time & material field tickets with labor, material, and equipment line items connected to the project in VertexBuild.",
    canonical: `${ROUTES.features}/t-and-m`,
  },
  hero: {
    eyebrow: "Field Operations",
    headline: "Time & Materials",
    supporting: "Capture field time and material usage with the project context needed to keep costs accurate.",
    description:
      "Record labor, equipment, materials and field activity as work happens. Keep time and material records connected to the project so teams can review usage, document work and maintain better cost visibility.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "tmTicket" as PreviewKey,
  },
  nav: [
    { id: "tm-overview", label: "Overview" },
    { id: "tm-outcomes", label: "Outcomes" },
    { id: "tm-activity", label: "Activity" },
    { id: "tm-capture", label: "Capture" },
    { id: "tm-review", label: "Review" },
    { id: "tm-workflows", label: "Workflows" },
    { id: "tm-explore", label: "Explore" },
  ] as const,
  capabilities: {
    headline: "Key capabilities",
    items: [
      {
        title: "Time entry",
        body: "Record field labor hours against the correct project and activity.",
      },
      {
        title: "Material tracking",
        body: "Capture materials used in the field with quantities and supporting details.",
      },
      {
        title: "Equipment usage",
        body: "Track equipment time and usage connected to project work.",
      },
      {
        title: "Crew and worker records",
        body: "Keep labor entries associated with the appropriate workers or crews.",
      },
      {
        title: "Project context",
        body: "Keep every T&M record connected to the relevant project and field activity.",
      },
      {
        title: "Notes and supporting details",
        body: "Document what happened, what was used and why the entry was created.",
      },
      {
        title: "Review and approval",
        body: "Give project teams visibility into submitted records before they are finalized.",
      },
      {
        title: "Cost visibility",
        body: "Help teams understand labor, material and equipment usage as work progresses.",
      },
    ],
  },
  howItWorks: {
    headline: "How it works",
    steps: [
      {
        n: "01",
        title: "Record field activity",
        body: "Capture time, materials or equipment usage while work is happening.",
      },
      {
        n: "02",
        title: "Add project context",
        body: "Connect the entry to the correct project, activity and relevant details.",
      },
      {
        n: "03",
        title: "Review submitted records",
        body: "Give project teams a shared view of field-submitted T&M information.",
      },
      {
        n: "04",
        title: "Keep costs connected",
        body: "Use accurate field records to support project cost tracking and downstream workflows.",
      },
    ],
    preview: "tmTicketDetail" as PreviewKey,
  },
  outcomes: {
    headline: "Keep field costs documented as work happens.",
    body: "Give project and field teams a consistent way to capture time and material activity before details are lost or disconnected from the project record.",
    cards: [
      {
        title: "Accurate field records",
        body: "Capture labor, materials and equipment usage while the details are still current.",
      },
      {
        title: "Less manual tracking",
        body: "Reduce disconnected notes, spreadsheets and duplicate entry.",
      },
      {
        title: "Better cost visibility",
        body: "Give project teams clearer insight into field activity affecting project costs.",
      },
      {
        title: "Faster review",
        body: "Keep submitted T&M information organized for quicker project review.",
      },
    ],
  },
  dashboard: {
    headline: "One view of field time and materials.",
    body: "Bring labor, equipment and material activity into one connected view so project teams can understand what is being used in the field.",
    project: "Riverside Medical Center",
    metrics: [
      { label: "Labor Hours", value: "86" },
      { label: "Materials", value: "24 lines" },
      { label: "Equipment", value: "18 hrs" },
      { label: "Total Activity", value: "12 tickets" },
    ] as const,
    preview: "tmDashboard" as PreviewKey,
  },
  fieldBlocks: [
    {
      headline: "Capture time where the work happens.",
      body: "Let field teams record labor hours and crew activity against the correct project while the work is still fresh.",
      preview: "mobileTm" as PreviewKey,
      label: "Mobile time entry",
      reverse: false,
    },
    {
      headline: "Document materials and equipment.",
      body: "Record materials used and equipment activity with quantities and supporting information that project teams can review later.",
      preview: "tmMaterials" as PreviewKey,
      label: "Materials & equipment",
      reverse: true,
      secondaryPreview: "tmEquipment" as PreviewKey,
    },
    {
      headline: "Keep every entry connected.",
      body: "Connect T&M records to the project and related field workflows so important cost information does not live in disconnected systems.",
      preview: "tmAttachments" as PreviewKey,
      label: "Project-connected ticket",
      reverse: false,
    },
  ] as const,
  review: {
    headline: "Move field records from capture to review.",
    body: "Give project teams a clear workflow for reviewing submitted time and material records before they become part of the broader project record.",
    steps: [
      {
        n: "01",
        title: "Submitted",
        body: "Field team records time, materials or equipment.",
      },
      {
        n: "02",
        title: "Reviewed",
        body: "Project team checks the submitted information.",
      },
      {
        n: "03",
        title: "Approved",
        body: "Validated records are approved for downstream use.",
      },
      {
        n: "04",
        title: "Connected",
        body: "Approved activity remains connected to the project.",
      },
    ],
    preview: "tmReview" as PreviewKey,
  },
  connected: {
    headline: "T&M connected to field operations.",
    body: "Keep time and material records connected to the workflows teams already use across VertexBuild.",
    cards: [
      {
        slug: "daily-logs",
        category: FO,
        title: "Daily Logs",
        body: "Connect T&M activity with daily field records and project updates.",
      },
      {
        slug: "drawings",
        category: FO,
        title: "Drawings",
        body: "Reference the drawing or project area associated with field work.",
      },
      {
        slug: "punch",
        category: FO,
        title: "Punch",
        body: "Connect field work and material activity to issues requiring completion.",
      },
      {
        slug: "rfis",
        category: PM,
        title: "RFIs",
        body: "Keep T&M activity connected to relevant project questions and clarifications.",
      },
      {
        slug: "documents",
        category: PM,
        title: "Documents",
        body: "Maintain supporting project documentation alongside field records.",
      },
      {
        slug: "safety",
        category: FO,
        title: "Safety",
        body: "Keep field activity connected to safety-related project workflows where applicable.",
      },
    ],
  },
  visibility: {
    headline: "Understand field activity before costs drift.",
    body: "Give project teams earlier visibility into labor, material and equipment activity so they can identify changes before they become larger cost issues.",
    panels: [
      {
        title: "Labor",
        body: "Track submitted field hours.",
      },
      {
        title: "Materials",
        body: "Monitor material quantities and usage.",
      },
      {
        title: "Equipment",
        body: "Understand equipment activity.",
      },
      {
        title: "Project impact",
        body: "Keep field activity connected to the broader cost picture.",
      },
    ],
    preview: "tmTicketDetail" as PreviewKey,
  },
  useCases: {
    headline: "Built for the work happening in the field.",
    cards: [
      {
        title: "Daily field work",
        body: "Capture labor, materials and equipment as work progresses.",
      },
      {
        title: "Extra work",
        body: "Document additional field activity with the supporting details needed for review.",
      },
      {
        title: "Project cost tracking",
        body: "Give project teams better visibility into field activity affecting costs.",
      },
      {
        title: "Project closeout",
        body: "Keep field records organized and connected throughout the project lifecycle.",
      },
    ],
  },
  fieldOps: {
    eyebrow: "Field Operations",
    headline: "Everything your field team needs to stay connected.",
    body: "Explore the connected Field Operations capabilities available across VertexBuild.",
    activeSlug: "t-and-m",
    cards: [
      {
        slug: "daily-logs",
        category: FO,
        title: "Daily Logs",
        body: "Daily field logs with weather, manpower, and attachments.",
      },
      {
        slug: "drawings",
        category: FO,
        title: "Drawings",
        body: "Current drawings and markup for field and office teams.",
      },
      {
        slug: "punch",
        category: FO,
        title: "Punch",
        body: "Punch lists and items for quality completion and closeout.",
      },
      {
        slug: "t-and-m",
        category: FO,
        title: "T&M",
        body: "Time & material field tickets and line items.",
      },
      {
        slug: "safety",
        category: FO,
        title: "Safety",
        body: "Incidents, inspections, toolbox talks, and JHA/JSA.",
      },
      {
        slug: "mobile",
        category: FO,
        title: "Mobile",
        body: "Mobile-first field workflows connected to the project.",
      },
    ],
  },
  finalCta: {
    headline: "Keep field time and materials connected.",
    supporting:
      "Give your teams a clearer way to capture field activity and keep project records aligned from the field to the office.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
