// import { IoIosArrowRoundForward } from "react-icons/io";

const serviceLinks = [
  {
    label: "BRAND IDENTITY",
    href: "#item-one",
  },
  {
    label: "Website Design",
    href: "#item-two",
  },
  {
    label: "GRAPHIC DESIGN",
    href: "#item-three",
  },
  {
    label: "DIGITAL MARKETING",
    href: "#item-four",
  },
  {
    label: "Social Media Content",
    href: "#item-five",
  },
  {
    label: "BRAND IDENTITY DESIGN",
    href: "#item-six",
  },
];

const ServicesContainer = () => {
  return (
    <div className="bg-darkShed">
      <div className="container-class">
        <div className="mx-4 md:mx-0 py-16">
          {/* head section */}
          {/* <div className="flex flex-col justify-center items-center">
            <img src={Image} className="w-40" alt="" />
            <h4 className="text-[24px] lg:text-[32px] font-medium text-center mt-4">
              Here’s how we can work together!
            </h4>
            <p className="text-[16px] text-center max-w-[50ch] mt-2">
              You deserve the confidence that comes with having a powerful,
              strategic, and eye-catching Design + Systems
            </p>
          </div> */}
          {/* <SectionTitle
            title={"Our Services"}
            description={
              "Confidently grow with strategic, bold design and smart systems."
            }
          /> */}
          <div className="flex flex-col items-center">
            <h5 className="text-primary uppercase text-base md:text-[20px] font-medium mb-2">
              Our Services
            </h5>
            <h2 className="md:text-xl text-center ">
              Confidently grow with strategic, bold design and smart systems
            </h2>
          </div>

          {/* clickable services list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:px-16 text-center mt-12">
            {serviceLinks.map((item, index) => (
              <div key={index}>
                <a href={item.href}>
                  <span className="border-b-2 border-primary text-primary shadow-class bg-[#16191E] rounded-md px-3 py-2 capitalize">
                    {item.label}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
