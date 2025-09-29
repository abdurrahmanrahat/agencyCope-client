import AboutSection from "../../CEO/AboutSection";
import BannerSection from "../BannerSection/BannerSection";
import Portfolio from "../Portfolio/Portfolio";
import ReviewSection from "../ReviewSection/ReviewSection";
import ServicesSection from "../ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <ServicesSection />
      <Portfolio />
      <AboutSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
