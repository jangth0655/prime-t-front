import { cls } from "@/utils/cls";

type Props = {
  isPorkHub?: boolean;
  type: "lg" | "md" | "sm";
};

const styleMap = {
  sm: "h-[0.0625rem]",
  md: "h-[1rem]",
  lg: "h-[2rem]",
};

export default function Divider({ isPorkHub, type }: Props) {
  const style = styleMap[type];
  return (
    <div className={cls(isPorkHub ? "" : "bg-slate-S200", `w-full ${style}`)} />
  );
}
