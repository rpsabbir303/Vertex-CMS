"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "@/components/Icons";
import { FloatChip } from "@/components/FloatChip";
import { ProductPreviewClip } from "@/components/marketing/features/ProductPreviewClip";
import { FloatingChip } from "@/components/mockups/ProductMockups";
import { Reveal } from "@/components/Reveal";
import { CTAS } from "@/lib/marketing/navigation";
import { SOLUTIONS_PAGE } from "@/lib/marketing/solutions/data";

type OrbitNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  tone: "orange" | "blue" | "teal";
};

type StatChip = {
  id: string;
  eyebrow: string;
  value: string;
  detail?: string;
  tone: "default" | "orange" | "emerald" | "blue";
  position: string;
  floatClass?: string;
  parallax: number;
  scrollIntensity: number;
};

const ORBIT_NODES: readonly OrbitNode[] = [
  { id: "projects", label: "Projects", x: 6, y: 12, tone: "orange" },
  { id: "financial", label: "Financial", x: 94, y: 10, tone: "blue" },
  { id: "field", label: "Field", x: 2, y: 48, tone: "teal" },
  { id: "documents", label: "Documents", x: 96, y: 44, tone: "blue" },
  { id: "ai", label: "AI", x: 88, y: 82, tone: "orange" },
  { id: "schedule", label: "Schedule", x: 10, y: 86, tone: "teal" },
];

const STAT_CHIPS: readonly StatChip[] = [
  {
    id: "live",
    eyebrow: "Live projects",
    value: "24 active",
    tone: "default",
    position: "-left-3 top-6 sm:-left-6 lg:-left-10",
    floatClass: "animate-float-slow",
    parallax: 14,
    scrollIntensity: 10,
  },
  {
    id: "sync",
    eyebrow: "Synced",
    value: "Financials · Field · AI",
    tone: "orange",
    position: "-right-2 bottom-8 sm:-right-4 lg:-right-8",
    floatClass: "animate-float-delay",
    parallax: 12,
    scrollIntensity: 14,
  },
  {
    id: "schedule",
    eyebrow: "Schedule health",
    value: "On track",
    detail: "92% portfolio",
    tone: "emerald",
    position: "-right-1 top-4 sm:top-2 lg:-right-12 lg:top-10",
    floatClass: "animate-float",
    parallax: 18,
    scrollIntensity: 8,
  },
  {
    id: "ai",
    eyebrow: "AI insight",
    value: "Cost trend flagged",
    tone: "orange",
    position: "left-2 top-[38%] sm:-left-8 lg:-left-14",
    floatClass: "animate-float-delay",
    parallax: 10,
    scrollIntensity: 16,
  },
  {
    id: "co",
    eyebrow: "Change orders",
    value: "3 open",
    tone: "blue",
    position: "bottom-[22%] -left-2 sm:-left-6 lg:-left-12",
    floatClass: "animate-float-slow",
    parallax: 16,
    scrollIntensity: 12,
  },
  {
    id: "field",
    eyebrow: "Field status",
    value: "126 daily logs",
    tone: "blue",
    position: "right-0 top-[42%] sm:-right-6 lg:-right-14",
    floatClass: "animate-float",
    parallax: 11,
    scrollIntensity: 18,
  },
  {
    id: "margin",
    eyebrow: "Portfolio margin",
    value: "12.6%",
    tone: "emerald",
    position: "bottom-[12%] right-2 sm:right-0 lg:-right-10",
    floatClass: "animate-float-slow",
    parallax: 13,
    scrollIntensity: 9,
  },
];

const PILL_CHIPS = [
  { label: "RFI overdue", tone: "orange" as const, className: "left-[8%] top-[18%] animate-float" },
  { label: "Pay app ready", tone: "blue" as const, className: "right-[6%] top-[28%] animate-float-delay" },
  { label: "Safety clear", tone: "blue" as const, className: "left-[12%] bottom-[18%] animate-float-slow" },
] as const;

