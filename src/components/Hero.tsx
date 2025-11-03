"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#D9E1F1 1px, transparent 1px), linear-gradient(to right, #D9E1F1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Animated Badge */}
            {/* <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(29, 46, 80, 0.1) 0%, rgba(142, 179, 225, 0.1) 100%)",
                border: "1px solid rgba(142, 179, 225, 0.3)",
                boxShadow: "0 4px 24px rgba(142, 179, 225, 0.2)",
              }}
            >
              <div className="relative">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#8EB3E1" }}
                ></div>
                <div
                  className="absolute inset-0 w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: "#8EB3E1" }}
                ></div>
              </div>
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#1D2E50" }}
              >
                Leading Healthcare Innovation
              </span>
            </div> */}

            {/* Main Heading with Gradient */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-5xl font-black leading-[1.1]">
                <span className="block" style={{ color: "#1D2E50" }}>
                  Excellence in
                </span>
                <span className="block bg-clip-text text-[#8EB3E1] mt-2">
                  Medical Management
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-xl leading-relaxed max-w-xl"
              style={{ color: "rgba(29, 46, 80, 0.8)" }}
            >
              Leading healthcare transformation through innovative medical
              center management, cutting-edge genetic testing, and comprehensive
              diagnostic services across the region.
            </p>

            {/* CTA Buttons with Glow Effect */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#what-we-do"
                className="group relative px-8 py-4 rounded-xl font-bold text-white text-center overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
                }}
              >
                <span className="relative z-10">Explore Our Services</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)",
                  }}
                ></div>
              </a>
              <a
                href="#our-portfolio"
                className="group px-8 py-4 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105"
                style={{
                  color: "#1D2E50",
                  background: "rgba(142, 179, 225, 0.15)",
                  border: "2px solid rgba(142, 179, 225, 0.5)",
                }}
              >
                View Portfolio
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  style={{ color: "#8EB3E1" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#1D2E50" }}
                >
                  ISO Certified
                </span>
              </div>
              <div
                className="h-4 w-px"
                style={{ backgroundColor: "rgba(29, 46, 80, 0.2)" }}
              ></div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  style={{ color: "#8EB3E1" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#1D2E50" }}
                >
                  50+ Partners
                </span>
              </div>
              <div
                className="h-4 w-px"
                style={{ backgroundColor: "rgba(29, 46, 80, 0.2)" }}
              ></div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  style={{ color: "#8EB3E1" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#1D2E50" }}
                >
                  24/7 Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Futuristic Logo Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Border */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-75 blur-lg transition-all duration-1000 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, #8EB3E1, #31487A, #8EB3E1)",
                  backgroundSize: "200% 200%",
                  animation: "gradient 4s ease infinite",
                }}
              ></div>

              {/* Card */}
              <div
                className="relative bg-white rounded-3xl p-12 transition-all duration-500 group-hover:scale-105"
                style={{
                  boxShadow: "0 25px 60px rgba(29, 46, 80, 0.2)",
                  border: "1px solid rgba(217, 225, 241, 0.5)",
                }}
              >
                {/* Corner Accents */}
                <div
                  className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 rounded-tl-2xl transition-all duration-300"
                  style={{ borderColor: "#8EB3E1" }}
                ></div>
                <div
                  className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 rounded-br-2xl transition-all duration-300"
                  style={{ borderColor: "#31487A" }}
                ></div>

                {/* Logo */}
                <div className="relative z-10">
                  <Image
                    src="/team.jpg"
                    alt="Mist Medical Management"
                    width={500}
                    height={250}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <div
                className="absolute -bottom-10 -left-6 px-6 py-4 rounded-2xl backdrop-blur-xl"
                style={{
                  background: "rgba(29, 46, 80, 0.95)",
                  boxShadow: "0 20px 40px rgba(29, 46, 80, 0.3)",
                  border: "1px solid rgba(142, 179, 225, 0.2)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "#ffffff" }}
                  >
                    100K+
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">
                      Tests Processed
                    </div>
                    <div className="text-xs" style={{ color: "#D9E1F1" }}>
                      Annual Volume
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-10 -right-6 px-6 py-4 rounded-2xl backdrop-blur-xl"
                style={{
                  background: "rgba(142, 179, 225, 0.95)",
                  boxShadow: "0 20px 40px rgba(142, 179, 225, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "#ffffff" }}
                  >
                    10+
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold"
                      style={{ color: "#ffffff" }}
                    >
                      Years
                    </div>
                    <div className="text-xs" style={{ color: "#ffffff" }}>
                      Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#who-we-are"
        className="absolute bottom-4 left-1/2 transform -translate-x-2 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span
          className="text-xs  font-bold tracking-wider"
          style={{ color: "#1D2E50" }}
        >
          SCROLL
        </span>
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 group-hover:border-opacity-100 transition-all"
          style={{ borderColor: "rgba(29, 46, 80, 0.3)" }}
        >
          <div
            className="w-1 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#8EB3E1" }}
          ></div>
        </div>
      </a>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
