"use client";

import Link from "next/link";
import Image from "next/image";

import FeedTitle from "../feed/FeedTitle";
import FeedCompleteRate from "../feed/FeedCompleteRate";
import Divider from "../common/Divider";
import FeedCountDown from "../feed/FeedCountDown";
import FeedIssueUnitInfo from "../feed/FeedIssueUnitInfo";
import FeedTokenQuantity from "../feed/FeedTokenQuantity";

import { routes } from "@/routes";
import { DigiterraType } from "./DigiterraList";

type Props = {
  item: DigiterraType;
};

export default function DigiterraItem({ item }: Props) {
  return (
    <Link href={`${routes.digiterra}/${item.key}`}>
      <li className="pt-1 pb-4 px-4 w-[20.5rem] border-[1px] border-slate-S200 rounded-lg">
        <div className="py-2 flex justify-between items-center">
          <span className="text-label leading-label text-slate-S400 font-regular">
            0000.00.00~0000.00.00
          </span>
          <FeedCountDown date="000" />
        </div>

        <Divider type="sm" />

        <div className="flex h-full mt-2">
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

          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-1">
                <FeedTitle text="청약 예시 문구입니다. " />
              </div>
              <FeedIssueUnitInfo unitInfo="총 발행 수량 (1LTC=2DTA)" />
              <FeedTokenQuantity unit="DTA" quantity={10000000000} />
            </div>
            {item.status.key === "progress" && (
              <div className="flex justify-between items-center">
                <FeedCompleteRate text={item.anyText} />
              </div>
            )}
          </div>
        </div>
      </li>
    </Link>
  );
}
