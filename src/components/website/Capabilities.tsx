import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CAPABILITIES } from "@/lib/website/homeData";
import { CapabilityIcon } from "./WebsiteIcons";

export function Capabilities() {
  return (
    <section className="border-b border-brand-line bg-brand-soft py-16 sm:py-20 lg:py-24">
      <div className="site-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Core Capabilities</p>
          <h2 className="display-title mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
            Everything Your Construction Team Needs
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.id} delay={i * 60}>
              <article className="group flex h-full flex-col rounded-xl border border-brand-line bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-product">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                  <CapabilityIcon id={cap.id} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-navy sm:text-xl">{cap.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted sm:text-base">
                  {cap.description}
                </p>
                <span className="btn-ghost mt-4 inline-flex items-center text-sm">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
