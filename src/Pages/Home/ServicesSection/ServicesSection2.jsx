import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaFilm,
  FaGlobe,
  FaPaintBrush,
  FaPhotoVideo,
  FaRobot,
} from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import MyButton from "../../../components/ui/MyButton";
import SectionTitle from "../../../components/ui/SectionTitle";

const services = [
  {
    _id: 1,
    title: "Graphic Design",
    icon: FaPaintBrush,
    description:
      "Creative designs that communicate your brand, engage your audience, and captivate their attention with lasting impressions.",
    url: "/services/#item-three",
  },
  {
    _id: 2,
    title: "Motion Graphics",
    icon: FaFilm,
    description:
      "Dynamic visuals and animated storytelling that elevate your messaging and captivate your audience.",
    url: "/services/#item-six",
  },
  {
    _id: 3,
    title: "Web Design & Development",
    icon: FaGlobe,
    description:
      "Modern and responsive websites tailored to your business needs, providing an exceptional user experience.",
    url: "/services/#item-three",
  },
  {
    _id: 4,
    title: "Digital Marketing",
    icon: FaBullhorn,
    description:
      "Strategies to boost your online presence, reach your target audience, and drive measurable result for your business.",
    url: "/services/#item-three",
  },
  {
    _id: 5,
    title: "Social Media Content",
    icon: FaPhotoVideo,
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

const ServicesSection2 = () => {
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
        {services.map((item) => {
          const Icon = item.icon;

          return (
            <a key={item._id} href={item.url}>
              <div
                className="relative w-full flex items-center gap-5 p-6 
    rounded-xl overflow-hidden
    bg-gradient-to-br from-[#191919] via-[#0f0f0f] to-[#0a0a0a]
    shadow-[0_0_30px_rgba(0,0,0,0.45)]"
              >
                {/* LEFT ICON */}
                <div
                  className="relative w-[80px] h-[60px] rounded-xl 
        bg-[#111]  
        border border-[#1c1c1c]
        flex items-center justify-center
        shadow-[0_0_18px_rgba(179,211,53,0.35)]"
                >
                  {/* Inner radial light */}
                  <div
                    className="
                            absolute inset-0 rounded-xl
                            bg-[radial-gradient(circle_at_top_left,rgba(179,211,53,0.20),transparent_60%)]
                            "
                  />

                  {/* Main content */}
                  <div className="relative z-10">
                    <Icon />
                  </div>
                </div>

                {/* TEXT */}
                <div className="relative z-10">
                  <h3 className="text-xl 2xl:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
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

export default ServicesSection2;
