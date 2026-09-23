import { CTAS, ROUTES } from "@/lib/marketing/navigation";

import {
  COMPARISON_AUDIENCE_CONTEXTS,
  COMPARISON_CAPABILITY_AREAS,
  COMPARISON_FRAMEWORK_FLOW,
  COMPARISON_FRAMEWORK_PILLARS,
  COMPARISON_RESEARCH_STEPS,
  COMPARISON_STRATEGIC_DIFFERENCE,
  COMPARISON_WHY_DIMENSIONS,
} from "./shared";

export const COMPARISONS_LANDING = {
  hero: {
    eyebrow: "Comparisons",
    headline: "Compare construction management platforms with clarity.",
    headlineLines: ["Compare construction management platforms", "with clarity."],
    supporting:
      "VertexBuild provides structured, evidence-based comparisons of construction management platforms so construction teams can review capabilities, workflows, operating models, and intended fit without relying on unsupported claims.",
  },
  whyCompare: {
    eyebrow: "Why compare",
    headline: "A clearer way to evaluate construction software.",
    supporting:
      "Construction software decisions involve more than a feature checklist. Teams need to understand how capabilities connect, how workflows operate, and where each platform fits their way of working.",
    points: COMPARISON_WHY_DIMENSIONS.map((point) => ({
      index: point.index,
      title: point.title,
      body: point.body,
    })),
  },
  directory: {
    id: "supported-comparisons",
    eyebrow: "Supported comparisons",
    headline: "Explore construction management platforms.",
    supporting: "Choose a documented comparison to explore the areas that matter to your team.",
  },
  framework: {
    id: "comparison-framework",
    eyebrow: "Comparison framework",
    headline: "Compare the things that shape the work.",
    pillars: COMPARISON_FRAMEWORK_PILLARS.map((p) => ({ index: p.index, label: p.label })),
    flow: [...COMPARISON_FRAMEWORK_FLOW],
  },
  capability: {
    id: "capability-comparison",
    eyebrow: "Capability comparison",
    headline: "Look across the capabilities that matter.",
    supporting:
      "Each comparison organizes capability areas across project, field, financial, compliance, and intelligence workflows using a consistent evaluation structure.",
    categories: COMPARISON_CAPABILITY_AREAS.map((area) => ({
      title: area.title,
      body: area.body,
    })),
  },
  operatingModel: {
    id: "operating-model",
    ...COMPARISON_STRATEGIC_DIFFERENCE,
  },
  whoItsFor: {
    id: "who-its-for",
    eyebrow: "Who it's for",
    headline: "Start with the way your team works.",
    audiences: COMPARISON_AUDIENCE_CONTEXTS.map((a) => ({
      title: a.title,
      body: a.body,
      consideration: a.consideration,
    })),
  },
  howItWorks: {
    id: "how-it-works",
    eyebrow: "How it works",
    headline: "From research to a clearer decision.",
    steps: COMPARISON_RESEARCH_STEPS.map((step) => ({
      index: step.index,
      title: step.title,
      body: step.body,
    })),
  },
  finalCta: {
    headline: "Ready to move from research to action?",
    supporting: "Explore VertexBuild through a free trial, product demo, or conversation with the team.",
    primary: CTAS.trial,
    secondary: CTAS.demo,
    tertiary: CTAS.sales,
  },
} as const;

export const COMPARISONS_HUB_ANCHORS = {
  supported: COMPARISONS_LANDING.directory.id,
  framework: COMPARISONS_LANDING.framework.id,
  capability: COMPARISONS_LANDING.capability.id,
  operatingModel: COMPARISONS_LANDING.operatingModel.id,
  whoItsFor: COMPARISONS_LANDING.whoItsFor.id,
  howItWorks: COMPARISONS_LANDING.howItWorks.id,
} as const;

/** First comparison route for deep-link CTAs when needed. */
export const COMPARISONS_DEFAULT_DETAIL = `${ROUTES.comparisons}/procore`;
