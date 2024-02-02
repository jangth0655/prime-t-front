"use client";

import { useCallback, useState } from "react";
import PageHeader from "../PageHeader";
import StatusCategory, { Status } from "../StatusCategory";

export default function Digiterra() {
  const [categoryStatus, setCategoryStatus] = useState<Status>({
    key: "all",
    name: "전체",
  });
  const onStatusCategory = useCallback((status: Status) => {
    setCategoryStatus(status);
  }, []);

  return (
    <div>
      <PageHeader title="디지테라" />
      <StatusCategory
        onStatusCategory={onStatusCategory}
        status={categoryStatus}
      />
    </div>
  );
}
