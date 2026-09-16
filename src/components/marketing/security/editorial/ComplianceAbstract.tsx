/** Compliance architecture diagram — requirements → records → verification (Vertex navy / gray, orange focal). */
export function ComplianceAbstract({ className = "" }: { className?: string }) {
  const line = "#94A3B8";
  const navy = "#08233F";
  const orange = "#FF6A00";

  return (
    <svg
      className={`block h-auto w-full max-w-full ${className}`}
      viewBox="0 0 520 420"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      data-figma-layer="compliance-abstract"
    >
      <g stroke={line} strokeOpacity="0.35" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={`v${i}`} x1={40 + i * 56} y1={24} x2={40 + i * 56} y2={396} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`h${i}`} x1={40} y1={48 + i * 52} x2={480} y2={48 + i * 52} />
        ))}
      </g>

      <rect x="64" y="72" width="108" height="80" rx="2" stroke={navy} strokeOpacity="0.22" strokeWidth="1" />
      <rect x="200" y="56" width="120" height="88" rx="2" stroke={navy} strokeOpacity="0.2" strokeWidth="1" />
      <rect x="348" y="68" width="112" height="76" rx="2" stroke={navy} strokeOpacity="0.18" strokeWidth="1" />
      <rect x="120" y="268" width="280" height="88" rx="2" stroke={navy} strokeOpacity="0.2" strokeWidth="1" />

      <path d="M 118 112 H 200 V 100 H 348" stroke={navy} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 5" />
      <path d="M 260 144 V 268" stroke={navy} strokeOpacity="0.28" strokeWidth="1" />
      <path d="M 172 152 H 260 H 348" stroke={navy} strokeOpacity="0.22" strokeWidth="1" />

      <circle cx="260" cy="200" r="32" stroke={navy} strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="260" cy="200" r="5" fill={orange} />
      <circle cx="260" cy="200" r="12" stroke={orange} strokeOpacity="0.45" strokeWidth="1" />

      <text x="78" y="92" fill={navy} fillOpacity="0.55" fontSize="8" fontWeight="600" letterSpacing="1">
        REQUIREMENTS
      </text>
      <text x="214" y="78" fill={navy} fillOpacity="0.55" fontSize="8" fontWeight="600" letterSpacing="1">
        CONTROLS
      </text>
      <text x="362" y="88" fill={navy} fillOpacity="0.55" fontSize="8" fontWeight="600" letterSpacing="1">
        RECORDS
      </text>
      <text x="248" y="206" textAnchor="middle" fill={navy} fontSize="8" fontWeight="700" letterSpacing="1.2">
        VERIFY
      </text>
      <text x="136" y="292" fill={navy} fillOpacity="0.5" fontSize="8" fontWeight="600" letterSpacing="1">
        COMPLIANCE
      </text>
      <text x="72" y="128" fill={navy} fillOpacity="0.42" fontSize="7" fontWeight="600" letterSpacing="0.8">
        PRIVACY
      </text>
      <text x="218" y="118" fill={navy} fillOpacity="0.42" fontSize="7" fontWeight="600" letterSpacing="0.8">
        ACCESSIBILITY
      </text>
      <text x="368" y="124" fill={navy} fillOpacity="0.42" fontSize="7" fontWeight="600" letterSpacing="0.8">
        RECORDS
      </text>
      <text x="148" y="318" fill={navy} fillOpacity="0.42" fontSize="7" fontWeight="600" letterSpacing="0.8">
        SAFETY
      </text>
      <text x="248" y="318" fill={navy} fillOpacity="0.42" fontSize="7" fontWeight="600" letterSpacing="0.8">
        WORKFORCE
      </text>
    </svg>
  );
}
