/**
 * Feature category pages — dedicated long-form pages for major capability groups.
 * Features landing hub modules stay separate; category pages share this nav model.
 */

import { ROUTES } from "@/lib/marketing/navigation";
import { HUB_MODULES, type HubModuleSection } from "./hub";
import { getFeatureAreaBySlug, type FeatureAreaDetail } from "./featureAreas";
import { planLabel, type PreviewKey, type TenantModule, TENANT_MODULES } from "./register";

export function featureCategoryPath(categoryId: string): string {
  return `${ROUTES.features}/${categoryId}`;
}

/** Categories that have a dedicated page implemented */
export const FEATURE_CATEGORY_PAGES = new Set([
  "project-management",
  "preconstruction",
  "documents-project-information",
  "rfis",
  "submittals",
  "change-orders",
]);

export function categoryNavHref(categoryId: string): string {
  if (FEATURE_CATEGORY_PAGES.has(categoryId)) {
    return featureCategoryPath(categoryId);
  }
  return `${ROUTES.features}#${categoryId}`;
}

export function getHubCategory(categoryId: string): HubModuleSection | undefined {
  return HUB_MODULES.find((m) => m.id === categoryId);
}

export type FeatureCategoryNavItem = {
  id: string;
  number: string;
  title: string;
  description: string;
};

const PRECONSTRUCTION_NAV: Omit<FeatureCategoryNavItem, "number"> = {
  id: "preconstruction",
  title: "Preconstruction",
  description:
    "Win the right work with estimating, bidding, quantity takeoff, and opportunity management.",
};

const DOCUMENTS_NAV: Omit<FeatureCategoryNavItem, "number"> = {
  id: "documents-project-information",
  title: "Documents & Drawings",
  description:
    "Organize drawings, specifications, and project files with controlled revisions, search, and transmittals.",
};

const RFIS_NAV: Omit<FeatureCategoryNavItem, "number"> = {
  id: "rfis",
  title: "RFIs",
  description:
    "Create, assign, track, and respond to project RFIs with status, priority, and connected context.",
};

const SUBMITTALS_NAV: Omit<FeatureCategoryNavItem, "number"> = {
  id: "submittals",
  title: "Submittals",
  description:
    "Create, organize, review, and track project submittals with status, reviewers, and clear progress.",
};

const CHANGE_ORDERS_NAV: Omit<FeatureCategoryNavItem, "number"> = {
  id: "change-orders",
  title: "Change Orders",
  description:
    "Manage change order requests and change orders with contract revision impact and cost visibility.",
};

/**
 * Category-page navigation: hub modules + dedicated category pages,
 * numbered sequentially for the category-page series.
 */
export function getFeatureCategoryNavItems(): FeatureCategoryNavItem[] {
  const items: Omit<FeatureCategoryNavItem, "number">[] = [];
  for (const m of HUB_MODULES) {
    items.push({
      id: m.id,
      title: m.title,
      description: m.description,
    });
    if (m.id === "project-management") {
      items.push(PRECONSTRUCTION_NAV);
      items.push(DOCUMENTS_NAV);
      items.push(RFIS_NAV);
      items.push(SUBMITTALS_NAV);
      items.push(CHANGE_ORDERS_NAV);
    }
  }
  return items.map((item, index) => ({
    ...item,
    number: String(index + 1).padStart(2, "0"),
  }));
}

export type CategoryCapabilityBlock = {
  slug: string;
  areaId: string;
  label: string;
  sectionLabel: string;
  title: string;
  description: string;
  points: string[];
  preview: PreviewKey;
  dark?: boolean;
  ctaLabel: string;
  href: string;
  reverse: boolean;
  surface: "white" | "soft" | "mist";
  availabilityNote?: string;
};

function areaOrFallback(slug: string): FeatureAreaDetail | undefined {
  return getFeatureAreaBySlug(slug);
}

