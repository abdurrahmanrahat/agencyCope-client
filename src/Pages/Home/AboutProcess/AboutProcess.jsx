import { FaLightbulb, FaPenNib, FaSearch, FaTrophy } from "react-icons/fa";
import SectionTitle from "../../../components/ui/SectionTitle";

export default function AboutProcess() {
  return (
    <section className="">
      <div className="container-class">
        <SectionTitle
          title="About Process"
          description="A simple, effective workflow that ensures every project is delivered with clarity and impact."
        />

        {/* Parent Wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-1 text-center relative">
          {/* ------------ ITEM 1 ------------ */}
          <div className="relative rounded-lg shadow-myCustomShadow lg:p-6 w-full md:w-auto">
            <div className="flex justify-center mb-4">
              <FaSearch className="text-primary w-8 2xl:w-10 h-8 2xl:h-10" />
            </div>

            <h3 className="text-2xl 2xl:text-3xl font-semibold mb-2">
              Discover
            </h3>

            <p className="text-gray-300 max-w-xs mx-auto">
              We listen to your ideas, understand your goals, and analyze your
              requirements.
            </p>
          </div>

          {/* Line 1 (Between Item 1 & 2) */}
          <div className="lg:block hidden">
            <img src="/images/others/line1.png" className="w-48" alt="line" />
          </div>

          {/* Mobile Bottom Line 1 */}
          <div className="md:hidden mt-3">
            <img
              src="/images/others/line1.png"
              className="w-40 mx-auto"
              alt="line"
            />
          </div>

          {/* ------------ ITEM 2 ------------ */}
          <div className="relative rounded-lg shadow-myCustomShadow p-6 w-full md:w-auto">
            <div className="flex justify-center mb-4">
              <FaLightbulb className="text-primary w-8 2xl:w-10 h-8 2xl:h-10" />
            </div>

            <h3 className="text-2xl 2xl:text-3xl font-semibold mb-2">Plan</h3>

            <p className="text-gray-300 max-w-xs mx-auto">
              Our team creates a clear strategy and timeline to bring your
              vision to life.
            </p>
          </div>

          {/* Line 2 */}
          <div className="lg:block hidden">
            <img src="/images/others/line2.png" className="w-48" alt="line" />
          </div>

          {/* Mobile Bottom Line 2 */}
          <div className="md:hidden mt-3">
            <img
              src="/images/others/line2.png"
              className="w-40 mx-auto"
              alt="line"
            />
          </div>

          {/* ------------ ITEM 3 ------------ */}
          <div className="relative rounded-lg shadow-myCustomShadow p-6 w-full md:w-auto">
            <div className="flex justify-center mb-4">
              <FaPenNib className="text-primary w-8 2xl:w-10 h-8 2xl:h-10" />
            </div>

            <h3 className="text-2xl 2xl:text-3xl font-semibold mb-2">
              Design & Develop
            </h3>

            <p className="text-gray-300 max-w-xs mx-auto">
              We craft creative, high-quality solutions tailored to your brand.
            </p>
          </div>

          {/* Line 3 */}
          <div className="lg:block hidden">
            <img src="/images/others/line1.png" className="w-48" alt="line" />
          </div>

          {/* Mobile Bottom Line 3 */}
          <div className="md:hidden mt-3">
            <img
              src="/images/others/line1.png"
              className="w-40 mx-auto"
              alt="line"
            />
          </div>

          {/* ------------ ITEM 4 ------------ */}
          <div className="relative rounded-lg shadow-myCustomShadow p-6 w-full md:w-auto">
            <div className="flex justify-center mb-4">
              <FaTrophy className="text-primary w-8 2xl:w-10 h-8 2xl:h-10" />
            </div>

            <h3 className="text-2xl 2xl:text-3xl font-semibold mb-2">
              Deliver
            </h3>

            <p className="text-gray-300 max-w-xs mx-auto">
              Final project delivered on time – with ongoing support if needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
