import type { SecurityStatus } from "@/lib/marketing/security/content";
import { SECURITY_STATUS_LABEL } from "@/lib/marketing/security/content";

export type SpecGridItem = {
  label: string;
  detail: string;
  status?: SecurityStatus;
};

type Props = {
  items: SpecGridItem[];
  eyebrow?: string;
  framed?: boolean;
};

export function SecuritySpecGrid({ items, eyebrow }: Props) {
  return (
    <div>
      {eyebrow ? (
        <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5C6560]">{eyebrow}</p>
      ) : null}
      <div className="grid grid-cols-1 border border-dashed border-[#D4D4D4] sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={`${item.label}-${item.detail}`}
            className={`border-dashed border-[#D4D4D4] p-5 ${index < items.length - (items.length % 2 === 0 ? 2 : 1) ? "border-b" : ""} ${
              index % 2 === 0 ? "sm:border-r" : ""
            }`}
          >
            <p className="text-[1.15rem] font-bold tracking-tight text-[#0D0D0D]">{item.label}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#5C6560]">{item.detail}</p>
            {item.status && SECURITY_STATUS_LABEL[item.status] ? (
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5C6560]/80">
                {SECURITY_STATUS_LABEL[item.status]}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
