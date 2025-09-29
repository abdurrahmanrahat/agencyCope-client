import MahbubImage from "../../assets/about/mahbub-about.png";
import SectionTitle from "../../components/ui/SectionTitle";
import { skills, tools } from "../../data/about";
import SkillBar from "./SkillBar";
import Stats from "./Stats";
import ToolBadge from "./ToolBadge";

const AboutSection = () => {
  return (
    <section className="container-class my-14 md:my-24">
      <SectionTitle
        title={"About CEO of AgencyCope"}
        description={
          "Discover the mind behind the craft and the principles that guide it"
        }
      />

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

            <div className="text-gray-300 md:text-lg leading-[25px] space-y-2 text-justify">
              <p>
                I’m a passionate Graphic Designer and Digital Marketing
                Specialist with over 7 years of experience helping brands grow
                and thrive in competitive markets. My creative approach blends
                impactful visuals with data-driven marketing strategies to
                deliver real results.
              </p>

              <p>
                Since 2018, I’ve successfully completed 1,200+ projects and
                worked with more than 180 global brands across various
                industries. My experience spans across freelance, remote, and
                in-house roles, allowing me to adapt and excel in diverse
                working environments.
              </p>

              <p>
                Beyond design and marketing, I provide Business Consultancy
                services, guiding startups and established businesses alike in
                building strong brand identities and scalable strategies. I also
                lead a skilled team that delivers a wide range of digital
                services — ensuring end-to-end solutions for every client.
              </p>

              <p>
                My mission is simple: to empower businesses through powerful
                design, smart marketing, and strategic consulting that drive
                long-term success.
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
            <h3 className="text-xl md:text-[28px] mb-6">Tools We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
              {tools.map((tool, index) => (
                <ToolBadge key={index} {...tool} />
              ))}
            </div>
          </div>

          {/* Capabilities & Sidebar */}
          <div className="grid md:grid-cols-2 gap-10 ">
            <div>
              <h3 className="text-xl md:text-[28px] mb-6">Abilities</h3>
              {skills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>

            <div className="w-full">
              <div className="space-y-6">
                {/* Languages */}
                <div className="md:flex justify-between items-center border-y border-gray-900 py-4 ">
                  <div className="md:text-[17px] mb-4">Languages</div>
                  <div className="">
                    English, Bangla, Italian, French & Spanish
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="md:flex justify-between items-start">
                  <div className="md:text-[17px] mb-4">Soft Skills</div>
                  <div>
                    <ul className="space-y-1 list-disc list-inside marker:text-primary">
                      {[
                        "Creative and detailed",
                        "Excellent communication skills",
                        "Strong organizational abilities",
                        "Effective time management",
                        "Adaptive to clients",
                        "Passionate about learning",
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
