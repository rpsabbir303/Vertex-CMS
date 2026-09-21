/**
 * Automation feature detail — AI & Intelligence module.
 * AI-powered project actions with permissions, logging, and human confirmation.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import type { PreviewKey } from "./register";

const AI = `${ROUTES.features}#ai`;
const AI_LABEL = "AI & Intelligence";
const PM = "Project Management";
const FIELD = "Field Operations";

export const automationFeatureDetail = {
  meta: {
    title: "Automation | VertexBuild Features",
    description:
      "Run AI-powered actions across project workflows with clear permissions, activity logging, and confirmation before execution. VertexBuild automation keeps people in control.",
    canonical: `${ROUTES.features}/automation`,
  },
  hero: {
    eyebrow: "AI & Intelligence",
    headline: "Automate the work. Keep people in control.",
    supporting:
      "Run AI-powered actions across your project workflows with clear permissions, activity logging, and confirmation before execution.",
    supportingSecondary:
      "Turn project signals, documents, and conversations into repeatable actions without losing visibility or governance.",
    primary: { label: "Explore AI & Intelligence", href: AI },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "autoHero" as PreviewKey,
  },
  nav: [
    { id: "auto-intro", label: "Overview" },
    { id: "auto-capabilities", label: "AI Actions" },
    { id: "auto-triggers", label: "Triggers" },
    { id: "auto-approvals", label: "Approvals" },
    { id: "auto-activity-log", label: "Activity Log" },
    { id: "auto-governance", label: "Governance" },
    { id: "auto-workflows", label: "Connected Workflows" },
  ] as const,
  intro: {
    headline: "Automation without losing project control.",
    body: "Construction workflows depend on accurate information, clear ownership, and timely action. VertexBuild automation connects those pieces so teams can move faster without turning important project decisions into black-box processes.",
    cards: [
      {
        n: "01",
        title: "Controlled actions",
        body: "AI can prepare actions, but important changes remain subject to defined permissions and human approval.",
      },
      {
        n: "02",
        title: "Connected project context",
        body: "Automation works from the information already captured across project workflows.",
      },
      {
        n: "03",
        title: "Complete visibility",
        body: "Every automated action can be reviewed through a clear activity history.",
      },
    ],
  },
  capabilities: {
    headline: "Built for controlled construction automation.",
    cards: [
      { n: "01", title: "AI tool calls", body: "Run supported AI-powered actions against connected project workflows." },
      { n: "02", title: "Trigger-based workflows", body: "Start actions from defined project events, records, or workflow conditions." },
      { n: "03", title: "Human confirmation", body: "Require users to review and approve actions before execution." },
      { n: "04", title: "Permission-aware execution", body: "Respect project roles and access permissions when actions are prepared or executed." },
      { n: "05", title: "Activity logging", body: "Keep a record of automation activity for visibility and accountability." },
      { n: "06", title: "Connected project records", body: "Link actions back to the project information that triggered them." },
      { n: "07", title: "Action status tracking", body: "See whether an action is pending, approved, completed, or cancelled." },
      { n: "08", title: "No uncontrolled deletes", body: "Prevent destructive AI behavior and keep sensitive project changes under human control." },
    ],
  },
  howItWorks: {
    headline: "From project signal to approved action.",
    body: "AI helps prepare and execute supported project actions, while people remain in control of important changes.",
    preview: "autoHowItWorks" as PreviewKey,
    steps: [
      { n: "01", title: "Detect a project signal", body: "Automation starts from relevant information or an event within the project." },
      { n: "02", title: "Prepare the action", body: "VertexBuild determines the appropriate supported action and shows the user what will happen." },
      { n: "03", title: "Review and confirm", body: "Users can review the proposed action before anything changes." },
      { n: "04", title: "Execute and log", body: "Once approved, the action runs and the activity is recorded for future reference." },
    ],
  },
  showcase: {
    headline: "See every action before it happens.",
    body: "Give project teams a clear view of what automation is proposing, why it was triggered, and what will change before execution.",
    preview: "autoShowcase" as PreviewKey,
  },
  triggers: {
    headline: "Start automation from the work already happening.",
    body: "Connect automation to the project signals your team already creates instead of introducing another disconnected workflow.",
    cards: [
      { slug: "daily-logs", category: FIELD, title: "Daily Logs", body: "Trigger actions from newly submitted field information." },
      { slug: "documents", category: PM, title: "Documents", body: "Use document activity or updates as workflow inputs." },
      { slug: "rfis", category: PM, title: "RFIs", body: "Create follow-up actions from questions, responses, or unresolved items." },
      { slug: "submittals", category: PM, title: "Submittals", body: "Connect review activity with downstream project workflows." },
      { slug: "safety", category: FIELD, title: "Safety", body: "Turn observations and issues into structured follow-up actions." },
      { slug: "projects", category: PM, title: "Project Activity", body: "Use relevant project events to initiate supported workflows." },
    ],
  },
  approvals: {
    headline: "Keep people in control of every important action.",
    body: "Automation should accelerate project work—not remove accountability. VertexBuild keeps approval and execution visible to the people responsible for the project.",
    preview: "autoApproval" as PreviewKey,
    points: [
      { title: "Review before execution", body: "See what the automation intends to do." },
      { title: "Permission-aware actions", body: "Respect project access and workflow controls." },
      { title: "Human accountability", body: "Keep important decisions with the people responsible for the project." },
    ],
  },
  activityLog: {
    headline: "Every automated action leaves a clear trail.",
    body: "Give teams the visibility they need to understand what happened, when it happened, what triggered it, and who approved it.",
    preview: "autoActivityLog" as PreviewKey,
    benefits: [
      { title: "Clear audit history", body: "Review what automation did and when." },
      { title: "Faster troubleshooting", body: "Trace actions back to their trigger source." },
      { title: "Better team accountability", body: "See who approved each supported action." },
    ],
  },
  examples: {
    headline: "Practical automation for real project workflows.",
    cards: [
      { n: "01", title: "Turn field issues into RFIs", body: "Use information from daily logs to prepare follow-up RFIs for review." },
      { n: "02", title: "Create follow-up tasks", body: "Convert identified project issues into structured tasks." },
      { n: "03", title: "Summarize project information", body: "Generate concise summaries from connected project records." },
      { n: "04", title: "Route important information", body: "Help teams surface relevant information to the right workflow." },
      { n: "05", title: "Support safety follow-up", body: "Turn safety observations into actionable follow-up work." },
      { n: "06", title: "Keep project information current", body: "Use supported automation to reduce repetitive administrative updates." },
    ],
  },
  governance: {
    eyebrow: "Built for responsible automation",
    headline: "Move faster without losing governance.",
    body: "Automation should make project teams more efficient while preserving the controls required for real construction work.",
    preview: "autoGovernance" as PreviewKey,
    cards: [
      { title: "Permissions", body: "Only authorized actions should be available." },
      { title: "Confirmation", body: "Important actions can require explicit approval." },
      { title: "Logging", body: "Automation activity remains visible." },
      { title: "Controlled execution", body: "Keep execution bounded to supported workflows." },
    ],
  },
  connectedWorkflows: {
    headline: "Automation works across your project workflows.",
    body: "Keep AI-powered actions connected to the same project information your teams already use.",
    cards: [
      { slug: "ai-assistant", category: AI_LABEL, title: "AI Assistant", body: "Prepare actions from project conversations and connected records." },
      { slug: "project-intelligence", category: AI_LABEL, title: "Project Intelligence", body: "Use project insights to inform supported automation triggers." },
      { slug: "predictive-insights", category: AI_LABEL, title: "Predictive Insights", body: "Connect risk signals to structured follow-up actions." },
      { slug: "document-intelligence", category: AI_LABEL, title: "Document Intelligence", body: "Automate document summaries and related workflow steps." },
      { slug: "documents", category: PM, title: "Documents", body: "Use document activity as inputs for supported actions." },
      { slug: "daily-logs", category: FIELD, title: "Daily Logs", body: "Trigger follow-up from field information and site updates." },
      { slug: "rfis", category: PM, title: "RFIs", body: "Create and route coordination follow-up from project questions." },
      { slug: "submittals", category: PM, title: "Submittals", body: "Connect submittal activity with downstream project workflows." },
      { slug: "drawings", category: PM, title: "Drawings", body: "Link drawing-related signals to supported project actions." },
      { slug: "safety", category: FIELD, title: "Safety", body: "Turn safety observations into structured follow-up work." },
    ],
  },
  outcomes: {
    headline: "Less repetitive work. More controlled progress.",
    cards: [
      { n: "01", title: "Faster follow-up", body: "Move from project signals to structured action faster." },
      { n: "02", title: "Less manual administration", body: "Reduce repetitive project coordination work." },
      { n: "03", title: "Clearer accountability", body: "Know what automation did and why." },
      { n: "04", title: "Better project visibility", body: "Keep automated activity connected to the project record." },
    ],
  },
  explore: {
    eyebrow: AI_LABEL,
    headline: "Explore AI & Intelligence",
    body: "Connect AI Assistant, Predictive Insights, Document Intelligence, and Automation across your project workflows.",
    activeSlug: "automation",
    cards: [
      { slug: "ai-assistant", category: AI_LABEL, title: "AI Assistant", body: "Ask project questions grounded in live data — with human confirmation before writes." },
      { slug: "project-intelligence", category: AI_LABEL, title: "Project Intelligence", body: "Surface project insights from live operating data." },
      { slug: "predictive-insights", category: AI_LABEL, title: "Predictive Insights", body: "Identify emerging cost, schedule, and performance risks from connected project signals." },
      { slug: "document-intelligence", category: AI_LABEL, title: "Document Intelligence", body: "Summarize and work with project documents through AI." },
      { slug: "automation", category: AI_LABEL, title: "Automation", body: "Run AI-powered actions with logging and confirmation before execution." },
    ],
  },
  finalCta: {
    headline: "Automate project work with confidence.",
    supporting:
      "See how VertexBuild connects AI-powered automation with the project workflows, permissions, and controls your team relies on.",
    primary: { label: "Explore AI & Intelligence", href: AI },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
  },
} as const;
