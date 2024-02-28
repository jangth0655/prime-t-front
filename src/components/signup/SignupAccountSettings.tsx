import { useForm } from "react-hook-form";
import Input from "../common/Input";
import SolidButton from "../common/SolidButton";
import { cls } from "@/utils/cls";
import { useState } from "react";
import axios from "axios";
import { useSignupEmail, useSignupPassword } from "@/store/useSignupStore";

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
  const { setEmailState } = useSignupEmail();
  const { setPasswordState } = useSignupPassword();
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });
  const password = watch("password");
  const passwordConfirm = watch("passwordConfirm");
  const auth = watch("auth");
  const email = watch("email");
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [emailTransmission, setEmailTransmission] = useState(false);
  const [emailNotAvailable, setEmailNotAvailable] = useState(false);
  const onEmailDuplicationCheck = () => {
    if (!errors.email && email) {
      if (emailConfirm) {
        setEmailTransmission(true);
      } else {
        axios
          .post(`api/v1/users/email/${email}`)
          .then((res) => {
            setEmailConfirm(true);
            setEmailState(email);
          })
          .catch((err) => {
            setEmailNotAvailable(true);
          });
      }
    }
  };
  const onEmailChange = (e: any) => {
    setEmailConfirm(false);
    setEmailTransmission(false);
    setEmailNotAvailable(false);
  };
  const onEmailAuthCheck = () => {};

  const onConfirm = () => {
    // nextStep으로 넘어가기 위해서는
    // 이메일 형식이 맞고 , 이메일 인증에 성공하고 , 비밀번호 형식이 맞으면 zustand 에 저장 후 nextstep 실행
    if (emailConfirm && password === passwordConfirm) {
      setPasswordState(password);
      nextStep();
    }
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
              <Input
                label="이메일"
                labelStyle="mb-2"
                type="text"
                register={register("email", {
                  onChange: onEmailChange,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
            </div>

            <div className="ml-2">
              <SolidButton
                text={
                  errors.email || !email
                    ? "중복확인"
                    : emailTransmission
                    ? "재전송"
                    : emailConfirm
                    ? "전송"
                    : "중복확인"
                }
                size="F"
                isColorSlate
                type="button"
                width="5rem"
                height="2.5rem"
                onClick={onEmailDuplicationCheck}
              />
            </div>
          </div>

          <div
            className={cls(
              errors.email
                ? "visible text-system-S200"
                : emailConfirm
                ? "visible text-system-S600"
                : emailNotAvailable
                ? "visible text-system-S200"
                : "invisible",
              "mt-2  text-label leading-subtitle"
            )}
          >
            {errors.email
              ? "잘못된 형식의 이메일입니다."
              : email && emailConfirm
              ? "사용 가능한 이메일입니다."
              : emailNotAvailable
              ? "사용 중인 이메일입니다."
              : ""}
          </div>
        </div>

        {/* 인증번호 인증 */}
        <div>
          <div className="flex items-end">
            <div className="pt-4 w-full">
              <Input
                label="인증번호"
                type="number"
                disabled={!emailTransmission}
                labelStyle="mb-2"
                maxLength={6}
                register={register("auth", { validate: (v) => v.length <= 6 })}
                onInput={(e) =>
                  e.currentTarget.value.length > 6
                    ? (e.currentTarget.value = e.currentTarget.value.slice(
                        0,
                        6
                      ))
                    : null
                }
              />
            </div>
            <div className="ml-2">
              <SolidButton
                text="확인"
                size="S"
                isColorSlate
                type="button"
                onClick={onEmailAuthCheck}
                width="5rem"
                height="2.5rem"
                disabled={!auth || auth.length < 6}
              />
            </div>
          </div>
          <div className="invisible mt-2 text-system-S200 text-label leading-subtitle">
            잘못된 인증번호입니다.
          </div>
        </div>

        {/* 비밀번호 */}
        <div>
          <div className="flex items-end">
            <div className="pt-4 w-full">
              <Input
                label="비밀번호"
                labelStyle="mb-2"
                type="text"
                register={register("password", {
                  pattern:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{10,}$/,
                })}
              />
            </div>
          </div>
          <div
            className={cls(
              !password || errors.password
                ? "text-system-S200"
                : "text-system-S600",
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
              <Input
                label="비밀번호 확인"
                labelStyle="mb-2"
                type="text"
                register={register("passwordConfirm")}
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
            {!passwordConfirm
              ? ""
              : password === passwordConfirm
              ? "비밀번호가 동일합니다."
              : "비밀번호가 일치하지 않습니다."}
          </div>
        </div>

        <div className="absolute bottom-6 w-full">
          {/* 다음 버튼은 disabled 되어있고 인증이 확인 && 비밀번호, 비밀번호 확인 일치 시 다음 버튼 활성화 할 것  */}
          <SolidButton
            text="다음"
            size="XL"
            isPrimaryColor={
              !!email &&
              errors.password === undefined &&
              !!password &&
              !!passwordConfirm &&
              password === passwordConfirm
            }
            primaryColor={
              !email &&
              errors.password !== undefined &&
              !password &&
              !passwordConfirm &&
              password !== passwordConfirm
                ? ""
                : "#2d47db"
            }
            type="button"
            disabled={
              !email ||
              errors.password !== undefined ||
              !password ||
              !passwordConfirm ||
              password !== passwordConfirm
            }
            onClick={onConfirm}
          />
        </div>
      </form>
    </div>
  );
}
