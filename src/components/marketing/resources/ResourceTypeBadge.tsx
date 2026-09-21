import { RESOURCE_TYPE_LABELS } from "@/lib/marketing/resources/content";
import type { ResourceType } from "@/lib/marketing/resources/types";

export function ResourceTypeBadge({ type }: { type: ResourceType }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-brand-line bg-[#FAFBFD] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-navy">
      {RESOURCE_TYPE_LABELS[type]}
    </span>
  );
}
