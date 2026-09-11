/**
 * Predictive Insights feature detail — AI & Intelligence module.
 * Construction project intelligence: emerging risks, forecasts, trends, early warnings.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const AI = `${ROUTES.features}#ai`;
const AI_LABEL = "AI & Intelligence";
const PM = "Project Management";
const FM = "Financial Management";
const FIELD = "Field Operations";

export const predictiveInsightsFeatureDetail = {
  meta: {
    title: "Predictive Insights | Vertex CMS Features",
    description:
      "Identify emerging cost, schedule, and performance risks in Vertex CMS. Predictive Insights analyzes connected project signals to help construction teams act before problems become expensive.",
    canonical: `${ROUTES.features}/predictive-insights`,
  },
  hero: {
    eyebrow: "AI & Intelligence",
    headline: "See project risks before they become problems.",
    supporting:
      "Turn project signals into early warnings. Predictive Insights helps teams identify emerging cost, schedule, and performance risks before they become larger problems.",
    primary: { label: "Explore AI & Intelligence", href: AI },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "predHero" as PreviewKey,
  },
  nav: [
    { id: "pred-intro", label: "Overview" },
    { id: "pred-how-it-works", label: "How it works" },
    { id: "pred-health", label: "Project health" },
    { id: "pred-forecast", label: "Forecasting" },
    { id: "pred-early-warning", label: "Early warnings" },
    { id: "pred-signal-action", label: "Signal to action" },
    { id: "pred-use-cases", label: "Use cases" },
    { id: "pred-explore", label: "Explore" },
  ] as const,
  intro: {
    headline: "Know where attention is needed.",
    body: "Predictive Insights brings together project signals to highlight where cost, schedule, and execution may be heading off track.",
    cards: [
      {
        n: "01",
        title: "Cost Risk",
        body: "Identify cost trends and projected variance before they impact the project budget.",
      },
      {
        n: "02",
        title: "Schedule Risk",
        body: "Surface schedule signals that may indicate upcoming delays.",
      },
      {
        n: "03",
        title: "Project Health",
        body: "Understand overall project conditions through connected performance signals.",
      },
      {
        n: "04",
        title: "Emerging Issues",
        body: "Highlight patterns that deserve attention before they become larger problems.",
      },
    ],
  },
  howItWorks: {
    headline: "From project signals to clear priorities.",
    body: "Predictive Insights connects information already maintained across Vertex CMS and turns those signals into prioritized project intelligence.",
    preview: "predShowcase" as PreviewKey,
    steps: [
      {
        n: "01",
        title: "Collect project signals",
        body: "Bring together relevant project information from connected workflows.",
      },
      {
        n: "02",
        title: "Identify patterns",
        body: "Look across project activity, cost, schedule, field, and workflow signals.",
      },
      {
        n: "03",
        title: "Surface emerging risks",
        body: "Highlight trends and conditions that may require attention.",
      },
      {
        n: "04",
        title: "Prioritize action",
        body: "Give teams a clearer view of where attention is needed first.",
      },
    ],
  },
  projectHealth: {
    headline: "One view of project risk.",
    body: "See the signals affecting project health without searching across disconnected records.",
    preview: "predHealth" as PreviewKey,
  },
  forecasting: {
    headline: "See where the project is heading.",
    body: "Current project conditions reveal emerging trends. Compare where the project stands today against projected cost and schedule outcomes.",
    preview: "predForecast" as PreviewKey,
    cost: {
      originalBudget: "$4.50M",
      currentCost: "$4.82M",
      forecastCost: "$5.14M",
      projectedVariance: "+$320K",
    },
    schedule: {
      baseline: "180 days",
      currentForecast: "188 days",
      projectedDelay: "+8 days",
    },
  },
  earlyWarning: {
    headline: "Catch the signal before it becomes an overrun.",
    body: "Predictive information is most useful when teams can respond earlier — before cost pressure, schedule drift, or workflow bottlenecks compound.",
    preview: "predEarlyWarning" as PreviewKey,
    cards: [
      {
        severity: "HIGH" as const,
        title: "Cost pressure",
        body: "Material and commitment trends indicate increasing cost pressure.",
      },
      {
        severity: "HIGH" as const,
        title: "Schedule pressure",
        body: "Current activity suggests the project may be trending behind schedule.",
      },
      {
        severity: "MEDIUM" as const,
        title: "Workflow bottleneck",
        body: "Open items across project workflows may create downstream delays.",
      },
      {
        severity: "MEDIUM" as const,
        title: "Field performance",
        body: "Recent field activity shows a change that may require attention.",
      },
    ],
  },
  signalToAction: {
    headline: "Move from risk signals to action.",
    body: "Predictive Insights helps teams understand what deserves attention so they can investigate the underlying project records and take action.",
    preview: "predSignalAction" as PreviewKey,
    example: {
      signal: "Schedule risk increasing",
      insight: "Recent activity and open items suggest a potential delay.",
      sources: ["Daily Logs", "RFIs", "Submittals", "Drawings"],
      action: "Review the affected work and assign follow-up.",
    },
  },
  connectedData: {
    headline: "Insights built from the work already happening.",
    body: "Predictive Insights draws on project information your team already maintains in Vertex CMS — not disconnected data sources.",
    cards: [
      { slug: "projects", category: PM, title: "Projects", body: "Schedule position, project status, and overall activity signals." },
      { slug: "daily-logs", category: FIELD, title: "Daily Logs", body: "Recent field updates and on-site activity patterns." },
      { slug: "drawings", category: PM, title: "Drawings", body: "Revision activity and drawing-related coordination signals." },
      { slug: "rfis", category: PM, title: "RFIs", body: "Open coordination questions affecting progress." },
      { slug: "submittals", category: PM, title: "Submittals", body: "Review cycle timing and pending submittal backlog." },
      { slug: "change-orders", category: FM, title: "Change Orders", body: "Scope and cost changes affecting project trajectory." },
      { slug: "budget-job-cost", category: FM, title: "Budget & Job Cost", body: "Cost variance, commitments, and financial movement." },
      { slug: "safety", category: FIELD, title: "Safety", body: "Safety observations and field condition indicators." },
      { slug: "t-and-m", category: FIELD, title: "T&M", body: "Time and material activity contributing to cost signals." },
    ],
  },
  useCases: {
    headline: "Insights that help teams stay ahead.",
    cards: [
      {
        n: "01",
        title: "Cost Forecasting",
        body: "Identify emerging cost pressure and projected variance before it affects the budget.",
      },
      {
        n: "02",
        title: "Schedule Risk",
        body: "Spot signals that may indicate upcoming delays across coordination and field work.",
      },
      {
        n: "03",
        title: "Project Health",
        body: "Understand whether the project is trending in a healthy direction across key areas.",
      },
      {
        n: "04",
        title: "Field Performance",
        body: "Use field activity signals to identify changes in project conditions on site.",
      },
      {
        n: "05",
        title: "Workflow Risk",
        body: "See where unresolved RFIs, submittals, or punch items may create downstream issues.",
      },
      {
        n: "06",
        title: "Management Review",
        body: "Give project leaders a clearer view of what needs attention before the next review.",
      },
    ],
  },
  riskPriorities: {
    headline: "Focus the team on what matters first.",
    body: "Review prioritized risk signals so teams investigate the most important conditions first.",
    preview: "predPriority" as PreviewKey,
  },
  projectTrend: {
    headline: "A clearer picture of project health.",
    body: "Track cost, schedule, open items, and field activity trends together to understand overall project direction.",
    preview: "predTrend" as PreviewKey,
  },
  aiCompare: {
    headline: "Prediction when you need it. Answers when you ask.",
    body: "Predictive Insights and AI Assistant work together — one surfaces emerging patterns proactively, the other helps teams investigate project information on demand.",
    cards: [
      {
        title: "Predictive Insights",
        body: "Surfaces emerging patterns, risks, and trends so teams know where to look.",
        current: true,
      },
      {
        title: "AI Assistant",
        body: "Answers questions about the project using connected project information.",
        href: `${ROUTES.features}/ai-assistant`,
        label: "Explore AI Assistant",
      },
    ],
  },
  connectedAi: {
    headline: "Predictive intelligence across your project workflows.",
    body: "Predictive Insights connects to the same project workflows that feed AI Assistant, Project Intelligence, and Document Intelligence.",
    cards: [
      {
        slug: "project-intelligence",
        category: AI_LABEL,
        title: "Project Intelligence",
        body: "Ask project-level questions and investigate the context behind a risk signal.",
      },
      {
        slug: "ai-assistant",
        category: AI_LABEL,
        title: "AI Assistant",
        body: "Explore connected project records after a predictive signal identifies an area to review.",
      },
      {
        slug: "document-intelligence",
        category: AI_LABEL,
        title: "Document Intelligence",
        body: "Review documents connected to emerging project signals and coordination issues.",
      },
      {
        slug: "automation",
        category: AI_LABEL,
        title: "Automation",
        body: "Automate follow-up workflows with logging and confirmation before execution.",
      },
    ],
  },
  outcomes: {
    headline: "Know what needs attention before it becomes urgent.",
    cards: [
      {
        title: "Earlier visibility",
        body: "See emerging project issues sooner — before cost overruns or schedule delays compound.",
      },
      {
        title: "Better prioritization",
        body: "Focus teams on the risks that matter most using severity and trend indicators.",
      },
      {
        title: "Faster decisions",
        body: "Use connected project information to investigate signals and respond with context.",
      },
    ],
  },
  explore: {
    eyebrow: AI_LABEL,
    headline: "Explore AI & Intelligence",
    body: "Turn project data and documents into faster answers, deeper insights, and smarter decisions.",
    activeSlug: "predictive-insights",
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
        body: "Identify emerging cost, schedule, and performance risks from connected project signals.",
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
    headline: "Stay ahead of project risk.",
    supporting:
      "Turn project signals into clearer priorities and earlier action with Vertex CMS.",
    primary: { label: "Explore AI & Intelligence", href: AI },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
