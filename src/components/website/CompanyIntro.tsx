"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { photos } from "@/lib/images";
import { useLanguage } from "./LanguageProvider";

export function CompanyIntro() {
  const { t } = useLanguage();

  return (
    <section className="section-spacing-lg bg-[#FAFAF8]">
      <div className="site-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-28">
        <Reveal>
          <div className="relative pl-8 lg:pl-10">
            <span className="editorial-line" aria-hidden="true" />
            <p className="eyebrow">{t.companyIntro.eyebrow}</p>
            <h2 className="display-title mt-5 text-3xl sm:text-4xl lg:text-[3.5rem] lg:leading-[1.08] xl:text-[3.75rem]">
              {t.companyIntro.headline}
              <br />
              {t.companyIntro.headlineLine2}
            </h2>
            <p className="body-copy prose-width mt-8">{t.companyIntro.paragraph}</p>
            <Link href="/about" className="btn-ghost mt-10 inline-flex">
              {t.companyIntro.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100} className="relative">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-lg overflow-hidden lg:aspect-[3/4]">
            <Image
              src={photos.superintendent}
              alt="Construction project team on an active commercial jobsite"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="absolute -bottom-8 -left-4 hidden w-[55%] overflow-hidden border-4 border-[#FAFAF8] shadow-product lg:block xl:-left-10">
            <div className="relative aspect-[4/3]">
              <Image
                src={photos.collaboration}
                alt="Project team collaborating on site"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
