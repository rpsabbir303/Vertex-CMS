import { ArrowRight } from "./Icons";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="trial" className="border-t border-brand-navy bg-brand-navy">
      <div className="site-shell py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Get started</p>
            <h2 className="display-title mt-4 text-3xl text-white sm:text-4xl">
              Ready to build with more control?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Bring projects, people, financials, and field operations together in one construction
              management system.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#trial" className="btn-primary w-full sm:w-auto">
                Start Free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
