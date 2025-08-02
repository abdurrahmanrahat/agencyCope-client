import { FaQuoteLeft } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ElizabethImage from "../../../assets/home/reviews/elizabeth.jpeg";
import VarimureImage from "../../../assets/home/reviews/varlmure.webp";
import SectionTitle from "../../../components/ui/SectionTitle";

const reviews = [
  {
    _id: 1,
    name: "Elizabeth Gooch MBE",
    review:
      "I've worked with Yeasin on a number of graphic design and presentation tasks. He's reliable, responsive, and offers a very cost-effective service. We've been able to make good use of the time zone difference — I often send over requests at the end of my day and find the work ready by the next morning. If you're looking for a responsive, budget-friendly design support, Yeasin is a lovely guy to work with.",
    image: ElizabethImage,
  },
  {
    _id: 2,
    name: "Reviewtracy",
    review:
      "Very pleasant cooperation experience, we communicate very frequently, the designer will be patient to listen to my modification comments and make a reasonable design, of course, his modification ideas are also quite good, in short, I got the design I wanted.",
    image: null,
  },
  {
    _id: 3,
    name: "Putocall",
    review:
      "I enjoyed working on this project. Dave communicated all expectations and requirements upfront and he was responsive to any of my requests for clarification. I liked working with him and hope to have the opportunity to work with him again. Thanks!",
    image: null,
  },
  {
    _id: 4,
    name: "Laura Joyce",
    review:
      "I wanted a logo for my Business and social media pages and i’ve got exactly what I wanted great service fast very impressed thank you so much MOVE WITH THE TIMES",
    image: null,
  },
  {
    _id: 5,
    name: "Vari Mure",
    review:
      "Thank you for the logo work. It was what I was looking for. I cannot fault the quality of the work. Just that there where many iterations as the seller did not read the brief and was not clear on what the expectations where, and did not clarify expectations upfront before starting the work. However, once the requirements were understood, the quality was superb.",
    image: VarimureImage,
  },
];

const ReviewSection = () => {
  return (
    <div
      className="container-class my-16 md:my-24"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <SectionTitle
        title={"Testimonials"}
        description={"Clients review with whom i work before"}
      />

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
                <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-gray-600 group-hover:border-primary transition-all duration-500 bg-gray-800 flex items-center justify-center text-white text-3xl font-semibold">
                  {data?.image ? (
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>{data?.name?.[0]?.toUpperCase() || "?"}</span>
                  )}
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
  );
};

export default ReviewSection;
