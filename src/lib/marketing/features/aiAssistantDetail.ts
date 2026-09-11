/**
 * AI Assistant feature detail — AI module.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const AI = `${ROUTES.features}#ai`;
const AI_LABEL = "AI & Intelligence";
const PM = "Project Management";
const FM = "Financial Management";
const FIELD = "Field Operations";

export const aiAssistantFeatureDetail = {
  meta: {
    title: "AI Assistant | Vertex CMS Features",
    description:
      "Ask project questions in natural language and get answers grounded in connected Vertex CMS project information—with confirmation before data changes.",
    canonical: `${ROUTES.features}/ai-assistant`,
  },
  hero: {
    eyebrow: "AI & Intelligence",
    headline: "Ask your project. Get clear answers.",
    supporting:
      "Ask questions about your projects, documents, costs, schedules, and field activity. Vertex CMS AI Assistant helps teams find answers from connected project information.",
    primary: { label: "Explore AI & Intelligence", href: AI },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "aiHero" as PreviewKey,
  },
  nav: [
    { id: "ai-intro", label: "Overview" },
    { id: "ai-how-it-works", label: "How it works" },
    { id: "ai-questions", label: "Questions" },
    { id: "ai-workspace", label: "Workspace" },
    { id: "ai-grounded", label: "Sources" },
    { id: "ai-use-cases", label: "Use cases" },
    { id: "ai-draft", label: "Draft & Confirm" },
    { id: "ai-explore", label: "Explore" },
  ] as const,
  intro: {
    headline: "Project intelligence, without the digging.",
    body: "Vertex CMS AI Assistant helps teams turn connected project information into useful answers and actionable context.",
    cards: [
      {
        n: "01",
        title: "Ask project questions",
        body: "Get answers using information already connected to your project.",
      },
      {
        n: "02",
        title: "Understand what changed",
        body: "Quickly identify important updates across project workflows.",
      },
      {
        n: "03",
        title: "Move from answers to action",
        body: "Use AI responses to understand where attention is needed next.",
      },
    ],
  },
  howItWorks: {
    headline: "From a question to the records that matter.",
    body: "AI Assistant connects natural-language questions with the project information your team already maintains in Vertex CMS.",
    preview: "aiHowItWorks" as PreviewKey,
    steps: [
      { n: "01", title: "Ask", body: "Ask a natural-language project question." },
      { n: "02", title: "Understand", body: "AI interprets the project context." },
      { n: "03", title: "Connect", body: "Relevant project records are surfaced." },
      { n: "04", title: "Review", body: "Open the source information and decide what to do next." },
    ],
  },
  whatCanAsk: {
    headline: "Ask the questions your project team asks every day.",
    body: "Use natural language to explore connected project information without searching through multiple systems.",
    cards: [
      {
        n: "01",
        category: "Project",
        question: "What's the current project status?",
        description: "Understand schedule, cost, and outstanding project items in one answer.",
      },
      {
        n: "02",
        category: "RFIs",
        question: "Which RFIs are still waiting for a response?",
        description: "Review open coordination questions and their project context.",
      },
      {
        n: "03",
        category: "Submittals",
        question: "What submittals are still pending review?",
        description: "Check submittal status using connected project records.",
      },
      {
        n: "04",
        category: "Financials",
        question: "Where are we over budget?",
        description: "Explore cost variance using connected budget and job cost information.",
      },
      {
        n: "05",
        category: "Drawings",
        question: "What changed in the latest drawing revision?",
        description: "Compare revisions and understand drawing-related updates.",
      },
      {
        n: "06",
        category: "Change Orders",
        question: "Which change orders are affecting current cost?",
        description: "Review scope and cost changes connected to the project.",
      },
      {
        n: "07",
        category: "Field",
        question: "What happened on site this week?",
        description: "Summarize recent daily logs, punch, and field activity.",
      },
      {
        n: "08",
        category: "Safety",
        question: "Which safety items need attention?",
        description: "Surface relevant safety information from connected project records.",
      },
    ],
  },
  workspace: {
    headline: "A smarter way to work with project information.",
    body: "AI Assistant brings connected project information into one conversational workspace.",
    preview: "aiWorkspace" as PreviewKey,
    metrics: [
      { label: "Schedule", value: "3 days behind" },
      { label: "Cost variance", value: "2.4%" },
      { label: "Open RFIs", value: "7" },
      { label: "Open punch", value: "28" },
    ],
  },
  grounded: {
    headline: "Answers connected to the records behind them.",
    body: "AI Assistant uses connected CMS project information so teams can review the records behind an answer.",
    preview: "aiGroundedSources" as PreviewKey,
  },
  multiModule: {
    headline: "One assistant. Connected to the entire project.",
    body: "Ask questions that require information from multiple areas of the project.",
    preview: "aiMultiModule" as PreviewKey,
    modules: ["Projects", "Budget & Job Cost", "Change Orders", "Daily Logs", "Documents", "RFIs"],
  },
  documents: {
    headline: "Understand project documents without digging.",
    body: "Ask questions about drawings, specifications, revisions, and project documents using natural language.",
    preview: "aiDrawing" as PreviewKey,
  },
  financial: {
    headline: "Ask about project costs in plain language.",
    body: "Explore budget position, job cost variance, and financial context using connected project records.",
    preview: "aiFinancial" as PreviewKey,
  },
  field: {
    headline: "Bring field information into the conversation.",
    body: "Summarize daily logs, punch items, photos, and field activity already stored in the project.",
    preview: "aiField" as PreviewKey,
  },
  useCases: {
    headline: "Connected to the project records your team already uses.",
    body: "AI Assistant works with information already stored across Vertex CMS — not generic chat responses disconnected from your project.",
    records: [
      { title: "Projects", body: "Status, schedule, and current project activity." },
      { title: "Documents", body: "Specifications, contracts, and project files." },
      { title: "RFIs", body: "Open questions and coordination issues." },
      { title: "Submittals", body: "Review status and supporting documentation." },
      { title: "Drawings", body: "Current revisions and drawing references." },
      { title: "Daily Logs", body: "Recent field updates and site activity." },
      { title: "Change Orders", body: "Scope and cost changes affecting the project." },
      { title: "Financial information", body: "Budget, job cost, and cost variance context." },
    ],
  },
  drafting: {
    headline: "Go from answers to prepared work.",
    body: "Use AI to help prepare project content while keeping your team in control of what gets submitted or created.",
    cards: [
      {
        n: "01",
        title: "Draft an RFI",
        body: "Create a draft RFI from the project context and supporting records.",
        action: "Draft RFI",
      },
      {
        n: "02",
        title: "Summarize a Daily Log",
        body: "Turn recent field updates into a concise project summary.",
        action: "Create Summary",
      },
      {
        n: "03",
        title: "Prepare Project Update",
        body: "Draft a project update using current project information.",
        action: "Draft Update",
      },
    ],
  },
  control: {
    headline: "AI helps prepare. Your team stays in control.",
    body: "Review AI-generated actions before anything is written or changed in Vertex CMS.",
    footnote: "Nothing is created or changed until a user confirms the action.",
    preview: "aiDraftConfirm" as PreviewKey,
  },
  history: {
    headline: "Keep project conversations organized.",
    body: "Search, filter, and return to prior project conversations without losing context.",
    preview: "aiHistory" as PreviewKey,
  },
  capabilities: {
    headline: "Built for the way construction teams work.",
    cards: [
      { n: "01", title: "Project Questions", body: "Get answers from connected project information." },
      { n: "02", title: "Document Questions", body: "Find information across project documents and revisions." },
      { n: "03", title: "Financial Questions", body: "Explore budgets, costs, billing, and financial context." },
      { n: "04", title: "Field Questions", body: "Understand daily logs, punch items, safety, and field activity." },
      { n: "05", title: "Cross-Project Context", body: "Connect information across relevant project workflows." },
      { n: "06", title: "Drafting Assistance", body: "Prepare project content for review before it is submitted or created." },
    ],
  },
  trust: {
    headline: "Useful answers. Clear context. Human control.",
    cards: [
      {
        title: "Grounded information",
        body: "Connect answers to the project records behind them.",
      },
      {
        title: "Source visibility",
        body: "Review the documents, records, and workflows used for context.",
      },
      {
        title: "Human confirmation",
        body: "Review and confirm AI-assisted changes before they affect CMS data.",
      },
    ],
  },
  outcomes: {
    headline: "Spend less time searching. Spend more time managing.",
    cards: [
      {
        title: "Faster answers",
        body: "Get project information without manually searching across multiple records.",
      },
      {
        title: "Better context",
        body: "Understand answers alongside the project information behind them.",
      },
      {
        title: "Less repetitive work",
        body: "Use AI to summarize information and prepare routine project content.",
      },
      {
        title: "More informed decisions",
        body: "Give teams clearer project context before they take action.",
      },
    ],
  },
  workflows: {
    headline: "AI Assistant works across your project workflows.",
    body: "Keep project intelligence connected to the work already happening across Vertex CMS.",
    cards: [
      {
        slug: "projects",
        category: PM,
        title: "Projects",
        body: "Ask about project status, activity, and the context behind current work.",
      },
      {
        slug: "daily-logs",
        category: FIELD,
        title: "Daily Logs",
        body: "Summarize recent field activity and understand what changed on site.",
      },
      {
        slug: "rfis",
        category: PM,
        title: "RFIs",
        body: "Review open coordination questions and their impact on progress.",
      },
      {
        slug: "submittals",
        category: PM,
        title: "Submittals",
        body: "Understand submittal status and connected documentation.",
      },
      {
        slug: "documents",
        category: PM,
        title: "Documents",
        body: "Find relevant project documents connected to your question.",
      },
      {
        slug: "budget-job-cost",
        category: FM,
        title: "Budget & Job Cost",
        body: "Understand cost position, variance, and budget-related context.",
      },
      {
        slug: "change-orders",
        category: FM,
        title: "Change Orders",
        body: "Review scope and cost changes connected to project questions.",
      },
      {
        slug: "drawings",
        category: PM,
        title: "Drawings",
        body: "Reference current drawings and revision context in answers.",
      },
    ],
  },
  explore: {
    eyebrow: AI_LABEL,
    headline: "Explore AI & Intelligence",
    body: "Turn project data and documents into faster answers, deeper insights, and smarter decisions.",
    activeSlug: "ai-assistant",
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
    headline: "Get more from the information already in your project.",
    supporting:
      "Ask better questions, find connected answers, and give your team the context to move projects forward.",
    primary: { label: "Explore AI & Intelligence", href: AI },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
