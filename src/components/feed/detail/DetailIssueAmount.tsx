import { cls } from "@/utils/cls";

type Props = {
  issueAmount: number;
  isPorkHub?: boolean;
};

export default function DetailIssueAmount({ issueAmount, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub
          ? ""
          : "text-label leading-label text-slate-S400 font-regular",
        ""
      )}
    >
      {issueAmount}
    </p>
  );
}
