import { cls } from "@/utils/cls";

type Props = {
  text: string;
  isPorkHub?: boolean;
};

export default function DetailCompleteRate({ text, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub ? "" : "text-h4 leading-h4 text-primary-P100 font-bold",
        ""
      )}
    >
      {text}
    </p>
  );
}
