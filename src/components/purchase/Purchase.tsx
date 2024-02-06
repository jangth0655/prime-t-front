"use client";

import PageHeader from "../PageHeader";
import BottomToggleInfo from "../common/BottomToggleInfo";
import Divider from "../common/Divider";
import BuyerInfo from "./BuyerInfo";

export default function Purchase() {
  return (
    <div className="pt-[7.25rem]">
      <PageHeader title="구매하기" />
      <BottomToggleInfo title="구매자">
        <div className="px-4 py-6">
          <BuyerInfo label="구매자 이름" value="김 AA" />
          <BuyerInfo label="핸드폰 번호" value="010-1234-5678" />
          <BuyerInfo label="이메일 주소" value="asdf1234@gmail.com" />
        </div>
      </BottomToggleInfo>
      <Divider />
    </div>
  );
}
