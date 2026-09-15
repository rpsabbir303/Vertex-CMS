type Props = {
  className?: string;
};

/** Refined inquiry confirmation mark — decorative, not a generic payment-success check. */
export function ContactSuccessVisual({ className = "" }: Props) {
  return (
    <div
      className={`relative mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center sm:h-20 sm:w-20 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full border border-brand-blue/15 bg-brand-blue/[0.04] motion-safe:animate-contact-map-pulse motion-reduce:animate-none" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-brand-line/80 bg-white shadow-[0_2px_12px_rgba(8,35,63,0.06)] sm:h-16 sm:w-16">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-brand-navy/80 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            d="M7 8h10M7 12h6M7 7.5A2.5 2.5 0 019.5 5h5A2.5 2.5 0 0117 7.5v9A2.5 2.5 0 0114.5 19h-5A2.5 2.5 0 017 16.5v-9z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-brand-orange shadow-sm">
        <svg viewBox="0 0 12 12" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M2.5 6l2.5 2.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
