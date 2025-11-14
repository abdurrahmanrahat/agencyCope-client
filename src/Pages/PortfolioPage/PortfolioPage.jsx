import PageBanner from "../../components/ui/PageBanner";
import Projects from "./Projects";

const PortfolioPage = () => {
  return (
    <div>
      <PageBanner
        title="Portfolio"
        image="/images/page-banners/about-page-banner.jpg"
        breadcrumb={{ label: "Portfolio", href: "/portfolio" }}
      />

      <Projects />
    </div>
  );
};

export default PortfolioPage;
