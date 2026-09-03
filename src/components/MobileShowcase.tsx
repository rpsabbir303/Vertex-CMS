import Link from "next/link";
import { ArrowRight } from "./Icons";
import { PhoneUI } from "./mockups/ProductMockups";
import { Reveal } from "./Reveal";

export function MobileShowcase() {
  return (
    <section id="mobile" className="bg-white py-20 sm:py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow-blue">Mobile Experience</p>
          <h2 className="headline mt-3">Stay connected from the field.</h2>
          <p className="copy mt-4">
            Field-first mobile capture for daily logs, photos, tasks, and project status — including
            offline sync when connectivity is limited.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-brand-navy">
            {["Project dashboard", "Daily field log", "Photos & GPS", "Tasks & notifications"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                {t}
              </li>
            ))}
          </ul>
          <Link href="/features/connected-experience" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:gap-3">
            Explore Mobile & Portals
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap items-end justify-center gap-3 sm:gap-5">
            <PhoneUI variant="home" />
            <PhoneUI variant="log" raised />
            <PhoneUI variant="capture" />
          </div>
          <p className="mt-6 text-center text-xs font-semibold text-brand-orange">
            Offline Mode · Syncing when connection returns
          </p>
        </Reveal>
      </div>
    </section>
  );
}
