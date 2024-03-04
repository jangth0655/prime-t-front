import axios from "axios";
import { api } from "../httpClient";

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

export const signupEmailAPI = async (email: string) => {
  const response = await api.post(`users/email/${email}`);
  return response;
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
