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
      "Position yourself as an established expert in your space with a crystal clear brand identity. Say goodbye to the endless DIY struggle and hours spent in Canva, and get a custom brand style that will make your ideal clients fall in love. When we are done, you will walk away with a brand that looks and feels like you and that you will be proud to share online.",
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
    price: "$1799 usd",
  },
  {
    id: "item-two",
    index: "02",
    title: "Website Development",
    description:
      "Looking for a responsive and visually stunning website for your business? You're in the right place. I build modern, fast, and fully functional websites in a short turnaround time.",
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
    ],
    timeframe: "9 days",
    price: "$560 usd",
  },
  {
    id: "item-three",
    index: "03",
    title: "Graphic Design",
    description:
      "Position yourself as an established expert in your space with a crystal clear brand identity. Say goodbye to the endless DIY struggle and hours spent in Canva, and get a custom brand style that will make your ideal clients fall in love. When we are done, you will walk away with a brand that looks and feels like you and that you will be proud to share online.",
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
    price: "$1799 usd",
  },
  {
    id: "item-four",
    index: "04",
    title: "Digital Marketing",
    description:
      "Position yourself as an established expert in your space with a crystal clear brand identity. Say goodbye to the endless DIY struggle and hours spent in Canva, and get a custom brand style that will make your ideal clients fall in love. When we are done, you will walk away with a brand that looks and feels like you and that you will be proud to share online.",
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
    price: "$1799 usd",
  },
  {
    id: "item-five",
    index: "05",
    title: "Social Media Content",
    description:
      "Position yourself as an established expert in your space with a crystal clear brand identity. Say goodbye to the endless DIY struggle and hours spent in Canva, and get a custom brand style that will make your ideal clients fall in love. When we are done, you will walk away with a brand that looks and feels like you and that you will be proud to share online.",
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
    price: "$1299 usd",
  },
  {
  id: "item-six",
  index: "06",
  title: "Motion Graphics",
  description:
    "Bring your brand to life through captivating motion graphics that engage, explain, and inspire. Whether it's animated logos, explainer videos, or social content—our visuals deliver impact with every frame.",
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
  price: "$1499 usd",
}
];

function getAllServices(){
    return servicesData
}

export {
  getAllServices
};