function orbitTone(tone: OrbitNode["tone"]) {
  switch (tone) {
    case "orange":
      return "border-brand-orange/35 bg-white/95 text-brand-orange shadow-[0_8px_24px_-8px_rgba(232,93,4,0.35)]";
    case "teal":
      return "border-brand-teal/35 bg-white/95 text-brand-teal shadow-[0_8px_24px_-8px_rgba(20,184,166,0.25)]";
    default:
      return "border-brand-blue/35 bg-white/95 text-brand-blue shadow-[0_8px_24px_-8px_rgba(37,99,235,0.25)]";
  }
}

function statValueTone(tone: StatChip["tone"]) {
  switch (tone) {
    case "orange":
      return "text-brand-orange";
    case "emerald":
      return "text-emerald-600";
    case "blue":
      return "text-brand-blue";
    default:
      return "text-brand-navy";
  }
}

function statBorderTone(tone: StatChip["tone"]) {
  switch (tone) {
    case "orange":
      return "border-brand-orange/30";
    case "emerald":
      return "border-emerald-400/35";
    case "blue":
      return "border-brand-blue/25";
    default:
      return "border-brand-line";
  }
}

function HeroStatCard({ chip }: { chip: StatChip }) {
  return (
    <FloatChip intensity={chip.scrollIntensity} className={`absolute z-30 hidden md:block ${chip.position}`}>
      <div
        className={`rounded-xl border bg-white/95 px-3 py-2.5 shadow-[0_16px_40px_-20px_rgba(8,37,66,0.45)] backdrop-blur-sm ${statBorderTone(chip.tone)} ${chip.floatClass ?? ""}`}
        style={{
          transform: `translate3d(calc(var(--px) * ${chip.parallax}px), calc(var(--py) * ${chip.parallax * 0.75}px), 0)`,
        }}
      >
        <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-brand-muted">{chip.eyebrow}</p>
        <p className={`mt-0.5 text-[12px] font-bold leading-tight ${statValueTone(chip.tone)}`}>{chip.value}</p>
        {chip.detail ? <p className="mt-0.5 text-[9px] text-brand-muted">{chip.detail}</p> : null}
      </div>
    </FloatChip>
  );
}

