import Banner from "../../../components/ui/Banner";

export default function TermsAndConditions() {
  return (
    <div className="">
      <Banner
        bgImage="/images/page-banners/about-page-banner.jpg"
        title="Terms & Conditions"
        description="Please read these Terms and Conditions carefully before using our
            website and services."
        breadcrumbs={[
          { label: "Terms & Conditions", href: "/terms-and-conditions" },
        ]}
      />

      {/* Banner */}
      {/* <section className="relative w-full h-52 md:h-68 lg:h-80 flex items-center justify-center border-y border-gray-700">
        <div className="relative z-10 text-center px-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide uppercase [word-spacing:2px]">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-300 max-w-xl mx-auto">
            Please read these Terms and Conditions carefully before using our
            website and services.
          </p>
        </div>
      </section> */}

      {/* Content */}
      <section className="container-class mx-auto max-w-5xl py-16 px-6 space-y-10">
        {/* Intro */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Introduction
          </h2>
          <p>
            These Terms and Conditions govern your use of{" "}
            <span className="text-primary font-semibold">Agency Cope’s</span>{" "}
            website and services. By accessing or using our website, you agree
            to comply with these Terms. If you disagree with any part of these
            Terms, please discontinue use of our services.
          </p>
        </div>

        {/* Eligibility */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Eligibility
          </h2>
          <p>
            By using our services, you confirm that you are at least 18 years
            old or have parental/guardian consent to use this website and our
            services.
          </p>
        </div>

        {/* Intellectual Property */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Intellectual Property
          </h2>
          <p>
            All content, designs, logos, text, graphics, and media provided on
            this website are the property of Agency Cope unless otherwise
            stated. Unauthorized reproduction, distribution, or modification is
            strictly prohibited.
          </p>
        </div>

        {/* Use of Services */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Use of Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You agree not to misuse our website or services in any way.</li>
            <li>
              You may not use our content for unlawful or unauthorized purposes.
            </li>
            <li>
              We reserve the right to terminate access to users who violate
              these Terms.
            </li>
          </ul>
        </div>

        {/* Payment & Refund */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Payment & Refund Policy
          </h2>
          <p>
            All payments for services are due in advance unless otherwise
            agreed. Refunds will be handled in accordance with project
            agreements and applicable consumer protection laws.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Limitation of Liability
          </h2>
          <p>
            Agency Cope shall not be held liable for any direct, indirect,
            incidental, or consequential damages arising from the use of our
            services, except where prohibited by law.
          </p>
        </div>

        {/* Termination */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your access to our
            services at any time without prior notice if you breach these Terms.
          </p>
        </div>

        {/* Changes to Terms */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. Updates will be posted
            on this page with a revised “Last updated” date. Continued use of
            our services after updates means you accept the new Terms.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us at:
          </p>
          <p className="mt-2 text-primary font-semibold">
            hello@agencycope.com
          </p>
        </div>
      </section>
    </div>
  );
}
