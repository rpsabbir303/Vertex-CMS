import { HUB_MODULES, type HubModuleSection } from "@/lib/marketing/features/hub";

const SYSTEM_NODE_COPY: Record<string, string> = {
  "project-management": "Projects · Scheduling · Documents",
  "financial-management": "Budget · Billing · Accounting",
  "field-operations": "Daily Logs · Drawings · Mobile",
  compliance: "Subcontractors · Compliance · Payroll",
  ai: "Answers · Signals · Automation",
  growth: "Website · Leads · CRM",
};

const NODE_PLACEMENT: Record<string, string> = {
  "project-management": "col-start-1 row-start-1",
  "financial-management": "col-start-3 row-start-1",
  "field-operations": "col-start-1 row-start-2",
  compliance: "col-start-3 row-start-2",
  ai: "col-start-1 row-start-3",
  growth: "col-start-3 row-start-3",
};

function SystemGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 720 570"
      preserveAspectRatio="none"
      aria-hidden="true"
      data-design-layer="SystemGrid"
    >
      {Array.from({ length: 13 }, (_, index) => (
        <line
          key={`vertical-${index}`}
          x1={index * 60}
          y1="0"
          x2={index * 60}
          y2="570"
          stroke="#DCE5EE"
          strokeWidth="1"
          opacity="0.45"
        />
      ))}
      {Array.from({ length: 11 }, (_, index) => (
        <line
          key={`horizontal-${index}`}
          x1="0"
          y1={index * 57}
          x2="720"
          y2={index * 57}
          stroke="#DCE5EE"
          strokeWidth="1"
          opacity="0.45"
        />
      ))}
      <path d="M16 42V16H42 M678 16H704V42 M16 528V554H42 M678 554H704V528" stroke="#9CB2C7" fill="none" />
      <path d="M348 16h24 M348 554h24 M16 273v24 M704 273v24" stroke="#9CB2C7" />
    </svg>
  );
}

function SystemConnection() {
  const connections = [
    [360, 285, 120, 95],
    [360, 285, 600, 95],
    [360, 285, 120, 285],
    [360, 285, 600, 285],
    [360, 285, 120, 475],
    [360, 285, 600, 475],
  ] as const;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 720 570"
      preserveAspectRatio="none"
      aria-hidden="true"
      data-design-layer="SystemConnections"
    >
      {connections.map(([x1, y1, x2, y2], index) => (
        <g key={`${x2}-${y2}`}>
          <path
            d={`M${x1} ${y1} L${x2} ${y2}`}
            stroke={index === 0 ? "#146EF5" : "#B7C8D8"}
            strokeWidth={index === 0 ? "1.5" : "1"}
            fill="none"
          />
          <circle cx={x2} cy={y2} r="3" fill="#FFFFFF" stroke="#146EF5" strokeWidth="1" />
        </g>
      ))}
      <circle cx="360" cy="285" r="5" fill="#FF6A00" />
      <circle cx="360" cy="285" r="11" fill="none" stroke="#FF6A00" strokeWidth="1" opacity="0.25" />
    </svg>
  );
}

function SystemSignal({ label, className }: { label: string; className: string }) {
  return (
    <div
      className={
        "absolute hidden items-center gap-1.5 font-sans text-[8px] font-semibold uppercase tracking-[0.14em] text-brand-muted lg:flex " +
        className
      }
      aria-hidden="true"
      data-design-layer="SystemSignal"
    >
      <span className="h-1 w-1 rounded-full bg-brand-blue" />
      {label}
    </div>
  );
}

function SystemCore() {
  return (
    <div
      className="relative z-10 col-start-2 row-start-2 flex w-full max-w-[11.5rem] flex-col items-center justify-center justify-self-center border border-brand-navy bg-white px-4 py-5 text-center shadow-[0_12px_36px_-24px_rgba(8,35,63,0.32)]"
      data-design-layer="SystemCore"
    >
      <span className="absolute left-0 top-0 h-1 w-10 bg-brand-orange" aria-hidden="true" />
      <span className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-brand-orange">System core</span>
      <strong className="mt-2 font-sans text-[17px] font-semibold tracking-[-0.02em] text-brand-navy">VertexBuild</strong>
      <span className="mt-1 font-sans text-[10px] leading-snug text-brand-muted">Construction Management</span>
      <span className="mt-3 inline-flex items-center gap-1.5 font-sans text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-blue">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
        Connected record
      </span>
    </div>
  );
}

