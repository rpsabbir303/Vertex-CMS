import { CTAS, ROUTES } from "@/lib/marketing/navigation";
import { planQuoteHref, planSignupHref } from "./planLinks";
import type { Plan, PricingPeriod } from "./types";

/** Visitor intent from Pricing — trial (default) or upgrade-oriented conversion. */
export type PricingIntent = "trial" | "upgrade";

export function resolvePricingIntent(value: string | null | undefined): PricingIntent {
  return value === "upgrade" ? "upgrade" : "trial";
}

export type PlanCtaOptions = {
  period: PricingPeriod;
  intent?: PricingIntent;
};

export function planCtaHref(plan: Plan, options: PlanCtaOptions): string {
  const intent = options.intent ?? "trial";

  if (plan.cta.action === "demo") return CTAS.demo.href;
  if (plan.cta.action === "contact") return ROUTES.contact;
  if (plan.cta.action === "quote") {
    return planQuoteHref(plan.id, { period: options.period, intent });
  }

  if (intent === "upgrade") {
    return planQuoteHref(plan.id, { period: options.period, intent: "upgrade" });
  }

  return planSignupHref(plan.id, { period: options.period, intent: "trial" });
}

export function planCtaLabel(plan: Plan, intent: PricingIntent = "trial"): string {
  if (plan.cta.action === "quote") return "Request a Quote";

  if (intent === "upgrade" && plan.cta.action === "trial") {
    return `Upgrade to ${plan.name}`;
  }

  return "Start Free Trial";
}

export function planCtaDescription(plan: Plan, intent: PricingIntent = "trial"): string {
  if (plan.cta.action === "quote") {
    return `Request a quote for the ${plan.name} plan.`;
  }
  if (intent === "upgrade") {
    return `Continue toward upgrading to the ${plan.name} plan.`;
  }
  if (plan.cta.action === "trial") {
    return `Start a free trial on the ${plan.name} plan.`;
  }
  return plan.cta.label;
}

export function isRecommendedPlan(plan: Plan): boolean {
  return !!plan.popular;
}
