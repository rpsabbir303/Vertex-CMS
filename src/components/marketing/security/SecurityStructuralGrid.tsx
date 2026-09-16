/** Page-wide editorial column guides — structural grid foundation. */
export function SecurityStructuralGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="security-structural-grid relative">
      <div className="security-structural-grid__guides pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
