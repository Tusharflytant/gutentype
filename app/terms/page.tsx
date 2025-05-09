import React from "react";
import { Metadata } from "next";
import Outbrain from "@/components/ads/outbrain";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

const TermsAndConditions = () => {
  return (
    <div className=" mt-40 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 text-white py-12 text-center">
        <h1 className="text-3xl text-black font-medium mb-4">Terms & Conditions</h1>
        <p className="text-lg text-gray-800">
          Please take a moment to review our terms and conditions before using our services.
        </p>
      </header>

      <aside className="max-w-7xl mb-10  mt-20 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>
      

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* Section 1 */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Introduction</h2>
          <p className="text-lg text-gray-700 mb-4">
            By accessing or using our platform, you agree to these Terms & Conditions and Privacy Policy. If you disagree with any part, please refrain from using our website.
          </p>
          <p className="text-lg text-gray-700">
            These terms apply to all users, visitors, and those accessing or using the site.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Use of Content</h2>
          <p className="text-lg text-gray-700 mb-4">
            All content on the platform is for informational purposes only. Reproduction, distribution, or modification without permission is prohibited.
          </p>
          <p className="text-lg text-gray-700">
            Commercial use or unauthorized sharing of content is strictly prohibited.
          </p>
        </section>

        {/* Section 3 */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">User Responsibilities</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li><strong>Accountability:</strong> You are responsible for all actions under your account.</li>
            <li><strong>Integrity:</strong> Ensure that all content posted is truthful and respectful.</li>
            <li><strong>Compliance:</strong> Adhere to all applicable laws and regulations.</li>
            <li><strong>Security:</strong> Keep your account secure and do not attempt unauthorized access.</li>
            <li><strong>Respect:</strong> Interact respectfully with all members of the community.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Intellectual Property</h2>
          <p className="text-lg text-gray-700 mb-4">
            All content, including images, text, and graphics, is owned by our platform and protected by copyright laws.
          </p>
          <p className="text-lg text-gray-700">
            Unauthorized usage will result in legal consequences.
          </p>
        </section>

        {/* Section 5 */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Limitation of Liability</h2>
          <p className="text-lg text-gray-700">
            Our platform will not be held liable for any damages or losses incurred from using or failing to use the site.
          </p>
        </section>

        {/* Section 6 */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Changes to These Terms</h2>
          <p className="text-lg text-gray-700 mb-4">
            We reserve the right to update these Terms at any time without prior notice. Your continued use of the site after such changes implies acceptance of the new terms.
          </p>
        </section>

      </main>

            <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain/>
      
    </div>
  );
};

export default TermsAndConditions;
