/** Page-specific inline SVG compositions for the Company section. Decorative only. */

function VisualFrame({ children, viewBox = "0 0 640 460" }: { children: React.ReactNode; viewBox?: string }) {
  return (
    <div className="relative h-full min-h-[260px] w-full sm:min-h-[300px] lg:min-h-[360px]" aria-hidden="true">
      <svg
        viewBox={viewBox}
        className="h-auto w-full max-w-none lg:absolute lg:-right-6 lg:top-1/2 lg:w-[112%] lg:-translate-y-1/2 xl:-right-12"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {children}
      </svg>
    </div>
  );
}

function LocalGrid() {
  return (
    <>
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`v-${i}`} x1={40 + i * 72} y1="12" x2={40 + i * 72} y2="448" stroke="#08233F" strokeOpacity="0.05" strokeWidth="1" />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={`h-${i}`} x1="16" y1={28 + i * 64} x2="624" y2={28 + i * 64} stroke="#08233F" strokeOpacity="0.04" strokeWidth="1" />
      ))}
    </>
  );
}

/** About hero — connected workflows, people, operations, information. */
export function AboutHeroVisual() {
  return (
    <div className="relative h-full min-h-[280px] w-full sm:min-h-[320px] lg:min-h-[380px]" aria-hidden="true">
      <svg
        viewBox="0 0 640 460"
        className="h-auto w-full max-w-none lg:absolute lg:-right-8 lg:top-1/2 lg:w-[118%] lg:-translate-y-1/2 xl:-right-16"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <LocalGrid />
        <path
          d="M 64 96 C 150 96, 170 188, 268 188 S 360 96, 468 118 S 548 210, 620 186"
          stroke="#146EF5"
          strokeOpacity="0.28"
          strokeWidth="1"
          className="careers-line-flow"
          strokeDasharray="6 8"
        />
        <path
          d="M 40 252 C 128 214, 190 318, 286 298 S 400 214, 492 258 S 568 336, 628 308"
          stroke="#08233F"
          strokeOpacity="0.14"
          strokeWidth="1"
        />
        <path
          d="M 88 368 C 190 338, 236 398, 332 378 S 440 308, 536 348"
          stroke="#FF6A00"
          strokeOpacity="0.18"
          strokeWidth="1"
          className="careers-line-flow-slow"
          strokeDasharray="4 10"
        />

        <rect x="68" y="52" width="148" height="96" rx="2" stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
        <line x1="68" y1="72" x2="216" y2="72" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
        <rect x="84" y="86" width="52" height="3" fill="#146EF5" fillOpacity="0.22" />
        <rect x="84" y="98" width="92" height="2" fill="#08233F" fillOpacity="0.08" />
        <rect x="84" y="108" width="76" height="2" fill="#08233F" fillOpacity="0.06" />
        <circle cx="200" cy="64" r="3" fill="#FF6A00" fillOpacity="0.55" className="careers-pulse" />

        <circle cx="268" cy="188" r="42" stroke="#146EF5" strokeOpacity="0.16" strokeWidth="1" />
        <circle cx="268" cy="188" r="8" fill="#146EF5" fillOpacity="0.28" className="careers-pulse" />
        <path d="M 262 188 h 12 M 268 182 v 12" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1" />

        <rect x="508" y="186" width="108" height="72" rx="2" stroke="#146EF5" strokeOpacity="0.18" strokeWidth="1" />
        <rect x="522" y="200" width="28" height="28" rx="1" stroke="#146EF5" strokeOpacity="0.16" strokeWidth="1" />
        <rect x="558" y="204" width="40" height="2" fill="#08233F" fillOpacity="0.1" />
        <rect x="558" y="214" width="32" height="2" fill="#08233F" fillOpacity="0.07" />
        <rect x="558" y="224" width="24" height="2" fill="#08233F" fillOpacity="0.07" />

        <rect x="428" y="46" width="156" height="88" rx="2" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="456" cy="90" r="10" stroke="#146EF5" strokeOpacity="0.22" strokeWidth="1" />
        <circle cx="488" cy="90" r="10" stroke="#146EF5" strokeOpacity="0.16" strokeWidth="1" />
        <circle cx="520" cy="90" r="10" stroke="#FF6A00" strokeOpacity="0.28" strokeWidth="1" />
        <path d="M 468 90 H 478 M 498 90 H 508" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />

        <rect x="96" y="268" width="210" height="72" rx="2" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="124" cy="304" r="10" stroke="#146EF5" strokeOpacity="0.2" strokeWidth="1" />
        <rect x="146" y="296" width="88" height="3" fill="#08233F" fillOpacity="0.1" />
        <rect x="146" y="308" width="64" height="2" fill="#08233F" fillOpacity="0.06" />
        <rect x="240" y="292" width="48" height="16" rx="1" stroke="#FF6A00" strokeOpacity="0.28" strokeWidth="1" />

        <circle cx="468" cy="118" r="4" fill="#146EF5" fillOpacity="0.4" className="careers-pulse-delay" />
        <circle cx="286" cy="298" r="4" fill="#FF6A00" fillOpacity="0.45" />
        <circle cx="492" cy="258" r="5" fill="#FF6A00" fillOpacity="0.5" className="careers-pulse-delay" />
        <path d="M 264 180 v 16 M 258 188 h 16" stroke="#146EF5" strokeOpacity="0.35" strokeWidth="1" />
        <path d="M 490 250 v 16 M 484 258 h 16" stroke="#FF6A00" strokeOpacity="0.4" strokeWidth="1" />

        <circle cx="392" cy="348" r="5" stroke="#146EF5" strokeOpacity="0.25" strokeWidth="1" />
        <circle cx="412" cy="358" r="5" stroke="#146EF5" strokeOpacity="0.18" strokeWidth="1" />
        <circle cx="432" cy="348" r="5" stroke="#FF6A00" strokeOpacity="0.28" strokeWidth="1" />
        <path d="M 397 348 H 407 M 417 358 H 427" stroke="#08233F" strokeOpacity="0.1" strokeWidth="1" />
      </svg>
    </div>
  );
}

