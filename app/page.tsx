import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import TrustStrip from "@/components/TrustStrip";
import Destinations from "@/components/Destinations";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Packages />
      <TrustStrip />
      <Destinations />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
