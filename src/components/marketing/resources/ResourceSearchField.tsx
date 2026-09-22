"use client";

import { useId } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  id?: string;
  onSubmit?: () => void;
};

export function ResourceSearchField({ value, onChange, placeholder, label, id: idProp, onSubmit }: Props) {
  const autoId = useId();
  const id = idProp ?? autoId;

  return (
    <form
      className="relative w-full max-w-xl"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      role="search"
    >
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.25" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      </span>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className={`w-full rounded-sm border border-brand-line bg-white py-3.5 pl-11 text-[15px] text-brand-navy shadow-[0_2px_12px_-4px_rgba(8,35,63,0.08)] placeholder:text-brand-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/45 ${
          value ? "pr-20" : "pr-4"
        }`}
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm px-2 py-1 text-[12px] font-semibold text-[#111827]/75 transition hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/45"
        >
          Clear
        </button>
      ) : null}
    </form>
  );
}
