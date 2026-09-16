/** Continuous vertical system index — connects Security zones on large viewports. */
export function SecuritySystemSpine() {
  return (
    <div className="security-system-spine pointer-events-none absolute inset-y-0 hidden lg:block" aria-hidden="true">
      <div className="relative mx-auto h-full w-full max-w-[1280px]">
        <div className="absolute bottom-[12%] left-6 top-[18%] w-px bg-gradient-to-b from-transparent via-brand-navy/12 to-brand-orange/25 xl:left-8" />
        <span className="absolute left-[1.35rem] top-[18%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-orange/70 xl:left-[1.85rem]" />
        <span className="absolute bottom-[12%] left-[1.35rem] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-blue/40 xl:left-[1.85rem]" />
      </div>
    </div>
  );
}
