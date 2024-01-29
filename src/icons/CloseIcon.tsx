type Props = {
  width?: string;
  height?: string;
};

export default function CloseIcon({ height, width }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "14"}
      height={height || "14"}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M1.10865 14L0 12.8913L5.89135 7L0 1.10865L1.10865 0L7 5.89135L12.8913 0L14 1.10865L8.10865 7L14 12.8913L12.8913 14L7 8.10865L1.10865 14Z"
        fill="white"
      />
    </svg>
  );
}
