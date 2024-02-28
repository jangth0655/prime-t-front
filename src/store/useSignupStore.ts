import { create } from "zustand";

type SignupPrivacyConsentState = {
  privacyConsent: boolean;
  setPrivacyConsent: (privacyConsent: boolean) => void;
};
type SignupEmailState = {
  emailState: string;
  setEmailState: (eamilState: string) => void;
};

type SignupPasswordState = {
  passwordState: string;
  setPasswordState: (passwordState: string) => void;
};

type SignupPhoneState = {
  phoneState: string;
  setPhoneState: (phoneState: string) => void;
};

export const useSignupPrivacyConsentStore = create<SignupPrivacyConsentState>(
  (set) => ({
    privacyConsent: false,
    setPrivacyConsent: (state: boolean) => set({ privacyConsent: state }),
  })
);

export const useSignupEmail = create<SignupEmailState>((set) => ({
  emailState: "",
  setEmailState: (state: string) => set({ emailState: state }),
}));

export const useSignupPassword = create<SignupPasswordState>((set) => ({
  passwordState: "",
  setPasswordState: (state: string) => set({ passwordState: state }),
}));

export const useSignupPhoneState = create<SignupPhoneState>((set) => ({
  phoneState: "",
  setPhoneState: (state: string) => set({ phoneState: state }),
}));
