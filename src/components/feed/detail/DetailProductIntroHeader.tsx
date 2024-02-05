import { cls } from "@/utils/cls";

type Props = {
  title?: string;
  isPorkHub?: boolean;
};
export default function DetailProductIntroHeader({ title, isPorkHub }: Props) {
  return (
    <p
      className={cls(
        isPorkHub
          ? ""
          : "text-black text-body leading-body font-regular border-b-slate-S200",
        "flex justify-center items-center py-4 border-b-[1px]"
      )}
    >
      {title || "상품소개"}
    </p>
  );
}
