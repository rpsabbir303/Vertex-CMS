import Image from "next/image";
import { FinanceUI, PhoneUI, AIConsole, FloatingChip } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

export function ProductShowcases() {
  return (
    <section id="showcase" className="bg-brand-charcoal py-20 sm:py-28">
      <div className="container-wide space-y-28">
        {/* Financials */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="eyebrow">Financial Control</p>
            <h2 className="headline mt-3">
              Know Where
              <br />
              Every Dollar Stands.
            </h2>
            <p className="copy mt-4">
              Contracts, change orders, pay applications, budgets, job cost and native General Ledger
              — one financial workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Contracts", "SOV", "Change Orders", "Pay Apps", "GL", "Cash Flow"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-brand-blue/15 blur-3xl" aria-hidden="true" />
              <FinanceUI />
            </div>
          </Reveal>
        </div>

        {/* Field */}
        <div id="field" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <div className="relative aspect-[4/3]">
                <Image src={photos.fieldCrew} alt="Field crew on active jobsite" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-3 p-6 sm:gap-4">
                <PhoneUI variant="home" />
                <PhoneUI variant="log" raised />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <p className="eyebrow">Field & Mobile</p>
            <h2 className="headline mt-3">
              Keep the Field
              <br />
              Moving Forward.
            </h2>
            <p className="copy mt-4">
              Daily logs, GPS photos, RFIs, punch and timesheets — field-first and offline-capable.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Daily Logs", "RFIs", "Punch", "Safety", "Drawings", "AI Voice"].map((t) => (
                <FloatingChip key={t} dark tone={t === "AI Voice" ? "orange" : "blue"}>
                  {t}
                </FloatingChip>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold text-brand-orange">
              Offline Mode · Syncing when connection returns
            </p>
          </Reveal>
        </div>

        {/* AI */}
        <div id="ai" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="eyebrow">AI Intelligence</p>
            <h2 className="headline mt-3">
              Turn Construction Data
              <br />
              Into Better Decisions.
            </h2>
            <p className="copy mt-4">
              Ask live project questions, process documents and surface risk — with human confirmation
              before any write.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <AIConsole />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
