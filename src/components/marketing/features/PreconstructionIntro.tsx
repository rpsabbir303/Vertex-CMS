import { Reveal } from "@/components/Reveal";
import { preconstructionCategory } from "@/lib/marketing/features/categories";

export function PreconstructionIntro() {
  const { intro } = preconstructionCategory;

  return (
    <section id="precon-intro" className="scroll-mt-36 border-b border-brand-line bg-white">
      <div className="site-shell section-spacing">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Before construction begins</p>
          <h2 className="display-title mt-3 text-3xl sm:text-4xl">{intro.headline}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">{intro.supporting}</p>
        </Reveal>

        <Reveal delay={80} className="mx-auto mt-12 max-w-4xl">
          <ol className="relative grid gap-3 sm:grid-cols-5">
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-brand-line via-brand-orange/40 to-brand-line sm:block"
              aria-hidden="true"
            />
            {intro.flow.map((step, index) => (
              <li key={step} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-brand-line bg-[#FAFBFD] shadow-soft">
                  <span className="font-mono text-[11px] font-bold text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 text-[13px] font-semibold text-brand-navy">{step}</p>
                {index < intro.flow.length - 1 ? (
                  <p className="mt-1 text-[11px] text-brand-orange/70 sm:hidden" aria-hidden="true">
                    ↓
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
