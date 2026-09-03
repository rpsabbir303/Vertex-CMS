import { AIConsole } from "./mockups/ProductMockups";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

export function AIIntelligence() {
  return (
    <section id="intelligence" className="relative overflow-hidden bg-brand-dark py-20 sm:py-28">
      <Photo src={photos.nightSite} alt="Construction site at dusk" overlay="dark" className="opacity-40" />
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brand-orange/20 blur-3xl" aria-hidden="true" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="eyebrow-light">AI Intelligence</p>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]">
            Turn Construction Data
            <br />
            Into Better Decisions.
          </h2>
          <p className="mt-4 max-w-lg text-base text-slate-300 sm:text-lg">
            Ask questions, process documents and identify risk across live project information —
            with human confirmation before any write.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <AIConsole />
        </Reveal>
      </div>
    </section>
  );
}
