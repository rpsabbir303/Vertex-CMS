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
}: Props) {
  return (
    <FormField id={id} label={optional ? `${label} (optional)` : label} error={error} hint={hint}>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        disabled={disabled}
        placeholder={placeholder}
        className={`${authInputClass(error)} min-h-[96px] resize-y`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
    </FormField>
  );
}
