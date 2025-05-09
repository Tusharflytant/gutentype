import React from 'react'
import { Metadata } from "next";
import Outbrain from '@/components/ads/outbrain';

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about LegalClaims and what we do.",
  keywords: ["Personal Injury", "Class Action Lawsuits", "Medical Claims", "Consumer Protection", "Legal Services"],
};

const About = () => {
  return (
    <div className="mt-40 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 text-gray-800 py-12 text-center">
        <h1 className="text-3xl text-black font-medium mb-4">About LegalClaims</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your trusted source for personal injury, class action lawsuits, medical claims, and consumer protection legal insights.
        </p>
      </header>

      <aside className="max-w-7xl mb-10  mt-20 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>
      

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Who We Are */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            LegalClaims is a digital platform focused on providing expert insights and information on legal issues that impact individuals. We specialize in personal injury, class action lawsuits, medical claims, and consumer protection rights.
          </p>
          <p className="text-lg text-gray-700">
            Our team of legal experts is dedicated to offering accessible and clear content to help everyday people understand their legal rights and navigate the legal system effectively.
          </p>
        </section>

        {/* Our Mission */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            At LegalClaims, our mission is to empower individuals by providing the legal knowledge they need to protect their rights. We offer well-researched articles and expert commentary on a wide range of legal topics, including personal injury, medical claims, and class action lawsuits.
          </p>
          <p className="text-lg text-gray-700">
            We are committed to maintaining editorial integrity and ensuring that all information is presented clearly and transparently, helping our readers make informed decisions.
          </p>
        </section>

        {/* What We Cover */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">What We Cover</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 mt-2">
            <li><strong>Personal Injury:</strong> Legal guidance on personal injury claims, from accidents to long-term injury cases.</li>
            <li><strong>Class Action Lawsuits:</strong> Insights on group lawsuits, eligibility, and how they can help victims of large-scale issues.</li>
            <li><strong>Medical Claims:</strong> Information about filing medical claims, understanding patient rights, and dealing with insurance companies.</li>
            <li><strong>Consumer Protection:</strong> Resources to help consumers understand their rights and take action against unfair business practices.</li>
          </ul>
        </section>

        {/* Editorial Approach */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Editorial Approach</h2>
          <p className="text-lg text-gray-700 mb-4">
            Every article on LegalClaims undergoes thorough fact-checking to ensure we provide accurate, clear, and reliable legal information. Our team of legal writers ensures that all content is accessible to people without a legal background.
          </p>
          <p className="text-lg text-gray-700">
            We focus on offering practical insights and advice backed by expert opinion, avoiding legal jargon and keeping our content understandable for everyone.
          </p>
        </section>

        {/* Our Readers */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Who Reads LegalClaims?</h2>
          <p className="text-lg text-gray-700">
            LegalClaims is for anyone seeking to learn more about their legal rights. Whether you’ve been affected by personal injury, are involved in a class action lawsuit, or need help navigating medical claims or consumer protection, our platform provides the information you need.
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

export default About;
