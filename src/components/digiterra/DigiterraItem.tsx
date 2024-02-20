"use client";

import Link from "next/link";
import Image from "next/image";

import FeedTitle from "../feed/FeedTitle";
import FeedCompleteRate from "../feed/FeedCompleteRate";
import Divider from "../common/Divider";
import FeedIssueUnitInfo from "../feed/FeedIssueUnitInfo";

import { routes } from "@/routes";
import { DigiterraType } from "./DigiterraList";
import { formatCurrency } from "@/utils/formatNumber";
import FeedLabel from "../feed/FeedLabel";
import FeedPeriodWithRange from "../feed/FeedPeriodWithRange";
import FeedIssueAmount from "../feed/FeedIssueAmount";

type Props = {
  item: DigiterraType;
};

export default function DigiterraItem({ item }: Props) {
  return (
    <Link href={`${routes.digiterra}/${item.key}`}>
      <li className="py-2 px-2 w-[20.5rem] border-[1px] border-slate-S200 rounded-lg">
        <div className="flex flex-col">
          <div className="flex h-full">
            {/* 이미지 */}
            <div className="mr-2 min-w-[5.75rem]">
              {item.image ? (
                <Image
                  width={112}
                  height={112}
                  src={item.image}
                  alt=""
                  className="object-cover rounded-lg"
                />
              ) : (
                <div className="w-[5.75rem] h-[5.75rem] bg-slate-S400 rounded-lg" />
              )}
            </div>

            {/* 상품 정보 */}
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="mb-1">
                  <FeedTitle text="판매 예정 상품 예시입니다." />
                </div>
                <FeedIssueUnitInfo unitInfo="총 발행 수량 (1LTC=2DTA)" />
                <FeedIssueAmount
                  size="md"
                  unit="DTA"
                  issueAmount={formatCurrency(10000000000, 0)}
                />
              </div>

              {/* 판매 예정은 x */}
              <div>
                {item.status.key !== "upcoming" && (
                  <div className="flex justify-between items-center">
                    <FeedCompleteRate
                      text={item.anyText}
                      size="md"
                      textColor="#5770F2"
                      fontWeightNumber={700}
                    />

                    <FeedCompleteRate
                      text="(예상 수익률 000% )"
                      size="sm"
                      textColor="#5770F2"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 기간 */}
          <div>
            <div className="mt-2 mb-1">
              <Divider type="sm" />
            </div>

            <ul className="flex items-center space-x-2">
              <li className="flex flex-col">
                <div className="flex items-center space-x-1 ">
                  <div>
                    <FeedLabel
                      size="sm"
                      label="판매 기간"
                      textColor="#797D9E"
                    />
                  </div>
                  {item.status.key === "progress" && (
                    <div className="flex items-center space-x-1">
                      <FeedLabel
                        size="sm"
                        label="(000일 남음)"
                        textColor="#5770F2"
                      />
                    </div>
                  )}
                </div>
                <div className="w-[9.5rem]">
                  <FeedPeriodWithRange
                    startDate="0000.00.00"
                    endDate="0000.00.00"
                  />
                </div>
              </li>

              <li className="flex flex-col">
                <div className="flex items-center space-x-1 ">
                  <FeedLabel size="sm" label="운영 기간" textColor="#797D9E" />
                </div>
                <div>
                  <FeedPeriodWithRange
                    startDate="0000.00.00"
                    endDate="0000.00.00"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </Link>
  );
}
