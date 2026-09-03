import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { REQUEST_BID_HREF } from "@/lib/website/navigation";

export function FinalCTA() {
  return (
    <section className="bg-brand-navy py-16 sm:py-20 lg:py-24">
      <div className="site-shell">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-title text-3xl text-white sm:text-4xl lg:text-[2.75rem]">
              Take Control of Every Project
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Bring your construction operations, financials, field data, and project intelligence
              into one connected platform.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={REQUEST_BID_HREF} className="btn-primary w-full sm:w-auto">
                Request a Bid
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
