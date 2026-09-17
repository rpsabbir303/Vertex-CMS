import type { IntegrationRecord } from "@/lib/marketing/integrations/types";
import { detailConnectionLabels } from "@/lib/marketing/integrations/detailCopy";

type Props = {
  item: IntegrationRecord;
  showDataList?: boolean;
};

/** Structured source → connection → destination relationship diagram. */
export function IntegrationDetailRelationshipVisual({ item, showDataList = true }: Props) {
  const labels = detailConnectionLabels(item);
  return (
    <div
      className="border border-brand-line/80 bg-white p-4 sm:p-5"
      data-design-layer="RelationshipDiagram"
      role="img"
      aria-label="Relationship from source system through connection to Vertex CMS."
    >
      <div className="hidden gap-4 md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        <RelationshipNode title="Source" heading={labels.source} sub={labels.sourceSub} />
        <FlowArrow />
        <RelationshipNode title="Connection" heading={labels.connectionDisplay} sub={labels.connectionSub} accent />
        <FlowArrow />
        <RelationshipNode title="Destination" heading={labels.destination} sub={labels.destinationSub} />
      </div>
      <div className="flex flex-col items-stretch gap-4 md:hidden">
        <RelationshipNode title="Source" heading={labels.source} sub={labels.sourceSub} />
        <FlowArrow vertical />
        <RelationshipNode title="Connection" heading={labels.connectionDisplay} sub={labels.connectionSub} accent />
        <FlowArrow vertical />
        <RelationshipNode title="Destination" heading={labels.destination} sub={labels.destinationSub} />
      </div>
      {showDataList && item.detail?.dataExchanged && item.detail.dataExchanged.length > 0 && (
        <div className="mt-8 border-t border-brand-line/70 pt-6">
          <p className="int-ui-label text-brand-muted">Documented data exchanged</p>
          <ul className="mt-3 space-y-2">
            {item.detail.dataExchanged.map((line) => (
              <li key={line} className="flex gap-2 text-[14px] text-brand-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-blue/60" aria-hidden="true" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function RelationshipNode({
  title,
  heading,
  sub,
  accent,
}: {
  title: string;
  heading: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div className={"min-w-0 text-center md:text-left " + (accent ? "md:border-l md:border-brand-orange/30 md:pl-4" : "")}>
      <p className="int-ui-label text-brand-muted">{title}</p>
      <p className="mt-2 font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-brand-navy">{heading}</p>
      <p className="mt-1 text-[13px] text-brand-muted">{sub}</p>
    </div>
  );
}

function FlowArrow({ vertical, className = "" }: { vertical?: boolean; className?: string }) {
  if (vertical) {
    return (
      <div className={"flex justify-center text-brand-blue/40 " + className} aria-hidden="true">
        <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
          <line x1="8" y1="0" x2="8" y2="22" stroke="currentColor" strokeWidth="1" />
          <path d="M4 18 L8 24 L12 18" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
    );
  }
  return (
    <div className={"text-brand-blue/40 " + className} aria-hidden="true">
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
        <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="1" />
        <path d="M20 4 L28 8 L20 12" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}
