import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

// const experienceCardVariants = {
//   hidden: { opacity: 0.3, y: 180 }, // starts slightly to the right
//   visible: () => ({
//     opacity: 1,
//     y: 0, // slides into place
//     transition: {
//       duration: 1, // smooth duration
//       ease: "easeOut", // smooth cubic-bezier ease
//     },
//   }),
// };

const headingVariants = {
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

export default function AboutIntro() {
  return (
    <section className=" pt-16 md:pt-24">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 xl:gap-12 items-center">
        {/* Left Side */}
        <div className="relative rounded-xl overflow-hidden group">
          {/* Experience Box */}
          <div
            // variants={experienceCardVariants}
            // initial="hidden"
            // whileInView="visible"
            className="absolute top-3 left-3 xl:top-6 xl:left-6 bg-[#111]/80 border border-primary/30 rounded-xl px-6 py-4 shadow-[-3px_-3px_6px_rgba(179,211,53,0.9),0_0px_10px_rgba(179,211,53,0.6)] hover:shadow-[3px_3px_6px_rgba(179,211,53,0.9),0_0px_10px_rgba(179,211,53,0.6)] transition-all duration-500 backdrop-blur-md z-10"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-4xl xl:text-6xl font-semibold text-primary leading-none">
                  7
                </span>
                <span className="text-primary text-2xl font-bold">+</span>
              </div>
              <p className="text-sm md:text-base font-medium text-gray-200 mt-1 max-w-[15ch]">
                Years of Experience <br /> on Digital Marketing Services
              </p>
            </div>
          </div>

          {/* Background Image */}
          <div className="relative h-[250px] md:h-[420px] rounded-xl overflow-hidden">
            <img
              src="/images/about/team-image.jpg"
              alt="About Us"
              className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-700 h-[250px] md:h-[420px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,black,rgba(0,0,0,0.6),rgba(0,0,0,0.4),rgba(179,211,53,0.2),rgba(179,211,53,0.5))]"></div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            className="mb-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <IoMdInformationCircleOutline className="text-primary w-5 h-5" />
              <span className="text-primary text-sm 2xl:text-base font-medium uppercase tracking-wide">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold">
              Who We Are
            </h2>
          </motion.div>

          <p className="text-gray-300 mb-4 leading-relaxed 2xl:text-lg">
            Agency Cope is a performance-driven digital marketing agency
            specializing in Graphic Design, SEO, Web Development, and Brand
            Identity. With over 7 years of hands-on experience, we help brands
            grow smarter and faster, based in Bangladesh serving globally.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed 2xl:text-lg">
            Our strategists, designers, marketers, and media professionals are
            dedicated to results, not just services. Whether it’s a full-scale
            marketing strategy or a single campaign, we design every element
            with precision, originality, and data-driven insight.
          </p>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
            {[
              "Brand Identity Design",
              "Digital Marketing",
              "Motion & Graphic Design",
              "Web Design & Development",
              "Social Media Content",
              "AI Content & Motion",
            ].map((service, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-200">
                <FaRegCheckCircle className="w-4 h-4 2xl:w-5 2xl:h-5 text-primary" />
                <span className="text-sm xl:text-base 2xl:text-lg">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
