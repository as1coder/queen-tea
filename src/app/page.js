import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Shop from "@/components/ProductCard";
import BrewTimer from "@/components/BrewTimer";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Shop />
      <Features />
      <About />
      <BrewTimer />
      <CartDrawer />
      <Footer />
    </div>
  );
}
