"use client";

import { useState } from "react";
import PageHeader from "../PageHeader";
import SolidButton from "../common/SolidButton";
import SignupPrivacyConsent from "./SignupPrivacyConsent";
import SignupHeader from "./SignupHeader";
import SignupAccountSettings from "./SignupAccountSettings";
import TestReactHookForm from "./TestReactHookForm";

export default function Signup() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  let currentStage;
  let currentStageTitle = "";
  switch (step) {
    case 1:
      currentStage = <SignupPrivacyConsent nextStep={nextStep} />;
      currentStageTitle = "개인 정보 수집 및 이용 동의";
      break;
    case 2:
      currentStage = <SignupAccountSettings nextStep={nextStep} />;
      // currentStage = <TestReactHookForm />;
      currentStageTitle = "계정 설정";
  }

  return (
    <div className="bg-slate-S900 h-screen overflow-hidden">
      <PageHeader title="회원가입" isDark={true} top="0" />
      <div className="mx-4 pt-14 pb-10 h-full">
        <SignupHeader step={step} signupHeaderTitle={currentStageTitle} />
        {currentStage}
      </div>
    </div>
  );
}
