import { cls } from "@/utils/cls";
import { formatCurrency } from "@/utils/formatNumber";

type Props = {
  unit: "DTA";
  quantity: number;
  isPorkHub?: boolean;
};

export default function FeedTokenQuantity({
  quantity,
  unit,
  isPorkHub,
}: Props) {
  const formatQuantity = formatCurrency(quantity);
  return (
    <p
      className={cls(
        isPorkHub ? "" : "text- text-slate-S400",
        "text-body-s leading-body-s font-regular"
      )}
    >{`${formatQuantity} ${unit}`}</p>
  );
}
