type Props = {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export function CheckboxField({ id, label, checked, onChange, disabled }: Props) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-2.5 text-[13px] text-brand-navy">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-brand-line text-brand-orange focus:ring-brand-orange"
      />
      <span>{label}</span>
    </label>
  );
}
