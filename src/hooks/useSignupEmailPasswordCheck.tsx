import { signupEmailAPI } from "@/services/auth/auth";
import { signupVerifyAPI } from "@/services/auth/signup";
import { useSignupEmail, useSignupPassword } from "@/store/useSignupStore";
import { useState } from "react";
import { FieldErrors } from "react-hook-form";

export const useSignupEmailPasswordCheck = () => {
  const { emailState, setEmailState } = useSignupEmail();
  const { passwordState, setPasswordState } = useSignupPassword();
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [emailTransmission, setEmailTransmission] = useState(false);
  const [emailNotAvailable, setEmailNotAvailable] = useState(false);

  const setEmail = (email: string) => {
    setEmailState(email);
  };

  const setPassword = (password: string) => {
    setPasswordState(password);
  };

  const onEmailChange = () => {
    setEmailConfirm(false);
    setEmailTransmission(false);
    setEmailNotAvailable(false);
  };

  const onEmailDuplicationCheck = async (
    email: string,
    errors: FieldErrors
  ) => {
    if (errors.email || !email) return;

    if (emailConfirm) {
      signupVerifyAPI({ verifyType: "email", state: email });

      setEmailTransmission(true);
    } else {
      try {
        // 예시로 작성된 함수, 실제 함수명과 파라미터는 실제 환경에 맞게 수정 필요
        await signupEmailAPI(email);
        setEmailConfirm(true);
        setEmailState(email);
      } catch (error) {
        setEmailNotAvailable(true);
      }
    }
  };

  return {
    emailState,
    setEmail,
    passwordState,
    setPassword,
    emailConfirm,
    emailTransmission,
    emailNotAvailable,
    onEmailChange,
    onEmailDuplicationCheck,
  };
};
