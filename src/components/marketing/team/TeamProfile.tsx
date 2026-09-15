import { TEAM_PENDING, type TeamMember } from "@/lib/marketing/team/content";

type Variant = "featured" | "leadership-support" | "spotlight" | "secondary" | "compact";

type Props = {
  member: TeamMember & { name: string };
  variant?: Variant;
};

const hoverSurface =
  "transition duration-200 ease-out group-hover:-translate-y-px group-focus-within:-translate-y-px";

function portraitAlt(member: TeamMember & { name: string }) {
  const role = member.role ? `, ${member.role}` : "";
  const demo = member.demoContent ? " (sample profile)" : "";
  return `${member.name}${role}${demo}`;
}

function roleLine(member: TeamMember & { name: string }) {
  const parts = [member.role, member.department].filter(Boolean) as string[];
  return parts.length ? parts.join(" · ") : null;
}

function ProfileCopy({
  member,
  nameClass,
  roleClass,
  bioClass,
  showBio = true,
}: {
  member: TeamMember & { name: string };
  nameClass: string;
  roleClass: string;
  bioClass: string;
  showBio?: boolean;
}) {
  const line = roleLine(member);
  return (
    <>
      <h3 className={nameClass}>{member.name}</h3>
      {line ? <p className={roleClass}>{line}</p> : null}
      {showBio && member.bio ? <p className={bioClass}>{member.bio}</p> : null}
    </>
  );
}

export function TeamProfile({ member, variant = "secondary" }: Props) {
  if (variant === "featured") {
    return (
      <article className={`group relative grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-14 ${hoverSurface}`}>
        <PhotoFrame member={member} className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[3/4] lg:max-h-[520px]" prominent />
        <div className="careers-safe-zone max-w-none lg:pl-2">
          <span className="mb-6 hidden h-px w-12 bg-brand-orange/60 lg:block" aria-hidden="true" />
          <ProfileCopy
            member={member}
            nameClass="display-title text-[1.95rem] leading-[1.08] sm:text-[2.35rem] lg:text-[2.55rem] text-brand-navy"
            roleClass="mt-3 text-[15px] font-medium tracking-[0.01em] text-brand-navy/75 sm:text-[16px]"
            bioClass="mt-6 max-w-md text-[15px] leading-[1.85] text-brand-muted sm:text-[16px]"
          />
        </div>
      </article>
    );
  }

  if (variant === "leadership-support") {
    return (
      <article
        className={`group grid grid-cols-[minmax(0,112px)_minmax(0,1fr)] items-start gap-5 border-t border-brand-navy/10 py-8 sm:grid-cols-[minmax(0,148px)_minmax(0,1fr)] sm:gap-6 lg:gap-8 ${hoverSurface}`}
      >
        <PhotoFrame member={member} className="aspect-[3/4] w-full" />
        <div className="min-w-0 pt-1">
          <ProfileCopy
            member={member}
            nameClass="text-[1.15rem] font-semibold leading-snug text-brand-navy sm:text-[1.25rem]"
            roleClass="mt-1.5 text-[13px] font-medium text-brand-navy/70 sm:text-[14px]"
            bioClass="mt-3 text-[13px] leading-[1.75] text-brand-muted sm:text-[14px] sm:leading-[1.8]"
          />
        </div>
      </article>
    );
  }

  if (variant === "spotlight") {
    return (
      <article
        className={`group relative flex h-full flex-col overflow-hidden border border-brand-navy/12 bg-white/80 sm:flex-row sm:items-stretch ${hoverSurface} hover:border-brand-navy/20`}
      >
        <span
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px scale-x-0 bg-brand-orange/70 transition duration-200 group-hover:scale-x-100 group-focus-within:scale-x-100"
          aria-hidden="true"
        />
        <PhotoFrame member={member} className="aspect-[4/5] sm:aspect-auto sm:h-auto sm:min-h-[280px] sm:w-[42%] sm:max-w-[320px] lg:min-h-[340px]" />
        <div className="flex min-w-0 flex-1 flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <ProfileCopy
            member={member}
            nameClass="display-title text-[1.45rem] leading-[1.12] text-brand-navy sm:text-[1.65rem] lg:text-[1.85rem]"
            roleClass="mt-2 text-[14px] font-medium text-brand-navy/75"
            bioClass="mt-4 max-w-lg text-[14px] leading-[1.8] text-brand-muted sm:text-[15px]"
          />
        </div>
      </article>
    );
  }

  const compact = variant === "compact";

  return (
    <article className={`group flex h-full flex-col ${hoverSurface}`}>
      <PhotoFrame member={member} className={compact ? "aspect-[3/4]" : "aspect-[3/4]"} />
      <div className="min-w-0 pt-5">
        <ProfileCopy
          member={member}
          nameClass={`font-semibold leading-snug text-brand-navy ${compact ? "text-[15px] sm:text-[16px]" : "text-[16px] sm:text-[17px]"}`}
          roleClass="mt-1.5 text-[12px] font-medium text-brand-navy/70 sm:text-[13px]"
          bioClass={`mt-3 text-[13px] leading-[1.75] text-brand-muted ${compact ? "line-clamp-2 group-hover:line-clamp-none" : "sm:leading-[1.8]"}`}
        />
      </div>
    </article>
  );
}

function PhotoFrame({
  member,
  className = "",
  prominent = false,
}: {
  member: TeamMember & { name: string };
  className?: string;
  prominent?: boolean;
}) {
  return (
    <div className={`relative min-w-0 ${className}`}>
      <span
        className={`pointer-events-none absolute -left-px -top-px z-[2] border-l border-t border-brand-orange/45 ${prominent ? "h-4 w-4" : "h-2.5 w-2.5"}`}
        aria-hidden="true"
      />
      <span
        className={`pointer-events-none absolute -bottom-px -right-px z-[2] border-b border-r border-brand-navy/15 ${prominent ? "h-4 w-4" : "h-2.5 w-2.5"}`}
        aria-hidden="true"
      />
      <PhotoBlock member={member} className="h-full w-full" />
    </div>
  );
}

function PhotoBlock({ member, className = "" }: { member: TeamMember & { name: string }; className?: string }) {
  if (member.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={member.image}
        alt={portraitAlt(member)}
        className={`h-full w-full border border-brand-navy/12 bg-[#F3F7FC] object-cover object-top ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden border border-brand-navy/12 bg-[#F3F7FC] ${className}`}
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
