"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{
        background: isScrolled
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(142, 179, 225, 0.1)",
      }}
    >
      {/* Animated glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(90deg, transparent, #8EB3E1, #31487A, #8EB3E1, transparent)",
          opacity: isScrolled ? 1 : 0,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Mist Medical Management Logo"
                width={200}
                height={60}
                className="h-12 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <a
              href="#who-we-are"
              className="relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group"
              style={{ color: "#1D2E50" }}
            >
              <span className="relative z-10">Who We Are</span>
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: "rgba(142, 179, 225, 0.1)" }}
              ></div>
            </a>
            <a
              href="#what-we-do"
              className="relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group"
              style={{ color: "#1D2E50" }}
            >
              <span className="relative z-10">What We Do</span>
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: "rgba(142, 179, 225, 0.1)" }}
              ></div>
            </a>
            <a
              href="#our-portfolio"
              className="relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group"
              style={{ color: "#1D2E50" }}
            >
              <span className="relative z-10">Our Portfolio</span>
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: "rgba(142, 179, 225, 0.1)" }}
              ></div>
            </a>
            <a
              href="#contact"
              className="relative ml-2 px-6 py-2.5 rounded-xl font-bold overflow-hidden group"
              style={{ color: "#FFFFFF" }}
            >
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #8EB3E1 0%, #31487A 100%)",
                }}
              ></div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)",
                }}
              ></div>
              <span className="relative z-10 flex items-center gap-2">
                Contact
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: isMenuOpen
                ? "linear-gradient(135deg, #8EB3E1 0%, #31487A 100%)"
                : "rgba(142, 179, 225, 0.1)",
              border: "1px solid rgba(142, 179, 225, 0.2)",
            }}
          >
            <svg
              className={`w-6 h-6 transition-all duration-300 ${
                isMenuOpen ? "text-white rotate-90" : ""
              }`}
              style={{ color: isMenuOpen ? "#FFFFFF" : "#31487A" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="rounded-2xl p-4 space-y-2"
            style={{
              background: "rgba(142, 179, 225, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(142, 179, 225, 0.1)",
            }}
          >
            <a
              href="#who-we-are"
              className="block px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              style={{
                color: "#1D2E50",
                background: "rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8EB3E1" }}
                ></div>
                Who We Are
              </div>
            </a>
            <a
              href="#what-we-do"
              className="block px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              style={{
                color: "#1D2E50",
                background: "rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8EB3E1" }}
                ></div>
                What We Do
              </div>
            </a>
            <a
              href="#our-portfolio"
              className="block px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              style={{
                color: "#1D2E50",
                background: "rgba(255, 255, 255, 0.5)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8EB3E1" }}
                ></div>
                Our Portfolio
              </div>
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #8EB3E1 0%, #31487A 100%)",
                color: "#FFFFFF",
                boxShadow: "0 4px 15px rgba(142, 179, 225, 0.3)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
