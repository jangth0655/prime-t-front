type Props = {
  text: string;
  textColor: string;
  textSize: string;
  fontweight: string;
  isMultiLine?: boolean;
  leadingHeight?: string;
};

export default function Text({
  fontweight,
  text,
  textColor,
  textSize,
  isMultiLine,
  leadingHeight,
}: Props) {
  return (
    <p
      className={`${fontweight} ${textColor} ${textSize} ${leadingHeight} ${
        isMultiLine ? "line-clamp-2" : ""
      } `}
    >
      {text}
    </p>
  );
}
