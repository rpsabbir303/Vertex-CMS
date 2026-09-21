/**
 * Project Intelligence feature detail — AI_INTEL module.
 * Source: Register + featureAreas under AI & Intelligence.
 *
 * Focus: natural-language project questions across connected CMS information.
 * Not general-purpose chat or autonomous AI decision-making.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const AI = `${ROUTES.features}#ai`;
const AI_LABEL = "AI & Intelligence";
const PM = "Project Management";
const FM = "Financial Management";
const FIELD = "Field Operations";

export const projectIntelligenceFeatureDetail = {
  meta: {
    title: "Project Intelligence | VertexBuild Features",
    description:
      "Ask natural-language questions about project status, costs, RFIs, schedule variance, and connected project information in VertexBuild—with answers grounded in CMS records.",
    canonical: `${ROUTES.features}/project-intelligence`,
  },
  hero: {
    eyebrow: "AI & Intelligence",
    headline: "See the full project picture, faster.",
    supporting:
      "Ask questions across your connected project information and get clear answers about status, costs, RFIs, schedule variance, and the issues that need attention.",
    primary: { label: "Explore Project Intelligence", href: "#pi-intro" },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "piHero" as PreviewKey,
  },
  nav: [
    { id: "pi-intro", label: "Overview" },
    { id: "pi-workspace", label: "Workspace" },
    { id: "pi-how-it-works", label: "How it works" },
    { id: "pi-questions", label: "Questions" },
    { id: "pi-connected", label: "Connected" },
    { id: "pi-grounded", label: "Context" },
    { id: "pi-status", label: "Status" },
    { id: "pi-control", label: "Control" },
    { id: "pi-explore", label: "Explore" },
  ] as const,
  intro: {
    headline: "One question. The project context behind it.",
    body: "Project Intelligence brings connected project information into one place so teams can understand what is happening without manually searching through separate records.",
    cards: [
      {
        n: "01",
        title: "Understand project status",
        body: "Get a concise view of current project conditions, activity, and outstanding issues.",
      },
      {
        n: "02",
        title: "Connect the signals",
        body: "Bring together financial, schedule, field, and coordination information to understand the bigger picture.",
      },
      {
        n: "03",
        title: "Find what needs attention",
        body: "Use project information to identify areas that may require follow-up or deeper review.",
      },
    ],
  },
  workspace: {
    headline: "Ask the project, not a dozen systems.",
    body: "Get answers using the information already maintained across VertexBuild.",
    preview: "piWorkspace" as PreviewKey,
  },
  howItWorks: {
    headline: "From project data to useful answers.",
    body: "Project Intelligence helps teams move from scattered project information to a clearer understanding of what is happening.",
    preview: "piHowItWorks" as PreviewKey,
    steps: [
      {
        n: "01",
        title: "Ask a question",
        body: "Ask about the project using natural language.",
      },
      {
        n: "02",
        title: "Connect the context",
        body: "Relevant project information is brought together from connected CMS workflows.",
      },
      {
        n: "03",
        title: "Understand the answer",
        body: "Review a concise answer with supporting project context.",
      },
      {
        n: "04",
        title: "Investigate further",
        body: "Open the underlying project records when more detail is needed.",
      },
    ],
  },
  questions: {
    headline: "Ask the questions behind the work.",
    prompts: [
      "What is the current project status?",
      "Why are we behind schedule?",
      "Where are costs trending above budget?",
      "Which RFIs are affecting progress?",
      "What changed on the project this week?",
      "What project areas need attention?",
      "Which issues are still open?",
      "Give me a summary of recent field activity.",
    ],
  },
  connected: {
    headline: "Connect the information that tells the whole story.",
    body: "Project Intelligence becomes more useful when project information stays connected across workflows.",
    preview: "piConnected" as PreviewKey,
    modules: [
      "Projects",
      "Budget & Job Cost",
      "RFIs",
      "Daily Logs",
      "Drawings",
      "Documents",
      "Punch",
      "Safety",
      "Schedule",
    ],
  },
  grounded: {
    headline: "See why the answer matters.",
    body: "Keep project answers connected to the records behind them so teams can move from an overview to the underlying information.",
    preview: "piGrounded" as PreviewKey,
  },
  status: {
    headline: "Understand project health at a glance.",
    body: "Review key project indicators together with a concise summary of what may need attention.",
    preview: "piStatus" as PreviewKey,
  },
  action: {
    headline: "Move from insight to the right next step.",
    cards: [
      {
        n: "01",
        title: "Investigate",
        body: "Open the project records supporting the answer.",
      },
      {
        n: "02",
        title: "Coordinate",
        body: "Use the information to understand which teams or workflows need attention.",
      },
      {
        n: "03",
        title: "Act with confidence",
        body: "Make informed decisions using current project context.",
      },
    ],
  },
  control: {
    headline: "AI helps. Your team stays in control.",
    body: "Project Intelligence can help teams understand project information, while important changes remain subject to user confirmation.",
    footnote: "Review and confirm AI actions before changes are made to CMS data.",
    preview: "piConfirm" as PreviewKey,
  },
  outcomes: {
    headline: "Turn project information into project clarity.",
    cards: [
      {
        title: "Faster project reviews",
        body: "Get the context you need without manually searching multiple records.",
      },
      {
        title: "Better visibility",
        body: "Understand financial, schedule, field, and coordination information together.",
      },
      {
        title: "Earlier awareness",
        body: "Identify areas that may need attention sooner.",
      },
      {
        title: "More informed decisions",
        body: "Use current project information to guide the next step.",
      },
    ],
  },
  workflows: {
    headline: "Project Intelligence works across VertexBuild.",
    body: "Keep project questions connected to the workflows where the work actually happens.",
    cards: [
      {
        slug: "projects",
        category: PM,
        title: "Projects",
        body: "Understand overall project status and activity.",
      },
      {
        slug: "budget-job-cost",
        category: FM,
        title: "Budget & Job Cost",
        body: "Review cost position and variance.",
      },
      {
        slug: "rfis",
        category: PM,
        title: "RFIs",
        body: "Understand open questions and coordination issues.",
      },
      {
        slug: "daily-logs",
        category: FIELD,
        title: "Daily Logs",
        body: "Review recent field activity.",
      },
      {
        slug: "drawings",
        category: PM,
        title: "Drawings",
        body: "Reference current project drawings.",
      },
      {
        slug: "documents",
        category: PM,
        title: "Documents",
        body: "Find relevant project information and records.",
      },
      {
        slug: "safety",
        category: FIELD,
        title: "Safety",
        body: "Review relevant safety information.",
      },
      {
        slug: "punch",
        category: FIELD,
        title: "Punch",
        body: "Understand outstanding field issues.",
      },
    ],
  },
  aiAssistant: {
    headline: "A smarter way to explore your project.",
    body: "Use Project Intelligence to ask questions about the project and understand the information behind the answer.",
    card: {
      title: "AI Assistant",
      body: "Conversational workspace for working with project information.",
      href: `${ROUTES.features}/ai-assistant`,
      label: "Explore AI Assistant",
    },
  },
  explore: {
    eyebrow: AI_LABEL,
    headline: "Explore AI & Intelligence",
    body: "Turn project data and documents into faster answers, deeper insights, and smarter decisions.",
    activeSlug: "project-intelligence",
    cards: [
      {
        slug: "ai-assistant",
        category: AI_LABEL,
        title: "AI Assistant",
        body: "Ask project questions grounded in live data — with human confirmation before writes.",
      },
      {
        slug: "project-intelligence",
        category: AI_LABEL,
        title: "Project Intelligence",
        body: "Surface project insights from live operating data.",
      },
      {
        slug: "predictive-insights",
        category: AI_LABEL,
        title: "Predictive Insights",
        body: "Predictive intelligence layered on AI Assistant and project data.",
      },
      {
        slug: "document-intelligence",
        category: AI_LABEL,
        title: "Document Intelligence",
        body: "Summarize and work with project documents through AI.",
      },
      {
        slug: "automation",
        category: AI_LABEL,
        title: "Automation",
        body: "AI tool actions with logging and confirmation before execution.",
      },
    ],
  },
  finalCta: {
    headline: "Get a clearer view of your project.",
    supporting:
      "Bring connected project information together and get faster answers about the work, costs, schedule, and issues that matter.",
    primary: { label: "Explore AI & Intelligence", href: AI },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
