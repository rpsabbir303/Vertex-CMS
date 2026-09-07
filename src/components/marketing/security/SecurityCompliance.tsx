import { Reveal } from "@/components/Reveal";
import { complianceMatrix } from "@/lib/marketing/security/content";
import { StatusPill } from "./StatusPill";

export function SecurityCompliance() {
  return (
    <section className="border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Compliance</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">Compliance readiness, clearly labeled</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted sm:text-base">
            Statuses distinguish documented requirements, supported workflows, product-domain capabilities, and
            targets. SOC 2 Type II is shown as target / readiness — not as a certification claim.
          </p>
        </Reveal>

        <Reveal delay={70} className="mt-10">
          <div className="overflow-hidden rounded-xl border border-brand-line">
            <div className="hidden grid-cols-[1.2fr_1.6fr_0.9fr] gap-4 border-b border-brand-line bg-[#FAFBFD] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted sm:grid">
              <span>Control</span>
              <span>Context</span>
              <span>Status</span>
            </div>
            <ul>
              {complianceMatrix.map((row, index) => (
                <li
                  key={row.control}
                  className={`grid gap-2 px-5 py-5 sm:grid-cols-[1.2fr_1.6fr_0.9fr] sm:items-center sm:gap-4 ${
                    index < complianceMatrix.length - 1 ? "border-b border-brand-line" : ""
                  }`}
                >
                  <p className="font-display text-[15px] font-bold text-brand-navy">{row.control}</p>
                  <p className="text-[13px] leading-relaxed text-brand-muted">{row.context}</p>
                  <div>
                    <StatusPill status={row.status} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
