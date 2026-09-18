/**
 * Authoritative billing setup catalog — BRD documented SKUs + feature register + platform services.
 * Does not promote plan-included product modules to purchasable add-ons.
 */

import {
  ENTERPRISE_CAPABILITIES,
  PLATFORM_SERVICES,
  TENANT_MODULES,
  type PlanTier,
} from "@/lib/marketing/features/register";
import { aiGovernanceEditorial } from "@/lib/marketing/security/content";
import type { AddOn, AddOnUiKind, BillingSetupCatalog } from "./types";

const DEFAULT_PRICE_LANGUAGE = "Pricing configured separately";

/** Display labels for category keys present in the merged catalog. */
export const BILLING_CATEGORY_LABELS: Record<string, string> = {
  ai: "AI & Intelligence",
  storage: "Capacity",
  seats: "Capacity",
  "compliance-workforce": "Compliance & Workforce",
  growth: "Business Growth",
  "preconstruction-financials": "Construction Tools",
  "procurement-compliance": "Compliance",
  "scheduling-field": "Construction Tools",
  "equipment-workforce-closeout": "Compliance & Workforce",
  platform: "Platform",
  enterprise: "Enterprise",
  roadmap: "Roadmap",
};

const DOCUMENTED_BILLING_MODELS: Record<string, string> = {
  "website-builder": "Flat monthly or bundled in Premium",
  payroll: "Flat monthly",
};

/** BRD § billing add-ons — capacity SKUs not represented as tenant modules. */
const DOCUMENTED_CAPACITY_ADDONS: AddOn[] = [
  {
    id: "ai-packs",
    name: "AI Token Pack",
    description:
      "Additional AI usage above the included plan quota for project questions, insights, and document intelligence.",
    category: "ai",
    categoryLabel: BILLING_CATEGORY_LABELS.ai,
    priceLabel: null,
    billingModel: "Per pack / overage above plan quota",
    active: true,
    sort: 1,
    source: "DOCUMENTED_BILLING_ADDON",
    selectable: true,
    listing: "purchasable",
  },
  {
    id: "storage",
    name: "Extra Storage",
    description: "Additional document and media storage capacity as your project portfolio grows.",
    category: "storage",
    categoryLabel: BILLING_CATEGORY_LABELS.storage,
    priceLabel: null,
    billingModel: "Per 100 GB / month",
    active: true,
    sort: 2,
    source: "DOCUMENTED_BILLING_ADDON",
    selectable: true,
    listing: "purchasable",
  },
  {
    id: "seats",
    name: "Extra Seats",
    description: "Additional active users across office, field, and financial roles.",
    category: "seats",
    categoryLabel: BILLING_CATEGORY_LABELS.seats,
    priceLabel: null,
    billingModel: "Per active user / month",
    active: true,
    sort: 3,
    source: "DOCUMENTED_BILLING_ADDON",
    selectable: true,
    listing: "purchasable",
  },
];

const PREFERRED_SORT: Record<string, number> = {
  "ai-packs": 1,
  storage: 2,
  seats: 3,
  "website-builder": 4,
  payroll: 5,
  "quantity-takeoff": 6,
  "bim-viewer": 7,
  "surety-bonds": 8,
  esign: 9,
  "inventory-tools": 10,
};

const BILLING_DISPLAY_NAMES: Record<string, string> = {
  payroll: "Certified Payroll",
};

const BILLING_DESCRIPTION_OVERRIDES: Record<string, string> = {
  payroll:
    "Certified payroll workflows and reporting where supported, connected to payroll runs and workforce timesheets.",
};

function includedPlanIds(plans: PlanTier[]): string[] {
  return plans.filter((plan) => plan !== "addon");
}

function categoryLabelFor(key: string): string {
  return BILLING_CATEGORY_LABELS[key] ?? key.split(/[-_]/).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
}

function fromTenantModules(): AddOn[] {
  return TENANT_MODULES.filter((mod) => mod.plans.includes("addon")).map((mod, index) => {
    const category = mod.id === "payroll" ? "compliance-workforce" : mod.id === "website-builder" ? "growth" : mod.group;
    const documentedSku = mod.id === "website-builder" || mod.id === "payroll";
    return {
      id: mod.id,
      name: BILLING_DISPLAY_NAMES[mod.id] ?? mod.name,
      description: BILLING_DESCRIPTION_OVERRIDES[mod.id] ?? mod.description,
      category,
      categoryLabel: categoryLabelFor(category),
      priceLabel: null,
      billingModel: DOCUMENTED_BILLING_MODELS[mod.id] ?? null,
      active: true,
      sort: PREFERRED_SORT[mod.id] ?? 20 + index,
      includedInPlanIds: includedPlanIds(mod.plans),
      source: documentedSku ? "DOCUMENTED_BILLING_ADDON" : "EXISTING_CONFIGURED_ADDON",
      selectable: true,
      listing: "purchasable",
    };
  });
}

