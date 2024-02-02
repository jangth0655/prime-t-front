"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import DigitterBgImage from "../../../public/assets/slider/digiterra.png";
import DigitterLogoImage from "../../../public/assets/logos/digitera_logo.png";
import PorkHubBgImage from "../../../public/assets/slider/porkHub.png";
import PorkHubLogoImage from "../../../public/assets/logos/porkhub_logo.png";

import { cls } from "@/utils/cls";
import LeftArrowIcon from "@/icons/LeftArrowIcon";
import { routes } from "@/routes";

const sliderVariants: Variants = {
  initial: ({ direction, isInitialVisible }) => ({
    opacity: 0,
    x: isInitialVisible ? "0" : direction === "right" ? "-100%" : "100%",
  }),
  animate: {
    opacity: 1,
    x: "0",
  },
  exit: ({ direction, _ }) => ({
    opacity: 0,
    x: direction === "right" ? "100%" : "-100%",
  }),
};

const MAX_INDEX = 2;

export default function ServiceCategory() {
  const [visible, setVisible] = useState(0);
  const [isInitialVisible, setIsInitialVisible] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [direction, setDirection] = useState("right");

  const rightSlide = useCallback(async () => {
    if (isButtonDisabled) return;
    setIsButtonDisabled(true);
    await setDirection("right");
    setVisible((prev) => (prev === MAX_INDEX ? 0 : prev + 1));
    setIsInitialVisible(false);
  }, [isButtonDisabled]);

  const leftSlide = useCallback(async () => {
    if (isButtonDisabled) return;
    setIsButtonDisabled(true);
    await setDirection("left");
    setVisible((prev) => (prev === 0 ? MAX_INDEX : prev - 1));
    setIsInitialVisible(false);
  }, [isButtonDisabled]);

  const animationComplete = () => {
    setIsButtonDisabled(false);
  };

  return (
    <section className="bg-black h-[100vh] flex justify-center items-center ">
      <ul className="w-[20.5rem] h-[24rem] relative flex justify-center items-center">
        <button
          onClick={leftSlide}
          className="absolute left-0 w-10 h-10 flex justify-center items-center"
        >
          <LeftArrowIcon />
        </button>

        <AnimatePresence mode="wait">
          {slideList.map(
            (item, index) =>
              index === visible && (
                <Link
                  href={item.pageUrl}
                  key={visible}
                  className="absolute top-0"
                >
                  <motion.li
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={{
                      direction,
                      isInitialVisible,
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                    onAnimationComplete={animationComplete}
                  >
                    <div className="relative w-[15rem] h-[22.5rem]">
                      {item.bg ? (
                        <Image
                          fill
                          src={item.bg}
                          alt=""
                          priority
                          placeholder="blur"
                        />
                      ) : (
                        <div className="absolute w-full h-full bg-slate-S600 rounded-lg" />
                      )}
                    </div>
                    <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center space-y-2">
                      {item.logo && (
                        <div
                          className={cls(
                            item.key === "digiterra" ? "h-12" : "h-8",
                            "w-20 relative"
                          )}
                        >
                          <Image fill src={item.logo} alt="logo" priority />
                        </div>
                      )}
                      <p className="text-h3 font-bold leading-h3 text-white">
                        {item.title}
                      </p>
                    </div>
                  </motion.li>
                </Link>
              )
          )}
        </AnimatePresence>

        <div className="w-full space-x-4 flex justify-center bottom-0 absolute">
          {slideList.map((_, index) => (
            <div
              key={index}
              className={cls(
                index === visible ? "bg-white" : "bg-slate-400",
                "w-2 h-2 rounded-full"
              )}
            />
          ))}
        </div>

        <button
          onClick={rightSlide}
          type="button"
          className="absolute right-0 rotate-180 w-10 h-10 flex justify-center items-center"
        >
          <LeftArrowIcon />
        </button>
      </ul>
    </section>
  );
}

type SliderKey = "digiterra" | "porkHub" | "ready";

type Slider = {
  key: SliderKey;
  title: string;
  bg?: StaticImageData;
  logo?: StaticImageData;
  pageUrl: string;
};

const slideList: Slider[] = [
  {
    key: "digiterra",
    title: "디지테라",
    bg: DigitterBgImage,
    logo: DigitterLogoImage,
    pageUrl: routes.digiterra,
  },
  {
    key: "porkHub",
    title: "포크허브",
    bg: PorkHubBgImage,
    logo: PorkHubLogoImage,
    pageUrl: routes.porkHub,
  },
  {
    key: "ready",
    title: "페이지 준비중입니다.",
    pageUrl: routes.serviceCategory,
  },
];
