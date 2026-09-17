import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import type { IntegrationDetailExtraSection } from "@/lib/marketing/integrations/types";

type Props = {
  sections: IntegrationDetailExtraSection[];
};

export function IntegrationDetailAdditional({ sections }: Props) {
  return (
    <div className="max-w-4xl space-y-4">
      {sections.map((section) => (
        <div key={section.id} className="border border-brand-line/80 bg-white p-4 sm:p-5">
          <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-brand-navy">{section.title}</h3>
          {section.body && <p className="mt-2 text-[14px] leading-relaxed text-brand-muted">{section.body}</p>}
          {section.items && section.items.length > 0 && (
            <ul className="mt-2 space-y-1 border-l border-brand-line pl-3">
              {section.items.map((line) => (
                <li key={line} className="text-[13px] text-brand-muted">
                  {line}
                </li>
              ))}
            </ul>
          )}
          {section.links && section.links.length > 0 && (
            <ul className="mt-2 flex flex-col gap-1">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand-orange hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
