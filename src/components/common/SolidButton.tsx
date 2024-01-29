"use client";

import { cls } from "@/utils/cls";
import { ButtonHTMLAttributes } from "react";

type Props = {
  isColorPrimary?: boolean;
  isColorSlate?: boolean;
  size: "L" | "M" | "S";
  text: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SolidButton({
  isColorPrimary,
  isColorSlate,
  text,
  size,
  onClick,
  ...props
}: Props) {
  const sizeType = {
    L: "p-4",
    M: "py-2 px-4",
    S: "py-1 px-4",
  };

  const isDisabled = props.disabled;

  return (
    <button
      {...props}
      onClick={onClick}
      className={cls(
        isDisabled ? "bg-slate-S400 text-slate-S500" : "",
        isColorPrimary
          ? "bg-primary-P300 text-slate-S100 hover:bg-primary-P400 hover:text-slate-S300"
          : "",
        isColorSlate ? "bg-slate-S300 text-black hover:bg-slate-S400" : "",
        "text-body leading-body font-regular flex justify-center items-center rounded-lg transition-all",
        sizeType[size]
      )}
    >
      {text}
    </button>
  );
}
