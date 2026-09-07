type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function FormSection({ title, description, children }: Props) {
  return (
    <section className="space-y-4 border-t border-brand-line pt-6 first:border-t-0 first:pt-0">
      <div>
        <h3 className="font-display text-lg font-bold text-brand-navy">{title}</h3>
        {description ? <p className="mt-1 text-[13px] text-brand-muted">{description}</p> : null}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
