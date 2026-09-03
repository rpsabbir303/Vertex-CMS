import Link from "next/link";
import { ArrowRight } from "./Icons";
import { HeroPortfolioDashboard } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

export function FinalShowcase() {
  return (
    <section id="showcase" className="bg-brand-soft py-20 sm:py-28">
      <div className="container-wide">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="headline">
              Everything your construction business needs, connected in one system.
            </h2>
            <p className="copy mx-auto mt-4 text-center">
              Project health, budget, schedule, field activity, safety, documents, and AI insight —
              in one command view.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand-blue/10 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-x-auto rounded-2xl shadow-lift">
              <div className="min-w-[560px] sm:min-w-0 [&_.absolute]:!hidden">
                <HeroPortfolioDashboard />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex justify-center">
            <Link href="/features" className="btn-primary">
              Explore CMS
              <ArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
