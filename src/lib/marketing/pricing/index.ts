import { PLACEHOLDER_CATALOG } from "./data";
import type { AddOn, Plan, PricingCatalog, PricingPeriod } from "./types";

export type { Plan, PricingPeriod, PricingCatalog, FeatureGroup, AddOn, PricingFAQ, EntitlementValue } from "./types";
export { addonPriceCopy, isAddonIncludedInPlan } from "./addons";

/**
 * Single entry point for pricing data.
 * Swap the body to fetch/sync live plans when the API is ready.
 */
export function getPricingCatalog(): PricingCatalog {
  // TODO: replace with live plan synchronization (active plans, sort, currency, prices).
  return PLACEHOLDER_CATALOG;
}

export function getActivePlans(catalog: PricingCatalog = getPricingCatalog()): Plan[] {
  return catalog.plans.filter((p) => p.active).sort((a, b) => a.sort - b.sort);
}

export function getActiveAddOns(catalog: PricingCatalog = getPricingCatalog()): AddOn[] {
  return catalog.addOns.filter((addon) => addon.active).sort((a, b) => a.sort - b.sort);
}

export function getPlanPrice(plan: Plan, period: PricingPeriod): number | null {
  return period === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
}

/**
 * Returns a savings percent only when both prices exist and yearly is lower.
 * Never invents a discount.
 */
export function getYearlySavingsPercent(plan: Plan): number | null {
  if (plan.monthlyPrice == null || plan.yearlyPrice == null) return null;
  if (plan.monthlyPrice <= 0) return null;
  const yearlyIfMonthly = plan.monthlyPrice * 12;
  if (yearlyIfMonthly <= plan.yearlyPrice) return null;
  return Math.round(((yearlyIfMonthly - plan.yearlyPrice) / yearlyIfMonthly) * 100);
}

/** Max savings across plans with real prices; null if none calculable. */
export function getCatalogYearlySavingsPercent(catalog: PricingCatalog = getPricingCatalog()): number | null {
  const percents = getActivePlans(catalog)
    .map(getYearlySavingsPercent)
    .filter((n): n is number => n != null && n > 0);
  if (percents.length === 0) return null;
  return Math.max(...percents);
}

export function formatPlanPrice(amount: number | null, currency: string): string | null {
  if (amount == null) return null;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${currency} ${amount}`;
  }
}

export type { PlanContextQuery } from "./planLinks";
export { planSignupHref, planQuoteHref } from "./planLinks";

export { fetchPricingCatalog, getPricingStructureFallback, PricingLoadError } from "./loader";
export type { PricingIntent } from "./cta";
export {
  planCtaHref,
  planCtaLabel,
  planCtaDescription,
  isRecommendedPlan,
  resolvePricingIntent,
} from "./cta";
