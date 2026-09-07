import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { securityCta } from "@/lib/marketing/security/content";

export function SecurityCTA() {
  return (
    <section className="bg-white">
      <div className="site-shell section-spacing">
        <Reveal>
          <div className="rounded-xl border border-brand-line bg-[#FAFBFD] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
            <h2 className="display-title text-3xl sm:text-4xl">{securityCta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-brand-muted sm:text-base">
              {securityCta.supporting}
            </p>
            <p className="mx-auto mt-4 max-w-lg rounded-lg border border-dashed border-brand-line bg-white px-4 py-3 text-[12px] italic text-brand-muted">
              {securityCta.contactPlaceholder}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={securityCta.primaryHref} className="btn-primary w-full sm:w-auto">
                {securityCta.primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={securityCta.secondaryHref} className="btn-secondary w-full sm:w-auto">
                {securityCta.secondaryLabel}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px]">
              <Link href={securityCta.privacyHref} className="font-medium text-brand-navy hover:text-brand-orange">
                Privacy Policy
              </Link>
              <Link href={securityCta.dpaHref} className="font-medium text-brand-navy hover:text-brand-orange">
                Data Processing Addendum
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
