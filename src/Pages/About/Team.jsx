import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/ui/SectionTitle";

const TEAM = [
  {
    id: 1,
    name: "Yeasin Mahbub",
    designation: "Creative Director",
    photo: "/images/team/mahbub.jpg",
  },
  {
    id: 2,
    name: "Delwar Khan Anik",
    designation: "Digital Marketer",
    photo: "/images/team/anik.jpg",
  },
  {
    id: 3,
    name: "Eaqub Hasan",
    designation: "Motion Graphic Designer",
    photo: "/images/team/eaqub.jpg",
  },
  {
    id: 4,
    name: "Mk Rasel",
    designation: "London Regional Manager",
    photo: "/images/team/rasel.jpg",
  },
  {
    id: 5,
    name: "Abdur Rahman",
    designation: "Web Developer",
    photo: "/images/team/rahat.jpg",
  },
  {
    id: 6,
    name: "Jannat",
    designation: "Content Creation",
    photo: "/images/team/jannat.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="container-class">
        {/* Section heading */}
        <SectionTitle
          title="Our Expert Team"
          description="A dedicated team of professionals committed to delivering excellence and innovation."
        />

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
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1080: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {TEAM.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                {/* Top: Full image */}
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 "
                  />
                </div>

                {/* Bottom: Info */}
                <div className="py-4 text-center">
                  <h3 className="mt-2 text-lg lg:text-xl font-semibold text-white [word-spacing:2px] md:[word-spacing:4px]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-neutral-400 [word-spacing:2px] md:[word-spacing:4px]">
                    {member.designation}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
