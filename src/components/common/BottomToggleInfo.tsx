"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";

import TopChevron from "../../icons/topChevron.svg";
import { cls } from "@/utils/cls";
import { useCallback, useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  isPorkHub?: boolean;
  styles?: string;
  contentHeight?: number;
};

const toggleVariants: Variants = {
  initial: {
    opacity: 0,
    height: 0,
    y: -100,
  },
  animate: (contentHeight: number) => ({
    opacity: 1,
    height: contentHeight || "100%",
    y: 0,
  }),
  exit: {
    opacity: 0,
    height: 0,
    y: -100,
  },
};

export default function BottomToggleInfo({
  title,
  children,
  isPorkHub,
  styles,
  contentHeight,
}: Props) {
  const [isActive, setIsActive] = useState(false);

  const onToggleActive = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  return (
    <div>
      <div
        className={cls(
          isPorkHub ? "" : "",
          "flex items-center justify-between h-14 border-b-[1px] border-b-slate-S200 pr-2 pl-4"
        )}
      >
        <p>{title}</p>
        <button
          type="button"
          onClick={onToggleActive}
          className={cls(
            isActive ? "rotate-0" : "rotate-180",
            "w-10 h-10 flex justify-center items-center"
          )}
        >
          <TopChevron />
        </button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence>
          {isActive && (
            <motion.div
              custom={contentHeight}
              variants={toggleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                ease: "easeInOut",
              }}
              className={styles}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
