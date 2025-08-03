import ServicesCover from "../../../assets/services/service-img.png";
import CountingUp from "./CountingUp";

const ServicesBanner = () => {
  return (
    <section className="relative">
      <div
        className="bg-cover bg-center bg-no-repeat h-[500px] md:h-[380px] xl:h-[440px] 2xl:h-[460px] relative"
        style={{ backgroundImage: `url(${ServicesCover})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="absolute inset-0 px-6 grid place-items-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-white text-[26px] md:text-[36px] lg:text-[44px] leading-snug drop-shadow-md">
              Building Strong Brands, United
            </h2>
            <p className="text-gray-200 mt-3 mb-8 max-w-[50ch] text-sm lg:text-base leading-relaxed">
              Brand identity, logo design, responsive websites, digital
              marketing, social media content, and motion graphics — all crafted
              to boost your digital presence.
            </p>
            {/* count up */}
            <CountingUp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
