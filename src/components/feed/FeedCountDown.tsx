import { cls } from "@/utils/cls";

type Props = {
  date: string;
  isPorkHub?: boolean;
};

export default function FeedCountDown({ date, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub ? "" : "text-primary-P100",
        "text-label leading-label"
      )}
    >{`${date}일 남음`}</p>
  );
}
