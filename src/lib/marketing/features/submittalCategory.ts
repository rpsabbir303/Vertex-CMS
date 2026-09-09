/**
 * Submittals category page — SUBM approved capabilities only.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

export const submittalCategory = {
  id: "submittals",
  meta: {
    title: "Submittals | Vertex CMS Features",
    description:
      "Create, organize, review, and track construction submittals with status, reviewers, due dates, and project context in Vertex CMS.",
    canonical: `${ROUTES.features}/submittals`,
  },
  hero: {
    eyebrow: "Submittals",
    headline: "Keep Every Submittal Moving.",
    supporting:
      "Create, organize, review, and track project submittals in one connected construction workflow.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Features", href: ROUTES.features },
    preview: "submittalRegister" as PreviewKey,
  },
  intro: {
    eyebrow: "Submittal coordination",
    headline: "Make Every Submittal Easier to Track.",
    body: "Submittals move through multiple stages and involve multiple people. Vertex CMS keeps submittals organized and gives project teams clear visibility into what has been submitted, who needs to review it, and where each item stands.",
    preview: "submittalFlow" as PreviewKey,
  },
  register: {
    eyebrow: "Submittal Register",
    headline: "See Every Submittal at a Glance.",
    body: "Keep project submittals organized in one register with visibility into status, reviewer, priority, due dates, and progress.",
    cta: { label: "Explore Submittal Register", href: "#submittal-register" },
    preview: "submittalRegister" as PreviewKey,
  },
  create: {
    eyebrow: "Create Submittal",
    headline: "Create Submittals With the Right Information.",
    body: "Capture the information, documents, priority, reviewer, and project context needed to move each submittal through the review process.",
    cta: { label: "Create a Submittal", href: "#submittal-create" },
    preview: "submittalCreate" as PreviewKey,
  },
  detail: {
    eyebrow: "Submittal Detail",
    headline: "Everything About the Submittal, in Context.",
    body: "Give teams a complete view of the submittal, including its details, documents, assigned reviewer, status, due date, and activity.",
    callout: "One clear view from submission to decision.",
    preview: "submittalDetail" as PreviewKey,
  },
  review: {
    eyebrow: "Submittal Review",
    headline: "Give Reviewers a Clear Path to a Decision.",
    body: "Keep the review process structured so reviewers can examine the submitted information, provide feedback, and move the submittal through its current review state.",
    cta: { label: "Explore Submittal Review", href: "#submittal-review" },
    preview: "submittalReview" as PreviewKey,
  },
  status: {
    headline: "Know What Needs Attention.",
    body: "Clear status, priority, reviewer, and due-date information helps project teams focus on the submittals that need attention.",
    statuses: ["Open", "In Review", "Approved", "Revise & Resubmit"] as const,
    priorities: ["Low", "Medium", "High"] as const,
    preview: "submittalStatus" as PreviewKey,
  },
  workflow: {
    headline: "From Submission to Review, Without Losing Context.",
    supporting:
      "Keep each step visible so teams can understand where a submittal stands and what needs to happen next.",
    steps: [
      "Submittal created",
      "Assigned to reviewer",
      "Documents reviewed",
      "Comments / decision",
      "Status updated",
    ] as const,
    preview: "submittalWorkflow" as PreviewKey,
  },
  documents: {
    eyebrow: "Connected Documents",
    headline: "Keep Supporting Information With the Submittal.",
    body: "Keep relevant project documents and attachments available within the submittal context so reviewers can understand what they are reviewing without losing important information.",
    preview: "submittalDocs" as PreviewKey,
  },
  field: {
    headline: "Keep Project Teams Aligned.",
    body: "Give project and field teams a clearer view of submittal status, review progress, and information that needs attention.",
    preview: "submittalField" as PreviewKey,
  },
  benefits: [
    {
      title: "Clear ownership",
      body: "Make it clear who is responsible for reviewing each submittal.",
    },
    {
      title: "Better visibility",
      body: "See where each submittal stands and what needs attention.",
    },
    {
      title: "Organized review",
      body: "Keep documents, comments, status, and review information together.",
    },
    {
      title: "Project context",
      body: "Keep submittal information connected to the project workflow.",
    },
  ],
  related: {
    headline: "Submittals Work Better When Project Information Is Connected.",
    cards: [
      {
        title: "Documents & Drawings",
        body: "Keep drawings, specs, and project files with controlled revisions.",
        href: `${ROUTES.features}/documents-project-information`,
      },
      {
        title: "RFIs",
        body: "Track project questions with status, responses, and context.",
        href: `${ROUTES.features}/rfis`,
      },
      {
        title: "Project Management",
        body: "Keep project workflows connected from setup through delivery.",
        href: `${ROUTES.features}/project-management`,
      },
      {
        title: "Daily Logs",
        body: "Capture field activity and keep it synced to the project record.",
        href: `${ROUTES.features}/daily-logs`,
      },
    ],
  },
  finalCta: {
    headline: "Keep Every Submittal Moving Forward.",
    supporting:
      "Bring submittal creation, review, tracking, and project information together in one connected construction workflow.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Features", href: ROUTES.features },
  },
} as const;
