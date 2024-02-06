"use client";

import { useCallback, useState } from "react";

import { FAQItemType } from "./FAQ";
import PlusIcon from "../../icons/plusIcon.svg";
import MinusIcon from "../../icons/minusIcon.svg";

type Props = {
  item: FAQItemType;
};

export default function FAQItem({ item }: Props) {
  const [isActive, setIsActive] = useState(false);
  const { description, title } = item;

  const toggleDescription = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  return (
    <li onClick={toggleDescription} className="">
      <div className="flex justify-between items-center w-full p-4 border-b-[1px] border-b-slate-S500 cursor-pointer">
        <p className="text-body leading-body text-slate-S200 font-regular">
          {title}
        </p>
        <div>{isActive ? <MinusIcon /> : <PlusIcon />}</div>
      </div>

      {isActive && (
        <ul className="space-y-4 bg-slate-S800 p-4">
          {description.map((item) => (
            <li
              key={item.key}
              className="text-body-s leading-body-s text-slate-S200 font-regular"
            >
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
