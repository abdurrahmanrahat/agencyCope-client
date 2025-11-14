import PageBanner from "../../components/ui/PageBanner";
import AboutSection from "./AboutSection";
import AboutSocial from "./AboutSocial";

const CEOPage = () => {
  return (
    <div>
      <PageBanner
        title="CEO of Agency Cope"
        image="/images/page-banners/about-page-banner.jpg"
        breadcrumb={{ label: "CEO", href: "/ceo-of-agency-cope" }}
      />

      <AboutSection />
      <AboutSocial />
    </div>
  );
};

export default CEOPage;
