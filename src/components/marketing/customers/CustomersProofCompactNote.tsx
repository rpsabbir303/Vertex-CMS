type Props = {
  message: string;
  className?: string;
};

/** Single-line limited-proof note — used inside sections, not as a full-page empty state. */
export function CustomersProofCompactNote({ message, className = "" }: Props) {
  return (
    <p className={`flex items-start gap-2 text-[13px] leading-relaxed text-brand-muted ${className}`}>
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
      <span>{message}</span>
    </p>
  );
}
