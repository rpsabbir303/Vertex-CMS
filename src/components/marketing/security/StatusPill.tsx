import type { SecurityStatus } from "@/lib/marketing/security/content";
import { SECURITY_STATUS_LABEL } from "@/lib/marketing/security/content";

const STATUS_STYLE: Record<SecurityStatus, string> = {
  requirement: "border-brand-navy/12 bg-white text-brand-navy",
  target: "border-[#3FE844]/50 bg-[#3FE844]/10 text-[#163326]",
  capability: "border-brand-navy/12 bg-[#F5F8FC] text-brand-muted",
  product: "border-brand-navy/12 bg-[#F5F8FC] text-brand-muted",
};

export function StatusPill({ status }: { status: SecurityStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${STATUS_STYLE[status]}`}
    >
      {SECURITY_STATUS_LABEL[status]}
    </span>
  );
}
