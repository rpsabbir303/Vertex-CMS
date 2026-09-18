import type { RoiMetricRecord } from "@/lib/marketing/customers/types";

type Props = {
  metrics: RoiMetricRecord[];
};

/** Editorial results — single-metric emphasis or compact row. */
export function CaseStudyResultHighlight({ metrics }: Props) {
  if (metrics.length === 0) return null;

  if (metrics.length === 1) {
    const metric = metrics[0];
    return (
      <div className="rounded-lg border border-brand-line bg-white px-5 py-6 sm:px-8 sm:py-7">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] sm:items-center">
          <div>
            <p className="cust-display text-[2.5rem] leading-none text-brand-navy sm:text-[3rem]">{metric.value}</p>
            <p className="mt-2 text-[14px] font-semibold text-brand-navy">{metric.label}</p>
          </div>
          <div>
            <p className="text-[14px] leading-relaxed text-brand-muted">{metric.context}</p>
            {metric.customerName ? (
              <p className="mt-3 text-[12px] font-semibold text-brand-navy">{metric.customerName}</p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-brand-line bg-brand-line sm:grid-cols-2">
      {metrics.map((metric) => (
        <li key={metric.id} className="bg-white px-4 py-5 sm:px-5">
          <p className="cust-display text-[1.75rem] leading-none text-brand-navy">{metric.value}</p>
          <p className="mt-2 text-[13px] font-semibold text-brand-navy">{metric.label}</p>
          <p className="mt-2 text-[12px] leading-relaxed text-brand-muted">{metric.context}</p>
        </li>
      ))}
    </ul>
  );
}
