"use client";

import { cls } from "@/utils/cls";
import { motion } from "framer-motion";

type Props = {
  paddingTop?: string;
  onStatusCategory: (item: StatusCategoryType) => void;
  status: StatusCategoryType;
  activeStatusColor: string;
  statusColor: string;
  isPorkHub? : boolean;
};

export default function StatusCategory({
  paddingTop,
  onStatusCategory,
  status,
  activeStatusColor,
  statusColor,
  isPorkHub
}: Props) {
  return (
    <ul
      style={{
        paddingTop: paddingTop || "7.25rem",
      }}
      className={ isPorkHub === true ? "bg-slate-S900 border-b-[1px] border-b-slate-S600 flex" : "border-b-[1px] border-b-slate-S200 flex" }
    >
      {statusList.map((item) => (
        <li
          onClick={() => onStatusCategory(item)}
          key={item.key}
          className="min-w-[5.625rem] w-full h-14 flex justify-center items-center relative cursor-pointer px-4"
        >
          <span
            style={{
              color: status.key === item.key ? activeStatusColor : statusColor,
            }}
            className={cls(
              status.key === item.key ? "font-bold " : "font-regular",
              "text-body leading-body"
            )}
          >
            {item.name}
          </span>
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

export type StatusCategoryKey = "all" | "upcoming" | "progress" | "close";
export type StatusCategoryName = "전체" | "예정" | "진행중" | "마감";

export type StatusCategoryType = {
  name: StatusCategoryName;
  key: StatusCategoryKey;
};

const statusList: StatusCategoryType[] = [
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
