import { cls } from "@/utils/cls";

type Props = {
  text: string;
  isPorkHub?: boolean;
};

export default function FeedTitle({ text, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub
          ? "text-slate-S200 text-body leading-body font-bold"
          : "text-slate-S900 text-body-s leading-body-s font-regular",
        "line-clamp-2"
      )}
    >
      {text}
    </p>
  );
}
