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
  border?: string;
  width?: string;
  height?: string;
};

export default function InputSelector({
  list,
  onSelected,
  selectedItem,
  selectedColor,
  selectorBg,
  activeBorderColor,
  border,
  width,
  height,
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
          border: border,
        }}
        className={cls(
          width ? width : "w-[10rem]",
          "p-2 h-10 flex items-center justify-between cursor-pointer"
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
            style={{ borderColor: "#5770F2" }}
            className={cls(
              width ? width : "w-[10rem]",
              "absolute w-[10rem] h-full z-20 border-t-[1px]"
            )}
          >
            {list.map((item) => (
              <li
                onClick={() => onSelectedItem(item)}
                style={{
                  backgroundColor:
                    item.key === selectedItem.key ? selectedColor : selectorBg,
                }}
                key={item.key}
                className=" pl-2 flex items-center cursor-pointer"
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
