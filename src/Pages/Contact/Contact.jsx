import GlobalCoverage from "./GlobalCoverage";
import ScheduleEvent from "./ScheduleEvent";

const Contact = () => {
  return (
    <div className="container-class">
      {/* <ContactBanner></ContactBanner> */}

      <div className="my-14 md:my-20">
        <ScheduleEvent />
      </div>

      <div>
        <GlobalCoverage />
      </div>

      {/* <div className="mt-10 mb-16">
        <AboutSocial />
      </div> */}
    </div>
  );
};

export default Contact;
