"use client";

import { useCallback, useRef, useState } from "react";
import { useCloseOnOutSideClick } from "../commonHooks/useCloseOnOutSideClick";
import Image from "next/image";
import dayjs from "dayjs";

import DetailCategory from "../feed/detail/DetailCateogry";
import DetailTitle from "../feed/detail/DetailTitle";
import DetailPeriod from "../feed/detail/DetailPeriod";
import StatusTag from "../common/StatusTag";
import DetailIssueAmount from "../feed/detail/DetailIssueAmount";
import DetailAmount from "../feed/detail/DetailAmount";
import DetailCompleteRate from "../feed/detail/DetailCompleteRate";
import DetailProductIntroHeader from "../feed/detail/DetailProductIntroHeader";
import BottomModal from "../Modal/BottomModal";

import { formatDateYYYMMDD } from "@/utils/formatDate";
import { formatCurrency } from "@/utils/formatNumber";
import TempImage from "../../../public/assets/digiterra/temp_digit_detail.png";
import SolidButton from "../common/SolidButton";
import StartIcon from "@/icons/StarIcon";

type Props = {
  detailId: number;
};

export default function DigiterraDetail({ detailId }: Props) {
  const [isBottomModal, setIsBottomModal] = useState(false);
  const bottomModalRef = useRef(null);
  const involveButtonRef = useRef(null);

  const formattedYesterday = formatDateYYYMMDD(
    dayjs().subtract(1, "day").toDate()
  );
  const formattedToday = formatDateYYYMMDD(new Date());

  const openBottomModal = useCallback(() => {
    setIsBottomModal(true);
  }, []);

  const closeBottomModal = useCallback(() => {
    setIsBottomModal(false);
  }, []);

  useCloseOnOutSideClick({
    exceptRefsArray: [bottomModalRef, involveButtonRef],
    isOutSideClose: true,
    close: closeBottomModal,
  });

  return (
    <div className="pt-[7.25rem]">
      <div className="w-full h-[360px] relative">
        <Image fill src={TempImage} alt="detail_img" priority />
      </div>

      <div className="px-4 py-6 border-b-[1px] border-b-slate-S200">
        <DetailCategory text="마켓 > 디지테라" />
        <DetailTitle text="디지테라 청약 1호" />

        <div className="flex justify-between items-center mt-2 mb-3">
          <div className="flex items-center space-x-1">
            <DetailPeriod date={formattedYesterday} />
            <span className="text-label leading-label text-slate-S400">~</span>
            <DetailPeriod date={formattedToday} />
          </div>
          <StatusTag statusType={{ key: "progress", name: "진행중" }} />
        </div>

        <DetailIssueAmount issueAmount={formatCurrency(5000000)} />
        <div className="mt-1 flex justify-between items-center">
          <DetailAmount amount={formatCurrency(1000000000)} />
          <DetailCompleteRate text="50% 달성" />
        </div>
      </div>

      <div>
        <DetailProductIntroHeader />
      </div>
      <div className="p-4 bg-slate-S200 flex justify-center items-center h-full">
        <p className="text-body leading-body font-regular text-black">
          상품 소개를 준비중입니다.
        </p>
      </div>

      <div
        ref={involveButtonRef}
        className="flex items-center justify-center space-x-8  w-full py-2 border-t-[1px] border-t-slate-S200 absolute bottom-0 bg-white z-40"
      >
        <button
          type="button"
          className="flex flex-col justify-center items-center"
        >
          <StartIcon />
          <p>0</p>
        </button>
        <SolidButton
          text={isBottomModal ? "다음" : "참여하기"}
          size="L"
          isPrimaryColor
          primaryColor="#5770F2"
          width="16rem"
          onClick={openBottomModal}
        />
      </div>

      <BottomModal
        ref={bottomModalRef}
        height="17.25rem"
        isActive={isBottomModal}
        bottom="4.5rem"
      >
        asdf
      </BottomModal>
    </div>
  );
}
