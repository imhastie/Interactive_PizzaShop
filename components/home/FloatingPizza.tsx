"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

export default function FloatingPizza() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  const bigOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const bigScale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const smallOpacity = useTransform(scrollY, [150, 300], [0, 1]);

  if (!mounted) return null;

  return (
    <>
      {/* Big spinning pizza */}
      <motion.div
        style={{ opacity: bigOpacity, scale: bigScale }}
        className="fixed left-[-30%] top-1/2 -translate-y-1/2 z-40"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/images/main-pizza.png"
            alt="Pizza"
            width={900}
            height={900}
            priority
            className="w-[60vw] h-auto max-md:w-[170vw]"
          />
        </motion.div>
      </motion.div>

      {/* Small pizza button */}
      <motion.div
        style={{ opacity: smallOpacity }}
        className="fixed top-3 left-4 z-50"
      >
        <Link
          href="/build"
          className="
            flex items-center gap-2
            pl-1 pr-4 py-1
            rounded-full
            bg-[#fdf5b8]
            border-2 border-[#4b2a15]
            shadow-[0_3px_0_#4b2a15]
            hover:-translate-y-0.5
            transition-transform
          "
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 shrink-0"
          >
            <Image
              src="/images/main-pizza.png"
              alt="Pizza"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </motion.div>
          <span className="text-[#4b2a15] font-black text-sm uppercase whitespace-nowrap">
            Build Pizza
          </span>
        </Link>
      </motion.div>
    </>
  );
}