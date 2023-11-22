import BannerSection from "../BannerSection/BannerSection";
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

      <InfinityScroll></InfinityScroll>

      <WorkSection></WorkSection>

      <ReviewSection></ReviewSection>

      <FreeGuide></FreeGuide>
    </div>
  );
};

export default Home;
