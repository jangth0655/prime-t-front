import React from "react";

import ApplicationIcon from "../../icons/mainHome/application.svg";
import DistributionIcon from "../../icons/mainHome/distribution.svg";
import OperationIcon from "../../icons/mainHome/operation.svg";

export default function Process() {
  return (
    <section className="pb-20">
      <p className="text-slate-S200 text-h3 font-bold leading-h3 text-center mb-10">
        프로세스
      </p>
      <ul className="space-y-6">
        {processData.map((data) => (
          <li
            key={data.key}
            className="p-6 bg-slate-S700 border-[1px] border-slate-S600 rounded-lg"
          >
            <div className="mb-6 flex justify-center items-center">
              {data.icon}
            </div>
            <p className="mb-4 text-slate-S200 text-h4 font-bold leading-h4 text-center">
              {data.title}
            </p>
            <p className="text-slate-S300 text-body font-regular leading-body text-center">
              {data.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const processData: ProcessData[] = [
  {
    title: "청약신청",
    description:
      "청약 신청 과정에 대한 상세 설명입니다.청약 신청 과정에 대한 상세 설명입니다.",
    icon: <ApplicationIcon />,
    key: 1,
  },
  {
    title: "운용",
    description:
      "운용 과정에 대한 상세 설명입니다. 운용 과정에 대한 상세 설명입니다.",
    icon: <DistributionIcon />,
    key: 2,
  },
  {
    title: "수익분배",
    description:
      "수익 분배 과정에 대한 상세 설명을 입력합니다. 수익 분배과정에 대한 상세 설명을 입력합니다.",
    icon: <OperationIcon />,
    key: 3,
  },
];

type ProcessData = {
  title: string;
  description: string;
  icon: React.ReactElement;
  key: number;
};
