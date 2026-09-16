import { Reveal } from "@/components/Reveal";
import { SecurityLiveEyebrow, SecurityMeasure, SecurityPaper } from "./SecuritySurface";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  supplemental?: React.ReactNode;
};

export function SecuritySection({ id, eyebrow, title, description, children, supplemental }: Props) {
  return (
    <>
      <SecurityPaper className="border-b border-[#C5DDB8]">
        <SecurityMeasure className="py-14 text-center sm:py-16 lg:py-20">
          {eyebrow ? <SecurityLiveEyebrow>{eyebrow}</SecurityLiveEyebrow> : null}
          <h2
            id={id}
            className={`mx-auto max-w-[16em] font-display text-[1.85rem] font-bold leading-[1.15] tracking-[-0.03em] text-[#0D0D0D] sm:text-[2.4rem] ${
              eyebrow ? "mt-4" : ""
            }`}
          >
            {title}
          </h2>
          {description ? (
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-[#5C6560]">{description}</p>
          ) : null}
        </SecurityMeasure>
      </SecurityPaper>
      <section className="border-b border-[#E8E8E8] bg-white">
        <div className={`grid ${supplemental ? "lg:grid-cols-2" : ""}`}>
          <SecurityMeasure className="py-12 sm:py-14 lg:max-w-none">
            <Reveal delay={50}>{children}</Reveal>
          </SecurityMeasure>
          {supplemental ? (
            <div className="border-t border-[#E8E8E8] bg-[#F7F7F7] lg:border-l lg:border-t-0">
              <SecurityMeasure className="py-12 sm:py-14 lg:max-w-none">{supplemental}</SecurityMeasure>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
