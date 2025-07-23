import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container-class">
      <div
        className="my-16 md:my-24"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h5 className="text-primary uppercase text-base md:text-[20px] font-medium mb-2">
          TESTIMONIALS
        </h5>
        <h2 className="text-2xl md:text-4xl mb-8">
          Clients review with whom i work before
        </h2>

        {/* slider section start */}
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            840: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          {/* map section start */}
          {reviews?.map((data) => (
            <SwiperSlide key={data._id}>
              <div className="group mt-10 px-6 py-8 bg-[#0b0b0b] rounded-xl shadow-md hover:shadow-lg transition-all duration-700 border border-transparent">
                {/* Quote Icon */}
                <div className="flex items-center justify-center mb-5">
                  <FaQuoteLeft className="text-4xl text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-center text-base leading-relaxed mb-6">
                  {data?.review}
                </p>

                {/* Reviewer Info */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-600 group-hover:border-primary transition-all duration-500">
                    <img
                      src={data?.image}
                      alt={data?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-white mt-4">
                    {data?.name}
                  </h2>
                  <p className="text-sm text-gray-400">Client</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* map section end */}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
