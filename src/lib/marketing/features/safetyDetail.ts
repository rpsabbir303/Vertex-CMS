/**
 * Safety feature detail — SAFETY module.
 * Source: Register (Safety incidents, Inspections, Toolbox talks, JHA / JSA)
 * + featureAreas howItWorks / outcomes.
 *
 * No OSHA certification claims, compliance scoring, AI hazard prediction,
 * GPS/wearables, or automatic corrective-action automation.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const FIELD_OPS = `${ROUTES.features}#field-operations`;
const FO = "Field Operations";
const PM = "Project Management";

export const safetyFeatureDetail = {
  meta: {
    title: "Safety | VertexBuild Features",
    description:
      "Document safety observations, inspections, incidents, and corrective actions connected to the project record in VertexBuild.",
    canonical: `${ROUTES.features}/safety`,
  },
  hero: {
    eyebrow: "Field Operations",
    headline: "Safety",
    supporting: "Keep safety information visible, documented, and connected to the work happening in the field.",
    description:
      "Give field and project teams a consistent way to record safety activity, document observations, track follow-up items, and keep important safety information connected to the project record.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "safetyOverview" as PreviewKey,
  },
  nav: [
    { id: "safety-overview", label: "Overview" },
    { id: "safety-outcomes", label: "Outcomes" },
    { id: "safety-activity", label: "Activity" },
    { id: "safety-field", label: "Field Capture" },
    { id: "safety-followup", label: "Follow-up" },
    { id: "safety-workflows", label: "Workflows" },
    { id: "safety-explore", label: "Explore" },
  ] as const,
  capabilities: {
    headline: "Key capabilities",
    items: [
      {
        title: "Safety observations",
        body: "Capture field observations and document conditions that require attention.",
      },
      {
        title: "Safety inspections",
        body: "Keep inspection activity organized and connected to the project.",
      },
      {
        title: "Incident documentation",
        body: "Record relevant safety incidents and supporting information in one place.",
      },
      {
        title: "Corrective actions",
        body: "Track follow-up actions and make responsibility clear.",
      },
      {
        title: "Assignment and ownership",
        body: "Assign safety items to the appropriate person or team.",
      },
      {
        title: "Status tracking",
        body: "Track open, active and completed safety items.",
      },
      {
        title: "Photos and supporting details",
        body: "Document field conditions with photos, notes and relevant project context.",
      },
      {
        title: "Project-connected safety records",
        body: "Keep safety information connected to the project and related field workflows.",
      },
    ],
  },
  howItWorks: {
    headline: "How it works",
    steps: [
      {
        n: "01",
        title: "Record the observation",
        body: "Capture safety observations, inspections or incidents from the field.",
      },
      {
        n: "02",
        title: "Add context",
        body: "Include the location, project details, photos, notes and relevant information.",
      },
      {
        n: "03",
        title: "Assign follow-up",
        body: "Give corrective actions a clear owner and expected next step.",
      },
      {
        n: "04",
        title: "Track to completion",
        body: "Monitor outstanding safety items until the required action is completed.",
      },
    ],
    preview: "safetyActions" as PreviewKey,
  },
  outcomes: {
    headline: "Keep safety work visible from field to office.",
    body: "Give teams a shared view of safety activity so observations, inspections and follow-up actions do not get lost between field and office.",
    cards: [
      {
        title: "Clearer safety visibility",
        body: "Keep safety observations and open actions visible to the right teams.",
      },
      {
        title: "Faster follow-up",
        body: "Give corrective actions clear ownership and status.",
      },
      {
        title: "Better documentation",
        body: "Keep safety records, notes and supporting information organized.",
      },
      {
        title: "Connected project records",
        body: "Keep safety activity connected to the broader project workflow.",
      },
    ],
  },
  dashboard: {
    headline: "See safety activity across the project.",
    body: "Give project teams a current view of observations, inspections, incidents and outstanding corrective actions.",
    project: "Riverside Medical Center",
    metrics: [
      { label: "Open Observations", value: "08" },
      { label: "Inspections", value: "12" },
      { label: "Open Actions", value: "05" },
      { label: "Completed", value: "17" },
    ] as const,
    preview: "safetyOverview" as PreviewKey,
  },
  fieldBlocks: [
    {
      headline: "Capture safety information in the field.",
      body: "Give field teams a practical way to document observations, inspections and incidents while the details are still current.",
      preview: "mobileSafety" as PreviewKey,
      label: "Mobile safety observation",
      reverse: false,
    },
    {
      headline: "Turn observations into action.",
      body: "Connect safety observations with clear corrective actions, ownership and status so issues can move toward resolution.",
      preview: "safetyActions" as PreviewKey,
      label: "Corrective actions",
      reverse: true,
    },
    {
      headline: "Keep project teams informed.",
      body: "Give project and field teams a shared view of current safety activity and unresolved actions.",
      preview: "safetyOverview" as PreviewKey,
      label: "Safety dashboard",
      reverse: false,
    },
  ] as const,
  followUp: {
    headline: "Move safety items from observation to resolution.",
    body: "Create a clear workflow for documenting safety issues and following them through completion.",
    steps: [
      {
        n: "01",
        title: "Observed",
        body: "A field condition or safety concern is recorded.",
      },
      {
        n: "02",
        title: "Assigned",
        body: "The appropriate person or team receives responsibility.",
      },
      {
        n: "03",
        title: "Action Required",
        body: "The corrective work or follow-up is tracked.",
      },
      {
        n: "04",
        title: "Resolved",
        body: "The item is completed and the project record stays current.",
      },
    ],
    preview: "safetyFlow" as PreviewKey,
  },
  connected: {
    headline: "Safety connected to field operations.",
    body: "Keep safety activity connected to the workflows teams already use across VertexBuild.",
    cards: [
      {
        slug: "daily-logs",
        category: FO,
        title: "Daily Logs",
        body: "Connect safety activity with daily field records and project updates.",
      },
      {
        slug: "drawings",
        category: FO,
        title: "Drawings",
        body: "Reference relevant project areas and drawing information when documenting field conditions.",
      },
      {
        slug: "punch",
        category: FO,
        title: "Punch",
        body: "Connect safety-related field issues with outstanding punch work where applicable.",
      },
      {
        slug: "t-and-m",
        category: FO,
        title: "T&M",
        body: "Keep relevant field activity and safety context connected to project records.",
      },
      {
        slug: "documents",
        category: PM,
        title: "Documents",
        body: "Reference project documentation that supports safety workflows.",
      },
      {
        slug: "mobile",
        category: FO,
        title: "Mobile",
        body: "Give field teams access to safety workflows from the jobsite.",
      },
    ],
  },
  visibility: {
    headline: "Know what needs attention before it becomes a bigger problem.",
    body: "Give project teams earlier visibility into open safety observations and corrective actions so they can respond before issues remain unresolved.",
    panels: [
      {
        title: "Open observations",
        body: "Know which safety concerns remain active.",
      },
      {
        title: "Assigned actions",
        body: "See who is responsible for follow-up.",
      },
      {
        title: "Resolution progress",
        body: "Track safety items from open to completed.",
      },
    ],
    preview: "safetyIncident" as PreviewKey,
  },
  useCases: {
    headline: "Built for everyday construction safety.",
    cards: [
      {
        title: "Daily field observations",
        body: "Document conditions and observations during routine field activity.",
      },
      {
        title: "Safety inspections",
        body: "Keep inspection records organized and accessible.",
      },
      {
        title: "Corrective actions",
        body: "Track follow-up work and make ownership clear.",
      },
      {
        title: "Project reviews",
        body: "Give project teams a current view of safety activity and outstanding items.",
      },
    ],
  },
  fieldOps: {
    eyebrow: "Field Operations",
    headline: "Everything your field team needs to stay connected.",
    body: "Explore the connected Field Operations capabilities available across VertexBuild.",
    activeSlug: "safety",
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
    headline: "Keep safety connected to the work.",
    supporting:
      "Give field and project teams a clearer way to document safety activity, track follow-up, and stay aligned across the project.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
