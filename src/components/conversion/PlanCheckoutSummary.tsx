"use client";

import type { AddOn, Plan, PricingPeriod } from "@/lib/marketing/pricing";
import { formatPlanPrice, getPlanPrice } from "@/lib/marketing/pricing";

type Props = {
  plan: Plan | undefined;
  billingPeriod: PricingPeriod;
  selectedAddons?: AddOn[];
  title?: string;
  trialEndsAt?: string | null;
  variant?: "sidebar" | "final";
};

function periodLabel(period: PricingPeriod): string {
  return period === "yearly" ? "Yearly billing" : "Monthly billing";
}

export function PlanCheckoutSummary({
  plan,
  billingPeriod,
  selectedAddons = [],
  title = "Order summary",
  trialEndsAt = null,
  variant = "sidebar",
}: Props) {
  const baseAmount = plan ? getPlanPrice(plan, billingPeriod) : null;
  const baseFormatted = plan && baseAmount != null ? formatPlanPrice(baseAmount, plan.currency) : null;

  const addonLines = selectedAddons.map((addon) => ({
    id: addon.id,
    name: addon.name,
    price: addon.priceLabel,
  }));

  const pricedAddons = addonLines.filter((a) => a.price);
  const showTotal = baseFormatted != null && (selectedAddons.length === 0 || pricedAddons.length > 0);

  if (!plan) {
    return (
      <aside className="rounded-xl border border-brand-line bg-[#FAFBFD] p-5 sm:p-6" aria-busy="true">
        <div className="animate-pulse space-y-3">
          <div className="h-3 w-24 rounded bg-brand-line" />
          <div className="h-4 w-full rounded bg-brand-line" />
          <div className="h-4 w-3/4 rounded bg-brand-line" />
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={`rounded-xl border border-brand-line bg-[#FAFBFD] ${variant === "final" ? "p-5 sm:p-6" : "p-5 sm:p-6"}`}
      aria-labelledby="checkout-summary-heading"
    >
      <h3 id="checkout-summary-heading" className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
        {title}
      </h3>

      <dl className="mt-4 space-y-3 text-[14px]">
        <div className="flex justify-between gap-4 border-b border-brand-line pb-3">
          <dt className="shrink-0 text-brand-muted">{variant === "final" ? "Plan" : "Selected plan"}</dt>
          <dd className="min-w-0 text-right font-semibold text-brand-navy">{plan.name}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-brand-line pb-3">
          <dt className="text-brand-muted">Billing</dt>
          <dd className="text-right text-brand-navy">{periodLabel(billingPeriod)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-brand-line pb-3">
          <dt className="text-brand-muted">Trial</dt>
          <dd className="text-right text-brand-navy">
            {trialEndsAt
              ? `Active — ends ${new Date(trialEndsAt).toLocaleDateString()}`
              : plan.trialDays != null
                ? `${plan.trialDays}-day trial configured`
                : "Active per plan configuration"}
          </dd>
        </div>

        <div className={`${selectedAddons.length ? "space-y-2 border-b border-brand-line pb-3" : "border-b border-brand-line pb-3"}`}>
          <dt className="text-brand-muted">Add-ons</dt>
          {selectedAddons.length === 0 ? (
            <dd className="mt-1 text-[13px] text-brand-muted">None selected</dd>
          ) : (
            <dd className="mt-2 space-y-2">
              {addonLines.map((line) => (
                <div key={line.id} className="flex justify-between gap-3 text-[13px]">
                  <span className="text-brand-navy">{line.name}</span>
                  <span className="shrink-0 text-brand-muted">{line.price ?? "When priced"}</span>
                </div>
              ))}
            </dd>
          )}
        </div>

        {baseFormatted ? (
          <div className="flex justify-between gap-4 pt-1">
            <dt className="font-semibold text-brand-navy">{variant === "final" ? "Total" : "Base plan"}</dt>
            <dd className="text-right font-semibold text-brand-navy">
              {baseFormatted}
              {variant === "sidebar" ? (
                <span className="text-[12px] font-normal text-brand-muted"> / {billingPeriod === "yearly" ? "yr" : "mo"}</span>
              ) : pricedAddons.length > 0 ? (
                <span className="block text-[12px] font-normal text-brand-muted">+ add-ons when priced</span>
              ) : null}
            </dd>
          </div>
        ) : (
          <p className="text-[13px] text-brand-muted">Totals appear when plan pricing is synchronized from billing configuration.</p>
        )}
      </dl>

      {showTotal && variant === "final" && pricedAddons.length === 0 && selectedAddons.length === 0 ? (
        <p className="mt-3 text-[13px] font-semibold text-brand-navy">Estimated total: {baseFormatted}</p>
      ) : null}
    </aside>
  );
}
