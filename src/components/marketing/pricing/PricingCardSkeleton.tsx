/** Skeleton blocks for dynamic pricing — fixed dimensions prevent layout shift. */

export function PricingPriceSkeleton() {
  return (
    <div className="min-h-[92px]" role="status" aria-label="Loading price">
      <div className="h-10 w-36 max-w-[80%] animate-pulse rounded-md bg-brand-line/80" />
      <div className="mt-3 h-4 w-52 max-w-full animate-pulse rounded bg-brand-line/60" />
      <div className="mt-2 h-3 w-28 max-w-full animate-pulse rounded bg-brand-line/50" />
      <span className="sr-only">Loading pricing…</span>
    </div>
  );
}

export function PricingCtaSkeleton() {
  return (
    <div className="h-[46px] w-full animate-pulse rounded-sm bg-brand-line/70" aria-hidden="true" role="presentation" />
  );
}

export function PricingPlanCardSkeleton({ recommended }: { recommended?: boolean }) {
  return (
    <article
      className={`relative flex h-full min-h-[480px] flex-col rounded-2xl border bg-white p-6 sm:p-7 ${
        recommended ? "border-brand-orange/30 ring-1 ring-brand-orange/15" : "border-brand-line shadow-soft"
      }`}
      aria-busy="true"
      aria-label="Loading plan"
    >
      {recommended ? (
        <span className="absolute -top-3 left-4 right-4 sm:left-6 sm:right-auto sm:w-36">
          <span className="block h-6 w-full animate-pulse rounded-full bg-brand-line/80 sm:w-36" aria-hidden="true" />
        </span>
      ) : null}
      <div className="pt-1">
        <div className="h-6 w-28 animate-pulse rounded bg-brand-line/80" />
        <div className="mt-3 space-y-2">
          <div className="h-3.5 w-full animate-pulse rounded bg-brand-line/60" />
          <div className="h-3.5 w-[85%] animate-pulse rounded bg-brand-line/50" />
        </div>
      </div>
      <div className="mt-6">
        <PricingPriceSkeleton />
      </div>
      <div className="mt-6">
        <PricingCtaSkeleton />
      </div>
      <div className="mt-7 flex-1 border-t border-brand-line/80 pt-6">
        <div className="h-3 w-24 animate-pulse rounded bg-brand-line/60" />
        <ul className="mt-3 space-y-2.5">
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className="h-3.5 animate-pulse rounded bg-brand-line/50" style={{ width: `${68 + i * 6}%` }} />
          ))}
        </ul>
      </div>
    </article>
  );
}
