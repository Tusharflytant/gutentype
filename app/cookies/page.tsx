import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",
};

const CookiesPolicy = () => {
  return (
    <div className="mt-40 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 text-gray-800 py-12 text-center">
        <h1 className="text-3xl text-black font-medium mb-4">Cookies Policy</h1>
        <p className="text-lg text-gray-600">
          Learn how gutentype uses cookies and similar technologies to enhance your browsing experience.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* What Are Cookies? */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">What Are Cookies?</h2>
          <p className="text-lg text-gray-700 mb-4">
            Cookies are small data files stored on your device when you visit websites. They help improve functionality, analyze usage, and deliver personalized content. gutentype uses cookies to enhance performance and tailor your experience.
          </p>
          <p className="text-lg text-gray-700">
            Some cookies are essential for the operation of our website, while others help us understand user behavior and improve our content.
          </p>
        </section>

        {/* How We Use Cookies */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">How We Use Cookies</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li><strong>Essential Cookies:</strong> Enable core functionality like security, network management, and accessibility.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site so we can improve user experience.</li>
            <li><strong>Performance Cookies:</strong> Monitor site performance and gather data on technical issues.</li>
            <li><strong>Advertising Cookies:</strong> Deliver relevant advertisements and track campaign effectiveness across platforms.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a more personalized experience.</li>
          </ul>
        </section>

        {/* Managing Cookies */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Managing Cookies</h2>
          <p className="text-lg text-gray-700 mb-4">
            You can control and manage cookies through your browser settings. Most browsers allow you to reject or delete cookies at any time. However, please note that disabling cookies may impact the functionality of some parts of our site.
          </p>
          <p className="text-lg text-gray-700">
            You can also opt out of certain third-party cookies used for advertising through industry opt-out tools.
          </p>
        </section>

        {/* Third-Party Cookies */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Third-Party Cookies</h2>
          <p className="text-lg text-gray-700">
            Some cookies may be placed by third-party services we use, such as analytics platforms or advertising networks. We do not control these cookies and encourage you to review their privacy policies.
          </p>
        </section>

        {/* Changes to This Policy */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Changes to This Policy</h2>
          <p className="text-lg text-gray-700">
            gutentype may update this Cookies Policy from time to time. We encourage you to review this page periodically for any changes. Your continued use of our site signifies your agreement to the updated terms.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CookiesPolicy;
