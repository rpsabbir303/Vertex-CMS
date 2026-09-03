import { CheckIcon } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { photos } from "@/lib/images";
import { FIELD_HIGHLIGHTS } from "@/lib/website/homeData";
import { FieldAppMockup } from "./mockups/MarketingMockups";

export function FieldOperations() {
  return (
    <section className="relative min-h-[520px] overflow-hidden py-16 sm:py-20 lg:py-24">
      <Photo
        src={photos.fieldCrew}
        alt="Construction field crew on an active jobsite"
        overlay="navy"
        objectPosition="center 30%"
      />
      <div className="absolute inset-0 bg-brand-navy/55" aria-hidden="true" />

      <div className="site-shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow text-brand-orange">Field Operations</p>
          <h2 className="display-title mt-4 text-3xl text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Built for the Field, Not Just the Office
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
            Give superintendents and field teams the tools to capture information quickly, even when
            connectivity is limited.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {FIELD_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
                <CheckIcon className="h-4 w-4 shrink-0 text-brand-orange" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="flex justify-center lg:justify-end">
          <FieldAppMockup />
        </Reveal>
      </div>
    </section>
  );
}
