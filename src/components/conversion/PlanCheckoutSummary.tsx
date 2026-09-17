"use client";

import type { AddOn, Plan, PricingPeriod } from "@/lib/marketing/pricing";
import { addonPriceCopy, formatPlanPrice, getPlanPrice } from "@/lib/marketing/pricing";

type Props = {
  plan: Plan | undefined;
  billingPeriod: PricingPeriod;
  selectedAddons?: AddOn[];
  title?: string;
  trialEndsAt?: string | null;
  variant?: "sidebar" | "final" | "drawer";
  onEditSelections?: () => void;
};

function periodLabel(period: PricingPeriod): string {
  return period === "yearly" ? "Yearly" : "Monthly";
}

export function PlanCheckoutSummary({
  plan,
  billingPeriod,
  selectedAddons = [],
  title = "Your configuration",
  trialEndsAt = null,
  variant = "sidebar",
  onEditSelections,
}: Props) {
  const baseAmount = plan ? getPlanPrice(plan, billingPeriod) : null;
  const baseFormatted = plan && baseAmount != null ? formatPlanPrice(baseAmount, plan.currency) : null;

  const addonLines = selectedAddons.map((addon) => ({
    id: addon.id,
    name: addon.name,
    price: addon.priceLabel ?? addonPriceCopy(addon),
  }));

  const pricedAddons = addonLines.filter((a) => a.price);
  const showTotal = baseFormatted != null && (selectedAddons.length === 0 || pricedAddons.length > 0);

  if (!plan) {
    return (
      <aside className="rounded-xl border border-dashed border-brand-line bg-white p-5" aria-busy="true">
        <p className="text-[13px] text-brand-muted">Select a plan to review your configuration.</p>
      </aside>
    );
  }

  const compact = variant === "drawer";

  return (
    <aside
      className={`rounded-xl border border-brand-line bg-white ${compact ? "p-4" : "p-5 sm:p-6"} ${variant === "sidebar" ? "shadow-[0_2px_12px_rgba(8,35,63,0.04)]" : ""}`}
      aria-labelledby="checkout-summary-heading"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 id="checkout-summary-heading" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
          {title}
        </h3>
        {onEditSelections && !compact ? (
          <button
            type="button"
            onClick={onEditSelections}
            className="text-[12px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Edit selections
          </button>
        ) : null}
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <p className="text-[12px] text-brand-muted">Plan</p>
          <p className="text-[15px] font-semibold text-brand-navy">{plan.name}</p>
        </div>
        <div>
          <p className="text-[12px] text-brand-muted">Billing cycle</p>
          <p className="text-[14px] font-medium text-brand-navy">{periodLabel(billingPeriod)}</p>
        </div>

        {!compact ? (
          <div className="border-t border-brand-line pt-3">
            <p className="text-[12px] text-brand-muted">Trial</p>
            <p className="text-[13px] text-brand-navy">
              {trialEndsAt
                ? `Active — ends ${new Date(trialEndsAt).toLocaleDateString()}`
                : plan.trialDays != null
                  ? `${plan.trialDays}-day trial configured`
                  : "Active per plan configuration"}
            </p>
          </div>
        ) : null}

        <div className="border-t border-brand-line pt-3">
          <p className="text-[12px] text-brand-muted">Add-ons</p>
          {selectedAddons.length === 0 ? (
            <p className="mt-1 text-[13px] text-brand-muted">No add-ons selected</p>
          ) : (
            <ul className="mt-2 space-y-1.5">
              {addonLines.map((line) => (
                <li key={line.id} className="flex items-start justify-between gap-2 text-[13px]">
                  <span className="flex min-w-0 items-start gap-1.5 text-brand-navy">
                    <span className="text-brand-orange" aria-hidden="true">
                      ✓
                    </span>
                    <span className="min-w-0">{line.name}</span>
                  </span>
                  {!compact ? <span className="shrink-0 text-[11px] text-brand-muted">{line.price}</span> : null}
                </li>
              ))}
            </ul>
          )}
        </div>

        {baseFormatted ? (
          <div className="flex justify-between gap-4 border-t border-brand-line pt-3">
            <span className="text-[13px] font-semibold text-brand-navy">{variant === "final" ? "Total" : "Plan price"}</span>
            <span className="text-right text-[13px] font-semibold text-brand-navy">
              {baseFormatted}
              <span className="font-normal text-brand-muted"> / {billingPeriod === "yearly" ? "yr" : "mo"}</span>
            </span>
          </div>
        ) : (
          <p className="border-t border-brand-line pt-3 text-[12px] leading-relaxed text-brand-muted">
            Totals appear when plan pricing is synchronized from billing configuration.
          </p>
        )}
      </div>

      {showTotal && variant === "final" && pricedAddons.length === 0 && selectedAddons.length === 0 ? (
        <p className="mt-3 text-[13px] font-semibold text-brand-navy">Estimated total: {baseFormatted}</p>
      ) : null}
    </aside>
  );
}
