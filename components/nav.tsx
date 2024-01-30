"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Variants for Framer Motion animation
  const navVariants = {
    hidden: { opacity: 0, scale: 0.95, y: "-8%" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 0.3 } },
  };

  return (
    <header className="relative z-50 flex flex-wrap w-full text-sm py-6 sm:justify-start sm:flex-nowrap bg-background">
      <nav
        className="md:max-w-[75rem] w-full mx-auto max-md:px-10 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.25 }}
          >
            <a
              className="inline-flex items-center text-xl font-semibold gap-x-2 "
              href="/"
            >
              <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
                فلوسيا
              </h1>
            </a>
          </motion.div>

          <button
            type="button"
            className="sm:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            {/* Hamburger Icon */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.25 }}
              onClick={() => setIsNavExpanded((prevToggle) => !prevToggle)}
              className={`burger cursor-pointer space-y-2.5 xl:hidden lg:hidden mr-5
        `}
            >
              <motion.span
                animate={{
                  rotateZ: isNavExpanded ? 45 : 0,
                  y: isNavExpanded ? 12 : 0,
                }}
                className=" block h-0.5 w-8 bg-black"
              ></motion.span>

              <motion.span
                animate={{ width: isNavExpanded ? 0 : 32 }}
                className=" block h-0.5 w-6 bg-black"
              ></motion.span>
              <motion.span
                animate={{
                  rotateZ: isNavExpanded ? -45 : 0,
                  y: isNavExpanded ? -12 : 0,
                  width: isNavExpanded ? 32 : 32,
                }}
                className=" block h-0.5 w-4 bg-black"
              ></motion.span>
            </motion.div>
          </button>
        </div>

        {/* Navigation Links for large screens */}
        <div className="relative hidden text-lg sm:flex  ">
          {["معدل الأرباح", "حساب الأسهم", "حساب القروض", "تحويل العملات"].map(
            (item) => (
              <a
                key={item}
                className="relative mx-3 font-bold text-primary transition-all duration-200 delay-50"
                href={`/${item.toLowerCase()}`}
                onMouseEnter={() => setActiveLink(item)}
                onMouseLeave={() => setActiveLink("")}
                onClick={() => setActiveLink(item)}
              >
                {item}
                <motion.span
                  className="absolute -bottom-2 left-0 items-center bg-black h-0.5"
                  variants={underlineVariants}
                  initial="hidden"
                  animate={activeLink === item ? "visible" : "hidden"}
                />
              </a>
            )
          )}
        </div>

        {/* Navigation Links for small screens */}
        <AnimatePresence>
          {isNavExpanded && (
            <motion.div
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed left-0 z-40 flex flex-col items-center justify-center w-3/5
               rounded-2xl gap-5 text-xl font-bold text-primary-foreground text-center shadow-md py-6 mt-4 ml-5 background"
            >
              <a className="my-2 font-bold " href="/">
                معدل الأرباح
              </a>
              <a
                className="my-2 font-bold
"
                href="/"
              >
                حساب الأسهم
              </a>
              <a
                className="my-2 font-bold
"
                href="/"
              >
                حساب القروض
              </a>
              <a
                className="my-2 font-bold
"
                href="/"
              >
                تحويل العملات
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
