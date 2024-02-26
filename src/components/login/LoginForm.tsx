"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import SolidButton from "../common/SolidButton";
import Input from "../common/Input";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/navigation";
import BorderButton from "../common/BorderButton";
import { useEffect, useRef, useState } from "react";
import { cls } from "@/utils/cls";
import { getStorage } from "@/utils/localStorageManage";

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
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);
  const verification = useRef(true);
  const isLogin = useRef(false);

  useEffect(() => {
    if (
      username !== undefined &&
      username !== "" &&
      password !== "" &&
      password !== undefined
    ) {
      setLoginButtonDisabled(false);
    } else {
      setLoginButtonDisabled(true);
    }
  }, [username, password]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await axios.post(
        "/api/v1/login",
        {
          username: data.username,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      // console.log(response.data);
      // console.log("로그인 성공");
      getStorage(response.data.access_token);

      isLogin.current = true;
    } catch (error) {
      //아래 코드는 확인 후 문제 없을 시 지울 것
      console.error(error);
      verification.current = false;
    }

    if (isLogin.current) {
      router.push("/service-category");
    }
  };

  const onDisalbedEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      username === undefined &&
      username === "" &&
      password === "" &&
      password === undefined
    ) {
      if (e.key === "Enter") {
        e.preventDefault();
      }
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
          inputTitle="ID (e-mail)"
          dataType="username"
          maxLength={80}
          inputType="text"
          onKeyDown={onDisalbedEnterKey}
        />
        <Input
          register={register("password")}
          inputTitle="PW"
          dataType="password"
          maxLength={80}
          inputType="password"
          type="password"
          onKeyDown={onDisalbedEnterKey}
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
              disabled={loginButtonDisabled}
              text="로그인"
              size="XL"
              isPrimaryColor={!loginButtonDisabled}
              primaryColor={loginButtonDisabled ? "" : "#2d47db"}
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
