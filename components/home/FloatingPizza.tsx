"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function FloatingPizza() {
  return (
    <motion.div
      className="
        fixed
        z-10

        left-[-30%]
        top-1/2
        -translate-y-1/2

        md:left-[-30%]
        md:top-1/2

        max-md:left-[50%]
        max-md:w-[180vw]
        max-md:top-[-33%]
        max-md:-translate-x-1/2
        max-md:translate-y-0
      "
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 100,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Image
        src="/images/main-pizza.png"
        alt="Pizza"
        width={900}
        height={900}
        priority
        className="
          w-[60vw]
          h-auto

          max-md:w-[170vw]
        "
      />
    </motion.div>
  );
}
