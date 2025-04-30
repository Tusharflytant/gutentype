import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA",
};

const DMCA = () => {
  return (
    <div className="mt-40 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 text-gray-800 py-12 text-center">
        <h1 className="text-3xl text-black font-medium mb-4">DMCA Policy</h1>
        <p className="text-lg text-gray-600">
          Learn how gutentype handles copyright infringement claims under the DMCA.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* What is the DMCA? */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">What is the DMCA?</h2>
          <p className="text-lg text-gray-700 mb-4">
            The Digital Millennium Copyright Act (DMCA) is a U.S. law that protects the rights of copyright holders by enabling them to report infringing content. gutentype complies fully with the DMCA and respects the intellectual property of others.
          </p>
          <p className="text-lg text-gray-700">
            This policy outlines our procedures for handling DMCA takedown notices and how affected parties may respond.
          </p>
        </section>

        {/* Reporting Infringement */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Reporting Copyright Infringement</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you believe that content on gutentype infringes on your copyright, please send a written DMCA notice to our designated agent including the following:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
            <li>A description of the copyrighted work you claim has been infringed.</li>
            <li>The exact URL or location of the infringing material on our site.</li>
            <li>Your contact information, including name, address, phone number, and email.</li>
            <li>A statement that you have a good faith belief the use is unauthorized.</li>
            <li>A statement, under penalty of perjury, that the information is accurate and you are the copyright owner or authorized to act on their behalf.</li>
            <li>Your physical or electronic signature.</li>
          </ul>
        </section>

        {/* Counter-Notification */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Counter-Notification</h2>
          <p className="text-lg text-gray-700 mb-4">
            If your content was removed due to a DMCA notice and you believe this was done in error, you may file a counter-notification.
          </p>
          <p className="text-lg text-gray-700">
            Your counter-notification must include your contact details, identification of the removed content, a statement under penalty of perjury that you believe the content was removed by mistake, consent to jurisdiction in a U.S. federal court, and your signature.
          </p>
        </section>

        {/* Repeat Infringers */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Repeat Infringers</h2>
          <p className="text-lg text-gray-700">
            gutentype has a zero-tolerance policy for repeat copyright infringers. We may terminate user accounts or access for repeat offenders at our sole discretion.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            DMCA notices and counter-notices should be sent to our designated agent:
          </p>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> legal@gutentype.com
            <br />
            <strong>Address:</strong> gutentype, Attn: DMCA Agent, 1234 Street Name, City, State, 12345
          </p>
        </section>

      </main>
    </div>
  );
};

export default DMCA;