import { cls } from "@/utils/cls";

type Props = {
  issueAmount: string;
  isPorkHub?: boolean;
  unit?: "DTA" | "LTC" | "%";
  type: "sm" | "md";
  amountColor?: string;
  unitColor?: string;
  isBold?: boolean;
};

const styleMap = {
  sm: "text-label leading-label",
  md: "text-body leading-body",
};

export default function DetailIssueAmount({
  issueAmount,
  isPorkHub,
  unit,
  type,
  amountColor,
  unitColor,
  isBold,
}: Props) {
  return (
    <p
      className={cls(
        isPorkHub ? "" : "",
        `${styleMap[type]} flex items-center space-x-1`
      )}
    >
      <span
        style={{ color: amountColor || "#797D9E" }}
        className={isBold ? "font-bold" : "font-regular"}
      >
        {issueAmount}
      </span>
      <span style={{ color: unitColor || "#797D9E" }}>{unit}</span>
    </p>
  );
}
