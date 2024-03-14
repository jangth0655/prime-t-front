import axios, {AxiosResponse} from "axios";
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

type SignupVerifyProps = {
  verifyType: string;
  state: string;
};
type SignupVerifyConfirmProps = {
  verifyType: string;
  state: string;
  code: string;
};

export const signupEmailAPI = (email: string) => {
  api.post(`users/email/${email}`);
};

export const signupPhoneAPI = ({
  phone,
  internationalNumber,
}: SignupPhoneProps) => {
  const response: Promise<AxiosResponse> = api.post(`users/phone/${internationalNumber.key}${phone}`);
  return response;
};

export const signupVerifyAPI = async ({
  verifyType,
  state,
}: SignupVerifyProps):Promise<void> => {
  api.post(`verify/${verifyType}/send-code`, {
    [verifyType]: state,
  });
};

export const signupVerifyConfirmAPI = async ({
  verifyType,
  state,
  code,
}: SignupVerifyConfirmProps)  => {
  const response: Promise<AxiosResponse> = api.post(`verify/${verifyType}/confirm-code`, {
    [verifyType]: state,
    verify_code: code,
  });
  return response;
};

export const signupAPI = async ({
  emailState,
  passwordState,
  phoneState,
}: SignupProps) => {
  await api.post(
    "users",
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
};
