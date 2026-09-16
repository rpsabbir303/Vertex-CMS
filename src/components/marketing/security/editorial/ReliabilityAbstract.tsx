/** Reliability / DR pipeline — primary system through restored service (Vertex navy / gray, orange continuity node). */
export function ReliabilityAbstract({ className = "" }: { className?: string }) {
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
      data-figma-layer="reliability-abstract"
    >
      <g stroke={line} strokeOpacity="0.35" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={`v${i}`} x1={40 + i * 56} y1={24} x2={40 + i * 56} y2={396} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`h${i}`} x1={40} y1={48 + i * 52} x2={480} y2={48 + i * 52} />
        ))}
      </g>

      <rect x="196" y="56" width="128" height="64" rx="2" stroke={navy} strokeOpacity="0.24" strokeWidth="1" />
      <rect x="148" y="148" width="96" height="52" rx="2" stroke={navy} strokeOpacity="0.2" strokeWidth="1" />
      <rect x="276" y="148" width="96" height="52" rx="2" stroke={navy} strokeOpacity="0.2" strokeWidth="1" />
      <rect x="196" y="232" width="128" height="56" rx="2" stroke={navy} strokeOpacity="0.22" strokeWidth="1" />
      <rect x="168" y="316" width="184" height="52" rx="2" stroke={orange} strokeOpacity="0.45" strokeWidth="1" />

      <path d="M 260 120 V 148" stroke={navy} strokeOpacity="0.3" strokeWidth="1" />
      <path d="M 196 174 H 148 V 200 H 196" stroke={navy} strokeOpacity="0.22" strokeWidth="1" strokeDasharray="3 4" />
      <path d="M 324 174 H 372 V 200 H 324" stroke={navy} strokeOpacity="0.22" strokeWidth="1" strokeDasharray="3 4" />
      <path d="M 260 200 V 232" stroke={navy} strokeOpacity="0.28" strokeWidth="1" />
      <path d="M 260 288 V 316" stroke={navy} strokeOpacity="0.3" strokeWidth="1" />
      <circle cx="260" cy="260" r="5" fill={orange} fillOpacity="0.9" />
      <circle cx="260" cy="260" r="14" stroke={orange} strokeOpacity="0.35" strokeWidth="1" />

      <text x="208" y="84" fill={navy} fillOpacity="0.55" fontSize="7" fontWeight="600" letterSpacing="0.8">
        PRIMARY SYSTEM
      </text>
      <text x="160" y="172" fill={navy} fillOpacity="0.48" fontSize="7" fontWeight="600" letterSpacing="0.7">
        REDUNDANCY
      </text>
      <text x="292" y="172" fill={navy} fillOpacity="0.48" fontSize="7" fontWeight="600" letterSpacing="0.7">
        BACKUP
      </text>
      <text x="224" y="256" fill={navy} fillOpacity="0.5" fontSize="7" fontWeight="600" letterSpacing="0.7">
        RECOVERY
      </text>
      <text x="192" y="342" fill={navy} fontSize="7" fontWeight="700" letterSpacing="0.8">
        RESTORED SERVICE
      </text>
    </svg>
  );
}
