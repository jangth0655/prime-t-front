import { cls } from "@/utils/cls";

type Props = {
  text: string;
  isDark?: boolean;
  bgColor?: string;
  textColor?: string;
  size: "sm" | "md";
  fontWeightNumber?: number;
};

const styleMap = {
  sm: "text-label leading-label",
  md: "text-subtitle leading-subtitle",
};

export default function FeedCompleteRate({
  text,
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
      <p className={cls(isDark ? "" : "", `${styleMap[size]}`)}>{text}</p>
    </div>
  );
}
