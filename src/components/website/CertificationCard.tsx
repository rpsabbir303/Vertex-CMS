import Image from "next/image";
import type { Certification } from "@/lib/website/tenantData";

type Props = {
  certification: Certification;
};

export function CertificationCard({ certification }: Props) {
  return (
    <article className="border border-brand-line bg-white p-6 sm:p-8">
      {certification.image && (
        <div className="relative mb-5 h-12 w-12">
          <Image
            src={certification.image}
            alt=""
            fill
            className="object-contain"
            sizes="48px"
          />
        </div>
      )}
      <h3 className="font-display text-lg font-bold text-brand-navy">{certification.name}</h3>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-orange">
        {certification.issuer}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted">{certification.description}</p>
    </article>
  );
}
