import Image from "next/image";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

const AUDIENCE = [
  "Project Owners",
  "General Contractors",
  "Subcontractors",
  "Project Managers",
  "Superintendents",
  "Estimators",
  "Accountants",
];

export function TrustSection() {
  return (
    <section id="customers" className="bg-white py-20 sm:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src={photos.superintendent}
              alt="Construction professionals on a modern jobsite"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 to-transparent" />
            <p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Built for construction teams
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">Who It&apos;s For</p>
          <h2 className="headline mt-3">
            Built for Construction Teams.
          </h2>
          <p className="copy mt-4">
            VertexBuild is designed for the roles that run US construction work — from precon through
            field and financial closeout. Customer stories will appear here when approved.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {AUDIENCE.map((a) => (
              <span key={a} className="rounded-full border border-slate-200 bg-brand-soft px-3.5 py-2 text-[12px] font-semibold text-brand-navy">
                {a}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
