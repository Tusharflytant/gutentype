import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about gutentype and what we do.",
  keywords: ["Stock Market", "About", "Trading", "ETFS", "Finance"],
};

const About = () => {
  return (
    <div className="mt-40 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 text-gray-800 py-12 text-center">
        <h1 className="text-3xl text-black font-medium mb-4">About gutentype</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your trusted source for ETF insights, stock trading strategies, and financial news.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Who We Are */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            gutentype is a digital publication focused on delivering accurate, timely, and insightful content about the financial markets.
            Founded by a team of analysts, traders, and financial writers, we are committed to simplifying the complexities of finance for everyday investors and enthusiasts.
          </p>
          <p className="text-lg text-gray-700">
            We believe in the power of informed investing. Our goal is to equip our readers with the knowledge they need to navigate a constantly evolving economic landscape with confidence and clarity.
          </p>
        </section>

        {/* Our Mission */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            At gutentype, our mission is to democratize access to quality financial information. We strive to bridge the gap between Wall Street and the everyday investor by delivering well-researched, data-driven articles and analysis that help our readers make smarter financial decisions.
          </p>
          <p className="text-lg text-gray-700">
            We maintain editorial independence, uphold journalistic integrity, and focus on clarity, transparency, and real-world value in everything we publish.
          </p>
        </section>

        {/* What We Cover */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">What We Cover</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 mt-2">
            <li><strong>ETFs:</strong> In-depth analysis of exchange-traded funds, including sector-specific trends, fund performance, and risk assessment.</li>
            <li><strong>Stock Trading:</strong> Daily market recaps, technical analysis, breakout watchlists, and strategy breakdowns for both beginners and active traders.</li>
            <li><strong>Finance News:</strong> Breaking stories and macroeconomic developments that shape market sentiment and impact investment decisions.</li>
            <li><strong>Education:</strong> Step-by-step guides, terminology explainers, and portfolio-building basics for retail investors.</li>
            <li><strong>Opinion & Commentary:</strong> Insights from industry professionals, economic outlooks, and thoughtful commentary on current events.</li>
          </ul>
        </section>

        {/* Editorial Approach */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Editorial Approach</h2>
          <p className="text-lg text-gray-700 mb-4">
            Every piece of content published on gutentype goes through a rigorous editorial process to ensure accuracy, clarity, and fairness. Our writers adhere to strict standards and verify information using reputable sources.
          </p>
          <p className="text-lg text-gray-700">
            We avoid hype and sensationalism — our focus is on delivering value. Whether it’s an ETF breakdown or a market opinion, we back our work with data, charts, and historical context.
          </p>
        </section>

        {/* Our Readers */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Who Reads gutentype?</h2>
          <p className="text-lg text-gray-700">
            Our audience includes individual investors, active traders, financial advisors, and anyone seeking to better understand how the markets work.
            Whether you are just getting started with ETFs or optimizing your trading strategy, gutentype delivers insights tailored to your level.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
