"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { getActivePlans } from "@/lib/marketing/pricing";
import { AUTH_ROUTES } from "@/lib/auth/routes";
import { ROUTES } from "@/lib/marketing/navigation";

type Props = {
  selectedPlanId?: string;
  /** Preserve current field values when changing plan via query string */
  draftParams?: Record<string, string>;
};

/**
 * Shows selected plan from pricing CTA and allows changing without a full page rebuild.
 * Form field state stays in the parent; only the plan query updates.
 */
export function PlanSelector({ selectedPlanId }: Props) {
  const router = useRouter();
  const plans = getActivePlans().filter((p) => p.cta.action === "trial");
  const selected = selectedPlanId ? plans.find((p) => p.id === selectedPlanId) : undefined;

  function selectPlan(id: string) {
    const next = new URLSearchParams();
    next.set("plan", id);
    router.replace(`${AUTH_ROUTES.signup}?${next.toString()}`, { scroll: false });
  }

  function clearPlan() {
    router.replace(AUTH_ROUTES.signup, { scroll: false });
  }

  return (
    <div className="mb-5 rounded-xl border border-brand-line bg-[#FAFBFD] p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Selected plan</p>
          <p className="mt-1 text-[15px] font-semibold text-brand-navy">
            {selected ? selected.name : "No plan preselected"}
          </p>
          <p className="mt-1 text-[12px] text-brand-muted">
            {selected
              ? "Carried from Pricing. You can change it below without losing your signup details."
              : "Optional — pick a plan or continue and choose later from Pricing."}
          </p>
        </div>
        <Link href={ROUTES.pricing} className="text-[12px] font-semibold text-brand-blue hover:underline">
          View Pricing
        </Link>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {plans.map((plan) => {
          const active = plan.id === selectedPlanId;
          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => selectPlan(plan.id)}
              className={`rounded-sm border px-3 py-2 text-[12px] font-semibold transition ${
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
        {selectedPlanId ? (
          <button
            type="button"
            onClick={clearPlan}
            className="rounded-sm px-3 py-2 text-[12px] font-semibold text-brand-muted hover:text-brand-navy"
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
