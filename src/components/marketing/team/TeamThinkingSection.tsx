import { Reveal } from "@/components/Reveal";
import { teamBuildPrinciples, thinkingSection } from "@/lib/marketing/team/content";

export function TeamThinkingSection() {
  return (
    <section className="relative z-[2] border-b border-brand-navy/10 bg-white" aria-labelledby="team-thinking-heading">
      <div className="site-shell py-14 sm:py-16 lg:py-20">
        <Reveal>
          <h2 id="team-thinking-heading" className="display-title text-[1.55rem] leading-[1.12] text-[#08233F] sm:text-[1.85rem]">
            {thinkingSection.headline}
          </h2>
        </Reveal>
        <ol className="mt-10 divide-y divide-brand-navy/10 border-y border-brand-navy/10" role="list">
          {teamBuildPrinciples.map((principle) => (
            <Reveal key={principle.index} delay={principle.index * 20}>
              <li className="grid gap-3 py-6 sm:grid-cols-[72px_200px_1fr] sm:gap-8 sm:py-8">
                <span className="font-mono text-[12px] font-semibold text-brand-orange">{String(principle.index).padStart(2, "0")}</span>
                <p className="text-[15px] font-semibold text-[#08233F]">{principle.label}</p>
                <p className="text-[14px] leading-[1.75] text-[#111827] sm:col-span-1">{principle.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
