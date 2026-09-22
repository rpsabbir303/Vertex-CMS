import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { careersCta, TEAM_PENDING } from "@/lib/marketing/team/content";
import { TeamPendingState } from "./TeamPendingState";

export function TeamCareersCTA({ hidePendingIntro = false }: { hidePendingIntro?: boolean }) {
  return (
    <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-labelledby="team-careers-heading">
      <div className="site-shell relative py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="careers-safe-zone">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{careersCta.eyebrow}</p>
            <h2 id="team-careers-heading" className="display-title mt-4 text-[1.85rem] leading-[1.1] sm:text-[2.2rem] lg:text-[2.5rem]">
              {careersCta.headline}
            </h2>
            {hidePendingIntro ? (
              <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-[#111827]">{careersCta.supporting}</p>
            ) : (
              <div className="mt-5 max-w-lg">
                <TeamPendingState compact body={TEAM_PENDING.careers} />
              </div>
            )}
            <div className="mt-8">
              <Link
                href={careersCta.ctaHref}
                className="btn-primary inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
              >
                {careersCta.ctaLabel}
              </Link>
            </div>
            <p className="mt-5 text-[12px] text-brand-muted">{careersCta.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
