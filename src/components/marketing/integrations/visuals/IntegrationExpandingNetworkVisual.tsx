export function IntegrationExpandingNetworkVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="mx-auto h-32 w-32 text-brand-line opacity-80 sm:h-40 sm:w-40"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="28" fill="#FAFBFD" stroke="currentColor" strokeWidth="1.5" className="text-brand-navy/20" />
      <text x="100" y="96" textAnchor="middle" className="fill-brand-navy text-[8px] font-bold" style={{ fontFamily: "var(--font-sans)" }}>
        VERTEX
      </text>
      <text x="100" y="108" textAnchor="middle" className="fill-brand-muted text-[6px]" style={{ fontFamily: "var(--font-sans)" }}>
        CMS
      </text>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        const x1 = 100 + 28 * Math.cos(rad);
        const y1 = 100 + 28 * Math.sin(rad);
        const x2 = 100 + 72 * Math.cos(rad);
        const y2 = 100 + 72 * Math.sin(rad);
        return (
          <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" className="text-brand-blue/30" />
        );
      })}
      {[0, 72, 144, 216, 288].map((deg) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        const x = 100 + 88 * Math.cos(rad);
        const y = 100 + 88 * Math.sin(rad);
        return <circle key={`o-${deg}`} cx={x} cy={y} r="4" fill="#FFFFFF" stroke="currentColor" strokeWidth="1" />;
      })}
    </svg>
  );
}
