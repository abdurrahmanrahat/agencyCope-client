import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import SectionTitle from "../../../components/ui/SectionTitle";
import FaqCover from "/images/page-banners/faq-banner.jpg";

const faqs = [
  {
    question: "What services does Agency Cope provide?",
    answer:
      "We specialize in Graphic Design, Web Development, SEO, Brand Identity, Digital Marketing, Social Media Management, and Motion Graphics — delivering full-scale creative and performance-driven solutions.",
  },
  {
    question: "How can I get started with Agency Cope?",
    answer:
      "You can reach out to us via our contact form or email us directly at gdmarket20@gmail.com. Once we understand your requirements, we’ll share a customized plan or proposal for your project.",
  },
  {
    question: "Do you offer website design and development?",
    answer:
      "Yes! We design and develop responsive, SEO-friendly, and high-performing websites tailored to your brand. From UI/UX to backend functionality — we handle it all.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the service type and complexity. Most branding or design projects take 1–2 weeks, while complete website or marketing solutions may take 3–6 weeks.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! We proudly collaborate with clients across the USA, Canada, Europe, Australia, and the Middle East — delivering consistent quality regardless of location or time zone.",
  },
  {
    question: "Do you provide post-project support?",
    answer:
      "Yes, we offer maintenance and support plans for websites, branding updates, and ongoing marketing campaigns to ensure your brand keeps evolving.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payments through Payoneer, Wise, Bank Transfer, and other secure international methods. Project initiation usually requires a 50% upfront deposit.",
  },
  {
    question: "Can I request revisions after delivery?",
    answer:
      "Of course! We offer multiple revision rounds depending on your service plan to ensure the final result aligns perfectly with your vision.",
  },
  {
    question: "Do you offer digital marketing packages?",
    answer:
      "Yes — we provide tailored marketing packages including SEO, Google Ads, Social Media Strategy, and content creation based on your brand’s goals and audience.",
  },
  {
    question: "Why should I choose Agency Cope?",
    answer:
      "Because we blend creativity, technology, and strategy. Our team focuses on measurable growth, strong brand identity, and long-term client satisfaction — not just aesthetics.",
  },
];

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#080808] text-neutral-300">
      {/* Banner Section */}
      <section className="relative">
        <div
          className="bg-cover bg-center bg-no-repeat h-[420px] md:h-[380px] xl:h-[440px] relative"
          style={{ backgroundImage: `url(${FaqCover})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* Content */}
          <div className="absolute inset-0 px-6 grid place-items-center">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-white text-[26px] md:text-[36px] lg:text-[44px] font-medium leading-snug drop-shadow-md">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 mt-3 mb-8 max-w-[50ch] text-sm lg:text-base leading-relaxed">
                Find answers to the most common questions about our agency,
                services, process, and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-class mx-auto max-w-5xl py-16 px-6">
        <div className="my-10">
          <SectionTitle
            title="Have Questions? We’ve Got Answers"
            description="Here’s everything you need to know before working with Agency Cope"
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-white/10 rounded-xl bg-white/5 transition-all duration-300 ${
                activeIndex === index ? "border-primary/60 bg-white/10" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-lg md:text-xl font-medium text-white">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FaMinus className="text-primary text-base flex-shrink-0 transition-transform duration-300" />
                ) : (
                  <FaPlus className="text-primary text-base flex-shrink-0 transition-transform duration-300" />
                )}
              </button>

              {/* Animated Answer */}
              <div
                className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-neutral-300 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
