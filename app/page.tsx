import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BestSelling from "@/components/home/bestSelling/BestSelling";
import FloatingPizza from "@/components/home/FloatingPizza";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/howItWorks/HowItWorks";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <FloatingPizza />

      <main>
        <Hero />
        <HowItWorks />
        <BestSelling />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
