"use client";

import { useState } from "react";
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
      <p className="mt-2 text-[14px] font-semibold text-brand-navy">
        {formatted}
        <span className="text-[12px] font-normal text-brand-muted"> / {period === "yearly" ? "year" : "month"}</span>
      </p>
    );
  }
  return <p className="mt-2 text-[13px] text-brand-muted">Pricing from plan configuration</p>;
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
    <section className="min-w-0 rounded-xl border border-brand-line bg-[#FAFBFD] p-5 sm:p-6" aria-labelledby="choose-plan-heading">
      <h3 id="choose-plan-heading" className="text-[14px] font-semibold text-brand-navy">
        Choose your plan
      </h3>
      <p className="mt-1 text-[13px] text-brand-muted">Select a Vertex CMS plan to continue with billing setup.</p>

      <div className="mt-4 flex gap-2" role="group" aria-label="Billing frequency">
        {(["monthly", "yearly"] as const).map((period) => (
          <button
            key={period}
            type="button"
            disabled={disabled}
            onClick={() => onPeriodChange(period)}
            className={`rounded-md border px-3 py-2 text-[12px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:opacity-60 ${
              billingPeriod === period
                ? "border-brand-orange bg-brand-orange/10 text-brand-navy"
                : "border-brand-line bg-white text-brand-muted hover:text-brand-navy"
            }`}
            aria-pressed={billingPeriod === period}
          >
            {period === "yearly" ? "Yearly billing" : "Monthly billing"}
          </button>
        ))}
      </div>

      {error ? (
        <p className="mt-3 text-[13px] font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <ul className="mt-5 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
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
                className={`flex h-full w-full min-w-0 flex-col rounded-xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:opacity-60 ${
                  selected
                    ? "border-brand-orange bg-brand-orange/5 ring-1 ring-brand-orange/30"
                    : "border-brand-line bg-white hover:border-brand-navy/25"
                }`}
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="text-[15px] font-semibold text-brand-navy">{plan.name}</span>
                  {selected ? (
                    <span className="rounded-full bg-brand-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Selected
                    </span>
                  ) : null}
                </span>
                <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{plan.description}</p>
                <PlanPriceLine plan={plan} period={billingPeriod} />
                {loading ? <span className="mt-2 text-[12px] text-brand-muted">Saving…</span> : null}
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
    <section className="rounded-xl border border-brand-line bg-[#FAFBFD] px-5 py-4 sm:px-6" aria-label="Current plan">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Current plan</p>
      <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[17px] font-semibold text-brand-navy">{plan.name}</p>
          {formatted ? (
            <p className="mt-1 text-[13px] font-medium text-brand-navy/90">
              {formatted} / {billingPeriod === "yearly" ? "year" : "month"}
            </p>
          ) : (
            <p className="mt-1 text-[13px] text-brand-muted">Pricing from plan configuration</p>
          )}
        </div>
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
      {onPeriodChange ? (
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Billing cadence">
          {(["monthly", "yearly"] as const).map((period) => (
            <button
              key={period}
              type="button"
              disabled={disabled}
              onClick={() => onPeriodChange(period)}
              aria-pressed={billingPeriod === period}
              className={`rounded-md border px-3 py-2 text-[12px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:opacity-60 ${
                billingPeriod === period
                  ? "border-brand-orange bg-brand-orange/10 text-brand-navy"
                  : "border-brand-line bg-white text-brand-muted hover:text-brand-navy"
              }`}
            >
              {period === "yearly" ? "Yearly billing" : "Monthly billing"}
            </button>
          ))}
        </div>
      ) : (
        <p className="mt-2 text-[13px] text-brand-muted">{billingPeriod === "yearly" ? "Yearly billing" : "Monthly billing"}</p>
      )}
    </section>
  );
}
