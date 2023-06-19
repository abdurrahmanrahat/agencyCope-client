import BannerSection from "../BannerSection/BannerSection";
import ReviewSection from "../ReviewSection/ReviewSection";
import ShopSection from "../ShopSection/ShopSection";
import ShowServices from "../ShowServices/ShowServices";
import WorkSection from "../WorkSection/WorkSection";

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>

            <ShowServices></ShowServices>

            <WorkSection></WorkSection>

            <ShopSection></ShopSection>

            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;