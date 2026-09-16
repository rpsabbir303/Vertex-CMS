type Cols = 2 | 3;

const COL: Record<Cols, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
};

type MatrixProps = {
  children: React.ReactNode;
  className?: string;
};

/** Optional nested box — prefer the page frame + rows. */
export function SecurityMatrix({ children, className = "" }: MatrixProps) {
  return <div className={`border border-[#0B2948]/12 ${className}`}>{children}</div>;
}

export function SecurityMatrixBanner({
  children,
  className = "",
  align = "center",
  id,
}: MatrixProps & { align?: "center" | "start"; id?: string }) {
  return (
    <div
      id={id}
      className={`px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {children}
    </div>
  );
}

export function SecurityMatrixRow({
  columns = 3,
  className = "",
  children,
}: {
  columns?: Cols;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`grid grid-cols-1 ${COL[columns]} [&>*+*]:border-t [&>*+*]:border-[#0B2948]/12 lg:[&>*+*]:border-t-0 lg:[&>*+*]:border-l ${className}`}
    >
      {children}
    </div>
  );
}

export function SecurityMatrixCell({ children, className = "" }: MatrixProps) {
  return <div className={`min-w-0 px-6 py-9 sm:px-8 sm:py-10 lg:px-10 lg:py-12 ${className}`}>{children}</div>;
}

export function SecurityMatrixSplit({ children, className = "" }: MatrixProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] [&>*+*]:border-t [&>*+*]:border-[#0B2948]/12 lg:[&>*+*]:border-t-0 lg:[&>*+*]:border-l ${className}`}
    >
      {children}
    </div>
  );
}
