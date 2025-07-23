import AboutSection from "../../About/AboutSection";
import BannerSection from "../BannerSection/BannerSection";
import Portfolio from "../Portfolio/Portfolio";
import ReviewSection from "../ReviewSection/ReviewSection";
import ServicesSection from "../ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>

      {/* <SpecializeIn></SpecializeIn> */}

      <ServicesSection />
      <Portfolio />

      {/* <AboutMe></AboutMe> */}
      <AboutSection />

      {/* <WorkSection></WorkSection> */}

      <ReviewSection></ReviewSection>

      {/* <FreeGuide></FreeGuide> */}
    </div>
  );
};

export default Home;
