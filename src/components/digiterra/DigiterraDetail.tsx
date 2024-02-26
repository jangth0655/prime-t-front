"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";

import DetailTitle from "../feed/detail/DetailTitle";
import FeedPeriodWithRange from "../feed/FeedPeriodWithRange";
import SolidButton from "../common/SolidButton";
import DetailProductIntro from "../feed/detail/DetailProductIntro";
import DetailProductNotice from "../feed/detail/DetailProductNotice";
import FeedLabel from "../feed/FeedLabel";
import FeedCompleteRate from "../feed/FeedCompleteRate";
import FeedIssueAmount from "../feed/FeedIssueAmount";

import { formatDateYYYMMDD } from "@/utils/formatDate";
import { formatCurrency } from "@/utils/formatNumber";
import TempImage from "../../../public/assets/digiterra/temp_digit_detail.png";
import TabCategory, { CategoryType } from "../common/TabCategory";
import StartIcon from "@/icons/StarIcon";
import { useRouter } from "next/navigation";

type Props = {
  detailId: number;
};

type Tab = {
  name: "상품 소개" | "거래 시 유의 사항";
  key: "intro" | "notice";
};

export default function DigiterraDetail({ detailId }: Props) {
  const [tab, setTab] = useState<Tab>({
    name: "상품 소개",
    key: "intro",
  });
  const router = useRouter();

  const formattedYesterday = formatDateYYYMMDD(
    dayjs().subtract(1, "day").toDate()
  );
  const formattedToday = formatDateYYYMMDD(new Date());

  const onTabCategory = useCallback((item: CategoryType) => {
    setTab(item as Tab);
  }, []);

  return (
    <div className="pt-[7.25rem]">
      <div className="w-full h-[360px] relative">
        <Image fill src={TempImage} alt="detail_img" priority />
        <div className="absolute bottom-4 right-4 flex items-end space-x-2">
          <SolidButton
            text="메타버스 체험하기"
            size="M"
            isPrimaryColor
            primaryColor="#5770F2"
          />
          <FeedCompleteRate
            text="0000% 달성"
            bgColor="#fff"
            textColor="#5770F2"
            size="sm"
          />
        </div>
      </div>

      <div className="px-4 py-6 border-b-[1px] border-b-slate-S200">
        <DetailTitle text="디지테라 청약 1호" />

        <div className="space-y-1 mt-2 mb-4">
          <div className="flex items-center space-x-2">
            <FeedLabel label="판매 기간" size="sm" textColor="#797D9E" />
            <FeedPeriodWithRange
              startDate={formattedToday}
              endDate={formattedYesterday}
            />
            <FeedLabel label="000일 남음" textColor="#5770F2" size="sm" />
          </div>
          <div className="flex items-center space-x-2">
            <FeedLabel label="운영 기간" size="sm" textColor="#797D9E" />
            <FeedPeriodWithRange
              startDate={formattedToday}
              endDate={formattedYesterday}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <div className="flex justify-between items-center">
              <FeedLabel label="최소 구매 수량" size="md" textColor="#797D9E" />
              <FeedIssueAmount
                issueAmount={formatCurrency(1)}
                unit="LTC"
                size="lg"
                amountColor="#000000"
                isBold
              />
            </div>
            <p className="flex justify-end text-label leading-label text-slate-S400 mt-1">
              1 LTC = 2 DTA
            </p>
          </div>
          <div className="flex justify-between items-center">
            <FeedLabel label="총 발행수량" size="md" textColor="#797D9E" />
            <FeedIssueAmount
              issueAmount={formatCurrency(10000000000)}
              unit="DTA"
              size="lg"
              amountColor="#000000"
              isBold
            />
          </div>
          <div className="flex justify-between items-center">
            <FeedLabel label="잔여 수량" size="md" textColor="#797D9E" />
            <FeedIssueAmount
              issueAmount={formatCurrency(10000000000)}
              unit="DTA"
              size="lg"
              amountColor="#000000"
              isBold
            />
          </div>

          <div className="flex justify-between items-center">
            <FeedLabel label="예상 수익률" size="md" textColor="#797D9E" />
            <div className="flex items-center space-x-[1.19rem]">
              <span className="text-body leading-body text-black font-bold">
                10
              </span>
              <span className="text-body leading-body text-slate-S500">%</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <TabCategory
          categoryList={tabList}
          onCategory={onTabCategory}
          category={tab}
          activeStatusColor=""
          statusColor=""
        />

        <div>
          {tab.key === "intro" ? (
            <DetailProductIntro />
          ) : (
            <DetailProductNotice />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8 w-full py-2 border-t-[1px] border-t-slate-S200bg-white z-40 relative">
        <button
          type="button"
          className="flex flex-col justify-center items-center"
        >
          <StartIcon />
          <p>0</p>
        </button>
        <SolidButton
          text="구매하기"
          size="L"
          isPrimaryColor
          primaryColor="#5770F2"
          width="16rem"
          onClick={() => router.push(`/purchase/${detailId}`)}
        />
      </div>
    </div>
  );
}

const tabList = [
  {
    name: "상품 소개",
    key: "intro",
  },
  {
    name: "거래 시 유의 사항",
    key: "notice",
  },
];
