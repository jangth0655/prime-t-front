import { cls } from "@/utils/cls";

type Props = {
  unitInfo: string;
  isPorkHub?: boolean;
  size: "sm" | "md" | "xs";
};

const styleMap = {
  xs: "text-caption leading-caption",
  sm: "text-label leading-label",
  md: "text-body leading-body",
};

export default function FeedIssueUnitInfo({
  unitInfo,
  isPorkHub,
  size,
}: Props) {
  return (
    <p className={cls(isPorkHub ? "" : "text-slate-S400", styleMap[size])}>
      {unitInfo}
    </p>
  );
}
