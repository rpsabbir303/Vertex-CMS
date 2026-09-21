/** Distinct abstract line compositions for each culture story. Decorative only. */

export function CultureVisualProblems() {
  return (
    <svg viewBox="0 0 520 380" className="h-auto w-full" fill="none" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`g-${i}`} x1="20" y1={40 + i * 42} x2="500" y2={40 + i * 42} stroke="#08233F" strokeOpacity="0.02" strokeWidth="1" />
      ))}

      {/* Scattered problem field */}
      {[
        [56, 86],
        [92, 64],
        [78, 128],
        [124, 108],
        [48, 162],
        [110, 176],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 3.5 : 2.4} fill="#08233F" fillOpacity={0.18 + (i % 3) * 0.06} />
      ))}
      <path d="M 56 86 L 92 64 L 124 108 L 78 128 Z" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />

      {/* Analysis grid */}
      <rect x="196" y="88" width="128" height="128" rx="1" stroke="#146EF5" strokeOpacity="0.22" strokeWidth="1" />
      <line x1="196" y1="130" x2="324" y2="130" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="196" y1="172" x2="324" y2="172" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="238" y1="88" x2="238" y2="216" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="280" y1="88" x2="280" y2="216" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />
      <circle cx="260" cy="152" r="5" fill="#146EF5" fillOpacity="0.28" className="careers-pulse" />
      <path d="M 255 152 h 10 M 260 147 v 10" stroke="#146EF5" strokeOpacity="0.4" strokeWidth="1" />

      {/* Resolved structure */}
      <rect x="372" y="108" width="108" height="88" rx="1" stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
      <rect x="388" y="128" width="76" height="3" fill="#146EF5" fillOpacity="0.2" />
      <rect x="388" y="142" width="58" height="2" fill="#08233F" fillOpacity="0.08" />
      <rect x="388" y="154" width="64" height="2" fill="#08233F" fillOpacity="0.06" />
      <circle cx="458" cy="176" r="4" fill="#FF6A00" fillOpacity="0.5" className="careers-pulse-delay" />

      {/* Problem → analysis → solution path */}
      <path
        d="M 124 120 C 160 140, 176 152, 196 152 S 324 152, 372 152"
        stroke="#146EF5"
        strokeOpacity="0.28"
        strokeWidth="1"
        className="careers-line-flow"
        strokeDasharray="5 7"
      />
      <path d="M 366 148 l 8 4 -8 4" stroke="#FF6A00" strokeOpacity="0.55" strokeWidth="1" />

      <text x="48" y="312" fill="#08233F" fillOpacity="0.32" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="1.4">
        PROBLEM
      </text>
      <text x="216" y="312" fill="#08233F" fillOpacity="0.32" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="1.4">
        ANALYSIS
      </text>
      <text x="390" y="312" fill="#08233F" fillOpacity="0.32" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="1.4">
        SOLUTION
      </text>
      <line x1="48" y1="322" x2="500" y2="322" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
    </svg>
  );
}

export function CultureVisualDisciplines() {
  const nodes = [
    { label: "DESIGN", x: 260, y: 58 },
    { label: "PRODUCT", x: 78, y: 190 },
    { label: "ENGINEERING", x: 442, y: 190 },
    { label: "DOMAIN", x: 260, y: 322 },
  ] as const;

  return (
    <svg viewBox="0 0 520 380" className="h-auto w-full" fill="none" aria-hidden="true">
      <circle cx="260" cy="190" r="118" stroke="#08233F" strokeOpacity="0.05" strokeWidth="1" />
      <circle cx="260" cy="190" r="72" stroke="#146EF5" strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="260" cy="190" r="18" stroke="#146EF5" strokeOpacity="0.22" strokeWidth="1" />
      <circle cx="260" cy="190" r="5" fill="#146EF5" fillOpacity="0.4" className="careers-pulse" />

      {nodes.map((node) => (
        <g key={node.label}>
          <path
            d={`M 260 190 L ${node.x} ${node.y}`}
            stroke="#146EF5"
            strokeOpacity="0.18"
            strokeWidth="1"
            className="careers-line-flow-slow"
            strokeDasharray="4 8"
          />
          <rect x={node.x - 54} y={node.y - 18} width="108" height="36" rx="1" stroke="#08233F" strokeOpacity="0.18" strokeWidth="1" />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fill="#08233F"
            fillOpacity="0.55"
            fontSize="10"
            fontFamily="var(--font-sans)"
            letterSpacing="1.6"
          >
            {node.label}
          </text>
        </g>
      ))}

      <circle cx="260" cy="58" r="3.5" fill="#146EF5" fillOpacity="0.35" />
      <circle cx="78" cy="190" r="3.5" fill="#146EF5" fillOpacity="0.3" />
      <circle cx="442" cy="190" r="3.5" fill="#146EF5" fillOpacity="0.3" />
      <circle cx="260" cy="322" r="3.5" fill="#FF6A00" fillOpacity="0.5" className="careers-pulse-delay" />

      {/* Cross-discipline arcs */}
      <path d="M 78 190 C 140 90, 380 90, 442 190" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
      <path d="M 78 190 C 140 290, 380 290, 442 190" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
    </svg>
  );
}

