import ContactBanner from "./ContactBanner";
import Schedual from "./Schedual";

const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <div className="divider w-3/4 h-1 bg-slate-200 mx-auto mt-14"></div> 
            <Schedual></Schedual>
        </div>
    );
};

export default Contact;