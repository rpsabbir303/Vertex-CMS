function Pulse({ className }: { className: string }) {
  return <div className={`animate-pulse bg-brand-navy/[0.06] ${className}`} />;
}

export function TeamLeadershipSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading team profiles">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-14">
        <Pulse className="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[3/4]" />
        <div>
          <Pulse className="hidden h-px w-12 lg:block" />
          <Pulse className="mt-6 h-9 w-3/4" />
          <Pulse className="mt-3 h-4 w-48" />
          <Pulse className="mt-6 h-20 w-full max-w-md" />
        </div>
      </div>
      <ul className="mt-12 lg:mt-16 lg:pl-8">
        {[1, 2].map((item) => (
          <li key={item} className="grid grid-cols-[112px_1fr] gap-5 border-t border-brand-navy/10 py-8 sm:grid-cols-[148px_1fr] sm:gap-6">
            <Pulse className="aspect-[3/4] w-full" />
            <div className="pt-1">
              <Pulse className="h-5 w-2/3" />
              <Pulse className="mt-2 h-3 w-1/2" />
              <Pulse className="mt-3 h-12 w-full" />
            </div>
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
