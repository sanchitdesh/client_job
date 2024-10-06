import CategoryCarousel from "@/components/shared/CategoryCarousel";
import HeroSection from "@/components/shared/HeroSection";
import LatestJobs from "@/components/shared/LatestJobs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
    </div>
  );
};

export default Home;
