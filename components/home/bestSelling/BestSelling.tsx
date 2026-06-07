"use client";

import { motion } from "motion/react";
import BestSellingCard from "./BestSellingCard";
import Link from "next/link";
import Image from "next/image";

const pizzas = [
  {
    name: "Margherita",
    description: "Classic tomato, fresh mozzarella & basil",
    price: "$11.99",
    image: "/images/pizza-margherita.png",
  },
  {
    name: "Pepperoni Supreme",
    description: "Double pepperoni, olives, roasted peppers & smoky sauce",
    price: "$15.99",
    image: "/images/pizza-pepperoni.png",
    featured: true,
  },
  {
    name: "Veggie Feast",
    description: "Mushrooms, peppers, olives & fresh herbs",
    price: "$12.99",
    image: "/images/pizza-veggie.png",
  },
];

export default function BestSelling() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center -pb-4 overflow-hidden"
      style={{
        backgroundImage: "url('/images/best-selling-bg.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center w-full max-w-5xl px-8">
        <Image
          src="/images/section3-title.png"
          alt="Best Selling"
          width={1200}
          height={500}
          className="w-[28vw] min-w-[240px] max-w-[460px] h-auto mb-15"
        />

        <div className="w-full flex items-center gap-6">
          <div className="flex-1 grid grid-cols-3 gap-8 items-end overflow-visible">
            {pizzas.map((pizza, index) => (
              <motion.div
                key={pizza.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <BestSellingCard {...pizza} />
              </motion.div>
            ))}
          </div>

          <Link href="/menu">
            <div
              className="
      flex items-center justify-center
      w-16 h-40
      rounded-full
      bg-[#f6d774]
      border-[3px] border-[#4b2a15]
      shadow-[4px_0_0_#4b2a15]
      text-[#4b2a15] font-black text-[15px] uppercase text-center
      tracking-[0.2em]
      hover:translate-x-1
      transition-all
      cursor-pointer
      shrink-0
      font-black
    "
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              View Full Menu
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
