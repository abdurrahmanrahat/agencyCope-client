import Marquee from "react-fast-marquee";
import BrandCard from "./BrandCard";

const brandsTop = [
  { logo: "/images/collaboration/winged.jpg", country: "IVORY COAST" },
  { logo: "/images/collaboration/winged.jpg", country: "UK" },
  { logo: "/images/collaboration/winged.jpg", country: "GERMANY" },
  { logo: "/images/collaboration/winged.jpg", country: "USA" },
  { logo: "/images/collaboration/winged.jpg", country: "INDIA" },
];

const brandsBottom = [
  { logo: "/images/collaboration/winged.jpg", country: "SOUTH AFRICA" },
  { logo: "/images/collaboration/winged.jpg", country: "ISRAEL" },
  { logo: "/images/collaboration/winged.jpg", country: "NIGERIA" },
  { logo: "/images/collaboration/winged.jpg", country: "CROATIA" },
  { logo: "/images/collaboration/winged.jpg", country: "IRELAND" },
];

export default function BrandMarquee() {
  // Duplicate arrays for seamless infinite loop
  const top = [...brandsTop, ...brandsTop];
  const bottom = [...brandsBottom, ...brandsBottom];

  return (
    <section className="pt-14 md:pt-20">
      <div className="w-[92%] max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-wide [word-spacing:2px] mb-10 text-center">
          Collaborating With Top Brands Throughout The Years
        </h2>

        {/* TOP ROW */}
        <div className="overflow-hidden whitespace-nowrap mb-8">
          <Marquee direction="left" speed={35}>
            <div className="flex items-center gap-6 md:gap-12 px-6">
              {top.map((b, i) => (
                <BrandCard key={i} logo={b.logo} country={b.country} />
              ))}
            </div>
          </Marquee>
        </div>

        {/* BOTTOM ROW */}
        <div className="overflow-hidden whitespace-nowrap">
          <Marquee direction="right" speed={35}>
            <div className="flex items-center gap-6 md:gap-12 px-6">
              {bottom.map((b, i) => (
                <BrandCard key={i} logo={b.logo} country={b.country} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
