import axios, { AxiosError, AxiosResponse } from "axios";
import HttpError from "../httpError";
type LoginResponse = {
  access_token: string;
};

type SignupPhoneProps = {
  phone: string;
  internationalNumber: {
    name: string;
    key: string;
  };
};

type SignupProps = {
  emailState: string;
  passwordState: string;
  phoneState: string;
};

export const loginAPI = async (
  login_id: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response: AxiosResponse<LoginResponse> =
      await axios.post<LoginResponse>(
        "api/v1/login",
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
  } catch (error) {
    throw error;
  }
};

export const signupEmailAPI = async (email: string) => {
  try {
    const response = await axios.post(`api/v1/users/email/${email}`);
  } catch (error) {
    throw error;
  }
};

export const signupPhoneAPI = async ({
  phone,
  internationalNumber,
}: SignupPhoneProps) => {
  try {
    const resoponse = await axios.post(
      `api/v1/users/phone/${internationalNumber.key}${phone}`
    );
  } catch (error) {
    throw error;
  }
};

export const signupAPI = async ({
  emailState,
  passwordState,
  phoneState,
}: SignupProps) => {
  try {
    const response = await axios.post(
      "api/v1/users",
      {
        login_id: emailState,
        password: passwordState,
        phone: phoneState,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return true;
  } catch (error) {
    throw error;
  }
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
