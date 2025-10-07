import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import HeroImage from "../../../assets/home/banner/hero.jpg";

const BannerSection = () => {
  return (
    <div
      className="h-[340px] md:h-[500px] lg:h-screen w-full relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 flex flex-col items-center justify-center gap-5 2xl:gap-7">
        {/* <h2 className="text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold max-w-[20ch] leading-tight md:leading-[1.25] uppercase [word-spacing:.15em]">
          Empowering Brands with Creative{" "}
          <span className="text-primary">Design & Digital</span> Growth
        </h2> */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }} // start far below
          whileInView={{ opacity: 1, y: 0 }} // smooth upward reveal
          transition={{
            duration: 1.6,
            ease: [0.65, 1.6, 0.5, 1],
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold max-w-[20ch] leading-tight md:leading-[1.25] uppercase [word-spacing:.15em] "
        >
          Empowering Brands with Creative{" "}
          <span className="text-primary">Design & Digital</span> Growth
        </motion.h2>

        {/* Action Button */}
        <Link to="/services" className="z-10">
          <button
            className={`text-[18px] rounded-md border border-primary bg-black text-primary hover:text-primary/80 duration-700 px-[14px] py-[7px] md:px-[16px] md:py-[8px] flex gap-3 items-center font-medium`}
          >
            <span className="">Get Started</span>
            <HiArrowRight className="w-5 h-5 md:w-5 md:h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BannerSection;
