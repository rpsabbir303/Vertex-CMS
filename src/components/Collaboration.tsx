import Image from "next/image";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

const PEOPLE = [
  "Project Owner",
  "Project Manager",
  "Estimator",
  "Superintendent",
  "Accountant",
  "Subcontractor",
  "Field Worker",
];

const PORTALS = [
  { t: "Owner Portal", i: "Schedule · Budget · Pay Apps · Photos" },
  { t: "Subcontractor Portal", i: "Scope · Submittals · Lien · Insurance" },
  { t: "Vendor Portal", i: "PO · Delivery · Invoice" },
  { t: "Architect / Engineer", i: "RFIs · Submittals · Revisions" },
];

export function Collaboration() {
  return (
    <section id="portals" className="bg-white py-20 sm:py-28">
      <div className="container-wide">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Collaboration & Portals</p>
            <h2 className="headline mt-3 uppercase">
              Everyone Connected.
              <br />
              Everyone in Context.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={photos.collaboration}
                alt="Construction team collaborating on site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-brand-navy/25" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-slate-200 bg-brand-soft/60 p-6 shadow-soft">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-navy text-center">
                <span className="text-[11px] font-bold text-white">Vertex
                  <br />
                  CMS</span>
              </div>
              <div className="mb-6 flex flex-wrap justify-center gap-2">
                {PEOPLE.map((p) => (
                  <span key={p} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-brand-navy">
                    {p}
                  </span>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {PORTALS.map((p) => (
                  <div key={p.t} className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-[12px] font-semibold text-brand-navy">{p.t}</p>
                    <p className="mt-1 text-[10px] text-brand-muted">{p.i}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
