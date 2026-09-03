"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { BrowserFrame, PhoneUI } from "@/components/mockups/ProductMockups";

const STATES = ["OFFLINE", "QUEUED", "SYNCING", "SYNCED"] as const;
const MOBILE = ["Daily Log", "Photos", "RFI", "Punch", "Safety", "Time"] as const;

export function HomeFieldSync() {
  const [sync, setSync] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setSync(3);
      return;
    }
    const id = window.setInterval(() => setSync((s) => (s + 1) % STATES.length), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24 lg:py-32">
      <div className="site-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="home-label">Field + Mobile</p>
          <h2 className="home-display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
            No signal.
            <span className="block text-slate-300">No problem.</span>
          </h2>
          <p className="home-body mx-auto mt-5 max-w-xl">
            Capture work offline. Keep the field moving. Sync automatically when you&apos;re back online.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14 grid items-center gap-8 lg:grid-cols-[1.1fr_auto_0.7fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
            <BrowserFrame url="app.vertexcms.com / field / sync">
              <div className="bg-brand-soft/40 p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-brand-navy">Desktop CMS · Field Desk</p>
                  <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[10px] font-semibold text-brand-blue">
                    {STATES[sync]}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {MOBILE.map((m) => (
                    <div key={m} className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-[12px] font-medium text-brand-navy">
                      {m}
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="home-sync-bar h-full bg-brand-blue" style={{ width: `${(sync + 1) * 25}%` }} />
                </div>
              </div>
            </BrowserFrame>
          </div>

          <div className="hidden flex-col items-center gap-2 lg:flex" aria-hidden="true">
            <div className="h-16 w-px bg-gradient-to-b from-brand-blue/10 via-brand-blue to-brand-orange/80" />
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
              Sync
            </span>
            <div className="h-16 w-px bg-gradient-to-b from-brand-orange/80 via-brand-blue to-brand-blue/10" />
          </div>

          <div className="mx-auto flex flex-col items-center gap-4">
            <PhoneUI variant="log" />
            <div className="flex flex-wrap justify-center gap-2">
              {STATES.map((s, i) => (
                <span
                  key={s}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                    i === sync
                      ? "bg-brand-orange text-white"
                      : "border border-white/10 bg-white/5 text-slate-400"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
