/** Decorative field for people sections — behind content, Figma-safe inline SVG. */
export function TeamPeopleField() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 1280 720" className="h-full w-full" preserveAspectRatio="xMidYMid slice" fill="none">
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={80 + i * 96}
            y1="0"
            x2={80 + i * 96}
            y2="720"
            stroke="#08233F"
            strokeOpacity="0.025"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={48 + i * 88}
            x2="1280"
            y2={48 + i * 88}
            stroke="#08233F"
            strokeOpacity="0.018"
            strokeWidth="1"
          />
        ))}
        <path
          d="M 960 40 C 1040 120, 1080 200, 1180 280"
          stroke="#146EF5"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeDasharray="4 10"
        />
        <circle cx="960" cy="40" r="2.5" fill="#146EF5" fillOpacity="0.25" />
        <circle cx="1180" cy="280" r="2.5" fill="#FF6A00" fillOpacity="0.35" />
        <rect x="48" y="520" width="96" height="64" rx="1" stroke="#08233F" strokeOpacity="0.06" strokeWidth="1" />
        <line x1="48" y1="536" x2="144" y2="536" stroke="#08233F" strokeOpacity="0.05" strokeWidth="1" />
      </svg>
    </div>
  );
}
