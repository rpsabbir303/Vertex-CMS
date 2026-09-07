type Props = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
};

export function FormField({ id, label, error, hint, children }: Props) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-[13px] font-semibold text-brand-navy">
        {label}
      </label>
      {children}
      {hint && !error && <p className="text-[12px] text-brand-muted">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="text-[12px] font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const authInputClass = (error?: string) =>
  `w-full rounded-lg border bg-white px-3.5 py-3 text-[14px] text-brand-navy outline-none transition placeholder:text-brand-muted/60 focus:ring-1 ${
    error
      ? "border-red-400 focus:border-red-500 focus:ring-red-200"
      : "border-brand-line focus:border-brand-orange focus:ring-brand-orange/30"
  }`;
