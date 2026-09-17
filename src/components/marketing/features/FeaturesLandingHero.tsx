import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { featuresLandingHero } from "@/lib/marketing/features/landing";
import { ConnectedSystemDiagram } from "./ConnectedVertexSystem";

export function FeaturesLandingHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/80 bg-white" data-design-layer="FeaturesHero">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,35,63,0.028) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.028) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
        data-design-layer="HeroGridBackground"
      />

      <div className="feat-shell relative py-10 sm:py-12 lg:py-14">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:items-center lg:gap-12">
          <div className="relative min-w-0">
            <p className="eyebrow">{featuresLandingHero.eyebrow}</p>
            <h1 className="display-title mt-6 max-w-xl text-4xl leading-[1.08] sm:text-5xl lg:text-[3.15rem]">
              {featuresLandingHero.headline}
            </h1>
            <p className="body-copy mt-4 max-w-lg">{featuresLandingHero.supporting}</p>
            <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href={featuresLandingHero.primary.href} className="btn-primary w-full sm:w-auto">
                {featuresLandingHero.primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={featuresLandingHero.secondary.href} className="btn-secondary w-full sm:w-auto">
                {featuresLandingHero.secondary.label}
              </Link>
            </div>
          </div>

          <div className="relative min-w-0">
            <ConnectedSystemDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
