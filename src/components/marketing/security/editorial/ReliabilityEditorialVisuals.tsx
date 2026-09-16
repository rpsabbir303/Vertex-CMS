type FlowStep = {
  id: string;
  label: string;
  emphasis?: boolean;
};

const line = "#94A3B8";
const navy = "#08233F";
const orange = "#FF6A00";

function StepArrow() {
  return (
    <svg className="hidden h-5 w-5 shrink-0 lg:block" viewBox="0 0 24 24" aria-hidden="true">
      <line x1="4" y1="12" x2="18" y2="12" stroke={line} strokeWidth="1" />
      <path d="M 14 8 L 18 12 L 14 16" fill="none" stroke={navy} strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  );
}

function VerticalArrow({ emphasis }: { emphasis?: boolean }) {
  return (
    <svg className="mx-auto h-8 w-4 shrink-0 lg:hidden" viewBox="0 0 16 32" aria-hidden="true">
      <line x1="8" y1="0" x2="8" y2="24" stroke={line} strokeWidth="1" />
      <path d="M 8 28 L 4 22 H 12 Z" fill={emphasis ? orange : navy} fillOpacity={emphasis ? 0.85 : 0.35} />
    </svg>
  );
}

function StepCell({ step }: { step: FlowStep }) {
  return (
    <div
      className={`flex w-full min-w-0 items-center justify-center border border-brand-line px-3 py-3 text-center lg:min-h-[3.25rem] lg:flex-1 ${
        step.emphasis ? "border-brand-orange/50 bg-brand-soft/60" : "bg-white"
      }`}
    >
      <span className="font-mono text-[10px] font-semibold leading-snug tracking-[0.12em] text-brand-navy sm:text-[11px]">
        {step.label}
      </span>
    </div>
  );
}

export function ReliabilityFlowRow({ steps, ariaLabel }: { steps: FlowStep[]; ariaLabel: string }) {
  return (
    <div className="min-w-0" role="list" aria-label={ariaLabel}>
      <div className="flex min-w-0 flex-col lg:flex-row lg:items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex min-w-0 flex-col lg:contents" role="listitem">
            {index > 0 ? <VerticalArrow emphasis={step.emphasis} /> : null}
            {index > 0 ? <StepArrow /> : null}
            <StepCell step={step} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReliabilityTrustStackVisual({
  layers,
}: {
  layers: readonly { id: string; label: string; emphasis?: boolean }[];
}) {
  return (
    <div className="mx-auto flex w-full min-w-0 max-w-sm flex-col items-center" aria-label="Security and trust architecture layers">
      {layers.map((layer, index) => (
        <div key={layer.id} className="flex w-full min-w-0 flex-col items-center">
          <div
            className={`flex w-full min-w-0 items-center justify-center border border-brand-line px-4 py-3 ${
              layer.emphasis ? "border-brand-orange/45 bg-brand-soft/50" : "bg-white"
            }`}
          >
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-navy">{layer.label}</span>
          </div>
          {index < layers.length - 1 ? <VerticalArrow emphasis={layers[index + 1]?.emphasis} /> : null}
        </div>
      ))}
    </div>
  );
}
