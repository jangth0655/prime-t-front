"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { StatusCategoryType } from "../StatusCategory";
import StatusTag from "../common/StatusTag";
import FeedExpirationDate from "../feed/FeedExpirationDate";
import FeedTitle from "../feed/FeedTitle";
import FeedEntity from "../feed/FeedEntity";
import FeedCompleteRate from "../feed/FeedCompleteRate";

import PorkHubImage_1 from "../../../public/assets/porkHub/porkHub_thumbnail_1.png";
import PorkHubImage_2 from "../../../public/assets/porkHub/porkHub_thumbnail_2.png";
import PorkHubImage_3 from "../../../public/assets/porkHub/porkHub_thumbnail_3.png";
import PorkHubImage_4 from "../../../public/assets/porkHub/porkHub_thumbnail_4.png";
import { routes } from "@/routes";

type Props = {
  status: StatusCategoryType;
};

export default function DigiterraList({ status }: Props) {
  const filterCategoryStatus =
    status.key === "all"
      ? digiterraList
      : digiterraList.filter((data) => data.status.key === status.key);

  return (
    <ul className="pt-4 space-y-4 px-4  flex-col flex justify-center items-center bg-slate-S900">
      {filterCategoryStatus.map((item) => (
        <Link href={`${routes.digiterra}/${item.key}`} key={item.key}>
          <li className="w-[20.5rem] rounded-lg">
            <div className="flex h-full">
              <div className="mr-2 min-w-[7.5rem]">
                {item.image ? (
                  <Image
                    width={120}
                    height={120}
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
                  <FeedTitle
                    text="청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다"
                    isPorkHub={true}
                  />
                  <FeedEntity text="청약단체/인물" isPorkHub={true} />
                  <FeedExpirationDate date="0000.00.00" />
                </div>
                <div className="flex justify-between items-center">
                  <FeedCompleteRate isPorkHub={true} text={item.anyText} />
                  <StatusTag statusType={item.status} />
                </div>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

type DigiterraType = {
  status: StatusCategoryType;
  description: string;
  entity: string;
  key: number;
  anyText: string;
  image?: StaticImageData;
};

const digiterraList: DigiterraType[] = [
  {
    status: {
      key: "progress",
      name: "진행중",
    },
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    entity: "청약단체/인물",
    key: 1,
    anyText: "0000% 달성",
    image: PorkHubImage_1,
  },
  {
    status: {
      key: "progress",
      name: "진행중",
    },
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    entity: "청약단체/인물",
    key: 2,
    anyText: "0000% 달성",
    image: PorkHubImage_2,
  },

  {
    status: {
      key: "upcoming",
      name: "예정",
    },
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    entity: "청약단체/인물",
    key: 3,
    anyText: "0000% 달성",
    image: PorkHubImage_3,
  },
  {
    status: {
      key: "close",
      name: "마감",
    },
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    entity: "청약단체/인물",
    key: 4,
    anyText: "0000% 달성",
    image: PorkHubImage_4,
  },
  {
    status: {
      key: "close",
      name: "마감",
    },
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    entity: "청약단체/인물",
    key: 5,
    anyText: "0000% 달성",
    image: PorkHubImage_1,
  },
  {
    status: {
      key: "close",
      name: "마감",
    },
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    entity: "청약단체/인물",
    key: 6,
    anyText: "0000% 달성",
    image: PorkHubImage_2,
  },
  {
    status: {
      key: "close",
      name: "마감",
    },
    description:
      "청약 예시 문구입니다. 두 줄 이상 넘어갈 시 말줄임 표시를 추가합니다",
    entity: "청약단체/인물",
    key: 7,
    anyText: "0000% 달성",
    image: PorkHubImage_3,
  },
];
