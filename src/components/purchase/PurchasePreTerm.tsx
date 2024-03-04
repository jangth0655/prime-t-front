"use client";

import CheckBox from "../shared/CheckBox";

type Props = {
  checked: boolean;
  onCheck: () => void;
};

export default function PurchasePreTerm({ checked, onCheck }: Props) {
  return (
    <div className="px-4">
      <p className="py-6 text-body-s leading-body-s text-slate-S500 border-b-[1px] border-b-slate-S200">
        이용약관에 대한 설명입니다.이용약관에 대한 설명입니다.이용약관에 대한
        설명입니다.
      </p>

      <div className="pt-4 pb-10">
        <div
          onClick={onCheck}
          className="py-2 min-w-[20.5rem] bg-slate-S200 rounded-lg flex items-center cursor-pointer"
        >
          <CheckBox checked={checked} />
          <p className="text-body leading-body">이용약관에 대해 동의합니다.</p>
        </div>
      </div>
    </div>
  );
}
