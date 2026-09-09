import Link from "next/link";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { featuresLandingAI } from "@/lib/marketing/features/landing";
import { FeatureProductPreview } from "./FeatureProductPreview";

export function FeaturesAISection() {
  return (
    <section id={featuresLandingAI.id} className="scroll-mt-28 border-b border-white/10 bg-brand-navy text-white">
      <div className="site-shell section-spacing">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
              {featuresLandingAI.eyebrow}
            </p>
            <h2 className="display-title-light mt-3 text-3xl sm:text-4xl">{featuresLandingAI.headline}</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-300">
              {featuresLandingAI.supporting}
            </p>
            <ul className="mt-7 space-y-3">
              {featuresLandingAI.capabilities.map((cap) => (
                <li key={cap.id} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                  <p className="flex items-center gap-2 text-[14px] font-semibold text-white">
                    <CheckIcon className="h-4 w-4 text-brand-orange" />
                    {cap.name}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{cap.description}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12px] leading-relaxed text-slate-500">{featuresLandingAI.note}</p>
            <Link
              href={featuresLandingAI.cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brand-orange px-5 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#e85f00]"
            >
              {featuresLandingAI.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#061525] via-[#0A1F35] to-[#08233F] p-4 sm:p-5">
              <FeatureProductPreview preview="ai" dark framed className="min-h-[280px] sm:min-h-[360px]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
