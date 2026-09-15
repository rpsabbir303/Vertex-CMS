"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { ROUTES } from "@/lib/marketing/navigation";
import { ContactForm } from "./ContactForm";
import { ContactGlobalReach } from "./ContactGlobalReach";

export function ContactPageContent() {
  const { t } = useMarketing();
  const c = t.contact;

  return (
    <>
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14 xl:gap-16">
          <Reveal className="lg:pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">{c.eyebrow}</p>
            <h1 className="display-title mt-3 text-[1.75rem] leading-tight sm:mt-4 sm:text-4xl lg:text-[2.5rem]">
              {c.headline}
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-brand-muted sm:mt-5">{c.supporting}</p>

            <div className="mt-10 border-t border-brand-line/70 pt-8">
              <h2 className="text-[15px] font-semibold text-brand-navy">{c.contextTitle}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{c.contextBody}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-[13px] font-semibold text-brand-navy">{c.salesGuidanceTitle}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-brand-muted">{c.salesGuidanceBody}</p>
              <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[13px] font-semibold">
                <Link href={ROUTES.demo} className="text-brand-blue hover:text-brand-orange hover:underline">
                  {c.bookDemo}
                </Link>
                <span className="text-brand-line" aria-hidden="true">
                  ·
                </span>
                <Link href={ROUTES.requestQuote} className="text-brand-blue hover:text-brand-orange hover:underline">
                  {c.requestQuote}
                </Link>
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>

    <ContactGlobalReach />
    </>
  );
}
