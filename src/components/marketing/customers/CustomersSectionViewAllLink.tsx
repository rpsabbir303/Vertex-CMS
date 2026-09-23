import Link from "next/link";

import { ArrowRight } from "@/components/Icons";

type Props = {
  href: string;
  label: string;
  className?: string;
};

export function CustomersSectionViewAllLink({ href, label, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${className}`}
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
    </Link>
  );
}
