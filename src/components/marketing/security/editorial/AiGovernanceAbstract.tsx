/** AI governance pipeline — human confirmation gate before committed action (Vertex navy / gray, orange gate). */
export function AiGovernanceAbstract({ className = "" }: { className?: string }) {
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
      data-figma-layer="ai-governance-abstract"
    >
      <g stroke={line} strokeOpacity="0.35" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={`v${i}`} x1={40 + i * 56} y1={24} x2={40 + i * 56} y2={396} />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={`h${i}`} x1={40} y1={48 + i * 52} x2={480} y2={48 + i * 52} />
        ))}
      </g>

      <rect x="52" y="88" width="72" height="48" rx="2" stroke={navy} strokeOpacity="0.2" strokeWidth="1" />
      <rect x="148" y="76" width="72" height="56" rx="2" stroke={navy} strokeOpacity="0.2" strokeWidth="1" />
      <rect x="244" y="68" width="72" height="64" rx="2" stroke={navy} strokeOpacity="0.2" strokeWidth="1" />

      <rect x="196" y="188" width="128" height="72" rx="2" stroke={orange} strokeOpacity="0.55" strokeWidth="1.25" />
      <circle cx="260" cy="224" r="6" fill={orange} />
      <circle cx="260" cy="224" r="18" stroke={orange} strokeOpacity="0.35" strokeWidth="1" />

      <rect x="148" y="296" width="88" height="52" rx="2" stroke={navy} strokeOpacity="0.22" strokeWidth="1" />
      <rect x="284" y="296" width="120" height="52" rx="2" stroke={navy} strokeOpacity="0.18" strokeWidth="1" />

      <path d="M 88 112 V 160 H 260 V 188" stroke={navy} strokeOpacity="0.28" strokeWidth="1" />
      <path d="M 184 104 H 260" stroke={navy} strokeOpacity="0.24" strokeWidth="1" strokeDasharray="3 4" />
      <path d="M 280 100 H 316 V 188 H 260" stroke={navy} strokeOpacity="0.22" strokeWidth="1" strokeDasharray="3 4" />
      <path d="M 260 260 V 296" stroke={navy} strokeOpacity="0.3" strokeWidth="1" />
      <path d="M 236 324 H 284" stroke={navy} strokeOpacity="0.22" strokeWidth="1" />
      <path d="M 344 322 H 284" stroke={navy} strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 5" />

      <text x="58" y="108" fill={navy} fillOpacity="0.5" fontSize="7" fontWeight="600" letterSpacing="0.7">
        AI INPUT
      </text>
      <text x="154" y="98" fill={navy} fillOpacity="0.5" fontSize="7" fontWeight="600" letterSpacing="0.7">
        ANALYSIS
      </text>
      <text x="250" y="90" fill={navy} fillOpacity="0.5" fontSize="7" fontWeight="600" letterSpacing="0.7">
        RECOMMEND
      </text>
      <text x="208" y="212" fill={navy} fontSize="7" fontWeight="700" letterSpacing="0.8">
        HUMAN CONFIRM
      </text>
      <text x="160" y="318" fill={navy} fillOpacity="0.48" fontSize="7" fontWeight="600" letterSpacing="0.7">
        ACTION
      </text>
      <text x="296" y="318" fill={navy} fillOpacity="0.48" fontSize="7" fontWeight="600" letterSpacing="0.7">
        ACTIVITY LOG
      </text>
    </svg>
  );
}
