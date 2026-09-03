import { SafetyUI } from "./mockups/ProductMockups";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

export function SafetyCompliance() {
  return (
    <section id="safety" className="relative overflow-hidden py-20 sm:py-28">
      <Photo src={photos.safety} alt="Construction safety review on site" overlay="light" objectPosition="center 25%" />
      <div className="absolute inset-0 bg-brand-soft/80" aria-hidden="true" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="eyebrow">Safety & Compliance</p>
          <h2 className="headline mt-3 uppercase">
            Safety Shouldn&apos;t
            <br />
            Be an Afterthought.
          </h2>
          <p className="copy mt-4">
            Keep safety, compliance, inspections and documentation visible throughout every project.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <SafetyUI />
        </Reveal>
      </div>
    </section>
  );
}
