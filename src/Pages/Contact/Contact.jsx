import PageBanner from "../../components/ui/PageBanner";
import GlobalCoverage from "./GlobalCoverage";
import ScheduleEvent from "./ScheduleEvent";

const Contact = () => {
  return (
    <div>
      <PageBanner
        title="Contact"
        image="/images/page-banners/contact-page-banner.jpg"
        breadcrumb={{ label: "Contact", href: "/contact" }}
      />
      <div className="my-14 md:my-20">
        <ScheduleEvent />
      </div>

      <GlobalCoverage />
    </div>
  );
};

export default Contact;
