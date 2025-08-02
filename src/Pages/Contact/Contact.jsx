import AboutSocial from "../About/AboutSocial";
import ScheduleEvent from "../About/ScheduleEvent";

const Contact = () => {
  return (
    <div>
      {/* <ContactBanner></ContactBanner> */}

      <div className="my-14 md:my-20">
        <ScheduleEvent />
      </div>

      <div className="mt-10 mb-16">
        <AboutSocial />
      </div>
    </div>
  );
};

export default Contact;
