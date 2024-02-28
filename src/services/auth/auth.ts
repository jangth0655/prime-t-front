import axios, { AxiosResponse } from "axios";
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
