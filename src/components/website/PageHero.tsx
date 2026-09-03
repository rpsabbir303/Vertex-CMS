import { Reveal } from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="section-spacing border-b border-brand-line/60 bg-[#FAFAF8]">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className={`display-title text-3xl sm:text-4xl lg:text-5xl ${eyebrow ? "mt-4" : ""}`}>
            {title}
          </h1>
          <p className="body-copy prose-width mt-5">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
