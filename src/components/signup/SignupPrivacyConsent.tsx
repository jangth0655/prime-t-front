import { useSignupPrivacyConsentStore } from "@/store/useSignupStore";
import SolidButton from "../shared/SolidButton";

type Props = {
  nextStep: () => void;
};

export default function SignupPrivacyConsent({ nextStep }: Props) {
  const { setPrivacyConsent } = useSignupPrivacyConsentStore();
  const next = () => {
    setPrivacyConsent(true);
    nextStep();
  };
  return (
    <div className="pt-4 h-full relative">
      <div className="w-full">
        <div className="text-slate-S200 text-body leading-body font-regular">
          개인정보 수집 이용 약관
        </div>
      </div>
      <div className="p-4 mt-4 h-3/4 lg:max-h-[22.5rem] bg-slate-S800 text-body-s leading-body-s font-regular text-slate-S200 overflow-auto">
        이용약관에 대한 설명
      </div>

      <div className="absolute lg:static lg:mt-10 bottom-6 w-full lg:w-[17rem] lg:mx-auto">
        <SolidButton
          text="약관 동의하기"
          size="XL"
          isPrimaryColor
          primaryColor="#2d47db"
          type="button"
          onClick={next}
        />
      </div>
    </div>
  );
}
