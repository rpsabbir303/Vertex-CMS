import { Reveal } from "@/components/Reveal";
import { buildingSection, teamBuildStorySection } from "@/lib/marketing/team/content";

function BuildStoryStack() {
  const steps = teamBuildStorySection.stack;
  const navy = "#08233F";
  const orange = "#E85D2C";
  return (
    <svg viewBox="0 0 220 200" className="mx-auto w-full max-w-[220px]" role="img" aria-label="Construction, product, engineering, customer impact">
      {steps.map((label, i) => {
        const y = 18 + i * 44;
        const isLast = i === steps.length - 1;
        return (
          <g key={label}>
            {!isLast ? <line x1="110" y1={y + 16} x2="110" y2={y + 30} stroke="rgba(8,35,63,0.2)" strokeWidth="1" /> : null}
            <circle cx="110" cy={y + 10} r="3.5" fill={orange} />
            <text x="110" y={y + 6} textAnchor="middle" fill={navy} fontSize="9" fontWeight="600" letterSpacing="0.08em">
              {label.toUpperCase()}
            </text>
            {!isLast ? (
              <text x="110" y={y + 24} textAnchor="middle" fill={orange} fontSize="8">
                ↓
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

export function TeamBuildStorySection() {
  const copy = teamBuildStorySection;
  const narrative = buildingSection.pillars[0]!.body;

  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-white" aria-labelledby="team-build-story-heading">
      <div className="site-shell w-full max-w-[1240px] py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{copy.eyebrow}</p>
            <h2 id="team-build-story-heading" className="display-title mt-3 text-[1.65rem] leading-[1.12] text-[#08233F] sm:text-[2rem]">
              {copy.headline}
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-[1.75] text-[#111827]">{narrative}</p>
            <p className="mt-4 max-w-lg text-[14px] leading-[1.7] text-[#111827]/90">{buildingSection.pillars[1]!.body}</p>
          </Reveal>
          <Reveal delay={60}>
            <div className="border border-brand-navy/10 bg-[#FAFCFE] px-6 py-10 sm:px-10">
              <BuildStoryStack />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
