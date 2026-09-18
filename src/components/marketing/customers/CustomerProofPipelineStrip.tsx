"use client";



import Link from "next/link";

import { usePathname } from "next/navigation";

import { getCustomersProofNavItems } from "@/lib/marketing/customers/landing";



export function CustomerProofPipelineStrip() {

  const pathname = usePathname();

  const items = getCustomersProofNavItems();

  const onCustomersLanding = pathname === "/customers" || pathname === "/customers/";



  return (

    <nav

      aria-label="Customer proof sections"

      className="sticky top-[4.5rem] z-20 border-b border-brand-line bg-white/95 backdrop-blur-sm"

    >

      <div className="cust-shell flex gap-0 overflow-x-auto [scrollbar-width:thin]">

        {items.map((item) => {

          const href = onCustomersLanding ? `#${item.sectionId}` : `/customers#${item.sectionId}`;

          return (

            <Link

              key={item.sectionId}

              href={href}

              className="group relative shrink-0 border-b-2 border-transparent px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-brand-muted transition hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-orange sm:px-4 sm:text-[12px]"

            >

              {item.label}

              <span

                className="absolute inset-x-2 bottom-0 h-0.5 scale-x-0 rounded-full bg-brand-orange transition group-hover:scale-x-100 group-focus-visible:scale-x-100"

                aria-hidden="true"

              />

            </Link>

          );

        })}

      </div>

    </nav>

  );

}


