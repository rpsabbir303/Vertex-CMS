/** About-page inline SVG diagrams. Figma-safe: real line/path/circle/rect/text. Decorative only. */

function Diagram({ children, viewBox = "0 0 520 380" }: { children: React.ReactNode; viewBox?: string }) {
  return (
    <div className="relative z-[1] min-w-0" aria-hidden="true">
      <svg viewBox={viewBox} className="h-auto w-full" fill="none">
        {children}
      </svg>
    </div>
  );
}

function LocalGrid({ cols = 8, rows = 8, stepX = 62, stepY = 42 }: { cols?: number; rows?: number; stepX?: number; stepY?: number }) {
  return (
    <>
      {Array.from({ length: cols }).map((_, i) => (
        <line key={`v-${i}`} x1={20 + i * stepX} y1="16" x2={20 + i * stepX} y2="364" stroke="#08233F" strokeOpacity="0.03" strokeWidth="1" />
      ))}
      {Array.from({ length: rows }).map((_, i) => (
        <line key={`h-${i}`} x1="16" y1={28 + i * stepY} x2="504" y2={28 + i * stepY} stroke="#08233F" strokeOpacity="0.02" strokeWidth="1" />
      ))}
    </>
  );
}

export function AboutIdentityVisual() {
  return (
    <Diagram>
      <LocalGrid />
      <rect x="186" y="106" width="148" height="148" rx="2" stroke="#146EF5" strokeOpacity="0.22" strokeWidth="1" />
      <line x1="186" y1="155" x2="334" y2="155" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="186" y1="204" x2="334" y2="204" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="235" y1="106" x2="235" y2="254" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="284" y1="106" x2="284" y2="254" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />
      <circle cx="260" cy="180" r="8" fill="#FF6A00" fillOpacity="0.42" className="careers-pulse" />
      <path d="M 254 180 h 12 M 260 174 v 12" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1" />

      <path
        d="M 48 90 C 110 90, 150 180, 186 180"
        stroke="#146EF5"
        strokeOpacity="0.22"
        strokeWidth="1"
        className="careers-line-flow"
        strokeDasharray="5 8"
      />
      <path d="M 334 180 C 380 180, 420 90, 480 90" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
      <path
        d="M 48 270 C 110 270, 150 180, 186 180"
        stroke="#08233F"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <path
        d="M 334 180 C 380 180, 420 270, 480 270"
        stroke="#146EF5"
        strokeOpacity="0.18"
        strokeWidth="1"
        className="careers-line-flow-slow"
        strokeDasharray="4 10"
      />

      <circle cx="48" cy="90" r="4" fill="#146EF5" fillOpacity="0.3" />
      <circle cx="480" cy="90" r="4" fill="#08233F" fillOpacity="0.2" />
      <circle cx="48" cy="270" r="4" fill="#08233F" fillOpacity="0.2" />
      <circle cx="480" cy="270" r="4" fill="#FF6A00" fillOpacity="0.4" className="careers-pulse-delay" />

      <rect x="20" y="62" width="72" height="44" rx="1" stroke="#08233F" strokeOpacity="0.14" strokeWidth="1" />
      <rect x="32" y="74" width="36" height="3" fill="#146EF5" fillOpacity="0.18" />
      <rect x="32" y="84" width="48" height="2" fill="#08233F" fillOpacity="0.08" />

      <rect x="428" y="62" width="72" height="44" rx="1" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="440" y="74" width="32" height="3" fill="#08233F" fillOpacity="0.1" />
      <rect x="440" y="84" width="44" height="2" fill="#08233F" fillOpacity="0.06" />

      <rect x="20" y="246" width="72" height="44" rx="1" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="32" y="258" width="28" height="3" fill="#08233F" fillOpacity="0.1" />
      <rect x="32" y="268" width="40" height="2" fill="#08233F" fillOpacity="0.06" />

      <rect x="428" y="246" width="72" height="44" rx="1" stroke="#FF6A00" strokeOpacity="0.22" strokeWidth="1" />
      <rect x="440" y="258" width="36" height="3" fill="#FF6A00" fillOpacity="0.18" />
      <rect x="440" y="268" width="44" height="2" fill="#08233F" fillOpacity="0.06" />
      <circle cx="484" cy="276" r="3" fill="#FF6A00" fillOpacity="0.45" />
    </Diagram>
  );
}

