"use client";

import { useCallback, useState } from "react";

import PageHeader from "../PageHeader";
import DigiterraList from "./DigiterraList";
import Selector, { SelectItemType } from "../common/Selector";

import axios from "axios";

export default function Digiterra() {
  const [categoryStatus, setCategoryStatus] = useState<StatusCategory>({
    name: "전체",
    key: "all",
  });

  const [sortedStatus, setSortedItem] = useState<SortCategory>({
    name: "추천 순",
    key: "recommended",
  });

  const onStatusCategory = useCallback((status: SelectItemType) => {
    setCategoryStatus(status as StatusCategory);
  }, []);

  const onSortedCategory = useCallback((status: SelectItemType) => {
    setSortedItem(status as SortCategory);
  }, []);

  type LoginTest = {
    access_token: string;
    token_type: string;
  };
  const logintestbutton = async () => {
    const response = await (
      await axios.post<Promise<LoginTest>>(
        "/api/v1/login",
        {
          username: "user@example.com",
          password: "secret_password",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
    ).data;

    return response;
  };

  return (
    <div>
      <PageHeader title="디지테라" />
      <div className="px-4 py-2 h-14 w-full mt-[7.25rem] flex items-center justify-center space-x-2 border-b-[1px] border-b-slate-S200">
        <Selector
          list={statusList}
          onSelected={onStatusCategory}
          selectedItem={categoryStatus}
          selectorBg="#2C3249"
          selectedColor="#12162A"
        />
        <Selector
          list={sortList}
          onSelected={onSortedCategory}
          selectedItem={sortedStatus}
          selectorBg="#2C3249"
          selectedColor="#12162A"
        />
      </div>
      <div className="p-4 border-2 rounded-md">
        <button onClick={logintestbutton}>로그인 테스트버튼</button>
      </div>
      <DigiterraList status={categoryStatus} />
    </div>
  );
}

export type StatusCategoryName = "전체" | "예정" | "진행중" | "마감";
export type StatusCategoryKey = "all" | "upcoming" | "progress" | "close";

export type SortCategoryName =
  | "추천 순"
  | "발행 수량 순"
  | "마감 임박 순"
  | "최신 순";
export type SortCategoryKey =
  | "recommended"
  | "quantity"
  | "deadline"
  | "latest";

type SortCategory = {
  name: SortCategoryName;
  key: SortCategoryKey;
};

export type StatusCategory = {
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

const sortList: SortCategory[] = [
  {
    name: "추천 순",
    key: "recommended",
  },
  {
    name: "발행 수량 순",
    key: "quantity",
  },
  {
    name: "마감 임박 순",
    key: "deadline",
  },
  {
    name: "최신 순",
    key: "latest",
  },
];
