type Props = {
  className?: string;
};

/** Restrained workflow / plan diagram for case studies hero — decorative only. */
export function CaseStudiesHeroDiagram({ className = "" }: Props) {
  return (
    <div
      className={`relative aspect-[4/3] min-h-[220px] w-full max-w-[420px] justify-self-end ${className}`}
      aria-hidden="true"
      data-capture="figma-decor"
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cs-hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E8EEF5" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="420" height="320" fill="url(#cs-hero-grid)" opacity="0.55" />
        <rect x="48" y="44" width="140" height="88" fill="none" stroke="#DCE5EF" strokeWidth="1" rx="2" />
        <line x1="48" y1="76" x2="188" y2="76" stroke="#E8EEF5" strokeWidth="1" />
        <line x1="48" y1="100" x2="160" y2="100" stroke="#E8EEF5" strokeWidth="1" />
        <circle cx="48" cy="44" r="3" fill="#FF6A00" opacity="0.75" />
        <circle cx="188" cy="132" r="2.5" fill="#146EF5" opacity="0.45" />
        <line x1="188" y1="88" x2="248" y2="88" stroke="#B7C8D8" strokeWidth="1" />
        <line x1="248" y1="88" x2="248" y2="148" stroke="#DCE5EF" strokeWidth="1" />
        <rect x="248" y="148" width="120" height="72" fill="none" stroke="#DCE5EF" strokeWidth="1" rx="2" />
        <line x1="248" y1="176" x2="368" y2="176" stroke="#E8EEF5" strokeWidth="1" />
        <circle cx={248} cy={148} r={3} fill="#146EF5" opacity={0.4} />
        <circle cx={368} cy={220} r={2.5} fill="#FF6A00" opacity={0.5} />
        <polyline points="80,200 80,260 200,260" fill="none" stroke="#DCE5EF" strokeWidth="1" />
        <polyline points="200,260 200,220 320,220" fill="none" stroke="#E8EEF5" strokeWidth="1" />
        <circle cx="80" cy="200" r="2.5" fill="#146EF5" opacity="0.35" />
        <circle cx="320" cy="220" r="2.5" fill="#146EF5" opacity="0.3" />
        <line x1="320" y1="220" x2="360" y2="260" stroke="#B7C8D8" strokeWidth="1" strokeDasharray="4 5" opacity="0.7" />
        <circle cx="360" cy="260" r="3" fill="#FF6A00" opacity="0.55" />
      </svg>
    </div>
  );
}
