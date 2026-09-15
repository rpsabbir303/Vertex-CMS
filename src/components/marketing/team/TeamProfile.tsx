import { TEAM_PENDING, type TeamMember } from "@/lib/marketing/team/content";

type Variant = "featured" | "secondary" | "spotlight" | "compact";

type Props = {
  member: TeamMember & { name: string };
  variant?: Variant;
};

function portraitAlt(member: TeamMember & { name: string }) {
  const role = member.role ? `, ${member.role}` : "";
  const demo = member.demoContent ? " (sample profile)" : "";
  return `${member.name}${role}${demo}`;
}

export function TeamProfile({ member, variant = "secondary" }: Props) {
  if (variant === "featured") {
    return (
      <article className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        <PhotoBlock member={member} className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]" />
        <div className="careers-safe-zone max-w-none">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            {member.department ?? "Leadership"}
          </p>
          <h3 className="display-title mt-3 text-[1.85rem] leading-[1.1] sm:text-[2.2rem]">{member.name}</h3>
          {member.role ? <p className="mt-2 text-[15px] font-medium text-brand-navy">{member.role}</p> : null}
          {member.bio ? (
            <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-brand-muted">{member.bio}</p>
          ) : null}
        </div>
      </article>
    );
  }

  if (variant === "spotlight") {
    return (
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-brand-navy/12 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-brand-navy/25 hover:shadow-[0_8px_24px_-18px_rgba(8,35,63,0.35)] lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <PhotoBlock member={member} className="aspect-[4/5] lg:h-full lg:aspect-auto lg:min-h-[320px]" />
        <div className="flex flex-col justify-end p-5 sm:p-6 lg:p-8">
          {member.department ? (
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{member.department}</p>
          ) : null}
          <h3 className="mt-3 text-[1.35rem] font-semibold leading-snug text-brand-navy sm:text-[1.5rem]">{member.name}</h3>
          {member.role ? <p className="mt-1 text-[14px] font-medium text-brand-navy/80">{member.role}</p> : null}
          {member.bio ? <p className="mt-4 max-w-md text-[14px] leading-[1.8] text-brand-muted">{member.bio}</p> : null}
        </div>
      </article>
    );
  }

  const compact = variant === "compact";

  return (
    <article className="group flex h-full flex-col rounded-lg border border-brand-navy/12 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-brand-navy/25 hover:shadow-[0_8px_24px_-18px_rgba(8,35,63,0.35)] sm:p-6">
      <PhotoBlock member={member} className={compact ? "aspect-[4/5]" : "aspect-[4/5]"} />
      {member.department ? (
        <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">{member.department}</p>
      ) : null}
      <h3 className={`font-semibold leading-snug text-brand-navy ${member.department ? "mt-2" : "mt-5"} text-[16px] sm:text-[17px]`}>
        {member.name}
      </h3>
      {member.role ? <p className="mt-1 text-[13px] font-medium text-brand-navy/80">{member.role}</p> : null}
      {member.bio ? (
        <p className={`mt-3 text-[13px] leading-relaxed text-brand-muted ${compact ? "line-clamp-2 group-hover:line-clamp-none" : ""}`}>
          {member.bio}
        </p>
      ) : null}
    </article>
  );
}

function PhotoBlock({ member, className = "" }: { member: TeamMember & { name: string }; className?: string }) {
  if (member.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={member.image}
        alt={portraitAlt(member)}
        className={`w-full rounded-lg border border-brand-navy/12 object-cover object-top ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-brand-navy/12 bg-[#F3F7FC] ${className}`}
      role="img"
      aria-label={TEAM_PENDING.photo}
    >
      <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <line x1="24" y1="20" x2="24" y2="230" stroke="#08233F" strokeOpacity="0.05" strokeWidth="1" />
        <line x1="176" y1="20" x2="176" y2="230" stroke="#08233F" strokeOpacity="0.05" strokeWidth="1" />
        <circle cx="100" cy="96" r="28" stroke="#146EF5" strokeOpacity="0.18" strokeWidth="1" />
        <circle cx="100" cy="96" r="4" fill="#146EF5" fillOpacity="0.28" />
        <path d="M 64 176 C 80 148, 120 148, 136 176" stroke="#08233F" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="160" cy="48" r="3" fill="#FF6A00" fillOpacity="0.4" />
      </svg>
      <span className="relative font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
        {TEAM_PENDING.photo}
      </span>
    </div>
  );
}
