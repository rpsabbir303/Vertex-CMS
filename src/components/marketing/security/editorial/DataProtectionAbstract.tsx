/** Technical editorial diagram — protected data boundaries (Vertex navy / gray, one orange focal). */
export function DataProtectionAbstract({ className = "" }: { className?: string }) {
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
      data-figma-layer="data-protection-abstract"
    >
      <g stroke={line} strokeOpacity="0.35" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={`v${i}`} x1={40 + i * 56} y1={24} x2={40 + i * 56} y2={396} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`h${i}`} x1={40} y1={48 + i * 52} x2={480} y2={48 + i * 52} />
        ))}
      </g>

      <rect x="72" y="88" width="128" height="96" rx="2" stroke={navy} strokeOpacity="0.22" strokeWidth="1" />
      <rect x="312" y="72" width="148" height="112" rx="2" stroke={navy} strokeOpacity="0.18" strokeWidth="1" />
      <rect x="128" y="248" width="264" height="120" rx="2" stroke={navy} strokeOpacity="0.2" strokeWidth="1" />

      <path
        d="M 200 136 H 280 V 200 H 360"
        stroke={navy}
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="4 5"
      />
      <path d="M 136 184 Q 260 120 312 128" stroke={navy} strokeOpacity="0.28" strokeWidth="1" />
      <path d="M 260 304 H 260 V 248" stroke={navy} strokeOpacity="0.3" strokeWidth="1" />

      <circle cx="260" cy="210" r="36" stroke={navy} strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="260" cy="210" r="6" fill={orange} />
      <circle cx="260" cy="210" r="14" stroke={orange} strokeOpacity="0.45" strokeWidth="1" />

      <text x="88" y="108" fill={navy} fillOpacity="0.55" fontSize="9" fontWeight="600" letterSpacing="1.2">
        TRANSIT
      </text>
      <text x="328" y="92" fill={navy} fillOpacity="0.55" fontSize="9" fontWeight="600" letterSpacing="1.2">
        AT REST
      </text>
      <text x="248" y="226" textAnchor="middle" fill={navy} fontSize="9" fontWeight="700" letterSpacing="1.4">
        DATA
      </text>
      <text x="140" y="268" fill={navy} fillOpacity="0.5" fontSize="8" fontWeight="600" letterSpacing="1">
        ISOLATION
      </text>
      <text x="340" y="268" fill={navy} fillOpacity="0.5" fontSize="8" fontWeight="600" letterSpacing="1">
        ENCRYPTION
      </text>
    </svg>
  );
}
