"use client";

import SolidButton from "../shared/SolidButton";
import FAQItem from "./FAQItem";

export default function FAQ() {
  return (
    <section className="pb-24">
      <p className="text-h3 leading-h3 text-slate-S200 font-bold mb-10 text-center">
        FAQ
      </p>
      <ul>
        {FAQList.map((item) => (
          <FAQItem key={item.key} item={item} />
        ))}
      </ul>
      <div className="flex justify-center items-center mt-6">
        <SolidButton size="M" text="FAQ 더보기" isColorSlate />
      </div>
    </section>
  );
}

const FAQList: FAQItemType[] = [
  {
    title: "포크허브, 어떤 서비스인가요?",
    key: "porkhubOverview",
    description: [
      {
        text: "답변 예시입니다. 질문을 누르면 아래로 답변 내용이 달립니다.",
        key: "porkhubOverview_one",
      },
      {
        text: "답변 예시입니다. 질문을 누르면 아래로 답변 내용이 달립니다.",
        key: "porkhubOverview_two",
      },
    ],
  },
  {
    title: "허브주가 되면 어떤 혜택이 있나요?",
    key: "membershipBenefits",
    description: [
      {
        text: "답변 예시입니다. 질문을 누르면 아래로 답변 내용이 달립니다.",
        key: "membershipBenefits_one",
      },
    ],
  },
  {
    title: "어떻게 수익이 나오나요?",
    key: "revenue",
    description: [
      {
        text: "답변 예시입니다. 질문을 누르면 아래로 답변 내용이 달립니다.",
        key: "revenue_one",
      },
    ],
  },
  {
    title: "정산까지 얼마나 걸리나요?",
    key: "processingTime",
    description: [
      {
        text: "답변 예시입니다. 질문을 누르면 아래로 답변 내용이 달립니다.",
        key: "processingTime_one",
      },
    ],
  },
  {
    title: "서비스는 안전하게 운영되나요?",
    key: "serviceSafety",
    description: [
      {
        text: "답변 예시입니다. 질문을 누르면 아래로 답변 내용이 달립니다.",
        key: "serviceSafety_one",
      },
    ],
  },
];

export type FAQItemType = {
  title: string;
  key: FAQKey;
  description: FAQItem[];
};

export type FAQKey =
  | "porkhubOverview"
  | "membershipBenefits"
  | "revenue"
  | "processingTime"
  | "serviceSafety";

type FAQItem = {
  text: string;
  key: string;
};
