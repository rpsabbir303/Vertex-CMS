/**
 * Document Intelligence feature detail — AI + DOC modules.
 * Source: Register + featureAreas under AI & Intelligence.
 *
 * Focus: AI summaries, search, and extraction grounded in project documents.
 * Not generic chat or autonomous document changes without confirmation.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const AI = `${ROUTES.features}#ai`;
const AI_LABEL = "AI & Intelligence";
const PM = "Project Management";
const FM = "Financial Management";
const FIELD = "Field Operations";

export const documentIntelligenceFeatureDetail = {
  meta: {
    title: "Document Intelligence | Vertex CMS Features",
    description:
      "Use AI to understand project documents faster, surface important information, and keep teams working from connected document context in Vertex CMS.",
    canonical: `${ROUTES.features}/document-intelligence`,
  },
  hero: {
    eyebrow: "AI & Intelligence",
    headline: "Turn Project Documents Into Actionable Intelligence.",
    supporting:
      "Use AI to understand project documents faster, surface important information, and keep teams working from the same source of truth.",
    primary: { label: "Explore AI Intelligence", href: "#di-intro" },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "diHero" as PreviewKey,
  },
  nav: [
    { id: "di-intro", label: "Overview" },
    { id: "di-search", label: "Document Search" },
    { id: "di-summary", label: "AI Summaries" },
    { id: "di-extract", label: "Information Extraction" },
    { id: "di-context", label: "Document Context" },
    { id: "di-workflows", label: "Connected Workflows" },
  ] as const,
  intro: {
    headline: "Find the information buried in project documents.",
    body: "Construction teams work across drawings, specifications, contracts, reports, and other project records. Document Intelligence helps turn that information into something teams can quickly understand, search, and act on.",
    cards: [
      {
        n: "01",
        title: "Understand documents faster",
        body: "Get concise AI-generated summaries without reading every page.",
      },
      {
        n: "02",
        title: "Find critical information",
        body: "Search project documents using natural language and quickly locate relevant information.",
      },
      {
        n: "03",
        title: "Keep information connected",
        body: "Connect document insights with the project workflows and records teams already use.",
      },
    ],
  },
  qa: {
    headline: "Ask questions. Get answers from your project documents.",
    body: "Use natural-language questions to find relevant information across the project document set without manually searching through every file.",
    questions: [
      "What does the latest specification say about fire-rated doors?",
      "Which documents reference the revised mechanical scope?",
      "What changed between the previous and current specification?",
    ],
    preview: "diQa" as PreviewKey,
  },
  summary: {
    headline: "Understand long documents at a glance.",
    body: "Quickly surface the information that matters without manually reviewing every page.",
    preview: "diSummary" as PreviewKey,
    points: [
      { n: "01", title: "Summarize lengthy documents", body: "Get concise overviews of specifications, contracts, and reports." },
      { n: "02", title: "Surface important sections", body: "Highlight key topics and requirements teams need to review." },
      { n: "03", title: "Highlight relevant changes", body: "See what changed between revisions without manual comparison." },
    ],
  },
  extract: {
    headline: "Turn unstructured documents into usable project information.",
    body: "Extract important details from project documents and make them easier for teams to review, track, and use.",
    preview: "diExtract" as PreviewKey,
    cards: [
      { n: "01", title: "Key requirements", body: "Identify important requirements and project obligations." },
      { n: "02", title: "Dates & deadlines", body: "Surface dates, milestones, and time-sensitive information." },
      { n: "03", title: "Referenced items", body: "Identify related drawings, specifications, RFIs, and submittals." },
      { n: "04", title: "Project entities", body: "Recognize relevant companies, teams, locations, and project information." },
    ],
  },
  compare: {
    headline: "See what changed without comparing pages manually.",
    body: "AI helps teams identify meaningful changes between document revisions so important updates do not get missed.",
    preview: "diCompare" as PreviewKey,
  },
  search: {
    headline: "Search across the project document set.",
    body: "Find the right information across documents using natural-language search instead of relying on exact file names or keywords.",
    preview: "diSearch" as PreviewKey,
  },
  context: {
    headline: "Document intelligence connected to project context.",
    body: "Insights become more useful when they stay connected to the project records and workflows surrounding them.",
    connected: ["Documents", "Drawings", "RFIs", "Submittals", "Change Orders", "Daily Logs"],
    preview: "diContext" as PreviewKey,
  },
  howItWorks: {
    headline: "From project documents to useful answers.",
    preview: "diHowItWorks" as PreviewKey,
    steps: [
      { n: "01", title: "Connect project documents", body: "Bring project documents into the connected document workspace." },
      { n: "02", title: "AI understands the content", body: "Analyze document content and identify useful project information." },
      { n: "03", title: "Ask and discover", body: "Search documents and ask questions using natural language." },
      { n: "04", title: "Act with context", body: "Use the information alongside connected project workflows." },
    ],
  },
  outcomes: {
    headline: "Make every project document easier to use.",
    cards: [
      { title: "Less time searching", body: "Find relevant information faster across the project document set." },
      { title: "Faster document review", body: "Surface summaries, requirements, and important details quickly." },
      { title: "Better project context", body: "Keep document information connected to the records teams rely on." },
      { title: "Fewer missed details", body: "Help teams identify important changes and information hidden inside documents." },
    ],
  },
  workflows: {
    headline: "Document Intelligence connected to your project workflows.",
    body: "Keep document insights connected to the work happening across Vertex CMS.",
    cards: [
      { slug: "documents", category: PM, title: "Documents", body: "Manage and understand the current project document set." },
      { slug: "drawings", category: PM, title: "Drawings", body: "Connect document information with current drawings and revisions." },
      { slug: "rfis", category: PM, title: "RFIs", body: "Find document references connected to project questions." },
      { slug: "submittals", category: PM, title: "Submittals", body: "Understand supporting documentation connected to submittal workflows." },
      { slug: "change-orders", category: FM, title: "Change Orders", body: "Surface document information relevant to scope and cost changes." },
      { slug: "daily-logs", category: FIELD, title: "Daily Logs", body: "Connect document context with field activity and project records." },
    ],
  },
  finalCta: {
    headline: "Turn project documents into project intelligence.",
    supporting:
      "Give your teams faster access to the information they need to understand documents, answer questions, and keep projects moving.",
    primary: { label: "Explore AI & Intelligence", href: AI },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
