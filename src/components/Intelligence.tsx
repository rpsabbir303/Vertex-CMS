import Link from "next/link";
import { ArrowRight } from "./Icons";
import { AIConsole } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

export function Intelligence() {
  return (
    <section id="intelligence" className="relative overflow-hidden bg-brand-navy py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-brand-orange/15 blur-3xl" aria-hidden="true" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Intelligence
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
            Turn construction data into better decisions.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Ask live project questions, surface risk, and process documents — with human confirmation
            before any write.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-200">
            {[
              "AI Assistant grounded in project data",
              "Risk, schedule & financial insights",
              "Document intelligence",
              "Recommended actions you confirm",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                {t}
              </li>
            ))}
          </ul>
          <Link
            href="/features/ai-intelligence"
            className="btn-primary mt-8 inline-flex"
          >
            Explore AI Intelligence
            <ArrowRight />
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <AIConsole />
        </Reveal>
      </div>
    </section>
  );
}
