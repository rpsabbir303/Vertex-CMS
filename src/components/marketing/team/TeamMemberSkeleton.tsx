function Pulse({ className }: { className: string }) {
  return <div className={`animate-pulse bg-brand-navy/[0.06] ${className}`} />;
}

export function TeamLeadershipSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading team profiles" className="grid w-full gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-10">
      <div>
        <Pulse className="h-3 w-20" />
        <Pulse className="mt-4 h-24 w-full max-w-[280px]" />
        <Pulse className="mt-4 h-14 w-full max-w-md" />
        <Pulse className="mt-8 h-32 w-full max-w-[200px]" />
      </div>
      <div>
        <Pulse className="aspect-[4/5] w-full max-h-[400px]" />
        <Pulse className="mt-4 h-28 w-full" />
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Pulse className="h-28 w-full" />
          <Pulse className="h-28 w-full" />
        </div>
      </div>
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
