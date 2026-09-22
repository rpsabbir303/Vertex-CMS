type Props = {
  name: string;
  role?: string | null;
  bio?: string | null;
};

/** Renders only when real speaker/name data exists in the catalog. */
export function WebinarSpeaker({ name, role, bio }: Props) {
  return (
    <div className="flex gap-4 border border-brand-line/80 bg-[#FAFCFE] px-4 py-5 sm:gap-5 sm:px-6 sm:py-6" data-design-layer="content">
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center border border-brand-line/80 bg-white font-display text-lg font-bold text-brand-navy"
        aria-hidden="true"
      >
        {name
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">Speaker</p>
        <p className="mt-1 font-display text-[1.05rem] font-bold text-brand-navy">{name}</p>
        {role ? <p className="mt-0.5 text-[14px] font-medium text-[#111827]">{role}</p> : null}
        {bio ? <p className="mt-2 text-[14px] leading-relaxed text-[#111827]">{bio}</p> : null}
      </div>
    </div>
  );
}
