import Link from "next/link";
import { ArrowRight, CheckIcon } from "./Icons";

export function FeaturePoints({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2.5 text-sm text-brand-navy">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LearnMore({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition hover:gap-3"
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
