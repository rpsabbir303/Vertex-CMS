const navy = "#08233F";
const orange = "#E85D2C";
const muted = "rgba(8,35,63,0.35)";

type HeroDiagramProps = {
  className?: string;
};

/** VertexBuild product system — hero architecture diagram */
export function HeroProductSystemDiagram({ className = "" }: HeroDiagramProps) {
  return (
    <svg
      viewBox="0 0 320 360"
      className={`mx-auto w-full max-w-[340px] ${className}`}
      role="img"
      aria-label="VertexBuild product system: project, field, financial, documents, intelligence, platform"
    >
      <g fill="none" stroke={muted} strokeWidth="1">
        <line x1="160" y1="48" x2="160" y2="72" />
        <line x1="56" y1="120" x2="264" y2="120" />
        <line x1="56" y1="120" x2="56" y2="96" />
        <line x1="160" y1="120" x2="160" y2="96" />
        <line x1="264" y1="120" x2="264" y2="96" />
        <line x1="56" y1="120" x2="56" y2="168" />
        <line x1="160" y1="120" x2="160" y2="168" />
        <line x1="264" y1="120" x2="264" y2="168" />
        <line x1="56" y1="168" x2="264" y2="168" />
        <line x1="160" y1="168" x2="160" y2="192" />
        <line x1="160" y1="248" x2="160" y2="272" />
        <line x1="160" y1="312" x2="160" y2="328" />
      </g>
      {[
        [160, 36],
        [56, 108],
        [160, 108],
        [264, 108],
        [160, 228],
        [160, 292],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill={orange} />
      ))}
      <text x="160" y="28" textAnchor="middle" fill={navy} fontSize="10" fontWeight="600" letterSpacing="0.12em">
        PROJECT
      </text>
      <text x="56" y="88" textAnchor="middle" fill={navy} fontSize="9" fontWeight="600" letterSpacing="0.08em">
        FIELD
      </text>
      <text x="160" y="88" textAnchor="middle" fill={navy} fontSize="9" fontWeight="600" letterSpacing="0.08em">
        FINANCIAL
      </text>
      <text x="264" y="88" textAnchor="middle" fill={navy} fontSize="9" fontWeight="600" letterSpacing="0.06em">
        DOCUMENTS
      </text>
      <text x="160" y="218" textAnchor="middle" fill={navy} fontSize="10" fontWeight="600" letterSpacing="0.1em">
        INTELLIGENCE
      </text>
      <text x="160" y="348" textAnchor="middle" fill={navy} fontSize="11" fontWeight="700" letterSpacing="0.14em">
        VERTEXBUILD
      </text>
    </svg>
  );
}

type ConvergeProps = {
  className?: string;
};

export function DisciplinesConvergeDiagram({ className = "" }: ConvergeProps) {
  const labels = ["PRODUCT", "ENGINEERING", "FIELD", "FINANCIAL", "CUSTOMER"];
  const xs = [32, 88, 160, 232, 288];
  return (
    <svg viewBox="0 0 320 200" className={`w-full max-w-lg ${className}`} role="img" aria-hidden="true">
      {xs.map((x) => (
        <line key={x} x1={x} y1="32" x2="160" y2="140" stroke={muted} strokeWidth="1" />
      ))}
      {xs.map((x, i) => (
        <g key={labels[i]}>
          <circle cx={x} cy="24" r="3" fill={orange} />
          <text x={x} y="16" textAnchor="middle" fill={navy} fontSize="7" fontWeight="600" letterSpacing="0.06em">
            {labels[i]}
          </text>
        </g>
      ))}
      <rect x="108" y="148" width="104" height="28" fill="white" stroke={navy} strokeWidth="1" />
      <text x="160" y="166" textAnchor="middle" fill={navy} fontSize="10" fontWeight="700" letterSpacing="0.12em">
        VERTEXBUILD
      </text>
    </svg>
  );
}

type StackProps = {
  steps: readonly string[];
  light?: boolean;
  className?: string;
};

export function WorkflowStackDiagram({ steps, light = false, className = "" }: StackProps) {
  const text = light ? "rgba(255,255,255,0.92)" : navy;
  const line = light ? "rgba(255,255,255,0.35)" : muted;
  const node = light ? "#FF8A5C" : orange;
  const h = steps.length * 44 + 8;
  return (
    <svg viewBox={`0 0 200 ${h}`} className={`w-full max-w-[200px] ${className}`} role="img" aria-hidden="true">
      {steps.map((step, i) => {
        const y = 20 + i * 44;
        return (
          <g key={step}>
            {i < steps.length - 1 ? <line x1="100" y1={y + 14} x2="100" y2={y + 30} stroke={line} strokeWidth="1" /> : null}
            <circle cx="100" cy={y + 8} r="3" fill={node} />
            <text x="100" y={y + 4} textAnchor="middle" fill={text} fontSize="9" fontWeight="600" letterSpacing="0.1em">
              {step.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
