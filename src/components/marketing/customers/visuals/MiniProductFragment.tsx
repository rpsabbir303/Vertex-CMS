type Variant = "project" | "finance" | "field" | "ai" | "crm";

const COPY: Record<Variant, { label: string; rows: { k: string; v: string }[] }> = {
  project: {
    label: "Project overview",
    rows: [
      { k: "Schedule", v: "Connected" },
      { k: "Documents", v: "Live" },
      { k: "RFIs", v: "In sync" },
    ],
  },
  finance: {
    label: "Financial control",
    rows: [
      { k: "Job cost", v: "Linked" },
      { k: "Billing", v: "Active" },
      { k: "WIP", v: "Portfolio" },
    ],
  },
  field: {
    label: "Field operations",
    rows: [
      { k: "Daily logs", v: "Captured" },
      { k: "Drawings", v: "Current set" },
      { k: "Punch", v: "Tracked" },
    ],
  },
  ai: {
    label: "AI intelligence",
    rows: [
      { k: "Assistant", v: "Scoped" },
      { k: "Signals", v: "Grounded" },
      { k: "Writes", v: "Confirmed" },
    ],
  },
  crm: {
    label: "Growth pipeline",
    rows: [
      { k: "Leads", v: "Connected" },
      { k: "CRM", v: "Unified" },
      { k: "Website", v: "Integrated" },
    ],
  },
};

export function MiniProductFragment({ variant, className = "" }: { variant: Variant; className?: string }) {
  const data = COPY[variant];
  return (
    <div
      className={
        "cust-inset-panel relative overflow-hidden rounded-lg p-3 text-left " + className
      }
      data-design-layer={`MiniProduct-${variant}`}
    >
      <span className="absolute left-0 top-0 h-0.5 w-8 bg-brand-orange" aria-hidden="true" />
      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Vertex CMS</p>
      <p className="mt-1 text-[11px] font-semibold text-brand-navy">{data.label}</p>
      <ul className="mt-2 space-y-1 border-t border-brand-line/80 pt-2">
        {data.rows.map((row) => (
          <li key={row.k} className="flex justify-between gap-2 text-[10px]">
            <span className="text-brand-muted">{row.k}</span>
            <span className="font-semibold text-brand-navy">{row.v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
