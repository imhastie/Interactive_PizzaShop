"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { menuCategories } from "@/components/data/menuCategories";

type Props = {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
};

export default function MenuSidebar({
  activeCategory,
  setActiveCategory,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  const smallOpacity = useTransform(scrollY, [150, 300], [0, 1]);
  const smallY = useTransform(scrollY, [150, 300], [-10, 0]);

  return (
    <aside className="sticky top-20 w-[220px] h-fit shrink-0 -mt-8">
      <div className="mb-4 -mt-12">
        <Image
          src="/images/our-menu-title.png"
          alt="Our Menu"
          width={260}
          height={90}
          className="w-full h-auto drop-shadow-xl"
        />
      </div>

      <div className="rounded-[20px] bg-[#6b3716] border-[3px] border-[#4b2a15] p-3 shadow-[0_6px_0_#4b2a15]">
        <h2 className="mb-3 text-[#fdf5b8] text-lg font-black uppercase">
          Categories
        </h2>

        <div className="flex flex-col gap-2">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                h-10
                rounded-lg
                border-2
                border-[#8b5a2b]
                font-bold
                text-sm
                text-left
                px-3
                transition-all
                hover:-translate-y-0.5
                ${
                  activeCategory === category.id
                    ? `bg-[#f6d774] text-[#4b2a15] shadow-[0_3px_0_#8b5a2b]`
                    : `bg-[#fdf5b8] text-[#4b2a15]`
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
