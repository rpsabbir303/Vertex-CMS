import Image from "next/image";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

const ROLES = [
  { title: "Project Managers", desc: "Portfolio status, RFIs, variance and reporting in one place." },
  { title: "General Contractors", desc: "Projects, financials, field and compliance connected." },
  { title: "Superintendents", desc: "Daily logs, look-ahead, photos and punch from the field." },
  { title: "Estimators", desc: "Estimates, bids, leveling and award-to-budget." },
  { title: "Accountants", desc: "Native GL, AP/AR, pay apps and job cost." },
  { title: "Project Owners", desc: "Scoped portal for schedule, budget, pay apps and photos." },
];

export function RolesSection() {
  return (
    <section id="roles" className="relative overflow-hidden bg-brand-black py-20 sm:py-28">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={photos.superintendent}
                alt="Construction professional on a modern jobsite"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Built for construction teams
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">Who It&apos;s For</p>
            <h2 className="headline mt-3">
              Every Role.
              <br />
              Shared Project Truth.
            </h2>
            <p className="copy mt-4">
              VertexBuild connects the people who run the work — without inventing customer quotes or
              fake ratings. Real stories will appear here when approved.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ROLES.map((r) => (
                <article key={r.title} className="panel p-4 transition hover:border-brand-orange/30">
                  <div className="mb-2 h-1 w-8 rounded-full bg-brand-orange" />
                  <h3 className="text-sm font-semibold text-white">{r.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-brand-muted">{r.desc}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
