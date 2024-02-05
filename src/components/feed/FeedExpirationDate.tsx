import { cls } from "@/utils/cls";

// 우선 임시 date
type Props = {
  date: string;
  isPorkHub?: boolean;
};

export default function FeedExpirationDate({ date, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub
          ? ""
          : "text-label leading-label text-slate-S400 font-regular",
        ""
      )}
    >
      {date} 마감
    </p>
  );
}