export function CultureVisualConnectedSystems() {
  const nodes = [
    { label: "PROJECTS", x: 260, y: 42 },
    { label: "FINANCIALS", x: 62, y: 148 },
    { label: "FIELD", x: 458, y: 148 },
    { label: "TEAMS", x: 96, y: 318 },
    { label: "INTELLIGENCE", x: 424, y: 318 },
  ] as const;

  return (
    <svg viewBox="0 0 520 380" className="h-auto w-full" fill="none" aria-hidden="true">
      <polygon
        points="260,132 318,166 318,234 260,268 202,234 202,166"
        stroke="#146EF5"
        strokeOpacity="0.28"
        strokeWidth="1"
        fill="#146EF5"
        fillOpacity="0.03"
      />
      <circle cx="260" cy="200" r="8" fill="#FF6A00" fillOpacity="0.45" className="careers-pulse" />
      <path d="M 254 200 h 12 M 260 194 v 12" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1" />

      {nodes.map((node) => (
        <g key={node.label}>
          <path
            d={`M 260 200 Q ${(node.x + 260) / 2} ${(node.y + 200) / 2 - 18} ${node.x} ${node.y}`}
            stroke="#146EF5"
            strokeOpacity="0.22"
            strokeWidth="1"
            className="careers-line-flow"
            strokeDasharray="5 8"
          />
          <rect x={node.x - 52} y={node.y - 16} width="104" height="32" rx="1" stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fill="#08233F"
            fillOpacity="0.5"
            fontSize="9"
            fontFamily="var(--font-sans)"
            letterSpacing="1.2"
          >
            {node.label}
          </text>
        </g>
      ))}

      <circle cx="260" cy="42" r="3" fill="#146EF5" fillOpacity="0.4" />
      <circle cx="62" cy="148" r="3" fill="#146EF5" fillOpacity="0.3" />
      <circle cx="458" cy="148" r="3" fill="#146EF5" fillOpacity="0.3" />
      <circle cx="96" cy="318" r="3" fill="#08233F" fillOpacity="0.25" />
      <circle cx="424" cy="318" r="3" fill="#FF6A00" fillOpacity="0.45" className="careers-pulse-delay" />

      <path d="M 62 148 H 202 M 318 148 H 458" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
      <path d="M 96 318 C 160 268, 360 268, 424 318" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
    </svg>
  );
}

export function CultureVisualCustomerProblem() {
  const steps = [
    { label: "PROBLEM", x: 56 },
    { label: "UNDERSTAND", x: 176 },
    { label: "THINK", x: 296 },
    { label: "SOLUTION", x: 416 },
  ] as const;

  return (
    <svg viewBox="0 0 520 380" className="h-auto w-full" fill="none" aria-hidden="true">
      <path
        d="M 56 188 C 140 120, 220 260, 296 188 S 400 96, 468 188"
        stroke="#146EF5"
        strokeOpacity="0.28"
        strokeWidth="1"
        className="careers-line-flow"
        strokeDasharray="6 8"
      />
      <path d="M 56 188 C 140 256, 220 116, 296 188 S 400 280, 468 188" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />

      {steps.map((step, i) => (
        <g key={step.label}>
          <circle cx={step.x} cy="188" r="18" stroke={i === 3 ? "#FF6A00" : "#146EF5"} strokeOpacity={i === 3 ? 0.4 : 0.22} strokeWidth="1" />
          <circle
            cx={step.x}
            cy="188"
            r="5"
            fill={i === 3 ? "#FF6A00" : "#146EF5"}
            fillOpacity={i === 3 ? 0.5 : 0.28}
            className={i === 3 ? "careers-pulse-delay" : i === 0 ? "careers-pulse" : undefined}
          />
          <text
            x={step.x}
            y="248"
            textAnchor="middle"
            fill="#08233F"
            fillOpacity="0.4"
            fontSize="9"
            fontFamily="var(--font-sans)"
            letterSpacing="1.3"
          >
            {step.label}
          </text>
        </g>
      ))}

      <path d="M 74 188 H 158 M 194 188 H 278 M 314 188 H 398" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />

      {/* Origin / destination frames */}
      <rect x="28" y="72" width="88" height="56" rx="1" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="40" y="88" width="48" height="3" fill="#08233F" fillOpacity="0.1" />
      <rect x="40" y="98" width="36" height="2" fill="#08233F" fillOpacity="0.06" />

      <rect x="404" y="72" width="88" height="56" rx="1" stroke="#FF6A00" strokeOpacity="0.28" strokeWidth="1" />
      <rect x="416" y="88" width="52" height="3" fill="#146EF5" fillOpacity="0.2" />
      <rect x="416" y="98" width="40" height="2" fill="#08233F" fillOpacity="0.08" />
      <rect x="416" y="108" width="32" height="8" rx="1" fill="#FF6A00" fillOpacity="0.22" />

      <path d="M 72 128 C 72 156, 56 168, 56 170" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
      <path d="M 448 128 C 448 156, 416 168, 416 170" stroke="#FF6A00" strokeOpacity="0.2" strokeWidth="1" />
    </svg>
  );
}
