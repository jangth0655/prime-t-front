"use client";

import { ChangeEvent } from "react";

import Divider from "../common/Divider";
import Input from "../common/Input";
import SolidButton from "../common/SolidButton";
import FeedInputRange from "../feed/FeedInputRange";
import FeedIssueAmount from "../feed/FeedIssueAmount";
import FeedLabel from "../feed/FeedLabel";

import { formatCurrency } from "@/utils/formatNumber";

const TOTAL_ISSUE = 9000000.0;
const DTA_ISSUE = 2;

type Props = {
  onQuantityRatioRange: (values: number[]) => void;
  quantityRatio: number;
  quantity: number | null;
  onChangeQuantity: (e: ChangeEvent<HTMLInputElement>) => void;
  onQuantityRatioInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function PurchaseInfo({
  onChangeQuantity,
  onQuantityRatioRange,
  onQuantityRatioInput,
  quantity,
  quantityRatio,
}: Props) {
  const stake = quantity ? (quantity / TOTAL_ISSUE) * 100 : 0;

  const purchasedDTAIssue = quantity ? quantity * DTA_ISSUE : 0.0;

  return (
    <div className="py-6 px-4">
      <p className="text-label leading-label text-slate-S400 flex items-center justify-end mb-4">
        *1 LTC = 2 DTA
      </p>
      <ul className="space-y-4">
        <li className="flex items-center justify-between">
          <FeedLabel label="최소구매랑" size="md" textColor="#797D9E" />
          <FeedIssueAmount issueAmount="1.000000" size="lg" unit="LTC" />
        </li>

        <li className="flex items-center justify-between">
          <FeedLabel label="보유수량" size="md" textColor="#797D9E" />
          <FeedIssueAmount issueAmount="9000000.000000" size="lg" unit="LTC" />
        </li>

        <li className="pb-2">
          <div className="flex items-center justify-between">
            <FeedLabel label="구매수량" size="md" textColor="#797D9E" />
            <Input
              padding="0"
              unit="LTC"
              width={"14.5rem"}
              isTextRight
              inputPaddingRight={"3rem"}
              type="number"
              onChange={onChangeQuantity}
              value={quantity || ""}
            />
          </div>
          <div className="mt-4 flex items-center justify-end">
            <p className="text-slate-S500 text-body leading-body">=</p>
            <div className="w-[13.75rem] flex items-center justify-end">
              <FeedIssueAmount
                issueAmount={formatCurrency(purchasedDTAIssue || "")}
                size="lg"
                unit="LTC"
              />
            </div>
          </div>
        </li>
      </ul>

      <Divider type="xs" />

      <div className="pt-2 pb-2">
        <div className="flex items-center space-x-2 justify-center">
          <Input
            padding="0"
            unit="%"
            width={"13.5rem"}
            isTextRight
            inputPaddingRight={"3rem"}
            type="text"
            onChange={onQuantityRatioInput}
            value={quantityRatio !== null ? quantityRatio : ""}
            maxLength={3}
          />
          <SolidButton size="M" isColorSlate text="충전하기" />
        </div>

        <div className="flex justify-center items-center py-5 mt-4 mb-2">
          <FeedInputRange
            values={[quantityRatio]}
            onChange={onQuantityRatioRange}
          />
        </div>

        <Divider type="xs" />

        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <FeedLabel label="잔여 수량" size="md" textColor="#797D9E" />
            <FeedIssueAmount
              issueAmount="9000000.000000"
              size="lg"
              unit="DTA"
            />
          </div>

          <div className="flex items-center justify-between">
            <FeedLabel label="지분" size="md" textColor="#797D9E" />
            <p className="text-body leading-body text-slate-500">
              {stake.toFixed(2)} %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
