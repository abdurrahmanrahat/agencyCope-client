import Branding from "../assets/portfolio/Branding.jpg";
import PortfolioImage from "../assets/portfolio/content-creation.jpg";
import Logo from "../assets/portfolio/logo-branding.jpg";

export const projectCategories = ["All", "Branding", "Logo Design", "Content Creation"];

export const projects = [
  {
    id: 1,
    title: "Logo Design",
    description: "Crafting memorable logos that define your brand identity",
    tags: ["Branding", "Logo Design"],
    image: Logo,
    href: "https://flickr.com/photos/expovector",
  },
  {
    id: 2,
    title: "Content Creation",
    description: "Designing engaging, brand-aligned visual content for digital marketing success",
    tags: ["Content Creation"],
    image: PortfolioImage,
    href: "https://www.behance.net/mdyeasin1088",
  },
  {
    id: 3,
    title: "Branding",
    description: "Building cohesive brand strategies that strengthen market presence",
    tags: ["Branding"],
    image: Branding,
    href: "https://flickr.com/photos/expovector",
  },
];
