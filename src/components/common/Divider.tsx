import { cls } from "@/utils/cls";

type Props = {
  isPorkHub?: boolean;
};

export default function Divider({ isPorkHub }: Props) {
  return (
    <div className={cls(isPorkHub ? "" : "bg-slate-S200", "w-full h-2")} />
  );
}
