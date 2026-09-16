/** Access architecture diagram — identity → auth → authorization (Vertex navy / gray, orange focal on MFA). */
export function AccessSecurityAbstract({ className = "" }: { className?: string }) {
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
      data-figma-layer="access-security-abstract"
    >
      <g stroke={line} strokeOpacity="0.35" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={`v${i}`} x1={40 + i * 56} y1={24} x2={40 + i * 56} y2={396} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`h${i}`} x1={40} y1={48 + i * 52} x2={480} y2={48 + i * 52} />
        ))}
      </g>

      <rect x="88" y="56" width="120" height="64" rx="2" stroke={navy} strokeOpacity="0.22" strokeWidth="1" />
      <rect x="300" y="48" width="132" height="72" rx="2" stroke={navy} strokeOpacity="0.18" strokeWidth="1" />
      <rect x="160" y="300" width="200" height="72" rx="2" stroke={navy} strokeOpacity="0.2" strokeWidth="1" />

      <path d="M 148 88 H 260 V 160 H 366" stroke={navy} strokeOpacity="0.32" strokeWidth="1" strokeDasharray="4 5" />
      <path d="M 260 200 V 300" stroke={navy} strokeOpacity="0.28" strokeWidth="1" />
      <path d="M 148 120 Q 260 200 366 92" stroke={navy} strokeOpacity="0.22" strokeWidth="1" />

      <circle cx="260" cy="200" r="34" stroke={navy} strokeOpacity="0.25" strokeWidth="1" />
      <circle cx="260" cy="200" r="6" fill={orange} />
      <circle cx="260" cy="200" r="14" stroke={orange} strokeOpacity="0.45" strokeWidth="1" />

      <circle cx="148" cy="88" r="4" fill={navy} fillOpacity="0.45" />
      <circle cx="366" cy="92" r="4" fill={navy} fillOpacity="0.35" />
      <circle cx="260" cy="336" r="4" fill={navy} fillOpacity="0.4" />

      <text x="98" y="78" fill={navy} fillOpacity="0.55" fontSize="8" fontWeight="600" letterSpacing="1.1">
        IDENTITY
      </text>
      <text x="318" y="70" fill={navy} fillOpacity="0.55" fontSize="8" fontWeight="600" letterSpacing="1.1">
        AUTH
      </text>
      <text x="248" y="206" textAnchor="middle" fill={navy} fontSize="8" fontWeight="700" letterSpacing="1.2">
        MFA
      </text>
      <text x="318" y="118" fill={navy} fillOpacity="0.5" fontSize="8" fontWeight="600" letterSpacing="1">
        ROLE
      </text>
      <text x="172" y="318" fill={navy} fillOpacity="0.5" fontSize="8" fontWeight="600" letterSpacing="1">
        ACCESS
      </text>
    </svg>
  );
}
