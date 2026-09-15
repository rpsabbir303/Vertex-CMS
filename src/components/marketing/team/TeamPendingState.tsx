import { TEAM_PENDING } from "@/lib/marketing/team/content";

type Props = {
  body: string;
  compact?: boolean;
};

function PendingMark() {
  return (
    <svg viewBox="0 0 280 40" className="mt-5 h-8 w-full max-w-[220px] text-brand-navy/25" fill="none" aria-hidden="true">
      <path d="M 8 20 H 272" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="36" cy="20" r="3.5" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="140" cy="20" r="3.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="244" cy="20" r="3.5" fill="#FF6A00" fillOpacity="0.35" />
    </svg>
  );
}

export function TeamPendingState({ body, compact = false }: Props) {
  if (compact) {
    return (
      <div className="rounded-lg border border-dashed border-brand-navy/15 bg-white/80 px-4 py-3">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{TEAM_PENDING.label}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-brand-muted">{body}</p>
      </div>
    );
  }

  return (
    <div
      className="max-w-xl rounded-lg border border-brand-navy/12 bg-white px-5 py-6 sm:px-6"
      role="status"
    >
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{TEAM_PENDING.label}</p>
      <p className="mt-3 text-[14px] leading-[1.8] text-brand-muted">{body}</p>
      <PendingMark />
    </div>
  );
}
