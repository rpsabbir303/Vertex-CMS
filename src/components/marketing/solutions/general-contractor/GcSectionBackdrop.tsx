"use client";

/** Premium B2B SaaS abstract section backgrounds. */
export type GcBackdropVariant = "hero" | "white" | "soft" | "mist" | "navy";

const BASE: Record<GcBackdropVariant, string> = {
  hero: "from-[#F4F8FC] via-[#FAFBFD] to-[#EEF4FA]",
  white: "from-white via-[#FAFCFE] to-[#F3F7FB]",
  soft: "from-[#EEF3F9] via-[#F5F8FB] to-[#E8EEF6]",
  mist: "from-[#E6EEF6] via-[#F0F5FA] to-[#DCE8F2]",
  navy: "from-[#0B2238] via-brand-navy to-[#0A1E32]",
};

const BLOBS: Record<GcBackdropVariant, { o: string; b: string; accent?: string }> = {
  hero: { o: "right-[2%] top-[0%]", b: "left-[0%] bottom-[5%]", accent: "left-[38%] top-[42%]" },
  white: { o: "right-[-6%] top-[18%]", b: "left-[-8%] bottom-[8%]", accent: "right-[28%] bottom-[22%]" },
  soft: { o: "right-[4%] top-[-8%]", b: "left-[-10%] bottom-[20%]", accent: "left-[52%] top-[55%]" },
  mist: { o: "right-[-12%] top-[25%]", b: "left-[6%] top-[8%]", accent: "right-[35%] bottom-[10%]" },
  navy: { o: "left-[-15%] top-[-10%]", b: "right-[-8%] bottom-[-12%]", accent: "left-[45%] top-[35%]" },
};

function DotGrid({ light }: { light?: boolean }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: light
          ? "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)"
          : "radial-gradient(circle, rgba(8,35,63,0.11) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    />
  );
}

function LineGrid({ light }: { light?: boolean }) {
  return (
    <div
      className="absolute inset-0 opacity-[0.45]"
      style={{
        backgroundImage: light
          ? "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)"
          : "linear-gradient(to right, rgba(8,35,63,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,35,63,0.07) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

export function GcSectionBackdrop({ variant }: { variant: GcBackdropVariant }) {
  const blobs = BLOBS[variant];
  const isNavy = variant === "navy";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={"absolute inset-0 bg-gradient-to-br " + BASE[variant]} />

      {isNavy ? (
        <>
          <LineGrid light />
          <DotGrid light />
          <div
            className={"absolute h-[520px] w-[520px] rounded-full " + blobs.o}
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.38) 0%, rgba(30,79,138,0.14) 42%, transparent 68%)",
            }}
          />
          <div
            className={"absolute h-[480px] w-[480px] rounded-full " + blobs.b}
            style={{
              background:
                "radial-gradient(circle, rgba(232,93,4,0.22) 0%, rgba(232,93,4,0.08) 40%, transparent 68%)",
            }}
          />
        </>
      ) : (
        <>
          <LineGrid />
          <DotGrid />
          <div
            className={
              "absolute h-[min(560px,85vw)] w-[min(560px,85vw)] max-h-[560px] max-w-[560px] rounded-full " + blobs.o
            }
            style={{
              background:
                "radial-gradient(circle, rgba(232,93,4,0.2) 0%, rgba(232,93,4,0.08) 38%, transparent 66%)",
            }}
          />
          <div
            className={
              "absolute h-[min(480px,75vw)] w-[min(480px,75vw)] max-h-[480px] max-w-[480px] rounded-full " + blobs.b
            }
            style={{
              background:
                "radial-gradient(circle, rgba(30,79,138,0.18) 0%, rgba(30,79,138,0.07) 40%, transparent 68%)",
            }}
          />
          {blobs.accent ? (
            <div
              className={"absolute h-[280px] w-[280px] rounded-full " + blobs.accent}
              style={{
                background:
                  "radial-gradient(circle, rgba(232,93,4,0.1) 0%, rgba(30,79,138,0.05) 50%, transparent 72%)",
              }}
            />
          ) : null}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                variant === "hero"
                  ? "radial-gradient(ellipse 80% 55% at 78% 28%, rgba(232,93,4,0.12), transparent 58%), radial-gradient(ellipse 65% 50% at 12% 78%, rgba(30,79,138,0.1), transparent 55%)"
                  : "radial-gradient(ellipse 70% 48% at 85% 22%, rgba(232,93,4,0.1), transparent 52%), radial-gradient(ellipse 60% 45% at 10% 85%, rgba(30,79,138,0.09), transparent 50%)",
            }}
          />
          {variant === "hero" ? (
            <>
              <div className="absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-brand-orange/[0.07] blur-3xl" />
              <div className="absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-brand-blue/[0.06] blur-3xl" />
            </>
          ) : null}
        </>
      )}
    </div>
  );
}
