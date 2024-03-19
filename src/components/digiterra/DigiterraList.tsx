"use client";

import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInfiniteScroll } from "@/hooks/useScrollPosition";

import { QUERY_KEY } from "@/queryKey";
import { getProductAllAPI } from "@/services/products";

const LIMITED_PAGE = 10;

export default function DigiterraList() {
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
      return getProductAllAPI({
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

  return <div>Digiterra List</div>;
}
