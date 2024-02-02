"use client";

import { motion } from "framer-motion";

type Props = {
  paddingTop?: string;
  onStatusCategory: (item: Status) => void;
  status: Status;
};

export default function StatusCategory({
  paddingTop,
  onStatusCategory,
  status,
}: Props) {
  return (
    <ul
      style={{
        paddingTop: paddingTop || "7.25rem",
      }}
      className="border-b-[1px] border-b-slate-S200 flex"
    >
      {statusList.map((item) => (
        <li
          onClick={() => onStatusCategory(item)}
          key={item.key}
          className="min-w-[5.625rem] w-full h-14 flex justify-center items-center relative cursor-pointer px-4"
        >
          <span className="text-body font-bold leading-body">{item.name}</span>
          {status.key === item.key && (
            <motion.div
              layoutId="status"
              className="absolute w-full h-[1px] bg-primary-P100 bottom-0"
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export type StatusKey = "all" | "upcoming" | "progress" | "close";
export type StatusName = "전체" | "예정" | "진행중" | "마감";

export type Status = {
  name: StatusName;
  key: StatusKey;
};

const statusList: Status[] = [
  {
    name: "전체",
    key: "all",
  },
  {
    name: "예정",
    key: "upcoming",
  },
  {
    name: "진행중",
    key: "progress",
  },
  {
    name: "마감",
    key: "close",
  },
];
