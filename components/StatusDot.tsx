type Status = "online" | "away" | "offline";

export default function StatusDot({ status }: { status: Status }) {
  const colors: Record<Status, string> = {
    online: "bg-emerald-400",
    away: "bg-amber-400",
    offline: "bg-slate-400",
  };

  return (
    <span
      aria-label={`Status: ${status}`}
      className={`
        inline-block
        aspect-square
        h-5
        rounded-full
        box-border
        border-[3px] border-slate-950
        ${colors[status]}
      `}
    />
  );
}
