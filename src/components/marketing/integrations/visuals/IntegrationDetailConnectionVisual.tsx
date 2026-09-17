type Props = {
  externalLabel?: string;
  integrationLabel?: string;
};

const labelClass =
  "font-sans text-[9px] font-semibold uppercase tracking-[0.06em] text-brand-navy text-center leading-tight";

/** Approved architecture diagram — SVG structure + HTML text (not SVG text). */
export function IntegrationDetailConnectionVisual({
  externalLabel = "EXTERNAL SYSTEM",
  integrationLabel = "INTEGRATION",
}: Props) {
  return (
    <figure
      className="int-inset-blueprint p-6 sm:p-8"
      data-design-layer="ConnectionDiagram"
    >
      <figcaption className="sr-only">
        Connection path from external system through integration into Vertex CMS.
      </figcaption>
      <svg viewBox="0 0 280 320" className="mx-auto h-auto w-full max-w-[280px]" role="presentation">
        <rect x="70" y="24" width="140" height="44" fill="#fff" stroke="rgba(8,35,63,0.18)" strokeWidth="1" />
        <foreignObject x="70" y="24" width="140" height="44">
          <div className="flex h-full items-center justify-center px-2">
            <p className={labelClass}>{externalLabel}</p>
          </div>
        </foreignObject>

        <line x1="140" y1="68" x2="140" y2="108" stroke="rgba(20,110,245,0.35)" strokeWidth="1" />
        <path d="M137 108 L140 112 L143 108" fill="none" stroke="rgba(20,110,245,0.4)" strokeWidth="1" />

        <rect x="70" y="108" width="140" height="44" fill="#fff" stroke="rgba(8,35,63,0.18)" strokeWidth="1" />
        <foreignObject x="70" y="108" width="140" height="44">
          <div className="flex h-full items-center justify-center px-2">
            <p className={labelClass}>{integrationLabel}</p>
          </div>
        </foreignObject>

        <line x1="140" y1="152" x2="140" y2="192" stroke="rgba(20,110,245,0.35)" strokeWidth="1" />
        <path d="M137 192 L140 196 L143 192" fill="none" stroke="rgba(20,110,245,0.4)" strokeWidth="1" />

        <rect x="58" y="192" width="164" height="52" fill="#f7f9fc" stroke="rgba(8,35,63,0.22)" strokeWidth="1.25" />
        <foreignObject x="58" y="192" width="164" height="52">
          <div className="flex h-full flex-col items-center justify-center px-2">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.04em] text-brand-navy">VERTEX CMS</p>
            <p className="mt-0.5 font-sans text-[7px] font-medium uppercase tracking-[0.06em] text-brand-muted">
              Shared project context
            </p>
          </div>
        </foreignObject>
      </svg>
    </figure>
  );
}
