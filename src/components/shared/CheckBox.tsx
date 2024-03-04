"use client";

import { cls } from "@/utils/cls";
import CheckIcon from "../../icons/checkIcon.svg";

type Props = {
  checked: boolean;
  onCheck?: () => void;
};

export default function CheckBox({ checked, onCheck }: Props) {
  return (
    <div className="p-3">
      <button
        className={cls(
          checked ? "bg-primary-P300" : "",
          "w-4 h-4 rounded border-[1px] border-white flex items-center justify-center"
        )}
      >
        {checked && <CheckIcon />}
      </button>
    </div>
  );
}
