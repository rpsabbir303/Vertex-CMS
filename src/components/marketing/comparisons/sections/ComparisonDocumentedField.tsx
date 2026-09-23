type Props = {
  label: string;
  summary: string;
};

export function ComparisonDocumentedField({ label, summary }: Props) {
  return (
    <div className="min-w-0">
      <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#111827]/55">{label}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-[#111827]">{summary}</p>
    </div>
  );
}
