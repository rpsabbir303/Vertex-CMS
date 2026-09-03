import { FeaturePoints, LearnMore } from "./SectionBits";
import { PhoneUI, ScheduleUI } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

export function BuildOperate() {
  return (
    <section id="build" className="bg-brand-soft py-20 sm:py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <p className="eyebrow">Build & Operate</p>
          <h2 className="headline mt-3">Your field and office stay connected.</h2>
          <p className="copy mt-4">
            Capture daily logs, workforce, equipment, schedule progress, and photos — then sync to
            the project record.
          </p>
          <FeaturePoints
            items={[
              "Daily logs & field updates",
              "Workforce & equipment",
              "Schedule & look-ahead",
              "Photos, tasks & RFIs",
            ]}
          />
          <LearnMore href="/features/field-operations" label="Learn more about Field Operations" />
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-5">
            <ScheduleUI />
            <div className="flex flex-wrap items-end justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:gap-4">
              <PhoneUI variant="home" />
              <PhoneUI variant="log" raised />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
