import Link from "next/link";

import { ArrowRight } from "@/components/Icons";

import { CUSTOMERS_PAGE } from "@/lib/marketing/customers/content";

import { CustomersSectionBackdrop } from "./visuals/CustomersSectionBackdrop";



export function CustomersFinalCta() {

  const { finalCta } = CUSTOMERS_PAGE;



  return (

    <section className="relative overflow-hidden bg-brand-navy py-12 sm:py-14" data-design-layer="CustomersFinalCTA">

      <CustomersSectionBackdrop variant="finalCta" />

      <div className="cust-shell relative z-[1] mx-auto max-w-2xl text-center">

        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-[2.15rem]">{finalCta.headline}</h2>

        <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{finalCta.supporting}</p>

        <div className="mt-7 flex flex-col items-stretch justify-center gap-2 sm:flex-row sm:flex-wrap sm:items-center">

          <Link href={finalCta.primary.href} className="btn-primary w-full sm:w-auto">

            {finalCta.primary.label}

            <ArrowRight className="h-4 w-4" />

          </Link>

          <Link

            href={finalCta.secondary.href}

            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/25 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:w-auto"

          >

            {finalCta.secondary.label}

          </Link>

        </div>

        <Link href={finalCta.tertiary.href} className="mt-5 inline-flex text-[13px] font-semibold text-brand-orange hover:underline">

          {finalCta.tertiary.label}

        </Link>

      </div>

    </section>

  );

}


