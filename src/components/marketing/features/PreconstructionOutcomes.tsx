import { Reveal } from "@/components/Reveal";
import { preconstructionCategory } from "@/lib/marketing/features/categories";

export function PreconstructionOutcomes() {
  const { outcomes } = preconstructionCategory;

  return (
    <section className="border-b border-brand-line bg-[#FAFBFD]">
      <div className="site-shell section-spacing">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Preconstruction outcomes</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">
            Better decisions before the first day on site.
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, index) => (
            <li key={item.title} className="border-t border-brand-line pt-5">
              <p className="font-mono text-[11px] font-bold text-brand-orange">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
