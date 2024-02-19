type Props = {
  textColor?: string;
  text: string;
};

export default function FeedCaption({ text, textColor }: Props) {
  return (
    <p style={{ color: textColor }} className="text-caption leading-caption">
      {text}
    </p>
  );
}