function moduleByCode(code: string): TenantModule | undefined {
  return TENANT_MODULES.find((m) => m.code === code);
}

function availabilityForCode(code: string): string | undefined {
  const mod = moduleByCode(code);
  if (!mod) return undefined;
  const label = planLabel(mod.plans, mod.basicOnStarter);
  // Surface plan context for Premium+/Add-on capabilities — not "coming soon"
  if (label.startsWith("Premium") || label.startsWith("Add-on") || label.startsWith("Enterprise")) {
    return `Available on ${label}`;
  }
  return undefined;
}

export function relatedCategoriesFor(activeId: string, allowedIds?: string[]) {
  const allow =
    allowedIds ??
    [
      "project-management",
      "preconstruction",
      "financial-management",
      "field-operations",
      "compliance",
      "ai",
      "growth",
    ];
  return getFeatureCategoryNavItems()
    .filter((m) => m.id !== activeId && allow.includes(m.id))
    .map((m) => ({
      id: m.id,
      number: m.number,
      title: m.title,
      description: m.description,
      href: categoryNavHref(m.id),
    }));
}

export const projectManagementCategory = {
  id: "project-management",
  eyebrow: "Project Management",
  headline: "Keep every project workflow connected.",
  supporting:
    "Bring project information, schedules, documents, RFIs, submittals, and change orders into one connected construction management workflow.",
  primaryCta: { label: "Explore Capabilities", href: "#pm-capabilities" },
  secondaryCta: { label: "Book a Demo", href: "/book-demo" },
  heroPreview: "project" as PreviewKey,
  overview: {
    eyebrow: "Capability exploration",
    headline: "Choose a Project Management workflow to explore.",
    supporting:
      "Each capability is a specific workflow you can open from this category—Projects, Scheduling, Documents, RFIs, Submittals, and Change Orders.",
  },
  workflow: {
    headline: "One project. Connected workflows.",
    supporting:
      "Keep the information created across project workflows connected so teams can make decisions with the right context.",
    steps: [
      { label: "Project", href: `${ROUTES.features}/projects` },
      { label: "Schedule", href: `${ROUTES.features}/scheduling` },
      { label: "Documents", href: `${ROUTES.features}/documents` },
      { label: "RFI / Submittal", href: `${ROUTES.features}/rfis` },
      { label: "Change Order", href: `${ROUTES.features}/change-orders` },
    ] as const,
  },
  plan: {
    headline: "See what's included in your plan",
    supporting: "Explore feature availability across Vertex CMS plans.",
    cta: { label: "Compare Plans", href: ROUTES.pricing },
  },
  finalCta: {
    headline: "See Project Management in action.",
    supporting:
      "Explore how Vertex CMS connects the workflows your construction teams rely on every day.",
    primary: { label: "Book a Demo", href: "/book-demo" },
    secondary: { label: "Explore All Features", href: ROUTES.features },
  },
} as const;

export function getProjectManagementRelatedCategories() {
  const categories = relatedCategoriesFor("project-management", [
    "preconstruction",
    "financial-management",
    "field-operations",
    "compliance",
    "ai",
  ]);
  const workforce = getFeatureAreaBySlug("workforce");
  return [
    ...categories,
    ...(workforce
      ? [
          {
            id: "workforce",
            number: "—",
            title: workforce.label,
            description: workforce.description,
            href: `${ROUTES.features}/workforce`,
          },
        ]
      : []),
  ];
}

const PM_PREVIEW_BY_SLUG: Record<string, PreviewKey> = {
  projects: "project",
  scheduling: "schedule",
  documents: "docs",
  rfis: "rfi",
  submittals: "submittal",
  "change-orders": "changeOrder",
};

