import { getCustomerLogoWall } from "@/lib/marketing/customers/catalog";

import { CustomerLogoImage } from "../CustomerLogoImage";



const MAX_VISIBLE = 6;



export function CustomerLogoWallEcosystem() {

  const logos = getCustomerLogoWall().slice(0, MAX_VISIBLE);

  const topRow = logos.slice(0, 3);

  const bottomRow = logos.slice(3, 6);



  return (

    <div className="relative overflow-hidden py-1 sm:py-2">

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 720 200"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <line x1={80} y1={36} x2={640} y2={36} stroke="#DCE5EE" strokeWidth={1} />
        <line x1={360} y1={36} x2={360} y2={172} stroke="#DCE5EE" strokeWidth={1} />
        <line x1={200} y1={36} x2={200} y2={108} stroke="#DCE5EE" strokeWidth={1} strokeDasharray="4 6" />
        <line x1={520} y1={36} x2={520} y2={108} stroke="#DCE5EE" strokeWidth={1} strokeDasharray="4 6" />
        <line x1={200} y1={108} x2={520} y2={108} stroke="#DCE5EE" strokeWidth={1} />
        <line x1={200} y1={108} x2={360} y2={172} stroke="#B7C8D8" strokeWidth={1} />
        <line x1={520} y1={108} x2={360} y2={172} stroke="#B7C8D8" strokeWidth={1} />
        <circle cx={360} cy={172} r={4} fill="#FF6A00" />
      </svg>



      <div className="relative space-y-4">

        <LogoRow logos={topRow} />

        {bottomRow.length > 0 ? <LogoRow logos={bottomRow} /> : null}

        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-navy">Vertex CMS</p>

      </div>

    </div>

  );

}



function LogoRow({ logos }: { logos: ReturnType<typeof getCustomerLogoWall> }) {

  return (

    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4" role="list" aria-label="Customer logos">

      {logos.map((logo) => (

        <div

          key={logo.id}

          role="listitem"

          className={[

            "group flex h-[4.25rem] w-[8.25rem] items-center justify-center rounded-md border border-brand-line bg-white px-2 py-2 transition hover:border-brand-blue/35 hover:bg-[#FAFBFC] sm:h-[4.5rem] sm:w-[9rem]",

            logo.featured ? "ring-1 ring-brand-orange/25" : "",

          ].join(" ")}

        >

          <CustomerLogoImage logo={logo} maxHeightClass="max-h-9 sm:max-h-10" />

        </div>

      ))}

    </div>

  );

}


