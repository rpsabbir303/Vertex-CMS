/**
 * Drawings feature detail — DWG module.
 * Source: Register (Drawings, Drawing markups, Current revision for field)
 * + featureAreas howItWorks / outcomes. Depends on DOC.
 *
 * No offline drawing claims, auto-markup AI, BIM invent, or unsupported integrations.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const FIELD_OPS = `${ROUTES.features}#field-operations`;
const FO = "Field Operations";
const PM = "Project Management";

export const drawingsFeatureDetail = {
  meta: {
    title: "Drawings | VertexBuild Features",
    description:
      "Centralize construction drawings, revisions, and markups so field and office teams work from the current drawing set in VertexBuild.",
    canonical: `${ROUTES.features}/drawings`,
  },
  hero: {
    eyebrow: "Field Operations",
    headline: "Keep Teams Working From the Current Drawing Set.",
    supporting:
      "Centralize construction drawings so field and office teams can find the right sheets, track revisions, and stay aligned to current project information.",
    description:
      "Organize drawing sets and sheets, maintain revision history, capture field markups, and keep drawing references connected to the broader project record—so fewer teams work from outdated information.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "drawingWorkspace" as PreviewKey,
  },
  nav: [
    { id: "dwg-overview", label: "Overview" },
    { id: "dwg-capabilities", label: "Capabilities" },
    { id: "dwg-workflow", label: "How It Works" },
    { id: "dwg-revisions", label: "Revisions" },
    { id: "dwg-field", label: "Field Access" },
    { id: "dwg-outcomes", label: "Outcomes" },
    { id: "dwg-explore", label: "Explore" },
  ] as const,
  management: {
    headline: "Centralize Construction Drawings in One Workspace.",
    body: "Give project teams a structured place for drawing sets, sheets, and related project organization so drawings are easier to find and keep current.",
    points: [
      {
        title: "Drawing sets",
        body: "Group related drawings into sets that reflect how the project is organized.",
      },
      {
        title: "Drawing sheets",
        body: "Keep individual sheets accessible within the set and project record.",
      },
      {
        title: "Disciplines & organization",
        body: "Structure drawings by discipline or project area so teams can locate the right information faster.",
      },
      {
        title: "Search and access",
        body: "Help teams find the sheets they need without digging through disconnected file folders.",
      },
    ],
    preview: "drawingRegister" as PreviewKey,
  },
  capabilities: {
    headline: "Key capabilities",
    items: [
      {
        title: "Drawing sets",
        body: "Organize project drawings into sets that match how teams plan and deliver the work.",
      },
      {
        title: "Drawing sheets",
        body: "Maintain individual sheets with the context teams need to reference them on the project.",
      },
      {
        title: "Revision history",
        body: "Keep a clear record of drawing revisions so teams can understand what changed and when.",
      },
      {
        title: "Current drawing control",
        body: "Make it clear which revision is current for field and office use.",
      },
      {
        title: "Search and organization",
        body: "Find drawings by set, sheet, or related project context without relying on scattered folders.",
      },
      {
        title: "Field markups",
        body: "Capture field markups so notes and observations stay connected to the drawing context.",
      },
      {
        title: "Drawing references",
        body: "Reference drawings alongside related project information and field activity.",
      },
      {
        title: "Project-connected drawings",
        body: "Keep drawings connected to the broader VertexBuild project record and workflows.",
      },
    ],
  },
  howItWorks: {
    headline: "How it works",
    body: "Move from organized sets to current field access with a clear drawing workflow.",
    steps: [
      {
        n: "01",
        title: "Organize drawing sets",
        body: "Structure project drawings by set, discipline, or relevant project area.",
      },
      {
        n: "02",
        title: "Upload and manage drawing sheets",
        body: "Keep sheets organized within the set so teams can locate the right information.",
      },
      {
        n: "03",
        title: "Track revisions",
        body: "Maintain revision history as drawings are updated throughout the project.",
      },
      {
        n: "04",
        title: "Identify the current set",
        body: "Make the current revision visible so teams know what to work from.",
      },
      {
        n: "05",
        title: "Reference drawings across workflows",
        body: "Connect drawing context to related project activity such as RFIs, punch items, and daily logs.",
      },
      {
        n: "06",
        title: "Keep field teams on current information",
        body: "Give field and office teams a shared source for the drawings currently in use.",
      },
    ],
    preview: "drawingsWorkflow" as PreviewKey,
  },
  revision: {
    eyebrow: "Revision Control",
    headline: "Know Which Drawing Is Current—And What Came Before.",
    body: "Revision history and current-set visibility help teams reduce outdated drawing usage and keep a more reliable project record.",
    points: [
      {
        title: "Revision history",
        body: "See how drawings evolved across the project lifecycle.",
      },
      {
        title: "Previous vs current",
        body: "Distinguish superseded revisions from the set teams should use now.",
      },
      {
        title: "Current revision visibility",
        body: "Make the active drawing set clear for field and office coordination.",
      },
      {
        title: "Fewer outdated references",
        body: "Reduce the risk of teams working from superseded sheets.",
      },
    ],
    preview: "drawingRevision" as PreviewKey,
  },
  searchMarkups: {
    headline: "Find Drawings, Capture Markups, Keep Context Nearby.",
    body: "Help teams locate sheets quickly, capture field markups, and keep drawing references connected to the work happening on the project.",
    cards: [
      {
        title: "Search and organization",
        body: "Find the right set or sheet without relying on disconnected shared drives.",
      },
      {
        title: "Field markups",
        body: "Document field notes and observations against the drawing context.",
      },
      {
        title: "Drawing references",
        body: "Keep related project information connected when drawings are part of the discussion.",
      },
    ],
    preview: "drawingMarkup" as PreviewKey,
  },
  coordination: {
    headline: "Keep Office and Field Aligned to the Same Drawing Information.",
    body: "Project managers, engineers, superintendents, and field teams need a shared view of current drawings—not separate copies circulating by email or USB.",
    roles: [
      {
        title: "Project managers",
        body: "Maintain visibility into the current set and related project drawing activity.",
      },
      {
        title: "Engineers & design coordination",
        body: "Track revisions and keep drawing updates connected to the project record.",
      },
      {
        title: "Superintendents & field teams",
        body: "Reference current drawings and capture markups while work is happening on site.",
      },
    ],
    preview: "fieldDrawing" as PreviewKey,
  },
  outcomes: {
    headline: "Built for Better Drawing Coordination.",
    cards: [
      {
        title: "Fewer outdated drawing references",
        body: "Help teams avoid relying on superseded sheets and disconnected copies.",
      },
      {
        title: "Faster field coordination",
        body: "Give field teams clearer access to the drawing information they need on site.",
      },
      {
        title: "Clear revision visibility",
        body: "Make it easier to understand what changed and which revision is current.",
      },
      {
        title: "Less rework from outdated information",
        body: "Reduce the risk of field work based on drawings that are no longer current.",
      },
    ],
  },
  connected: {
    headline: "Drawings Connected to Project Workflows.",
    body: "Keep drawing information connected to the project records and field workflows teams already use across VertexBuild.",
    cards: [
      {
        slug: "projects",
        category: PM,
        title: "Projects",
        body: "Connect drawings to the project record and overall project context.",
      },
      {
        slug: "daily-logs",
        category: FO,
        title: "Daily Logs",
        body: "Reference current drawings while documenting daily field activity.",
      },
      {
        slug: "rfis",
        category: PM,
        title: "RFIs",
        body: "Connect drawing references with project questions and clarifications.",
      },
      {
        slug: "submittals",
        category: PM,
        title: "Submittals",
        body: "Keep drawing-related information connected to submittal review workflows.",
      },
      {
        slug: "punch",
        category: FO,
        title: "Punch",
        body: "Use drawing references when tracking field items and completion work.",
      },
      {
        slug: "documents",
        category: PM,
        title: "Documents",
        body: "Keep drawings connected to the broader project document set.",
      },
    ],
  },
  highlight: {
    headline: "Always Know Which Drawing Is Current.",
    body: "Give every team a clear source for the drawings currently in use—so field work stays aligned with the latest project information.",
    preview: "drawingRevision" as PreviewKey,
  },
  fieldOps: {
    eyebrow: "Field Operations",
    headline: "Everything Your Field Team Needs to Stay Connected.",
    body: "Explore the connected Field Operations capabilities available across VertexBuild.",
    activeSlug: "drawings",
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
    headline: "Keep Every Team Working From the Right Drawing.",
    supporting:
      "Give field and office teams a clearer way to organize drawing sets, track revisions, and stay aligned to current project information.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
