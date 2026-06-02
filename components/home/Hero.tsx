import Image from "next/image";
import { BookOpen, Mouse, Pizza } from "lucide-react";
import GameButton from "../ui/GameButton";

export default function Hero() {
  return (
    <section
      className="
    h-screen
    flex
    items-center
    justify-center
    relative
  "
    >
      <div
        className="
      absolute inset-0 pointer-events-none z-10
      [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]
    "
      />
      <div
        className="
    z-20
    flex
    flex-col
    items-center

    translate-y-8
  "
      >
        <Image
          alt="Hero"
          src="/images/hero-title.png"
          width={700}
          height={300}
          className="
          w-[28vw]
          min-w-[260px]
          max-w-[500px]
          h-auto
          "
        />

        <p
          className="
    mt-2
    max-w-md
    text-base
    text-white/90
    text-center
  "
          style={{
            textShadow: "0 2px 8px rgba(0,0,0,0.55)",
          }}
        >
          Choose your favorite ingredients,
          <br />
          build your pizza, and we'll make
          <br />
          it delicious!
        </p>

        <div className="mt-5 flex justify-center gap-4">
          <GameButton icon={<Pizza size={14} fill="currentColor" />}>
            Build Your Pizza
          </GameButton>

          <GameButton variant="orange" icon={<BookOpen size={14} />}>
            View Menu
          </GameButton>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-1">
          <Mouse size={28} className="text-white/80 animate-bounce" />

          <span
            className="
      text-[10px]
      uppercase
      tracking-[0.3em]
      text-white/60
    "
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
