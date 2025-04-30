"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-[1440px] mx-auto w-full">
        {/* Before Scroll Layout */}
        {!isScrolled && (
          <div className="flex flex-col text-black  items-center py-4">
            <Link href="/">
              <Image src="/logo.webp" alt="Logo" width={180} height={120} />
            </Link>
            <div className="w-full flex justify-between items-center  mt-8 px-6">
              <ul className="flex space-x-8 text-md font-medium ml-[520px] tracking-wide">
                <li><Link href="/etfs" className="hover:text-red-600 ">ETFS</Link></li>
                <li><Link href="/finance" className="hover:text-red-600">FINANCE</Link></li>
                <li><Link href="/stock" className="hover:text-red-600">STOCK</Link></li>
                <li><Link href="/trading" className="hover:text-red-600">TRADING</Link></li>
              </ul>
              <div className="flex items-center space-x-4 text-xl">
                <a href="#" className="text-black hover:text-red-600"><FaFacebookF /></a>
                <a href="#" className="text-black hover:text-red-600"><FaTwitter /></a>
                <a href="#" className="text-black hover:text-red-600"><FaInstagram /></a>
              </div>
            </div>
          </div>
        )}

{/* After Scroll Layout */}
{isScrolled && (
  <div className="flex max-w-7xl mx-auto items-center justify-between py-5 px-6 relative">
    {/* Left: Logo */}
    <div className="flex-shrink-0">
      <Link href="/">
        <Image src="/logo.webp" alt="Logo" width={150} height={100} />
      </Link>
    </div>

    {/* Center: Nav links */}
    <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-md text-black font-medium tracking-wide">
      <li><Link href="/etfs" className="hover:text-red-600">ETFS</Link></li>
      <li><Link href="/finance" className="hover:text-red-600">FINANCE</Link></li>
      <li><Link href="/stock" className="hover:text-red-600">STOCK</Link></li>
      <li><Link href="/trading" className="hover:text-red-600">TRADING</Link></li>
    </ul>

    {/* Right: Social icons */}
    <div className="flex items-center space-x-4 text-xl">
      <a href="#" className="text-black hover:text-red-600"><FaFacebookF /></a>
      <a href="#" className="text-black hover:text-red-600"><FaTwitter /></a>
      <a href="#" className="text-black hover:text-red-600"><FaInstagram /></a>
    </div>
  </div>
)}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden px-4 py-3 flex items-center justify-between">
        <div className="text-2xl bg-black" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        <Link href="/">
          <Image src="/logo.webp" alt="Logo" width={140} height={100} />
        </Link>
        <div className="flex items-center space-x-3 text-xl">
          <a href="#" className="text-black hover:text-red-600"><FaFacebookF /></a>
          <a href="#" className="text-black hover:text-red-600"><FaTwitter /></a>
          <a href="#" className="text-black hover:text-red-600"><FaInstagram /></a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="lg:hidden text-black flex flex-col items-center space-y-4 pt-3 pb-6 text-base tracking-wide">
          <li><Link href="/etfs" onClick={handleCloseMenu} className="hover:text-red-600">ETFS</Link></li>
          <li><Link href="/finance" onClick={handleCloseMenu} className="hover:text-red-600">FINANCE</Link></li>
          <li><Link href="/stock" onClick={handleCloseMenu} className="hover:text-red-600">STOCK</Link></li>
          <li><Link href="/trading" onClick={handleCloseMenu} className="hover:text-red-600">TRADING</Link></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
