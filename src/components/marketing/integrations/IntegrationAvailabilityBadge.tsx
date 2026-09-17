import type { IntegrationAvailability } from "@/lib/marketing/integrations/types";

/** Matches Integration Card availability treatment. */
export function IntegrationAvailabilityBadge({ availability }: { availability: IntegrationAvailability }) {
  if (availability === "AVAILABLE") {
    return (
      <span className="inline-flex items-center gap-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-800">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
        Available
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-sm border border-brand-line bg-[#F7F9FC] px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
      Coming Soon
    </span>
  );
}
