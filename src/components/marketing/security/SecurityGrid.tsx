const COL: Record<1 | 2 | 3 | "hero", string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 lg:grid-cols-2",
  3: "grid-cols-1 lg:grid-cols-3",
  hero: "grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]",
};

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

/** One row in the page-wide line grid. Vertical rules come from divide-x. */
export function SecurityGridRow({
  columns = 1,
  children,
  className = "",
}: {
  columns?: 1 | 2 | 3 | "hero";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid ${COL[columns]} divide-y divide-[#0B2948]/12 ${
        columns !== 1 ? "lg:divide-y-0 lg:divide-x lg:divide-[#0B2948]/12" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

/** Content inside a line-defined cell. No own border, radius, or shadow. */
export function SecurityGridCell({ children, className = "" }: BoxProps) {
  return <div className={`min-w-0 px-6 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-12 ${className}`}>{children}</div>;
}

export function SecurityDotsBand({
  eyebrow,
  title,
  supporting,
  id,
  children,
}: {
  eyebrow?: string;
  title: string;
  supporting?: string;
  id?: string;
  children?: React.ReactNode;
}) {
  return (
    <div id={id} className="px-6 py-8 text-center sm:px-10 sm:py-9 lg:px-14 lg:py-10">
      {eyebrow ? (
        <p className="flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0B2948]/55">
          <span className="inline-block h-1.5 w-1.5 bg-brand-orange" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mx-auto max-w-3xl text-[1.5rem] font-bold leading-[1.3] tracking-[-0.02em] text-[#0B2948] sm:text-[1.75rem] lg:text-[1.85rem] ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h2>
      {supporting ? <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-[1.7] text-[#6B7380]">{supporting}</p> : null}
      {children}
    </div>
  );
}

/** Multi-row table whose 1px rules form the cells. */
export function SecurityGridTable({
  columns = 3,
  children,
}: {
  columns?: 2 | 3;
  children: React.ReactNode;
}) {
  const edge =
    columns === 3
      ? "lg:[&>*:nth-child(3n)]:border-r-0 lg:[&>*:nth-last-child(-n+3)]:border-b-0"
      : "lg:[&>*:nth-child(2n)]:border-r-0 lg:[&>*:nth-last-child(-n+2)]:border-b-0";

  return (
    <div
      className={`grid grid-cols-1 ${COL[columns]} [&>*]:border-b [&>*]:border-[#0B2948]/12 [&>*:last-child]:border-b-0 lg:[&>*]:border-r lg:[&>*]:border-[#0B2948]/12 ${edge}`}
    >
      {children}
    </div>
  );
}

export function SecurityGridTableCell({ children, className = "" }: BoxProps) {
  return <div className={`flex h-full min-w-0 flex-col px-7 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10 ${className}`}>{children}</div>;
}
