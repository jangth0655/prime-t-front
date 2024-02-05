import { cls } from "@/utils/cls";

type Props = {
  text: string;
  isPorkHub?: boolean;
};

export default function FeedEntity({ text, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub
          ? ""
          : "text-slate-S400 text-label leading-label font-regular",
        ""
      )}
    >
      {text}
    </p>
  );
}
