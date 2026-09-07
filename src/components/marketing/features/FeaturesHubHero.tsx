import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { featuresHubHero } from "@/lib/marketing/features/hub";

export function FeaturesHubHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-line/70 bg-[#F7F9FC]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,35,63,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
        aria-hidden="true"
      />
      <div className="site-shell relative py-16 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{featuresHubHero.eyebrow}</p>
          <h1 className="display-title mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
            {featuresHubHero.headline}
          </h1>
          <p className="body-copy mx-auto mt-6 max-w-2xl">{featuresHubHero.supporting}</p>
          <p className="mt-5 font-mono text-[13px] font-semibold text-brand-orange">
            {featuresHubHero.capabilityCount} documented capabilities
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {featuresHubHero.browse.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-md border border-brand-line bg-white px-3.5 py-2 text-[12px] font-semibold text-brand-navy transition hover:border-brand-navy/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
