import TeamSection from "../../About/Team";
import GlobalCoverage from "../../Contact/GlobalCoverage";
import AboutAgency from "../AboutAgency/AboutAgency";
import BannerSection from "../BannerSection/BannerSection";
import Portfolio from "../Portfolio/Portfolio";
import ReviewSection from "../ReviewSection/ReviewSection";
import ServicesSection from "../ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <AboutAgency />
      <ServicesSection />
      <TeamSection />
      <Portfolio />
      <ReviewSection />
      <GlobalCoverage />
    </div>
  );
};

export default Home;
