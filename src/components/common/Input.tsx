import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<any>;
  inputTitle: string;
  dataType: string;
  maxLength: number;
  inputType: string;
};

export default function Input({
  register,
  inputTitle,
  dataType,
  maxLength,
  inputType,
}: Props) {
  return (
    <div className="pt-10">
      <div className="text-slate-S200">{inputTitle}</div>
      <input
        className="mt-2 w-full bg-slate-S800 border-[1px] border-solid border-slate-S500 h-10 text-slate-S200 p-2 outline-none"
        type={inputType}
        autoComplete="off"
        {...register(`${dataType}`, { maxLength: maxLength })}
      />
    </div>
  );
}
