import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CallToAction from "@/components/home/CallToAction";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SearchSection />
      <FeaturedPackages />
      <WhyChooseUs />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
};

export default Home;
