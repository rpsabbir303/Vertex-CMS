import { COMPARISONS_LANDING } from "@/lib/marketing/comparisons/landing";



import { ComparisonsSectionHeader } from "./ComparisonsSectionHeader";

import { ComparisonFrameworkDiagram } from "./visuals/ComparisonFrameworkDiagram";



export function ComparisonsFrameworkSection() {

  const { framework } = COMPARISONS_LANDING;



  return (

    <section

      id={framework.id}

      className="relative scroll-mt-28 border-b border-brand-line/60 bg-white"

      aria-labelledby="comparisons-framework-heading"

    >

      <div className="resource-detail-shell relative z-[1] py-10 sm:py-12 lg:py-14">

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-12 lg:items-start">

          <div className="min-w-0">

            <ComparisonsSectionHeader eyebrow={framework.eyebrow} headline={framework.headline} />

            <h2 id="comparisons-framework-heading" className="sr-only">

              {framework.headline}

            </h2>

            <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-[#111827]">

              Each supported comparison organizes documented capability areas, connected workflows, operating model context,

              and team-fit considerations in a consistent structure.

            </p>

          </div>

          <ComparisonFrameworkDiagram pillars={[...framework.pillars]} flow={framework.flow} />

        </div>

      </div>

    </section>

  );

}


