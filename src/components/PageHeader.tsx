"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import LeftArrowIcon from "@/icons/LeftArrowIcon";
import { cls } from "@/utils/cls";

type Props = {
  title: string;
  backUrl?: string;
  top?: string;
  isPorkHub?: boolean;
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
      className={cls(
        isPorkHub
          ? "bg-slate-S900 border-b-[1px] border-b-slate-S600"
          : "bg-white",
        "h-14 flex justify-center items-center fixed w-full z-20"
      )}
    >
      <button
        onClick={onBackPage}
        className="absolute w-10 h-10 left-1 flex justify-center items-center"
      >
        <LeftArrowIcon color={isPorkHub ? "#eef1ff" : "#000000"} />
      </button>
      <p
        className={cls(
          isPorkHub
            ? "text-slate-S200 font-regular"
            : "text-black font-regular",
          "text-body leading-body"
        )}
      >
        {title}
      </p>
    </header>
  );
}
