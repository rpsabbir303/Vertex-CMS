import { ScheduleUI } from "./mockups/ProductMockups";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

export function Scheduling() {
  return (
    <section id="scheduling" className="relative overflow-hidden py-20 sm:py-28">
      <Photo src={photos.crane} alt="Structural frame and crane on construction site" overlay="light" />
      <div className="absolute inset-0 bg-white/75" aria-hidden="true" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="eyebrow">Scheduling</p>
          <h2 className="headline mt-3 uppercase">
            See the Schedule.
            <br />
            See the Risk.
          </h2>
          <p className="copy mt-4">
            CPM scheduling, look-ahead views and critical-path visibility so delays surface before
            they compound.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ScheduleUI />
        </Reveal>
      </div>
    </section>
  );
}
