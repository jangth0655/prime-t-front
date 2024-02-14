"use client";

import { StaticImageData } from "next/image";

import DigiterraItem from "./DigiterraItem";

import DigiterraImage_1 from "../../../public/assets/digiterra/digitera_thumbnail_1.png";
import DigiterraImage_2 from "../../../public/assets/digiterra/digitera_thumbnail_2.png";
import DigiterraImage_3 from "../../../public/assets/digiterra/digitera_thumbnail_3.png";
import DigiterraImage_4 from "../../../public/assets/digiterra/digitera_thumbnail_4.png";

import { StatusCategory } from "./Digiterra";

type Props = {
  status: StatusCategory;
};

export default function DigiterraList({ status }: Props) {
  const filterCategoryStatus =
    status.key === "all"
      ? digiterraList
      : digiterraList.filter((data) => data.status.key === status.key);

  return (
    <ul className="mt-4 space-y-4 px-4  flex-col flex justify-center items-center">
      <div className="w-[20.5rem]">
        <span className="text-label leading-label font-regular text-slate-S400">
          999개
        </span>
      </div>
      {filterCategoryStatus.map((item) => (
        <DigiterraItem key={item.key} item={item} />
      ))}
    </ul>
  );
}

export type DigiterraType = {
  status: StatusCategory;
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
    image: DigiterraImage_1,
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
    image: DigiterraImage_2,
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
    image: DigiterraImage_3,
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
    image: DigiterraImage_4,
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
    image: DigiterraImage_1,
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
    image: DigiterraImage_2,
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
    image: DigiterraImage_3,
  },
];
