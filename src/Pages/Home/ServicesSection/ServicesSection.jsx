import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import MyButton from "../../../components/ui/MyButton";
import SectionTitle from "../../../components/ui/SectionTitle";

const services = [
  {
    _id: 1,
    title: "Graphic Design",
    description:
      "Creative designs that communicate your brand, engage your audience, and captivate their attention.",
    url: "/services/#item-three",
  },
  // {
  //   _id: 2,
  //   title: "Brand Identity Design",
  //   description:
  //     "Distinctive brand systems that define your voice, align your visuals, and establish long-term recognition.",
  //   url: "/services/#item-four",
  // },
  {
    _id: 3,
    title: "Animation & Motion Graphics",
    description:
      "Dynamic visuals and animated storytelling that elevate your messaging and captivate your audience.",
    url: "/services/#item-six",
  },
  {
    _id: 4,
    title: "Web Design & Development",
    description:
      "Modern and responsive websites tailored to your business needs, providing an exceptional user experience.",
    url: "/services/#item-three",
  },
  {
    _id: 5,
    title: "Digital Marketing",
    description:
      "Strategies to boost your online presence, reach your target audience, and drive measurable result for your business.",
    url: "/services/#item-three",
  },
  {
    _id: 6,
    title: "Social Media Content",
    description:
      "Scroll-stopping content strategies that drive engagement, build community, and amplify your brand story.",
    url: "/services/#item-five",
  },
  // {
  //   _id: 7,
  //   title: "SEO & PPC",
  //   description:
  //     "Boost rankings and drive high-quality, conversion-focused traffic.",
  //   url: "/services/#item-five",
  // },
  {
    _id: 8,
    title: "AI Content & Motion",
    description:
      "Generate innovative Ai-driven content to save time and maximize productivity.",
    url: "/services/#item-five",
  },
  // {
  //   _id: 9,
  //   title: "Video Editing",
  //   description:
  //     "Professional video editing to deliver high-impact, polished content.",
  //   url: "/services/#item-five",
  // },
];

const cardVariants = {
  hidden: { opacity: 0.2, x: 80 }, // starts slightly to the right
  visible: () => ({
    opacity: 1,
    x: 0, // slides into place
    transition: {
      delay: 0.1,
      duration: 1.4, // smooth duration
      ease: "easeOut", // smooth cubic-bezier ease
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="container-class py-14 lg:py-20 overflow-hidden">
      <SectionTitle
        title={"Our Services"}
        description={
          "Custom-built solutions engineered for your brand’s success"
        }
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8 "
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <div
            key={service._id}
            className="
    group relative overflow-hidden rounded-2xl
    border border-white/20
    bg-white/10 backdrop-blur-[12px]
    p-6 md:p-8
    transition-all duration-500
     hover:border-primary/40 shadow-[0_0_35px_rgba(0,0,0,0.5)]
  "
          >
            {/* Gradient overlay for motion glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-primary/10 opacity-60"></div>

            {/* Title */}
            <h3 className="relative z-10 text-xl font-semibold text-primary transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 mt-3 text-gray-200 leading-relaxed">
              {service.description}
            </p>

            {/* Button */}
            <div className="relative z-10 mt-5">
              <Link to={service.url}>
                <button
                  className={`text-[18px] rounded-md border border-primary text-primary hover:text-primary/80 duration-700 px-[14px] py-[7px] md:px-[16px] md:py-[6px] flex gap-2 items-center`}
                >
                  <span>Details</span>
                  <HiArrowRight className="w-4 h-4 md:w-4 md:h-4" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </motion.div>

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
