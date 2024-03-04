type Props = {
  step: number;
  signupHeaderTitle: string | null;
};
export default function SignupHeader({ step, signupHeaderTitle }: Props) {
  return (
    <div className="flex justify-between items-center pt-4 lg:pt-10">
      <div className="text-h4 font-bold leading-h4 text-slate-S200">
        {signupHeaderTitle}
      </div>
      <div className="text-primary-P100 text-body font-regular leading-body">
        {step < 4 ? `${step}/3` : null}
      </div>
    </div>
  );
}
