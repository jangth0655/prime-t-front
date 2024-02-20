type Props = {
  step: number;
  signupHeaderTitle: string;
};
export default function SignupHeader({ step, signupHeaderTitle }: Props) {
  return (
    <div className="flex justify-between items-center pt-4">
      <div className="text-h4 font-bold leading-h4 text-slate-S200">
        {signupHeaderTitle}
      </div>
      <div className="text-primary-P100 text-body font-regular leading-body">
        {step}/3
      </div>
    </div>
  );
}
