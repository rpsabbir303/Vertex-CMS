import { getHeroEcosystemCustomers } from "@/lib/marketing/customers/catalog";
import type { HeroEcosystemCustomer } from "@/lib/marketing/customers/types";

const WORKFLOW_LABELS = ["Project", "Field", "Financial", "Growth"] as const;

const OUTCOME_LABELS = ["Connected work", "Clearer visibility", "Better coordination"] as const;

type Props = {
  variant?: "hero" | "compact";
};

/** Customers hero — customer ecosystem / proof network (not product architecture). */
export function CustomerEcosystemVisual({ variant = "hero" }: Props) {
  const customers = getHeroEcosystemCustomers();
  const isHero = variant === "hero";

  if (customers.length === 0) {
    return (
      <div
        className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-brand-line bg-white px-4 py-8 text-center text-[13px] text-brand-muted"
        data-design-layer="CustomerEcosystemVisual"
      >
        Customer ecosystem references publish when approved for public display.
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${isHero ? "min-h-[280px] sm:min-h-[340px]" : "min-h-[220px]"}`}
      data-design-layer="CustomerEcosystemVisual"
    >
      <p id="cust-eco-map-title" className="sr-only">
        Customer ecosystem map
      </p>
      <p id="cust-eco-map-desc" className="sr-only">
        Construction teams connected through Vertex CMS to project, field, financial, and growth workflows, leading to
        connected work and clearer coordination.
      </p>

      <div
        className="relative rounded-lg border border-brand-line/70 bg-white px-2 py-3 shadow-[0_2px_20px_-10px_rgba(8,35,63,0.14)] sm:px-3 sm:py-4"
        role="group"
        aria-labelledby="cust-eco-map-title"
        aria-describedby="cust-eco-map-desc"
      >
        <EcosystemConnectors ariaHidden className={isHero ? "h-[92%]" : "h-[88%]"} />

        <div className="relative z-[1] flex flex-col gap-3 sm:gap-4">
          <div className="text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-muted sm:text-[10px]">
              Customers
            </p>
          </div>

          <div
            className={`grid gap-1.5 sm:gap-2 ${isHero ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"}`}
          >
            {customers.slice(0, isHero ? 6 : 4).map((customer) => (
              <CustomerReferenceCard key={customer.id} customer={customer} compact={!isHero} />
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 pt-0.5 sm:gap-3">
            <div className="h-3 w-px bg-brand-line sm:h-4" aria-hidden="true" />
            <div className="flex w-full max-w-[13rem] flex-col items-center sm:max-w-[15rem]">
              <VertexCore compact={!isHero} />
            </div>

            <WorkflowCross compact={!isHero} />

            <div className="w-full border-t border-brand-line/80 pt-2 sm:pt-3">
              <p className="text-center text-[8px] font-semibold uppercase tracking-[0.18em] text-brand-navy sm:text-[9px]">
                Outcomes
              </p>
              <ul
                className={`mt-2 flex flex-wrap justify-center gap-1.5 sm:gap-2 ${isHero ? "" : "gap-1"}`}
                aria-label="Conceptual outcomes"
              >
                {OUTCOME_LABELS.map((label) => (
                  <li
                    key={label}
                    className="rounded-full border border-brand-line bg-[#FAFBFD] px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.06em] text-brand-muted sm:px-2.5 sm:py-1 sm:text-[9px]"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerReferenceCard({
  customer,
  compact,
}: {
  customer: HeroEcosystemCustomer;
  compact?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-md border border-brand-line bg-white text-center shadow-[0_1px_0_rgba(8,35,63,0.05)]",
        compact ? "px-1 py-1.5" : "px-1.5 py-2 sm:px-2 sm:py-2.5",
      ].join(" ")}
    >
      <p className={`font-semibold uppercase tracking-[0.07em] text-brand-navy ${compact ? "text-[7px] sm:text-[8px]" : "text-[8px] sm:text-[9px]"}`}>
        {customer.line1}
      </p>
      {customer.line2 ? (
        <p
          className={`mt-0.5 font-semibold uppercase tracking-[0.1em] text-brand-muted ${compact ? "text-[6px] sm:text-[7px]" : "text-[7px] sm:text-[8px]"}`}
        >
          {customer.line2}
        </p>
      ) : null}
      {customer.segment && !compact ? (
        <p className="mt-1.5 hidden text-[8px] leading-snug text-brand-muted sm:block">{customer.segment}</p>
      ) : null}
    </div>
  );
}

function VertexCore({ compact }: { compact?: boolean }) {
  return (
    <div
      className={[
        "relative w-full rounded-lg border border-[#08233F]/15 bg-brand-navy text-center shadow-[0_4px_14px_-6px_rgba(8,35,63,0.45)]",
        compact ? "px-3 py-2" : "px-4 py-2.5 sm:py-3",
      ].join(" ")}
    >
      <span
        className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-brand-orange"
        aria-hidden="true"
      />
      <span
        className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-brand-blue"
        aria-hidden="true"
      />
      <p className={`font-bold uppercase tracking-[0.12em] text-white ${compact ? "text-[9px]" : "text-[10px] sm:text-[11px]"}`}>
        Vertex CMS
      </p>
      <p className={`mt-0.5 font-medium text-white/75 ${compact ? "text-[7px]" : "text-[8px] sm:text-[9px]"}`}>
        Connected construction management platform
      </p>
    </div>
  );
}

function WorkflowCross({ compact }: { compact?: boolean }) {
  const labelClass = compact
    ? "text-[7px] font-semibold uppercase tracking-[0.1em] text-brand-blue"
    : "text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-blue sm:text-[9px]";

  return (
    <div className="relative w-full max-w-[11rem] sm:max-w-[12.5rem]" aria-label="Connected workflows">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 72"
        aria-hidden="true"
      >
        <line x1={60} y1={8} x2={60} y2={64} stroke="#DCE5EE" strokeWidth={1} />
        <line x1={8} y1={36} x2={112} y2={36} stroke="#DCE5EE" strokeWidth={1} />
        <circle cx={60} cy={36} r={3} fill="#146EF5" opacity={0.35} />
        <circle cx={60} cy={8} r={2} fill="#FF6A00" opacity={0.7} />
        <circle cx={60} cy={64} r={2} fill="#FF6A00" opacity={0.7} />
        <circle cx={8} cy={36} r={2} fill="#146EF5" opacity={0.5} />
        <circle cx={112} cy={36} r={2} fill="#146EF5" opacity={0.5} />
      </svg>
      <div className={`relative grid grid-cols-3 grid-rows-3 place-items-center ${compact ? "h-14" : "h-16 sm:h-[4.5rem]"}`}>
        <span className={`col-start-2 row-start-1 ${labelClass}`}>{WORKFLOW_LABELS[0]}</span>
        <span className={`col-start-1 row-start-2 ${labelClass}`}>{WORKFLOW_LABELS[1]}</span>
        <span className={`col-start-3 row-start-2 ${labelClass}`}>{WORKFLOW_LABELS[2]}</span>
        <span className={`col-start-2 row-start-3 ${labelClass}`}>{WORKFLOW_LABELS[3]}</span>
      </div>
    </div>
  );
}

function EcosystemConnectors({ className = "", ariaHidden }: { className?: string; ariaHidden?: boolean }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-x-4 top-[4.5rem] z-0 sm:inset-x-6 sm:top-[5.25rem] ${className}`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 280"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden={ariaHidden}
    >
      <line x1={200} y1={0} x2={200} y2={40} stroke="#B7C8D8" strokeWidth={1} />
      <line x1={70} y1={40} x2={330} y2={40} stroke="#DCE5EE" strokeWidth={1} />
      <line x1={70} y1={40} x2={70} y2={72} stroke="#DCE5EE" strokeWidth={1} />
      <line x1={200} y1={40} x2={200} y2={72} stroke="#DCE5EE" strokeWidth={1} />
      <line x1={330} y1={40} x2={330} y2={72} stroke="#DCE5EE" strokeWidth={1} />
      <line x1={200} y1={72} x2={200} y2={120} stroke="#146EF5" strokeWidth={1} opacity={0.35} />
      <line x1={120} y1={120} x2={280} y2={120} stroke="#DCE5EE" strokeWidth={1} />
      <line x1={200} y1={120} x2={200} y2={168} stroke="#B7C8D8" strokeWidth={1} />
      <circle cx={200} cy={168} r={3} fill="#FF6A00" opacity={0.85} />
    </svg>
  );
}
