import { accessSecurityEditorial } from "@/lib/marketing/security/content";

/** Vertical access-flow diagram integrated into the editorial line system. */
export function AccessSecurityFlowVisual() {
  const steps = accessSecurityEditorial.accessFlow;
  const navy = "#08233F";
  const line = "#94A3B8";
  const orange = "#FF6A00";

  return (
    <div className="min-w-0 border border-brand-line bg-white px-6 py-10 sm:px-8 sm:py-12">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Access model</p>
      <div className="mx-auto mt-8 flex max-w-xs min-w-0 flex-col items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex w-full min-w-0 flex-col items-center">
            <div
              className={`flex w-full min-w-0 items-center justify-center border border-brand-line px-4 py-3 ${
                step.id === "mfa" ? "border-brand-orange/40 bg-brand-soft/50" : "bg-white"
              }`}
            >
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-navy">{step.label}</span>
            </div>
            {index < steps.length - 1 ? (
              <svg className="h-8 w-4 shrink-0" viewBox="0 0 16 32" aria-hidden="true">
                <line x1="8" y1="0" x2="8" y2="24" stroke={line} strokeWidth="1" />
                <path d="M 8 28 L 4 22 H 12 Z" fill={step.id === "mfa" ? orange : navy} fillOpacity={step.id === "mfa" ? 0.85 : 0.35} />
              </svg>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
