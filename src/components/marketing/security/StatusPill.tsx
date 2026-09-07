import type { SecurityStatus } from "@/lib/marketing/security/content";
import { SECURITY_STATUS_LABEL } from "@/lib/marketing/security/content";

const STATUS_STYLE: Record<SecurityStatus, string> = {
  requirement: "border-brand-line bg-brand-soft text-brand-navy",
  target: "border-brand-orange/30 bg-brand-orange/5 text-brand-navy",
  capability: "border-brand-line bg-white text-brand-muted",
  product: "border-brand-line bg-white text-brand-muted",
  placeholder: "border-dashed border-brand-line bg-[#FAFBFD] text-brand-muted italic",
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
