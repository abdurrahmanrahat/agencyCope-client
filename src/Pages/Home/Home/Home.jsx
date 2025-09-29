import GlobalCoverage from "../../Contact/GlobalCoverage";
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
      {/* <AboutSection /> */}
      <ReviewSection />
      <GlobalCoverage />
    </div>
  );
};

export default Home;
