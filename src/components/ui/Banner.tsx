import { Breadcrumb } from "./Breadcrumb";

type TBannerProps = {
  bgImage: string;
  title: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
};

const Banner = ({ bgImage, title, description, breadcrumbs }: TBannerProps) => {
  return (
    <div className="relative h-[280px] md:h-[330px] lg:h-[400px] 2xl:h-[440px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0  bg-cover bg-center`}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Gradient Overlay (adaptive for light/dark theme) */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/80" /> */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-[linear-gradient(125deg,rgba(179,211,53,0.2),transparent,transparent,transparent,rgba(179,211,53,0.3))]" />
      <div className="absolute inset-0 mx-auto bg-[linear-gradient(190deg,transparent,transparent,transparent,transparent,rgba(179,211,53,0.3))]"></div>

      {/* Centered Content */}
      <div className="relative z-10 mt-14 px-4 text-center space-y-4 animate-fadeIn">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-semibold uppercase tracking-tight drop-shadow-md [word-spacing:4px]">
          {title}
        </h1>
        <p className="text-gray-300 max-w-lg mx-auto text-sm md:text-base 2xl:text-lg">
          {description}
        </p>

        <Breadcrumb items={breadcrumbs} isBanner={true} />
      </div>
    </div>
  );
};

export default Banner;
