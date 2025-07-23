import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import MyButton from "../../../components/ui/MyButton";
import { projectCategories, projects } from "../../../data/project";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selected));

  return (
    <section className="container-class my-14 md:my-24">
      <h5 className="text-primary uppercase text-base md:text-[20px] font-medium mb-2">
        Select Works
      </h5>
      <h2 className="text-2xl md:text-4xl mb-8">
        Projects that showcase my expertise and creativity
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {projectCategories.map((cat, index) => (
          <button
            key={index}
            className={`px-6 py-[10px] border border-gray-800 hover:bg-primary hover:text-dark rounded-full transition-all duration-300 ${
              selected === cat ? "text-dark bg-primary" : ""
            }`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.slice(0, 3).map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center">
        <Link to={`/portfolio`}>
          <MyButton
            mobileText="View More"
            desktopText="View More"
            isOutline={true}
            icon={<IoMdArrowForward />}
          />
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
