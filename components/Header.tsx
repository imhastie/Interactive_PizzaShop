"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from "./ui/tooltip";
import { motion, useScroll, useTransform } from "motion/react";
import { useHover } from "@/context/HoverContext";

export default function Header() {
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const navY = useTransform(scrollY, [0, 80], [-10, 0]);
  const { isMenuHovering } = useHover();

  const pathname = usePathname();

  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/menu",
      label: "Menu",
    },
    {
      href: "/build",
      label: "Build Pizza",
    },
    {
      href: "/about",
      label: "About Us",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  return (
    <motion.header
      animate={{ opacity: isMenuHovering ? 0.3 : 1 }}
      transition={{ duration: 0.25 }}
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2

        z-50

        flex
        items-center
        gap-10
      "
    >
      <motion.div
        style={{
          opacity: navOpacity,
          y: navY,
        }}
        className="
    absolute
    inset-y-[-12px]

    left-1/2
    -translate-x-1/2

    w-[620px]

    rounded-[22px]

    border-[3px]
    border-[#6d3c18]

    shadow-[0_5px_0_#6d3c18,0_12px_25px_rgba(0,0,0,.2)]

    overflow-hidden

    -z-10
  "
      >
        <div
          className="
      absolute
      inset-0

      bg-gradient-to-b
      from-[#cf8650]
      to-[#9f5f35]
    "
        />

        <div
          className="
      absolute
      inset-0
      opacity-20
      mix-blend-overlay
    "
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 18px, rgba(255,255,255,.15) 19px, transparent 20px)",
          }}
        />
      </motion.div>
      <div>
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? `
              px-4 py-2
              rounded-full

              bg-[#f6d774]

              text-[#4b2a15]
              font-black
              text-sm
              uppercase

              shadow-[0_3px_0_#8b5a2b]

              transition-all
            `
                    : `
              text-[#fff4d0]
              [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]

              font-bold
              text-sm
              uppercase

              hover:text-[#f6d774]

              transition-colors
            `
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="
            w-10 h-10
            rounded-full
            bg-[#fdf5b8]
            flex items-center justify-center
            shadow-[0_3px_0_#8b5a2b]
            hover:-translate-y-0.5
            transition-all
            cursor-pointer
          "
              >
                <ShoppingCart size={18} className="text-[#4b2a15]" />
              </button>
            </TooltipTrigger>

            <TooltipContent side="bottom">
              <p>Cart</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="
            w-10 h-10
            rounded-full
            bg-[#fdf5b8]
            flex items-center justify-center
            shadow-[0_3px_0_#8b5a2b]
            hover:-translate-y-0.5
            transition-all
            cursor-pointer
          "
              >
                <User size={18} className="text-[#4b2a15]" />
              </button>
            </TooltipTrigger>

            <TooltipContent side="bottom">
              <p>Account</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.header>
  );
}
