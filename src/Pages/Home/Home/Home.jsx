import BannerSection from "../BannerSection/BannerSection";
import ReviewSection from "../ReviewSection/ReviewSection";
import ShowServices from "../ShowServices/ShowServices";

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>

            <ShowServices></ShowServices>

            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;