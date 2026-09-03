import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";

export function CapabilityList({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 text-sm sm:text-[15px] ${
            dark ? "text-slate-200" : "font-medium text-brand-navy"
          }`}
        >
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              dark ? "bg-white/10 text-brand-orange" : "bg-brand-blue/10 text-brand-blue"
            }`}
          >
            <CheckIcon className="h-3 w-3" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SectionLink({
  href,
  label,
  variant = "ghost",
}: {
  href: string;
  label: string;
  variant?: "ghost" | "solid";
}) {
  if (variant === "solid") {
    return (
      <Link href={href} className="btn-primary mt-9">
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <Link href={href} className="btn-ghost mt-9">
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

type ProductSectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  copy: string;
  points: string[];
  href: string;
  linkLabel?: string;
  mockup: ReactNode;
  reverse?: boolean;
  dark?: boolean;
  tone?: "soft" | "white";
  aside?: ReactNode;
};

export function ProductSection({
  id,
  index,
  eyebrow,
  title,
  copy,
  points,
  href,
  linkLabel = "Learn More",
  mockup,
  reverse = false,
  dark = false,
  tone = "white",
  aside,
}: ProductSectionProps) {
  const bg = dark ? "bg-brand-navy" : tone === "soft" ? "bg-brand-soft" : "bg-white";

  return (
    <section id={id} className={`border-t border-brand-line/70 ${bg}`}>
      <div className="site-shell py-20 sm:py-24 lg:py-28">
        <div
          className={`grid items-start gap-12 lg:grid-cols-12 lg:gap-14 ${
            reverse ? "" : ""
          }`}
        >
          <Reveal
            className={`lg:col-span-5 ${reverse ? "order-1 lg:order-2 lg:col-start-8" : "order-1"}`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`font-display text-xs font-semibold tabular-nums ${
                  dark ? "text-white/40" : "text-brand-muted/70"
                }`}
              >
                {index}
              </span>
              <span className={`h-px w-8 ${dark ? "bg-white/20" : "bg-brand-line"}`} />
              <p className="eyebrow">{eyebrow}</p>
            </div>

            <h2
              className={`display-title mt-5 text-3xl sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12] ${
                dark ? "text-white" : ""
              }`}
            >
              {title}
            </h2>

            <p className={`body-copy mt-5 max-w-md ${dark ? "text-slate-300" : ""}`}>{copy}</p>

            <CapabilityList items={points} dark={dark} />

            <SectionLink href={href} label={linkLabel} variant={dark ? "solid" : "ghost"} />
          </Reveal>

          <Reveal
            delay={100}
            className={`min-w-0 lg:col-span-7 ${
              reverse ? "order-2 lg:order-1 lg:col-start-1" : "order-2"
            }`}
          >
            <div className="overflow-x-auto rounded-2xl shadow-product">
              <div className="min-w-[480px] sm:min-w-0">{mockup}</div>
            </div>
            {aside ? <div className="mt-5">{aside}</div> : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
