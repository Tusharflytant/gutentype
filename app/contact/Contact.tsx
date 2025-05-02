"use client";
import React, { useState } from "react";


interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    let errorMsg = "";
    if (name === "name" || name === "message") {
      if (/\d/.test(value)) {
        errorMsg = "Must not contain numbers";
      }
    }
    if (name === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        errorMsg = "Enter a valid email";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }

    if (errors.name || errors.email || errors.message) {
      alert("Please fix the errors before submitting.");
      return;
    }

    alert("Submitted Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#fdfcfc] mt-40 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 text-gray-800 py-12 text-center">
        <h1 className="text-3xl text-black font-medium mb-4">Contact Gutentype</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Reach out with questions, feedback, or just to say hello — we’d love to hear from you.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-6">Contact Information</h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Address:</strong> New York, Market City, NY 10211
          </p>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> support@gutentype.com
          </p>
        </section>
      </main>
    </div>
  );
};

export default Contact;
