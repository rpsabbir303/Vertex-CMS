import { PhoneUI } from "./mockups/ProductMockups";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

export function FieldOperations() {
  return (
    <section id="field" className="relative min-h-[640px] overflow-hidden py-20 sm:py-28">
      <Photo
        src={photos.fieldCrew}
        alt="Field crew on an active construction jobsite"
        overlay="navy"
        objectPosition="center 30%"
      />
      <div className="absolute inset-0 bg-brand-navy/50" aria-hidden="true" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow-light">Field Operations</p>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]">
            Keep the Field
            <br />
            Moving Forward.
          </h2>
          <p className="mt-4 max-w-md text-base text-slate-200">
            Capture daily activity, crew, weather, photos and RFIs where work happens — then sync to
            the project record.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap items-end justify-center gap-4 sm:gap-6">
            <PhoneUI variant="home" />
            <PhoneUI variant="log" raised />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
