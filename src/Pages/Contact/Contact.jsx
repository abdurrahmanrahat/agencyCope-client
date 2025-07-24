import AboutSocial from "../About/AboutSocial";
import Calendly from "../About/Calendly";
import ContactBanner from "./ContactBanner";

const Contact = () => {
  return (
    <div>
      <ContactBanner></ContactBanner>

      <div className="my-14 md:my-20">
        <AboutSocial />
      </div>

      <div className="mt-10 mb-16">
        <Calendly />
      </div>
    </div>
  );
};

export default Contact;
