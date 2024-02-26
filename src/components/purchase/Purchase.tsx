"use client";

import PageHeader from "../PageHeader";
import BottomToggleInfo from "../common/BottomToggleInfo";
import Divider from "../common/Divider";
import PurchaseInfo from "./PurchaseInfo";

import DigiterraItem from "../digiterra/DigiterraItem";
import { digiterraList } from "../digiterra/DigiterraList";
import { ChangeEvent, useState } from "react";
import PurchasePreTerm from "./PurchasePreTerm";
import PurchaseRuleTerm from "./PurchaseRuleTerm";
import SolidButton from "../common/SolidButton";

const ASSET_QUANTITY = 9000000.0;
const MAX_QUANTITY = 9000000.0;
const MIN_QUANTITY = 0;

export default function Purchase() {
  const [quantity, setQuantity] = useState<number | null>(null);
  const [quantityRatio, setQuantityRatio] = useState<number>(0);
  const [isPrePurchaseTerm, setIsPrePurchaseTerm] = useState(false);
  const [isPurchaseRule, setIsPurchaseRule] = useState(false);

  const onQuantityRatioRange = (values: number[]) => {
    const value = values[0];
    setQuantityRatio(value);
    setQuantity((value / 100) * ASSET_QUANTITY);
  };

  const onQuantityRatioInput = (e: ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9]*$/;
    if (re.test(e.target.value) && Number(e.target.value) <= 100) {
      setQuantityRatio(Number(e.target.value));
      setQuantity((Number(e.target.value) / 100) * ASSET_QUANTITY);
    } else {
      e.target.value = String(quantityRatio);
    }
  };

  const onTogglePrePurchaseTerm = () => {
    setIsPrePurchaseTerm((pre) => !pre);
  };

  const onTogglePurchaseRule = () => {
    setIsPurchaseRule((pre) => !pre);
  };

  const onChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    // 갖고있는 수량이 최대값
    // 최소수량 이상만 입력 가능
    const inputNumber = Number(e.target.value);

    const formatNumber =
      inputNumber < MIN_QUANTITY
        ? MIN_QUANTITY
        : inputNumber > MAX_QUANTITY
        ? MAX_QUANTITY
        : inputNumber;

    setQuantity(formatNumber);
    const ratio = Math.floor((formatNumber / ASSET_QUANTITY) * 100);
    setQuantityRatio(ratio > 0 ? (ratio <= 100 ? ratio : 100) : 0);
  };

  return (
    <div className="pt-[7.25rem]">
      <PageHeader title="구매하기" />
      <div className="h-full">
        <BottomToggleInfo title="상품 정보" contentHeight={208} isDefaultOpen>
          <div className="px-4 py-6 flex justify-center items-center">
            <DigiterraItem item={digiterraList[0]} />
          </div>
        </BottomToggleInfo>
      </div>
      <Divider type="sm" />

      <div>
        <BottomToggleInfo title="구매 정보" contentHeight={436} isDefaultOpen>
          <PurchaseInfo
            onQuantityRatioRange={onQuantityRatioRange}
            onChangeQuantity={onChangeQuantity}
            quantityRatio={quantityRatio}
            quantity={quantity}
            onQuantityRatioInput={onQuantityRatioInput}
          />
        </BottomToggleInfo>
      </div>

      <Divider type="sm" />

      <BottomToggleInfo
        title="결제 전 이용 약관"
        contentHeight={184}
        isDefaultOpen
      >
        <PurchasePreTerm
          checked={isPrePurchaseTerm}
          onCheck={onTogglePrePurchaseTerm}
        />
      </BottomToggleInfo>

      <Divider type="sm" />

      <BottomToggleInfo title="거래 규정" contentHeight={184} isDefaultOpen>
        <PurchaseRuleTerm
          checked={isPurchaseRule}
          onCheck={onTogglePurchaseRule}
        />
      </BottomToggleInfo>

      <div className="flex items-center justify-center pb-14">
        <SolidButton
          isPrimaryColor
          text="구매하기"
          size="L"
          primaryColor="#5770F2"
          width="20.5rem"
        />
      </div>
    </div>
  );
}
