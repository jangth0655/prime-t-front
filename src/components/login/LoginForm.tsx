"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import SolidButton from "../shared/SolidButton";
import Input from "../shared/Input";
import { useRouter } from "next/navigation";
import BorderButton from "../shared/BorderButton";
import { cls } from "@/utils/cls";
import { setStorage } from "@/utils/sessionStorageManage";
import { ACCESS_TOKEN } from "@/store/useTokenStore";
import { loginAPI } from "@/services/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

type FormValues = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<FormValues>();

  const username = watch("username");
  const password = watch("password");

  useEffect(() => {
    if (window.sessionStorage.access_token) {
      router.push("/service-category");
    }
  }, [router]);

  const { mutate, isError } = useMutation({
    mutationFn: (auth: FormValues) =>
      loginAPI({ username: auth.username, password: auth.password }),
    onSuccess: (res) => {
      sessionStorage.setItem(ACCESS_TOKEN, res.access_token);
      router.push("/service-category");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (username === "" || password === "") {
      return;
    }
    mutate(data);
  };

  const onWithoutLogin = () => {
    router.push("/service-category");
  };

  const signup = () => {
    router.push("/signup");
  };

  return (
    <div className="mx-4 lg:mx-auto h-full relative lg:w-[25rem]">
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
            !isError ? "invisible" : "visible",
            "text-system-S200 text-label font-regular leading-caption mt-2"
          )}
        >
          이메일 또는 비밀번호를 잘못 입력하였습니다. 다시 확인해주세요.
        </div>
        <div className="w-full absolute lg:static lg:mt-20 bottom-10">
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
