import Image from "next/image";
import { WorkforceUI } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

export function WorkforceEquipment() {
  return (
    <section id="workforce" className="bg-white py-20 sm:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/6]">
            <Image
              src={photos.equipment}
              alt="Construction equipment on a jobsite"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">Workforce & Equipment</p>
          <h2 className="headline mt-3 uppercase">
            Know Who&apos;s Working.
            <br />
            Know What&apos;s Moving.
          </h2>
          <p className="copy mt-4">
            Track crew status, timesheets and equipment utilization alongside project activity.
          </p>
          <div className="mt-8">
            <WorkforceUI />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
