/** Disconnected workflow nodes — challenge section (inline SVG, Figma-safe). */
export function CaseStudyChallengeDiagram({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-lg border border-brand-line bg-[#FAFBFD] p-4 sm:p-5 ${className}`}
      data-design-layer="CaseStudyChallengeDiagram"
    >
      <svg
        className="mx-auto w-full max-w-[320px]"
        width="100%"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 200"
        aria-hidden="true"
      >
        <rect x={16} y={24} width={80} height={44} rx={4} fill="#FFFFFF" stroke="#E6ECF3" strokeWidth={1} />
        <text x={56} y={44} textAnchor="middle" fill="#1E3A5F" fontSize={9} fontWeight={600}>
          Project
        </text>
        <text x={56} y={58} textAnchor="middle" fill="#5B6B7C" fontSize={8}>
          data
        </text>

        <rect x={120} y={24} width={80} height={44} rx={4} fill="#FFFFFF" stroke="#E6ECF3" strokeWidth={1} />
        <text x={160} y={44} textAnchor="middle" fill="#1E3A5F" fontSize={9} fontWeight={600}>
          Field
        </text>
        <text x={160} y={58} textAnchor="middle" fill="#5B6B7C" fontSize={8}>
          updates
        </text>

        <rect x={224} y={24} width={80} height={44} rx={4} fill="#FFFFFF" stroke="#E6ECF3" strokeWidth={1} />
        <text x={264} y={44} textAnchor="middle" fill="#1E3A5F" fontSize={9} fontWeight={600}>
          Financial
        </text>
        <text x={264} y={58} textAnchor="middle" fill="#5B6B7C" fontSize={8}>
          controls
        </text>

        <line x1={56} y1={68} x2={56} y2={100} stroke="#DCE5EF" strokeWidth={1} strokeDasharray="4 5" />
        <line x1={160} y1={68} x2={160} y2={100} stroke="#DCE5EF" strokeWidth={1} strokeDasharray="4 5" />
        <line x1={264} y1={68} x2={264} y2={100} stroke="#DCE5EF" strokeWidth={1} strokeDasharray="4 5" />

        <circle cx={56} cy={108} r={2.5} fill="#FF6A00" opacity={0.7} />
        <circle cx={160} cy={108} r={2.5} fill="#FF6A00" opacity={0.7} />
        <circle cx={264} cy={108} r={2.5} fill="#FF6A00" opacity={0.7} />

        <line x1={56} y1={112} x2={120} y2={140} stroke="#B7C8D8" strokeWidth={1} strokeDasharray="3 6" opacity={0.5} />
        <line x1={160} y1={112} x2={160} y2={140} stroke="#B7C8D8" strokeWidth={1} strokeDasharray="3 6" opacity={0.5} />
        <line x1={264} y1={112} x2={200} y2={140} stroke="#B7C8D8" strokeWidth={1} strokeDasharray="3 6" opacity={0.5} />

        <rect x={108} y={148} width={104} height={36} rx={4} fill="#08233F" />
        <text x={160} y={164} textAnchor="middle" fill="#FF6A00" fontSize={8} fontWeight={600}>
          COORDINATION
        </text>
        <text x={160} y={176} textAnchor="middle" fill="#FFFFFF" fontSize={9} fontWeight={600}>
          gap
        </text>
      </svg>
    </div>
  );
}
