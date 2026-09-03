import { Reveal } from "@/components/Reveal";
import { VALUE_POINTS } from "@/lib/website/homeData";
import { ValueIcon } from "./WebsiteIcons";

export function ValueStrip() {
  return (
    <section className="border-b border-brand-line bg-white py-8 sm:py-10" aria-label="Key capabilities">
      <div className="site-shell">
        <Reveal>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {VALUE_POINTS.map((point) => (
              <li key={point.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-blue">
                  <ValueIcon type={point.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-brand-navy">{point.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
