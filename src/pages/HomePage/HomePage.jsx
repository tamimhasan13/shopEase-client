import Banner from "../../Components/Banner/Banner";
import BlogSection from "../../Components/BlogSection/BlogSection";
import CategorySection from "../../Components/CategorySection/CategorySection";
import FeaturesSection from "../../Components/FeaturesSection/FeaturesSection";
import HeroSection from "../../Components/HeroSection/HeroSection";
import PopularProducts from "../../Components/popularProduct/PopularProducts";

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <FeaturesSection/>
      <CategorySection/>
      <PopularProducts/>
      <Banner/>
      <BlogSection/>
    </>
  );
};

export default HomePage;