export function getProjectManagementCapabilityBlocks(): CategoryCapabilityBlock[] {
  const specs: Array<{
    slug: string;
    areaId: string;
    title: string;
    description: string;
  }> = [
    {
      slug: "projects",
      areaId: "pm-projects",
      title: "Projects",
      description:
        "Create and manage construction projects from a centralized workspace, with project information, phases, members, status, and financial visibility connected in one place.",
    },
    {
      slug: "scheduling",
      areaId: "pm-scheduling",
      title: "Scheduling",
      description:
        "Plan and coordinate project work with schedules, activities, dependencies, milestones, critical path visibility, look-ahead planning, and schedule variance.",
    },
    {
      slug: "documents",
      areaId: "pm-documents",
      title: "Documents",
      description:
        "Centralize project documents and keep project information organized, accessible, and connected to the workflows that depend on it.",
    },
    {
      slug: "rfis",
      areaId: "pm-rfis",
      title: "RFIs",
      description:
        "Create, track, review, and manage requests for information while keeping questions, responses, attachments, and project context connected.",
    },
    {
      slug: "submittals",
      areaId: "pm-submittals",
      title: "Submittals",
      description:
        "Manage submittals through review and approval while keeping requirements, status, deadlines, and project teams aligned.",
    },
    {
      slug: "change-orders",
      areaId: "pm-change-orders",
      title: "Change Orders",
      description:
        "Track change order requests and approvals with visibility into contract impact, cost changes, and project decisions.",
    },
  ];

  return specs.map((spec, index) => {
    const detail = areaOrFallback(spec.slug);
    const reverse = index % 2 === 1;
    return {
      slug: spec.slug,
      areaId: spec.areaId,
      label: spec.title,
      sectionLabel: spec.title,
      title: spec.title,
      description: spec.description,
      points: [],
      preview: PM_PREVIEW_BY_SLUG[spec.slug] ?? detail?.preview ?? "project",
      dark: spec.slug === "change-orders" ? true : detail?.dark,
      ctaLabel: `Explore ${spec.title}`,
      href: `${ROUTES.features}/${spec.slug}`,
      reverse,
      surface: "white" as const,
    };
  });
}

export const preconstructionCategory = {
  id: "preconstruction",
  eyebrow: "Preconstruction",
  headline: "Win the right work at the right price.",
  supporting:
    "Bring estimating, bidding, quantity takeoff, and opportunity management together to make better decisions before construction begins.",
  primaryCta: { label: "Explore Preconstruction", href: "#precon-intro" },
  secondaryCta: { label: "Book a Demo", href: "/book-demo" },
  intro: {
    headline: "Build a stronger pipeline before the project starts.",
    supporting:
      "Connect opportunities, estimates, bids, and takeoffs in one workflow so your team can evaluate work, build accurate pricing, and move qualified opportunities forward with confidence.",
    flow: ["Opportunity", "Estimate", "Bid", "Award", "Project"] as const,
  },
  workflow: {
    headline: "From opportunity to awarded project.",
    supporting:
      "Keep the information created during preconstruction connected so teams can move from winning work to executing it without losing context.",
    steps: ["Opportunity", "Estimate", "Takeoff", "Bid", "Award", "Project"] as const,
  },
  outcomes: [
    {
      title: "Better estimates",
      body: "Build pricing from structured cost and estimate data.",
    },
    {
      title: "Smarter bid decisions",
      body: "Compare subcontractor bids in a clear, consistent view.",
    },
    {
      title: "Stronger opportunity visibility",
      body: "Understand where every opportunity stands.",
    },
    {
      title: "Smoother project handoff",
      body: "Carry approved preconstruction information into project workflows.",
    },
  ],
  finalCta: {
    headline: "Turn better preconstruction decisions into better projects.",
    supporting:
      "Connect estimating, bidding, takeoff, and opportunity management in one construction management platform.",
    primary: { label: "Book a Demo", href: "/book-demo" },
    secondary: { label: "Explore All Features", href: ROUTES.features },
  },
} as const;

