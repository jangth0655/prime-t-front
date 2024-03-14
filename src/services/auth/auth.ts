import axios, { AxiosError, AxiosResponse } from "axios";
import HttpError from "../httpError";
import { api } from "../httpClient";
export type LoginResponse = {
  access_token: string;
};

type LoginPropsType = {
  username: string;
  password: string;
};

export const loginAPI = async ({ username, password }: LoginPropsType) => {
  const response = await api.post<Promise<LoginResponse>>(
    "login",
    {
      login_id: username,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const signupEmailAPI = async (email: string) => {
  try {
    const response = await axios.post(`api/v1/users/email/${email}`);
  } catch (error) {
    throw error;
  }
};

type RefreshToken = {
  isSuccess: boolean;
  data: string;
};

export const refreshTokenAPI = async (token: string) => {
  try {
    const response = await (
      await axios.get<Promise<RefreshToken>>("/api/refresh", {
        headers: {
          Authorization: token,
        },
      })
    ).data;
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { response } = error;
      throw new HttpError(response?.status, response?.statusText).errorMessage;
    }

    throw new Error("네트워크 통신 에러 발생");
  }
};
