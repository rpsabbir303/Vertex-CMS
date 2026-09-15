import { PLACEHOLDER_CATALOG } from "./data";
import type { PricingCatalog } from "./types";
import { fetchPlatformPricingCatalog } from "./platformApi";

export class PricingLoadError extends Error {
  constructor(message = "Pricing is temporarily unavailable.") {
    super(message);
    this.name = "PricingLoadError";
  }
}

const INITIAL_LOAD_MS = 900;
const PERIOD_REFRESH_MS = 400;

/**
 * Fetch live pricing catalog from platform API.
 */
export async function fetchPricingCatalog(options?: {
  forceError?: boolean;
  delayMs?: number;
}): Promise<PricingCatalog> {
  await new Promise((resolve) => setTimeout(resolve, options?.delayMs ?? INITIAL_LOAD_MS));

  if (options?.forceError) {
    throw new PricingLoadError();
  }

  return fetchPlatformPricingCatalog();
}

/** Brief delay when billing period changes — simulates period-specific price refresh. */
export async function refreshPricingForPeriod(_period: "monthly" | "yearly"): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, PERIOD_REFRESH_MS));
}

export function getPricingStructureFallback(): PricingCatalog {
  return PLACEHOLDER_CATALOG;
}
