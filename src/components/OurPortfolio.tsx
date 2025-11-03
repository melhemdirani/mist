export default function OurPortfolio() {
  const portfolioCategories = [
    {
      title: "Clinics & Healthcare Partners",
      description:
        "Strategic partnerships with leading medical centers and healthcare providers across the region.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      items: [
        "Multi-specialty medical centers",
        "Primary care clinic networks",
        "Specialized treatment facilities",
        "Ambulatory surgical centers",
      ],
      stats: { number: "25+", label: "Partner Clinics" },
      gradient: "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
    },
    {
      title: "Genetics & Laboratories",
      description:
        "State-of-the-art genetic testing facilities and clinical laboratories with advanced diagnostic capabilities.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      items: [
        "Genomic sequencing laboratories",
        "Molecular diagnostics centers",
        "Genetic counseling services",
        "Research collaboration hubs",
      ],
      stats: { number: "15+", label: "Laboratory Partners" },
      gradient: "linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)",
    },
    {
      title: "Diagnostics & Imaging Centers",
      description:
        "Advanced imaging and diagnostic facilities providing comprehensive medical testing services.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      items: [
        "MRI and CT imaging centers",
        "Digital radiography facilities",
        "Ultrasound diagnostic centers",
        "Cardiac imaging specialists",
      ],
      stats: { number: "12+", label: "Imaging Centers" },
      gradient: "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
    },
    {
      title: "Digital Ventures & Innovation Platforms",
      description:
        "Cutting-edge digital health solutions and technology platforms transforming healthcare delivery.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      items: [
        "Telemedicine platforms",
        "AI-powered diagnostic tools",
        "Healthcare mobile applications",
        "Electronic health record systems",
      ],
      stats: { number: "8+", label: "Digital Solutions" },
      gradient: "linear-gradient(135deg, #31487A 0%, #8EB3E1 100%)",
    },
    {
      title: "Strategic Investments & Partnerships",
      description:
        "Strategic investments in healthcare innovation and partnerships driving industry advancement.",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      items: [
        "Healthcare technology startups",
        "Medical device companies",
        "Pharmaceutical partnerships",
        "Research institution collaborations",
      ],
      stats: { number: "20+", label: "Strategic Partners" },
      gradient: "linear-gradient(135deg, #1D2E50 0%, #31487A 100%)",
    },
  ];

  return (
    <section
      id="our-portfolio"
      className="relative py-32 bg-white overflow-hidden"
    >
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
              Our Network
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "#1D2E50" }}
          >
            Our Portfolio
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "rgba(29, 46, 80, 0.7)" }}
          >
            A comprehensive network of healthcare partnerships and investments
            spanning the entire medical ecosystem, from clinical care to
            cutting-edge innovation.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="space-y-12 mb-20">
          {portfolioCategories.map((category, index) => (
            <div key={index} className="group relative">
              <div
                className="absolute -inset-1 rounded-3xl opacity-0 blur-lg group-hover:opacity-30 transition-all duration-500"
                style={{ background: category.gradient }}
              ></div>

              <div
                className="relative bg-white rounded-3xl p-8 lg:p-10 transition-all duration-300"
                style={{ boxShadow: "0 20px 60px rgba(29, 46, 80, 0.08)" }}
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Icon & Stats */}
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                      <div
                        className="absolute inset-0"
                        style={{ background: category.gradient }}
                      ></div>
                      <div className="relative z-10 text-white">
                        {category.icon}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div
                        className="text-5xl font-bold mb-2"
                        style={{ color: "#1D2E50" }}
                      >
                        {category.stats.number}
                      </div>
                      <div
                        className="text-sm font-medium uppercase tracking-wide"
                        style={{ color: "#8EB3E1" }}
                      >
                        {category.stats.label}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2">
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ color: "#1D2E50" }}
                    >
                      {category.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed mb-6"
                      style={{ color: "rgba(29, 46, 80, 0.7)" }}
                    >
                      {category.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: "#8EB3E1" }}
                          ></div>
                          <span
                            className="text-sm"
                            style={{ color: "#1D2E50" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="relative group">
          <div
            className="absolute -inset-1 rounded-3xl opacity-75 blur-2xl transition-all duration-500 group-hover:opacity-100"
            style={{
              background: "linear-gradient(135deg, #1D2E50, #31487A, #8EB3E1)",
            }}
          ></div>

          <div
            className="relative rounded-3xl p-12"
            style={{
              background:
                "linear-gradient(135deg, #1D2E50 0%, #31487A 50%, #8EB3E1 100%)",
            }}
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">
                Portfolio Impact
              </h3>
              <p className="text-xl" style={{ color: "#D9E1F1" }}>
                Measurable outcomes across our healthcare network
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="group/stat">
                <div
                  className="text-5xl font-bold mb-3 transition-all duration-300 group-hover/stat:scale-110"
                  style={{ color: "#D9E1F1" }}
                >
                  500K+
                </div>
                <div className="text-sm uppercase tracking-wide text-white font-medium">
                  Patients Served Annually
                </div>
              </div>
              <div className="group/stat">
                <div
                  className="text-5xl font-bold mb-3 transition-all duration-300 group-hover/stat:scale-110"
                  style={{ color: "#D9E1F1" }}
                >
                  98%
                </div>
                <div className="text-sm uppercase tracking-wide text-white font-medium">
                  Partner Satisfaction Rate
                </div>
              </div>
              <div className="group/stat">
                <div
                  className="text-5xl font-bold mb-3 transition-all duration-300 group-hover/stat:scale-110"
                  style={{ color: "#D9E1F1" }}
                >
                  24/7
                </div>
                <div className="text-sm uppercase tracking-wide text-white font-medium">
                  Network Support
                </div>
              </div>
              <div className="group/stat">
                <div
                  className="text-5xl font-bold mb-3 transition-all duration-300 group-hover/stat:scale-110"
                  style={{ color: "#D9E1F1" }}
                >
                  15+
                </div>
                <div className="text-sm uppercase tracking-wide text-white font-medium">
                  Countries Covered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
