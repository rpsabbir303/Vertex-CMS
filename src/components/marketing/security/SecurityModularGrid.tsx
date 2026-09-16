type Cols = 2 | 3;

const COL_CLASS: Record<Cols, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 lg:grid-cols-3",
};

type RowProps = {
  columns?: Cols;
  className?: string;
  children: React.ReactNode;
};

/**
 * Editorial column row — vertical separators between modules only.
 * Matches the reference: columns + thin lines, not a boxed table.
 */
export function SecurityColumnRow({ columns = 3, className = "", children }: RowProps) {
  const divide =
    columns === 2
      ? "divide-y divide-brand-navy/10 sm:divide-y-0 sm:divide-x"
      : "divide-y divide-brand-navy/10 lg:divide-y-0 lg:divide-x";

  return (
    <div className={`security-column-row grid ${COL_CLASS[columns]} ${divide} ${className}`}>
      {children}
    </div>
  );
}

export function SecurityColumn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`security-column min-w-0 px-0 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 first:sm:pl-0 last:sm:pr-0 ${className}`}>{children}</div>;
}

export function SecuritySectionRule({ className = "" }: { className?: string }) {
  return <div className={`security-section-rule h-px w-full bg-brand-navy/10 ${className}`} aria-hidden="true" />;
}

/** @deprecated Prefer SecurityColumnRow — kept for existing topic-page imports. */
export function SecurityModularGrid({
  columns = 3,
  className = "",
  children,
}: {
  columns?: 1 | 2 | 3;
  className?: string;
  children: React.ReactNode;
}) {
  const cols = columns === 1 ? 3 : columns;
  return (
    <SecurityColumnRow columns={cols} className={className}>
      {children}
    </SecurityColumnRow>
  );
}

/** @deprecated Prefer SecurityColumn */
export function SecurityModularCell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  span?: 1 | 2;
}) {
  return <SecurityColumn className={className}>{children}</SecurityColumn>;
}
