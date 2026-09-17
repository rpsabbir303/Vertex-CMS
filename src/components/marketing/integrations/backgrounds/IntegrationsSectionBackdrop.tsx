type BackdropVariant = "hero" | "ecosystem" | "discovery" | "flow" | "cta" | "soft" | "none";

export function IntegrationsSectionBackdrop({ variant }: { variant: BackdropVariant }) {
  if (variant === "none") return null;

  if (variant === "hero") {
    return (
      <div className="int-section-bg" data-design-layer="HeroAbstractBackground" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full opacity-[0.3]" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <g fill="rgba(20,110,245,0.3)">
            <circle cx="920" cy="180" r="2" />
            <circle cx="980" cy="240" r="1.5" />
            <circle cx="860" cy="320" r="2" />
          </g>
          <circle cx="900" cy="280" r="48" fill="none" stroke="rgba(20,110,245,0.1)" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  if (variant === "ecosystem") {
    return (
      <div className="int-section-bg" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none" viewBox="0 0 1200 500">
          <line x1="300" y1="0" x2="300" y2="500" stroke="rgba(8,35,63,0.05)" strokeWidth="1" />
          <line x1="900" y1="0" x2="900" y2="500" stroke="rgba(8,35,63,0.05)" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  if (variant === "flow") {
    return (
      <div className="int-section-bg" aria-hidden="true">
        <svg className="int-flow-path hidden lg:block" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <line x1="80" y1="60" x2="400" y2="60" stroke="rgba(20,110,245,0.22)" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="400" y1="60" x2="800" y2="60" stroke="rgba(20,110,245,0.28)" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="800" y1="60" x2="1120" y2="60" stroke="rgba(20,110,245,0.22)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="400" cy="60" r="3" fill="rgba(255,106,0,0.3)" />
          <circle cx="800" cy="60" r="3" fill="rgba(255,106,0,0.3)" />
        </svg>
      </div>
    );
  }

  if (variant === "cta") {
    return (
      <div className="int-section-bg" data-design-layer="CtaArchitecturalBackground" aria-hidden="true">
        <svg viewBox="0 0 600 280" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <g stroke="rgba(8,35,63,0.12)" strokeWidth="1" fill="none" className="int-arch-pulse">
            <line x1="300" y1="40" x2="300" y2="100" />
            <line x1="300" y1="180" x2="300" y2="240" />
            <line x1="80" y1="140" x2="220" y2="140" />
            <line x1="380" y1="140" x2="520" y2="140" />
            <line x1="220" y1="140" x2="300" y2="80" />
            <line x1="380" y1="140" x2="300" y2="80" />
            <line x1="220" y1="140" x2="300" y2="200" />
            <line x1="380" y1="140" x2="300" y2="200" />
          </g>
          <circle cx="300" cy="140" r="8" fill="rgba(255,106,0,0.25)" />
          <circle cx="300" cy="140" r="18" fill="none" stroke="rgba(20,110,245,0.2)" strokeWidth="1" />
          <circle cx="80" cy="140" r="4" fill="rgba(20,110,245,0.15)" />
          <circle cx="520" cy="140" r="4" fill="rgba(20,110,245,0.15)" />
        </svg>
      </div>
    );
  }

  return <div className="int-section-bg" aria-hidden="true" />;
}
