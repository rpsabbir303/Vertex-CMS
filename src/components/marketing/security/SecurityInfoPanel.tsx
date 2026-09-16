/** Label + supporting copy inside a matrix cell. */
export function SecurityInfoPanel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3FE844]">{label}</p>
      <div className="mt-6 max-w-3xl">{children}</div>
    </div>
  );
}
