import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Upomingwebinars from "@/components/Upomingwebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02">
        <HeroSection />
        <FeaturedSection />
        <WhyChooseUs />
        <Testimonials />
        <Upomingwebinars />
        <Instructors />
        <Footer />
      </main>
  );
}
