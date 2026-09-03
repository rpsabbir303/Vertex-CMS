import Image from "next/image";
import type { Service } from "@/lib/website/tenantData";

type Props = {
  service: Service;
  title: string;
  description: string;
};

export function ServiceItem({ service, title, description }: Props) {
  return (
    <article className="group border border-brand-line bg-white">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={title}
          fill
          className="image-hover-zoom object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
          {service.number}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold text-brand-navy">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted">{description}</p>
      </div>
    </article>
  );
}
