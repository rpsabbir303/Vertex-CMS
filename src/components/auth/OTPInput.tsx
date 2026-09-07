"use client";

import { useRef } from "react";
import { FormField } from "./FormField";

type Props = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  length?: number;
};

export function OTPInput({ value, onChange, error, length = 6 }: Props) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = Array.from({ length }, (_, i) => value[i] ?? "");

  const setDigit = (index: number, char: string) => {
    const next = digits.slice();
    next[index] = char.replace(/\D/g, "").slice(-1);
    onChange(next.join("").slice(0, length));
    if (char && index < length - 1) refs.current[index + 1]?.focus();
  };

  return (
    <FormField id="totp" label="Authentication code" error={error} hint="Enter the 6-digit code from your authenticator app.">
      <div className="flex gap-2" role="group" aria-label="One-time password">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            inputMode="numeric"
            autoComplete={i === 0 ? "one-time-code" : "off"}
            maxLength={1}
            value={d}
            aria-label={`Digit ${i + 1}`}
            onChange={(e) => setDigit(i, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
            }}
            className={`h-12 w-10 rounded-lg border text-center font-display text-lg font-bold outline-none focus:ring-1 sm:h-14 sm:w-12 ${
              error
                ? "border-red-400 focus:border-red-500 focus:ring-red-200"
                : "border-brand-line focus:border-brand-orange focus:ring-brand-orange/30"
            }`}
          />
        ))}
      </div>
    </FormField>
  );
}
