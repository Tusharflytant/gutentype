import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <div className="mt-40 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 text-gray-800 py-12 text-center">
        <h1 className="text-3xl text-black font-medium mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn how gutentype collects, uses, and protects your personal information.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Introduction */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Your Privacy Matters</h2>
          <p className="text-lg text-gray-700 mb-4">
            gutentype is committed to protecting your privacy. This policy explains what information we collect, how we use it, and the choices you have. We are transparent about our practices and dedicated to safeguarding your data.
          </p>
          <p className="text-lg text-gray-700">
            By using our website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        {/* Information Collection */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Information We Collect</h2>
          <p className="text-lg text-gray-700 mb-4">
            We may collect personal information such as your name, email address, and IP address when you sign up for newsletters, comment on articles, or contact us. We also gather non-personal data through cookies and analytics tools.
          </p>
          <p className="text-lg text-gray-700">
            This information helps us improve our content, monitor performance, and provide a better user experience.
          </p>
        </section>

        {/* How We Use It */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>To provide and maintain our website and services.</li>
            <li>To personalize content and deliver relevant updates.</li>
            <li>To respond to your comments or inquiries.</li>
            <li>To analyze trends and improve functionality.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Data Sharing & Third Parties</h2>
          <p className="text-lg text-gray-700 mb-4">
            We do not sell or rent your personal information. We may share data with trusted third-party providers for services like analytics, email distribution, or hosting — all bound by confidentiality agreements.
          </p>
          <p className="text-lg text-gray-700">
            These partners only access data necessary to perform their specific tasks and are obligated not to disclose or use it for other purposes.
          </p>
        </section>

        {/* Your Rights */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Your Privacy Rights</h2>
          <p className="text-lg text-gray-700">
            You have the right to access, update, or delete your personal information. You may also opt out of email communications at any time. To exercise these rights, please contact us directly.
          </p>
        </section>

        {/* Policy Updates */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Changes to This Policy</h2>
          <p className="text-lg text-gray-700">
            We may update our Privacy Policy occasionally. Changes will be reflected on this page with a revised effective date. Continued use of our services means you accept the updated terms.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
