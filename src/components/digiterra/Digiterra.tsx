"use client";

import { useCallback, useState } from "react";
import PageHeader from "../PageHeader";
import StatusCategory, { StatusCategoryType } from "../StatusCategory";
import DigiterraList from "./DigiterraList";

export default function Digiterra() {
  const [categoryStatus, setCategoryStatus] = useState<StatusCategoryType>({
    key: "all",
    name: "전체",
  });
  const onStatusCategory = useCallback((status: StatusCategoryType) => {
    setCategoryStatus(status);
  }, []);

  return (
    <div>
      <PageHeader title="디지테라" />
      <StatusCategory
        onStatusCategory={onStatusCategory}
        status={categoryStatus}
        statusColor="#797D9E"
        activeStatusColor="#000000"
      />
      <DigiterraList status={categoryStatus} />
    </div>
  );
}