export function AboutChallengeVisual({ labels }: { labels: readonly string[] }) {
  const nodes = labels.map((label, i) => ({ label, x: 70 + i * 126 }));
  return (
    <Diagram viewBox="0 0 520 240">
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`g-${i}`} x1="16" y1={24 + i * 28} x2="504" y2={24 + i * 28} stroke="#08233F" strokeOpacity="0.02" strokeWidth="1" />
      ))}
      <path
        d="M 70 96 C 140 48, 210 148, 259 96 S 360 40, 448 96"
        stroke="#146EF5"
        strokeOpacity="0.24"
        strokeWidth="1"
        className="careers-line-flow"
        strokeDasharray="6 8"
      />
      <path d="M 70 96 C 140 144, 210 44, 259 96 S 360 152, 448 96" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
      <path d="M 70 96 H 448" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />

      <rect x="24" y="36" width="64" height="28" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="432" y="36" width="64" height="28" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="36" y="46" width="28" height="2" fill="#08233F" fillOpacity="0.08" />
      <rect x="444" y="46" width="28" height="2" fill="#08233F" fillOpacity="0.08" />

      {nodes.map((node, i) => (
        <g key={node.label}>
          <circle
            cx={node.x}
            cy="96"
            r="18"
            stroke={i === nodes.length - 1 ? "#FF6A00" : "#146EF5"}
            strokeOpacity={i === nodes.length - 1 ? 0.4 : 0.22}
            strokeWidth="1"
          />
          <circle
            cx={node.x}
            cy="96"
            r="5"
            fill={i === nodes.length - 1 ? "#FF6A00" : "#146EF5"}
            fillOpacity={i === 0 ? 0.22 : 0.35}
            className={i === nodes.length - 1 ? "careers-pulse" : undefined}
          />
          <text
            x={node.x}
            y="156"
            textAnchor="middle"
            fill="#08233F"
            fillOpacity="0.45"
            fontSize="10"
            fontFamily="var(--font-sans)"
            letterSpacing="1.1"
          >
            {node.label.toUpperCase()}
          </text>
        </g>
      ))}
      <line x1="48" y1="176" x2="472" y2="176" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
    </Diagram>
  );
}

export function AboutAudienceVisual({ labels }: { labels: readonly string[] }) {
  const nodes = [
    { label: labels[0] ?? "", x: 90, y: 70 },
    { label: labels[1] ?? "", x: 430, y: 70 },
    { label: labels[2] ?? "", x: 260, y: 308 },
  ];
  return (
    <Diagram>
      <LocalGrid />
      <circle cx="260" cy="176" r="86" stroke="#08233F" strokeOpacity="0.05" strokeWidth="1" />
      <circle cx="260" cy="176" r="52" stroke="#146EF5" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="260" cy="176" r="18" stroke="#146EF5" strokeOpacity="0.16" strokeWidth="1" />
      <circle cx="260" cy="176" r="8" fill="#146EF5" fillOpacity="0.32" className="careers-pulse" />
      <path d="M 254 176 h 12 M 260 170 v 12" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1" />

      {nodes.map((node, i) => (
        <g key={node.label}>
          <path
            d={`M 260 176 L ${node.x} ${node.y}`}
            stroke="#146EF5"
            strokeOpacity="0.18"
            strokeWidth="1"
            className="careers-line-flow-slow"
            strokeDasharray="4 8"
          />
          <rect x={node.x - 70} y={node.y - 16} width="140" height="32" rx="1" stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
          <circle cx={node.x} cy={node.y - 28} r="3" fill={i === 2 ? "#FF6A00" : "#146EF5"} fillOpacity="0.4" className={i === 2 ? "careers-pulse-delay" : undefined} />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fill="#08233F"
            fillOpacity="0.5"
            fontSize="8"
            fontFamily="var(--font-sans)"
            letterSpacing="0.5"
          >
            {node.label.toUpperCase()}
          </text>
        </g>
      ))}

      <path d="M 90 70 C 140 20, 380 20, 430 70" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
      <rect x="36" y="214" width="72" height="40" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="48" y="226" width="36" height="3" fill="#146EF5" fillOpacity="0.16" />
      <rect x="48" y="236" width="48" height="2" fill="#08233F" fillOpacity="0.06" />
      <rect x="412" y="214" width="72" height="40" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="424" y="226" width="32" height="3" fill="#08233F" fillOpacity="0.1" />
      <rect x="424" y="236" width="44" height="2" fill="#08233F" fillOpacity="0.06" />
    </Diagram>
  );
}

