import { PortfolioAnalytics } from "./mockups/ProductMockups";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { photos } from "@/lib/images";

export function ReportsAnalytics() {
  return (
    <section id="reports" className="relative overflow-hidden py-20 sm:py-28">
      <Photo src={photos.aerial} alt="Aerial view of commercial construction" overlay="light" />
      <div className="absolute inset-0 bg-brand-soft/85" aria-hidden="true" />

      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <p className="eyebrow">Reports & Analytics</p>
          <h2 className="headline mt-3 uppercase">
            See the Business
            <br />
            Behind Every Project.
          </h2>
          <p className="copy mt-4">
            Portfolio health, budget, schedule, safety, cash and risk ranking — without assembling
            weekly spreadsheets.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <PortfolioAnalytics />
        </Reveal>
      </div>
    </section>
  );
}
