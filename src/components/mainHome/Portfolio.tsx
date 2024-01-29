import Image from "next/image";
import TemPortfolioImage from "../../../public/assets/mainHome-portfolio.png";

export default function Portfolio() {
  return (
    <section className="pb-[5.5rem]">
      <p className="text-h4 leading-h4 font-bold text-slate-S200 text-center mb-10">
        포트폴리오로 보유 자산을 <br />
        확인해보세요.
      </p>
      <div className="flex justify-center items-center relative">
        <Image
          width={224}
          height={301}
          src={TemPortfolioImage}
          alt=""
          priority
        />
        <p className="absolute text-body text-slate-S300 leading-body font-regular">
          포트폴리오 서비스 <br />
          예시 이미지입니다.
        </p>
      </div>
    </section>
  );
}
