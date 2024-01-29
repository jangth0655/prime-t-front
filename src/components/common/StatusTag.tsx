type StatusType = "progress" | "upcoming" | "closed";

type Props = {
  statusType: StatusType;
};

export default function StatusTag({ statusType }: Props) {
  const styleMap: Record<StatusType, string> = {
    progress: "bg-primary-P400",
    upcoming: "bg-slate-S500",
    closed: "bg-slate-600",
  };

  const statusText: Record<StatusType, string> = {
    progress: "진행중",
    upcoming: "모집예정",
    closed: "모집마감",
  };

  return (
    <div
      className={`${styleMap[statusType]} text-label font-regular leading-label text-slate-S200 rounded-2xl`}
    >
      {statusText[statusType]}
    </div>
  );
}
