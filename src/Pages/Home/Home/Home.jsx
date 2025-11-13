import TeamSection from "../../About/Team";
import GlobalCoverage from "../../Contact/GlobalCoverage";
import AboutAgency from "../AboutAgency/AboutAgency";
import AboutProcess from "../AboutProcess/AboutProcess";
import BannerSection from "../BannerSection/BannerSection";
import Collaboration from "../Collaboration/Collaboration";
import Portfolio from "../Portfolio/Portfolio";
import ReviewSection from "../ReviewSection/ReviewSection";
import ServicesSection2 from "../ServicesSection/ServicesSection2";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <AboutAgency />
      {/* <ServicesSection /> */}
      <ServicesSection2 />
      <TeamSection />
      <Portfolio />
      <AboutProcess />
      <ReviewSection />
      <GlobalCoverage />
      <Collaboration />
    </div>
  );
};

export default Home;
