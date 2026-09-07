type Props = {
  tone?: "error" | "success" | "info";
  children: React.ReactNode;
};

export function AuthAlert({ tone = "error", children }: Props) {
  const styles = {
    error: "border-red-200 bg-red-50 text-red-800",
    success: "border-emerald-200 bg-emerald-50 text-emerald-800",
    info: "border-brand-blue/20 bg-brand-blue/5 text-brand-navy",
  }[tone];

  return (
    <div className={`rounded-lg border px-3.5 py-3 text-[13px] leading-relaxed ${styles}`} role="status">
      {children}
    </div>
  );
}
