"use client";

import { useCallback, useState } from "react";
import PageHeader from "../PageHeader";
import StatusCategory, { StatusCategoryType } from "../StatusCategory";
import PorkHubList from './PorkHubList'
export default function PorkHub() {
  const [categoryStatus, setCategoryStatus] = useState<StatusCategoryType>({
    key: "all",
    name: "전체",
  });
  const onStatusCategory = useCallback((status: StatusCategoryType) => {
    setCategoryStatus(status);
  }, []);

  return (
    <div>
      <PageHeader title="포크허브" isPorkHub={ true } />
      <StatusCategory
        onStatusCategory={onStatusCategory}
        status={categoryStatus}
        statusColor="#797D9E"
        isPorkHub={true}
        activeStatusColor="#eef1ff"
      />
      <PorkHubList status={categoryStatus}/>
    </div>
  );
}
