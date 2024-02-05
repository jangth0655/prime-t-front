import { cls } from "@/utils/cls";

type Props = {
  text: string;
  isPorkHub?: boolean;
};

export default function FeedCompleteRate({ text, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub
          ? "text-h4 leading-h4 text-slate-S200 font-bold"
          : "text-subtitle leading-subtitle text-primary-P100 font-bold",
        ""
      )}
    >
      {text}
    </p>
  );
}
