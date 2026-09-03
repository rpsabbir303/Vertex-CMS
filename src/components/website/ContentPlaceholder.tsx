type Props = {
  children?: React.ReactNode;
  message?: string;
};

export function ContentPlaceholder({ children, message }: Props) {
  return (
    <div className="rounded-lg border border-dashed border-brand-line bg-[#FAFAF8] px-6 py-12 text-center sm:px-10">
      {children ?? (
        <p className="text-sm text-brand-muted">{message ?? "Page content will be designed next."}</p>
      )}
    </div>
  );
}
