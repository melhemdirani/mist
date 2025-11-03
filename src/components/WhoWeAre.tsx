import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #D9E1F1 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #8EB3E1 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full mb-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(142, 179, 225, 0.15) 0%, rgba(217, 225, 241, 0.15) 100%)",
              border: "1px solid rgba(142, 179, 225, 0.3)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#8EB3E1" }}
            ></div>
            <span
              className="text-sm font-semibold tracking-wide uppercase"
              style={{ color: "#1D2E50" }}
            >
              Our Story
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "#1D2E50" }}
          >
            Who We Are
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "rgba(29, 46, 80, 0.7)" }}
          >
            A leading medical management company dedicated to transforming
            healthcare through innovative solutions and strategic partnerships.
          </p>
        </div>

        {/* Team Image Section */}
        <div className="mb-20">
          <div className="relative group">
            <div
              className="absolute -inset-1 rounded-3xl opacity-50 blur-lg group-hover:opacity-75 transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #8EB3E1, #31487A)",
              }}
            ></div>
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 25px 50px rgba(29, 46, 80, 0.15)" }}
            >
              <Image
                src="/team.jpg"
                alt="Mist Medical Management Team"
                width={1200}
                height={600}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Our Dedicated Team</h3>
                <p className="text-lg opacity-90">
                  Committed to excellence in healthcare management
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {/* About Us Card */}
          <div className="group relative">
            <div
              className="absolute -inset-0.5 rounded-3xl opacity-50 blur group-hover:opacity-75 transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #8EB3E1, #D9E1F1)",
              }}
            ></div>

            <div
              className="relative bg-white rounded-3xl p-8 transition-all duration-300 group-hover:scale-105"
              style={{ boxShadow: "0 20px 50px rgba(29, 46, 80, 0.1)" }}
            >
              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
                  }}
                ></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>

              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1D2E50" }}
              >
                About Us
              </h3>
              <p
                className="leading-relaxed mb-6"
                style={{ color: "rgba(29, 46, 80, 0.7)" }}
              >
                Mist Medical Management was founded with a vision to
                revolutionize healthcare delivery through comprehensive medical
                center management, advanced diagnostic services, and innovative
                digital health solutions.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span className="text-sm" style={{ color: "#1D2E50" }}>
                    Established track record in healthcare management
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span className="text-sm" style={{ color: "#1D2E50" }}>
                    Commitment to excellence and innovation
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span className="text-sm" style={{ color: "#1D2E50" }}>
                    Patient-centered approach to healthcare
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Card */}
          <div className="group relative">
            <div
              className="absolute -inset-0.5 rounded-3xl opacity-50 blur group-hover:opacity-75 transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #31487A, #8EB3E1)",
              }}
            ></div>

            <div
              className="relative bg-white rounded-3xl p-8 transition-all duration-300 group-hover:scale-105"
              style={{ boxShadow: "0 20px 50px rgba(29, 46, 80, 0.1)" }}
            >
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
                  }}
                ></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1D2E50" }}
              >
                Our Leadership
              </h3>
              <p
                className="leading-relaxed mb-6"
                style={{ color: "rgba(29, 46, 80, 0.7)" }}
              >
                Our leadership team brings together decades of experience in
                healthcare management, medical technology, and strategic
                business development to drive innovation and growth.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span className="text-sm" style={{ color: "#1D2E50" }}>
                    Experienced healthcare executives
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span className="text-sm" style={{ color: "#1D2E50" }}>
                    Medical professionals and researchers
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span className="text-sm" style={{ color: "#1D2E50" }}>
                    Strategic business leaders
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Governance Card */}
          <div className="group relative">
            <div
              className="absolute -inset-0.5 rounded-3xl opacity-50 blur group-hover:opacity-75 transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #1D2E50, #31487A)",
              }}
            ></div>

            <div
              className="relative bg-white rounded-3xl p-8 transition-all duration-300 group-hover:scale-105"
              style={{ boxShadow: "0 20px 50px rgba(29, 46, 80, 0.1)" }}
            >
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
                  }}
                ></div>
                <svg
                  className="w-8 h-8 text-white relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#1D2E50" }}
              >
                Governance
              </h3>
              <p
                className="leading-relaxed mb-6"
                style={{ color: "rgba(29, 46, 80, 0.7)" }}
              >
                We maintain the highest standards of corporate governance,
                regulatory compliance, and ethical practices to ensure trust and
                transparency in all our operations.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span className="text-sm" style={{ color: "#1D2E50" }}>
                    Regulatory compliance and quality assurance
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span className="text-sm" style={{ color: "#1D2E50" }}>
                    Transparent reporting and accountability
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#8EB3E1" }}
                  ></div>
                  <span className="text-sm" style={{ color: "#1D2E50" }}>
                    Ethical business practices
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="group relative">
            <div className="absolute -inset-1 rounded-3xl opacity-75 blur-xl transition-all duration-500 group-hover:opacity-100"></div>

            <div
              className="relative rounded-3xl p-10 text-center transition-all duration-500 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
              }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#8EB3E1" }}
              >
                <svg
                  className="w-10 h-10"
                  style={{ color: "#1D2E50" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#D9E1F1" }}
              >
                To revolutionize healthcare delivery through innovative medical
                management solutions, advanced diagnostic services, and
                strategic partnerships that improve patient outcomes and
                healthcare efficiency.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative">
            <div className="absolute -inset-1 rounded-3xl opacity-75 blur-xl transition-all duration-500 group-hover:opacity-100"></div>

            <div
              className="relative rounded-3xl p-10 text-center transition-all duration-500 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)",
              }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <svg
                  className="w-10 h-10"
                  style={{ color: "#1D2E50" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-white leading-relaxed">
                To be the leading medical management company in the region,
                setting new standards for healthcare excellence, innovation, and
                patient care through our comprehensive suite of services and
                strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
