import { cls } from "@/utils/cls";

type Props = {
  amount: string;
  isPorkHub?: boolean;
};

export default function DetailAmount({ amount, isPorkHub }: Props) {
  return (
    <p className={cls(isPorkHub ? "" : "text-h4 leading-h4 font-bold", "")}>
      {amount}원
    </p>
  );
}
