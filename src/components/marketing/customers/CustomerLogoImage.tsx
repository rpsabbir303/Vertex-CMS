import type { CustomerLogo } from "@/lib/marketing/customers/types";
import { DemoCustomerWordmark } from "./DemoCustomerWordmark";

type Props = {
  logo: CustomerLogo;
  className?: string;
  maxHeightClass?: string;
};

export function CustomerLogoImage({ logo, className = "", maxHeightClass = "max-h-12" }: Props) {
  if (logo.wordmarkLines || (!logo.src && logo.name)) {
    return (
      <div className={`flex h-full w-full items-center justify-center ${maxHeightClass} ${className}`}>
        <DemoCustomerWordmark logo={logo} />
      </div>
    );
  }

  if (!logo.src) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- approved CMS marketing logos
    <img
      src={logo.src}
      alt={logo.alt}
      width={160}
      height={48}
      className={`mx-auto w-full ${maxHeightClass} object-contain object-center ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
