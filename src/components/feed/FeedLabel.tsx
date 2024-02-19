import { cls } from "@/utils/cls";

type Props = {
  label: string;
  isDark?: boolean;
  size: "sm" | "md";
  textColor?: string;
};

const styleMap = {
  sm: "text-label leading-label",
  md: "text-body leading-body",
};

export default function FeedLabel({ label, isDark, size, textColor }: Props) {
  return (
    <p
      style={{
        color: textColor,
      }}
      className={cls(isDark ? "" : "", styleMap[size])}
    >
      {label}
    </p>
  );
}
