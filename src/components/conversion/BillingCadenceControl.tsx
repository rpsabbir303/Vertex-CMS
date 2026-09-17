"use client";

import type { BillingPeriod } from "@/lib/auth/types";

type Props = {
  value: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
  disabled?: boolean;
  compact?: boolean;
};

export function BillingCadenceControl({ value, onChange, disabled, compact }: Props) {
  const periods: BillingPeriod[] = ["monthly", "yearly"];

  return (
    <div
      role="group"
      aria-label="Billing cadence"
      className={
        "inline-flex rounded-lg border border-brand-line bg-white p-0.5 shadow-[0_1px_2px_rgba(8,35,63,0.04)] " +
        (compact ? "" : "sm:p-1")
      }
    >
      {periods.map((period) => {
        const selected = value === period;
        return (
          <button
            key={period}
            type="button"
            disabled={disabled}
            aria-pressed={selected}
            onClick={() => onChange(period)}
            className={
              "relative min-w-[5.5rem] rounded-md px-4 py-2 text-[13px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:cursor-not-allowed disabled:opacity-60 " +
              (selected
                ? "bg-white text-brand-navy shadow-sm ring-1 ring-brand-orange/35"
                : "text-brand-muted hover:text-brand-navy")
            }
          >
            {selected ? (
              <span className="absolute inset-x-3 bottom-0.5 h-0.5 rounded-full bg-brand-orange" aria-hidden="true" />
            ) : null}
            {period === "yearly" ? "Yearly" : "Monthly"}
          </button>
        );
      })}
    </div>
  );
}
