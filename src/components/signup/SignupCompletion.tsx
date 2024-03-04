import BorderButton from "../shared/BorderButton";
import SolidButton from "../shared/SolidButton";
import { useRouter } from "next/navigation";

type Props = {
  nextStep: () => void;
};

export default function SignupCompletion({ nextStep }: Props) {
  const router = useRouter();
  const onRouterPushMain = () => {
    router.push("/service-category");
  };
  const onRouterPushLogin = () => {
    router.push("/login");
  };
  return (
    <div className="flex flex-wrap justify-center pt-[11.375rem]">
      <div className="flex justify-center text-slate-S200 w-full text-h4 leading-h4 font-bold">
        회원가입이 완료되었습니다.
      </div>
      <div className="flex mt-20 justify-between w-full">
        <BorderButton
          text={"메인 화면"}
          size={"L"}
          width={window.innerWidth >= 1366 ? "17rem" : "9.725rem"}
          height="3.5rem"
          type="button"
          onClick={onRouterPushMain}
        />
        <SolidButton
          text="로그인"
          width={window.innerWidth >= 1366 ? "17rem" : "9.725rem"}
          height="3.5rem"
          primaryColor="#2d47db"
          isColorSlate
          isPrimaryColor
          type="button"
          onClick={onRouterPushLogin}
        />
      </div>
    </div>
  );
}
