import Image from "next/image";
import { TEAM_PENDING, teamHero, resolveMemberById, type TeamMember } from "@/lib/marketing/team/content";

type Props = {
  members: TeamMember[];
};

const positions = [
  { id: teamHero.networkMemberIds[0], className: "left-1/2 top-0 z-[3] -translate-x-1/2", w: "w-[88px] sm:w-[100px] lg:w-[112px]" },
  { id: teamHero.networkMemberIds[1], className: "left-0 top-[38%] z-[2]", w: "w-[72px] sm:w-[84px] lg:w-[96px]" },
  { id: teamHero.networkMemberIds[2], className: "right-0 top-[38%] z-[2]", w: "w-[72px] sm:w-[84px] lg:w-[96px]" },
  { id: teamHero.networkMemberIds[3], className: "left-[18%] bottom-0 z-[2]", w: "w-[68px] sm:w-[76px] lg:w-[88px]" },
  { id: teamHero.networkMemberIds[4], className: "right-[18%] bottom-0 z-[2]", w: "w-[68px] sm:w-[76px] lg:w-[88px]" },
] as const;

export function TeamHeroNetwork({ members }: Props) {
  const nodes = positions
    .map((pos) => {
      const member = resolveMemberById(members, pos.id);
      return member?.image ? { ...pos, member, image: member.image } : null;
    })
    .filter(Boolean) as Array<(typeof positions)[number] & { member: TeamMember & { name: string }; image: string }>;

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[420px] sm:max-w-[480px]" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" fill="none">
        <line x1="200" y1="52" x2="200" y2="118" stroke="rgba(8,35,63,0.18)" strokeWidth="1" />
        <line x1="200" y1="118" x2="200" y2="148" stroke="rgba(8,35,63,0.18)" strokeWidth="1" />
        <line x1="72" y1="132" x2="200" y2="148" stroke="rgba(8,35,63,0.18)" strokeWidth="1" />
        <line x1="328" y1="132" x2="200" y2="148" stroke="rgba(8,35,63,0.18)" strokeWidth="1" />
        <line x1="128" y1="248" x2="200" y2="168" stroke="rgba(8,35,63,0.18)" strokeWidth="1" />
        <line x1="272" y1="248" x2="200" y2="168" stroke="rgba(8,35,63,0.18)" strokeWidth="1" />
        <circle cx="200" cy="148" r="4" fill="#E85D2C" />
      </svg>
      {nodes.map(({ member, image, className, w }) => {
        const alt = `${member.name}${member.role ? `, ${member.role}` : ""}`;
        return (
          <div
            key={member.id}
            className={`absolute ${className} ${w} overflow-hidden border border-brand-navy/12 bg-[#F4F7FA] shadow-[0_8px_24px_-16px_rgba(8,35,63,0.25)]`}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image src={image} alt={alt} fill sizes="120px" className="object-cover object-top" />
            </div>
          </div>
        );
      })}
      {!nodes.length ? (
        <div className="flex h-full items-center justify-center text-[11px] text-brand-muted">{TEAM_PENDING.photo}</div>
      ) : null}
    </div>
  );
}
