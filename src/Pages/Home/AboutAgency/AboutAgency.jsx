import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

const cardVariants = {
  hidden: { opacity: 0.3, y: 60 }, // starts slightly to the right
  visible: () => ({
    opacity: 1,
    y: 0, // slides into place
    transition: {
      delay: 0.1,
      duration: 1.2, // smooth duration
      ease: "easeOut", // smooth cubic-bezier ease
    },
  }),
};

export default function AboutAgency() {
  return (
    <section className="relative w-full pt-16 md:pt-24">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        className="container-class mx-auto max-w-5xl px-6 text-center"
      >
        {/* Section Title with Icon */}
        <div className="flex items-center justify-center gap-1 mb-6">
          <FiChevronRight className="text-primary text-4xl font-extrabold" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide uppercase [word-spacing:2px]">
            AgencyCope At A Glance
          </h2>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-neutral-300 max-w-3xl mx-auto">
          At <span className="text-primary font-semibold">Agency Cope</span>, we
          merge creativity with strategy to deliver results that matter. From{" "}
          <span className="text-white font-medium">Graphic Design</span> to{" "}
          <span className="text-white font-medium">SEO</span>,{" "}
          <span className="text-white font-medium">Web Development</span>, and{" "}
          <span className="text-white font-medium">Brand Identity</span>, we
          help businesses build lasting impressions and achieve measurable
          growth. With{" "}
          <span className="text-primary font-semibold">7+ years</span> of
          experience, our team proudly partners with brands across the globe.
        </p>

        {/* Decorative underline accent */}
        <div className="mt-8 flex justify-center">
          <span className="block w-32 h-1 rounded-full bg-gradient-to-r from-primary/70 via-primary to-primary/70"></span>
        </div>
      </motion.div>
    </section>
  );
}
