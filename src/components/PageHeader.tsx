"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import LeftArrowIcon from "@/icons/LeftArrowIcon";

type Props = {
  title: string;
  backUrl?: string;
  top?: string;
};

export default function PageHeader({ title, backUrl, top }: Props) {
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
      className="h-14 flex justify-center items-center fixed w-full bg-white z-40"
    >
      <button
        onClick={onBackPage}
        className="absolute w-10 h-10 left-1 flex justify-center items-center"
      >
        <LeftArrowIcon color="#000000" />
      </button>
      <p className="text-body leading-body text-black font-regular">{title}</p>
    </header>
  );
}
