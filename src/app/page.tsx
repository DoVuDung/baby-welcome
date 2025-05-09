import {
  Footer,
  GallerySection,
  GiftRegistry,
  Header,
  HeroSection,
  WishesSection,
} from "@/components";
import Countdown from "@/components/Countdown";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-lightblue to-mint font-cute'>
      <Header />
      <HeroSection />
      <Countdown />
      <GallerySection />
      <WishesSection />
      <GiftRegistry />
      <Footer />
      <ToastContainer />
    </div>
  );
}
