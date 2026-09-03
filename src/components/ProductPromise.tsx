import Image from "next/image";
import { MiniThumb } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

const STAGES = [
  { name: "Preconstruction", ui: "Estimating" },
  { name: "Plan", ui: "Projects" },
  { name: "Contract", ui: "SOV / COs" },
  { name: "Control", ui: "Job Cost" },
  { name: "Build", ui: "Daily Logs" },
  { name: "Track", ui: "Safety" },
  { name: "Closeout", ui: "Documents" },
];

export function ProductPromise() {
  return (
    <section id="promise" className="bg-white py-20 sm:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/6]">
            <Image
              src={photos.superintendent}
              alt="Superintendent walking an active construction project"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
            <p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              On the job · Connected to the system
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">Everything Connected.</p>
          <h2 className="headline mt-3">
            One Construction System.
            <br />
            From Preconstruction to Closeout.
          </h2>
          <p className="copy mt-4">
            Vertex CMS is the operating system for modern construction — connecting the full
            lifecycle so teams plan, control, build and improve from one source of truth.
          </p>

          <div className="mt-10 overflow-x-auto pb-2">
            <div className="flex min-w-[640px] items-start gap-0">
              {STAGES.map((s, i) => (
                <div key={s.name} className="flex flex-1 flex-col items-center px-1">
                  <p className="text-center text-[10px] font-bold uppercase tracking-wide text-brand-navy">
                    {s.name}
                  </p>
                  <div className="relative my-3 flex w-full items-center">
                    <div className="h-px w-full bg-brand-blue/30" />
                    <span className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-brand-orange" />
                  </div>
                  <MiniThumb label={s.ui} />
                  {i < STAGES.length - 1 && <span className="sr-only">then</span>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
