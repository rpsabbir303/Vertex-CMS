type Props = {
  capabilities?: string[];
  workflows?: string[];
  technicalNotes?: string[];
};

function CompactList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="min-w-0">
      <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-brand-muted">{title}</h3>
      <ul className="mt-2 space-y-1.5">
        {items.map((line) => (
          <li key={line} className="flex gap-2 text-[13px] leading-snug text-brand-muted">
            <span className="text-brand-blue" aria-hidden="true">
              —
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function IntegrationDetailCapabilitiesBlock({ capabilities, workflows, technicalNotes }: Props) {
  const hasCap = Boolean(capabilities?.length);
  const hasFlow = Boolean(workflows?.length);
  const hasTech = Boolean(technicalNotes?.length);

  return (
    <div className="space-y-4">
      {(hasCap || hasFlow) && (
        <div className={`grid gap-6 ${hasCap && hasFlow ? "md:grid-cols-2" : ""}`}>
          {hasCap && <CompactList title="Capabilities" items={capabilities!} />}
          {hasFlow && <CompactList title="Supported workflows" items={workflows!} />}
        </div>
      )}
      {hasTech && (
        <div className={hasCap || hasFlow ? "border-t border-brand-line/60 pt-4" : ""}>
          <CompactList title="Technical information" items={technicalNotes!} />
        </div>
      )}
    </div>
  );
}
