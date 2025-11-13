import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";
// import {
//   RiGlobalLine,
//   RiImageEditLine,
//   RiMegaphoneLine,
//   RiMovie2Line,
//   RiPaintBrushLine,
//   RiRobot2Line,
// } from "react-icons/ri";
import { Link } from "react-router-dom";
import MyButton from "../../../components/ui/MyButton";
import SectionTitle from "../../../components/ui/SectionTitle";

import { FaRobot } from "react-icons/fa";
import {
  RiGlobalLine,
  RiImageEditLine,
  RiMegaphoneLine,
  RiMovie2Line,
  RiPaintBrushLine,
} from "react-icons/ri";

const services = [
  {
    _id: 1,
    title: "Graphic Design",
    icon: RiPaintBrushLine,
    description:
      "Creative designs that communicate your brand, engage your audience, and captivate their attention with lasting impressions.",
    url: "/services/#item-three",
  },
  {
    _id: 2,
    title: "Motion Graphics",
    icon: RiMovie2Line,
    description:
      "Dynamic visuals and animated storytelling that elevate your messaging and captivate your audience.",
    url: "/services/#item-six",
  },
  {
    _id: 3,
    title: "Web Design & Development",
    icon: RiGlobalLine,
    description:
      "Modern and responsive websites tailored to your business needs, providing an exceptional user experience.",
    url: "/services/#item-three",
  },
  {
    _id: 4,
    title: "Digital Marketing",
    icon: RiMegaphoneLine,
    description:
      "Strategies to boost your online presence, reach your target audience, and drive measurable result for your business.",
    url: "/services/#item-three",
  },
  {
    _id: 5,
    title: "Social Media Content",
    icon: RiImageEditLine,
    description:
      "Scroll-stopping content strategies that drive engagement, build community, and amplify your brand story.",
    url: "/services/#item-five",
  },
  {
    _id: 6,
    title: "AI Content & Motion",
    icon: FaRobot,
    description:
      "Generate innovative AI-driven content to save time and maximize productivity for faster, smarter creative output.",
    url: "/services/#item-five",
  },
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8 px-2"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true, amount: 0.2 }}
      >
        {services.map(({ _id, url, icon: Icon, title, description }) => (
          <a
            key={_id}
            href={url}
            className="
        group relative p-6 rounded-3xl 
        bg-gradient-to-br from-black via-primary/10 to-primary/40
        shadow-[-1px_0px_4px_rgba(179,211,53,0.4)]
        backdrop-blur-sm 
        transition-all duration-300
        
      "
          >
            {/* Top glow */}
            <div
              className="
        absolute inset-0 rounded-3xl 
        bg-[radial-gradient(circle_at_top_left,rgba(179,211,53,0.08),transparent_60%)]
        pointer-events-none
      "
            ></div>

            {/* Icon */}
            <Icon className="text-white text-4xl mb-6 opacity-90 group-hover:text-[#B3D335] transition-all" />

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </a>
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

// black shadow: hover:shadow-[0px_0px_35px_rgba(0,0,0,0.6)]
