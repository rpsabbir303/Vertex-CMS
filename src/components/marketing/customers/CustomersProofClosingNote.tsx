import Link from "next/link";
import { CUSTOMERS_LIMITED_NOTES } from "@/lib/marketing/customers/content";
import { ROUTES } from "@/lib/marketing/navigation";
import { CTAS } from "@/lib/marketing/navigation";

/** Single closing limited-proof line — only when no public proof is published yet. */
export function CustomersProofClosingNote() {
  return (
    <section className="border-b border-brand-line bg-white py-8 sm:py-9" data-design-layer="CustomersProofClosing">
      <div className="cust-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-[14px] leading-relaxed text-brand-muted">{CUSTOMERS_LIMITED_NOTES.closing}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-semibold">
          <Link href={ROUTES.features} className="text-brand-blue hover:underline">
            Explore platform
          </Link>
          <Link href={CTAS.demo.href} className="text-brand-blue hover:underline">
            {CTAS.demo.label}
          </Link>
          <Link href={CTAS.trial.href} className="text-brand-navy hover:underline">
            {CTAS.trial.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
