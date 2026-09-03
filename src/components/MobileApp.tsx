import Image from "next/image";
import { PhoneUI, FloatingChip } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

const LABELS = ["Daily Logs", "RFIs", "Punch", "Safety", "Drawings", "Photos", "Timesheets", "AI Voice"];

export function MobileApp() {
  return (
    <section id="mobile" className="relative overflow-hidden bg-brand-soft py-20 sm:py-28">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block" aria-hidden="true">
        <Image src={photos.steelFrame} alt="" fill className="object-cover opacity-25" sizes="50vw" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-soft" />
      </div>

      <div className="container-wide relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Mobile Field App</p>
            <h2 className="headline mt-3">
              Construction Management
              <br />
              Wherever Work Happens.
            </h2>
            <p className="copy mx-auto mt-4 text-center">
              Field-first and offline-capable — with GPS photos, timesheets, safety and drawings when
              connectivity is limited.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mx-auto mt-14 flex max-w-4xl flex-wrap items-end justify-center gap-4 sm:gap-6">
            <PhoneUI variant="home" />
            <PhoneUI variant="log" raised />
            <PhoneUI variant="capture" />

            <div className="absolute left-0 top-4 hidden flex-col gap-2 xl:flex">
              {LABELS.slice(0, 4).map((l) => (
                <FloatingChip key={l} tone="blue">{l}</FloatingChip>
              ))}
            </div>
            <div className="absolute right-0 top-8 hidden flex-col gap-2 xl:flex">
              {LABELS.slice(4).map((l) => (
                <FloatingChip key={l} tone="orange">{l}</FloatingChip>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-10 text-center text-sm font-semibold text-brand-orange">
            Offline Mode · Syncing when connection returns
          </p>
        </Reveal>
      </div>
    </section>
  );
}
