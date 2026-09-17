import type { IntegrationRecord } from "@/lib/marketing/integrations/types";
import { detailConnectionLabels } from "@/lib/marketing/integrations/detailCopy";
import { IntegrationDetailFlowArrow } from "../visuals/IntegrationDetailFlowArrow";

const DIRECTION_LABELS = {
  "vertex-out": "Outbound",
  "vertex-in": "Inbound",
  both: "Bidirectional",
} as const;

const FLOW_LABELS = {
  "vertex-out": "Vertex CMS → Connected system",
  "vertex-in": "Connected system → Vertex CMS",
  both: "Vertex CMS ↔ Connected system",
} as const;

type Props = {
  item: IntegrationRecord;
};

export function IntegrationDetailDataExchanged({ item }: Props) {
  const d = item.detail;
  if (!d) return null;

  const hasSummary = Boolean(d.dataExchangeSummary?.trim());
  const hasList = Boolean(d.dataExchanged && d.dataExchanged.length > 0);
  const hasGroups = Boolean(d.dataExchangedGroups && d.dataExchangedGroups.length > 0);

  if (!hasSummary && !hasList && !hasGroups) return null;

  const labels = detailConnectionLabels(item);
  const primaryDirection = d.dataExchangedGroups?.find((g) => g.direction)?.direction;

  return (
    <div className="space-y-4 border border-brand-line/80 bg-white p-4 sm:p-5" data-design-layer="DataExchange">
      <div className="flex flex-col gap-3 border-b border-brand-line/60 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.06em] text-brand-navy">
          <span className="rounded-sm border border-brand-line/80 px-2 py-1">{labels.source}</span>
          <IntegrationDetailFlowArrow />
          <span className="rounded-sm border border-brand-orange/25 px-2 py-1">{labels.connectionDisplay}</span>
          <IntegrationDetailFlowArrow />
          <span className="rounded-sm border border-brand-line/80 px-2 py-1">{labels.destination}</span>
        </div>
        {primaryDirection && (
          <p className="font-sans text-[11px] font-medium text-brand-muted">{FLOW_LABELS[primaryDirection]}</p>
        )}
      </div>

      {hasSummary && <p className="text-[14px] leading-relaxed text-brand-muted">{d.dataExchangeSummary}</p>}

      {(hasGroups || hasList) && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[280px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-brand-line/70 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-muted">
                <th className="py-2 pr-4 font-semibold">Category</th>
                <th className="py-2 pr-4 font-semibold">Direction</th>
                <th className="py-2 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-brand-muted">
              {hasGroups &&
                d.dataExchangedGroups!.flatMap((group) =>
                  group.items.map((line) => (
                    <tr key={`${group.label}-${line}`} className="border-b border-brand-line/50 last:border-0">
                      <td className="py-2.5 pr-4 align-top font-medium text-brand-navy">{group.label}</td>
                      <td className="py-2.5 pr-4 align-top">{group.direction ? DIRECTION_LABELS[group.direction] : "—"}</td>
                      <td className="py-2.5 align-top leading-relaxed">{line}</td>
                    </tr>
                  )),
                )}
              {hasList &&
                d.dataExchanged!.map((line) => (
                  <tr key={line} className="border-b border-brand-line/50 last:border-0">
                    <td className="py-2.5 pr-4 align-top font-medium text-brand-navy">Documented exchange</td>
                    <td className="py-2.5 pr-4 align-top">—</td>
                    <td className="py-2.5 align-top leading-relaxed">{line}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
