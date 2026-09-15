type Props = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  valid?: boolean;
  touched?: boolean;
  required?: boolean;
  children: React.ReactNode;
};

export function FormField({ id, label, error, hint, valid, touched, required, children }: Props) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-[13px] font-semibold text-brand-navy">
        {label}
        {required ? (
          <>
            <span className="text-brand-orange" aria-hidden="true">
              {" "}
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        ) : null}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-[12px] text-brand-muted">
          {hint}
        </p>
      )}
      {valid && touched && !error && (
        <p id={`${id}-valid`} className="text-[12px] font-medium text-emerald-700">
          Looks good.
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-[12px] font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export type AuthInputOptions = {
  error?: string;
  valid?: boolean;
  touched?: boolean;
};

export const authInputClass = (errorOrOptions?: string | AuthInputOptions) => {
  const options: AuthInputOptions =
    typeof errorOrOptions === "string" ? { error: errorOrOptions } : (errorOrOptions ?? {});

  if (options.error) {
    return "w-full rounded-lg border border-red-400 bg-white px-3.5 py-3 text-[14px] text-brand-navy outline-none transition placeholder:text-brand-muted/60 focus:border-red-500 focus:ring-1 focus:ring-red-200";
  }

  if (options.valid && options.touched) {
    return "w-full rounded-lg border border-emerald-300 bg-white px-3.5 py-3 text-[14px] text-brand-navy outline-none transition placeholder:text-brand-muted/60 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200";
  }

  return "w-full rounded-lg border border-brand-line bg-white px-3.5 py-3 text-[14px] text-brand-navy outline-none transition placeholder:text-brand-muted/60 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30";
};

export function authInputAria(options: AuthInputOptions & { id: string; hint?: string }) {
  const describedBy = [
    options.hint && !options.error ? `${options.id}-hint` : null,
    options.error ? `${options.id}-error` : null,
    options.valid && options.touched && !options.error ? `${options.id}-valid` : null,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    "aria-invalid": options.error ? true : options.touched ? false : undefined,
    "aria-describedby": describedBy || undefined,
  } as const;
}