function SystemNode({ module }: { module: HubModuleSection }) {
  return (
    <a
      href={`#${module.id}`}
      className={
        "relative z-10 flex w-full max-w-[12.5rem] flex-col justify-self-center border border-brand-line bg-white px-3 py-3 transition hover:border-brand-blue/40 hover:shadow-[0_10px_28px_-22px_rgba(8,35,63,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 " +
        NODE_PLACEMENT[module.id]
      }
      data-design-layer="SystemNode"
    >
      <span className="flex items-center justify-between gap-2">
        <span className="font-sans text-[9px] font-bold text-brand-orange">{module.number}</span>
        <span className="h-1.5 w-1.5 rounded-full border border-brand-blue bg-white" aria-hidden="true" />
      </span>
      <strong className="mt-1.5 font-sans text-[10px] font-semibold uppercase leading-snug tracking-[0.06em] text-brand-navy">
        {module.title}
      </strong>
      <span className="mt-1 font-sans text-[9px] leading-snug text-brand-muted">{SYSTEM_NODE_COPY[module.id]}</span>
    </a>
  );
}

function MobileConnectedSystem() {
  return (
    <div className="relative border border-brand-line/80 bg-white p-3 md:hidden" data-design-layer="ConnectedSystemMobile">
      <div className="absolute bottom-5 left-7 top-5 w-px bg-brand-line" aria-hidden="true" />
      <div className="relative z-10 flex items-center gap-3 border border-brand-navy bg-white p-3">
        <span className="h-3 w-3 shrink-0 rounded-full border-[3px] border-white bg-brand-orange ring-1 ring-brand-orange" />
        <div>
          <p className="font-sans text-[14px] font-semibold text-brand-navy">VertexBuild</p>
          <p className="text-[10px] text-brand-muted">Construction Management · Connected system core</p>
        </div>
      </div>
      <ol className="relative z-10 mt-2 space-y-2">
        {HUB_MODULES.map((module) => (
          <li key={module.id}>
            <a
              href={`#${module.id}`}
              className="flex min-w-0 items-start gap-3 border border-brand-line bg-white p-3 transition hover:border-brand-blue/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-blue bg-white font-sans text-[8px] font-bold text-brand-orange">
                {module.number}
              </span>
              <span className="min-w-0">
                <strong className="block font-sans text-[11px] font-semibold uppercase tracking-[0.05em] text-brand-navy">
                  {module.title}
                </strong>
                <span className="mt-0.5 block text-[10px] text-brand-muted">{SYSTEM_NODE_COPY[module.id]}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ConnectedSystemDiagram() {
  return (
    <div className="min-w-0" aria-label="VertexBuild connected construction management system">
      <div
        className="relative hidden aspect-[720/570] min-h-[31rem] overflow-hidden border border-brand-line/80 bg-white md:block"
        data-design-layer="ConnectedVertexSystem"
      >
        <SystemGrid />
        <SystemConnection />
        <div className="relative z-[1] grid h-full grid-cols-3 grid-rows-3 items-center gap-x-8 gap-y-10 p-8 lg:gap-x-10">
          {HUB_MODULES.map((module) => (
            <SystemNode key={module.id} module={module} />
          ))}
          <SystemCore />
        </div>
        <SystemSignal label="Data / 01" className="left-[31%] top-[26%]" />
        <SystemSignal label="Sync / 02" className="right-[26%] top-[37%]" />
        <SystemSignal label="Workflow / 03" className="bottom-[25%] left-[34%]" />
      </div>
      <MobileConnectedSystem />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="font-sans text-[10px] uppercase tracking-[0.12em] text-brand-muted">
          Connected data · workflows · operations
        </p>
        <p className="font-sans text-[9px] uppercase tracking-[0.12em] text-brand-blue">System map / 06 nodes</p>
      </div>
    </div>
  );
}
