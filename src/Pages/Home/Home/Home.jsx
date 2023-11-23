import AboutMe from "../AboutMe/AboutMe";
import BannerSection from "../BannerSection/BannerSection";
import Designers from "../Designers/Designers";
import FreeGuide from "../FreeGuide/FreeGuide";
import InfinityScroll from "../InfinityScroll/InfinityScroll";
import ReviewSection from "../ReviewSection/ReviewSection";
import ShopSection from "../ShopSection/ShopSection";
import ShowServices from "../ShowServices/ShowServices";
import SpecializeIn from "../SpecializeIn/SpecializeIn";
import WorkSection from "../WorkSection/WorkSection";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>

      <SpecializeIn></SpecializeIn>

      <ShowServices></ShowServices>

      <ShopSection></ShopSection>

      <Designers></Designers>

      <InfinityScroll></InfinityScroll>

      <AboutMe></AboutMe>

      <WorkSection></WorkSection>

      <ReviewSection></ReviewSection>

      <FreeGuide></FreeGuide>
    </div>
  );
};

export default Home;
