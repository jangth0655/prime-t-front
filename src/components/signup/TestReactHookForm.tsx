"use client";
import { UseFormRegister, useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
};
type Props = {
  label: string;
  name: string;
  registerOptions: any;
  placeholder?: string;
  type?: string;
  errors: any;
};
export default function TestReactHookForm({
  label,
  name,
  registerOptions,
  placeholder = "",
  type = "text",
  errors,
}: Props) {
  return (
    <div className="h-full ">
      <div className="text-white">react-hook-form</div>
      <div>test mode</div>

      <div>
        <label>{label}</label>
        <input
          className="text-black"
          {...registerOptions}
          name={name}
          type={type}
          onBlur={registerOptions.onBlur}
        />
      </div>
      {errors[name] && (
        <div className="text-system-S200">{errors[name].message} </div>
      )}
    </div>
  );
}
