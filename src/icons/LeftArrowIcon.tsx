type Props = {
  color?: string;
};

export default function LeftArrowIcon({ color }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <mask
        id="mask0_89_995"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect width="16" height="16" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_89_995)">
        <path
          d="M11.8465 16L4 8L11.8465 0L13 1.17607L6.30703 8L13 14.8239L11.8465 16Z"
          fill={color || "#D9D9D9"}
        />
      </g>
    </svg>
  );
}
