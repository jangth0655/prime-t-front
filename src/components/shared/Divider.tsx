import { cls } from "@/utils/cls";

type Props = {
  isPorkHub?: boolean;
  type: "lg" | "md" | "sm" | "xs";
};

const styleMap = {
  xs: "h-[0.0625rem]",
  sm: "h-[0.5rem]",
  md: "h-[1rem]",
  lg: "h-[2rem]",
};

export default function Divider({ isPorkHub, type }: Props) {
  const style = styleMap[type];
  return (
    <div className={cls(isPorkHub ? "" : "bg-slate-S200", `w-full ${style}`)} />
  );
}
