import { Reveal } from "@/components/Reveal";
import { PlatformPreview } from "./mockups/MarketingMockups";

export function PlatformOverview() {
  return (
    <section id="platform" className="border-b border-brand-line bg-white py-16 sm:py-20 lg:py-24">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">The Construction Control Center</p>
          <h2 className="display-title mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            One Platform for the Entire Project Lifecycle
          </h2>
          <p className="body-copy mt-5 max-w-lg">
            Connect financial control, field operations, project documentation, scheduling,
            compliance, and communication in one construction management system.
          </p>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <PlatformPreview />
        </Reveal>
      </div>
    </section>
  );
}
