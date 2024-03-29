// import ContactImg from "../../assets/contact-cover.jpg";
import ContactImg from "../../assets/contact/contact-img.png";

const ContactBanner = () => {
  return (
    <div className="bg-[#16191e] text-[#f4f4f4]">
      <div
        className="bg-cover h-80 lg:h-[360px] xl:h-[400px] 2xl:h-[440px] relative"
        style={{
          backgroundImage: `url(${ContactImg})`,
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-full flex flex-col items-center justify-center gap-4 p-4 md:p-0 py-8 md:py-0 absolute inset-0 bg-[#16191ebb] bg-opacity-90">
          <h2 className="text-[24px] lg:text-[36px] 2xl:text-[40px] font-medium">
            Contact Us
          </h2>
          <h4 className="text-[16px] max-w-[60ch] text-center">
            Towards Building Your Dream Brand Identity with Attractive Graphics,
            Banner & Logo Design, etc., and Make Website for Brand Identity
            Establishment
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
