import { TEAM_PENDING, type TeamMember } from "@/lib/marketing/team/content";

export type TeamProfileVariant =
  | "leadership-portrait"
  | "leadership-copy"
  | "leadership-row"
  | "featured-primary"
  | "featured-secondary"
  | "index";

type Props = {
  member: TeamMember & { name: string };
  variant?: TeamProfileVariant;
  index?: number;
};

function roleLine(member: TeamMember & { name: string }) {
  const parts = [member.role, member.department].filter(Boolean) as string[];
  return parts.length ? parts.join(" · ") : null;
}

function portraitAlt(member: TeamMember & { name: string }) {
  const role = member.role ? `, ${member.role}` : "";
  return `${member.name}${role}${member.demoContent ? " (sample profile)" : ""}`;
}

export function TeamProfile({ member, variant = "index", index = 0 }: Props) {
  const line = roleLine(member);

  if (variant === "leadership-portrait") {
    return (
      <div className="group relative min-w-0">
        <span className="pointer-events-none absolute left-0 top-0 z-[2] h-4 w-4 border-l border-t border-brand-orange/55" aria-hidden="true" />
        <TeamPortrait member={member} className="aspect-[3/4] w-full max-h-[420px] lg:max-h-[480px]" scale="md" />
      </div>
    );
  }

  if (variant === "leadership-copy") {
    return (
      <div className="careers-safe-zone min-w-0">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="font-mono text-[11px] font-semibold text-brand-orange">01</span>
          <span className="h-px w-10 bg-brand-orange/50" />
        </div>
        <h3 className="display-title mt-4 text-[1.75rem] leading-[1.08] text-[#08233F] sm:text-[2rem]">{member.name}</h3>
        {line ? <p className="mt-2 text-[15px] font-medium text-[#111827]">{line}</p> : null}
        {member.bio ? <p className="mt-5 max-w-md text-[15px] leading-[1.85] text-[#111827]">{member.bio}</p> : null}
      </div>
    );
  }

  if (variant === "leadership-row") {
    return (
      <article className="group grid grid-cols-[72px_minmax(0,1fr)] gap-4 border-t border-brand-navy/10 py-5 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-5">
        <TeamPortrait member={member} className="aspect-[3/4] w-full" scale="sm" />
        <div className="min-w-0 border-l border-transparent pl-0 transition duration-200 group-hover:border-brand-orange/40 group-hover:pl-3">
          <h3 className="text-[1rem] font-semibold text-[#08233F] sm:text-[1.05rem]">{member.name}</h3>
          {line ? <p className="mt-1 text-[13px] font-medium text-[#111827]">{line}</p> : null}
          {member.bio ? <p className="mt-2 text-[13px] leading-[1.7] text-[#111827] line-clamp-2 sm:line-clamp-none">{member.bio}</p> : null}
        </div>
      </article>
    );
  }

  if (variant === "featured-primary") {
    return (
      <article className="group grid gap-6 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:items-end">
        <TeamPortrait member={member} className="aspect-[3/4] w-full md:max-w-[280px]" scale="lg" />
        <div className="border-t border-brand-navy/10 pt-5 md:border-t-0 md:border-l md:pl-8 md:pt-0 transition duration-200 group-hover:border-brand-orange/35">
          <h3 className="display-title text-[1.35rem] leading-[1.12] text-[#08233F] sm:text-[1.5rem]">{member.name}</h3>
          {line ? <p className="mt-2 text-[14px] font-medium text-[#111827]">{line}</p> : null}
          {member.bio ? <p className="mt-3 text-[14px] leading-[1.75] text-[#111827]">{member.bio}</p> : null}
        </div>
      </article>
    );
  }

  if (variant === "featured-secondary") {
    return (
      <article className="group flex gap-3 sm:flex-col sm:gap-0">
        <TeamPortrait member={member} className="aspect-[3/4] w-20 shrink-0 sm:w-full sm:max-h-[140px]" scale="sm" />
        <div className="min-w-0 border-t border-transparent pt-0 sm:mt-3 sm:border-brand-navy/10 sm:pt-3 group-hover:border-brand-orange/35">
          <h3 className="text-[14px] font-semibold text-[#08233F]">{member.name}</h3>
          {line ? <p className="mt-1 text-[11px] font-medium text-[#111827]">{line}</p> : null}
        </div>
      </article>
    );
  }

  return (
    <article className="group grid grid-cols-[64px_minmax(0,1fr)] gap-4 border-b border-brand-navy/10 py-5 sm:grid-cols-[72px_minmax(0,1fr)]">
      <div className="relative pt-1">
        <span className="absolute -left-0 top-0 font-mono text-[10px] font-semibold tabular-nums text-brand-orange">
          {String(index + 1).padStart(2, "0")}
        </span>
        <TeamPortrait member={member} className="aspect-square w-full max-w-[64px] sm:max-w-[72px]" scale="xs" />
      </div>
      <div className="min-w-0 self-center transition duration-200 group-hover:pl-1">
        <h3 className="text-[15px] font-semibold text-[#08233F]">{member.name}</h3>
        {line ? <p className="mt-1 text-[13px] font-medium text-[#111827]">{line}</p> : null}
        {member.bio ? <p className="mt-2 text-[13px] leading-[1.7] text-[#111827]">{member.bio}</p> : null}
      </div>
    </article>
  );
}

function TeamPortrait({
  member,
  className,
  scale,
}: {
  member: TeamMember & { name: string };
  className?: string;
  scale: "xs" | "sm" | "md" | "lg";
}) {
  const hover =
    scale === "lg" ? "group-hover:scale-[1.015]" : scale === "md" ? "group-hover:scale-[1.02]" : "group-hover:scale-[1.03]";

  if (member.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={member.image}
        alt={portraitAlt(member)}
        className={`h-full w-full border border-brand-navy/10 bg-[#F3F7FC] object-cover object-top transition duration-200 ease-out motion-reduce:transform-none ${hover} ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-brand-navy/10 bg-[#F3F7FC] text-[9px] font-semibold uppercase tracking-wider text-brand-muted ${className}`}
      role="img"
      aria-label={TEAM_PENDING.photo}
    >
      {TEAM_PENDING.photo}
    </div>
  );
}
