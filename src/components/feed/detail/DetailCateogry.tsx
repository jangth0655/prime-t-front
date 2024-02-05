import { cls } from "@/utils/cls";

type Props = {
  text: string;
  isPorkHub?: boolean;
};

export default function DetailCategory({ text, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub
          ? ""
          : "text-label leading-label text-slate-S300 font-regular",
        ""
      )}
    >
      {text}
    </p>
  );
}
