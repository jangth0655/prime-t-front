"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import LeftArrowIcon from "@/icons/LeftArrowIcon";

type Props = {
  title: string;
  backUrl?: string;
  top?: string;
  isPorkHub? : boolean;
};

export default function PageHeader({ title, backUrl, top, isPorkHub }: Props) {
  const router = useRouter();

  const onBackPage = useCallback(() => {
    if (backUrl) {
      router.push(backUrl);
      return;
    }
    router.back();
  }, [backUrl, router]);

  return (
    <header
      style={{
        top: top || "3.75rem",
      }}
      className={isPorkHub === true 
        ? "h-14 flex justify-center items-center fixed w-full z-40 bg-slate-S900 border-b-[1px] border-b-slate-S600" 
        : "h-14 flex justify-center items-center fixed w-full z-40 bg-white"}
    >
      <button
        onClick={onBackPage}
        className="absolute w-10 h-10 left-1 flex justify-center items-center"
      >
        <LeftArrowIcon color={isPorkHub === true ? "#eef1ff" : "#000000"} />
      </button>
      <p className={isPorkHub === true ? "text-body leading-body text-slate-S200 font-regular" : "text-body leading-body text-black font-regular"}>{title}</p>
    </header>
  );
}
