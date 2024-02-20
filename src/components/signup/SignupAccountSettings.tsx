import { useForm } from "react-hook-form";
import Input from "../common/Input";
import SolidButton from "../common/SolidButton";
import { useEffect, useRef, useState } from "react";
import { cls } from "@/utils/cls";
import TestReactHookForm from "./TestReactHookForm";

type Props = {
  nextStep: () => void;
};
type FormValues = {
  password: string;
  passwordConfirm: string;
  email: string;
  auth: string;
  number: number;
};
export default function SignupAccountSettings({ nextStep }: Props) {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const password = watch("password");
  const passwordConfirm = watch("passwordConfirm");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (
      passwordConfirm &&
      passwordConfirm !== "" &&
      password !== passwordConfirm
    ) {
      setPasswordMatch("비밀번호가 일치하지 않습니다.");
    } else {
      if (
        passwordConfirm !== "" &&
        passwordConfirm !== undefined &&
        password === passwordConfirm
      ) {
        setPasswordMatch("비밀번호가 동일합니다.");
      } else {
        setPasswordMatch("");
      }
    }
  }, [password, passwordConfirm]);

  const confirm = () => {
    // nextStep으로 넘어가기 위해서는
    // 이메일 형식이 맞고 , 이메일 인증에 성공하고 , 비밀번호 형식이 맞으면 zustand 에 저장 후 nextstep 실행
    nextStep();
  };
  return (
    <div className="pt-4 relative h-full">
      <div className="text-label text-slate-S400 font-regular leading-label">
        인증한 이메일은 아이디로 사용됩니다.
      </div>

      <form>
        {/* 이메일 전송 */}
        <div>
          <div className="flex items-end">
            <div className="pt-4 w-full">
              <label className="text-slate-S300">이메일</label>
              <input
                type="text"
                className="bg-slate-S800 mt-2 w-full border-[1px] border-slate-S500 h-10 text-slate-S200 p-2 outline-none"
                autoComplete="off"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                })}
              />
            </div>

            <div className="ml-2">
              <SolidButton
                text="전송"
                size="S"
                isColorSlate
                type="button"
                width="5rem"
                height="2.5rem"
              />
            </div>
          </div>

          <div
            className={cls(
              errors.email ? "visible" : "invisible",
              "mt-2 text-system-S200 text-label leading-subtitle"
            )}
          >
            잘못된 형식의 이메일입니다.
          </div>
        </div>

        {/* 인증번호 인증 */}
        <div>
          <div className="flex items-end">
            <div className="pt-4 w-full">
              <label className="text-slate-S300">인증번호</label>
              <input
                disabled
                type="number"
                className="bg-slate-S800 mt-2 w-full border-[1px] border-slate-S500 h-10 text-slate-S200 p-2 outline-none"
                autoComplete="off"
                {...register("auth", {
                  required: true,
                  validate: (value) => value.length <= 6,
                })}
                onInput={(e) => {
                  if (e.currentTarget.value.length > 6) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, 6);
                  }
                }}
              />
            </div>
            <div className="ml-2">
              <SolidButton
                text="확인"
                size="S"
                isColorSlate
                type="button"
                width="5rem"
                height="2.5rem"
                disabled
              />
            </div>
          </div>
          <div className="mt-2 text-system-S200 text-label leading-subtitle">
            잘못된 인증번호입니다.
          </div>
        </div>

        {/* 비밀번호 */}
        <div>
          <div className="flex items-end">
            <div className="pt-4 w-full">
              <label className="text-slate-S300">비밀번호</label>
              <input
                type="password"
                className="bg-slate-S800 mt-2 w-full border-[1px] border-slate-S500 h-10 text-slate-S200 p-2 outline-none"
                autoComplete="off"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{10,}$/,
                })}
              />
            </div>
          </div>
          <div
            className={cls(
              password !== undefined
                ? errors.password
                  ? "text-system-S200"
                  : "text-system-S600"
                : "text-system-S200",
              "mt-2 text-label  font-regular leading-label"
            )}
          >
            10자 이상 영문 대/소,숫자,특수문자를 사용해야 합니다.
          </div>
        </div>

        {/* 비밀번호 확인*/}
        <div>
          <div className="flex items-end">
            <div className="pt-4 w-full">
              <label className="text-slate-S300">비밀번호 확인</label>
              <input
                type="password"
                className="bg-slate-S800 mt-2 w-full border-[1px] border-slate-S500 h-10 text-slate-S200 p-2 outline-none"
                autoComplete="off"
                {...register("passwordConfirm", {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{10,}$/,
                })}
              />
            </div>
          </div>
          <div
            className={cls(
              password === passwordConfirm
                ? "text-system-S600"
                : "text-system-S200 ",
              "mt-2 text-label leading-subtitle"
            )}
          >
            {passwordMatch}
          </div>
        </div>

        <div className="absolute bottom-6 w-full">
          <SolidButton
            text="다음"
            size="XL"
            isPrimaryColor
            primaryColor="#2d47db"
            type="button"
            onClick={confirm}
          />
        </div>
      </form>
    </div>
  );
}
