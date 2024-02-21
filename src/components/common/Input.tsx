import { cls } from "@/utils/cls";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  register?: UseFormRegister<any>;
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
  inputPaddingRight?: number;
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
  ...props
}: Props) {
  const isDisabled = props.disabled;
  return (
    <div className={cls(padding ? padding : "pt-10", "w-full")}>
      {inputTitle && (
        <label htmlFor={htmlFor} className={textStyle || "text-slate-S200"}>
          {inputTitle}
        </label>
      )}
      <input
        style={{
          paddingRight: inputPaddingRight,
        }}
        {...props}
        className={cls(
          isDisabled ? "bg-slate-S600" : "bg-slate-S800",
          "mt-2 w-full border-[1px] border-solid border-slate-S500 h-10 text-slate-S200 p-2 outline-none"
        )}
        autoComplete="off"
        {...(register && (register(`${dataType}`), { required }))}
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
