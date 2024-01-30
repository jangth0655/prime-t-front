"use client";

import Link from "next/link";

export default function ReadyPage() {
  return (
    <div className="absolute overflow-hidden left-0 right-0 bottom-0 top-0 bg-slate-S800 flex flex-col justify-center items-center space-y-10">
      <h1 className="text-h1 leading-h1 text-slate-S200">현재 준비중입니다.</h1>
      <Link
        href={"/"}
        className="text-body leading-body text-slate-S200 p-4 bg-primary-P200 rounded-2xl"
      >
        홈으로 가기
      </Link>
    </div>
  );
}
