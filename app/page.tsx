import Header from "@/components/Header";
import Background from "@/components/home/Background";
import Decorations from "@/components/home/Decorations";
import FloatingPizza from "@/components/home/FloatingPizza";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Background />
      <Header />
      <FloatingPizza />

      <main>
        <Hero />
      </main>
    </>
  );
}
