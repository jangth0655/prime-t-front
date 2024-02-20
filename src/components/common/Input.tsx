import { cls } from "@/utils/cls";
import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister, ValidationRule } from "react-hook-form";

type Props = {
  register: UseFormRegister<any>;
  inputTitle: string;
  dataType: string;
  maxLength: number;
  patternValue?: RegExp;
  patternMessage?: string;
  inputType: string;
  padding?: string;
  errors?: Record<string, { message: string }> | undefined;
  textStyle?: string;
  htmlFor?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  register,
  inputTitle,
  dataType,
  patternValue,
  patternMessage,
  maxLength,
  inputType,
  padding,
  htmlFor,
  errors,
  textStyle,
  ...props
}: Props) {
  const isDisabled = props.disabled;
  return (
    <div className={cls(padding ? padding : "pt-10", "w-full")}>
      <label
        htmlFor={htmlFor}
        className={textStyle ? textStyle : "text-slate-S200"}
      >
        {inputTitle}
      </label>
      <input
        {...props}
        className={cls(
          isDisabled ? "bg-slate-S600" : "bg-slate-S800",
          "mt-2 w-full border-[1px] border-solid border-slate-S500 h-10 text-slate-S200 p-2 outline-none"
        )}
        id={dataType}
        type={inputType}
        autoComplete="off"
        {...(register(`${dataType}`), { required: true })}
      />
    </div>
  );
}

{
  /* <div className="pt-4 w-full">
              <label className="text-slate-S200">이메일</label>
              <input
                className="bg-slate-S800 mt-2 w-full border-[1px] border-slate-S500 h-10 text-slate-S200 p-2 outline-none"
                autoComplete="off"
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: "잘못된 형식의 이메일입니다.",
                  },
                })}
              />
            </div> */
}
