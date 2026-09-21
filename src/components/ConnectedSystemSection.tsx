"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ShowcaseSlot } from "@/components/cms/showcase/ShowcaseChrome";
import {
  Mockup01Projects,
  Mockup02Financials,
  Mockup03Field,
  Mockup04Intelligence,
} from "@/components/cms/showcase/ShowcaseMockups";
import { showcaseSlots } from "@/components/cms/showcase/slots";

type Tile = {
  id: string;
  label: string;
  href: string;
  size: "lg" | "md";
  delay: number;
  imageSrc: string | null;
  imageAlt: string;
  mockup: ReactNode;
};

const TILES: Tile[] = [
  {
    id: "mockup01",
    label: "Projects",
    href: "/features/project-management",
    size: "lg",
    delay: 80,
    imageSrc: showcaseSlots.mockup01,
    imageAlt: "VertexBuild project portfolio dashboard",
    mockup: <Mockup01Projects />,
  },
  {
    id: "mockup02",
    label: "Financials",
    href: "/features/contracts-financials",
    size: "md",
    delay: 160,
    imageSrc: showcaseSlots.mockup02,
    imageAlt: "VertexBuild financial dashboard",
    mockup: <Mockup02Financials />,
  },
  {
    id: "mockup03",
    label: "Field Operations",
    href: "/features/field-operations",
    size: "md",
    delay: 240,
    imageSrc: showcaseSlots.mockup03,
    imageAlt: "VertexBuild field operations dashboard",
    mockup: <Mockup03Field />,
  },
  {
    id: "mockup04",
    label: "AI & Intelligence",
    href: "/features/ai-intelligence",
    size: "lg",
    delay: 320,
    imageSrc: showcaseSlots.mockup04,
    imageAlt: "VertexBuild AI intelligence dashboard",
    mockup: <Mockup04Intelligence />,
  },
];

function ShowcaseTile({ tile }: { tile: Tile }) {
  return (
    <Reveal delay={tile.delay} className="h-full">
      <Link
        href={tile.href}
        className={`showcase-tile group relative block h-full ${
          tile.size === "lg" ? "lg:mt-0" : "lg:mt-6"
        }`}
      >
        <div className="showcase-tile-glow pointer-events-none absolute -inset-3 rounded-[1.75rem] opacity-0 transition duration-300 group-hover:opacity-100" />
        <div
          className={`relative overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white shadow-[0_18px_40px_-24px_rgba(8,35,63,0.4)] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02] group-hover:shadow-[0_28px_56px_-22px_rgba(8,35,63,0.45)] ${
            tile.size === "lg" ? "min-h-[280px]" : "min-h-[250px]"
          }`}
        >
          <div className="absolute left-3 top-3 z-10 rounded-full border border-white/70 bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-navy shadow-sm backdrop-blur">
            {tile.label}
          </div>
          <div className="absolute bottom-3 right-3 z-10 inline-flex translate-y-1 items-center gap-1 rounded-full bg-brand-navy/90 px-2.5 py-1 text-[10px] font-semibold text-white opacity-0 shadow-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Explore
            <ArrowRight className="h-3 w-3" />
          </div>
          <div className="h-full p-2 pt-9 sm:p-2.5 sm:pt-10">
            <ShowcaseSlot imageSrc={tile.imageSrc} imageAlt={tile.imageAlt}>
              {tile.mockup}
            </ShowcaseSlot>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function ConnectedSystemSection() {
  return (
    <section id="connected-system" className="relative overflow-hidden border-t border-brand-line bg-brand-soft">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-full bg-[#146EF5]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="site-shell relative py-20 sm:py-24 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">One connected system</p>
          <h2 className="display-title mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Everything You Need To Run Construction, Connected.
          </h2>
          <p className="body-copy mx-auto mt-5 max-w-xl">
            A quick look at the connected tools inside VertexBuild — projects, financials, field
            operations, and intelligence working as one construction system.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:gap-7">
          {TILES.map((tile) => (
            <ShowcaseTile key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
