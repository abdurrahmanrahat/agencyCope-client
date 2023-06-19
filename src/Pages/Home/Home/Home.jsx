import BannerSection from "../BannerSection/BannerSection";
import ReviewSection from "../ReviewSection/ReviewSection";
import ShowServices from "../ShowServices/ShowServices";
import WorkSection from "../WorkSection/WorkSection";

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>

            <ShowServices></ShowServices>

            <WorkSection></WorkSection>

            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;