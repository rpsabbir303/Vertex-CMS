/** 16px flow arrow — vector icon, not text character. */
export function IntegrationDetailFlowArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={"shrink-0 text-brand-blue/45 " + className}
      aria-hidden="true"
    >
      <path d="M3 8h8M9 5l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
