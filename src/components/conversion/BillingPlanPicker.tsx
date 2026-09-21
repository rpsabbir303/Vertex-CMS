"use client";

import { useState } from "react";
import { BillingCadenceControl } from "@/components/conversion/BillingCadenceControl";
import { AuthClient } from "@/lib/auth/client";
import type { BillingPeriod } from "@/lib/auth/types";
import {
  formatPlanPrice,
  getActivePlans,
  getPlanPrice,
  type Plan,
} from "@/lib/marketing/pricing";

type Props = {
  selectedPlanId?: string;
  billingPeriod: BillingPeriod;
  onPlanChange: (planId: string) => void;
  onPeriodChange: (period: BillingPeriod) => void;
  disabled?: boolean;
  error?: string;
};

function PlanPriceLine({ plan, period }: { plan: Plan; period: BillingPeriod }) {
  const amount = getPlanPrice(plan, period);
  const formatted = formatPlanPrice(amount, plan.currency);
  if (formatted) {
    return (
      <p className="mt-2 text-[13px] font-semibold text-brand-navy">
        {formatted}
        <span className="font-normal text-brand-muted"> / {period === "yearly" ? "yr" : "mo"}</span>
      </p>
    );
  }
  return <p className="mt-2 text-[12px] text-brand-muted">Pricing from plan configuration</p>;
}

export function BillingPlanPicker({
  selectedPlanId,
  billingPeriod,
  onPlanChange,
  onPeriodChange,
  disabled,
  error,
}: Props) {
  const plans = getActivePlans().filter((p) => p.cta.action === "trial" || p.id === "enterprise");
  const [saving, setSaving] = useState<string | null>(null);

  async function select(planId: string) {
    if (disabled || saving) return;
    setSaving(planId);
    const result = await AuthClient.selectCheckoutPlan({ planId, billingPeriod });
    setSaving(null);
    if (result.ok) {
      onPlanChange(planId);
    }
  }

  return (
    <section className="min-w-0 rounded-xl border border-brand-line bg-white p-5 sm:p-6" aria-labelledby="choose-plan-heading">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Select your plan</p>
          <h2 id="choose-plan-heading" className="mt-1 text-[17px] font-semibold text-brand-navy">
            Choose a VertexBuild plan
          </h2>
          <p className="mt-1 text-[13px] text-brand-muted">Starter, Pro, Premium, and Enterprise — loaded from your plan configuration.</p>
        </div>
        <BillingCadenceControl value={billingPeriod} onChange={onPeriodChange} disabled={disabled} />
      </div>

      {error ? (
        <p className="mt-4 text-[13px] font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <ul className="mt-5 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => {
          const selected = plan.id === selectedPlanId;
          const loading = saving === plan.id;
          return (
            <li key={plan.id}>
              <button
                type="button"
                disabled={disabled || Boolean(saving)}
                aria-pressed={selected}
                onClick={() => void select(plan.id)}
                className={
                  "flex h-full w-full min-w-0 flex-col rounded-lg border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:opacity-60 " +
                  (selected
                    ? "border-brand-orange/60 bg-brand-orange/[0.04] ring-1 ring-brand-orange/25"
                    : "border-brand-line bg-[#FAFBFD] hover:border-brand-navy/20 hover:bg-white")
                }
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="text-[15px] font-semibold text-brand-navy">{plan.name}</span>
                  {selected ? (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-[11px] font-bold text-white" aria-hidden="true">
                      ✓
                    </span>
                  ) : null}
                </span>
                <p className="mt-1.5 line-clamp-3 text-[12px] leading-relaxed text-brand-muted">{plan.description}</p>
                <PlanPriceLine plan={plan} period={billingPeriod} />
                {loading ? <span className="mt-2 text-[11px] text-brand-muted">Saving…</span> : null}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function BillingSelectedPlanBanner({
  plan,
  billingPeriod,
  onChangePlan,
  onPeriodChange,
  disabled,
}: {
  plan: Plan;
  billingPeriod: BillingPeriod;
  onChangePlan?: () => void;
  onPeriodChange?: (period: BillingPeriod) => void;
  disabled?: boolean;
}) {
  const amount = getPlanPrice(plan, billingPeriod);
  const formatted = formatPlanPrice(amount, plan.currency);

  return (
    <section className="rounded-xl border border-brand-line bg-white p-5 sm:p-6" aria-label="Selected plan">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Your plan</p>
          <p className="mt-1 text-[20px] font-semibold text-brand-navy">{plan.name}</p>
          <p className="mt-1 max-w-xl text-[14px] leading-relaxed text-brand-muted">{plan.description}</p>
          {formatted ? (
            <p className="mt-2 text-[13px] font-medium text-brand-navy/90">
              {formatted} / {billingPeriod === "yearly" ? "year" : "month"}
            </p>
          ) : (
            <p className="mt-2 text-[13px] text-brand-muted">Pricing from plan configuration</p>
          )}
        </div>
        <div className="flex shrink-0 flex-col items-start gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-end">
          {onPeriodChange ? (
            <BillingCadenceControl value={billingPeriod} onChange={onPeriodChange} disabled={disabled} compact />
          ) : (
            <p className="text-[13px] text-brand-muted">{billingPeriod === "yearly" ? "Yearly" : "Monthly"}</p>
          )}
          {onChangePlan ? (
            <button
              type="button"
              onClick={onChangePlan}
              disabled={disabled}
              className="text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:opacity-60"
            >
              Change plan
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
