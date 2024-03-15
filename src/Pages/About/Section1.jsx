import AboutImage from "../../assets/about/about.png";

const Section1 = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <div className="max-w-screen-xl mx-auto md:flex py-16 md:py-24 px-4 md:px-0">
        <div className="md:w-1/2 pb-8 md:pb-0 md:flex justify-center">
          <img src={AboutImage} alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center space-y-4">
          <div>
            <h4 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold uppercase">
              Md. Yeasin Mahbub
            </h4>
            <p className="text-[15px] 2xl:text-[16px] font-semibold">
              Founder & CEO of AgencyCope
            </p>
          </div>

          <p className="font-medium">
            Software Engineer | Graphic Designer | UX/UI Designer | Digital
            Marketer E-commerce Seller | Experienced in Blockchain,
            CryptoCurrency Top Rated Plus Freelancer on Upwork
          </p>

          <p className="font-medium">
            I help businesses grow through meaningful design and marketing
            strategy.
          </p>

          <p className="font-medium">
            I’ll Personally Guide You Through Each Stage So You Can Make Amazing
            Things For Your Brand Quickly & Easily. As a business owner myself,
            I have a lot of experience in this area. Such as Software
            engineering, branding & Design, Web & App Design & Development,
            Marketing and more.
          </p>

          <a href="#">
            <span className="bg-[#16191E] text-[#F4F4F4]">about.mahbub.co</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
