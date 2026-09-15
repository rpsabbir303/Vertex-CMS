"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { getActivePlans, type PricingPeriod } from "@/lib/marketing/pricing";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  selectedPlanId?: string;
};

function formatPeriodLabel(period: PricingPeriod | null): string | null {
  if (!period) return null;
  return period === "yearly" ? "Yearly billing" : "Monthly billing";
}

/**
 * Shows plan context carried from Pricing. Compact by default — user does not re-select unless they choose to change.
 */
export function PlanSelector({ selectedPlanId }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const period = (params.get("period") as PricingPeriod | null) ?? null;
  const [showPicker, setShowPicker] = useState(false);

  const plans = getActivePlans().filter((p) => p.cta.action === "trial");
  const selected = selectedPlanId ? plans.find((p) => p.id === selectedPlanId) : undefined;
  const periodLabel = formatPeriodLabel(period);

  function buildSignupQuery(planId?: string) {
    const next = new URLSearchParams();
    if (planId) next.set("plan", planId);
    if (period) next.set("period", period);
    const intent = params.get("intent");
    if (intent) next.set("intent", intent);
    return next.toString();
  }

  function selectPlan(id: string) {
    router.replace(`${AUTH_ROUTES.signup}?${buildSignupQuery(id)}`, { scroll: false });
    setShowPicker(false);
  }

  if (!selected && !showPicker) {
    return (
      <div className="mb-5 rounded-xl border border-brand-line bg-[#FAFBFD] p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Plan</p>
        <p className="mt-1 text-[13px] text-brand-muted">No plan preselected — optional.</p>
        <button
          type="button"
          onClick={() => setShowPicker(true)}
          className="mt-2 text-[12px] font-semibold text-brand-blue hover:underline"
        >
          Choose a plan
        </button>
        <span className="mx-2 text-brand-muted">·</span>
        <Link href={ROUTES.pricing} className="text-[12px] font-semibold text-brand-blue hover:underline">
          View Pricing
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-5 rounded-xl border border-brand-line bg-[#FAFBFD] p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Selected plan</p>
          <p className="mt-1 text-[15px] font-semibold text-brand-navy">{selected?.name ?? "No plan preselected"}</p>
          {periodLabel ? <p className="mt-1 text-[12px] font-medium text-brand-navy/80">{periodLabel}</p> : null}
          <p className="mt-1 text-[12px] text-brand-muted">Carried from Pricing — no need to select again.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-[12px] font-semibold">
          <button type="button" onClick={() => setShowPicker((v) => !v)} className="text-brand-blue hover:underline">
            {showPicker ? "Hide options" : "Change plan"}
          </button>
          <Link href={ROUTES.pricing} className="text-brand-blue hover:underline">
            View Pricing
          </Link>
        </div>
      </div>
      {showPicker && (
        <div className="mt-3 flex flex-wrap gap-2 border-t border-brand-line/70 pt-3">
          {plans.map((plan) => {
            const active = plan.id === selectedPlanId;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => selectPlan(plan.id)}
                className={`rounded-sm border px-3 py-2 text-[12px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                  active
                    ? "border-brand-orange bg-brand-orange/10 text-brand-navy"
                    : "border-brand-line bg-white text-brand-muted hover:border-brand-navy/30 hover:text-brand-navy"
                }`}
                aria-pressed={active}
              >
                {plan.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