function fromPlatformServices(): AddOn[] {
  return PLATFORM_SERVICES.filter((service) => service.availability === "addon").map((service, index) => ({
    id: service.code.toLowerCase(),
    name: service.name,
    description: service.description,
    category: "platform",
    categoryLabel: BILLING_CATEGORY_LABELS.platform,
    priceLabel: null,
    billingModel: null,
    active: true,
    sort: PREFERRED_SORT[service.code.toLowerCase()] ?? 40 + index,
    source: "EXISTING_CONFIGURED_ADDON" as const,
    selectable: true,
    listing: "purchasable" as const,
  }));
}

function mergePurchasableAddOns(): AddOn[] {
  const byId = new Map<string, AddOn>();
  for (const addon of [...DOCUMENTED_CAPACITY_ADDONS, ...fromTenantModules(), ...fromPlatformServices()]) {
    if (!byId.has(addon.id)) byId.set(addon.id, addon);
  }
  return Array.from(byId.values()).sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name));
}

function buildEnterpriseCapabilities(): AddOn[] {
  return ENTERPRISE_CAPABILITIES.map((cap, index) => ({
    id: cap.code.toLowerCase().replace(/_/g, "-"),
    name: cap.name,
    description: cap.description,
    category: "enterprise",
    categoryLabel: BILLING_CATEGORY_LABELS.enterprise,
    priceLabel: null,
    billingModel: null,
    active: true,
    sort: 100 + index,
    includedInPlanIds: ["enterprise"],
    source: "ENTERPRISE_CAPABILITY" as const,
    selectable: false,
    listing: "enterprise" as const,
  }));
}

function buildRoadmapCapabilities(): AddOn[] {
  return aiGovernanceEditorial.roadmapCapabilities.map((item, index) => ({
    id: `roadmap-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    name: item.title,
    description: item.body,
    category: "roadmap",
    categoryLabel: BILLING_CATEGORY_LABELS.roadmap,
    priceLabel: null,
    billingModel: null,
    active: true,
    sort: 200 + index,
    source: "ROADMAP_CAPABILITY" as const,
    selectable: false,
    listing: "roadmap" as const,
  }));
}

/** Full billing setup catalog — purchasable SKUs plus enterprise and roadmap discovery rows. */
export function getBillingSetupCatalog(): BillingSetupCatalog {
  return {
    purchasable: mergePurchasableAddOns(),
    enterprise: buildEnterpriseCapabilities(),
    roadmap: buildRoadmapCapabilities(),
  };
}

/** Pricing page + checkout — purchasable billing add-ons only. */
export function buildCatalogAddOns(): AddOn[] {
  return getBillingSetupCatalog().purchasable;
}

export function getAddOnCategoryLabel(addon: AddOn): string {
  return addon.categoryLabel ?? categoryLabelFor(addon.category);
}

export function isAddonIncludedInPlan(addon: AddOn, planId: string | undefined): boolean {
  if (!planId) return false;
  return Boolean(addon.includedInPlanIds?.includes(planId));
}

export function isPurchasableAddonForPlan(addon: AddOn, planId: string | undefined): boolean {
  if (!addon.active || addon.selectable === false || addon.listing !== "purchasable") return false;
  if (!planId) return false;
  return !isAddonIncludedInPlan(addon, planId);
}

export function resolveAddOnUiKind(addon: AddOn, planId: string | undefined, selectedIds: string[]): AddOnUiKind {
  if (!addon.active) return "inactive";
  if (addon.listing === "roadmap") return "coming_soon";
  if (addon.listing === "enterprise") {
    if (planId === "enterprise") return "included";
    return "enterprise";
  }
  if (!planId) return "inactive";
  if (isAddonIncludedInPlan(addon, planId)) return "included";
  if (selectedIds.includes(addon.id)) return "selected";
  return "selectable";
}

export function addonPriceCopy(addon: AddOn): string {
  return addon.priceLabel ?? addon.billingModel ?? DEFAULT_PRICE_LANGUAGE;
}

export function filterCheckoutAddonIds(addonIds: string[], planId: string, purchasable: AddOn[] = buildCatalogAddOns()): string[] {
  const byId = new Map(purchasable.map((a) => [a.id, a]));
  return addonIds.filter((id) => {
    const addon = byId.get(id);
    return addon && isPurchasableAddonForPlan(addon, planId);
  });
}
