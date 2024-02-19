import { cls } from "@/utils/cls";

type Props = {
  date?: string;
  isPorkHub?: boolean;
  startDate?: string;
  endDate?: string;
};

export default function FeedPeriodWithRange({
  date,
  isPorkHub,
  endDate,
  startDate,
}: Props) {
  return (
    <div
      className={cls(
        isPorkHub
          ? ""
          : "text-label leading-label text-slate-S400 font-regular flex space-x-1",
        ""
      )}
    >
      {date ? (
        <p>{date}</p>
      ) : (
        <div className="flex items-center space-x-1">
          <p>{startDate}</p>
          <span>~</span>
          <p>{endDate}</p>
        </div>
      )}
    </div>
  );
}
