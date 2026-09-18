import type { RoiMetricRecord } from "@/lib/marketing/customers/types";

type Props = {
  metrics: RoiMetricRecord[];
  className?: string;
};

/** Editorial metric row — customer result + context + attribution. */
export function CustomerRoiMetricsPanel({ metrics, className = "" }: Props) {
  if (metrics.length === 0) return null;

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-lg border border-brand-line bg-white">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <li
              key={metric.id}
              className={[
                "px-4 py-5 sm:px-5 sm:py-6",
                index > 0 ? "border-brand-line sm:border-l" : "",
                index >= 2 ? "border-t border-brand-line sm:border-t-0" : "",
              ].join(" ")}
            >
              <p className="cust-display text-[28px] leading-none text-brand-navy sm:text-[2rem]">{metric.value}</p>
              <p className="mt-2 text-[13px] font-semibold text-brand-navy">{metric.label}</p>
              <p className="mt-2 text-[12px] leading-relaxed text-brand-muted">{metric.context}</p>
              {metric.customerName ? (
                <p className="mt-4 text-[11px] font-semibold text-brand-navy">{metric.customerName}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
