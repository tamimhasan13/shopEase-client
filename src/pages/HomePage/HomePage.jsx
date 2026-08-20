import Banner from "../../Components/Banner/Banner";
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
    </>
  );
};

export default HomePage;
