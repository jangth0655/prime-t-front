"use client";

import { Status, useStatusCategoryStore } from "@/store/useCategoryStore";
import { motion } from "framer-motion";
import { useCallback } from "react";

type Props = {
  paddingTop?: string;
};

export default function StatusCategory({ paddingTop }: Props) {
  const { status, setStatus } = useStatusCategoryStore();

  const handleStatusCategory = useCallback(
    (category: Status) => {
      setStatus(category);
    },
    [setStatus]
  );

  return (
    <ul
      style={{
        paddingTop: paddingTop || "7.25rem",
      }}
      className="border-b-[1px] border-b-slate-S200 flex"
    >
      {statusList.map((item) => (
        <li
          onClick={() => handleStatusCategory(item)}
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
