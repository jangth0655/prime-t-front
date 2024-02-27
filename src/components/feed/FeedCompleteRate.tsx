import { cls } from "@/utils/cls";

type Props = {
  rate: string | number;
  isDark?: boolean;
  bgColor?: string;
  textColor?: string;
  size: "sm" | "md" | "xs";
  fontWeightNumber?: number;
};

const styleMap = {
  xs: "text-caption leading-caption",
  sm: "text-label leading-label",
  md: "text-subtitle leading-subtitle",
};

export default function FeedCompleteRate({
  rate,
  isDark,
  bgColor,
  textColor,
  size,
  fontWeightNumber,
}: Props) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontWeight: fontWeightNumber,
      }}
      className={cls(
        bgColor ? "px-2 py-1 rounded-xl" : "",
        isDark ? "" : "",
        ""
      )}
    >
      <p className={cls(isDark ? "" : "", `${styleMap[size]}`)}>{rate}</p>
    </div>
  );
}
