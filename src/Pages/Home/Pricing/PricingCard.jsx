import { FaArrowRightLong } from "react-icons/fa6";

const PricingCard = ({ price, subtitle, title, features, url }) => {
  return (
    <div
      className="
        relative rounded-[32px] p-6 md:p-8 
        bg-[linear-gradient(155deg,rgba(179,211,53,0.2),#0f0f0f,black,black,rgba(179,211,53,0.2))]

        shadow-[1px_1px_2px_rgba(179,211,53,0.4)]
        
        backdrop-blur-md
        transition-all duration-300
        
      "
    >
      {/* hover:shadow-[0_0_40px_rgba(179,211,53,0.35)] */}
      {/* Neon Outer Glow */}
      <div
        className="
        absolute inset-0 rounded-[32px] pointer-events-none
        shadow-[0_0_40px_rgba(179,211,53,0.10)]
      "
      ></div>

      {/* Purple Ambient Glow */}
      <div
        className="
        absolute inset-0 rounded-[32px] pointer-events-none
        bg-[radial-gradient(circle_at_top_center,rgba(179,211,53,0.1),transparent_70%)]
      "
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-medium text-white">{price}</h2>
        <p className="text-gray-300 mt-1 mb-3 md:mb-5 hidden md:block">
          {subtitle}
        </p>

        <h3 className="text-xl font-semibold text-[#B3D335] mb-[10px] md:mb-4">
          {title}
        </h3>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/10 mb-3 md:mb-5"></div>

        {/* Feature List */}
        <ul className="flex flex-col gap-1 md:gap-2 xl:gap-3 mb-4 md:mb-6 xl:mb-8">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-start gap-[6px] md:gap-3 text-gray-300"
            >
              <span className="text-[#B3D335] text-lg">✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Button */}
        <a
          href={url}
          className="
            w-full text-center py-3 rounded-md font-medium
            bg-gradient-to-r from-primary/90 via-primary/70 to-primary/80
            text-black tracking-wide
            hover:opacity-90 transition flex justify-center items-center gap-2"
        >
          <span>Explore More</span> <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
