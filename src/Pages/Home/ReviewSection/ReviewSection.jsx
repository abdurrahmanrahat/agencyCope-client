import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="text-center">
            <h4 className="uppercase text-lg text-[#28ADD7]">TESTIMONIALS</h4>
            <h2 className="text-2xl mt-4">Clients share their experience of working with us</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center my-8 mx-16">

                            <FaQuoteLeft className="text-6xl mt-4"></FaQuoteLeft>
                            <p className="text-center py-6">{review.review}</p>
                            <img src={review.image} className="w-20 rounded-full mb-2" alt="" />
                            <h3 className="text-2xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ReviewSection;