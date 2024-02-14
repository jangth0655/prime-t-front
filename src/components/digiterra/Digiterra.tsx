"use client";

import { useCallback, useState } from "react";
import PageHeader from "../PageHeader";
import DigiterraList from "./DigiterraList";
import { CategoryType } from "../common/TabCategory";

export default function Digiterra() {
  const [categoryStatus, setCategoryStatus] = useState<StatusCategory>({
    key: "all",
    name: "전체",
  });
  const onStatusCategory = useCallback((status: CategoryType) => {
    setCategoryStatus(status as StatusCategory);
  }, []);

  return (
    <div>
      <PageHeader title="디지테라" />
      <DigiterraList status={categoryStatus} />
    </div>
  );
}

export type StatusCategoryName = "전체" | "예정" | "진행중" | "마감";
export type StatusCategoryKey = "all" | "upcoming" | "progress" | "close";

type StatusCategory = {
  name: StatusCategoryName;
  key: StatusCategoryKey;
};

const statusList: StatusCategory[] = [
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
