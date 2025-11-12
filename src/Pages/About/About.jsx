import PageBanner from "../../components/ui/PageBanner";
import AboutIntro from "./AboutIntro";
import TeamSection from "./Team";

const About = () => {
  return (
    <div>
      <PageBanner
        title="About Agency Cope"
        image="/images/page-banners/about-page-banner.jpg"
        breadcrumb={{ label: "About Us", href: "/about" }}
      />
      <AboutIntro />
      <TeamSection />
    </div>
  );
};

export default About;
