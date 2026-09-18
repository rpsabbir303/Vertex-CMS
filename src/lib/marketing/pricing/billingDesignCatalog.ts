import { getBillingSetupCatalog } from "./billingCatalog";
import { getActivePlans } from "./index";
import type { BillingSetupCatalog } from "./types";

/** Documented billing add-ons for the standalone design-capture page only. */
export const BILLING_DESIGN_PURCHASABLE_IDS = [
  "ai-packs",
  "storage",
  "seats",
  "website-builder",
  "payroll",
] as const;

/** Fixed trial end for deterministic html.to.design capture. */
export const BILLING_DESIGN_TRIAL_ENDS_AT = "2026-06-15T00:00:00.000Z";

export function getBillingSetupDesignCatalog(): BillingSetupCatalog {
  const full = getBillingSetupCatalog();
  const allowed = new Set<string>(BILLING_DESIGN_PURCHASABLE_IDS);
  return {
    purchasable: full.purchasable.filter((addon) => allowed.has(addon.id)),
    enterprise: full.enterprise,
    roadmap: full.roadmap,
  };
}

export function pickDefaultDesignPlanId(): string | undefined {
  const plans = getActivePlans();
  if (plans.length === 0) return undefined;
  return (
    plans.find((plan) => plan.cta.action === "trial")?.id ??
    plans.find((plan) => plan.cta.action !== "quote")?.id ??
    plans[0]?.id
  );
}
