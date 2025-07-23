import ServicesCover from "../../assets/services/service-img.png";

const ServicesBanner = () => {
  return (
    <section className="relative">
      <div
        className="bg-cover bg-center bg-no-repeat h-80 lg:h-[380px] xl:h-[420px] 2xl:h-[460px] relative"
        style={{ backgroundImage: `url(${ServicesCover})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white text-[26px] md:text-[36px] lg:text-[44px] font-medium leading-snug drop-shadow-md">
            Let’s Connect & Collaborate
          </h2>
          <p className="text-gray-200 mt-4 max-w-2xl text-[15px] md:text-[18px] leading-relaxed">
            Whether it&pos;s branding, design, or development — reach out to
            turn your vision into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
