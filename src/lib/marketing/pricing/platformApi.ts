/**
 * Platform pricing API boundary (preview simulation).
 * Production replaces fetchPlatformPricing() with the real plan/pricing API.
 * UI never hardcodes amounts — values arrive only through this layer.
 */

import { PLACEHOLDER_CATALOG } from "./data";
import type { Plan, PricingCatalog } from "./types";

export type PlatformPriceRecord = {
  planId: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  currency: string;
};

export type PlatformPricingResponse = {
  source: "api";
  prices: PlatformPriceRecord[];
  fetchedAt: string;
};

/** Simulated platform response for local/preview — swap for real HTTP in production. */
async function fetchPlatformPricingPayload(): Promise<PlatformPricingResponse> {
  await new Promise((r) => setTimeout(r, 200));

  // Empty array = platform connected but no numeric prices published yet.
  // Preview default supplies representative runtime values for QA of loaded state.
  const previewPrices: PlatformPriceRecord[] = [
    { planId: "starter", monthlyPrice: 99, yearlyPrice: 990, currency: "USD" },
    { planId: "pro", monthlyPrice: 299, yearlyPrice: 2990, currency: "USD" },
    { planId: "premium", monthlyPrice: 499, yearlyPrice: 4990, currency: "USD" },
    { planId: "enterprise", monthlyPrice: null, yearlyPrice: null, currency: "USD" },
  ];

  return {
    source: "api",
    prices: previewPrices,
    fetchedAt: new Date().toISOString(),
  };
}

function mergePricesIntoCatalog(base: PricingCatalog, response: PlatformPricingResponse): PricingCatalog {
  const priceById = new Map(response.prices.map((p) => [p.planId, p]));

  const plans: Plan[] = base.plans.map((plan) => {
    const live = priceById.get(plan.id);
    if (!live) return { ...plan };
    return {
      ...plan,
      monthlyPrice: live.monthlyPrice,
      yearlyPrice: live.yearlyPrice,
      currency: live.currency || plan.currency,
    };
  });

  return {
    ...base,
    source: "api",
    plans,
  };
}

export async function fetchPlatformPricingCatalog(): Promise<PricingCatalog> {
  const payload = await fetchPlatformPricingPayload();
  return mergePricesIntoCatalog(PLACEHOLDER_CATALOG, payload);
}
