import { cls } from "@/utils/cls";

type Props = {
  unitInfo: string;
  isPorkHub?: boolean;
};

export default function FeedIssueUnitInfo({ unitInfo, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub ? "" : "text-slate-S400",
        "text-caption leading-caption"
      )}
    >
      {unitInfo}
    </p>
  );
}
