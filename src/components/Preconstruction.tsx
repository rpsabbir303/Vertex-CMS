import { EstimateUI } from "./mockups/ProductMockups";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

export function Preconstruction() {
  return (
    <section id="preconstruction" className="relative overflow-hidden py-20 sm:py-28">
      <Photo src={photos.planning} alt="Construction planning and estimating work" overlay="navy" />
      <div className="absolute inset-0 bg-brand-navy/55" aria-hidden="true" />

      <div className="container-wide relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <p className="eyebrow-light">Preconstruction</p>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]">
            Win the Work
            <br />
            Before the Job Starts.
          </h2>
          <p className="mt-4 max-w-md text-base text-slate-200 sm:text-lg">
            Move from estimate to bid packages, leveling and award with CSI cost structure, quantities
            and margin visibility.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <EstimateUI />
        </Reveal>
      </div>
    </section>
  );
}
