import axios, { AxiosError, AxiosResponse } from "axios";
import HttpError from "../httpError";
import { api } from "../httpClient";
type LoginResponse = {
  access_token: string;
};

export const loginAPI = async (
  login_id: string,
  password: string
): Promise<LoginResponse> => {
  const response = await api.post(
    "login",
    {
      login_id: login_id,
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

type RefreshToken = {
  isSuccess: boolean;
  data: string;
};

export const refreshToken = async (token: string) => {
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
