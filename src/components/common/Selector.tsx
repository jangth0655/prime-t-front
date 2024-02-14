"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LeftArrowIcon from "@/icons/LeftArrowIcon";
import { cls } from "@/utils/cls";

export type SelectorItem = Record<"key" | "name", string>;

type Props = {
  list: SelectorItem[];
  onSelected: (item: SelectorItem) => void;
  selectedItem: SelectorItem;
  selectedColor?: string;
  selectorBg?: string;
  activeBorderColor?: string;
};

export default function Selector({
  list,
  onSelected,
  selectedItem,
  selectedColor,
  selectorBg,
  activeBorderColor,
}: Props) {
  const [isActive, setIsActive] = useState(false);

  const onToggleActive = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const onSelectedItem = useCallback(
    (item: SelectorItem) => {
      onSelected(item);
      setIsActive(false);
    },
    [onSelected]
  );

  return (
    <div className="relative z-30">
      <div
        onClick={onToggleActive}
        style={{
          backgroundColor: selectedColor,
          borderColor: activeBorderColor || "#5770F2",
        }}
        className={cls(
          isActive ? "border-[1px]" : "",
          "w-[10rem] p-2 flex items-center justify-between cursor-pointer"
        )}
      >
        <span className="text-body leading-body font-regular text-slate-S200">
          {selectedItem.name}
        </span>
        <div
          className={cls(
            isActive ? "rotate-90" : "-rotate-90",
            "transition-all"
          )}
        >
          <LeftArrowIcon color="#ffffff" />
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.ul
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute w-[10rem] z-20"
          >
            {list.map((item) => (
              <li
                onClick={() => onSelectedItem(item)}
                style={{
                  backgroundColor:
                    item.key === selectedItem.key ? selectedColor : selectorBg,
                }}
                key={item.key}
                className="h-10 pl-2 flex items-center cursor-pointer"
              >
                <span className="text-body leading-body font-regular text-slate-S300">
                  {item.name}
                </span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export type SelectItemType = {
  name: string;
  key: string;
};
