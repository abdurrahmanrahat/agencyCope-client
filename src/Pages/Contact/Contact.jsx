import Appointment from "./Appointment";
import ContactBanner from "./ContactBanner";

const Contact = () => {
  return (
    <div>
      <ContactBanner></ContactBanner>
      {/* <div className="divider w-3/4 h-1 bg-slate-200 mx-auto mt-14"></div>  */}

      <div className="mt-10 mb-16">
        {/* <Schedual /> */}

        <Appointment />
      </div>
    </div>
  );
};

export default Contact;
