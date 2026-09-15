type Props = {
  tone?: "light" | "navy";
  intensity?: "quiet" | "medium" | "strong";
  paths?: boolean;
  className?: string;
};

/** Overlay field for dark company canvas (page-wide light grid lives in CareersCanvas). */
export function CareersTechField({ tone = "light", intensity = "medium", paths = true, className }: Props) {
  const navy = tone === "navy";
  const major = navy ? "rgba(255,255,255,0.08)" : "rgba(8,35,63,0.07)";
  const minor = navy ? "rgba(255,255,255,0.04)" : "rgba(8,35,63,0.03)";
  const dots = navy ? "rgba(255,255,255,0.16)" : "rgba(8,35,63,0.12)";
  const opacity = intensity === "quiet" ? 0.5 : intensity === "strong" ? 1 : 0.85;
  const majorSize = intensity === "strong" ? "56px 56px" : "72px 72px";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${major} 1px, transparent 1px), linear-gradient(to bottom, ${major} 1px, transparent 1px)`,
          backgroundSize: majorSize,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${minor} 1px, transparent 1px), linear-gradient(to bottom, ${minor} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${dots} 0.65px, transparent 0.7px)`,
          backgroundSize: "18px 18px",
          opacity: 0.45,
        }}
      />
      {paths ? (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <path
            d="M -40 160 C 200 80, 380 240, 580 150 S 940 70, 1240 190"
            stroke={navy ? "#FFFFFF" : "#146EF5"}
            strokeOpacity={navy ? 0.08 : 0.06}
            strokeWidth="1"
            className="careers-line-flow-slow"
            strokeDasharray="6 12"
          />
        </svg>
      ) : null}
    </div>
  );
}
