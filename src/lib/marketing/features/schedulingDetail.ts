/**
 * Scheduling feature detail — approved CPM / look-ahead / risk capabilities.
 */

import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import { featureCategoryPath } from "./categories";
import type { PreviewKey } from "./register";

export const schedulingFeatureDetail = {
  meta: {
    title: "Scheduling | VertexBuild Features",
    description:
      "Build CPM schedules, track baseline vs current performance, manage dependencies and critical path, generate 3-week look-ahead, and surface schedule risk in VertexBuild.",
    canonical: `${ROUTES.features}/scheduling`,
  },
  hero: {
    eyebrow: "Project Management / Scheduling",
    headline: "Keep Every Project on Schedule",
    supporting:
      "Build reliable CPM schedules, track progress against your baseline, and see what needs attention before work falls behind.",
    primary: { label: "Explore Scheduling", href: "#sched-overview" },
    secondary: { label: CTAS.demo.label, href: CTAS.demo.href },
    preview: "scheduleGantt" as PreviewKey,
  },
  nav: [
    { id: "sched-overview", label: "Overview" },
    { id: "sched-cpm", label: "CPM Scheduling" },
    { id: "sched-dependencies", label: "Dependencies" },
    { id: "sched-lookahead", label: "Look-Ahead" },
    { id: "sched-risk", label: "Risk Prediction" },
  ] as const,
  overview: {
    headline: "Scheduling built for construction delivery.",
    body: "Connect CPM planning, baseline tracking, dependencies, look-ahead, and schedule risk in one Project Management workflow—so teams see what is on plan and what needs attention.",
  },
  cpm: {
    eyebrow: "01 / CPM Scheduling",
    headline: "Build a schedule your team can actually manage.",
    body: "Create structured CPM schedules that connect project tasks, dates, progress, and dependencies in one clear workflow. Track the current schedule against the approved baseline and quickly identify where performance is moving off plan.",
    points: [
      "Baseline vs current tracking",
      "Schedule variance",
      "Task-level progress",
      "Critical-path visibility",
      "Float awareness",
    ],
    preview: "scheduleGantt" as PreviewKey,
  },
  dependencies: {
    headline: "See what moves the project forward — and what can hold it back.",
    body: "Connect activities with the relationships that drive real construction schedules. Define finish-to-start, finish-to-finish, start-to-start, and start-to-finish dependencies with lag, then understand their effect on the critical path and available float.",
    labels: ["FS", "FF", "SS", "SF", "LAG", "CRITICAL PATH", "FLOAT"] as const,
    preview: "scheduleDeps" as PreviewKey,
  },
  lookahead: {
    eyebrow: "03 / Look-Ahead Planning",
    headline: "Turn the master schedule into the next three weeks of work.",
    body: "Automatically generate a 3-week look-ahead from the CPM schedule so project teams can focus on upcoming activities, constraints, and near-term commitments.",
    points: [
      "Auto-generated from CPM",
      "Upcoming activities",
      "Near-term visibility",
      "Field-ready planning",
    ],
    preview: "scheduleLookahead" as PreviewKey,
  },
  risk: {
    eyebrow: "04 / AI Schedule Risk",
    headline: "Spot schedule risk before the slip.",
    body: "AI-powered schedule risk prediction helps identify tasks that are likely to slip by analyzing signals such as manpower, productivity, and weather trends.",
    preview: "scheduleRisk" as PreviewKey,
  },
  reporting: {
    headline: "Make schedule performance easy to communicate.",
    body: "Keep schedule information clear for project teams and stakeholders with visual Gantt planning, current-versus-baseline visibility, and PDF-ready schedule output.",
    preview: "scheduleExport" as PreviewKey,
    cta: { label: "Explore Scheduling", href: "#sched-cpm" },
  },
  value: {
    headline: "Less schedule uncertainty.\nMore control over the work ahead.",
    blocks: [
      {
        title: "Baseline control",
        body: "Know how current progress compares with the approved plan.",
      },
      {
        title: "Critical path visibility",
        body: "Focus attention on activities that directly affect completion.",
      },
      {
        title: "3-week look-ahead",
        body: "Give field teams a clear view of what is coming next.",
      },
    ],
  },
  related: {
    headline: "Connected project workflows",
    categoryHref: featureCategoryPath("project-management"),
    slugs: ["projects", "documents", "rfis", "submittals", "change-orders"] as const,
  },
  finalCta: {
    headline: "Keep the plan clear. Keep the project moving.",
    supporting:
      "Bring schedules, progress, dependencies, and upcoming work into one connected workflow.",
    primary: { label: CTAS.demo.label, href: CTAS.demo.href },
    secondary: { label: CTAS.trial.label, href: CTAS.trial.href },
  },
} as const;
