type Props = {
  name: string;
  monogram?: string;
  logoSrc?: string;
  muted?: boolean;
};

export function IntegrationMonogram({ name, monogram, logoSrc, muted }: Props) {
  const label = monogram ?? name.slice(0, 2).toUpperCase();

  if (logoSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logoSrc}
        alt=""
        className={
          "h-10 w-10 rounded-sm border border-brand-line object-contain p-1.5 " +
          (muted ? "opacity-60 grayscale" : "bg-white")
        }
      />
    );
  }

  return (
    <div
      className={
        "flex h-10 w-10 items-center justify-center rounded-sm border border-brand-line font-sans text-[11px] font-semibold tracking-wide " +
        (muted ? "bg-brand-line/30 text-brand-muted" : "bg-[#FAFBFD] text-brand-navy")
      }
      aria-hidden="true"
    >
      {label}
    </div>
  );
}
