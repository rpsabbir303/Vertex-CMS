type Props = {
  children: React.ReactNode;
  loading?: boolean;
  loadingLabel?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

export function AuthButton({
  children,
  loading,
  loadingLabel,
  disabled,
  variant = "primary",
  type = "submit",
  onClick,
  className = "",
}: Props) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 rounded-sm px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:cursor-not-allowed disabled:opacity-60";
  const styles =
    variant === "primary"
      ? "bg-brand-orange text-white hover:bg-[#e85f00]"
      : "border border-brand-line bg-white text-brand-navy hover:bg-brand-soft";

  return (
    <button type={type} className={`${base} ${styles} ${className}`} disabled={disabled || loading} onClick={onClick} aria-busy={loading}>
      {loading ? (
        <>
          <span
            className={`h-4 w-4 animate-spin rounded-full border-2 ${
              variant === "primary" ? "border-white/30 border-t-white" : "border-brand-navy/20 border-t-brand-navy"
            }`}
            aria-hidden="true"
          />
          {loadingLabel ?? "Please wait…"}
        </>
      ) : (
        children
      )}
    </button>
  );
}
