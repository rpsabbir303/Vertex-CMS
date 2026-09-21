/** Single-vacancy abstract: ROLE → TEAM → PRODUCT → CUSTOMER. Decorative only. */

const FLOW = [
  { label: "ROLE", x: 168, y: 58, accent: true },
  { label: "TEAM", x: 318, y: 148, accent: false },
  { label: "PRODUCT", x: 168, y: 238, accent: false },
  { label: "CUSTOMER", x: 318, y: 328, accent: true },
] as const;

export function CareerDetailVisual() {
  return (
    <div className="relative h-full min-h-[240px] w-full sm:min-h-[280px] lg:min-h-[360px]" aria-hidden="true">
      <svg
        viewBox="0 0 520 400"
        className="h-auto w-full max-w-none lg:absolute lg:-right-6 lg:top-1/2 lg:w-[112%] lg:-translate-y-1/2 xl:-right-10"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`v-${i}`} x1={24 + i * 62} y1="16" x2={24 + i * 62} y2="384" stroke="#08233F" strokeOpacity="0.03" strokeWidth="1" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h-${i}`} x1="16" y1={28 + i * 42} x2="504" y2={28 + i * 42} stroke="#08233F" strokeOpacity="0.02" strokeWidth="1" />
        ))}

        {[
          [56, 72],
          [72, 96],
          [48, 118],
          [88, 140],
          [64, 168],
        ].map(([x, y], i) => (
          <circle key={`dot-${i}`} cx={x} cy={y} r="1.4" fill="#08233F" fillOpacity="0.16" />
        ))}

        <rect x="40" y="48" width="72" height="88" rx="1" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
        <line x1="40" y1="66" x2="112" y2="66" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
        <rect x="52" y="78" width="36" height="2" fill="#146EF5" fillOpacity="0.22" />
        <rect x="52" y="88" width="48" height="2" fill="#08233F" fillOpacity="0.08" />
        <rect x="52" y="98" width="28" height="2" fill="#08233F" fillOpacity="0.06" />

        <path
          d="M 168 70 C 230 70, 250 148, 318 148 S 250 238, 168 238 S 250 328, 318 328"
          stroke="#146EF5"
          strokeOpacity="0.28"
          strokeWidth="1"
          className="careers-line-flow"
          strokeDasharray="6 8"
        />
        <path d="M 168 70 V 238" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
        <path d="M 318 148 V 328" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />

        {FLOW.map((node, index) => (
          <g key={node.label}>
            {index < FLOW.length - 1 ? (
              <path
                d={`M ${node.x} ${node.y + 14} L ${FLOW[index + 1].x} ${FLOW[index + 1].y - 14}`}
                stroke="#08233F"
                strokeOpacity="0.14"
                strokeWidth="1"
              />
            ) : null}
            <circle
              cx={node.x}
              cy={node.y}
              r="22"
              stroke={node.accent ? "#FF6A00" : "#146EF5"}
              strokeOpacity={node.accent ? 0.32 : 0.2}
              strokeWidth="1"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill={node.accent ? "#FF6A00" : "#146EF5"}
              fillOpacity={node.accent ? 0.5 : 0.32}
              className={node.accent ? "careers-pulse" : "careers-pulse-delay"}
            />
            <text
              x={node.x + 32}
              y={node.y + 4}
              fill="#08233F"
              fillOpacity="0.38"
              fontSize="10"
              fontFamily="var(--font-sans)"
              letterSpacing="1.6"
            >
              {node.label}
            </text>
          </g>
        ))}

        <path d="M 162 58 h 12 M 168 52 v 12" stroke="#FF6A00" strokeOpacity="0.45" strokeWidth="1" />
        <rect x="400" y="300" width="72" height="48" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
        <rect x="412" y="316" width="32" height="2" fill="#08233F" fillOpacity="0.08" />
        <rect x="412" y="326" width="44" height="2" fill="#08233F" fillOpacity="0.06" />
        <circle cx="456" cy="312" r="2.5" fill="#FF6A00" fillOpacity="0.45" className="careers-pulse-delay" />
      </svg>
    </div>
  );
}

export function CareerDetailFlowMark() {
  return (
    <div className="relative hidden min-h-[200px] w-full lg:block" aria-hidden="true">
      <svg viewBox="0 0 280 240" className="h-auto w-full" fill="none">
        <rect x="16" y="16" width="248" height="208" rx="1" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
        {[
          { label: "ROLE", y: 52 },
          { label: "TEAM", y: 98 },
          { label: "PRODUCT", y: 144 },
          { label: "CUSTOMER", y: 190 },
        ].map((node, index) => (
          <g key={node.label}>
            {index < 3 ? <line x1="48" y1={node.y + 10} x2="48" y2={node.y + 36} stroke="#146EF5" strokeOpacity="0.2" strokeWidth="1" /> : null}
            <circle cx="48" cy={node.y} r="5" fill={index === 0 || index === 3 ? "#FF6A00" : "#146EF5"} fillOpacity={index === 0 ? 0.5 : 0.28} />
            <text x="68" y={node.y + 4} fill="#08233F" fillOpacity="0.36" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="1.6">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