/** About story — geometric system with a connecting path. */
export function AboutStoryVisual() {
  return (
    <VisualFrame viewBox="0 0 520 380">
      <rect x="176" y="86" width="168" height="168" rx="2" stroke="#146EF5" strokeOpacity="0.22" strokeWidth="1" />
      <line x1="176" y1="142" x2="344" y2="142" stroke="#146EF5" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="176" y1="198" x2="344" y2="198" stroke="#146EF5" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="232" y1="86" x2="232" y2="254" stroke="#146EF5" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="288" y1="86" x2="288" y2="254" stroke="#146EF5" strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="260" cy="170" r="7" fill="#FF6A00" fillOpacity="0.42" />
      <path
        d="M 48 170 C 100 80, 140 260, 176 170"
        stroke="#146EF5"
        strokeOpacity="0.22"
        strokeWidth="1"
        strokeDasharray="5 8"
      />
      <path
        d="M 344 170 C 400 90, 440 250, 492 170"
        stroke="#08233F"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <circle cx="48" cy="170" r="4" fill="#146EF5" fillOpacity="0.3" />
      <circle cx="492" cy="170" r="4" fill="#08233F" fillOpacity="0.2" />
      <rect x="36" y="280" width="88" height="48" rx="1" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
      <rect x="396" y="280" width="88" height="48" rx="1" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
    </VisualFrame>
  );
}

