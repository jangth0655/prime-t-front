"use client";

import { cls } from "@/utils/cls";
import { ButtonHTMLAttributes } from "react";

type Props = {
  isPrimaryColor?: boolean;
  primaryColor?: string;
  isColorSlate?: boolean;
  size: "XL" | "L" | "M" | "S" | "F";
  text: string;
  width?: string;
  height?: string;
  color?: string;
  border?: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SolidButton({
  isPrimaryColor,
  isColorSlate,
  text,
  size,
  onClick,
  primaryColor,
  width,
  height,
  border,
  color,
  ...props
}: Props) {
  const sizeType = {
    XL: "py-4 px-4 w-full",
    L: "p-4",
    M: "py-2 px-4",
    S: "py-1 px-4",
    F: "",
  };

  const isDisabled = props.disabled;

  return (
    <button
      {...props}
      onClick={onClick}
      style={{
        backgroundColor: isPrimaryColor ? primaryColor : "",
        width,
        height,
        border,
        color,
      }}
      className={cls(
        isDisabled ? "bg-slate-S400 text-slate-S500" : "",
        isPrimaryColor
          ? `text-slate-S100 hover:bg-primary-P400 hover:text-slate-S300`
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
