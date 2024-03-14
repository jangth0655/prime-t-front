import { SubmitHandler, useForm } from "react-hook-form";
import SolidButton from "../shared/SolidButton";
import Input from "../shared/Input";
import InputSelector from "../shared/InputSelector";
import { cls } from "@/utils/cls";
import { signupAPI, signupVerifyConfirmAPI } from "@/services/auth/signup";
import { useSignupMobileCheck } from "@/hooks/useSignupMobileCheck";
import { useMutation } from "@tanstack/react-query";
import { VerifyValues } from "@/components/signup/SignupAccountSettings";

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
export default function SignupMobileValidation({ nextStep }: Props) {
  const {
    emailState,
    passwordState,
    phoneState,
    phoneConfirm,
    phoneTransmission,
    internationalNumberList,
    internationalNumber,
    phoneDuplication,
    onInternationalNumberCategory,
    onPhoneDuplicationCheck,
    onPhoneChange,
  } = useSignupMobileCheck();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      mobileAuth: "",
      phone: "",
    },
  });
  const phone = watch("phone");
  const mobileAuth = watch("mobileAuth");

  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: (data: VerifyValues) => signupVerifyConfirmAPI(data),
    onSuccess: async () => {
      try {
        await signupAPI({ emailState, passwordState, phoneState });
        nextStep();
      } catch (err) {
        console.log(err);
      }
    },
    onError: () => {},
  });

  const onConfirm: SubmitHandler<FormValue> = async (data) => {
    if (phoneConfirm && phone && mobileAuth.length === 6) {
      mutate({
        verifyType: "phone",
        state: internationalNumber.key + data.phone,
        code: data.mobileAuth,
      });
    }
  };
  return (
    <div className="pt-4 relative h-full">
      <form onSubmit={handleSubmit(onConfirm)}>
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
                size="F"
                isColorSlate
                type="button"
                width="5rem"
                height="2.5rem"
                onClick={() =>
                  onPhoneDuplicationCheck(phone, errors, internationalNumber)
                }
              />
            </div>
          </div>

          <div
            className={cls(
              phoneConfirm && phone
                ? "text-system-S600"
                : !phoneDuplication
                ? "text-system-S200"
                : "text-slate-S400",
              "text-label leading-label font-regular mt-2"
            )}
          >
            {phoneConfirm && phone
              ? "사용 가능한 휴대폰 번호입니다."
              : !phoneDuplication
              ? "이미 가입한 휴대폰 번호입니다. "
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

        <div className="absolute bottom-6 w-full">
          {/*휴대폰 인증이 완료 되면 다음버튼으로 진행 */}
          <SolidButton
            text="가입하기"
            disabled={!phone || !mobileAuth || mobileAuth.length < 6}
            size="XL"
            isPrimaryColor={!!mobileAuth || !!phone}
            primaryColor={
              !mobileAuth || !phone || mobileAuth.length < 6 ? "" : "#2d47db"
            }
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