export function AboutPlatformMapVisual({ center, labels }: { center: string; labels: readonly string[] }) {
  const nodes = labels.slice(0, 6).map((label, i) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
    return { label, x: 260 + Math.cos(angle) * 168, y: 196 + Math.sin(angle) * 118 };
  });
  return (
    <Diagram>
      <LocalGrid />
      <polygon
        points="260,140 308,168 308,224 260,252 212,224 212,168"
        stroke="#146EF5"
        strokeOpacity="0.28"
        strokeWidth="1"
        fill="#146EF5"
        fillOpacity="0.03"
      />
      <circle cx="260" cy="196" r="8" fill="#FF6A00" fillOpacity="0.42" className="careers-pulse" />
      <path d="M 254 196 h 12 M 260 190 v 12" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1" />
      <text x="260" y="52" textAnchor="middle" fill="#08233F" fillOpacity="0.4" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="1.4">
        {center.toUpperCase()}
      </text>
      {nodes.map((node, i) => (
        <g key={node.label}>
          <path
            d={`M 260 196 Q ${(node.x + 260) / 2} ${(node.y + 196) / 2 - 16} ${node.x} ${node.y}`}
            stroke="#146EF5"
            strokeOpacity="0.18"
            strokeWidth="1"
            className="careers-line-flow"
            strokeDasharray="4 8"
          />
          <rect x={node.x - 78} y={node.y - 14} width="156" height="28" rx="1" stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
          <circle cx={node.x} cy={node.y - 24} r="2.5" fill={i === 5 ? "#FF6A00" : "#146EF5"} fillOpacity={i === 5 ? 0.45 : 0.3} />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fill="#08233F"
            fillOpacity="0.5"
            fontSize="8"
            fontFamily="var(--font-sans)"
            letterSpacing="0.4"
          >
            {node.label.toUpperCase()}
          </text>
        </g>
      ))}
    </Diagram>
  );
}

export function AboutLayersVisual({ labels }: { labels: readonly string[] }) {
  return (
    <Diagram>
      <LocalGrid />
      <rect x="160" y="28" width="200" height="36" rx="1" stroke="#146EF5" strokeOpacity="0.28" strokeWidth="1" />
      <circle cx="176" cy="46" r="3" fill="#146EF5" fillOpacity="0.35" className="careers-pulse" />
      <text x="260" y="51" textAnchor="middle" fill="#08233F" fillOpacity="0.5" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="1.4">
        VertexBuild
      </text>
      {labels.map((label, i) => {
        const y = 88 + i * 68;
        return (
          <g key={label}>
            <path d={`M 260 ${i === 0 ? 64 : y - 16} V ${y}`} stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
            <rect
              x="90"
              y={y}
              width="340"
              height="44"
              rx="1"
              stroke={i === 3 ? "#FF6A00" : "#08233F"}
              strokeOpacity={i === 3 ? 0.28 : 0.14}
              strokeWidth="1"
            />
            <rect x="106" y={y + 10} width="28" height="2" fill={i === 3 ? "#FF6A00" : "#146EF5"} fillOpacity="0.16" />
            <circle cx="114" cy={y + 22} r="3.5" fill={i === 3 ? "#FF6A00" : "#146EF5"} fillOpacity="0.4" className={i === 3 ? "careers-pulse-delay" : undefined} />
            <text
              x="260"
              y={y + 27}
              textAnchor="middle"
              fill="#08233F"
              fillOpacity="0.5"
              fontSize="10"
              fontFamily="var(--font-sans)"
              letterSpacing="0.8"
            >
              {label.toUpperCase()}
            </text>
          </g>
        );
      })}
      <rect x="36" y="300" width="48" height="32" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="436" y="300" width="48" height="32" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
    </Diagram>
  );
}

