import type { IntegrationBenefitItem } from "@/lib/marketing/integrations/types";

type Props = {
  benefits: IntegrationBenefitItem[];
};

function normalizeBenefit(item: IntegrationBenefitItem): { title: string; description?: string } {
  if (typeof item === "string") {
    return { title: item };
  }
  return item;
}

export function IntegrationDetailBenefits({ benefits }: Props) {
  return (
    <ul className="max-w-3xl divide-y divide-brand-line/70 border-y border-brand-line/70">
      {benefits.map((entry, index) => {
        const { title, description } = normalizeBenefit(entry);
        return (
          <li key={title} className="grid gap-2 py-3 sm:grid-cols-[36px_minmax(0,1fr)] sm:gap-4 sm:py-3.5">
            <span className="font-sans text-[12px] font-bold tabular-nums text-brand-blue">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p className="font-sans text-[14px] font-semibold text-brand-navy">{title}</p>
              {description && <p className="mt-1 text-[13px] leading-relaxed text-brand-muted">{description}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
