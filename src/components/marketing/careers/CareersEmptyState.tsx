"use client";

export function CareersEmptyState() {
  return (
    <div role="status" aria-hidden="true">
      <svg viewBox="0 0 360 56" className="h-12 w-full max-w-xs text-brand-navy/25" fill="none">
        <path d="M 8 28 H 352" stroke="currentColor" strokeOpacity="0.35" />
        <circle cx="40" cy="28" r="4" stroke="currentColor" strokeOpacity="0.4" />
        <circle cx="180" cy="28" r="4" stroke="currentColor" strokeOpacity="0.25" />
        <circle cx="320" cy="28" r="4" fill="#FF6A00" fillOpacity="0.35" />
      </svg>
    </div>
  );
}
