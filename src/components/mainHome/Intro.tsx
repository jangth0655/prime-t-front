import BorderButton from "../common/BorderButton";
import SolidButton from "../common/SolidButton";

export default function Intro() {
  return (
    <section className="py-[10rem] flex flex-col justify-center items-center">
      <div className="text-h2 leading-h2 font-bold text-slate-S100 text-center">
        <p>미래를 위한</p>
        <p className="text-primary-P100">STO 자산 플랫폼</p>
        <p>PRIME - T</p>
      </div>

      <div className="mt-20">
        <SolidButton text="청약 시작하기" size="L" isColorPrimary />
      </div>
    </section>
  );
}
