"use client";

import type { AddOn } from "@/lib/marketing/pricing";
import { addonPriceCopy, isAddonIncludedInPlan } from "@/lib/marketing/pricing";

type Props = {
  addOns: AddOn[];
  selectedIds: string[];
  planId?: string;
  planName?: string;
  disabled?: boolean;
  onToggle: (id: string) => void;
};

export function BillingAddOnsPicker({ addOns, selectedIds, planId, planName, disabled, onToggle }: Props) {
  return (
    <section className="min-w-0" aria-labelledby="optional-addons-heading">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Optional add-ons</p>
      <h3 id="optional-addons-heading" className="mt-2 text-[16px] font-semibold text-brand-navy">
        Configure your Vertex CMS workspace
      </h3>
      <p className="mt-1 text-[14px] text-brand-muted">
        Optional capabilities from your billing configuration. You can continue without selecting any add-ons.
      </p>

      <ul className="mt-4 space-y-2.5">
        {addOns.map((addon) => {
          const included = isAddonIncludedInPlan(addon, planId);
          const selected = !included && selectedIds.includes(addon.id);
          const unavailable = !addon.active;
          const locked = disabled || included || unavailable;

          return (
            <li key={addon.id}>
              <div
                className={
                  "rounded-xl border px-4 py-3.5 transition sm:px-5 " +
                  (included
                    ? "border-brand-line bg-[#F4F7FA]"
                    : selected
                      ? "border-brand-navy bg-brand-navy/[0.03] shadow-[inset_0_0_0_1px_rgba(8,35,63,0.12)]"
                      : unavailable
                        ? "border-brand-line/70 bg-[#FAFBFD] opacity-70"
                        : "border-brand-line bg-white hover:border-brand-navy/30")
                }
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-[15px] font-semibold text-brand-navy">{addon.name}</h4>
                      {included ? (
                        <span className="rounded-full border border-brand-line bg-white px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-muted">
                          Included{planName ? ` · ${planName}` : ""}
                        </span>
                      ) : selected ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-brand-navy/20 bg-brand-navy px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                          <span aria-hidden="true">✓</span> Selected
                        </span>
                      ) : unavailable ? (
                        <span className="rounded-full border border-brand-line px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-muted">
                          Unavailable
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{addon.description}</p>
                    <p className="mt-2 text-[12px] font-medium text-brand-navy/80">{addonPriceCopy(addon)}</p>
                  </div>
                  <button
                    type="button"
                    aria-pressed={selected}
                    aria-disabled={locked}
                    disabled={locked}
                    onClick={() => onToggle(addon.id)}
                    className={
                      "shrink-0 rounded-md border px-4 py-2.5 text-[13px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:cursor-not-allowed " +
                      (included
                        ? "border-brand-line bg-white text-brand-muted"
                        : selected
                          ? "border-brand-navy bg-brand-navy text-white"
                          : "border-brand-line bg-white text-brand-navy hover:bg-brand-soft disabled:opacity-60")
                    }
                  >
                    {included ? "Included" : selected ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
