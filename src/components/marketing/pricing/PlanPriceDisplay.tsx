"use client";

import { formatPlanPrice, getPlanPrice, type Plan, type PricingPeriod } from "@/lib/marketing/pricing";
import { PricingPriceSkeleton } from "./PricingCardSkeleton";

export type PriceDisplayMode = "loading" | "error" | "loaded";

type Props = {
  plan: Plan;
  period: PricingPeriod;
  mode: PriceDisplayMode;
};

function isEnterpriseQuotePlan(plan: Plan): boolean {
  return plan.cta.action === "quote";
}

export function PlanPriceDisplay({ plan, period, mode }: Props) {
  if (mode === "loading") {
    return <PricingPriceSkeleton />;
  }

  if (mode === "error") {
    return (
      <div className="min-h-[92px]" role="status">
        <p className="font-display text-lg font-bold tracking-tight text-brand-navy">Pricing is temporarily unavailable.</p>
        <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">Use Retry above or continue with Request Quote.</p>
      </div>
    );
  }

  const amount = getPlanPrice(plan, period);
  const formatted = formatPlanPrice(amount, plan.currency);

  if (formatted != null) {
    return (
      <div className="min-h-[92px]">
        <div className="flex min-h-[48px] flex-wrap items-end gap-x-1 gap-y-0">
          <p className="max-w-full truncate font-display text-3xl font-bold tracking-tight text-brand-navy tabular-nums sm:text-4xl">
            {formatted}
          </p>
          <span className="mb-1 shrink-0 text-[13px] text-brand-muted">/{period === "yearly" ? "year" : "month"}</span>
        </div>
        <p className="mt-1 text-[13px] text-brand-muted">
          {period === "yearly" ? "Billed yearly" : "Billed monthly"} · {plan.currency}
        </p>
      </div>
    );
  }

  if (isEnterpriseQuotePlan(plan)) {
    return (
      <div className="min-h-[92px]">
        <p className="font-display text-3xl font-bold tracking-tight text-brand-navy">Contact us</p>
        <p className="mt-1 text-[13px] text-brand-muted">Custom packaging for larger construction organizations</p>
      </div>
    );
  }

  return (
    <div className="min-h-[92px]">
      <p className="font-display text-xl font-bold tracking-tight text-brand-navy">Pricing on request</p>
      <p className="mt-1 text-[13px] text-brand-muted">Start your trial — plan pricing follows your account configuration.</p>
    </div>
  );
}
