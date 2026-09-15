function Pulse({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-md bg-brand-navy/[0.06] ${className}`} />;
}

export default function CareerDetailLoading() {
  return (
    <div className="company-canvas careers-canvas relative" aria-busy="true" aria-label="Loading job detail">
      <section className="relative z-[2] border-b border-brand-navy/[0.1]">
        <div className="site-shell grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:py-16">
          <div className="careers-safe-zone">
            <Pulse className="h-3 w-32" />
            <Pulse className="mt-8 h-3 w-24" />
            <Pulse className="mt-5 h-12 w-3/4" />
            <Pulse className="mt-6 h-4 w-40" />
            <Pulse className="mt-2 h-4 w-28" />
            <Pulse className="mt-2 h-4 w-36" />
            <Pulse className="mt-8 h-12 w-36 rounded-full" />
          </div>
          <Pulse className="hidden min-h-[240px] lg:block" />
        </div>
      </section>

      <section className="relative z-[2] border-b border-brand-navy/[0.1]">
        <div className="site-shell grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-4">
          <Pulse className="h-14" />
          <Pulse className="h-14" />
          <Pulse className="h-14" />
          <Pulse className="h-14" />
        </div>
      </section>

      <section className="relative z-[2] border-b border-brand-navy/[0.1]">
        <div className="site-shell py-12 sm:py-14">
          <div className="careers-safe-zone">
            <Pulse className="h-8 w-48" />
            <Pulse className="mt-5 h-20 w-full max-w-xl" />
            <Pulse className="mt-3 h-16 w-full max-w-md" />
          </div>
        </div>
      </section>

      <section className="relative z-[2] border-b border-brand-navy/[0.1]">
        <div className="site-shell py-12 sm:py-14">
          <div className="careers-safe-zone">
            <Pulse className="h-8 w-56" />
            <Pulse className="mt-8 h-10 w-full" />
            <Pulse className="mt-3 h-10 w-full" />
            <Pulse className="mt-3 h-10 w-5/6" />
          </div>
        </div>
      </section>

      <section className="relative z-[2]">
        <div className="site-shell py-12 sm:py-14">
          <div className="careers-safe-zone">
            <Pulse className="h-8 w-52" />
            <Pulse className="mt-6 h-12 w-36 rounded-full" />
          </div>
        </div>
      </section>
      <span className="sr-only">Loading job detail</span>
    </div>
  );
}
