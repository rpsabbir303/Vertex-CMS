"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { serviceMeta } from "@/lib/website/tenantData";
import { useLanguage } from "./LanguageProvider";

export function Services() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(serviceMeta[0]?.id ?? "");

  return (
    <section className="section-spacing bg-white">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="display-title mt-5 text-3xl sm:text-4xl lg:text-[3.5rem] lg:leading-[1.08]">
            {t.services.headline}
            <br />
            <span className="text-brand-muted">{t.services.headlineLine2}</span>
          </h2>
          <p className="body-copy prose-width mt-6">{t.services.intro}</p>
        </Reveal>

        <div className="relative mt-16 lg:mt-20">
          {/* Desktop hover preview */}
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38%] lg:block">
            {serviceMeta.map((service) => {
              const item = t.services.items[service.id];
              if (!item) return null;
              return (
                <div
                  key={service.id}
                  className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${
                    activeId === service.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-navy/10 to-brand-navy/30" />
                </div>
              );
            })}
          </div>

          <div className="border-t border-brand-line lg:max-w-[58%]">
            {serviceMeta.map((service, i) => {
              const item = t.services.items[service.id];
              if (!item) return null;
              return (
                <Reveal key={service.id} delay={i * 40}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="group relative block border-b border-brand-line py-10 transition-colors hover:bg-brand-soft/40 lg:py-12"
                    onMouseEnter={() => setActiveId(service.id)}
                  >
                    <span
                      className="absolute left-0 top-0 h-0 w-0.5 bg-brand-orange transition-all duration-300 group-hover:h-full"
                      aria-hidden="true"
                    />
                    <div className="grid items-start gap-6 pl-6 sm:grid-cols-[4.5rem_1fr_auto] lg:grid-cols-[5rem_1fr_auto] lg:gap-10 lg:pl-8">
                      <span className="font-display text-4xl font-bold text-brand-line transition-colors duration-300 group-hover:text-brand-orange lg:text-5xl">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-brand-navy sm:text-2xl lg:text-[1.75rem]">
                          {item.title}
                        </h3>
                        <p className="prose-width mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                          {item.description}
                        </p>
                        <span className="btn-ghost mt-5 hidden sm:inline-flex">
                          {t.services.viewService}
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                      <span className="hidden self-center text-brand-orange transition-transform duration-300 group-hover:translate-x-1 sm:inline-flex">
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
