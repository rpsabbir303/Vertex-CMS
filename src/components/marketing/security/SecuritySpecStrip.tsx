import type { SecurityStatus } from "@/lib/marketing/security/content";
import { StatusPill } from "./StatusPill";

export type SpecItem = {
  label: string;
  detail: string;
  status?: SecurityStatus;
  value?: string;
};

type Props = {
  items: SpecItem[];
  /** Larger numerals for reliability-style metrics */
  variant?: "default" | "metric";
};

export function SecuritySpecStrip({ items, variant = "default" }: Props) {
  return (
    <div className="security-spec-strip">
      <ul className="flex flex-col divide-y divide-brand-navy/12 border-y border-brand-navy/12 lg:flex-row lg:divide-x lg:divide-y-0" role="list">
        {items.map((item) => (
          <li key={`${item.label}-${item.detail}`} className="flex min-w-0 flex-1 flex-col justify-between gap-3 py-7 lg:px-8 lg:py-8 first:lg:pl-0 last:lg:pr-0">
            {variant === "metric" && item.value ? (
              <p className="display-title text-[2rem] leading-none tracking-tight text-brand-navy sm:text-[2.35rem]">{item.value}</p>
            ) : (
              <p className="font-display text-[1.05rem] font-bold leading-tight text-brand-navy sm:text-[1.15rem]">{item.label}</p>
            )}
            <div>
              {variant === "metric" ? (
                <p className="text-[13px] font-semibold text-brand-navy">{item.label}</p>
              ) : null}
              <p className={`text-[13px] leading-relaxed text-brand-muted ${variant === "metric" ? "mt-1" : "mt-0.5"}`}>{item.detail}</p>
              {item.status ? (
                <div className="mt-3">
                  <StatusPill status={item.status} />
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
