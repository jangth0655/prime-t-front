"use client";

import { cls } from "@/utils/cls";
import { motion } from "framer-motion";

type Props = {
  onCategory: (item: CategoryType) => void;
  categoryList: CategoryType[];
  category: CategoryType;
  paddingTop?: string;
  activeStatusColor: string;
  statusColor: string;
  isPorkHub?: boolean;
};

export default function TabCategory({
  paddingTop,
  onCategory,
  category,
  activeStatusColor,
  statusColor,
  isPorkHub,
  categoryList,
}: Props) {
  return (
    <ul
      style={{
        paddingTop: paddingTop || "7.25rem",
      }}
      className={
        isPorkHub === true
          ? "bg-slate-S900 border-b-[1px] border-b-slate-S600 flex"
          : "border-b-[1px] border-b-slate-S200 flex"
      }
    >
      {categoryList.map((item) => (
        <li
          onClick={() => onCategory(item)}
          key={item.key}
          className="min-w-[5.625rem] w-full h-14 flex justify-center items-center relative cursor-pointer px-4"
        >
          <span
            style={{
              color:
                category.key === item.key ? activeStatusColor : statusColor,
            }}
            className={cls(
              category.key === item.key ? "font-bold " : "font-regular",
              "text-body leading-body"
            )}
          >
            {item.name}
          </span>
          {category.key === item.key && (
            <motion.div
              layoutId="category"
              className="absolute w-full h-[1px] bg-primary-P100 bottom-0"
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export type CategoryType = {
  name: string;
  key: string;
};