export function AboutIntelligenceVisual({ labels }: { labels: readonly string[] }) {
  return (
    <Diagram>
      <LocalGrid />
      <path
        d="M 48 48 C 120 48, 160 320, 260 196 S 360 48, 472 196"
        stroke="#146EF5"
        strokeOpacity="0.14"
        strokeWidth="1"
        className="careers-line-flow-slow"
        strokeDasharray="5 8"
      />
      {labels.map((label, i) => {
        const y = 48 + i * 78;
        return (
          <g key={label}>
            {i < labels.length - 1 ? (
              <path d={`M 260 ${y + 36} V ${y + 50}`} stroke="#146EF5" strokeOpacity="0.2" strokeWidth="1" />
            ) : null}
            <rect
              x="150"
              y={y}
              width="220"
              height="36"
              rx="1"
              stroke={i === labels.length - 1 ? "#FF6A00" : "#146EF5"}
              strokeOpacity={i === labels.length - 1 ? 0.32 : 0.2}
              strokeWidth="1"
            />
            <circle
              cx="168"
              cy={y + 18}
              r="3.5"
              fill={i === 0 ? "#08233F" : i === labels.length - 1 ? "#FF6A00" : "#146EF5"}
              fillOpacity="0.4"
              className={i === labels.length - 1 ? "careers-pulse" : undefined}
            />
            <text
              x="260"
              y={y + 22}
              textAnchor="middle"
              fill="#08233F"
              fillOpacity="0.5"
              fontSize="10"
              fontFamily="var(--font-sans)"
              letterSpacing="1"
            >
              {label.toUpperCase()}
            </text>
          </g>
        );
      })}
      <rect x="36" y="300" width="72" height="40" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="48" y="312" width="36" height="3" fill="#146EF5" fillOpacity="0.16" />
      <rect x="48" y="322" width="48" height="2" fill="#08233F" fillOpacity="0.06" />
      <rect x="412" y="300" width="72" height="40" rx="1" stroke="#FF6A00" strokeOpacity="0.2" strokeWidth="1" />
      <rect x="424" y="312" width="32" height="3" fill="#FF6A00" fillOpacity="0.16" />
      <circle cx="468" cy="328" r="3" fill="#FF6A00" fillOpacity="0.45" className="careers-pulse-delay" />
    </Diagram>
  );
}

export function AboutAiVisual() {
  return (
    <Diagram>
      <LocalGrid />
      <circle cx="260" cy="168" r="96" stroke="#08233F" strokeOpacity="0.05" strokeWidth="1" />
      <circle cx="260" cy="168" r="64" stroke="#146EF5" strokeOpacity="0.16" strokeWidth="1" />
      <circle cx="260" cy="168" r="28" stroke="#146EF5" strokeOpacity="0.22" strokeWidth="1" />
      <circle cx="260" cy="168" r="6" fill="#146EF5" fillOpacity="0.35" className="careers-pulse" />
      <path d="M 80 168 H 196" stroke="#08233F" strokeOpacity="0.14" strokeWidth="1" />
      <path
        d="M 324 168 H 440"
        stroke="#146EF5"
        strokeOpacity="0.2"
        strokeWidth="1"
        className="careers-line-flow"
        strokeDasharray="5 8"
      />
      <rect x="36" y="150" width="88" height="36" rx="1" stroke="#08233F" strokeOpacity="0.14" strokeWidth="1" />
      <rect x="48" y="162" width="36" height="3" fill="#08233F" fillOpacity="0.1" />
      <rect x="48" y="172" width="52" height="2" fill="#08233F" fillOpacity="0.06" />
      <rect x="396" y="150" width="88" height="36" rx="1" stroke="#FF6A00" strokeOpacity="0.28" strokeWidth="1" />
      <rect x="408" y="162" width="32" height="3" fill="#FF6A00" fillOpacity="0.18" />
      <circle cx="440" cy="168" r="4" fill="#FF6A00" fillOpacity="0.45" className="careers-pulse-delay" />
      <path d="M 260 232 V 268" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="196" y="268" width="128" height="28" rx="1" stroke="#08233F" strokeOpacity="0.14" strokeWidth="1" />
      <rect x="36" y="300" width="56" height="32" rx="1" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
      <rect x="428" y="300" width="56" height="32" rx="1" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
    </Diagram>
  );
}

