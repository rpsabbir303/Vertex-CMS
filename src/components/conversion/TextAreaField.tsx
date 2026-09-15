import { FormField, authInputClass } from "@/components/auth/FormField";

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
  optional?: boolean;
  rows?: number;
  disabled?: boolean;
  placeholder?: string;
  onBlur?: () => void;
  valid?: boolean;
  touched?: boolean;
  required?: boolean;
};

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  optional,
  rows = 4,
  disabled,
  placeholder,
  onBlur,
  valid,
  touched,
  required,
}: Props) {
  return (
    <FormField
      id={id}
      label={optional ? `${label} (optional)` : label}
      error={error}
      hint={hint}
      valid={valid}
      touched={touched}
      required={required}
    >
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        rows={rows}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        className={`${authInputClass({ error, valid, touched })} min-h-[96px] resize-y`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
    </FormField>
  );
}
