import Image from "next/image";
import { TEAM_PENDING, type TeamMember } from "@/lib/marketing/team/content";

type Props = {
  member: TeamMember & { name: string };
};

export function TeamGalleryMember({ member }: Props) {
  const alt = `${member.name}${member.role ? `, ${member.role}` : ""}${member.demoContent ? " (sample profile)" : ""}`;

  return (
    <article className="group flex min-w-0 flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-navy/10 bg-[#F4F7FA]">
        {member.image ? (
          <Image
            src={member.image}
            alt={alt}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
            className="object-cover object-top transition duration-300 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[11px] uppercase tracking-wider text-brand-muted">
            {TEAM_PENDING.photo}
          </div>
        )}
      </div>
      <div className="mt-3 min-w-0 pt-3 border-t border-brand-navy/[0.08] transition duration-200 group-hover:border-brand-orange/35">
        <h3 className="text-[1rem] font-semibold leading-snug text-[#08233F] sm:text-[1.05rem]">{member.name}</h3>
        {member.role ? <p className="mt-1 text-[13px] font-medium text-[#111827]">{member.role}</p> : null}
        {member.bio ? (
          <p className="mt-2 line-clamp-2 text-[13px] leading-[1.55] text-[#111827]">{member.bio}</p>
        ) : null}
      </div>
    </article>
  );
}
