import LogoWhite from "@/icons/LogoWhite";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="bg-slate-S900 pt-20 lg:pt-[8.5rem] h-screen overflow-hidden">
      <div className="flex justify-center items-center">
        <LogoWhite />
      </div>
      <LoginForm />
    </div>
  );
}
