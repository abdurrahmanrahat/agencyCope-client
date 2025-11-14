import TeamSection from "../../About/Team";
import GlobalCoverage from "../../Contact/GlobalCoverage";
import AboutAgency from "../AboutAgency/AboutAgency";
import AboutProcess from "../AboutProcess/AboutProcess";
import BannerSection from "../BannerSection/BannerSection";
import BrandMarquee from "../BrandMarquee/BrandMarquee";
import Portfolio from "../Portfolio/Portfolio";
import Pricing from "../Pricing/Pricing";
import ReviewSection from "../ReviewSection/ReviewSection";
import ServicesSection from "../ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <BrandMarquee />
      <AboutAgency />
      <ServicesSection />
      {/* <ServicesSection2 /> */}
      <TeamSection />
      <Portfolio />
      <Pricing />
      <AboutProcess />
      <ReviewSection />
      <GlobalCoverage />
    </div>
  );
};

export default Home;
