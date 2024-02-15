"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

import HamburgerMenuIcon from "../icons/hamburgerMenuIcon.svg";
import CloseIcon from "@/icons/CloseIcon";
import LogoWhite from "@/icons/LogoWhite";
import { routes } from "@/routes";

const modalVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function Navbar() {
  const pathName = usePathname();
  const [isActive, setIsActive] = useState(false);

  const openNavModal = useCallback(() => {
    setIsActive(true);
    document.body.style.overflow = "hidden";
  }, []);
  const closeNavModal = useCallback(() => {
    setIsActive(false);
    document.body.style.overflow = "auto";
  }, []);

  return pathName === "/" || pathName === "/login" ? null : (
    <nav>
      <div className="fixed top-0 left-0 right-0 m-auto min-w-sm z-50">
        <div className="h-[3.75rem] flex justify-between items-center pl-4 bg-slate-S900 border-b-[1px] border-b-slate-S600">
          <Link href={routes.serviceIntro}>
            <LogoWhite />
          </Link>

          <button type="button" className="pr-1" onClick={openNavModal}>
            <HamburgerMenuIcon />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              ease: "easeInOut",
            }}
            className="absolute z-50 w-full top-0 bottom-0"
          >
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50 h-[100vh]" />
            <motion.ul className="pt-16 absolute left-[2.44rem] top-0 right-0 bg-slate-S800 h-[100vh]">
              <button
                type="button"
                onClick={closeNavModal}
                className="absolute top-1 right-1 w-10 h-10 flex justify-center items-center"
              >
                <CloseIcon />
              </button>
              {navItems.map((item) => (
                <li
                  key={item.key}
                  className="w-full p-4 border-b-[1px] border-b-slate-500"
                >
                  <Link href={item.urls} onClick={closeNavModal}>
                    <p className="text-slate-S200 text-body leading-body font-regular">
                      {item.pageName}
                    </p>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const navItems: NavItem[] = [
  {
    pageName: "홈",
    key: "home",
    urls: routes.mainHome,
  },
  {
    pageName: "마켓",
    key: "market",
    urls: routes.market,
  },
  {
    pageName: "마이월렛",
    key: "myWallet",
    urls: routes.myWallet,
  },
  {
    pageName: "고객센터",
    key: "cs",
    urls: routes.cs,
  },
  {
    pageName: "마이페이지",
    key: "myPage",
    urls: routes.myPage,
  },
];

export type NavItem = {
  pageName: NavPageName;
  urls: string;
  key: NavKey;
};

type NavKey = "home" | "market" | "myWallet" | "cs" | "myPage";
type NavPageName = "홈" | "마켓" | "마이월렛" | "고객센터" | "마이페이지";
