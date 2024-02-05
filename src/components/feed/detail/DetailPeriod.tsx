import { cls } from "@/utils/cls";

type Props = {
  date: string;
  isPorkHub?: boolean;
};

export default function DetailPeriod({ date, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub
          ? ""
          : "text-label leading-label text-slate-S400 font-regular",
        ""
      )}
    >
      {date}
    </p>
  );
}
