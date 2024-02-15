"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import SolidButton from "../common/SolidButton";
import Input from "../common/Input";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const response = await (
      await axios.post(
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
      )
    ).data;

    return console.log(response);
  };

  const notUser = () => {
    router.push("/serviceIntro");
  };
  return (
    <div className="mx-4 h-full relative">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          inputTitle="ID (e-mail)"
          dataType="username"
          maxLength={80}
          inputType="text"
        />
        <Input
          register={register}
          inputTitle="PW"
          dataType="password"
          maxLength={80}
          inputType="password"
        />

        <div className="w-full absolute bottom-10">
          <div className="flex justify-between">
            <SolidButton
              text="ID찾기"
              size="S"
              width="6.5rem"
              height="2rem"
              color="#c8c9df"
              border="1px solid #797d9e"
              type="submit"
            />
            <SolidButton
              text="PW찾기"
              size="S"
              width="6.5rem"
              height="2rem"
              color="#c8c9df"
              border="1px solid #797d9e"
              type="submit"
            />
            <SolidButton
              text="회원가입"
              size="S"
              width="6.5rem"
              height="2rem"
              color="#c8c9df"
              border="1px solid #797d9e"
              type="submit"
            />
          </div>
          <div className="mt-4">
            <SolidButton
              text="로그인"
              size="XL"
              isPrimaryColor
              primaryColor="#2D47DB"
              type="submit"
            />
          </div>
          <div className="mt-4">
            <SolidButton
              text="로그인 없이 이용"
              size="XL"
              isColorSlate
              type="button"
              onClick={notUser}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
