import { cls } from "@/utils/cls";

type Props = {
  unit: "DTA";
  quantity: string;
  isPorkHub?: boolean;
};

export default function FeedTokenQuantity({
  quantity,
  unit,
  isPorkHub,
}: Props) {
  return (
    <p
      className={cls(
        isPorkHub ? "" : "text- text-slate-S400",
        "text-body-s leading-body-s font-regular"
      )}
    >{`${quantity} ${unit}`}</p>
  );
}
