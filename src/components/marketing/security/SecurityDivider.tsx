type DividerProps = {
  className?: string;
};

export function SecurityDividerHorizontal({ className = "" }: DividerProps) {
  return (
    <div
      role="presentation"
      className={`h-px w-full shrink-0 bg-[#E8E8E8] ${className}`}
      data-figma-layer="divider-horizontal"
    />
  );
}

export function SecurityDividerVertical({ className = "" }: DividerProps) {
  return (
    <div
      role="presentation"
      className={`w-px shrink-0 self-stretch bg-[#E8E8E8] ${className}`}
      data-figma-layer="divider-vertical"
    />
  );
}
