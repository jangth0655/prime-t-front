"use client";

import { cls } from "@/utils/cls";
import { ButtonHTMLAttributes } from "react";

export type Props = {
  isWhiteBg?: boolean;
  text: string;
  width?: string;
  height?: string;
  size: "L" | "M" | "S";
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function BorderButton({
  size,
  text,
  isWhiteBg,
  width,
  height,
  onClick,
  ...props
}: Props) {
  const sizeType = {
    L: "p-4",
    M: "py-2 px-4",
    S: "py-1 px-4",
  };

  const isDisabled = props.disabled;
  const isWhiteBgDisabled = props.disabled && isWhiteBg;

  return (
    <button
      {...props}
      onClick={onClick}
      style={{
        width,
        height,
      }}
      className={cls(
        isDisabled
          ? "text-slate-S500 bg-slate-S600 border-slate-S500"
          : isWhiteBg
            ? "bg-slate-S100 border-slate-S500 text-slate-S500 hover:bg-slate-S200 hover:border-slate-S400"
            : "text-slate-S300 border-slate-S400 bg-transparent hover:bg-white hover:bg-opacity-10",
        isWhiteBgDisabled
          ? "text-slate-S500 bg-slate-S400 border-slate-S400"
          : "",
        "border-[1px] transition-all flex justify-center items-center rounded-lg",
        sizeType[size]
      )}
    >
      {text}
    </button>
  );
}
