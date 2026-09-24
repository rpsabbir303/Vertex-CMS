import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function JobApplicationSection({ id, title, description, children }: Props) {
  return (
    <section
      className="rounded-xl border border-brand-navy/10 bg-white px-5 py-6 shadow-[0_1px_3px_rgba(8,35,63,0.05)] sm:px-7 sm:py-8"
      aria-labelledby={id}
    >
      <header className="border-b border-brand-navy/[0.08] pb-5">
        <h2 id={id} className="display-title text-[1.3rem] leading-snug text-brand-navy sm:text-[1.5rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-brand-muted sm:text-[15px]">{description}</p>
        ) : null}
      </header>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}
