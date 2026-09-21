/**
 * RFIs category page — RFI module approved capabilities only.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

export const rfiCategory = {
  id: "rfis",
  meta: {
    title: "RFIs | VertexBuild Features",
    description:
      "Create, assign, track, and respond to construction RFIs with status, priority, due dates, and project context in VertexBuild.",
    canonical: `${ROUTES.features}/rfis`,
  },
  hero: {
    eyebrow: "RFIs",
    headline: "Keep Every Project Question Moving.",
    supporting:
      "Create, assign, track, and respond to requests for information in one connected construction workflow.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Features", href: ROUTES.features },
    preview: "rfiRegister" as PreviewKey,
  },
  problem: {
    eyebrow: "Keep questions from getting lost",
    headline: "Turn Project Questions Into Clear Actions.",
    body: "RFIs can affect schedules, costs, coordination, and field decisions. VertexBuild gives teams one place to create, assign, track, and respond to RFIs while keeping the project context connected.",
    preview: "rfiFlow" as PreviewKey,
  },
  register: {
    eyebrow: "RFI Register",
    headline: "See Every RFI at a Glance.",
    body: "Keep project RFIs organized in one register with clear visibility into status, priority, assignee, due dates, and response progress.",
    cta: { label: "Explore RFI Register", href: "#rfi-register" },
    preview: "rfiRegister" as PreviewKey,
  },
  create: {
    eyebrow: "Create an RFI",
    headline: "Create Clear Requests With the Right Context.",
    body: "Capture the question, supporting information, priority, assignee, and relevant project details so the right person can respond with the information needed to keep work moving.",
    cta: { label: "Create an RFI", href: "#rfi-create" },
    preview: "rfiCreate" as PreviewKey,
  },
  detail: {
    eyebrow: "RFI Detail",
    headline: "Keep the Full Question in Context.",
    body: "Give project teams a clear view of the RFI, its details, status, assigned users, supporting information, and activity history.",
    label: "Everything around the question, in one place.",
    preview: "rfiDetail" as PreviewKey,
  },
  response: {
    headline: "Move From Question to Response.",
    supporting:
      "Keep RFI communication structured and visible so teams know what needs attention, who owns the response, and where each request stands.",
    steps: ["Create", "Assign", "Review", "Respond", "Resolve"] as const,
    cta: { label: "Explore RFI Workflow", href: "#rfi-workflow" },
    preview: "rfiResponse" as PreviewKey,
  },
  status: {
    headline: "Know What Needs Attention.",
    body: "Clear status and priority information helps teams focus on RFIs that need attention and understand where each request stands.",
    statuses: ["Open", "In Review", "Answered", "Closed"] as const,
    priorities: ["Low", "Medium", "High"] as const,
    preview: "rfiStatus" as PreviewKey,
  },
  context: {
    eyebrow: "Connected Project Information",
    headline: "Keep Every RFI Connected to the Project.",
    body: "Give teams the project context they need when reviewing a question or response. Keep RFIs connected to relevant project information instead of treating them as isolated conversations.",
    preview: "rfiContext" as PreviewKey,
  },
  field: {
    headline: "Keep Questions Moving From the Field.",
    body: "Field teams need a clear way to capture and follow up on project questions while work is happening. Present the RFI workflow in a mobile-friendly construction context.",
    preview: "rfiField" as PreviewKey,
  },
  benefits: [
    {
      title: "Clear ownership",
      body: "Assign RFIs to the right people and make responsibility visible.",
    },
    {
      title: "Better visibility",
      body: "Know which RFIs are open, pending, answered, or closed.",
    },
    {
      title: "Faster coordination",
      body: "Keep questions and responses organized around the project.",
    },
  ],
  related: {
    headline: "RFIs Work Better When Everything Is Connected.",
    cards: [
      {
        title: "Documents & Drawings",
        body: "Keep drawings, specs, and project files with controlled revisions.",
        href: `${ROUTES.features}/documents-project-information`,
      },
      {
        title: "Submittals",
        body: "Manage submittal review, status, and project documentation.",
        href: `${ROUTES.features}/submittals`,
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
    headline: "Keep Every Project Question Moving.",
    supporting:
      "Create, track, and resolve RFIs with a connected workflow built for construction teams.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: "Explore Features", href: ROUTES.features },
  },
} as const;
