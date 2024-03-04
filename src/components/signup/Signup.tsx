"use client";
import { useState } from "react";
import PageHeader from "../PageHeader";
import SignupPrivacyConsent from "./SignupPrivacyConsent";
import SignupHeader from "./SignupHeader";
import SignupAccountSettings from "./SignupAccountSettings";
import SignupMobileVelidation from "./SignupMobileVelidation";
import SignupCompletion from "./SignupCompletion";

type Step = {
  component: React.ComponentType<{ nextStep: () => void }>;
  title: string | null;
};

export default function Signup() {
  const steps: Step[] = [
    {
      component: SignupPrivacyConsent,
      title: "개인 정보 수집 및 이용 동의",
    },
    {
      component: SignupAccountSettings,
      title: "계정 설정",
    },
    {
      component: SignupMobileVelidation,
      title: "휴대폰 인증",
    },
    {
      component: SignupCompletion,
      title: null,
    },
  ];

  const [step, setStep] = useState<number>(3);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const { component: CurrentStage, title: currentStageTitle } = steps[step - 1];

  return (
    <div className="bg-slate-S900 h-screen lg:overflow-auto overflow-hidden">
      <PageHeader step={step} title="회원가입" isDark={true} />
      <div className="mx-4 lg:mx-auto pt-[8.25rem] lg:pt-[9.75rem] pb-10 h-full lg:w-[35rem]">
        <SignupHeader step={step} signupHeaderTitle={currentStageTitle} />
        <CurrentStage nextStep={nextStep} />
      </div>
    </div>
  );
}
