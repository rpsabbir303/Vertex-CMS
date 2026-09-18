import type { CustomerLogo } from "@/lib/marketing/customers/types";

type Props = {
  logo: CustomerLogo;
  className?: string;
};

/** Fictional text wordmark — demo customer logos only. */
export function DemoCustomerWordmark({ logo, className = "" }: Props) {
  const lines = logo.wordmarkLines ?? [logo.name.toUpperCase()];
  const featured = logo.featured;

  return (
    <svg
      viewBox="0 0 160 48"
      className={`mx-auto block h-full w-full max-w-[9rem] ${className}`}
      role="img"
      aria-label={logo.alt}
    >
      <text
        x="80"
        y={lines.length > 1 ? 18 : 28}
        textAnchor="middle"
        fill={featured ? "#08233F" : "#1E3A5F"}
        fontSize={featured ? 11 : 10}
        fontFamily="var(--font-customers-sans), 'DM Sans', sans-serif"
        fontWeight="700"
        letterSpacing="0.08em"
      >
        {lines[0]}
      </text>
      {lines[1] ? (
        <text
          x="80"
          y="34"
          textAnchor="middle"
          fill="#5B6B7C"
          fontSize="8"
          fontFamily="var(--font-customers-sans), 'DM Sans', sans-serif"
          fontWeight="600"
          letterSpacing="0.12em"
        >
          {lines[1]}
        </text>
      ) : null}
      {featured ? (
        <rect x="58" y="38" width="44" height="2" rx="1" fill="#FF6A00" fillOpacity="0.85" />
      ) : null}
    </svg>
  );
}
