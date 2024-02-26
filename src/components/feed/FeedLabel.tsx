import { cls } from "@/utils/cls";

type Props = {
  label: string;
  isDark?: boolean;
  size: "sm" | "md" | "xs";
  textColor?: string;
  htmlFor?: string;
};

const styleMap = {
  xs: "text-caption leading-caption",
  sm: "text-label leading-label",
  md: "text-body leading-body",
};

export default function FeedLabel({
  label,
  isDark,
  size,
  textColor,
  htmlFor,
}: Props) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        color: textColor,
      }}
      className={cls(isDark ? "" : "", styleMap[size])}
    >
      {label}
    </label>
  );
}
