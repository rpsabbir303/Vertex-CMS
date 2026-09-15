function Pulse({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-md bg-brand-navy/[0.06] ${className}`} />;
}

export function TeamLeadershipSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading team profiles">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        <Pulse className="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]" />
        <div>
          <Pulse className="h-3 w-24" />
          <Pulse className="mt-4 h-8 w-3/4" />
          <Pulse className="mt-3 h-4 w-40" />
          <Pulse className="mt-6 h-16 w-full max-w-md" />
        </div>
      </div>
      <ul className="mt-10 grid gap-6 border-t border-brand-navy/10 pt-10 sm:grid-cols-2 sm:gap-8">
        {[1, 2].map((item) => (
          <li key={item} className="rounded-lg border border-brand-navy/12 bg-white p-5 sm:p-6">
            <Pulse className="aspect-[4/5] w-full" />
            <Pulse className="mt-5 h-4 w-2/3" />
            <Pulse className="mt-2 h-3 w-1/3" />
            <Pulse className="mt-4 h-12 w-full" />
          </li>
        ))}
      </ul>
      <span className="sr-only">Loading team profiles</span>
    </div>
  );
}

export function TeamRolesSkeleton() {
  return (
    <ol className="mt-12 divide-y divide-brand-navy/10 border-y border-brand-navy/10" aria-busy="true" aria-label="Loading key roles">
      {[1, 2, 3].map((item) => (
        <li key={item} className="grid gap-4 py-6 sm:grid-cols-[72px_1fr] sm:gap-8 sm:py-8">
          <Pulse className="h-3 w-8" />
          <div>
            <Pulse className="h-5 w-48" />
            <Pulse className="mt-3 h-12 w-full max-w-2xl" />
          </div>
        </li>
      ))}
    </ol>
  );
}
