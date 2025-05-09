"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";


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
    <header
      className={`w-full fixed top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-[1440px] mx-auto w-full">
        {/* Before Scroll Layout */}
        {!isScrolled && (
          <div className="flex flex-col text-black items-center py-4">
            <Link href="/">
              <Image src="/logo-legal.png" alt="Logo" width={190} height={130} />
            </Link>
            <div className="w-full flex justify-center mt-8  px-6">
              <ul className="flex space-x-8 font-bold text-md  tracking-wide">
                <li>
                  <Link href="/personalinjury" className="hover:text-red-600">
                    Personal Injury
                  </Link>
                </li>
                <li>
                  <Link href="/classaction" className="hover:text-red-600">
                    Class Action Lawsuits
                  </Link>
                </li>
                <li>
                  <Link href="/medicalclaims" className="hover:text-red-600">
                    Medical Claims
                  </Link>
                </li>
                <li>
                  <Link href="/consumer" className="hover:text-red-600">
                    Consumer Protection
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* After Scroll Layout */}
        {isScrolled && (
          <div className="flex max-w-7xl mx-auto items-center justify-between py-5 px-6">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/logo-legal.png" alt="Logo" width={150} height={100} />
              </Link>
            </div>

            {/* Right: Nav + Social Icons */}
            <div className="flex items-center mt-2 space-x-8">
              <ul className="flex space-x-8 text-md text-black font-bold tracking-wide">
                <li>
                  <Link href="/personalinjury" className="hover:text-red-600">
                    Personal Injury
                  </Link>
                </li>
                <li>
                  <Link href="/classaction" className="hover:text-red-600">
                    Class Action Lawsuits
                  </Link>
                </li>
                <li>
                  <Link href="/medicalclaims" className="hover:text-red-600">
                    Medical Claims
                  </Link>
                </li>
                <li>
                  <Link href="/consumer" className="hover:text-red-600">
                    Consumer Protection
                  </Link>
                </li>
              </ul>

              
            </div>
          </div>
        )}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden px-4 py-3 flex items-center justify-between">
        <div className="text-2xl bg-black text-white p-1 rounded" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        <Link href="/">
          <Image src="/logo-legal.png" alt="Logo" width={140} height={100} />
        </Link>
        
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="lg:hidden text-black flex flex-col font-bold items-center space-y-4 pt-3 pb-6 text-base tracking-wide">
          <li>
            <Link href="/personalinjury" onClick={handleCloseMenu} className="hover:text-red-600">
              Personal Injury
            </Link>
          </li>
          <li>
            <Link href="/classaction" onClick={handleCloseMenu} className="hover:text-red-600">
              Class Action Lawsuits
            </Link>
          </li>
          <li>
            <Link href="/medicalclaims" onClick={handleCloseMenu} className="hover:text-red-600">
              Medical Claims
            </Link>
          </li>
          <li>
            <Link href="/consumer" onClick={handleCloseMenu} className="hover:text-red-600">
              Consumer Protection
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
