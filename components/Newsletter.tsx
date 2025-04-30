'use client';

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-white border border-red-100  rounded-2xl px-6 sm:px-12 py-12 mt-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-4">
          Stay in the Loop
        </h2>
        <p className="text-md sm:text-lg text-gray-700 mb-2">
          Subscribe to our newsletter and never miss an update.
        </p>
        <p className="text-md sm:text-lg text-gray-700 mb-8">
          Get the latest posts delivered straight to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full sm:w-2/3 px-5 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
