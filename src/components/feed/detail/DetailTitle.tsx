import { cls } from "@/utils/cls";

type Props = {
  text: string;
  isPorkHub?: boolean;
};

export default function DetailTitle({ text, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub ? "" : "text-body leading-body text-slate-900 font-regular",
        ""
      )}
    >
      {text}
    </p>
  );
}
