import SectionTitle from "../../../components/ui/SectionTitle";
import PricingCard from "./PricingCard";

const pricing = [
  {
    price: "$700",
    subtitle: "Creating visually compelling designs",
    title: "Graphic Design",
    features: [
      "Brand Consultation",
      "Logo Design & Variations (Alternate & Submark)",
      "Supplemental Brand Fonts",
      "Brand Accents (Patterns / Texture)",
      "Brand Icons (upto 6)",
      "Social Media Cover",
      "3 A La carte items (of your choice)",
      "Digital Mockups",
    ],
    url: "/services/#item-three",
  },
  {
    price: "$1,260",
    subtitle: "Building user-friendly websites.",
    title: "Web Design & Development",
    features: [
      "Responsive Design",
      "Content upload",
      "Basic SEO",
      "Complete Control panel (Dashboard)",
      "Functional website",
      "Brand Consultation",
      "Unlimited Revisions",
      "2 months maintenance free",
    ],
    url: "/services/#item-three",
  },
  {
    price: "$950",
    subtitle: "Data-driven marketing strategies.",
    title: "Digital Marketing",
    features: [
      "Digital Marketing Strategy",
      "Competitor Research Insights",
      "Audience Target Analysis",
      "SEO Content Creation",
      "Paid Ads Management",
      "Campaign Creative Assets",
      "Performance Analytics Reporting",
      "Conversion Optimization Support",
    ],
    url: "/services/#item-four",
  },
];

export default function Pricing() {
  return (
    <section className="container-class pb-14 md:pb-24">
      <SectionTitle
        title={"Pricing Plans"}
        description={"Smart Choices, Exceptional Results"}
      />

      <div className="">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