export function SolutionsHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const section = sectionRef.current;
    if (!stage || !section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const setPointer = (x: number, y: number) => {
      stage.style.setProperty("--px", `${x}`);
      stage.style.setProperty("--py", `${y}`);
      section.style.setProperty("--px", `${x}`);
      section.style.setProperty("--py", `${y}`);
    };

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setPointer(x, y);
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", () => setPointer(0, 0));

    return () => {
      stage.removeEventListener("pointermove", onMove);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const viewH = window.innerHeight;
        const center = rect.top + rect.height * 0.35;
        const progress = (viewH - center) / viewH;
        section.style.setProperty("--scroll-p", `${progress.toFixed(4)}`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-brand-line/60 [--px:0] [--py:0] [--scroll-p:0]"
    >
      <div className="absolute inset-0 bg-[#F7F9FC]" aria-hidden="true" />

      <div
        className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-brand-orange/[0.07] blur-3xl will-change-transform"
        style={{
          transform:
            "translate3d(calc(var(--px) * -24px), calc(var(--py) * -16px + var(--scroll-p) * 28px), 0)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[380px] w-[380px] rounded-full bg-brand-blue/[0.06] blur-3xl will-change-transform"
        style={{
          transform:
            "translate3d(calc(var(--px) * 20px), calc(var(--py) * 14px + var(--scroll-p) * -22px), 0)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.24] will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,35,63,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          transform:
            "translate3d(calc(var(--px) * 12px), calc(var(--py) * 8px + var(--scroll-p) * 18px), 0)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 72% 42%, rgba(232,93,4,0.08), transparent 65%), radial-gradient(ellipse 50% 45% at 18% 68%, rgba(37,99,235,0.06), transparent 60%)",
          transform: "translate3d(0, calc(var(--scroll-p) * -20px), 0)",
        }}
        aria-hidden="true"
      />

      <div className="site-shell relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:gap-8">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
              {SOLUTIONS_PAGE.heroEyebrow}
            </p>
            <h1 className="display-title mt-5 text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-[3.5rem]">
              {SOLUTIONS_PAGE.heroHeadline}
            </h1>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-brand-muted sm:text-[17px]">
              {SOLUTIONS_PAGE.heroSupporting}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#finder" className="btn-primary w-full sm:w-auto">
                Explore the platform
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={CTAS.demo.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brand-line bg-white px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-brand-navy transition hover:border-brand-navy/25 sm:w-auto"
              >
                Book a Demo
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-brand-line/80 pt-8">
              {[
                ["6", "Platform areas"],
                ["1", "Project record"],
                ["∞", "Connected workflows"],
              ].map(([val, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-bold text-brand-navy">{val}</dt>
                  <dd className="mt-1 text-[11px] text-brand-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100} className="relative lg:-mr-8 xl:-mr-16">
            <div
              ref={stageRef}
              className="relative mx-auto w-full max-w-[620px] min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] [--px:0] [--py:0]"
              style={{ perspective: "1400px" }}
            >
              <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" aria-hidden="true">
                {ORBIT_NODES.map((n) => (
                  <line
                    key={n.id}
                    x1="50%"
                    y1="48%"
                    x2={`${n.x}%`}
                    y2={`${n.y}%`}
                    className="stroke-brand-blue/20"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                ))}
              </svg>

              {ORBIT_NODES.map((n, i) => (
                <span
                  key={n.id}
                  className={`absolute z-20 hidden rounded-full border px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm lg:inline-flex ${orbitTone(n.tone)}`}
                  style={{
                    left: `${n.x}%`,
                    top: `${n.y}%`,
                    transform: `translate(calc(-50% + var(--px) * ${5 + i}px), calc(-50% + var(--py) * ${3 + i * 0.5}px))`,
                  }}
                >
                  {n.label}
                </span>
              ))}

              {PILL_CHIPS.map((pill, i) => (
                <span
                  key={pill.label}
                  className={`absolute z-30 hidden lg:block ${pill.className}`}
                  style={{
                    transform: `translate3d(calc(var(--px) * ${8 + i * 2}px), calc(var(--py) * ${5 + i}px), 0)`,
                  }}
                >
                  <FloatingChip tone={pill.tone}>{pill.label}</FloatingChip>
                </span>
              ))}

              {STAT_CHIPS.map((chip) => (
                <HeroStatCard key={chip.id} chip={chip} />
              ))}

              <div
                className="relative z-10"
                style={{
                  transform:
                    "translate3d(calc(var(--px) * 14px), calc(var(--py) * 10px), 0) rotateX(calc(var(--py) * -3.5deg)) rotateY(calc(var(--px) * 4deg))",
                  transition: "transform 90ms linear",
                }}
              >
                <div className="overflow-hidden rounded-2xl border border-brand-line/80 bg-white shadow-[0_56px_120px_-48px_rgba(8,37,66,0.55)]">
                  <div className="flex items-center gap-2 border-b border-brand-line bg-[#F7F9FC] px-4 py-2">
                    <span className="flex gap-1" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-[#FF5F57]/90" />
                      <span className="h-2 w-2 rounded-full bg-[#FEBC2E]/90" />
                      <span className="h-2 w-2 rounded-full bg-[#28C840]/90" />
                    </span>
                    <span className="text-[10px] text-brand-muted">app.vertexcms.com · Portfolio</span>
                  </div>
                  <div className="border-b border-brand-line bg-white px-4 py-2.5">
                    <p className="text-[12px] font-bold text-brand-navy">Vertex CMS</p>
                  </div>
                  <ProductPreviewClip preview="projectDashboard" size="lg" scale="lg" />
                </div>

                <div
                  className="pointer-events-none absolute -inset-4 -z-10 rounded-[1.35rem] bg-gradient-to-br from-brand-blue/[0.08] via-transparent to-brand-orange/[0.1] blur-xl"
                  style={{
                    transform: "translate3d(calc(var(--px) * -8px), calc(var(--py) * -6px), 0)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
