import { useState } from "react";
import { projectCategories, projects } from "../../data/project";
import PortfolioCard from "../Home/Portfolio/PortfolioCard";

const PortfolioPage = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selected));

  return (
    <section className="container-class my-14 md:my-20">
      <h5 className="text-primary uppercase text-base md:text-[20px] font-medium mb-2">
        Select Works
      </h5>
      <h2 className="text-2xl md:text-4xl mb-8">
        Projects that showcase my expertise and creativity
      </h2>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-8">
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
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
