"use client";

import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type Props = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  ingredients?: { src: string; label: string }[];
  isDimmed?: boolean;
  isHovered?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
};

const badgeImages: Record<string, string> = {
  hot: "/images/badges/hot.png",
  new: "/images/badges/new.png",
  veggie: "/images/badges/veg.png",
};

export default function MenuCard({
  id,
  name,
  description,
  price,
  image,
  badge,
  ingredients = [],
  isDimmed,
  isHovered,
  onHover,
  onLeave,
}: Props) {
  const { items, addItem, updateQty } = useCart();
  const cartItem = items.find((i) => i.id === id);
  const [qty, setQty] = useState(0);
  const isActive = !isDimmed;
  const radius = 90;

  return (
    <motion.div
      animate={{
        opacity: isDimmed ? 0.35 : 1,
        scale: isDimmed ? 0.97 : 1,
        filter: isDimmed ? "brightness(0.6)" : "brightness(1)",
        zIndex: isHovered ? 70 : 1,
      }}
      transition={{ duration: 0.25 }}
      style={{ position: "relative" }}
      className="w-[300px] rounded-[24px] bg-[#fdf5b8] border-[3px] border-[#8b5a2b] shadow-[0_8px_0_#8b5a2b] p-5 flex flex-col items-center"
    >
      <div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className="relative w-40 h-40 -mt-10 flex items-center justify-center cursor-pointer"
      >
        <motion.img
          src={image}
          alt={name}
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.25 }}
          className="w-full h-full object-contain z-10"
        />

        {badge && badgeImages[badge] && (
          <img
            src={badgeImages[badge]}
            alt={badge}
            className="absolute bottom-0 -left-2 w-12 h-12 z-20 object-contain drop-shadow-lg"
          />
        )}

        <AnimatePresence>
          {isHovered &&
            ingredients.length > 0 &&
            ingredients.map((ing, i) => {
              const total = ingredients.length;
              const angle = Math.PI + (i / (total - 1 || 1)) * Math.PI;
              const radius = 115;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={ing.src + i}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.05,
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  className="absolute flex flex-col items-center gap-1 z-[60]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#fdf5b8] border-2 border-[#8b5a2b] shadow-[0_3px_0_#8b5a2b] flex items-center justify-center overflow-hidden">
                    <img
                      src={ing.src}
                      alt={ing.label}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#fdf5b8] bg-[#4b2a15] px-2 py-0.5 rounded-full whitespace-nowrap">
                    {ing.label}
                  </span>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      <h3
        className="
          text-[#4b2a15]
          font-black
          text-xl
          uppercase
          text-center
        "
      >
        {name}
      </h3>

      <p
        className="
          text-center
          text-[#6b4a2f]
          text-sm
          mt-2
        "
      >
        {description}
      </p>

      <div className="mt-auto pt-4 flex justify-between w-full">
        <span
          className="
            text-[#4b2a15]
            font-black
            text-2xl
          "
        >
          {price}
        </span>

        {qty === 0 ? (
          <button
            onClick={() => setQty(1)}
            className="
        w-24 h-10
        flex items-center justify-center gap-2
        bg-[#4b2a15]
        rounded-full
        text-[#fdf5b8] font-black text-xs uppercase
        hover:bg-[#6b3716]
        transition-colors
        cursor-pointer
      "
          >
            <ShoppingCart size={14} />
            Add
          </button>
        ) : (
          <div
            className="
        w-24 h-10
        flex items-center justify-between
        bg-[#4b2a15]
        rounded-full
        px-3
      "
          >
            <button
              onClick={() => setQty((q) => Math.max(0, q - 1))}
              className="text-[#fdf5b8] hover:opacity-70 transition-opacity cursor-pointer"
            >
              <Minus size={14} />
            </button>

            <span className="text-[#fdf5b8] font-black text-sm">{qty}</span>

            <button
              onClick={() => setQty((q) => q + 1)}
              className="text-[#fdf5b8] hover:opacity-70 transition-opacity cursor-pointer"
            >
              <Plus size={14} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
