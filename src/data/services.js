import service4 from "../assets/services/services-four.png";
import service1 from "../assets/services/services-one.gif";
import { default as service3, default as service5 } from "../assets/services/services-three.png";
import service2 from "../assets/services/services-two.png";

const servicesData = [
  {
    id: "item-one",
    index: "01",
    title: "Brand Identity Design",
    description:
      "Crafting distinctive and cohesive brand identities that resonate with your target audience and establish lasting recognition",
    img: service1,
    items: [
      "Brand Consultation",
      "Comprehensive Brand Questionnaire",
      "Collaborative Pinterest board",
      "Moodboard & Design concept",
      "Logo Design & Variations (Alternate & Submark)",
      "Supplemental Brand Fonts",
      "Brand Accents (Patterns / Texture)",
      "Brand Icons (upto 6)",
      "Social Media Cover",
      "3 A La carte items (of your choice)",
      "Digital Mockups",
    ],
    timeframe: "3 weeks",
    price: "$1799",
  },
  {
    id: "item-two",
    index: "02",
    title: "Web Design & Development",
    description:
      "Building responsive, user-friendly websites optimized for performance, scalability, and seamless user experiences",
    img: service2,
    items: [
      "Up to 5 pages",
      "Responsive Design",
      "Content upload",
      "Detailed code comments",
      "Source code",
      "Basic SEO",
      "Complete Control panel (Dashboard)",
      "Functional website",
      "Design customization",
      "Brand Consultation",
      "Unlimited Revisions",
      "2 months maintenance free",
    ],
    timeframe: "9 days",
    price: "$760 - $1260",
  },
  {
    id: "item-three",
    index: "03",
    title: "Graphic Design",
    description:
      "Creating visually compelling graphics that communicate your message clearly and enhance your brand’s appeal",
    img: service3,
    items: [
      "Brand Consultation",
      "Comprehensive Brand Questionnaire",
      "Collaborative Pinterest board",
      "Moodboard & Design concept",
      "Logo Design & Variations (Alternate & Submark)",
      "Supplemental Brand Fonts",
      "Brand Accents (Patterns / Texture)",
      "Brand Icons (upto 6)",
      "Social Media Cover",
      "3 A La carte items (of your choice)",
      "Digital Mockups",
    ],
    timeframe: "3 weeks",
    price: "$799",
  },
  {
    id: "item-four",
    index: "04",
    title: "Digital Marketing",
    description:
      "Implementing data-driven marketing strategies to increase visibility, engagement, and conversion across digital channels",
    img: service4,
    items: [
      "Brand Consultation",
      "Comprehensive Brand Questionnaire",
      "Collaborative Pinterest board",
      "Moodboard & Design concept",
      "Logo Design & Variations (Alternate & Submark)",
      "Supplemental Brand Fonts",
      "Brand Accents (Patterns / Texture)",
      "Brand Icons (upto 6)",
      "Social Media Cover",
      "3 A La carte items (of your choice)",
      "Digital Mockups",
    ],
    timeframe: "3 weeks",
    price: "$1799",
  },
  {
    id: "item-five",
    index: "05",
    title: "Social Media Content",
    description:
      "Developing engaging and shareable content tailored to your audience to boost brand awareness and interaction",
    img: service5,
    items: [
      "6 platforms",
      "Page/channel evaluation",
      "30 social posts created",
      "Content creation",
      "Engagement with followers",
      "30 days",
      "Schedule posts",
      "Custom graphics",
      "Targeted Hashtags",
      "Creative caption",
      "Action plan",
    ],
    timeframe: "4 weeks",
    price: "$1299",
  },
  {
  id: "item-six",
  index: "06",
  title: "Motion Graphics",
  description:
    "Producing dynamic animations and videos that bring your brand story to life and captivate your audience",
  img: service3,
  items: [
    "Animated Logo Reveal",
    "Explainer Video (up to 60s)",
    "Kinetic Typography",
    "Infographic Animation",
    "Social Media Motion Posts (up to 5)",
    "Custom Sound Design",
    "Storyboarding & Scripting",
    "Revisions Included (3 rounds)",
    "HD Export (MP4/WEBM)",
    "YouTube Thumbnail & Cover",
    "Platform Optimization (IG, FB, TikTok)",
  ],
  timeframe: "2–3 weeks",
  price: "$1499",
}
];

function getAllServices(){
    return servicesData
}

export {
  getAllServices
};

