"use client";

import Image from "next/image";

import SplashImage from "../../public/assets/splash.png";
import LogoWhite from "@/icons/LogoWhite";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/serviceIntro");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [router]);

  const onPage = () => {
    router.push("/serviceIntro");
  };

  return (
    <section
      onClick={onPage}
      className="min-w-[22.5rem] relative h-[100vh] m-auto flex justify-center items-center"
    >
      <Image fill src={SplashImage} alt="splash-image" />
      <div className="relative z-50">
        <LogoWhite width="208" height="48" />
      </div>
    </section>
  );
}
