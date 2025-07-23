import MahbubImage from "../../assets/home/image2.png";
import { skills, tools } from "../../data/about";
import SkillBar from "./SkillBar";
import Stats from "./Stats";
import ToolBadge from "./ToolBadge";

const AboutSection = () => {
  return (
    <section className="container-class my-14 md:my-24">
      <h5 className="text-primary uppercase text-base md:text-[20px] font-medium mb-2">
        About Me
      </h5>
      <h2 className="text-2xl md:text-4xl mb-8 max-w-[30ch]">
        Get a glimpse of the person behind the work and the values I stand by
        ...
      </h2>

      <div className="max-w-[1080px] mx-auto border border-gray-900 rounded-lg">
        <div className="grid md:grid-cols-2 gap-10 items-center ">
          {/* Left */}
          <div className="p-6 rounded-2xl space-y-4">
            <div className="border-b border-gray-900 py-6">
              <p className="italic font-medium text-[24px] text-gray-500 mb-2">
                Hello, I&apos;m
              </p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                Yeasin <span className="italic font-light">Mahbub</span>
              </h3>
            </div>

            <div className="text-gray-300 md:text-lg leading-[25px] text-justify space-y-2">
              <p>
                I’m a professional Brand Identity and Graphic Designer with over
                5 years of experience, specializing in impactful designs that
                drive business growth. Since 2020.
              </p>

              <p>
                I’ve completed 1,100+ projects and worked with 200+ brands
                across 80% of the globe — delivering freelance, remote, and
                in-office solutions.
              </p>

              <p>
                I also serve as a Brand & Business Consultant, leading a team
                that offers full digital services. My goal is to deliver
                top-tier design that ensures client success.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center items-center">
            <img
              src={MahbubImage}
              alt="Ibrahim"
              className="rounded-2xl w-full max-w-sm"
            />
          </div>
        </div>

        <hr className="border-b border-gray-900 mx-6 my-4" />

        <div className="p-6 space-y-8 md:space-y-12">
          {/* Tools */}
          <div className="">
            <h3 className="text-xl md:text-[28px] mb-6">
              Essential tools I use
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
              {tools.map((tool, index) => (
                <ToolBadge key={index} {...tool} />
              ))}
            </div>
          </div>

          {/* Capabilities & Sidebar */}
          <div className="grid md:grid-cols-2 gap-10 ">
            <div>
              <h3 className="text-xl md:text-[28px] mb-6">Capabilities</h3>
              {skills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>

            <div className="w-full">
              <div className="space-y-6">
                {/* Languages */}
                <div className="md:flex justify-between items-center border-y border-gray-900 py-4">
                  <div className="md:text-[17px] mb-4">Languages</div>
                  <div className="">English – Professional Level, Bangla</div>
                </div>

                {/* Soft Skills */}
                <div className="md:flex justify-between items-start">
                  <div className="md:text-[17px] mb-4">Soft Skills</div>
                  <div>
                    <ul className="space-y-1 list-disc list-inside marker:text-primary">
                      {[
                        "Creativity and attention to detail",
                        "Excellent communication skills",
                        "Organisational abilities",
                        "Excellent time management skills",
                        "Adaptability to client needs",
                        "Passion for learning",
                      ].map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
