import { getCustomerLogoWall } from "@/lib/marketing/customers/catalog";

import { CustomerLogoImage } from "../CustomerLogoImage";

/** Premium logo wall — typographic wordmarks in a divided grid (DOM + inline SVG accents). */
export function CustomerLogoWallGrid() {
  const logos = getCustomerLogoWall();

  if (logos.length === 0) return null;

  return (
    <div className="relative mt-8 sm:mt-10" data-design-layer="CustomerLogoWallGrid">
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-px w-full sm:h-8"
        width="100%"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1={0} y1={16} x2={1200} y2={16} stroke="#E8EEF5" strokeWidth={1} />
        <circle cx={600} cy={16} r={2.5} fill="#146EF5" opacity={0.35} />
        <circle cx={200} cy={16} r={2} fill="#FF6A00" opacity={0.45} />
        <circle cx={1000} cy={16} r={2} fill="#146EF5" opacity={0.3} />
      </svg>

      <ul
        className="grid grid-cols-2 divide-x divide-y divide-brand-line border border-brand-line bg-white sm:grid-cols-3 lg:grid-cols-6"
        role="list"
        aria-label="Customer companies"
      >
        {logos.map((logo) => (
          <li
            key={logo.id}
            className="flex min-h-[5.25rem] items-center justify-center px-3 py-5 sm:min-h-[6rem] sm:px-4 sm:py-6"
          >
            <CustomerLogoImage logo={logo} maxHeightClass="max-h-10 sm:max-h-11" className="w-full max-w-[9.5rem]" />
          </li>
        ))}
      </ul>
    </div>
  );
}
