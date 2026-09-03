import Image from "next/image";
import type { TeamMember } from "@/lib/website/tenantData";

type Props = {
  member: TeamMember;
};

export function TeamMemberCard({ member }: Props) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          className="image-hover-zoom object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="text-sm leading-relaxed text-slate-200">{member.bio}</p>
        </div>
      </div>
      <div className="mt-5 border-l-2 border-transparent pl-0 transition-all duration-300 group-hover:border-brand-orange group-hover:pl-4">
        <h3 className="font-display text-xl font-bold text-brand-navy">{member.name}</h3>
        <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-orange">
          {member.role}
        </p>
      </div>
    </article>
  );
}
