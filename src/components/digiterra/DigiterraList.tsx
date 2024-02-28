"use client";

import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInfiniteScroll } from "../hooks/useScrollPosition";

import DigiterraItem from "./DigiterraItem";

import { StatusCategory } from "./Digiterra";
import { QUERY_KEY } from "@/queryKey";
import { getProductAll } from "@/services/products";

type Props = {
  status: StatusCategory;
};

const LIMITED_PAGE = 10;

export default function DigiterraList({ status }: Props) {
  const { isScrolled, markerRef, observe } = useInfiniteScroll();
  const {
    data: digiterraList,
    isLoading,
    hasNextPage,
    isSuccess,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.PRODUCT],
    queryFn: ({ pageParam }) => {
      return getProductAll({
        prd_type: "TYPE_A",
        offset: pageParam,
        limit: LIMITED_PAGE,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages.length;
      const totalPages = lastPage.pagination_pages;

      if (currentPage < totalPages) {
        return currentPage * LIMITED_PAGE;
      } else {
        return;
      }
    },
  });

  useEffect(() => {
    if (isScrolled && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isScrolled]);

  useEffect(() => {
    if (isSuccess) {
      observe();
    }
  }, [isSuccess, observe]);

  return (
    <div>
      <ul className="mt-4 space-y-4 px-4  flex-col flex justify-center items-center">
        <div className="w-[20.5rem]">
          <span className="text-label leading-label font-regular text-slate-S400">
            999개
          </span>
        </div>
        {digiterraList?.pages.map((page, index) =>
          page.items.map((item) => (
            <React.Fragment key={item.id}>
              <DigiterraItem product={item} />
            </React.Fragment>
          ))
        )}
      </ul>

      {digiterraList?.pages && <div ref={markerRef} />}
    </div>
  );
}
