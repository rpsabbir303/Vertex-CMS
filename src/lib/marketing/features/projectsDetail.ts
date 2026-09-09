/**
 * Projects feature detail page — approved Project Management / Projects capabilities only.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import { featureCategoryPath } from "./categories";
import type { PreviewKey } from "./register";

export const projectsFeatureDetail = {
  meta: {
    title: "Projects | Vertex CMS Features",
    description:
      "Create and manage construction projects from one connected workspace—with status lifecycle, financial summary, phases, team members, and project dashboard visibility in Vertex CMS.",
    canonical: `${ROUTES.features}/projects`,
  },
  hero: {
    eyebrow: "Project Management / Projects",
    headline: "Every project, connected from start to closeout.",
    supporting:
      "Create and manage construction projects from one connected workspace, with the information, people and project activity your team needs in one place.",
    primary: { label: "Explore Vertex CMS", href: ROUTES.features },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "project" as PreviewKey,
  },
  workspace: {
    headline: "Everything your project team needs, in one place.",
    body: "A project is the central container for project information, phases, team members, and operational visibility—so your team works from the same project record.",
    highlights: [
      { label: "Project record", detail: "Core project information in one workspace" },
      { label: "Phases", detail: "WBS phases tied to the project" },
      { label: "Members", detail: "Team assignment on the project" },
      { label: "Visibility", detail: "Status and project indicators at a glance" },
    ],
    preview: "project" as PreviewKey,
  },
  create: {
    headline: "Start every project with the right foundation.",
    body: "Set up projects with the information your team needs from day one—so type, location, dates, team, financials, and retainage stay connected to the project record.",
    fields: ["Project type", "Location", "Dates", "Team", "Financial information", "Retainage"],
    preview: "projectCreate" as PreviewKey,
  },
  lifecycle: {
    headline: "Track every project through its lifecycle.",
    body: "Move projects through a clear status lifecycle so portfolio and project teams share the same view of where work stands.",
    statuses: [
      "Pre-construction",
      "Bidding",
      "Awarded",
      "Active",
      "On hold",
      "Completed",
      "Cancelled",
    ] as const,
  },
  dashboard: {
    headline: "Know what is happening before you have to ask.",
    body: "The project dashboard surfaces project-level indicators so cost, schedule, safety, RFIs, submittals, and punch stay visible on the project workspace.",
    indicators: [
      "Cost variance",
      "Schedule variance",
      "Safety score",
      "Open RFIs",
      "Submittal status",
      "Punch count",
    ],
    preview: "projectDashboard" as PreviewKey,
  },
  financial: {
    headline: "Keep project financials in view.",
    body: "Project financial summary keeps contract and billing context on the project—without replacing dedicated financial workflows.",
    fields: [
      "Original contract",
      "Revised contract",
      "Billed to date",
      "Paid to date",
      "Retainage held",
    ],
    preview: "projectFinancial" as PreviewKey,
  },
  phases: {
    headline: "Organize the work. Keep the right people connected.",
    body: "Structure delivery with WBS phases and assign team members so ownership stays clear as the project moves forward.",
    points: ["WBS phases on the project", "Team assignment by role and responsibility"],
    preview: "projectPhases" as PreviewKey,
  },
  switcher: {
    headline: "Move between active projects without losing context.",
    body: "Use the project switcher to navigate across active projects quickly—so teams can jump between workspaces without rebuilding context from scratch.",
    preview: "projectSwitcher" as PreviewKey,
  },
  workflow: {
    headline: "One project workspace. Connected from setup to closeout.",
    supporting:
      "Keep project setup, phases, operations, financial visibility, and status connected in the same project record.",
    steps: [
      "Project Setup",
      "Phases & Team",
      "Project Operations",
      "Financial Visibility",
      "Project Status",
      "Closeout",
    ] as const,
  },
  related: {
    eyebrow: "In Project Management",
    headline: "Explore related project workflows",
    categoryHref: featureCategoryPath("project-management"),
    categoryLabel: "Project Management",
    slugs: ["scheduling", "documents", "rfis", "submittals", "change-orders"] as const,
  },
  finalCta: {
    headline: "Bring every project into one connected workspace.",
    supporting:
      "Give your team a clearer view of projects, people, phases and performance with Vertex CMS.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Features", href: ROUTES.features },
  },
} as const;
