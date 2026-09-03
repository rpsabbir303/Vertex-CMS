import Image from "next/image";
import { FinanceUI } from "./mockups/ProductMockups";
import { BlueprintTexture } from "./Photo";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

export function Financials() {
  return (
    <section id="financials" className="relative overflow-hidden bg-brand-dark py-20 sm:py-28">
      <BlueprintTexture />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-orange/15 blur-3xl" aria-hidden="true" />

      <div className="container-wide relative">
        <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <Reveal>
            <p className="eyebrow-light">Financial Management</p>
            <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]">
              Know Where
              <br />
              Every Dollar Stands.
            </h2>
            <p className="mt-4 max-w-md text-base text-slate-300">
              Contracts, change orders, pay applications, budgets, job cost and native double-entry
              General Ledger — one financial workflow.
            </p>
            <div className="relative mt-8 hidden h-28 w-44 overflow-hidden rounded-xl border border-white/10 sm:block">
              <Image src={photos.documents} alt="Plans and project documents" fill className="object-cover opacity-80" sizes="176px" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <FinanceUI />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
