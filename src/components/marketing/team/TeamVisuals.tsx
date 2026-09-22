/** Team page — product-system SVG visuals (DOM/SVG, HTML-to-Figma safe). */

export function TeamProductEcosystemVisual() {
  return (
    <div className="relative aspect-[640/400] w-full max-w-xl border border-brand-navy/10 bg-[#FAFCFE] lg:ml-auto" aria-hidden="true">
      <svg viewBox="0 0 640 400" className="h-full w-full" fill="none">
        <line x1="320" y1="48" x2="320" y2="352" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
        <line x1="120" y1="160" x2="520" y2="160" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
        {[
          { label: "PROJECT", x: 320, y: 56 },
          { label: "DOCUMENTS", x: 128, y: 160 },
          { label: "PLATFORM", x: 320, y: 160 },
          { label: "FIELD", x: 512, y: 160 },
          { label: "FINANCIAL", x: 320, y: 268 },
          { label: "INTELLIGENCE", x: 320, y: 344 },
        ].map((node) => (
          <g key={node.label}>
            <rect x={node.x - 52} y={node.y - 14} width="104" height="28" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" fill="#fff" />
            <text x={node.x} y={node.y + 4} textAnchor="middle" className="fill-[#08233F] text-[9px] font-semibold tracking-[0.08em]" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
              {node.label}
            </text>
          </g>
        ))}
        <circle cx="320" cy="160" r="3" fill="#FF6A00" fillOpacity="0.7" />
        <circle cx="320" cy="268" r="2.5" fill="#FF6A00" fillOpacity="0.45" />
      </svg>
    </div>
  );
}

export function LeadershipProductRail() {
  const steps = ["PRODUCT", "OPERATIONS", "CUSTOMER", "PLATFORM"] as const;
  return (
    <div className="hidden xl:flex xl:flex-col xl:items-end xl:gap-3 xl:pl-4" aria-hidden="true">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-end">
          <span className="font-mono text-[9px] font-bold tracking-[0.12em] text-black/55">{step}</span>
          {i < steps.length - 1 ? <span className="my-1 text-brand-navy/25">↓</span> : null}
        </div>
      ))}
    </div>
  );
}

export function ProductDisciplineDiagram({ platformLabel }: { platformLabel: string }) {
  const branches = ["Design", "Engineering", "Construction operations", "Financial systems", "Customer experience"];
  return (
    <svg viewBox="0 0 480 320" className="h-auto w-full max-w-md" fill="none" aria-hidden="true">
      <text x="24" y="32" className="fill-[#08233F] text-[11px] font-bold tracking-[0.1em]" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
        PRODUCT
      </text>
      {branches.map((label, i) => (
        <g key={label}>
          <line x1="80" y1="40" x2="80" y2={56 + i * 44} stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
          <line x1="80" y1={56 + i * 44} x2="120" y2={56 + i * 44} stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
          <circle cx="124" cy={56 + i * 44} r="2" fill="#FF6A00" fillOpacity="0.55" />
          <text x="132" y={60 + i * 44} className="fill-black text-[11px]" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
            {label}
          </text>
        </g>
      ))}
      <line x1="240" y1="160" x2="240" y2="240" stroke="#08233F" strokeOpacity="0.15" strokeWidth="1" />
      <polygon points="240,248 236,240 244,240" fill="#08233F" fillOpacity="0.2" />
      <rect x="168" y="252" width="144" height="36" stroke="#08233F" strokeOpacity="0.2" strokeWidth="1" fill="#FAFCFE" />
      <text x="240" y="274" textAnchor="middle" className="fill-[#08233F] text-[10px] font-bold tracking-[0.06em]" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
        {platformLabel.toUpperCase()}
      </text>
    </svg>
  );
}

export function TeamBuildSystemDiagram() {
  return (
    <svg viewBox="0 0 360 280" className="mx-auto h-auto w-full max-w-xs" fill="none" aria-hidden="true">
      <text x="180" y="28" textAnchor="middle" className="fill-[#08233F] text-[10px] font-bold tracking-[0.1em]" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
        PRODUCT
      </text>
      <line x1="180" y1="36" x2="180" y2="52" stroke="#08233F" strokeOpacity="0.15" strokeWidth="1" />
      <line x1="60" y1="80" x2="300" y2="80" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
      {[
        { label: "FIELD", x: 60 },
        { label: "FINANCIAL", x: 180 },
        { label: "CUSTOMER", x: 300 },
      ].map((n) => (
        <g key={n.label}>
          <line x1={n.x} y1="52" x2={n.x} y2="80" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
          <text x={n.x} y="98" textAnchor="middle" className="fill-black text-[9px] font-semibold" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
            {n.label}
          </text>
        </g>
      ))}
      <line x1="180" y1="108" x2="180" y2="200" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="108" y="208" width="144" height="32" stroke="#08233F" strokeOpacity="0.18" strokeWidth="1" fill="#fff" />
      <text x="180" y="228" textAnchor="middle" className="fill-[#08233F] text-[9px] font-bold" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
        VERTEXBUILD
      </text>
    </svg>
  );
}

export function ProductStoryFlowVisual() {
  const steps = ["PROJECT", "FIELD", "FINANCIAL", "INTELLIGENCE"];
  return (
    <div className="border border-brand-navy/10 bg-[#FAFCFE] p-6">
      <ol className="space-y-0">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-col items-center">
            <span className="w-full border border-brand-navy/12 bg-white py-2 text-center font-mono text-[10px] font-bold tracking-[0.1em] text-black">
              {step}
            </span>
            {i < steps.length - 1 ? <span className="py-1 text-brand-navy/30">↓</span> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
