import type { PricingPeriod } from "./types";

export type PlanContextQuery = {
  period?: PricingPeriod;
  intent?: "trial" | "upgrade";
};

function buildPlanQuery(planId: string, options?: PlanContextQuery): string {
  const params = new URLSearchParams();
  params.set("plan", planId);
  if (options?.period) params.set("period", options.period);
  if (options?.intent && options.intent !== "trial") params.set("intent", options.intent);
  return params.toString();
}

export function planSignupHref(planId: string, options?: PlanContextQuery): string {
  return `/signup?${buildPlanQuery(planId, options)}`;
}

export function planQuoteHref(planId: string, options?: PlanContextQuery): string {
  return `/request-quote?${buildPlanQuery(planId, options)}`;
}
