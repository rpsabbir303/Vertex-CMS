/**
 * Product Tour ↔ Feature Library — contextual deep links only (no duplicate routes).
 */

import {
  featureAreaPath,
  getFeatureAreaBySlug,
  type FeatureAreaDetail,
} from "@/lib/marketing/features/featureAreas";
import { ROUTES } from "@/lib/marketing/navigation";

import { PRODUCT_TOUR_SECTION_IDS, type ProductTourSectionId } from "./content";

export const PRODUCT_TOUR_FROM_QUERY = "product-tour";
export const PRODUCT_TOUR_WORKFLOW_QUERY = "workflow";

export type TourWorkflowId = Exclude<ProductTourSectionId, "demo">;

export type TourCapabilitySeed = {
  slug: string;
  /** One-line contextual copy for capability navigation rows */
  description?: string;
  /** Compact label for financial progression rail */
  shortLabel?: string;
  /** Optional status note (e.g. rollout context) — not a fake capability claim */
  statusNote?: string;
};

export type ResolvedTourCapability = {
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
  href: string;
  exploreLabel: string;
  statusNote?: string;
};

const WORKFLOW_SECTION: Record<TourWorkflowId, string> = {
  platform: PRODUCT_TOUR_SECTION_IDS.platform,
  financial: PRODUCT_TOUR_SECTION_IDS.financial,
  field: PRODUCT_TOUR_SECTION_IDS.field,
  ai: PRODUCT_TOUR_SECTION_IDS.ai,
};

const WORKFLOW_RETURN_LABEL: Record<TourWorkflowId, string> = {
  platform: "Platform workflow",
  financial: "Financial workflow",
  field: "Field workflow",
  ai: "AI workflow",
};

export function productTourWorkflowHash(workflow: TourWorkflowId): string {
  return `${ROUTES.productTour}#${WORKFLOW_SECTION[workflow]}`;
}

export function productTourReturnLabel(workflow: TourWorkflowId): string {
  return WORKFLOW_RETURN_LABEL[workflow];
}

export function isTourWorkflowId(value: string | null | undefined): value is TourWorkflowId {
  return value === "platform" || value === "financial" || value === "field" || value === "ai";
}

export function featureHrefFromProductTour(slug: string, workflow: TourWorkflowId): string {
  const params = new URLSearchParams({
    from: PRODUCT_TOUR_FROM_QUERY,
    workflow,
  });
  return `${featureAreaPath(slug)}?${params.toString()}`;
}

function resolveCapabilities(
  workflow: TourWorkflowId,
  seeds: readonly TourCapabilitySeed[],
): ResolvedTourCapability[] {
  const out: ResolvedTourCapability[] = [];
  for (const seed of seeds) {
    const feature = getFeatureAreaBySlug(seed.slug);
    if (!feature) continue;
    out.push(resolveOne(workflow, seed, feature));
  }
  return out;
}

function resolveOne(
  workflow: TourWorkflowId,
  seed: TourCapabilitySeed,
  feature: FeatureAreaDetail,
): ResolvedTourCapability {
  return {
    slug: seed.slug,
    label: feature.label,
    shortLabel: seed.shortLabel ?? feature.label,
    description: seed.description ?? feature.description,
    href: featureHrefFromProductTour(seed.slug, workflow),
    exploreLabel: `Explore ${feature.label}`,
    statusNote: seed.statusNote,
  };
}

/** Platform walkthrough — major project-management capabilities on the tour. */
export const PLATFORM_TOUR_FEATURE_LINKS: readonly TourCapabilitySeed[] = [
  {
    slug: "projects",
    description: "Project setup and the shared project record.",
  },
  {
    slug: "documents",
    description: "Keep project documents connected to active work.",
  },
  {
    slug: "scheduling",
    description: "Coordinate project activities and schedule context.",
  },
  {
    slug: "rfis",
    description: "Keep questions and responses connected to the project.",
  },
  {
    slug: "submittals",
    description: "Route submittals with project and document context.",
  },
  {
    slug: "change-orders",
    description: "Track changes with financial and project visibility.",
  },
  {
    slug: "punch",
    description: "Close out punch items tied to the project record.",
  },
];

/** Financial workflow — progression order for capability rail. */
export const FINANCIAL_TOUR_FEATURE_LINKS: readonly TourCapabilitySeed[] = [
  {
    slug: "budget-job-cost",
    shortLabel: "Budget",
    description: "Budget, job cost, and cost visibility.",
  },
  {
    slug: "billing",
    shortLabel: "Billing",
    description: "Progress billing and receivables on the project.",
  },
  {
    slug: "aia-pay-applications",
    shortLabel: "Pay Apps",
    description: "AIA pay applications and SOV workflows.",
  },
  {
    slug: "native-accounting",
    shortLabel: "Accounting",
    description: "Native AP, GL, and project accounting.",
  },
  {
    slug: "wip",
    shortLabel: "WIP",
    description: "Work-in-progress and financial visibility.",
  },
  {
    slug: "cash-flow",
    shortLabel: "Cash Flow",
    description: "Cash flow visibility across operations.",
  },
];

/** Field workflow — field execution capabilities. */
export const FIELD_TOUR_FEATURE_LINKS: readonly TourCapabilitySeed[] = [
  {
    slug: "daily-logs",
    description: "Capture work completed and site conditions.",
  },
  {
    slug: "drawings",
    description: "Keep current drawing context available.",
  },
  {
    slug: "rfis",
    description: "Manage questions from the field.",
  },
  {
    slug: "punch",
    description: "Track field completion items.",
  },
  {
    slug: "safety",
    description: "Connect safety activity to the project.",
  },
  {
    slug: "time",
    description: "Capture workforce time.",
  },
];

/** AI workflow — intelligence pipeline order (human confirmation on writes). */
export const AI_TOUR_FEATURE_LINKS: readonly TourCapabilitySeed[] = [
  {
    slug: "ai-assistant",
    description: "Ask project questions grounded in live data.",
  },
  {
    slug: "project-intelligence",
    description: "Surface insights from connected project workflows.",
  },
  {
    slug: "document-intelligence",
    description: "Work with documents through permission-scoped AI.",
  },
  {
    slug: "automation",
    description: "AI tool actions with logging and confirmed writes.",
  },
  {
    slug: "predictive-insights",
    description: "Predictive signals from connected project data.",
  },
];

export function getPlatformTourCapabilities(): ResolvedTourCapability[] {
  return resolveCapabilities("platform", PLATFORM_TOUR_FEATURE_LINKS);
}

export function getFinancialTourCapabilities(): ResolvedTourCapability[] {
  return resolveCapabilities("financial", FINANCIAL_TOUR_FEATURE_LINKS);
}

export function getFieldTourCapabilities(): ResolvedTourCapability[] {
  return resolveCapabilities("field", FIELD_TOUR_FEATURE_LINKS);
}

export function getAiTourCapabilities(): ResolvedTourCapability[] {
  return resolveCapabilities("ai", AI_TOUR_FEATURE_LINKS);
}

export function getTourCapabilitiesForWorkflow(workflow: TourWorkflowId): ResolvedTourCapability[] {
  switch (workflow) {
    case "platform":
      return getPlatformTourCapabilities();
    case "financial":
      return getFinancialTourCapabilities();
    case "field":
      return getFieldTourCapabilities();
    case "ai":
      return getAiTourCapabilities();
  }
}
