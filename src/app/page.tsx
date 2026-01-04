import HeroSection from "@/components/sections/HeroSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";
import GallerySection from "@/components/sections/GallerySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <PackagesSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
