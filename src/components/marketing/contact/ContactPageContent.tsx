"use client";

import Link from "next/link";
import { CompanyCanvas, CompanyNav } from "@/components/marketing/company/CompanyCanvas";
import { CompanyHero } from "@/components/marketing/company/CompanyHero";
import { ContactConnectedVisual, ContactHeroVisual } from "@/components/marketing/company/CompanyVisuals";
import { Reveal } from "@/components/Reveal";
import { useMarketing } from "@/components/marketing/MarketingProviders";
import { ROUTES } from "@/lib/marketing/navigation";
import { ContactForm } from "./ContactForm";

export function ContactPageContent() {
  const { t } = useMarketing();
  const c = t.contact;
  const g = c.globalReach;

  return (
    <CompanyCanvas>
      <CompanyHero
        eyebrow={c.eyebrow}
        headline={c.headline}
        supporting={<p>{c.supporting}</p>}
        visual={<ContactHeroVisual />}
      />

      <section className="relative z-[2] border-b border-brand-navy/[0.1]" aria-labelledby="contact-inquiry-heading">
        <div className="site-shell relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14 xl:gap-16">
            <Reveal>
              <div className="careers-safe-zone">
                <h2 id="contact-inquiry-heading" className="display-title text-[1.65rem] leading-[1.15] sm:text-[2rem]">
                  {c.contextTitle}
                </h2>
                <p className="mt-4 text-[15px] leading-[1.8] text-brand-muted">{c.contextBody}</p>

                <div className="mt-10 border-t border-brand-navy/10 pt-8">
                  <h3 className="text-[13px] font-semibold text-brand-navy">{c.salesGuidanceTitle}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{c.salesGuidanceBody}</p>
                  <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[13px] font-semibold">
                    <Link href={ROUTES.demo} className="text-brand-blue hover:text-brand-orange hover:underline">
                      {c.bookDemo}
                    </Link>
                    <span className="text-brand-navy/20" aria-hidden="true">
                      ·
                    </span>
                    <Link href={ROUTES.requestQuote} className="text-brand-blue hover:text-brand-orange hover:underline">
                      {c.requestQuote}
                    </Link>
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="relative z-[1] min-w-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-[2] border-b border-brand-navy/[0.1] bg-brand-navy/[0.02]" aria-labelledby="contact-connected-heading">
        <div className="site-shell relative py-16 sm:py-20 lg:py-24">
          <Reveal>
            <div className="careers-safe-zone mx-auto text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">{g.eyebrow}</p>
              <h2 id="contact-connected-heading" className="display-title mt-4 text-[1.85rem] leading-[1.1] sm:text-[2.2rem] lg:text-[2.5rem]">
                {g.headline}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.8] text-brand-muted">{g.supporting}</p>
            </div>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl">
            <ContactConnectedVisual labels={[g.flow.project, g.flow.field, g.flow.financial, g.flow.team]} />
          </div>
        </div>
      </section>

      <CompanyNav current="contact" />
    </CompanyCanvas>
  );
}
