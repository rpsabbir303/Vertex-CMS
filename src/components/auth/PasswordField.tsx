"use client";

import { useState } from "react";
import { FormField, authInputAria, authInputClass } from "./FormField";

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  autoComplete?: string;
  hint?: string;
  disabled?: boolean;
  valid?: boolean;
  touched?: boolean;
  onBlur?: () => void;
};

export function PasswordField({
  id,
  label,
  value,
  onChange,
  error,
  autoComplete = "current-password",
  hint,
  disabled,
  valid,
  touched,
  onBlur,
}: Props) {
  const [visible, setVisible] = useState(false);
  const inputOptions = { error, valid, touched, id, hint };

  return (
    <FormField id={id} label={label} error={error} hint={hint} valid={valid} touched={touched}>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          className={`${authInputClass(inputOptions)} pr-16`}
          {...authInputAria(inputOptions)}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-[12px] font-semibold text-brand-muted hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-blue"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          tabIndex={-1}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </FormField>
  );
}
