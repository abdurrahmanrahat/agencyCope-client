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
    <div className="max-w-screen-xl mx-auto overflow-hidden">
      <div
        className="text-center my-16 md:my-24"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex flex-col justify-center items-center ">
          <h4 className="uppercase text-lg font-semibold">
            <span className="border-b-[3px] border-primary">TESTIMONIALS</span>
          </h4>
          <h2 className="text-[14px] lg:text-[16px] max-w-[60ch] text-center mt-3">
            Clients share their thoughts and experience of working with our
            agency, providing invaluable insights and comments
          </h2>
        </div>

        {/* slider section start */}
        <Swiper
          spaceBetween={50}
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
              spaceBetween: 20,
            },
          }}
        >
          {/* map section start */}
          {reviews?.map((data) => (
            <SwiperSlide key={data._id}>
              <div className="group group/item mt-10 py-6 bg-light lg:px-12 mx-3 rounded-md">
                <div className="flex items-center justify-center mb-5">
                  <FaQuoteLeft className="text-4xl text- hover:text-yellow-300 text-gray-400 duration-500" />
                </div>

                <div>
                  <p className="font-medium text-gray-700 text-center lg:text-base text-sm">
                    {data?.review}
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    <div className="w-20 h-20 mt-5">
                      <img
                        className="rounded-full hover:border-4 group-hover:border-yellow-500 border-4 border-gray-300 duration-300 w-36 h-20"
                        src={data?.image}
                        alt=""
                      />
                    </div>
                    <div className="ms-4 mt-5">
                      <h2 className="text-xl font-black">{data?.name}</h2>
                      <p className="text-center font-semibold text-gray-500 text-sm">
                        Client
                      </p>
                    </div>
                  </div>
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
