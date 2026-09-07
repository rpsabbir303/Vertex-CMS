import Link from "next/link";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { CTAS } from "@/lib/marketing/navigation";
import { FeatureProductPreview } from "./FeatureProductPreview";

const OUTCOMES = [
  {
    id: "outcome-visibility",
    eyebrow: "Portfolio visibility",
    headline: "See every project clearly.",
    body: "Track project health, schedule status, cost variance, and open items from one connected workspace.",
    points: ["Project portfolio status", "Schedule and cost signals", "Open RFIs and punch visibility"],
    preview: "project" as const,
    reverse: false,
    surface: "white" as const,
  },
  {
    id: "outcome-decisions",
    eyebrow: "Connected decisions",
    headline: "Keep every decision connected.",
    body: "RFIs, documents, and submittals stay tied to the project record—so review, response, and history remain in context.",
    points: ["Document and drawing context", "RFI and submittal status", "Shared project record"],
    preview: "docs" as const,
    reverse: true,
    surface: "soft" as const,
  },
  {
    id: "outcome-insights",
    eyebrow: "Operational insight",
    headline: "Turn project activity into visibility.",
    body: "Surface reporting and project signals from live workflows—so teams act on the same operating picture.",
    points: ["Project health signals", "Financial visibility", "Field-to-office alignment"],
    preview: "reports" as const,
    reverse: false,
    surface: "mist" as const,
  },
];

export function FeaturesOutcomeStories() {
  return (
    <>
      {OUTCOMES.map((item) => {
        const wrap =
          item.surface === "soft"
            ? "bg-[#F7F8FA]"
            : item.surface === "mist"
              ? "bg-[#EEF2F7]"
              : "bg-white";
        const stage =
          item.surface === "mist"
            ? "from-[#E4EBF4] via-[#EDF1F6] to-[#DDE5EF]"
            : "from-[#E8EEF5] via-[#F0F4F9] to-[#E4EBF4]";

        return (
          <section
            key={item.id}
            id={item.id}
            className={"border-b border-brand-line/60 " + wrap}
          >
            <div className="site-shell section-spacing">
              <div
                className={
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-14 " +
                  (item.reverse ? "lg:[&>*:first-child]:order-2" : "")
                }
              >
                <Reveal>
                  <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange">
                    {item.eyebrow}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                    {item.headline}
                  </h2>
                  <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-muted">{item.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[14px] text-brand-navy">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href={CTAS.demo.href} className="btn-primary mt-8 inline-flex">
                    Book a Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>
                <Reveal delay={80}>
                  <div
                    className={
                      "relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br p-4 sm:p-5 " +
                      stage
                    }
                  >
                    <FeatureProductPreview
                      preview={item.preview}
                      framed
                      className="min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
