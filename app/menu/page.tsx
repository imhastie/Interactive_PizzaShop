"use client";

import Image from "next/image";
import MenuSidebar from "./MenuSidebar";
import Header from "@/components/Header";
import { menuItems } from "@/components/data/menuItems";
import MenuCard from "./MenuCard";
import MenuTitleFloating from "./MenuTitleFloating";
import { useState } from "react";
import { useHover } from "@/context/HoverContext";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { setIsMenuHovering } = useHover();

  const filteredItems = menuItems.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "hot") return item.badge === "hot";

    const categories = Array.isArray(item.category)
      ? item.category
      : [item.category];
    return categories.includes(activeCategory);
  });

  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-50">
        <Image
          src="/images/dark-wood.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <main className="max-w-[1400px] mx-auto pt-24 pb-20 px-6">
        <div className="flex gap-8 items-start">
          <MenuSidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <div className="flex-1 min-h-screen">
            {/* <MenuTitleFloating /> */}
            <div className="grid grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  {...item}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  badge={item.badge}
                  isDimmed={hoveredId !== null && hoveredId !== item.id}
                  isHovered={hoveredId === item.id}
                  onHover={() => {
                    setHoveredId(item.id);
                    setIsMenuHovering(true);
                  }}
                  onLeave={() => {
                    setHoveredId(null);
                    setIsMenuHovering(false);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
