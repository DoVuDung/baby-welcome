import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import GiftRegistry from "@/components/GiftRegistry";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WishesSection from "@/components/WishesSection";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
      <div className="bg-gradient-to-b from-lightblue to-mint font-cute">
        <Header />
        <HeroSection />
        <Countdown />
        <GallerySection/>
        <WishesSection/>
        <GiftRegistry/>
        <Footer/>
      <ToastContainer />
      </div>
    
  );
}