/** About platform — nodes converging into one system. */
export function AboutConvergeVisual({ labels }: { labels: string[] }) {
  const nodes = labels.slice(0, 8).map((label, i) => {
    const n = Math.min(labels.length, 8);
    const angle = (Math.PI * 2 * i) / Math.max(n, 1) - Math.PI / 2;
    return { label, x: 260 + Math.cos(angle) * 148, y: 190 + Math.sin(angle) * 118 };
  });

  return (
    <div className="relative z-[1] min-w-0" aria-hidden="true">
      <svg viewBox="0 0 520 380" className="h-auto w-full" fill="none">
        <polygon
          points="260,132 318,166 318,234 260,268 202,234 202,166"
          stroke="#146EF5"
          strokeOpacity="0.26"
          strokeWidth="1"
          fill="#146EF5"
          fillOpacity="0.03"
        />
        <circle cx="260" cy="200" r="7" fill="#FF6A00" fillOpacity="0.42" />
        {nodes.map((node, i) => (
          <g key={node.label}>
            <path
              d={`M 260 200 L ${node.x} ${node.y}`}
              stroke="#146EF5"
              strokeOpacity="0.18"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            <rect x={node.x - 52} y={node.y - 14} width="104" height="28" rx="1" stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fill="#08233F"
              fillOpacity="0.5"
              fontSize="8"
              fontFamily="var(--font-sans)"
              letterSpacing="0.6"
            >
              {node.label.length <= 13 ? node.label.toUpperCase() : String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Team hero — people connected through one platform. */
export function TeamHeroVisual() {
  const people = [
    { x: 120, y: 86 },
    { x: 520, y: 92 },
    { x: 86, y: 250 },
    { x: 554, y: 268 },
    { x: 210, y: 380 },
    { x: 430, y: 372 },
  ];

  return (
    <VisualFrame>
      <LocalGrid />
      <circle cx="320" cy="230" r="86" stroke="#146EF5" strokeOpacity="0.12" strokeWidth="1" />
      <circle cx="320" cy="230" r="28" stroke="#146EF5" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="320" cy="230" r="6" fill="#146EF5" fillOpacity="0.35" className="careers-pulse" />
      {people.map((p, i) => (
        <g key={i}>
          <path
            d={`M 320 230 L ${p.x} ${p.y}`}
            stroke="#08233F"
            strokeOpacity="0.1"
            strokeWidth="1"
            className="careers-line-flow-slow"
            strokeDasharray="4 8"
          />
          <circle cx={p.x} cy={p.y} r="16" stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
          <circle cx={p.x} cy={p.y - 4} r="4" fill="#08233F" fillOpacity="0.18" />
          <path d={`M ${p.x - 8} ${p.y + 8} Q ${p.x} ${p.y + 2} ${p.x + 8} ${p.y + 8}`} stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
        </g>
      ))}
      <circle cx="120" cy="86" r="3" fill="#FF6A00" fillOpacity="0.45" className="careers-pulse-delay" />
      <circle cx="554" cy="268" r="3" fill="#146EF5" fillOpacity="0.35" />
    </VisualFrame>
  );
}

/** Contact hero — inquiry routing into a connected system. No map pins or envelopes. */
export function ContactHeroVisual() {
  return (
    <VisualFrame>
      <LocalGrid />
      <path
        d="M 64 230 C 160 230, 200 140, 280 140 S 380 230, 480 230 S 540 140, 612 160"
        stroke="#146EF5"
        strokeOpacity="0.26"
        strokeWidth="1"
        strokeDasharray="6 8"
      />
      <circle cx="64" cy="230" r="16" stroke="#146EF5" strokeOpacity="0.22" strokeWidth="1" />
      <circle cx="64" cy="230" r="4" fill="#146EF5" fillOpacity="0.3" />
      <circle cx="280" cy="140" r="16" stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
      <circle cx="280" cy="140" r="4" fill="#08233F" fillOpacity="0.22" />
      <circle cx="480" cy="230" r="16" stroke="#FF6A00" strokeOpacity="0.32" strokeWidth="1" />
      <circle cx="480" cy="230" r="4" fill="#FF6A00" fillOpacity="0.45" />
      <rect x="360" y="280" width="180" height="88" rx="2" stroke="#08233F" strokeOpacity="0.14" strokeWidth="1" />
      <rect x="378" y="300" width="72" height="3" fill="#146EF5" fillOpacity="0.2" />
      <rect x="378" y="314" width="108" height="2" fill="#08233F" fillOpacity="0.08" />
      <rect x="378" y="326" width="88" height="2" fill="#08233F" fillOpacity="0.06" />
      <path d="M 480 246 V 280" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
    </VisualFrame>
  );
}

/** Contact success — input → received → connected system. */
export function ContactConfirmVisual({ labels }: { labels: [string, string, string] }) {
  const steps = [
    { label: labels[0], x: 90 },
    { label: labels[1], x: 260 },
    { label: labels[2], x: 430 },
  ];

  return (
    <div className="relative z-[1] min-w-0" aria-hidden="true">
      <svg viewBox="0 0 520 280" className="h-auto w-full" fill="none">
        <path d="M 90 120 H 430" stroke="#146EF5" strokeOpacity="0.22" strokeWidth="1" />
        {steps.map((step, i) => (
          <g key={step.label}>
            <circle cx={step.x} cy="120" r="18" stroke={i === 2 ? "#FF6A00" : "#146EF5"} strokeOpacity={i === 2 ? 0.4 : 0.22} strokeWidth="1" />
            <circle cx={step.x} cy="120" r="5" fill={i === 2 ? "#FF6A00" : "#146EF5"} fillOpacity={i === 2 ? 0.5 : 0.28} />
            <text
              x={step.x}
              y="176"
              textAnchor="middle"
              fill="#08233F"
              fillOpacity="0.42"
              fontSize="10"
              fontFamily="var(--font-sans)"
              letterSpacing="1.2"
            >
              {step.label.toUpperCase()}
            </text>
          </g>
        ))}
        <rect x="48" y="36" width="84" height="48" rx="1" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
        <rect x="388" y="36" width="84" height="48" rx="1" stroke="#FF6A00" strokeOpacity="0.28" strokeWidth="1" />
        <path d="M 90 84 V 102" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
        <path d="M 430 84 V 102" stroke="#FF6A00" strokeOpacity="0.22" strokeWidth="1" />
      </svg>
    </div>
  );
}

/** Contact supporting visual — connected work, not a geographic map. */
export function ContactConnectedVisual({ labels }: { labels: string[] }) {
  const nodes = labels.slice(0, 4).map((label, i) => ({
    label,
    x: 70 + i * 127,
    y: i % 2 === 0 ? 90 : 170,
  }));

  return (
    <div className="relative z-[1] min-w-0" aria-hidden="true">
      <svg viewBox="0 0 520 260" className="h-auto w-full" fill="none">
        {nodes.map((node, i) => (
          <g key={node.label}>
            {i < nodes.length - 1 ? (
              <path
                d={`M ${node.x + 40} ${node.y} C ${node.x + 70} ${node.y}, ${nodes[i + 1].x - 70} ${nodes[i + 1].y}, ${nodes[i + 1].x - 40} ${nodes[i + 1].y}`}
                stroke="#146EF5"
                strokeOpacity="0.2"
                strokeWidth="1"
                strokeDasharray="5 8"
              />
            ) : null}
            <rect x={node.x - 48} y={node.y - 16} width="96" height="32" rx="1" stroke="#08233F" strokeOpacity="0.16" strokeWidth="1" />
            <circle cx={node.x} cy={node.y - 28} r="3" fill={i === nodes.length - 1 ? "#FF6A00" : "#146EF5"} fillOpacity="0.4" />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fill="#08233F"
              fillOpacity="0.5"
              fontSize="9"
              fontFamily="var(--font-sans)"
              letterSpacing="0.6"
            >
              {node.label.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
