import { FiArrowUpRight } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import MyButton from "../../../components/ui/MyButton";
import SectionTitle from "../../../components/ui/SectionTitle";

const services = [
  {
    _id: 1,
    image: "https://i.ibb.co/dfggGRh/Graphic-design.jpg",
    title: "Graphic Design",
    description:
      "Creative designs that communicate your brand, engage your audience, and captivate their attention.",
    url: "/services/#item-three",
  },
  {
    _id: 2,
    image: "https://i.ibb.co/6XwBqQN/Web-design.jpg",
    title: "Web Design",
    description:
      "Modern and responsive websites tailored to your business needs, providing an exceptional user experience.",
    url: "/services/#item-three",
  },
  {
    _id: 3,
    image: "https://i.ibb.co/VwFd7zx/Digital-marketing.jpg",
    title: "Digital Marketing",
    description:
      "Strategies to boost your online presence, reach your target audience, and drive measurable result for your business.",
    url: "/services/#item-three",
  },
];

const ServicesSection = () => {
  return (
    <section className="container-class py-14 lg:py-20">
      <SectionTitle
        title={"Services"}
        description={"Customized services designed to meet your unique needs"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service._id}
            to={service.url}
            className="group relative bg-[#0e0e0e] rounded-xl border border-[#2a2a2a] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Left color bar */}
            <div className="absolute top-0 left-0 h-full w-1 bg-primary"></div>

            {/* Card Content */}
            <div className="p-6 pl-7">
              {/* Icon & Title */}
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-all duration-300">
                  {service.title}
                </h3>
                <FiArrowUpRight className="text-[#caff00] group-hover:rotate-45 transition-transform duration-300 text-2xl" />
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Background image as faint decorative layer (optional aesthetic) */}
            <div className="absolute opacity-5 inset-0 pointer-events-none">
              <img
                src={service.image}
                alt=""
                className="w-full h-full object-cover blur-sm scale-110"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center">
        <Link to={`/services`}>
          <MyButton
            mobileText="View More"
            desktopText="View More"
            isOutline={true}
            icon={<IoMdArrowForward />}
          />
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
