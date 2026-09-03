import { DocsUI } from "./mockups/ProductMockups";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

export function Documents() {
  return (
    <section id="documents" className="relative overflow-hidden py-20 sm:py-28">
      <Photo src={photos.blueprint} alt="Construction drawings and blueprints" overlay="navy" />
      <div className="absolute inset-0 bg-brand-navy/60" aria-hidden="true" />

      <div className="container-wide relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow-light">Documents & Drawings</p>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Every Drawing.
              <br />
              Every Document.
              <br />
              One Source of Truth.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-5xl">
            <DocsUI />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
