import { useForm } from "react-hook-form";
import SolidButton from "../shared/SolidButton";
import Input from "../shared/Input";
import InputSelector, { SelectItemType } from "../shared/InputSelector";
import { useCallback, useState } from "react";
import {
  useSignupEmail,
  useSignupPassword,
  useSignupPhoneState,
} from "@/store/useSignupStore";
import { cls } from "@/utils/cls";
import { signupAPI, signupPhoneAPI } from "@/services/auth/signup";

type Props = {
  nextStep: () => void;
};
type FormValue = {
  mobileAuth: string;
  phone: string;
};

export type InternationalNumber = "+82" | "+81";
export type InternationalNumberKey = "+82" | "+81";

export type InternationalNumberCategory = {
  name: InternationalNumber;
  key: InternationalNumberKey;
};
export default function SignupMobileVelidation({ nextStep }: Props) {
  const { emailState } = useSignupEmail();
  const { passwordState } = useSignupPassword();
  const { phoneState, setPhoneState } = useSignupPhoneState();
  const [phoneConfirm, setPhoneConfirm] = useState(false);
  const [phoneTransmission, setPhoneTransmission] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      mobileAuth: "",
      phone: "",
    },
  });
  const phone = watch("phone");
  const mobileAuth = watch("mobileAuth");
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
  const onPhoneDuplicationCheck = async () => {
    if (phone && !phoneConfirm) {
      try {
        await signupPhoneAPI({ phone, internationalNumber });
        setPhoneConfirm(true);
        setPhoneState(internationalNumber.key + phone);
      } catch {
        setPhoneConfirm(false);
      }
    } else if (phone) {
      setPhoneTransmission(true);
    }
  };
  const onPhoneChange = () => {
    setPhoneConfirm(false);
    setPhoneTransmission(false);
  };
  const onConfirm = async () => {
    if (phoneConfirm && phone && mobileAuth.length === 6) {
      try {
        await signupAPI({ emailState, passwordState, phoneState });
        nextStep();
      } catch {}
    }
  };
  return (
    <div className="pt-4 relative h-full">
      <form>
        <div>
          <div>
            <label className="text-slate-S300 text-body-s leading-body-s font-regular">
              휴대폰 인증
            </label>
          </div>
          <div className="flex items-end mt-2 h-[2.5rem]">
            <InputSelector
              onSelected={onInternationalNumberCategory}
              list={internationalNumberList}
              selectedItem={internationalNumber}
              selectorBg="#2C3249"
              selectedColor="#12162A"
              border="1px solid #565978"
              width="w-[5.5rem]"
            />
            <Input
              margin="0 0 0 0.5rem"
              type="number"
              register={register("phone", {
                validate: (v) => v.length <= 12,
                onChange: onPhoneChange,
              })}
              onInput={(e) =>
                e.currentTarget.value.length > 6
                  ? (e.currentTarget.value = e.currentTarget.value.slice(0, 12))
                  : null
              }
            />
            <div className="ml-2">
              <SolidButton
                text={
                  !phone
                    ? "중복확인"
                    : phoneTransmission
                    ? "재전송"
                    : phoneConfirm
                    ? "전송"
                    : "중복확인"
                }
                isColorSlate
                type="button"
                width="5rem"
                height="2.5rem"
                onClick={onPhoneDuplicationCheck}
              />
            </div>
          </div>

          <div
            className={cls(
              phoneConfirm && phone ? "text-system-S600" : "text-slate-S400",
              "text-label leading-label font-regular mt-2"
            )}
          >
            {phoneConfirm && phone
              ? "사용 가능한 휴대폰 번호입니다."
              : "하이픈(-)없이 입력해주세요."}
          </div>
        </div>
        <div className="mt-4">
          {/* 휴대폰 번호 입력 후 중복확인 눌렀을 때 이상이 없으면 input 활성화 */}
          <Input
            label="인증번호"
            labelStyle="mb-2"
            disabled={!phoneTransmission}
            type="number"
            register={register("mobileAuth", {
              validate: (v) => v.length <= 6,
            })}
            onInput={(e) =>
              e.currentTarget.value.length > 6
                ? (e.currentTarget.value = e.currentTarget.value.slice(0, 6))
                : null
            }
          />
        </div>

        <div className="absolute lg:static bottom-6 w-full lg:w-[17rem] lg:mx-auto lg:mt-10">
          {/*휴대폰 인증이 완료 되면 다음버튼으로 진행 */}
          <SolidButton
            text="가입하기"
            disabled={!phone || !mobileAuth || mobileAuth.length < 6}
            size="XL"
            isPrimaryColor={!!mobileAuth || !!phone}
            primaryColor={
              !mobileAuth || !phone || mobileAuth.length < 6 ? "" : "#2d47db"
            }
            type="button"
            onClick={onConfirm}
          />
        </div>
      </form>
    </div>
  );
}
