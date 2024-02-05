import { StatusCategoryKey, StatusCategoryType } from "../StatusCategory";

type Props = {
  statusType: StatusCategoryType;
};

export default function StatusTag({ statusType }: Props) {
  const styleMap: Partial<Record<StatusCategoryKey, string>> = {
    progress: "bg-primary-P400",
    upcoming: "bg-slate-S500",
    close: "bg-slate-600",
  };

  return (
    <div
      className={`${
        styleMap[statusType.key]
      } text-label font-regular leading-label text-slate-S200 rounded-2xl px-2 py-1`}
    >
      {statusType.name}
    </div>
  );
}
