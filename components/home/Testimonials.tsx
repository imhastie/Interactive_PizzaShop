"use client";

import { motion } from "motion/react";
import CountUp from "../ui/CountUp";
import Image from "next/image";

const reviews = [
  {
    name: "Sarah M.",
    orders: 12,
    rating: 5,
    icon: "/images/pizza-golden-badge.png",
    quote:
      "Honestly the best pizza I've had. Crispy crust, fresh toppings, fast delivery. 10/10 would order again!",
    bg: "#fdf5b8",
    color: "#7b3f16",
    rotate: "-2deg",
  },
  {
    name: "James K.",
    orders: 7,
    rating: 5,
    icon: "/images/chef-golden-badge.png",
    quote:
      "Building my own pizza was SO fun. My kids went crazy for it. Everything arrived hot and perfect!",
    bg: "#fdf5b8",
    color: "#5a1a1a",
    rotate: "1.5deg",
    featured: true,
  },
  {
    name: "Aisha R.",
    orders: 5,
    rating: 5,
    icon: "/images/star-golden-badge.png",
    quote:
      "The pepperoni supreme is life changing. Huge portions, amazing value. This is my go-to spot now!",
    bg: "#fdf5b8",
    color: "#1a3a5a",
    rotate: "-1deg",
  },
];

const stats = [
  { num: 4.9, suffix: "", label: "Avg rating" },
  { num: 2, suffix: "k+", label: "Reviews" },
  { num: 98, suffix: "%", label: "Would reorder" },
];

export default function Testimonials() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/dark-wood.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center w-full max-w-5xl px-8">
        {/* Header */}
        <Image
          src="/images/what.png"
          alt=""
          width={900}
          height={300}
          className="
          w-[38vw]
          min-w-[280px]
          max-w-[600px]
          h-auto
          mt-8
          "
        />

        {/* Cards */}
        <div className="w-full grid grid-cols-3 gap-8 items-center mt-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: r.rotate,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.04, rotate: "0deg" }}
              className={`
                relative
                rounded-[20px]
                p-5
                border-[3px]
                border-[#8b5a2b]
                cursor-pointer

                ${
                  r.featured
                    ? `
                    scale-110
                    shadow-[0_10px_0_#8b5a2b,0_20px_35px_rgba(0,0,0,.18)]
                    `
                    : `
                    shadow-[0_8px_0_#8b5a2b,0_15px_25px_rgba(0,0,0,.12)]
                    `
                }
                `}
              style={{ background: r.bg }}
            >
              {/* Pin */}
              <div
                className="
                absolute -top-2 left-1/2 -translate-x-1/2
                w-4 h-4 rounded-full
                bg-[#f6d774] border-2 border-[#4b2a15]
                shadow-[0_2px_0_#4b2a15]
              "
              />

              {/* icon */}
              <Image
                src={r.icon}
                alt=""
                width={56}
                height={56}
                className="
    w-20
    h-20
    mb-3
    object-contain
  "
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`text-lg ${idx < r.rating ? "text-[#f6a800]" : "text-[#d9c27f]"}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm font-semibold leading-relaxed mb-4"
                style={{ color: r.color }}
              >
                "{r.quote}"
              </p>

              {/* Divider */}
              <div className="w-full border-t-2 border-dashed border-black/10 mb-3" />

              {/* User */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-base text-[#f6d774] border-2 border-white/40 shrink-0"
                  style={{ background: r.color }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <p
                    className="text-xs font-black uppercase tracking-wide"
                    style={{ color: r.color }}
                  >
                    {r.name}
                  </p>
                  <p className="text-xs text-black/35">{r.orders} orders</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-10 mt-12"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-10">
              <div className="text-center">
                <p className="text-[#f6d774] font-black text-3xl leading-none">
                  <CountUp value={s.num} suffix={s.suffix} />
                </p>
                <p className="text-[rgba(255,244,208,0.45)] text-[11px] uppercase tracking-widest mt-1">
                  {s.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-10 bg-[rgba(246,215,116,0.2)]" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
