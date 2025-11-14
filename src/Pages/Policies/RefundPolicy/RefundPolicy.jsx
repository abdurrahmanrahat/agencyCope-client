import Banner from "../../../components/ui/Banner";

export default function RefundPolicy() {
  return (
    <div className="">
      <Banner
        bgImage="/images/page-banners/about-page-banner.jpg"
        title="Refund Policy"
        description="Learn about our refund terms, eligibility, and process for
            service-related concerns."
        breadcrumbs={[{ label: "Refund Policy", href: "/refund-policy" }]}
      />

      {/* Banner */}
      {/* <section className="relative w-full h-52 md:h-68 lg:h-80 flex items-center justify-center border-y border-gray-700">
        <div className="relative z-10 text-center px-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide uppercase [word-spacing:2px]">
            Refund Policy
          </h1>
          <p className="mt-3 text-sm md:text-base text-neutral-300 max-w-xl mx-auto">
            Learn about our refund terms, eligibility, and process for
            service-related concerns.
          </p>
        </div>
      </section> */}

      {/* Content */}
      <section className="container-class mx-auto max-w-5xl py-16 px-6 space-y-10">
        {/* Intro */}
        <div>
          <p>
            This Refund Policy applies to the digital marketing and creative
            services provided by{" "}
            <span className="text-primary font-semibold">Agency Cope</span>.
          </p>
        </div>

        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. Scope of Refund Policy
          </h2>
          <p>
            1.1 This policy outlines the conditions under which refunds may be
            issued for services provided by{" "}
            <span className="text-primary font-semibold">Agency Cope</span>.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            2. Eligibility for Refund
          </h2>
          <p>
            2.1 Refunds will only be considered under the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Service was not delivered as agreed upon in the Service Agreement.
            </li>
            <li>
              Agency Cope fails to initiate or complete the agreed-upon services
              within the specified timeframe.
            </li>
          </ul>
          <p className="mt-3">
            2.2 Refund requests must be submitted in writing to{" "}
            <span className="text-primary font-semibold">
              gdmarket20@gmail.com
            </span>{" "}
            within <span className="font-semibold">15 days</span> of the service
            completion date.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            3. Non-Eligibility for Refund
          </h2>
          <p>
            3.1 Refunds will not be provided under the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Changes in client requirements or objectives after the initiation
              of services.
            </li>
            <li>
              Client dissatisfaction with subjective elements of the delivered
              services, such as design, content, or creative direction.
            </li>
            <li>
              Delays or issues caused by client-side inaction, communication
              gaps, or late submission of required materials.
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            4. Refund Process
          </h2>
          <p>
            4.1 Clients seeking a refund must submit a written request to{" "}
            <span className="text-primary font-semibold">
              gdmarket20@gmail.com
            </span>{" "}
            including the following details:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Full name and contact information of the client.</li>
            <li>Description of the issue leading to the refund request.</li>
            <li>
              Any relevant documentation or evidence supporting the claim.
            </li>
          </ul>
          <p className="mt-3">
            4.2 Agency Cope will review the refund request within{" "}
            <span className="font-semibold">15 business days</span> of receiving
            the complete information.
          </p>
          <p className="mt-3">
            4.3 If the refund request is approved, the refund will be processed
            within <span className="font-semibold">30 business days</span>{" "}
            through the original payment method.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            5. Partial Refunds
          </h2>
          <p>
            5.1 In specific cases,{" "}
            <span className="text-primary font-semibold">Agency Cope</span>
            may issue a partial refund depending on the work completed and the
            circumstances of the request.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            6. No Refund for Consultation Services
          </h2>
          <p>
            6.1 Consultation or strategy-based services provided by{" "}
            <span className="text-primary font-semibold">Agency Cope</span> are
            non-refundable.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            7. Changes to Refund Policy
          </h2>
          <p>
            7.1 <span className="text-primary font-semibold">Agency Cope</span>{" "}
            reserves the right to update or modify this Refund Policy at any
            time without prior notice. Clients are encouraged to review this
            policy periodically for updates.
          </p>
        </div>

        {/* Final Notice */}
        <div>
          <p className="text-neutral-300">
            By engaging with{" "}
            <span className="text-primary font-semibold">Agency Cope’s</span>{" "}
            services, you acknowledge that you have read, understood, and agree
            to this Refund Policy. For any questions or concerns, please contact
            us at{" "}
            <span className="text-primary font-semibold">
              gdmarket20@gmail.com
            </span>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
