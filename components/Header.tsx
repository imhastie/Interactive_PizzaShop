import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from "./ui/tooltip";

export default function Header() {
  return (
    <header
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
      <div>
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="
            px-4 py-2

            rounded-full

            bg-[#f6d774]

            text-[#4b2a15]
            font-black
            text-sm
            uppercase

            shadow-[0_3px_0_#8b5a2b]

            transition-all
            hover:-translate-y-0.5
          "
          >
            Home
          </Link>

          <Link
            href="/menu"
            className="
            text-[#fff4d0]
            [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]
            font-bold
            text-sm
            uppercase

            hover:text-[#f6d774]

            transition-colors
          "
          >
            Menu
          </Link>

          <Link
            href="/build"
            className="
            text-[#fff4d0]
            [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]
            font-bold
            text-sm
            uppercase

            hover:text-[#f6d774]

            transition-colors
          "
          >
            Build Pizza
          </Link>

          <Link
            href="/about"
            className="
            text-[#fff4d0]
            [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]
            font-bold
            text-sm
            uppercase

            hover:text-[#f6d774]

            transition-colors
          "
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="
            text-[#fff4d0]
            [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]
            font-bold
            text-sm
            uppercase

            hover:text-[#f6d774]

            transition-colors
          "
          >
            Contact
          </Link>
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
    </header>
  );
}
