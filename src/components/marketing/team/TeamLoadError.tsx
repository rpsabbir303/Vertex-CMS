import { TEAM_PENDING } from "@/lib/marketing/team/content";

type Props = {
  message?: string | null;
  retrying: boolean;
  onRetry: () => void;
};

export function TeamLoadError({ message, retrying, onRetry }: Props) {
  return (
    <div className="max-w-xl rounded-lg border border-brand-navy/12 bg-white px-5 py-6 sm:px-6" role="alert">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">Unavailable</p>
      <p className="mt-3 text-[15px] font-semibold text-brand-navy">{message ?? TEAM_PENDING.loadError}</p>
      <div className="mt-5">
        <button
          type="button"
          onClick={onRetry}
          disabled={retrying}
          aria-busy={retrying}
          className="btn-primary min-w-[140px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 disabled:cursor-wait disabled:opacity-70"
        >
          {retrying ? "Retrying…" : "Try again"}
        </button>
      </div>
    </div>
  );
}
