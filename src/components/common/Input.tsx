import { cls } from "@/utils/cls";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  register?: UseFormRegisterReturn;
  inputTitle?: string;
  dataType?: string;
  maxLength?: number;
  patternValue?: RegExp;
  patternMessage?: string;
  inputType?: string;
  padding?: string;
  errors?: Record<string, { message: string }> | undefined;
  textStyle?: string;
  htmlFor?: string;
  required?: boolean;
  inputPaddingRight?: number | string;
  unit?: "LTC" | "%";
  height?: number | string;
  width?: number | string;
  isTextRight?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  register,
  inputTitle,
  inputPaddingRight,
  dataType,
  patternValue,
  patternMessage,
  maxLength,
  inputType,
  padding,
  htmlFor,
  errors,
  textStyle,
  required,
  height,
  unit,
  width,
  isTextRight,
  ...props
}: Props) {
  const isDisabled = props.disabled;
  return (
    <div
      style={{
        width: width || "100%",
        height,
      }}
    >
      {inputTitle && (
        <label
          htmlFor={htmlFor}
          className={textStyle || "text-slate-S200 mb-2"}
        >
          {inputTitle}
        </label>
      )}

      <div
        style={{
          height: height || "2.5rem",
        }}
        className="relative"
      >
        <input
          style={{
            paddingRight: inputPaddingRight,
          }}
          {...props}
          className={cls(
            isDisabled ? "bg-slate-S600" : "bg-slate-S800",
            isTextRight ? "placeholder-right text-right" : "",
            "w-full border-[1px] border-slate-S500 h-full text-slate-S200 p-2 outline-none"
          )}
          autoComplete="off"
          {...register}
        />
        {unit && (
          <div className="absolute top-0 bottom-0 flex items-center text-white right-4">
            <span>{unit}</span>
          </div>
        )}
      </div>
    </div>
  );
}
