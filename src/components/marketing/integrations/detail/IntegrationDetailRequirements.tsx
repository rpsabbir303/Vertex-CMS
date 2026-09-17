type Props = {
  requirements?: string[];
  requirementsNote?: string;
};

export function IntegrationDetailRequirements({ requirements, requirementsNote }: Props) {
  if (requirementsNote?.trim()) {
    return <p className="max-w-2xl text-[14px] leading-relaxed text-brand-muted">{requirementsNote}</p>;
  }

  if (!requirements?.length) return null;

  return (
    <ul className="max-w-3xl divide-y divide-brand-line/70 border border-brand-line/80">
      {requirements.map((line) => (
        <li key={line} className="px-4 py-2.5 text-[13px] leading-relaxed text-brand-muted sm:px-5">
          {line}
        </li>
      ))}
    </ul>
  );
}
