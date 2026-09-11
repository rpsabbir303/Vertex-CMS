/**
 * Leads feature detail — Business Growth module.
 * Documented: lead capture into opportunities, pipeline stages, go/no-go scoring,
 * win/loss tracking, website inquiry → lead, and handoff into project delivery.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const GROWTH = `${ROUTES.features}#growth`;
const BG_LABEL = "Business Growth";
const PM = "Project Management";
const FIN = "Financial Management";

export const leadsFeatureDetail = {
  meta: {
    title: "Leads | Vertex CMS Features",
    description:
      "Capture, qualify, and manage construction leads in Vertex CMS — with pipeline stages, go/no-go scoring, follow-ups, win/loss tracking, and a connected path into project delivery.",
    canonical: `${ROUTES.features}/leads`,
  },
  hero: {
    eyebrow: "Business Growth · Leads",
    headline: "Turn new opportunities into organized next steps.",
    supporting:
      "Capture, qualify, and manage construction leads in one connected workspace—so your team always knows what is active, what needs attention, and what should happen next.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Business Growth", href: GROWTH },
    preview: "leadsHero" as PreviewKey,
  },
  pipeline: {
    headline: "Know where every lead stands.",
    body: "Give your team a clear view of active opportunities, current ownership, next actions, and pipeline movement without searching through disconnected spreadsheets or inboxes.",
    preview: "leadsWorkspace" as PreviewKey,
  },
  workflow: {
    headline: "Move from first contact to qualified opportunity.",
    body: "Capture the inquiry, qualify the work, keep the next conversation attached to the lead, then convert when the pursuit is ready to move.",
    preview: "leadsWorkflow" as PreviewKey,
    steps: [
      {
        n: "01",
        title: "Capture",
        body: "Bring new opportunities into one place from inquiries, referrals, website forms, and other sources.",
      },
      {
        n: "02",
        title: "Qualify",
        body: "Record project type, location, estimated value, timeline, and fit — including go/no-go scoring on the pursuit.",
      },
      {
        n: "03",
        title: "Follow up",
        body: "Keep conversations, tasks, notes, and next steps connected to the lead.",
      },
      {
        n: "04",
        title: "Convert",
        body: "Move qualified opportunities into the next stage when the project is ready to move forward.",
      },
    ],
  },
  profile: {
    headline: "See the opportunity behind the lead.",
    body: "A lead is more than a contact record. Keep company, project type, location, estimated value, owner, probability, notes, and next follow-up on one construction opportunity.",
    preview: "leadsDetail" as PreviewKey,
    fields: [
      "Company and primary contact",
      "Project type and location",
      "Estimated value and expected start",
      "Lead source and assigned owner",
      "Probability, notes, and recent activity",
    ],
  },
  activity: {
    headline: "Turn lead activity into business context.",
    body: "See the history of an opportunity — inquiry received, assignment, calls, notes, status changes, and scheduled follow-ups — without reconstructing it from inboxes or spreadsheets.",
    preview: "leadsActivity" as PreviewKey,
  },
  qualify: {
    headline: "Qualify better before you chase.",
    body: "Prioritize pursuits based on project fit and readiness. Documented go/no-go scoring helps teams decide which opportunities to advance, review, or decline.",
    preview: "leadsQualify" as PreviewKey,
    fields: [
      "Project type",
      "Project location",
      "Estimated contract value",
      "Expected start",
      "Project stage",
      "Lead source",
      "Decision maker",
      "Probability",
      "Qualification status",
    ],
  },
  followUp: {
    headline: "Never lose the next step.",
    body: "Keep follow-up date, owner, task, lead status, and last contact on the opportunity — including overdue and upcoming states — so the pipeline does not depend on memory.",
    preview: "leadsFollowUp" as PreviewKey,
  },
  history: {
    headline: "Keep every lead conversation connected.",
    body: "Record calls, notes, meetings, follow-ups, and internal comments in chronological order on the lead. Activity stays attached to the opportunity — not scattered across separate note files.",
    preview: "leadsNotes" as PreviewKey,
  },
  priority: {
    headline: "Focus your team on the opportunities that matter.",
    body: "Scan value, stage, probability, next action, owner, and expected close. Surface high-priority, at-risk, and recently qualified pursuits that need attention.",
    preview: "leadsPriority" as PreviewKey,
  },
  handoff: {
    headline: "Turn qualified opportunities into project-ready work.",
    body: "Leads are not isolated records. Capture, qualify, estimate, record the win, then create the project so awarded work continues inside Vertex CMS.",
    preview: "leadsHandoff" as PreviewKey,
    steps: ["Lead", "Qualified opportunity", "Estimate / proposal", "Awarded work", "Project"],
  },
  dash: {
    headline: "Understand your pipeline before the next opportunity arrives.",
    body: "See total and qualified pipeline value, won and lost outcomes, expected close, and leads by stage — the visibility documented for the growth pipeline.",
    preview: "leadsPipelineDash" as PreviewKey,
  },
  sources: {
    headline: "Know where your best opportunities come from.",
    body: "Track source, lead count, qualified count, conversion, and pipeline value. Website inquiries can create lead records from the connected company website.",
    preview: "leadsSources" as PreviewKey,
  },
  darkShowcase: {
    headline: "Every opportunity. One connected view.",
    body: "Keep your pipeline, follow-ups, opportunity context, and project handoff connected in one place.",
    preview: "leadsDarkStory" as PreviewKey,
  },
  outcomes: {
    headline: "Built for a more connected path from lead to project.",
    cards: [
      {
        n: "01",
        title: "Fewer missed opportunities",
        body: "Incoming inquiries land in one pipeline instead of a disconnected spreadsheet.",
      },
      {
        n: "02",
        title: "Clearer ownership",
        body: "Every active lead has an owner, a stage, and a visible next step.",
      },
      {
        n: "03",
        title: "Faster follow-up",
        body: "Due, overdue, and upcoming follow-ups stay attached to the opportunity.",
      },
      {
        n: "04",
        title: "Better pipeline visibility",
        body: "See qualified value, win/loss outcomes, and where work is stalling.",
      },
    ],
  },
  connectedWorkflows: {
    headline: "Leads connected to the rest of your business.",
    body: "Lead capture feeds the same platform that already manages customers, estimates, projects, and delivery.",
    cards: [
      {
        slug: "crm",
        category: BG_LABEL,
        title: "CRM",
        body: "Leads capture into preconstruction CRM opportunities and pipeline stages.",
      },
      {
        slug: "website-builder",
        category: BG_LABEL,
        title: "Website Builder",
        body: "Website contact submissions can create lead records in Vertex CMS.",
      },
      {
        slug: "customer-portals",
        category: BG_LABEL,
        title: "Customer Portals",
        body: "Won work can later give owners and partners scoped project access.",
      },
      {
        slug: "projects",
        category: PM,
        title: "Projects",
        body: "Awarded opportunities transition into the operating project record.",
      },
      {
        slug: "estimating",
        category: "Preconstruction",
        title: "Estimating",
        body: "Qualified pursuits move into estimating and proposal work on the same platform.",
      },
      {
        slug: "billing",
        category: FIN,
        title: "Billing",
        body: "After the project exists, billing continues on the work that started as a lead.",
      },
    ],
  },
  explore: {
    eyebrow: BG_LABEL,
    headline: "Explore related Business Growth workflows.",
    body: "Connect lead capture with CRM, public web presence, and customer portals.",
    activeSlug: "leads",
    cards: [
      {
        slug: "crm",
        category: BG_LABEL,
        title: "CRM",
        body: "Manage opportunities, customer records, and pipeline visibility in one connected workspace.",
      },
      {
        slug: "leads",
        category: BG_LABEL,
        title: "Leads",
        body: "Capture, qualify, and move construction opportunities forward.",
      },
      {
        slug: "website-builder",
        category: BG_LABEL,
        title: "Website Builder",
        body: "Publish tenant website pages and capture inquiries as lead records.",
      },
      {
        slug: "customer-portals",
        category: BG_LABEL,
        title: "Customer Portals",
        body: "Give owners, subs, vendors, and architects scoped access to project information.",
      },
    ],
  },
  finalCta: {
    headline: "Turn more opportunities into work.",
    supporting: "Give your team the visibility and context to move every qualified opportunity forward.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Business Growth", href: GROWTH },
  },
} as const;
