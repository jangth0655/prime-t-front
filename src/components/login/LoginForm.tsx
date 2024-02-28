"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import SolidButton from "../common/SolidButton";
import Input from "../common/Input";
import { useRouter } from "next/navigation";
import BorderButton from "../common/BorderButton";
import { useRef } from "react";
import { cls } from "@/utils/cls";
import { setStorage } from "@/utils/sessionStorageManage";
import { ACCESS_TOKEN } from "@/store/useTokenStore";
import { loginAPI } from "@/services/auth/auth";

type FormValues = {
  password: string;
  username: string;
};

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const username = watch("username");
  const password = watch("password");
  const verification = useRef(true);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (username === "" || password === "") {
      return;
    }
    try {
      const response = await loginAPI(data.username, data.password);
      setStorage({ name: ACCESS_TOKEN, value: response.access_token });

      router.push("/service-category");
    } catch (error) {
      //아래 코드는 확인 후 문제 없을 시 지울 것
      verification.current = false;
    }
  };

  const onWithoutLogin = () => {
    router.push("/service-category");
  };

  const signup = () => {
    router.push("/signup");
  };

  return (
    <div className="mx-4 h-full relative">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register("username")}
          label="ID (e-mail)"
          labelStyle="mb-2 pt-10"
          type="text"
        />
        <Input
          register={register("password")}
          label="PW"
          labelStyle="mb-2 pt-10"
          type="password"
        />
        <div
          className={cls(
            verification.current ? "invisible" : "visible",
            "text-system-S200 text-label font-regular leading-caption mt-2"
          )}
        >
          이메일 또는 비밀번호를 잘못 입력하였습니다. 다시 확인해주세요.
        </div>
        <div className="w-full absolute bottom-10">
          <div className="flex justify-between">
            <BorderButton text="ID찾기" size="S" width="6.5rem" height="2rem" />
            <BorderButton text="PW찾기" size="S" width="6.5rem" height="2rem" />
            <BorderButton
              text="회원가입"
              size="S"
              width="6.5rem"
              height="2rem"
              type="button"
              onClick={signup}
            />
          </div>
          <div className="mt-4">
            <SolidButton
              disabled={!username || !password}
              text="로그인"
              size="XL"
              isPrimaryColor={!!username || !!password}
              primaryColor={!username || !password ? "" : "#2d47db"}
              type="submit"
              id="loginButton"
            />
          </div>
          <div className="mt-4">
            <SolidButton
              text="로그인 없이 이용"
              size="XL"
              isColorSlate
              type="button"
              onClick={onWithoutLogin}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
