"use client";

import Link from "next/link";
import Image from "next/image";

import FeedExpirationDate from "../feed/FeedExpirationDate";
import FeedTitle from "../feed/FeedTitle";
import FeedEntity from "../feed/FeedEntity";
import FeedCompleteRate from "../feed/FeedCompleteRate";
import StatusTag from "../common/StatusTag";

import { routes } from "@/routes";
import { DigiterraType } from "./DigiterraList";

type Props = {
  item: DigiterraType;
};

export default function DigiterraItem({ item }: Props) {
  return (
    <Link href={`${routes.digiterra}/${item.key}`}>
      <li className="pt-1 pb-4 px-4 w-[20.5rem] border-[1px] border-slate-S200 rounded-lg">
        <FeedExpirationDate date="0000.00.00" />
        <div className="flex h-full">
          <div className="mr-2 min-w-[5.75rem]">
            {item.image ? (
              <Image
                width={92}
                height={92}
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
              <FeedTitle text="청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다" />
              <FeedEntity text="청약단체/인물" />
            </div>
            <div className="flex justify-between items-center">
              <FeedCompleteRate text={item.anyText} />
              <StatusTag statusType={item.status} />
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
