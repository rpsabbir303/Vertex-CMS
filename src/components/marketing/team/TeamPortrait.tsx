import Image from "next/image";
import { TEAM_PENDING, type TeamMember } from "@/lib/marketing/team/content";

type Props = {
  member: TeamMember & { name: string };
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  xs: { box: "h-12 w-10", dims: 48 },
  sm: { box: "h-16 w-12", dims: 64 },
  md: { box: "h-24 w-[4.5rem]", dims: 96 },
  lg: { box: "h-40 w-32 max-w-[40vw]", dims: 160 },
} as const;

export function TeamPortrait({ member, size = "sm", className = "" }: Props) {
  const spec = sizes[size];
  const alt = `${member.name}${member.role ? `, ${member.role}` : ""}${member.demoContent ? " (sample profile)" : ""}`;

  return (
    <div
      className={`relative shrink-0 overflow-hidden border border-brand-navy/12 bg-[#F4F7FA] ${spec.box} ${className}`}
    >
      {member.image ? (
        <Image src={member.image} alt={alt} width={spec.dims} height={Math.round(spec.dims * 1.25)} className="h-full w-full object-cover object-top" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-brand-navy/[0.04] text-[9px] font-medium uppercase tracking-wider text-brand-muted">
          {TEAM_PENDING.photo}
        </div>
      )}
    </div>
  );
}
