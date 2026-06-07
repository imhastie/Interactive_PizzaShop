"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import GameButton from "@/components/ui/GameButton";

type Props = {
  name: string;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
  badge?: string;
};

export default function BestSellingCard({
  name,
  description,
  price,
  image,
  featured = false,
  badge,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
  relative
  flex flex-col items-center
  overflow-visible

  h-[340px]

  rounded-[24px]
  border-[3px]

  px-5
  pb-5

  transition-all duration-200

  hover:-translate-y-3

  ${
    featured
      ? `
        bg-[#fdf5b8]
        border-[#8b5a2b]

        scale-110

        shadow-[0_10px_0_#8b5a2b,0_20px_35px_rgba(0,0,0,.18)]
      `
      : `
        bg-[#f7e8b4]
        border-[#8b5a2b]

        shadow-[0_8px_0_#8b5a2b,0_15px_25px_rgba(0,0,0,.12)]
      `
  }
`}
    >
      {/* Pizza image — overflows top */}
      <div className="relative">
        <motion.div
          animate={hovered ? { rotate: 360 } : { rotate: 0 }}
          transition={
            hovered
              ? { duration: 20, repeat: Infinity, ease: "linear" }
              : { duration: 0.3 }
          }
          className={`-mt-10 mb-2 ${featured ? "w-48 h-48" : "w-40 h-40"}`}
        >
          <Image
            src={image}
            alt={name}
            width={featured ? 144 : 112}
            height={featured ? 144 : 112}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        {featured && (
          <Image
            src="/images/gold-medal.png"
            alt="Best Seller"
            width={60}
            height={60}
            className="
         absolute
    bottom-1

    w-[50px]
    h-auto

    z-20
      "
          />
        )}
      </div>

      <h3
        className={`
            text-center text-[#4b2a15] font-black uppercase
            ${featured ? "text-lg" : "text-base"}
            `}
      >
        {name}
      </h3>

      <p
        className="
  mt-2
  mb-4

  text-center

  text-[#6b4a2f]

  text-xs
  leading-relaxed
"
      >
        {description}
      </p>

      <div className="w-full h-px bg-[#d9c27f] mb-4" />
      <div className="w-full flex items-center justify-between mt-auto">
        <span
          className={`
    text-[#4b2a15]
    font-black

    ${featured ? "text-2xl" : "text-xl"}
  `}
        >
          {price}
        </span>
        <Link href="/menu">
          <GameButton icon={<ShoppingCart size={12} />}>
            {featured ? "Order now" : "Order"}
          </GameButton>
        </Link>
      </div>
    </div>
  );
}