export function getPreconstructionRelatedCategories() {
  return relatedCategoriesFor("preconstruction").filter((m) =>
    ["project-management", "financial-management", "field-operations", "compliance"].includes(m.id)
  );
}

export function getPreconstructionCapabilityBlocks(): CategoryCapabilityBlock[] {
  const specs: Array<{
    slug: string;
    areaId: string;
    moduleCode: string;
    sectionLabel: string;
    title: string;
    description: string;
    points: string[];
    reverse: boolean;
    surface: "white" | "soft" | "mist";
    ctaLabel: string;
    previewFallback: PreviewKey;
  }> = [
    {
      slug: "estimating",
      areaId: "pc-estimating",
      moduleCode: "EST",
      sectionLabel: "01 — Estimating",
      title: "Build accurate estimates with confidence.",
      description:
        "Create multiple versioned estimates while keeping estimate history intact. Calculate subtotal, overhead, profit, contingency, tax, and total values in one connected workflow.",
      points: [
        "Versioned estimates with history preserved",
        "Line items, cost codes, quantities, and unit costs",
        "Overhead, profit, contingency, and tax in one total",
        "Approved estimates can feed project budget and Schedule of Values",
      ],
      reverse: false,
      surface: "white",
      ctaLabel: "Explore Estimating",
      previewFallback: "estimating",
    },
    {
      slug: "bid-management",
      areaId: "pc-bid-management",
      moduleCode: "BID",
      sectionLabel: "02 — Bid Management",
      title: "Compare bids. Make better awards.",
      description:
        "Create bid packages, invite subcontractors from approved lists, manage bid responses, and compare submitted bids side by side before making an award decision.",
      points: [
        "Bid packages organized by trade",
        "Invitations to approved subcontractor lists",
        "Submission status and due-date visibility",
        "Side-by-side bid comparison before award",
      ],
      reverse: true,
      surface: "soft",
      ctaLabel: "Explore Bid Management",
      previewFallback: "bid",
    },
    {
      slug: "quantity-takeoff",
      areaId: "pc-quantity-takeoff",
      moduleCode: "TAKEOFF",
      sectionLabel: "03 — Quantity Takeoff",
      title: "Turn plans into measurable quantities.",
      description:
        "Use digital plan takeoff workflows to measure project quantities and support more informed estimating decisions.",
      points: [
        "Digital plan measurement workflows",
        "Quantity markers and measurement totals",
        "Takeoff linked to estimating context",
        "Support for more informed pricing decisions",
      ],
      reverse: false,
      surface: "mist",
      ctaLabel: "Explore Quantity Takeoff",
      previewFallback: "takeoff",
    },
    {
      slug: "crm",
      areaId: "bg-crm",
      moduleCode: "CRM",
      sectionLabel: "04 — CRM / Pipeline",
      title: "Keep every opportunity moving.",
      description:
        "Manage leads and opportunities through a connected pipeline, evaluate go/no-go decisions, and learn from bid win/loss outcomes.",
      points: [
        "Opportunity pipeline from lead through award",
        "Go/no-go evaluation on pursuits",
        "Opportunity value, client, and close context",
        "Win/loss outcomes connected to the pipeline",
      ],
      reverse: true,
      surface: "white",
      ctaLabel: "Explore CRM",
      previewFallback: "crm",
    },
  ];

  return specs.map((spec) => {
    const detail = areaOrFallback(spec.slug);
    return {
      slug: spec.slug,
      areaId: spec.areaId,
      label: detail?.label ?? spec.slug,
      sectionLabel: spec.sectionLabel,
      title: spec.title,
      description: spec.description,
      points: spec.points,
      preview: detail?.preview ?? spec.previewFallback,
      dark: detail?.dark,
      ctaLabel: spec.ctaLabel,
      href: `${ROUTES.features}/${spec.slug}`,
      reverse: spec.reverse,
      surface: spec.surface,
      availabilityNote: availabilityForCode(spec.moduleCode),
    };
  });
}
