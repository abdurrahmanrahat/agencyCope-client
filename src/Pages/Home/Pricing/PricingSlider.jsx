"use client";

import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import PricingCard from "./PricingCard";

const pricing = [
  {
    price: "$700",
    subtitle: "Creating visually compelling designs",
    title: "Graphic Design",
    features: [
      "Brand Consultation",
      "Logo Design & Variations",
      "Brand Fonts",
      "Brand Accents",
      "Social Media Cover",
      "3 A La carte items",
      "Digital Mockups",
    ],
    url: "/services/#item-three",
  },
  {
    price: "$1,260",
    subtitle: "Building user-friendly websites.",
    title: "Web Development",
    features: [
      "Responsive Design",
      "Content Upload",
      "Basic SEO",
      "Complete Dashboard",
      "Functional Website",
      "Unlimited Revisions",
      "2m Maintenance Free",
    ],
    url: "/services/#item-three",
  },
  {
    price: "$950",
    subtitle: "Data-driven marketing strategies.",
    title: "Digital Marketing",
    features: [
      "Digital Strategy",
      "Competitor Research",
      "Audience Target Analysis",
      "SEO Content Creation",
      "Paid Ads Management",
      "Performance Analytics",
      "Conversion Optimization",
    ],
    url: "/services/#item-four",
  },

  // New 4
  {
    price: "$540",
    subtitle: "Engaging posts that grow your brand",
    title: "Social Media Content",
    features: [
      "Content Strategy",
      "Branded Templates",
      "Caption Copywriting",
      "Instagram Carousels",
      "Short Video Edits",
      "Content Calendar",
      "Monthly Reporting",
    ],
    url: "/services/#item-four",
  },

  // New 5
  {
    price: "$680",
    subtitle: "AI-powered content & motion graphics",
    title: "AI Content Motion",
    features: [
      "AI-Generated Scenes",
      "Dynamic Motion Graphics",
      "AI Video Scripts",
      "Voiceover Support",
      "Brand-Driven Animation",
      "Social Media Ready",
      "Unlimited Concepts",
    ],
    url: "/services/#item-four",
  },
];

export default function PricingSlider() {
  const [current, setCurrent] = useState(0);
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setDevice("mobile");
      else if (window.innerWidth < 1200) setDevice("tablet");
      else setDevice("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [setDevice]);

  const next = () => setCurrent((p) => (p + 1) % pricing.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + pricing.length) % pricing.length);

  const getPositionStyles = (index) => {
    const diff = (index - current + pricing.length) % pricing.length;
    const distance = diff > pricing.length / 2 ? diff - pricing.length : diff;

    const desktop = {
      0: { transform: "translateX(0px) scale(1)", zIndex: 5, opacity: 1 },
      "-1": {
        transform: "translateX(-240px) scale(0.75)",
        zIndex: 4,
        opacity: 1,
      },
      1: {
        transform: "translateX(240px) scale(0.75)",
        zIndex: 4,
        opacity: 1,
      },
      "-2": {
        transform: "translateX(-380px) scale(0.55)",
        zIndex: 3,
        opacity: 0.85,
      },
      2: {
        transform: "translateX(380px) scale(0.55)",
        zIndex: 3,
        opacity: 0.85,
      },
    };

    const tablet = {
      0: { transform: "translateX(0px) scale(1)", zIndex: 5, opacity: 1 },
      "-1": {
        transform: "translateX(-120px) scale(0.75)",
        zIndex: 4,
        opacity: 1,
      },
      1: {
        transform: "translateX(120px) scale(0.75)",
        zIndex: 4,
        opacity: 1,
      },
      "-2": {
        transform: "translateX(-220px) scale(0.55)",
        zIndex: 3,
        opacity: 0.85,
      },
      2: {
        transform: "translateX(220px) scale(0.55)",
        zIndex: 3,
        opacity: 0.85,
      },
    };

    const mobile = {
      0: { transform: "translateX(0px) scale(1)", zIndex: 5, opacity: 1 },
      "-1": {
        transform: "translateX(-50px) scale(0.75)",
        zIndex: 4,
        opacity: 1,
      },
      1: {
        transform: "translateX(50px) scale(0.75)",
        zIndex: 4,
        opacity: 1,
      },
      "-2": {
        transform: "translateX(-90px) scale(0.55)",
        zIndex: 3,
        opacity: 0.8,
      },
      2: {
        transform: "translateX(90px) scale(0.55)",
        zIndex: 3,
        opacity: 0.8,
      },
    };

    const map =
      device === "mobile" ? mobile : device === "tablet" ? tablet : desktop;

    return (
      map[String(distance)] ?? {
        opacity: 0,
        transform: "scale(0.4)",
        zIndex: 1,
      }
    );
  };

  return (
    <section className="bg-background text-foreground">
      <div className="container-class ">
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prev}
            className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 z-50
            p-2 rounded-full border border-primary text-primary
            hover:bg-primary hover:text-white transition-all"
          >
            <FaAngleLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 z-50
            p-2 rounded-full border border-primary text-primary
            hover:bg-primary hover:text-white transition-all"
          >
            <FaAngleRight className="w-5 h-5" />
          </button>

          {/* Slider */}
          <div className="relative flex items-center justify-center h-[460px] md:h-[580px] xl:h-[600px] 2xl:h-[620px]">
            {pricing.map((item, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  transition: "transform 0.6s ease, opacity 0.6s ease",
                  ...getPositionStyles(index),
                }}
                className="w-[68vw] md:w-[45vw] xl:w-[25vw] 2xl:w-[20vw]"
              >
                <PricingCard {...item} />
              </div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="xl:hidden flex justify-center md:mt-2 gap-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
