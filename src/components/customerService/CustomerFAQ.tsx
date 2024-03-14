"use client";

import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/shared/Input";

type FAQType = {
  answer: string;
  question: string;
  mod_at: string;
  category: string;
  no: number;
  title: string;
  reg_dt: string;
};

const LIMITED_PAGE = 10;

export default function CustomerFAQ() {
  const { register, watch, handleSubmit } = useForm();
  const faqSearch = watch("faqSearch");
  const [searched, setSearched] = useState(false);
  const faqAPI = async (
    pageParam: number,
    limitPage: number,
    searchValue: string
  ) => {
    try {
      const response = await axios.get("api/v1/faqs", {
        params: {
          // category: "NONE",
          offset: pageParam,
          limit: limitPage,
          sort: "",
          search: searchValue,
        },
        headers: {
          accept: "application/json",
        },
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["faq-list"],
    queryFn: ({ pageParam }) => faqAPI(pageParam, LIMITED_PAGE, faqSearch),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages.length;
      const totalPages = lastPage.pagination_pages;

      if (currentPage <= totalPages) {
        return currentPage * LIMITED_PAGE;
      } else {
        return;
      }
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (searchData) => {
    try {
      const faqSearchData = await faqAPI(0, LIMITED_PAGE, searchData.faqSearch);
      console.log(faqSearchData);
    } catch (err) {
      console.log(err);
    }
  };
  const onMoreData = () => {
    fetchNextPage();
    //검색어가 있는지 없는지 에 따라 호출할 api 변경
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div>FAQ (자주묻는 질문)</div>
      </div>

      <div className="w-full flex justify-center mt-10 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input register={register("faqSearch")} />
          <button type="submit"></button>
        </form>
      </div>

      <div className="w-full justify-center flex mt-20">
        <div>
          {data?.pages.map((page, index) =>
            page.items.map((item: FAQType) => (
              <React.Fragment key={item.no}>
                <div className="m-10 w-full border-2 border-primary-P500">
                  <div className="my-4">Answer : {item.answer}</div>
                  <div className="my-4">Question : {item.question}</div>
                  <div className="my-4">Category : {item.category}</div>
                  <div className="my-4">Title : {item.title}</div>
                </div>
              </React.Fragment>
            ))
          )}
        </div>
      </div>
      <div className="w-full flex mt-10 justify-center">
        <button onClick={onMoreData}>더 보기</button>
      </div>
    </div>
  );
}
