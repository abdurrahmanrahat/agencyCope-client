import { Link } from "react-router-dom";

const PageBanner = ({ title, image, breadcrumb }) => {
  return (
    <section className="relative h-[250px] md:h-[360px] xl:h-[420px] 2xl:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-[linear-gradient(125deg,rgba(179,211,53,0.2),transparent,transparent,transparent,rgba(179,211,53,0.3))]" />
      <div className="absolute inset-0 mx-auto bg-[linear-gradient(190deg,transparent,transparent,transparent,transparent,rgba(179,211,53,0.3))]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 mt-12">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold tracking-wide [word-spacing:4px]">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm 2xl:text-lg sm:text-base mt-1 md:mt-2 xl:mt-3">
          <Link
            to="/"
            className="text-white hover:text-primary transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          <span>/</span>
          <Link to={breadcrumb?.href || "#"} className="text-white/70 ">
            {breadcrumb?.label}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
