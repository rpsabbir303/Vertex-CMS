import { Reveal } from "@/components/Reveal";
import { trustStrip } from "@/lib/marketing/security/content";
import { StatusPill } from "./StatusPill";

export function SecurityTrustStrip() {
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell py-8 lg:py-10">
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {trustStrip.map((item) => (
              <li
                key={item.label}
                className="rounded-lg border border-brand-line/90 px-3.5 py-3.5"
              >
                <p className="font-display text-[15px] font-bold text-brand-navy">{item.label}</p>
                <p className="mt-1 text-[12px] text-brand-muted">{item.detail}</p>
                <div className="mt-2.5">
                  <StatusPill status={item.status} />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
