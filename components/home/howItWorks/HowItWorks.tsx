import Image from "next/image";
import Background from "../Background";
import HowItWorksCard from "./HowItWorksCard";
import { ArrowRight, Pizza } from "lucide-react";
import Link from "next/link";
import GameButton from "../../ui/GameButton";

export default function HowItWorks() {
  return (
    <section
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/how-it-works-background.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center w-full max-w-4xl px-8">
        <Image
          src="/images/section2-title.png"
          alt="How It Works"
          width={1100}
          height={400}
          className="w-[35vw] min-w-[280px] max-w-[600px] h-auto"
        />

        <div className="mt-12 flex items-center justify-center gap-5">
          <HowItWorksCard
            step="01"
            title="Pick Your Base"
            description="Choose your crust size and sauce."
            image="/images/base-logo.png"
          />

          <ArrowRight size={40} className="text-[#8b5a2b] w-[3vw] h-[3vw]" />

          <HowItWorksCard
            step="02"
            title="Add Toppings"
            description="Stack your favourite ingredients."
            image="/images/toppings-logo.png"
          />

          <ArrowRight size={40} className="text-[#8b5a2b] w-[3vw] h-[3vw]" />

          <HowItWorksCard
            step="03"
            title="We Deliver"
            description="Fresh pizza delivered hot."
            image="/images/delivery-logo.png"
          />
        </div>

        <Link href="/build" className="mt-6">
          <GameButton icon={<Pizza size={16} fill="currentColor" />}>
            Build Your Pizza <ArrowRight size={16} />
          </GameButton>
        </Link>
      </div>
    </section>
  );
}
