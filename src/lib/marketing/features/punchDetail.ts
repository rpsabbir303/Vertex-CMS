/**
 * Punch feature detail — PUNCH module.
 * Source: Register (Punch lists, Punch list items, Status tracking)
 * + featureAreas howItWorks / outcomes.
 *
 * No GPS tracking, AI auto-detection, offline guarantees, or payroll claims.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const FIELD_OPS = `${ROUTES.features}#field-operations`;
const FO = "Field Operations";
const PM = "Project Management";

export const punchFeatureDetail = {
  meta: {
    title: "Punch | VertexBuild Features",
    description:
      "Create, assign, and track punch list items from identification to completion with status visibility in VertexBuild.",
    canonical: `${ROUTES.features}/punch`,
  },
  hero: {
    eyebrow: "Field Operations",
    headline: "Punch",
    supporting: "Track, assign, and close out field issues before they become bigger project problems.",
    description:
      "Create, assign, and manage punch items from one connected workspace. Give teams a clear view of what needs attention, where it is located, who owns it, and whether it has been resolved.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "punchDashboard" as PreviewKey,
  },
  nav: [
    { id: "punch-overview", label: "Overview" },
    { id: "punch-outcomes", label: "Outcomes" },
    { id: "punch-dashboard", label: "Dashboard" },
    { id: "punch-field", label: "Field Capture" },
    { id: "punch-closeout", label: "Closeout" },
    { id: "punch-workflows", label: "Workflows" },
    { id: "punch-explore", label: "Explore" },
  ] as const,
  capabilities: {
    headline: "Key capabilities",
    items: [
      {
        title: "Punch item creation",
        body: "Create punch items directly from the field with the relevant project and location context.",
      },
      {
        title: "Assignment and ownership",
        body: "Assign issues to the right person or trade and make responsibility clear.",
      },
      {
        title: "Priority and due dates",
        body: "Identify urgent work and track when each item needs to be resolved.",
      },
      {
        title: "Status tracking",
        body: "Move punch items through clear states from open to completed.",
      },
      {
        title: "Photos and supporting details",
        body: "Attach field photos and notes so teams understand exactly what needs to be addressed.",
      },
      {
        title: "Location-based tracking",
        body: "Keep punch items connected to the relevant area, room, drawing or project location.",
      },
      {
        title: "Closeout visibility",
        body: "See what remains open and what has already been resolved.",
      },
      {
        title: "Project-connected punch list",
        body: "Keep punch activity connected to the broader project record and related workflows.",
      },
    ],
  },
  howItWorks: {
    headline: "How it works",
    steps: [
      {
        n: "01",
        title: "Capture the issue",
        body: "Record punch items while walking the project and capture the necessary details.",
      },
      {
        n: "02",
        title: "Assign responsibility",
        body: "Route each item to the appropriate person or trade with clear ownership.",
      },
      {
        n: "03",
        title: "Track progress",
        body: "Monitor open items, priorities and due dates from one shared view.",
      },
      {
        n: "04",
        title: "Close the loop",
        body: "Confirm completed work and keep the project record aligned with field conditions.",
      },
    ],
    preview: "punchAssign" as PreviewKey,
  },
  outcomes: {
    headline: "Keep punch work moving toward closeout.",
    body: "Give field and project teams a shared view of outstanding work so issues are resolved faster and fewer items get lost during closeout.",
    cards: [
      {
        title: "Fewer unresolved items",
        body: "Keep outstanding field issues visible until they are completed.",
      },
      {
        title: "Clear ownership",
        body: "Make it obvious who is responsible for each punch item.",
      },
      {
        title: "Faster closeout",
        body: "Help teams prioritize and resolve work before final project closeout.",
      },
      {
        title: "Better field visibility",
        body: "Connect punch activity to the project record and current field conditions.",
      },
    ],
  },
  dashboard: {
    headline: "One view of every open punch item.",
    body: "See outstanding work across the project with clear status, priority, ownership and location information.",
    project: "Riverside Medical Center",
    metrics: [
      { label: "Open", value: "12" },
      { label: "High Priority", value: "3" },
      { label: "Assigned", value: "19" },
      { label: "Completed", value: "28" },
    ] as const,
    preview: "punchStatus" as PreviewKey,
  },
  fieldBlocks: [
    {
      headline: "Capture issues where the work happens.",
      body: "Give field teams a simple way to record punch items while walking the project, with the context needed for office teams to act quickly.",
      preview: "mobilePunch" as PreviewKey,
      label: "Field punch item",
      reverse: false,
    },
    {
      headline: "Make responsibility clear.",
      body: "Assign each item to the right person or trade so outstanding work has a clear owner and next step.",
      preview: "punchAssign" as PreviewKey,
      label: "Assignment & status",
      reverse: true,
    },
    {
      headline: "Know what still needs attention.",
      body: "Track open, active and completed punch items from a shared project view so teams can focus on the work that remains.",
      preview: "punchDashboard" as PreviewKey,
      label: "Punch list",
      reverse: false,
    },
  ] as const,
  connected: {
    headline: "Punch connected to field operations.",
    body: "Keep punch activity connected to the workflows teams already use across VertexBuild.",
    cards: [
      {
        slug: "daily-logs",
        category: FO,
        title: "Daily Logs",
        body: "Connect punch items with daily field activity and project records.",
      },
      {
        slug: "drawings",
        category: FO,
        title: "Drawings",
        body: "Reference relevant drawings and locations when addressing field issues.",
      },
      {
        slug: "rfis",
        category: PM,
        title: "RFIs",
        body: "Connect punch-related questions with the appropriate project information.",
      },
      {
        slug: "submittals",
        category: PM,
        title: "Submittals",
        body: "Keep punch work aligned with approved materials and project requirements where applicable.",
      },
      {
        slug: "documents",
        category: PM,
        title: "Documents",
        body: "Reference project documentation when resolving field issues.",
      },
      {
        slug: "safety",
        category: FO,
        title: "Safety",
        body: "Surface field issues that may require safety attention or follow-up.",
      },
    ],
  },
  closeout: {
    headline: "See every outstanding item before closeout.",
    body: "Give project teams a clear picture of unresolved punch work, who owns it, and what needs attention next.",
    stats: [
      { label: "Open Items", value: "12", body: "Outstanding punch items across the project." },
      { label: "Assigned Work", value: "19", body: "Items currently assigned across the project." },
      { label: "Completion", value: "70%", body: "Punch-list completion progress." },
    ] as const,
    preview: "punchCloseout" as PreviewKey,
  },
  useCases: {
    headline: "Built for every stage of field closeout.",
    cards: [
      {
        title: "During field walks",
        body: "Capture issues as teams move through the project.",
      },
      {
        title: "For trade coordination",
        body: "Give each trade clear responsibility for outstanding work.",
      },
      {
        title: "For project managers",
        body: "Monitor unresolved items and overall completion.",
      },
      {
        title: "Before closeout",
        body: "Confirm that remaining work is visible and actively tracked.",
      },
    ],
  },
  fieldOps: {
    eyebrow: "Field Operations",
    headline: "Everything your field team needs to stay connected.",
    body: "Explore the connected Field Operations capabilities available across VertexBuild.",
    activeSlug: "punch",
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
    headline: "Keep every punch item moving toward closeout.",
    supporting:
      "Connect field teams, project managers and outstanding work in one shared project workspace.",
    primary: { label: "Explore Field Operations", href: FIELD_OPS },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
