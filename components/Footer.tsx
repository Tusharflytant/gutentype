import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black mt-24 pt-14 pb-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Top Row: Logo + Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
          {/* Logo & Description */}
          <div className="lg:w-1/3">
            <Link href="/">
              <Image 
                src="/logo-legal.png" 
                alt="LegalClaim" 
                width={200} 
                height={80}
                className="mb-4"
              />
            </Link>
            <p className="text-sm text-gray-700 leading-relaxed">
              LegalClaim is your trusted guide to navigating legal challenges and understanding your rights. From personal injury and class action lawsuits to medical claims and consumer protection, we cover the issues that matter most.
            </p>
          </div>

          {/* Link Sections */}
          <div className="lg:w-2/3 flex justify-end gap-8">
            <div className="flex gap-20"> {/* Adding gap between Quick Links and Legal */}
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy" className="hover:text-red-500 hover:underline">Privacy Policy</Link></li>
                  <li><Link href="/contact" className="hover:text-red-500 hover:underline">Contact Us</Link></li>
                  <li><Link href="/about" className="hover:text-red-500 hover:underline">About Us</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/terms" className="hover:text-red-500 hover:underline">Terms & Conditions</Link></li>
                  <li><Link href="/dmca" className="hover:text-red-500 hover:underline">DMCA</Link></li>
                  <li><Link href="/cookies" className="hover:text-red-500 hover:underline">Cookies Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-red-500" />

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-bold text-sm  text-gray-800 mb-10">
          <Link href="/personalinjury" className="hover:text-red-500 hover:underline">Personal Injury</Link>
          <Link href="/classaction" className="hover:text-red-500 hover:underline">Class Action Lawsuits</Link>
          <Link href="/medicalclaims" className="hover:text-red-500 hover:underline">Medical Claims</Link>
          <Link href="/consumer" className="hover:text-red-500 hover:underline">Consumer Protection</Link>
        </div>

        {/* Bottom Legal Text */}
        <p className="text-xs text-gray-600 leading-relaxed text-center sm:text-left">
          © 2025 LegalClaim. All rights reserved. LegalClaim provides general legal information for educational purposes only and does not constitute legal advice. Materials on this site may not be reproduced, distributed, transmitted, cached, or otherwise used without prior written permission. LegalClaim may earn a commission through partner links.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
