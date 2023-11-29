import ContactImg from "../../assets/contact-cover.jpg";

const ContactBanner = () => {
  return (
    <div
      className="bg-cover text-white h-80 lg:h-[340px] 2xl:h-[380px] relative"
      style={{ backgroundImage: `url(${ContactImg})` }}
    >
      <div className="w-full flex flex-col items-center justify-center gap-6 p-4 md:p-0 py-8 md:py-0 absolute inset-0 bg-[#16191e] opacity-80">
        <h2 className="text-4xl">Contact Us</h2>
        <h4 className="text-lg text-center">
          Let’s build you a gorgeous Brand & Website that Converts.
        </h4>
      </div>
    </div>
  );
};

export default ContactBanner;
