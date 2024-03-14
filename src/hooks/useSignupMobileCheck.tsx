import { SelectItemType } from "@/components/shared/InputSelector";
import { InternationalNumberCategory } from "@/components/signup/SignupMobileValidation";
import { signupPhoneAPI, signupVerifyAPI } from "@/services/auth/signup";
import {
  useSignupEmail,
  useSignupPassword,
  useSignupPhoneState,
} from "@/store/useSignupStore";
import { useCallback, useState } from "react";
import { FieldErrors } from "react-hook-form";

export const useSignupMobileCheck = () => {
  const { emailState } = useSignupEmail();
  const { passwordState } = useSignupPassword();
  const { phoneState, setPhoneState } = useSignupPhoneState();
  const [phoneConfirm, setPhoneConfirm] = useState(false);
  const [phoneTransmission, setPhoneTransmission] = useState(false);
  const [phoneDuplication, setPhoneDuplication] = useState(true);

  const internationalNumberList: InternationalNumberCategory[] = [
    {
      name: "+82",
      key: "+82",
    },
    {
      name: "+81",
      key: "+81",
    },
  ];

  const [internationalNumber, setInternationalNumber] =
    useState<InternationalNumberCategory>({
      name: "+82",
      key: "+82",
    });
  const onInternationalNumberCategory = useCallback(
    (status: SelectItemType) => {
      setInternationalNumber(status as InternationalNumberCategory);
    },
    []
  );
  const onPhoneDuplicationCheck = async (
    phone: string,
    errors: FieldErrors,
    internationalNumber: {
      name: string;
      key: string;
    }
  ) => {
    if (errors.phone || !phone) return;

    if (phoneConfirm) {
      signupVerifyAPI({
        verifyType: "phone",
        state: internationalNumber.key + phone,
      });
      setPhoneTransmission(true);
    } else {
      try {
        await signupPhoneAPI({ phone, internationalNumber });
        setPhoneConfirm(true);
        setPhoneState(internationalNumber.key + phone);
      } catch {
        setPhoneConfirm(false);
        setPhoneDuplication(false);
      }
    }
  };
  const onPhoneChange = () => {
    setPhoneConfirm(false);
    setPhoneTransmission(false);
  };

  return {
    emailState,
    passwordState,
    phoneState,
    setPhoneState,
    setPhoneConfirm,
    phoneConfirm,
    phoneTransmission,
    setPhoneTransmission,
    internationalNumberList,
    phoneDuplication,
    internationalNumber,
    setInternationalNumber,
    onInternationalNumberCategory,
    onPhoneDuplicationCheck,
    onPhoneChange,
  };
};
