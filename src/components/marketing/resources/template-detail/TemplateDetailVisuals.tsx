import { AxisLine, AxisPath, ArrowDown, Eyebrow, Node, UiBlock } from "../blog-detail/abstracts/primitives";
import type { TemplatePreviewVariant } from "@/lib/marketing/resources/template";

type Props = { className?: string };

export function TemplateCoversWorkflowAbstract({ labels, className = "" }: { labels: string[]; className?: string }) {
  const steps = labels.slice(0, 4);
  const ys = [32, 72, 112, 152];
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="TemplateCoversWorkflowAbstract" aria-hidden="true">
      <svg className="block h-auto w-full max-w-[200px]" viewBox="0 0 200 188" xmlns="http://www.w3.org/2000/svg" fill="none">
        <AxisLine x1={100} y1={20} x2={100} y2={168} ambient />
        {steps.map((label, i) => {
          const y = ys[i] ?? 32 + i * 40;
          const short = label.length > 20 ? `${label.slice(0, 18)}…` : label;
          return (
            <g key={`${label}-${i}`}>
              <Node cx={100} cy={y} active={i === 1 || i === 3} />
              <UiBlock x={20} y={y + 6} w={160} h={22} label={short} />
              {i < steps.length - 1 ? <ArrowDown x={100} y={y + 28} /> : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function TemplateVertexBuildFlowAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none select-none ${className}`} data-design-layer="TemplateVertexBuildFlowAbstract" aria-hidden="true">
      <svg className="block h-auto w-full max-w-[220px]" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" fill="none">
        <UiBlock x={72} y={8} w={76} h={24} label="TEMPLATE" emphasis />
        <AxisLine x1={110} y1={32} x2={110} y2={172} ambient />
        <ArrowDown x={110} y={48} />
        <Node cx={110} cy={64} active />
        <UiBlock x={68} y={68} w={84} h={22} label="PROJECT RECORD" />
        <ArrowDown x={110} y={88} />
        <Node cx={110} cy={104} active />
        <UiBlock x={72} y={108} w={76} h={22} label="FIELD / PM" />
        <ArrowDown x={110} y={128} />
        <Node cx={110} cy={144} active />
        <UiBlock x={48} y={148} w={124} h={22} label="OPERATIONAL CONTEXT" emphasis />
        <Eyebrow x={16} y={176} text="VERTEXBUILD" />
      </svg>
    </div>
  );
}

export function TemplateHeroMiniPreview({ variant, className = "" }: { variant: TemplatePreviewVariant; className?: string }) {
  return (
    <div className={`${className}`} data-design-layer="TemplateHeroMiniPreview">
      <TemplateWorksheetPreview variant={variant} compact />
    </div>
  );
}

const RFI_SAMPLE_ROWS = [
  { id: "1042", subject: "Door hardware schedule", by: "PM", due: "Mar 12", status: "Open" as const },
  { id: "1043", subject: "Level 2 corridor rough-in", by: "Super", due: "Mar 14", status: "Pending" as const },
];

export function TemplateWorksheetPreview({
  variant,
  compact = false,
}: {
  variant: TemplatePreviewVariant;
  compact?: boolean;
}) {
  if (variant === "rfi-worksheet") {
    return (
      <article
        className="overflow-hidden border border-brand-navy/12 bg-[#FFFEFB] shadow-[0_8px_24px_-12px_rgba(8,35,63,0.2)]"
        data-design-layer="TemplateWorksheetPreview"
      >
        <header className="border-b border-brand-navy/10 px-4 py-3 sm:px-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">RFI tracking</p>
          <p className="mt-1 text-[11px] text-brand-muted">Sample worksheet structure</p>
        </header>
        <div className="overflow-x-auto px-2 py-3 sm:px-4">
          <table className="w-full min-w-[320px] border-collapse text-left text-[11px] font-sans">
            <thead>
              <tr className="border-b border-brand-navy/15 text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-muted">
                <th className="px-2 py-1.5">RFI #</th>
                <th className="px-2 py-1.5">Subject</th>
                {!compact ? <th className="hidden px-2 py-1.5 sm:table-cell">Requested by</th> : null}
                <th className="px-2 py-1.5">Due</th>
                <th className="px-2 py-1.5">Status</th>
              </tr>
            </thead>
            <tbody>
              {RFI_SAMPLE_ROWS.map((row) => (
                <tr key={row.id} className="border-b border-brand-line/70 last:border-b-0">
                  <td className="px-2 py-2 tabular-nums text-brand-navy">{row.id}</td>
                  <td className="max-w-[8rem] truncate px-2 py-2 text-brand-navy sm:max-w-[10rem]">{row.subject}</td>
                  {!compact ? <td className="hidden px-2 py-2 text-brand-muted sm:table-cell">{row.by}</td> : null}
                  <td className="px-2 py-2 text-brand-muted">{row.due}</td>
                  <td className="px-2 py-2">
                    <span
                      className={`inline-flex border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] ${
                        row.status === "Open"
                          ? "border-brand-orange/35 bg-brand-orange/10 text-brand-navy"
                          : "border-brand-blue/30 bg-brand-blue/5 text-brand-navy"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!compact ? (
          <div className="grid grid-cols-2 gap-px border-t border-brand-navy/10 bg-brand-line/30 sm:grid-cols-4">
            {["Project", "Cost code", "Assigned to", "Notes"].map((f) => (
              <div key={f} className="bg-[#FAFBFD] px-3 py-2">
                <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-muted">{f}</p>
                <div className="mt-1.5 h-2 border-b border-brand-line/80" aria-hidden="true" />
              </div>
            ))}
          </div>
        ) : null}
      </article>
    );
  }

  if (variant === "field-log") {
    const fields = ["Date / Weather", "Crew on site", "Equipment", "Work performed", "Notes"];
    return (
      <article className="border border-brand-line bg-[#FFFEFB] p-4 sm:p-5" data-design-layer="TemplateWorksheetPreview">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Daily field log</p>
        <div className="mt-3 space-y-2.5">
          {fields.map((f) => (
            <div key={f} className="border border-brand-line/80 bg-white px-3 py-2">
              <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-muted">{f}</p>
              <div className="mt-1.5 h-2 border-b border-brand-line/70" aria-hidden="true" />
            </div>
          ))}
        </div>
      </article>
    );
  }

  const punchRows = [
    { loc: "Level 2 — East wing", trade: "Electrical", status: "Open" },
    { loc: "Lobby finish", trade: "Drywall", status: "Pending" },
  ];
  return (
    <article className="border border-brand-line bg-[#FFFEFB] p-4 sm:p-5" data-design-layer="TemplateWorksheetPreview">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Punch list</p>
      <ul className="mt-3 divide-y divide-brand-line border border-brand-line">
        {punchRows.map((row) => (
          <li key={row.loc} className="grid grid-cols-[1fr_auto_auto] gap-2 bg-white px-3 py-2 text-[11px]">
            <span className="text-brand-navy">{row.loc}</span>
            <span className="text-brand-muted">{row.trade}</span>
            <span className="font-semibold text-brand-orange">{row.status}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function TemplateDetailGutterAbstract({ className = "" }: Props) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`} aria-hidden="true">
      <svg
        className="absolute right-0 top-8 hidden h-[240px] w-[72px] opacity-[0.18] xl:block"
        viewBox="0 0 72 240"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <AxisLine x1={36} y1={16} x2={36} y2={220} ambient />
        <Node cx={36} cy={48} active />
        <Node cx={36} cy={120} />
        <Node cx={36} cy={192} active />
      </svg>
    </div>
  );
}
