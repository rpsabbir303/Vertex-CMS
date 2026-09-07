import Link from "next/link";
import { LEGAL_NAV, type LegalDocId } from "@/lib/marketing/legal/content";

type Props = {
  current: LegalDocId;
};

export function LegalRelatedLinks({ current }: Props) {
  return (
    <div className="mt-14 border-t border-brand-line pt-8 print:mt-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">Legal</p>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
        {LEGAL_NAV.map((item) => {
          const active = item.id === current;
          return (
            <li key={item.id}>
              {active ? (
                <span className="font-semibold text-brand-navy" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="font-medium text-brand-muted underline-offset-2 transition hover:text-brand-orange hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** @deprecated Prefer LegalRelatedLinks */
export function LegalFooterLinks() {
  return <LegalRelatedLinks current="terms" />;
}