export function AboutLifecycleVisual({ labels }: { labels: readonly string[] }) {
  const count = Math.max(labels.length - 1, 1);
  return (
    <Diagram viewBox="0 0 720 200">
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`g-${i}`} x1={24 + i * 72} y1="16" x2={24 + i * 72} y2="184" stroke="#08233F" strokeOpacity="0.03" strokeWidth="1" />
      ))}
      <path d="M 40 84 H 680" stroke="#146EF5" strokeOpacity="0.16" strokeWidth="1" />
      <path
        d="M 40 84 C 160 36, 280 132, 400 84 S 560 28, 680 84"
        stroke="#146EF5"
        strokeOpacity="0.2"
        strokeWidth="1"
        className="careers-line-flow"
        strokeDasharray="5 8"
      />
      <rect x="24" y="28" width="56" height="24" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="640" y="28" width="56" height="24" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
      {labels.map((label, i) => {
        const x = 40 + i * (640 / count);
        return (
          <g key={label}>
            <circle
              cx={x}
              cy="84"
              r="8"
              stroke={i === labels.length - 1 ? "#FF6A00" : "#146EF5"}
              strokeOpacity={i === labels.length - 1 ? 0.36 : 0.22}
              strokeWidth="1"
            />
            <circle
              cx={x}
              cy="84"
              r="4"
              fill={i === labels.length - 1 ? "#FF6A00" : "#146EF5"}
              fillOpacity={0.28 + i * 0.04}
              className={i === labels.length - 1 ? "careers-pulse" : undefined}
            />
            <text
              x={x}
              y="132"
              textAnchor="middle"
              fill="#08233F"
              fillOpacity="0.45"
              fontSize="8"
              fontFamily="var(--font-sans)"
              letterSpacing="0.4"
            >
              {label.toUpperCase()}
            </text>
          </g>
        );
      })}
      <line x1="40" y1="156" x2="680" y2="156" stroke="#08233F" strokeOpacity="0.08" strokeWidth="1" />
    </Diagram>
  );
}

/** Surrounds the connected statement — empty center keeps copy readable. */
export function AboutConnectedVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 1280 420" className="hidden h-full w-full lg:block" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`v-${i}`} x1={40 + i * 72} y1="12" x2={40 + i * 72} y2="408" stroke="#08233F" strokeOpacity="0.03" strokeWidth="1" />
        ))}
        <path
          d="M 48 210 C 180 90, 260 330, 380 210"
          stroke="#146EF5"
          strokeOpacity="0.16"
          strokeWidth="1"
          className="careers-line-flow"
          strokeDasharray="6 8"
        />
        <path d="M 900 210 C 1020 90, 1100 330, 1232 210" stroke="#146EF5" strokeOpacity="0.16" strokeWidth="1" strokeDasharray="6 8" />
        <path d="M 64 120 C 140 160, 180 80, 240 140" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M 1040 280 C 1120 240, 1180 320, 1240 280" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
        <circle cx="120" cy="210" r="4" fill="#146EF5" fillOpacity="0.28" className="careers-pulse" />
        <circle cx="1160" cy="210" r="4" fill="#FF6A00" fillOpacity="0.4" className="careers-pulse-delay" />
        <rect x="56" y="48" width="88" height="48" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
        <rect x="68" y="62" width="40" height="3" fill="#146EF5" fillOpacity="0.14" />
        <rect x="68" y="74" width="56" height="2" fill="#08233F" fillOpacity="0.06" />
        <rect x="1136" y="324" width="88" height="48" rx="1" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
        <rect x="1148" y="338" width="40" height="3" fill="#FF6A00" fillOpacity="0.16" />
        <rect x="1148" y="350" width="56" height="2" fill="#08233F" fillOpacity="0.06" />
        <circle cx="100" cy="320" r="18" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="1180" cy="88" r="18" stroke="#FF6A00" strokeOpacity="0.16" strokeWidth="1" />
      </svg>
    </div>
  );
}
