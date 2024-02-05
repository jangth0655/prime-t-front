"use client";

import Image from "next/image";
import DetailCategory from "../feed/detail/DetailCateogry";
import DetailTitle from "../feed/detail/DetailTitle";
import DetailPeriod from "../feed/detail/DetailPeriod";
import StatusTag from "../common/StatusTag";
import DetailIssueAmount from "../feed/detail/DetailIssueAmount";
import DetailAmount from "../feed/detail/DetailAmount";
import DetailCompleteRate from "../feed/detail/DetailCompleteRate";

import TempImage from "../../../public/assets/digiterra/temp_digit_detail.png";
import DetailProductIntroHeader from "../feed/detail/DetailProductIntroHeader";

type Props = {
  detailId: number;
};

export default function DigiterraDetail({ detailId }: Props) {
  return (
    <div className="pt-[7.25rem]">
      <div className="w-full h-[360px] relative">
        <Image fill src={TempImage} alt="detail_img" priority />
      </div>

      <div className="px-4 py-6 border-b-[1px] border-b-slate-S200">
        <DetailCategory text="마켓 > 디지테라" />
        <DetailTitle text="디지테라 청약 1호" />
        <div className="flex justify-between items-center mt-2 mb-3">
          <DetailPeriod date="2024.00.00 ~ 2024.00.00" />
          <StatusTag statusType={{ key: "progress", name: "진행중" }} />
        </div>
        <DetailIssueAmount issueAmount={5000000} />
        <div className="mt-1 flex justify-between items-center">
          <DetailAmount amount={10000000000} />
          <DetailCompleteRate text="50% 달성" />
        </div>
      </div>

      <div>
        <DetailProductIntroHeader />
      </div>
    </div>
  );
}
