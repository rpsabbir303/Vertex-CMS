/** Documented financial workflow — labels only, no invented metrics. */
const STEPS = [
  "Contract",
  "Pay Application",
  "Billing / AR",
  "Cash / PO",
  "Receipt",
  "AP",
  "Job Cost",
  "GL",
  "One Financial Picture",
] as const;

export function FeaturesFinancialWorkflowStrip() {
  return (
    <div
      className="mt-0 rounded-none border border-brand-line/80 bg-white px-3 py-3 sm:px-4"
      data-design-layer="FinancialWorkflow"
      aria-label="Financial workflow from contract through general ledger"
    >
      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
        Connected financial workflow
      </p>
      <ol className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-2">
        {STEPS.map((step, index) => (
          <li key={step} className="flex items-center gap-1">
            <span className="rounded-sm border border-brand-line/70 bg-[#FAFBFD] px-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.06em] text-brand-navy">
              {step}
            </span>
            {index < STEPS.length - 1 ? (
              <svg width="12" height="12" viewBox="0 0 16 16" className="shrink-0 text-brand-blue/40" aria-hidden="true">
                <path d="M3 8h8M9 5l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
