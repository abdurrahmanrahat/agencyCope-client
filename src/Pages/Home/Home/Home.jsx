import AboutMe from "../AboutMe/AboutMe";
import BannerSection from "../BannerSection/BannerSection";
import Portfolio from "../Portfolio/Portfolio";
import ReviewSection from "../ReviewSection/ReviewSection";
import ShowServices from "../ShowServices/ShowServices";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>

      {/* <SpecializeIn></SpecializeIn> */}

      <ShowServices></ShowServices>
      <Portfolio />

      <AboutMe></AboutMe>

      {/* <WorkSection></WorkSection> */}

      <ReviewSection></ReviewSection>

      {/* <FreeGuide></FreeGuide> */}
    </div>
  );
};

export default Home;
