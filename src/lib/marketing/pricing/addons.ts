/**
 * Billing add-on catalog — data-driven from documented SKUs + feature register.
 * New register modules with `plans` including "addon" appear here automatically.
 * Do not invent prices or quantity models the API does not provide.
 */

import { PLATFORM_SERVICES, TENANT_MODULES } from "@/lib/marketing/features/register";
import type { AddOn } from "./types";

const DEFAULT_PRICE_LANGUAGE = "Pricing configured separately";

/** Documented billing SKUs that are not standalone tenant modules. */
const CAPACITY_ADDONS: AddOn[] = [
  {
    id: "ai-packs",
    name: "AI Token Pack",
    description: "Additional AI usage above the included plan quota for project questions, insights, and document intelligence.",
    category: "ai",
    priceLabel: null,
    billingModel: "Per pack / overage above plan quota",
    active: true,
    sort: 1,
  },
  {
    id: "storage",
    name: "Extra Storage",
    description: "Expand document and media capacity as your project portfolio grows.",
    category: "storage",
    priceLabel: null,
    billingModel: "Per 100 GB / month",
    active: true,
    sort: 2,
  },
  {
    id: "seats",
    name: "Extra Seats",
    description: "Add additional active users so office, field, and financial roles stay connected.",
    category: "seats",
    priceLabel: null,
    billingModel: "Per active user / month",
    active: true,
    sort: 3,
  },
];

/** Documented billing-model copy — no dollar amounts. */
const DOCUMENTED_BILLING_MODELS: Record<string, string> = {
  "website-builder": "Flat monthly or bundled in Premium",
  payroll: "Flat monthly",
};

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
};

function includedPlanIds(plans: string[]): string[] {
  return plans.filter((plan) => plan !== "addon");
}

function fromTenantModules(): AddOn[] {
  return TENANT_MODULES.filter((mod) => mod.plans.includes("addon")).map((mod, index) => ({
    id: mod.id,
    name: mod.name,
    description: mod.description,
    category: mod.group,
    priceLabel: null,
    billingModel: DOCUMENTED_BILLING_MODELS[mod.id] ?? null,
    active: true,
    sort: PREFERRED_SORT[mod.id] ?? 20 + index,
    includedInPlanIds: includedPlanIds(mod.plans),
  }));
}

function fromPlatformServices(): AddOn[] {
  return PLATFORM_SERVICES.filter((service) => service.availability === "addon").map((service, index) => ({
    id: service.code.toLowerCase(),
    name: service.name,
    description: service.description,
    category: "platform",
    priceLabel: null,
    billingModel: null,
    active: true,
    sort: PREFERRED_SORT[service.code.toLowerCase()] ?? 40 + index,
  }));
}

export function addonPriceCopy(addon: AddOn): string {
  return addon.priceLabel ?? addon.billingModel ?? DEFAULT_PRICE_LANGUAGE;
}

export function isAddonIncludedInPlan(addon: AddOn, planId: string | undefined): boolean {
  if (!planId) return false;
  return Boolean(addon.includedInPlanIds?.includes(planId));
}

/** Merge capacity SKUs, register add-on modules, and platform add-on services. Dedupes by id. */
export function buildCatalogAddOns(): AddOn[] {
  const byId = new Map<string, AddOn>();
  for (const addon of [...CAPACITY_ADDONS, ...fromTenantModules(), ...fromPlatformServices()]) {
    if (!byId.has(addon.id)) byId.set(addon.id, addon);
  }
  return Array.from(byId.values()).sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name));
}
