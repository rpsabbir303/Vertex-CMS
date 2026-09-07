import { Reveal } from "@/components/Reveal";
import { securityHero } from "@/lib/marketing/security/content";

export function SecurityHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-[#F7F9FC]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,35,63,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="site-shell relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <Reveal>
          <p className="eyebrow">{securityHero.eyebrow}</p>
          <h1 className="display-title mt-4 max-w-xl text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {securityHero.headline}
          </h1>
          <p className="body-copy mt-6 max-w-lg">{securityHero.supporting}</p>
        </Reveal>

        <Reveal delay={80}>
          <HeroArchitectureVisual />
        </Reveal>
      </div>
    </section>
  );
}

function HeroArchitectureVisual() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-brand-line bg-white p-5 shadow-soft sm:p-7">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-navy">
        Vertex CMS
      </p>
      <div className="mx-auto mt-3 h-8 w-px bg-brand-line" aria-hidden="true" />
      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        {[
          {
            title: "Data protection",
            items: ["encrypted data", "tenant scope"],
          },
          {
            title: "Access security",
            items: ["MFA / RBAC", "SSO"],
          },
          {
            title: "Platform health",
            items: ["audit", "monitoring"],
          },
        ].map((pillar) => (
          <div key={pillar.title} className="relative rounded-lg border border-brand-line/90 bg-[#FAFBFD] p-4">
            <div className="absolute -top-3 left-1/2 hidden h-3 w-px -translate-x-1/2 bg-brand-line sm:block" aria-hidden="true" />
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
              <p className="text-[12px] font-semibold text-brand-navy">{pillar.title}</p>
            </div>
            <ul className="space-y-2">
              {pillar.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-brand-line/80 bg-white px-2.5 py-2 font-mono text-[11px] text-brand-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-brand-line pt-4">
        <span className="h-px flex-1 bg-brand-line" aria-hidden="true" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Layered trust model</p>
        <span className="h-px flex-1 bg-brand-line" aria-hidden="true" />
      </div>
    </div>
  );
}
