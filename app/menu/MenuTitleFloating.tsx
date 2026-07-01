"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function MenuTitleFloating() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  const bigOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const bigScale = useTransform(scrollY, [0, 200], [1, 0.8]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{ opacity: bigOpacity, scale: bigScale }}
      className="flex justify-center mb-8"
    >
      <Image
        src="/images/our-menu-title.png"
        alt="Our Menu"
        width={900}
        height={300}
        priority
        className="w-[35vw] min-w-[280px] max-w-[550px] h-auto"
      />
    </motion.div>
  );
}
